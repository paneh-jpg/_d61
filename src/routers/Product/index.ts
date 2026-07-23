import express, { type Request, type Response, type IRouter } from "express";
import productService from "../../services/Product";
import { ValidationPipe } from "../../utils";
import { ProductCreateDTO } from "../../dtos";

const router: IRouter = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/", async (req: Request, res: Response) => {
  res.json(await productService.getList());
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tạo mới một sản phẩm
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Tạo sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */

router.post(
  "/",
  ValidationPipe(ProductCreateDTO),
  async (req: Request, res: Response) => {
    const newProduct = req.body;
    res.json(await productService.create(newProduct));
  },
);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Cập nhật toàn bộ thông tin sản phẩm
 *     tags: [Products]
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
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy sản phẩm
 */

//Cap nhat toan bo
router.put(
  "/:id",
  ValidationPipe(ProductCreateDTO),
  async (req: Request, res: Response) => {
    const productId = req.params.id as string;
    const newProduct = req.body;
    res.json(await productService.updateById(productId, newProduct));
  },
);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Xóa 1 khách hàng
 *     tags: [Products]
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
 *                   example: "Product deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       404:
 *         description: Không tìm thấy khách hàng
 */

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;
  res.json(await productService.deleteById(id));
  res.status(204).send(`Delete`);
});

export default router;
