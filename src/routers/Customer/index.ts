import express, { type Request, type Response, type IRouter } from "express";
import { CustomerCreateDTO, CustomerUpdateDTO } from "../../dtos";
import customerService from "../../services/Customer";
import { ValidationPipe } from "../../utils";

const router: IRouter = express.Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Lấy danh sách khách hàng
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Danh sách khách hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */

router.get("/", async (req: Request, res: Response) => {
  res.json(await customerService.getList());
});

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Tạo mới một khách hàng
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerInput'
 *     responses:
 *       201:
 *         description: Tạo khách hàng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Customer created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Customer'
 */

router.post(
  "/",
  ValidationPipe(CustomerCreateDTO),
  async (req: Request, res: Response) => {
    const newCustomer = req.body;
    res.json(await customerService.create(newCustomer));
  },
);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Cập nhật toàn bộ thông tin khách hàng
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerInput'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy khách hàng
 */

//Cap nhat toan bo
router.put(
  "/:id",
  ValidationPipe(CustomerCreateDTO),
  async (req: Request, res: Response) => {
    const customerId = req.params.id as string;
    const newCustomer = req.body;
    res.json(await customerService.updateById(customerId, newCustomer));
  },
);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Xóa 1 khách hàng
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Customer deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Không tìm thấy khách hàng
 */

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;
  res.json(await customerService.deleteById(id));
  res.status(204).send(`Delete`);
});

export default router;
