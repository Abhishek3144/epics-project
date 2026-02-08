import React from 'react';

export default function EventsSection({ events }) {
    return (
        <section id="events" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events & Webinars</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                    {events.map(event => (
                        <div key={event.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border-b last:border-b-0">
                            <div>
                                <p className="font-semibold text-lg text-gray-800">{event.title}</p>
                                <p className="text-gray-500"><i className="fas fa-calendar-alt mr-2"></i>{event.date}</p>
                            </div>
                            <a href={event.link} className="mt-4 sm:mt-0 bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">Register Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
