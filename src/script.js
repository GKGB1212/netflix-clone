// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function createUser(name, email) {
//   // const user = await prisma.user.create({
//   //   data:{
//   //     name,
//   //     email,
//   //     posts:{
//   //       create:{
//   //         title:"GB DDTRAI",
//   //         content:"OMG OMG"
//   //       }
//   //     }
//   // },
//   // });
//   // return user;
//   //get all user
//   const usersWithPosts = await prisma.user.findMany({
//     include: {
//       posts: true,
//     },
//   })
//   console.dir(usersWithPosts, { depth: null })
//   const users = await prisma.post.findMany()
//   console.log(users)
// }

// createUser('John DoeeeEE', 'joCCCChn.eeefgff.doe@example.com')
//   .then(user => console.log(user))
//   .catch(error => console.error(error))
//   .finally(() => prisma.$disconnect());