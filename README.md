# Coding Assignment 12 - Wadia Jara Q.
GitHub repository
## https://github.com/wjaraquesieh/WebComponentLibrary

## Before Running code; Install on windows the following
1. Node.js
2. Yarn
3. Docker Desktop (with WSL2)
4. Git

You can verify the installations with the following commands:

node --version
yarn --version
docker --version
git --version

# Follow the steps to run the program on the terminal of visual studio or in windows command prompt
### Step 1: Install Dependencies
yarn install

### Step 2: Build the Docker Image
docker build -t jara_wadia_coding_assignment12 .

### Step 3: Run the Docker Container
docker run -d -p 8083:8083 --name jara_wadia_coding_assignment12 jara_wadia_coding_assignment12

### Step 4: Access the Application
The application is running on [http://localhost:8083](http://localhost:8083)

### Step 5: Start the Docker Container
docker start jara_wadia_coding_assignment12

## Stopping and Removing the Docker Container
docker stop jara_wadia_coding_assignment12
docker rm jara_wadia_coding_assignment12
