# AI Photo Editor

This is an AI-powered photo editor built with Next.js and Cloudinary API. It allows users to upload, transform, and apply various AI-driven enhancements such as image fill generation, background removal, and object recoloring. The project utilizes Cloudinary for image storage, transformation, and manipulation, making it a powerful tool for handling advanced image editing tasks.

## Features

- **Upload Image:** Upload your images securely using the Cloudinary API.
- **Generate Fill:** Use AI to generate missing parts of an image.
- **Remove Background:** Automatically remove the background of an image using AI.
- **Recolor Object:** Change the color of specific objects in the image.
- **Authentication:** Secure login using Clerk for user authentication.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Next.js installed
- Node.js installed
- Cloudinary account with an API key and secret
- Clerk account for authentication

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ai-photo-editor.git
   ```

2. Navigate into the project directory:
   ```bash
   cd ai-photo-editor
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your Cloudinary and Clerk credentials:
   ```bash
   # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YourPublishableKey>
    CLERK_SECRET_KEY=<YourSecretKey>

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=<YourCloudName>
    CLOUDINARY_API_KEY=<YourApiKey>
    CLOUDINARY_API_SECRET=<YourApiSecret>

### Running the Project

To start the development server, run the following command:

```bash
npm run dev
```

This will start the app on `http://localhost:3000`.

## Usage

1. Sign in using the provided Clerk authentication.
2. Upload your image to begin editing.
3. Apply transformations, background removal, recoloring, or generate fill using AI-powered tools.
4. Download the final image once satisfied.

## Technologies Used

- **Next.js**: React framework for building server-side rendered applications.
- **Cloudinary**: For image storage, transformation, and AI features.
- **Clerk**: Authentication service for secure user management.
- **Node.js**: Backend JavaScript runtime environment.


