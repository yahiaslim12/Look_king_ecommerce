"use client";
import { Rating } from "@mui/material";
import colors from "../../styles/colors";
import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useContext, useState, useRef } from "react";
import { pathContext } from "../providers/GlobalProvider";
import { useRouter } from "next/navigation";

export default function SecondCard() {
  const [product, setProduct] = useState({});
  const { productEnter, productLeave } = useContext(pathContext);
  const reference = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(reference);
  const router = useRouter()
  const GET = async () => {
    try {
      const res = await fetch('http://localhost:8000/rating/get/product/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } else {
        throw new Error(`Error ${res.status} - ${res.statusText}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Optional cleanup or final operations
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ transform: 'scale(1)', transition: { duration: 1 } });
    } else {
      controls.start({ transform: 'scale(0.5)' });
    }
  }, [isInView, controls]);

  useEffect(() => {
    const fetchProduct = async () => {
      await GET();
    };
    fetchProduct();
  }, []);

  return (
    <motion.div
      className="secondCard hover:border rounded p-2 bg-white"
      ref={reference}
      onMouseEnter={productEnter}
      onMouseLeave={productLeave}
      animate={controls}
      onClick={()=> router.push('/product/'+product.id_product)}
    >
      <div>
        <img
          loading="lazy"
          src={"."+product.img1}
          className="rounded"
          alt=""
        />
        <div className="d-flex justify-content-between mt-2">
          <h6 className="productName">{product.name}</h6>
          <Rating className="productRating" value={Number(product.rating)} readOnly />
        </div>
        <div>
          <p className="productDesc" style={{ color: "rgb(162, 162, 162)" }}>
            {product.desc_small}
          </p>
          <p className="productPrice text-uppercase" style={{ color: colors.one }}>
            {product.price} da
          </p>
        </div>
      </div>
    </motion.div>
  );
}
