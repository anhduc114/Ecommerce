// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";
import mongoose from "mongoose";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

//handle save new product request
export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if (method === 'POST') {
        const {title, description, price} = req.body;
        const productDoc = await Product.create({
            title, description, price,
        })
        res.json(productDoc);
    }
  }


  