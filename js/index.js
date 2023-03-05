let validation = new JustValidate("#form")

validation
    .addField('#email', [
        {
        rule: 'required',
        },
        {
        rule: 'required',
        },
        {
        rule: 'email',
        },
    ])
    .addField('#password', [
        {
        rule: 'required',
        },
        {
        rule: 'password',
        },
    ])