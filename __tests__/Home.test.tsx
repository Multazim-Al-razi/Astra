import { render, screen } from '@testing-library/react'
import Home from '@/app/[locale]/page'
import '@testing-library/jest-dom'

// Mock useTranslations
jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
}));

// Mock child components to avoid deep rendering issues in unit tests
jest.mock('@/components/home/HeroCarousel', () => ({ HeroCarousel: () => <div data-testid="hero-carousel" /> }));
jest.mock('@/components/home/CategoryTiles', () => ({ CategoryTiles: () => <div data-testid="category-tiles" /> }));
jest.mock('@/components/home/PromoStrip', () => ({ PromoStrip: () => <div data-testid="promo-strip" /> }));
jest.mock('@/components/product/ProductCard', () => ({ ProductCard: () => <div data-testid="product-card" /> }));
jest.mock('@/components/home/BrandCarousel', () => ({ BrandCarousel: () => <div data-testid="brand-carousel" /> }));

describe('Home', () => {
    it('renders homepage sections', () => {
        render(<Home />)

        const hero = screen.getByTestId('hero-carousel')
        expect(hero).toBeInTheDocument()

        const newArrivalsHeading = screen.getByText('New Arrivals')
        expect(newArrivalsHeading).toBeInTheDocument()
    })
})
