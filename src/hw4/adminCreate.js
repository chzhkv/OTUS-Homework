export function adminCreate (user) {
    let admin = Object.assign({}, user, { role: 'admin'});
    console.log(admin);

    let { name, role } = admin;
    console.log(name, role);
}