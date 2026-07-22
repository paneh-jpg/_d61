import express, { type Request, type Response, type IRouter } from "express";
import productService from "../../services/Product";

const router: IRouter = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
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

export default router;
