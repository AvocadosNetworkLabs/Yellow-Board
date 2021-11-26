# YellowBoard Academy

[Demo](https://www.yellowboard.avocadosnetwork.com)

Welcome to yellowboad academy, where you can test your elementary skills or your children can reinforce their elementary knowledge for school.

## App made whit NodeJS in NextJS

This app was made for School feel free to download the code, this app was developed in NextJs whit api, some static props and MongoDB. DO NOT CHANGE THE PORT

### Get Started

First of all create a .env file that contains the next variable `MONGO_REMOTE=YOUR-MONGODB-CONNECTION/yellowboard`

To start using this app you need to run `yarn start`

in your mongodb shell create an admin user

```javascript
db.users.insert({
  username: 'admin',
  name: 'Admin',
  lastname: '-',
  password: 'admin',
  userType: 'a',
  mail: 'admin@admin',
  url: '/assets/profile/default.png',
  direccion: '-',
  phone: '-',
  birthday: '-',
  sta: 1,
  courses: [],
  updatedAt: {
    $date: '2021-11-13T20:02:22.875Z',
  },
});
```

use this user to login in to the app

Remember to create 2 accounts (teacher, student)

## Screen Shots

#### Login

[Login](https://ibb.co/ZgSgh9m)

#### AdminDashboard

[Menu](https://ibb.co/ScD64rz)
[Users](https://ibb.co/KhBpWHy)
[Course](https://ibb.co/D7tF1LW)

### UserDashboard

[UserProfile](https://ibb.co/9w2jtgT)
[UserCourses](https://ibb.co/DWsyP0F)

### Helpers and Creator

[Mrooboto9819](https://github.com/Mrroboto9819)
[John024x](https://github.com/john024x)
[Nah-22](https://github.com/NaH-22)
[Avocados Network](https://www.avocadosnetwork.com)
