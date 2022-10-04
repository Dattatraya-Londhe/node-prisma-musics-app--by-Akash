import { PrismaClient, Prisma } from "@prisma/client";
import { Console } from "console";
const prisma = new PrismaClient();

async function main() {
  //First User with Account
  // const userInfo: Prisma.UserInfoCreateInput = await prisma.userInfo.create({
  //   data: {
  //     firstName: "Sam",
  //     lastName: "Singh",
  //     email: "samsingh@gmail.com",
  //     phone: "1234567897",
  //     account: {
  //       create: {
  //         password: "MyPassword",
  //         gmailAuth: "gmailAuth1",
  //       },
  //     },
  //   },
  // });
  // console.log(userInfo);

  /////////////////////////////////////////////////////////////////////////////
  // //second User with Account
  // const userInfo: Prisma.UserInfoCreateInput = await prisma.userInfo.create({
  //   data: {
  //     firstName: "Tushar",
  //     lastName: "Roy",
  //     email: "tusharroy@gmail.com",
  //     phone: "1234567897",
  //     account: {
  //       create: {
  //         password: "TusharPassword",
  //         gmailAuth: "gmailAuth2",
  //       },
  //     },
  //   },
  // });
  // console.log(userInfo);

  ////////////////////////////////////////////////////////////////////////////
  //Third User with Account
  // const userInfo: Prisma.UserInfoCreateInput = await prisma.userInfo.create({
  //   data: {
  //     firstName: "Dada",
  //     lastName: "Roy",
  //     email: "dadaroy@gmail.com",
  //     phone: "1234567897",
  //     account: {
  //       create: {
  //         password: "dadaPassword",
  //         gmailAuth: "gmailAuth3",
  //       },
  //     },
  //   },
  // });
  // console.log(userInfo);

  // ///////////////////////////////////////////////////////////
  // //fourth user wih account,artist,Podcasts along with episode
  // const userInfo = await prisma.userInfo.create({
  //   data: {
  //     firstName: "name1",
  //     lastName: "lastname1",
  //     email: "firstemail1@gmail.com",
  //     phone: "1234567897",
  //     account: {
  //       create: {
  //         password: "MyPassword",
  //         gmailAuth: "gmailAuth1",
  //       },
  //     },
  //     artist: {
  //       create: {
  //         monthlyListeners: "June2022",
  //         podcasts: {
  //           create: [
  //             {
  //               name: "xyz",
  //               episode: "First Episode",
  //               studioIdInfo: {
  //                 create: {
  //                   name: "Rahul",
  //                   email: "rahul@gmail.com",
  //                   phone: "985625365",
  //                 },
  //               },
  //               podcastEpisodes: {
  //                 create: [
  //                   {
  //                     episodeName: "Cartoon",
  //                     credits: "{'Hi'}",
  //                   },
  //                   {
  //                     episodeName: "Songs",
  //                     credits: "{'bye'}",
  //                   },
  //                 ],
  //               },
  //             },
  //             {
  //               name: "Mahesh",
  //               episode: "Second Episode",
  //               studioIdInfo: {
  //                 create: {
  //                   name: "Deepak",
  //                   email: "deepak@gmail.com",
  //                   phone: "985625365",
  //                 },
  //               },
  //               podcastEpisodes: {
  //                 create: [
  //                   {
  //                     episodeName: "Cartoon1",
  //                     credits: { key1: "value1" },
  //                   },
  //                   {
  //                     episodeName: "Songs1",
  //                     credits: { key2: "value2" },
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // });

  ///////////////////////////////////////////////////////////
  //fifth user wih account,artist,Podcasts along with episode
  // const userInfo = await prisma.userInfo.create({
  //   data: {
  //     firstName: "Sammer",
  //     lastName: "Choughule",
  //     email: "sameerchoughele@gmail.com",
  //     phone: "1234567897",
  //     account: {
  //       create: {
  //         password: "sameer@123",
  //         gmailAuth: "gmailAuth2",
  //       },
  //     },
  //     artist: {
  //       create: {
  //         monthlyListeners: "June2055",
  //         podcasts: {
  //           create: [
  //             {
  //               name: "Sharad",
  //               episode: "Game",
  //               studioIdInfo: {
  //                 create: {
  //                   name: "Shantu studio",
  //                   email: "sharad@gmail.com",
  //                   phone: "985625365",
  //                 },
  //               },
  //               podcastEpisodes: {
  //                 create: [
  //                   {
  //                     episodeName: "Yoga",
  //                     credits: "{'Hi'}",
  //                   },
  //                   {
  //                     episodeName: "Dance",
  //                     credits: "{'bye'}",
  //                   },
  //                 ],
  //               },
  //             },
  //             {
  //               name: "Gopa",
  //               episode: "Tractor Training",
  //               studioIdInfo: {
  //                 create: {
  //                   name: "Balu",
  //                   email: "balu@gmail.com",
  //                   phone: "985625365",
  //                 },
  //               },
  //               podcastEpisodes: {
  //                 create: [
  //                   {
  //                     episodeName: "Commedy",
  //                     credits: { key3: "value3" },
  //                   },
  //                   {
  //                     episodeName: "movies",
  //                     credits: { key4: "value5" },
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // });

  // console.log(userInfo);
  //First Audiobook
  // const audiobook = await prisma.audiobook.create({
  //   data: {
  //     name: "Dattatraya",
  //     artistInfo: {
  //       connect: {
  //         userId: "4cb5f902-e117-40a2-8b25-16bb83534d5d",
  //       },
  //     },
  //     studioIdInfo: {
  //       connect: {
  //         id: "d0457075-62b5-47ac-8fe7-7f56eaaec2c2",
  //       },
  //     },
  //   },
  // });
  // console.log(audiobook);
  /////////////////////////////////////////////////////////////
  //Second Audiobook
  // const audiobook = await prisma.audiobook.create({
  //   data: {
  //     name: "Nisha",
  //     artistInfo: {
  //       connect: {
  //         userId: "4cb5f902-e117-40a2-8b25-16bb83534d5d",
  //       },
  //     },
  //     studioIdInfo: {
  //       connect: {
  //         id: "d0457075-62b5-47ac-8fe7-7f56eaaec2c2",
  //       },
  //     },
  //   },
  // });
  // console.log(audiobook);

  ////////////////////////////////////////////////////////////
  // //First Playlist
  // const playlist = await prisma.playlist.create({
  //   data: {
  //     numberOfSingles: 3,
  //     createdByUserInfo: {
  //       connect: {
  //         id: "0a9ff58a-6637-4083-85d0-7456ca441e28",
  //       },
  //     },
  //     followers: {
  //       connect: {
  //         id: "449d8780-72f0-4110-bdef-5ac690d786c6",
  //       },
  //     },
  //   },
  // });

  // console.log(playlist);

  //////////////////////////////////////////////////////////
  //second Playlist
  // const playlist = await prisma.playlist.create({
  //   data: {
  //     numberOfSingles: 5,
  //     createdByUserInfo: {
  //       connect: {
  //         id: "449d8780-72f0-4110-bdef-5ac690d786c6",
  //       },
  //     },
  //     followers: {
  //       connect: {
  //         id: "4cb5f902-e117-40a2-8b25-16bb83534d5d",
  //       },
  //     },
  //   },
  // });

  //console.log(playlist);

  const single = await prisma.single.create({
    data: {
      singleName: "Pawan",
      albumIdInfo: {
        create: {
          name: "Andy",
          numberOfSingles: 4,
          artistIdInfo: {
            create: {
              monthlyListeners: "105",
              userinfo: {
                connect: {
                  id: "0a9ff58a-6637-4083-85d0-7456ca441e28",
                },
              },
            },
          },
          releaseDate: new Date("2020-03-19T14:21:00+0200"),
          studioIdInfo: {
            connect: {
              id: "2a064127-a070-4d7c-bb63-5fe7dcbb66e0",
            },
          },
          credits: { key5: "value6" },
        },
      },
      releaseDate: new Date("2020-03-19T14:21:00+0200"),
    },
  });
  console.log(single);

  // const single = await prisma.single.create({
  //   data: {
  //     singleName: "Pawan",
  //     albumIdInfo: {
  //       create: {
  //         name: "Andy",
  //         numberOfSingles: 4,
  //         artistIdInfo: {
  //           connect: {
  //             id: "51b08a51-3bd1-4e0c-9896-c39a84645b1c",
  //           },
  //         },
  //         releaseDate: new Date("2020-03-19T14:21:00+0200"),
  //         studioIdInfo: {
  //           connect: {
  //             id: "2a064127-a070-4d7c-bb63-5fe7dcbb66e0",
  //           },
  //         },
  //         credits: { key5: "value6" },
  //       },
  //     },
  //     releaseDate: new Date("2020-03-19T14:21:00+0200"),
  //   },
  // });
  // console.log(single);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
