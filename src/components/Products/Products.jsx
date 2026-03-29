import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import useWindowSize from "../../hooks/useWindowSize";

const Products = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const { isMobile, isTablet } = useWindowSize();

  const getProductsList = async () => {
    const BASE_URL = "https://panda-market-api.vercel.app/products";
    let pageSize = 10;

    if (isMobile) {
      pageSize = 4;
    } else if (isTablet) {
      pageSize = 6;
    } else {
      pageSize = 10;
    }

    const params = { page, pageSize, orderBy, keyword };

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${queryString}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.list);
      setTotal(data.totalCount);
    } catch (error) {
      throw error;
    }
  };

  const getBestProductsList = async () => {
    const BASE_URL = "https://panda-market-api.vercel.app/products";

    let pageSize = 4;

    if (isMobile) {
      pageSize = 1;
    } else if (isTablet) {
      pageSize = 2;
    } else {
      pageSize = 4;
    }

    const params = { page: 1, pageSize, orderBy: "favorite" };

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${queryString}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBestProducts(data.list);
    } catch (error) {
      throw error;
    }
  };

  //  베스트 product
  useEffect(() => {
    getBestProductsList();
  }, [isMobile, isTablet]);

  //  기본 product
  useEffect(() => {
    getProductsList();
  }, [page, limit, orderBy, keyword, isMobile, isTablet]);

  useEffect(() => {});

  const handleOrderBy = (v) => {
    setOrderBy(v);
  };

  const handleSearch = (v) => {
    setKeyword(v);
    setPage(1);
  };

  return (
    <main className="product-container">
      <article className="product-box best">
        <div className="product-title-box">
          <h3 className="product-title">베스트 상품</h3>
        </div>
        <ProductsList products={bestProducts} />
      </article>

      <article className="product-box">
        <div className="product-title-box">
          <SearchBar
            title={"판매 중인 상품"}
            onChange={handleOrderBy}
            onSearch={handleSearch}
          />
        </div>

        <ProductsList products={products} />
      </article>

      <Pagination
        total={total !== undefined ? total : 1}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </main>
  );
};

export default Products;
