Part 1- Demonstrating Flexbox and Grid Layout Methods.
Document Structure:
•	<html>: The root element that wraps the entire HTML document.
•	<head>: Contains metadata such as character set, viewport settings, title, and internal CSS styling.
•	<body>: Contains the content of the webpage, which includes headings, sections, and layout components.
Flexbox Layout:
•	.flex-container: This is a flex container that houses multiple flex items. It uses display: flex to create a flexible layout, and flex-wrap: wrap ensures that items can wrap to new rows when necessary.
•	.flex-item: Each of these represents an individual flex item. They have a set of properties that control their size, position, and appearance:
•	nth-child(2): Aligns the second item at the top using align-self: flex-start.
•	nth-child(3): Uses order: -1 to change the order and make this item appear first.
	nth-child(6): Has a higher z-index to stack it above other items, with a shadow effect to make it stand out.
•	Tooltips: Each flex item has a tooltip that provides additional information when hovered over. This is achieved using absolute positioning and transitions for smooth visibility.
Grid Layout:
•	.grid-container: This is a grid container that uses display: grid to enable a grid layout. It defines dynamic column sizes using grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)), meaning the columns will adjust based on the viewport size.
•	.grid-item: Each of these is a grid item within the grid container:
•	nth-child(2): This item spans 2 columns using grid-column: span 2.
•	nth-child(4): This item spans 2 rows using grid-row: span 2.
•	nth-child(6): This item spans 3 columns using grid-column: span 3.
• nth-child(8): This item spans 3 rows using grid-row: span 3.
•	Tooltips: Similar to the flexbox section, each grid item has a tooltip that appears on hover, providing information about its specific layout properties.
-------------------------------------------------------------------------------------------------------------------------------------------------------------
Part -2. Portfolio using Flexbox and Grid Layout.
Flexbox Layouts
Elements Using Flexbox:
1.	Header (. header):
• Flexbox aligns the logo (your name) on the left and navigation links on the right.
• justify-content: space-between ensures even spacing between elements.
2.	Hero Section (.hero):
• Flexbox aligns the text and image side by side.
• justify-content: space-between ensures proper spacing.
3.	Skills Section (. skills):
•Flexbox wraps the skill items (.skill) into rows.
•flex-wrap: wrap makes the skills responsive and ensures no overflow.
4.	Hobbies Section (#hobbies):
•	Flexbox arranges the hobby blocks in a column with equal spacing (gap: 20px).
5.	Know Me Better Section (. know-me):
•	Flexbox divides the section into two blocks:
•Left block for social media links.
•	Right block for the contact form.
•	gap: 40px ensures proper spacing between the blocks.
6.	Section Content (. section-content):
•Flexbox aligns the left-aligned section title and right-aligned description.

Grid Layouts
Grid layout is used for creating structured, multi-row, and multi-column designs.
Elements Using Grid Layouts:
1.	Projects Section (. projects-grid):
o	Uses a grid to display project cards.
o	grid-template-columns: repeat (3, 1fr) creates three equal columns.
o	gap: 20px ensures even spacing between cards.
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Navigation:-
1)Create a Folder with  mentioned partitions of Part,1,2,3.
2) Place the html codes mentioned in parts in respective files.
3) Run the individual html pages and check the localhosts for final outputs.
For react app.
1) Before setting up the React app, ensure you have the following installed:

Node.js (version 14 or above) - You can check by running node -v in your terminal.
npm (comes with Node.js) - You can check by running npm -v in your terminal.
2)Next, install the required dependencies. Run the following command in your terminal:
npm install
3)An error was encountered while using this command which is as follows.
![Screenshot 2025-01-26 232727](https://github.com/user-attachments/assets/d1421d14-ecbd-4e13-a511-5329658d01b4)
this was later resolved using the command npm install web-vitals.
4) After successful installation of react libraries, the react app is automatically populated in chrome. This created numerous node modules and separate folder called app.js
5) The app.js is modified by elimiateing the code residing in this course action section.
6)All styles and images that are attributed to the part 2 have to be integrated with app.js in the following steps.
7) Post succcessful integration, the react app runs and is successfully launched in the chrome. 


