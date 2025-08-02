import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { Card } from "../components/Card";
import { Section, StyledButton } from "../styles";
import { themes } from "../theme";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const { themeName } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6"
        );
        if (!response.ok) throw new Error("Network response was not ok");

        const data: Product[] = await response.json();
        setProducts(data);
        setError(null);
      } catch {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  return (
    <>
      <Section>
        <h2>Welcome to the Multi-Theme App</h2>
        <p>
          This is a dummy homepage to showcase the theme switching
          functionality. Below are some fetched product cards.
        </p>
        <StyledButton onClick={() => alert("Button clicked!")}>
          Learn More
        </StyledButton>
      </Section>
      <Section>
        <h3>Featured Products</h3>
        <ProductsGrid $themeLayout={themes[themeName].layout}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>
    </>
  );
};

const ProductsGrid = styled.div<{ $themeLayout: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.gap};

  ${({ $themeLayout }) =>
    $themeLayout === "darkSidebar" &&
    `
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
`;

const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h4 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Home;
