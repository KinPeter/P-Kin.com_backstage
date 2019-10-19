export interface PortfolioItem {
    id?: string;
    name: string;
    descr: string;
    badges: string[];
    features: PortfolioFeature[];
    image: string;
    link: string | null;
    repo: string | null;
    addedAt: number;
}

export interface PortfolioFeature {
    title: string;
    text: string;
}

export interface PortfolioState {
    portfolioItems: PortfolioItem[];
    portfolioBadges: string[];
}

export interface PortfolioItemUpdate {
    id: string;
    data: PortfolioItem;
}

export interface PortfolioBadgeUpdate {
    index: number;
    badges: string[];
}

export interface PortfolioFeatureUpdate {
    index: number;
    features: PortfolioFeature[];
}
