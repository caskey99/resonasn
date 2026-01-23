import data from '@/data/portfolio.json';
import { PortfolioData } from '@/types/data';

export const getPortfolioData = (): PortfolioData => {
  // Принудительное приведение типа, так как JSON импортируется как object
  return data as unknown as PortfolioData;
};