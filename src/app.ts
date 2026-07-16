import express, { type Express, type Request, type Response } from "express";
import { v7 } from "uuid";

const app: Express = express();

export const customers = [
  {
    id: v7(),
    name: "Taylor Swift",
    email: "taylor.swift@example.com",
    phone: "+1 615-555-0101",
    address: "Nashville, Tennessee, USA",
  },
  {
    id: v7(),
    name: "Lana Del Rey",
    email: "lana.delrey@example.com",
    phone: "+1 310-555-0102",
    address: "Los Angeles, California, USA",
  },
  {
    id: v7(),
    name: "Conan Gray",
    email: "conangray@example.com",
    phone: "+1 206-555-0103",
    address: "Seattle, Washington, USA",
  },
  {
    id: v7(),
    name: "Conan Gray",
    email: "conan.gray@example.com",
    phone: "+1 323-555-0104",
    address: "Los Angeles, California, USA",
  },
  {
    id: v7(),
    name: "Justin Bieber",
    email: "justin.bieber@example.com",
    phone: "+1 416-555-0105",
    address: "Ontario, Canada",
  },
  {
    id: v7(),
    name: "Olivia Rodrigo",
    email: "olivia.rodrigo@example.com",
    phone: "+1 951-555-0106",
    address: "Temecula, California, USA",
  },
  {
    id: v7(),
    name: "Ariana Grande",
    email: "ariana.grande@example.com",
    phone: "+1 561-555-0107",
    address: "Boca Raton, Florida, USA",
  },
  {
    id: v7(),
    name: "Ed Sheeran",
    email: "ed.sheeran@example.com",
    phone: "+44 20 7946 0108",
    address: "Suffolk, England, UK",
  },
  {
    id: v7(),
    name: "Billie Eilish",
    email: "billie.eilish@example.com",
    phone: "+1 818-555-0109",
    address: "Los Angeles, California, USA",
  },
  {
    id: v7(),
    name: "Bruno Mars",
    email: "bruno.mars@example.com",
    phone: "+1 808-555-0110",
    address: "Honolulu, Hawaii, USA",
  },
  {
    id: v7(),
    name: "The Weeknd",
    email: "the.weeknd@example.com",
    phone: "+1 647-555-0111",
    address: "Toronto, Ontario, Canada",
  },
  {
    id: v7(),
    name: "Selena Gomez",
    email: "selena.gomez@example.com",
    phone: "+1 972-555-0112",
    address: "Grand Prairie, Texas, USA",
  },
  {
    id: v7(),
    name: "Dua Lipa",
    email: "dua.lipa@example.com",
    phone: "+44 20 7946 0113",
    address: "London, England, UK",
  },
  {
    id: v7(),
    name: "Charlie Puth",
    email: "charlie.puth@example.com",
    phone: "+1 201-555-0114",
    address: "Rumson, New Jersey, USA",
  },
  {
    id: v7(),
    name: "Sabrina Carpenter",
    email: "sabrina.carpenter@example.com",
    phone: "+1 267-555-0115",
    address: "Quakertown, Pennsylvania, USA",
  },
  {
    id: v7(),
    name: "Shawn Mendes",
    email: "shawn.mendes@example.com",
    phone: "+1 905-555-0116",
    address: "Pickering, Ontario, Canada",
  },
  {
    id: v7(),
    name: "Harry Styles",
    email: "harry.styles@example.com",
    phone: "+44 161 555 0117",
    address: "Manchester, England, UK",
  },
  {
    id: v7(),
    name: "Camila Cabello",
    email: "camila.cabello@example.com",
    phone: "+1 305-555-0118",
    address: "Miami, Florida, USA",
  },
  {
    id: v7(),
    name: "Doja Cat",
    email: "doja.cat@example.com",
    phone: "+1 323-555-0119",
    address: "Los Angeles, California, USA",
  },
  {
    id: v7(),
    name: "Post Malone",
    email: "post.malone@example.com",
    phone: "+1 817-555-0120",
    address: "Grapevine, Texas, USA",
  },
];

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json(customers);
});

app.post("/", (req: Request, res: Response) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone || !address) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  const newCustomer = {
    id: v7(),
    name,
    email,
    phone,
    address,
  };

  customers.push(newCustomer);
  return res.status(201).json({
    message: "Customer created successfully",
    data: newCustomer,
  });
});

//Cap nhat toan bo
app.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { name, email, phone, address } = req.body;

  const index = customers.findIndex((customer) => customer.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Customer not found",
    });
  }

  customers[index] = {
    id,
    name,
    email,
    phone,
    address,
  };

  return res.json({
    message: "Customer updated successfully",
    data: customers[index],
  });
});

//Cap nhat mot phan
app.patch("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;

  const customer = customers.find((c) => c.id === id);

  if (!customer) {
    return res.status(404).json({
      message: "Customer not fount",
    });
  }

  Object.assign(customer, req.body);

  return res.json({
    message: "Customer update successfully",
    data: customer,
  });
});

app.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const index = customers.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({
      message: "Customer not found",
    });
  }
  // Thuc te trong db se set active ve false
  const deleteCustomer = customers.splice(index, 1);
  return res.json({
    message: "Customer deleted successfully",
    data: deleteCustomer[0],
  });
});

app.listen(3000, () => {
  console.log("OK");
});
