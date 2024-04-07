from ultralytics import YOLO
import argparse
import io
from PIL import Image
import datetime
import torch
import cv2
import numpy as np
import tensorflow as tf
from re import DEBUG, sub
from ultralytics.solutions import ai_gym

from flask import Flask, render_template, request, redirect, url_for, send_file, Response
from werkzeug.utils import secure_filename, send_from_directory
import os
import subprocess
from subprocess import Popen
import re
import requests
import time
import glob


app = Flask(__name__)

@app.route("/", methods = ["GET", "POST"])
def file_upload():
    uploads_dir = "/Users/maskeenkaur/FitNest/model/uploads_dir"
    if request.method == "POST":
        if 'file' not in request.files:
            return "No file part in the request", 400
        file = request.files['file']
        if file.filename == '':
            return "No file selected", 400
        filename = secure_filename(file.filename)
        upload_path = os.path.join(uploads_dir, filename)
        file.save(upload_path)
        # Process the uploaded file
        processing_result = predict_img(upload_path)
        return processing_result
    else:
        # Serve the upload form for GET requests
        return '''
            <!doctype html>
            <title>Upload new File</title>
            <h1>Upload a file</h1>
            <form method=post enctype=multipart/form-data>
              <input type=file name=file>
              <input type=submit value=Upload>
            </form>
            '''


def predict_img(filepath):
    video_path = filepath
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        return "Failed to open video file"

    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter('output.mp4', fourcc, fps, (frame_width, frame_height))
    model = YOLO("yolov8n-pose.pt")
    gym_object = ai_gym.AIGym()  # init AI GYM module
    gym_object.set_args(line_thickness=2,
                    view_img=True,
                    pose_type="pushup",
                    kpts_to_check=[6, 8, 10])
    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Assuming your YOLO model's `track` method is replaced with correct usage
        # For demonstration, let's assume `model.detect` is the correct method
        frame_count += 1
        results = model.track(frame, verbose=False, save = True)  # Tracking recommended
        frame = gym_object.start_counting(frame, results, frame_count)
        # TODO: Process your frame based on `results`
        # For simplicity, this example directly writes frames without processing.
        out.write(frame)

    cap.release()
    out.release()
    return gym_object.count
    # return video_feed()

    
# def get_frame():
#     folder_path = os.getcwd()
#     mp4_files = 'output.mp4'
#     video = cv2.VideoCapture(mp4_files)
#     while True:
#         success, image = video.read()
#         if not success:
#             break
#         if image is not None and image.size > 0:
#             ret, jpeg = cv2.imencode('jpg', image)
#             yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n')
#         time.sleep(0.1)

# @app.route("/video_feed")
# def video_feed():
#     print("function called")
#     return Response(get_frame(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/<path:filename>')
# def display(filename):
#     folder_path = 'runs/detect'
#     subfolers = [f for f in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, f))]
#     latest_subfolder = max(subfolers, key = lambda x: os.path.getmtime(os.path.join(folder_path, x)))
#     directory = folder_path + '/' + latest_subfolder
#     print("printing directory", directory)
#     files = os.listdir(directory)
#     latest_file = files[0]

#     print(latest_file)

#     filename = os.path.join(folder_path, latest_subfolder, latest_file)

#     file_extension = filename.rsplit('.', 1)[1].lower()

#     environ = request.environ

#     if fi