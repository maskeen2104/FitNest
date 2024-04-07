const axios = require('axios');
const cheerio = require('cheerio');

async function fetchEvents() {
  try {
    // Fetch the webpage HTML
    const response = await axios.get('https://community-events.arcteryx.com/');
    const html = response.data;

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Extract event information
    const events = [];

    $('.EventItem').each((index, element) => {
      const title = $(element).find('.EventItem-title').text().trim();
      const date = $(element).find('.EventItem-date').text().trim();
      const location = $(element).find('.EventItem-location').text().trim();
      const description = $(element).find('.EventItem-description').text().trim();

      events.push({ title, date, location, description });
    });

    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

fetchEvents().then(events => {
  console.log(events);
});
