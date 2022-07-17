export class LoginCredentials {
    email: string;
    password: string

    constructor() {
        this.email = '';
        this.password = '';
    }

}

export class BrandCreate {
    name: string;
    display_pic: any;
    priority: string;
    active: string;
    category_type: string;
    comment: string;
    discount: string
}