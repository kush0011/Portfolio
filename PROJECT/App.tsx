import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrapProvider } from "@/context/ScrapContext";
import { Layout } from "@/components/Layout";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";

// Pages
import { Home } from "@/pages/Home";
import { Browse } from "@/pages/Browse";
import { ListingDetail } from "@/pages/ListingDetail";
import { Dashboard } from "@/pages/Dashboard";
import  Auth  from "@/pages/Login";

export default function App() {
  return (
    <ScrapProvider>
      <Router>
        <CustomCursor />
        <Loader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
          </Routes>
        </Layout>
      </Router>
    </ScrapProvider>
  );
}
