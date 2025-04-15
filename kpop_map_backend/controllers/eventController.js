const Event = require('../models/Event');

exports.getEventsByCity = async (req, res) => {
  try {
    const city = req.query.city;
    const events = await Event.find({ city });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: 'Error creating event' });
  }
};
