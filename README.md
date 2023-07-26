To make the application work correctly with the API, you need to have credits on the OpenAI website (https://labs.openai.com/) since the code is using the DALL-E API. Without sufficient credits, the API requests may be limited or blocked.

# PictoGen - Generate Images using DALL-E API
PictoGen is a web application that allows users to generate images based on prompts using the DALL-E API provided by OpenAI. Users can input a prompt, and the application will create an image related to that prompt using the DALL-E API.

# Prerequisites
Before running this application, you need to ensure you have the following:
 1. Node.js installed (v14 or above).
 2. An API key from OpenAI. You can obtain it by signing up at https://labs.openai.com/.
 3. Sufficient credits on your OpenAI account to use the DALL-E API.
   
# Getting Started
 1. Clone the repository:
   ```bash
   git clone https://github.com/FoulTrip/app_dall-e.git
   cd app_dall-e
   ```
 2. Install dependencies:
   ```bash
   npm install
   ```
 3. Set up environment variables:
   create a '.env.local' file in the root directory of the project and add your OpenAI API key:
   ```makefile
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```
 4. Run the application in development mode:
   ```bash
   npm run dev
   ```
   The application should now be running on http://localhost:3000.

# How to Use
 1. Enter a prompt in the input field and click on the "Create image" button.
 2. The application will use the DALL-E API to generate an image based on the provided prompt.
 3. Once the image is generated, it will be displayed below the input field.
   
   Please note that the functionality of this application is dependent on your OpenAI API credits. If you encounter any issues related to API limitations, please ensure you have enough credits in your OpenAI account.

# Attribution 
The DALL-E API provided by OpenAI powers this application. To learn more about the API and explore other exciting projects, visit the OpenAI website: https://labs.openai.com/
