Great! Now that we have a clear understanding of the app structure, we can move onto Step 5: Design the User Interface.

Given that we're transitioning from a web app to an iOS app, we need to adapt the design to suit a mobile interface and iOS design guidelines. Here's an outline of the UI design for the iOS app based on the functionality we've analyzed:

**1. Main Screen:**

- **Header:** Contains a logo saying "disCALCULATOR". This could be a UILabel with a large, bold font. It will be centered in the top navigation bar.

- **Navigation Links:** Two buttons labeled "Tijd als tekst" and "Tekst als tijd", positioned at the bottom of the screen in a tab bar. These will allow the user to switch between the two main views.

**2. Time as Text View:**

- **Time Input:** Two UIStepper controls for hours and minutes input, each with a UILabel to display the current value.

- **Time Display:** Several UILabels to display the time in different textual formats. This could be placed in a UIScrollView if there's not enough space to display all information at once.

- **Clock Visualization:** A custom UIView that draws a clock face and updates according to the inputted time.

**3. Text as Time View:**

- **Interval and Hour Selection:** Two UIPickerView controls for selecting an interval and an hour value.

- **Time Display:** UILabels to display the calculated early and late times and their corresponding moment of the day.

- **Clock Visualization:** Reuses the custom UIView from the "Time as Text" view.

**4. General UI elements:**

- **Colors:** Use a consistent color scheme across the app. The navigation bar, tab bar, and clock face can use the primary color, while text can be a contrasting color.

- **Fonts:** iOS has its own system fonts (San Francisco), but you can also import custom fonts if needed. The app logo may use a larger font size, while the rest of the text can be standard size.

- **Layout:** Use Auto Layout to position and size your UI elements. This ensures that your app looks good on all devices and screen sizes.

You can sketch this design on paper or use a tool like Sketch or Adobe XD to create a more detailed mockup. This design isn't set in stone, and you may find you need to tweak it as you start to build the app.

Creating a mobile app involves various non-code assets that help improve the user experience and make your app stand out. For your disCALCULATOR app, you might need the following:

1. **Icon**: Every app needs an icon. This is what will appear on the user's home screen and in the App Store. The icon should ideally represent the purpose of your app and be appealing and recognizable.

2. **Images**: If you plan to include images in your app, such as for the logo or backgrounds, these need to be designed and included in your assets. Remember that you need to consider different screen resolutions, so images should be provided in @1x, @2x and @3x versions to look sharp on all devices.

3. **Sound Files**: If your app will have any sound effects or background music, you'll need to include these audio files in your project.

4. **Fonts**: iOS uses the San Francisco font by default, but if you want to use any other fonts, you'll need to include them in your project. Make sure you have the rights to use any fonts you include.

5. **Localization Files**: If you plan to support multiple languages, you'll need to include localization files (`.strings` files) for each language.

6. **Launch Screen**: This is the first screen that users see when they open your app. It's usually a simple design that includes your logo and a background.

7. **App Store Assets**: When you submit your app to the App Store, you'll need to provide screenshots of your app, a description, and possibly a preview video. 

Remember, all of these assets should be consistent with the overall branding and design of your app.