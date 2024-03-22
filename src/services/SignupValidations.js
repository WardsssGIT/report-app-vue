import Validations from "./Validations";

export default class SignupValidations {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkValidation(){
        let errors = [];

        if (!Validations.checkName(this.name)){
            errors['name'] = 'Invalid Name';
        }

        if (!Validations.checkEmail(this.email)){
            errors['email'] = 'Invalid Email';
        }

        if (!Validations.minLength(this.password, 6)){
            errors['password'] = 'Password should be correct';
        }
        return errors;
    }    
}