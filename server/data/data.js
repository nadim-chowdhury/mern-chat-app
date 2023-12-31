const chats = [
  {
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "John Doe",
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
    ],
  },
  {
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
    ],
  },
  {
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Anthony",
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
    ],
  },
  {
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
    ],
  },
  {
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Nadim Chowdhury",
        email: "nadim@mail.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = { chats };
