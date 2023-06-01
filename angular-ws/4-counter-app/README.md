# Counter App

The Counter App is a simple web application built with Angular that allows you to increment the hit count for each button and displays the total hits count.

# App Information
The Counter App is a demonstration of a simple counter functionality using Angular. It is built with modern web technologies and follows best practices for Angular development.
This app serves as a starting point for developers who want to learn or explore Angular concepts such as component interaction, event handling, and data binding.

Feel free to explore the code, make modifications, and use it as a foundation for your own projects.

## Features

- Multiple buttons: Each button represents a counter that can be individually incremented.
- Total hits count: The app keeps track of the total hits count across all buttons.
- Reset functionality: You can reset the hit count for individual buttons or all buttons at once.

# Contributing
Contributions to the Counter App are welcome. If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.



## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/praveencloudlab/adm-angular-b1.git
   cd adm-angular-b1/angular-ws/4-counter-app
   npm install


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

UI test cases that you can consider for your Counter App:

Verify that the Counter App loads successfully in the browser.

Open the Counter App URL.
Ensure that the app is rendered without any errors or issues.
Click on a button to increment the hit count.

Identify a button on the page.
Click on the button.
Verify that the hit count for the button increases by 1.
Increment multiple hit counts.

Click on multiple buttons.
Verify that the hit counts for the respective buttons increase accordingly.
Verify the total hits count.

Calculate the expected total hits count by summing up the hit counts of all buttons.
Verify that the displayed total hits count matches the expected value.
Reset the hit count for an individual button.

Click on a button to increment the hit count.
Click the reset button for that particular button.
Verify that the hit count for the button is reset to zero.
Reset all hit counts.

Click on multiple buttons to increment the hit counts.
Click the "Reset All" button.
Verify that all hit counts for the buttons are reset to zero.
Check responsiveness.

Resize the browser window to different screen sizes (desktop, tablet, mobile).
Verify that the Counter App adapts to the screen size and maintains proper layout and functionality.
Perform a complete end-to-end test.

Simulate various user interactions, such as clicking buttons, resetting hit counts, and verifying total hits count.
Verify that the app behaves as expected and all features work correctly.

 ```shell
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonsGeneratorComponent } from './buttons-generator/buttons-generator.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ButtonsGeneratorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the hit count for a button', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    const hitCountElement = fixture.nativeElement.querySelector('h4');
    const initialHitCount = parseInt(hitCountElement.textContent, 10);

    buttonElement.click();
    fixture.detectChanges();

    const updatedHitCount = parseInt(hitCountElement.textContent, 10);

    expect(updatedHitCount).toBe(initialHitCount + 1);
  });

  it('should reset the hit count for an individual button', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    const resetButtonElement = fixture.nativeElement.querySelector('.reset-button');
    const hitCountElement = fixture.nativeElement.querySelector('h4');

    buttonElement.click();
    fixture.detectChanges();

    resetButtonElement.click();
    fixture.detectChanges();

    const resetHitCount = parseInt(hitCountElement.textContent, 10);

    expect(resetHitCount).toBe(0);
  });

  it('should reset all hit counts', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    const resetAllButtonElement = fixture.nativeElement.querySelector('.reset-all-button');
    const hitCountElements = fixture.nativeElement.querySelectorAll('h4');

    buttons.forEach((button) => button.click());
    fixture.detectChanges();

    resetAllButtonElement.click();
    fixture.detectChanges();

    hitCountElements.forEach((hitCountElement) => {
      const resetHitCount = parseInt(hitCountElement.textContent, 10);
      expect(resetHitCount).toBe(0);
    });
  });
});

## Explanation of testing code
In the above code, we use the describe and it functions provided by Jasmine to define test suites and individual test cases. We set up the component fixture and create an instance of the AppComponent for testing.

The test cases cover scenarios such as verifying the creation of the app, incrementing the hit count for a button, resetting the hit count for an individual button, and resetting all hit counts.

Note that this is a simplified example, and you may need to modify the code to fit your specific component structure and requirements. You might also need to import additional testing utilities and configure the TestBed accordingly.

Make sure to have the necessary testing dependencies installed (@types/jasmine, @angular-devkit/build-angular, etc.) and run the tests using a testing framework like Karma or the Angular CLI.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
