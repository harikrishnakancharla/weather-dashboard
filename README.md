weather-dashboard/
├── README.md              # Project documentation
├── .gitignore             # Files to ignore in Git
├── backend/               # Backend folder
│   ├── app.py             # Main entry point
│   ├── config.py          # Configuration settings
│   ├── requirements.txt   # Python dependencies
│   ├── logs/              # Log files
│   │   └── app.log        # Application logs
│   ├── utils/             # Utility functions
│   │   ├── api_client.py  # Handles API calls to OpenWeatherMap
│   │   └── helpers.py     # Helper functions
│   └── routes/            # Modular routes
│       └── weather_routes.py # Weather-related routes
├── frontend/              # Frontend folder (React app)
│   ├── src/               # React source code
│   │   ├── components/    # Reusable components
│   │   │   ├── Map.js     # Interactive map
│   │   │   ├── WeatherCard.js # Weather display card
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # Entry point
│   ├── package.json       # Node.js dependencies
│   └── public/            # Static assets
└── venv/                  # Virtual environment folder
