var students = [ 
    {first_name :  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].first_name + " " + students[i].last_name)
// }

for (var i in students) {
    console.log(students[i].first_name + " " + students[i].last_name)
}

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

for (var name in users.Students) {
    for (var i = 0; )
    console.log(users.Students[i].first_name + " " + users.Students[i].last_name + " " + "11");
}