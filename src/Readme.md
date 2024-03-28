# **Button Component Documentation `<Button/>`**

**Description:**

* This reusable Button component renders a visually appealing and interactive button element.
* It can be easily integrated into your React applications to provide user interaction and navigation.

**Props:**

##### * Prop_name:text

* Description: The text content to be displayed on the Button

**Styling:**

* The component utilizes predefined CSS classes (`p-2`, `w-full`, `flex`, `mx-auto`, `text-white`, `bg-indigo-500`, `border-0`, `py-2`, `px-8`, `focus:outline-none`, `hover:bg-indigo-600`, `rounded`, and `text-lg`) for consistent and customizable styling.
* You can adjust these classes or add your own custom styles to tailor the button's appearance to your application's design.

**Examples:**

* Basic Button:  `<Button text="Click Me" />`

**Custom Button Styles:**

<Button text="submit" styles={{backgroundColor:"red",padding:"10px 12px"}}

<Button text="Submit" styles={{ backgroundColor: 'red', padding: '10px 20px' }} />

# Card component `<Card/>`

This document describes the `Card` component, a reusable component for displaying information in a card format.

### Usage

Import the `Card` component from the file where you want to use it:

import Card from './Card';

Then, use the `Card` component and pass the title  and image prop  to specify the title of the card and image to be display{}:

`<Card title="Web Development" img={card}/>`

You can also pass description as props and use in card component:

`<Card title="Web Development" description="...." />`

### Additional Information

**Styling:**

The `Card` component uses basic styling classes. You can customize the appearance using CSS by targeting these classes:

* `.text-gray-600`: Sets the text color to a grayish tone.
* `.body-font`: Applies a specific font style.
* `.border-2`: Creates a border around the card.
* `.border-gray-200`: Sets the border color to a light gray.
* `.rounded-lg`: Applies rounded corners to the card.
* And many more...

### Additional Information

* The `Card` component uses a placeholder image (`https://dummyimage.com/720x400`). You should replace this with your own image in the `src` attribute of the `<img>` tag within the component.
* The component includes basic content sections like title, description, and a link. You can customize this content to fit your needs.



# **Contact Component**

This React component renders a contact form with standard contact information fields and social media links.

import Contact from './Contact';


**Usage**

`<Contact />`

Props

This component does not accept any props.


The Contact component renders a form containing the following fields:

* Name
* Email
* Message


**CSS Classes**

This component uses Tailwind CSS classes for styling. You can customize the appearance of the component by overriding these classes in your own stylesheet.


# **Hero Component**


This React component renders a hero section with a title, description, and a call-to- action button.

import Hero from './Hero'; 

you can change the path according to you project structure
