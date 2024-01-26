# TO RUN THE PROJECT:

1. run npm/yarn install on root level
2. run yarn dev

# HOW IT WORKS:

Project is seperated in two folders, backend and frontend.
The backend folder contains all the files for Strapi and nothing here should be changed manually.
The frontend folder contains all the logic for the next.js frontend App that will display the data managed by Strapi.

# TO CREATE A NEW LANDING PAGE

1. Navigate to Strapi admin Content Manager
2. Click the Page Content Type
3. Create new Entry
4. Enter all the details for the Landing Page

# TO CREATE A NEW COMPONENT

1. Navigate to Strapi admin Content-Type Builder
2. At the bottom find Create new component
3. Enter all the details for your component(fields, media, etc...)

To connect the component to a landing page (On Strapi Admin):

1. Go to Page in Content-Type Builder
2. Under contentSections add your new component.
3. Go to the landing page you want to add the component to in the Content Manager
4. Under contentSections click on Add component to contentSections
5. Enter all the details that you want to be included in your new component

To connect the component to a landing page (In Code):

1. Create your new Component .tsx file in the /frontend/src/app/[lang]/components folder
2. In the section-renderer.tsx file add a new case for the switch where the case name is the name generated for component(kebab-case). You can find this name in the url of your component in the Strapi admin, for example http://localhost:1337/admin/plugins/content-type-builder/component-categories/sections/sections.blue-box-with-image, the last part sections.blue-box-with-image is the case name. Under your component case return the .tsx component you created.
3. If your component contains and fields that are non-primary, for example if it has media files, relationships to other components, etc... you will need to populate them in the page-populate-middleware.js file. At the moment the basic types like image, images are populated, so if you need your component to have a single image then name it [image] and it will be populated, or if u need more images than name the fields [images] in the strapi admin. Any other relationships will need to be added to the page-populate-middleware.js file. For example, for the BlueBoxWithImage component, we have a relationship that enables us to add one or more BlueBoxWithImageItem. On Strapi admin in the BlueBoxWithImage component we have a field blueBoxItems which holds the relationship, accordingly in the page-populate-middleware.js file we needed to add the following code:

   blueBoxItems: {
   populate: {
   image: {
   fields: ["url", "alternativeText", "caption", "width", "height"],
   },
   },
   },

# TO CREATE AN INTERNATIONALIZATION VERSION OF A LANDING PAGE:

1. In the Strapi admin under settings>internationalization check if the locale you need to add content in is added
2. Navigate to Strapi admin Content Manager
3. Click the Page Content Type
4. Select the page you want to internationalizate
5. On the right side under locales you will find the locale you want to enter content in.
6. Create your page in the preffered language, keep in mind that you need to add the components that are featured in that landing page again for the internationalized version.

# GENERATE API TOKENS:

At the moment the .env fields are deleted from .gitignore meaning they are commited to the remote repo, so you have access to the already generated tokens. If you need to generate a new token, you can do that in Strapi admin settings>API Tokens.

# DATABASE

Strapi can use different databases like sqlite, postgresql, mysql etc...
If you need to connect your own database check database.js file. In there you will find that if DATABASE_FILENAME is not provided in the .env file in the backend folder than the .tmp/data.db is used. So if you want to use your own database enter the information in the .env like DATABASE_CLIENT, DATABASE_HOST, DATABASE_PORT, DATABASE_FILENAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_SSL.

We are using mysql database, you need to set it up in .env file in backend folder and once set up import the local file from backend folder using command [yarn strapi import -f export_20240126145456.tar.gz]
