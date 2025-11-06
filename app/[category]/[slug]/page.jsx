"use client";
import React, { useEffect, useState } from "react";
import Banner from "../../components/section/Banner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const DynamicPage = ({ params }) => {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/page/${slug}`);
        const data = await response.json();
        setPage(data.data);
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <Skeleton height={250} className="mb-4" />
        <Skeleton height={400} className="mb-4" />
      </div>
    );
  }

  // 🔹 Handle not found
  if (!page) return <p>Page not found</p>;

  const bannerData = {
    title: page.page_title,
    description: page.page_subtitle,
  };

  return (
    <>
      <Banner data={bannerData} />

      <section className="py-5">
        <div className="container">
          <h2 className="mb-3">{page.page_title}</h2>
          <div
            className="dynamic-page-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>
    </>
  );
};

export default DynamicPage;
