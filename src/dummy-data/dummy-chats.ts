import { Chat } from "@/types"

export const dummyChats: Chat[] = [
  {
    id: 1,
    name: "يزن عبدالله",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 3123,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date("3/1/2024"),
    },
    newMessages: [
      {
        id: 4322,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
      {
        id: 1234,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
      {
        id: 2356,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
    ],
  },
  {
    id: 2,
    name: " عبدالله",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 7892,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date("1/10/2024"),
    },
  },
  {
    id: 6,
    name: "محمد عبدالله",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 7892,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date("1/11/2024"),
    },
  },
  {
    id: 3,
    name: " خالد عاصم",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 7892,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date(),
    },
    newMessages: [
      {
        id: 4322,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
      {
        id: 1234,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
      {
        id: 2356,
        message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
        time: new Date(new Date().getDate() - 1),
      },
    ],
  },
  {
    id: 4,
    name: "احمد عبدالله",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 7892,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date("3/11/2024"),
    },
  },
  {
    id: 5,
    name: "يزن مصطفى",
    image: "https://github.com/shadcn.png",
    lasMessage: {
      id: 7892,
      message: "رسالة طويلة  جدا وتحتاج الى عرض جزئي فقط",
      time: new Date(),
    },
  },
]
