import {body} from 'express-validator';

export const addMedicineValidation =[
    body("name", "Medicine name is required").not().isEmpty(),
];
export const forgotPasswordValidation =[
    body("email", "Email is required").not().isEmpty(),
];
export const resetPasswordValidation =[
    body("password", "Password is required").not().isEmpty(),
    body("password","Password should contain atleast 8 characters, uppercase and lowercase letters, numbers, and symbols").isStrongPassword()
];
export const otpValidation =[
    body("otp", "Otp must be provided").not().isEmpty(),
];
export const testValidations = [
    body("name", "Medicine name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
];

export const signUpValidations = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];

export const signInValidations = [
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Invalid password").isStrongPassword()
];