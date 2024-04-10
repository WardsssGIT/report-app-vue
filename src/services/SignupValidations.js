import Validations from './Validations';

export default class SignupValidations {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let errors = [];

        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }

        //password Validations
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'password should be of 6 characters';
        }

        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'INVALID_LOGIN_CREDENTIALS':
                return 'Invalid email/password'
            default:
                return 'An error occured. Please try again later.'
        }
    }
}