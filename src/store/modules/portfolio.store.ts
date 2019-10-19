import { Context, HttpOptions } from '../../models/stores';
import { PortfolioState, PortfolioItem, PortfolioFeature, PortfolioBadgeUpdate, PortfolioFeatureUpdate } from '../../models/portfolio';
import { HttpActions, PortfolioActions } from '../actions';

const transformPortfolioItems = (data: any): PortfolioItem[] => {
    const rawArray: PortfolioItem[] = [];
    Object.keys(data).forEach((key) => {
        rawArray.push({
            ...data[key],
            id: key,
        });
    });
    const sortedPortfolio: PortfolioItem[] = rawArray.sort((i1, i2) => i2.addedAt - i1.addedAt);
    return sortedPortfolio;
};

const state: PortfolioState = {
    portfolioItems: [],
    portfolioBadges: [],
};

const getters = {
    portfolioItems(st: PortfolioState): PortfolioItem[] {
        return st.portfolioItems;
    },
    portfolioBadges(st: PortfolioState): string[] {
        return st.portfolioBadges;
    },
};

const mutations = {
    setPortfolioItems(st: PortfolioState, items: PortfolioItem[]): void {
        st.portfolioItems = items;
    },
    setPortfolioBadges(st: PortfolioState, badges: string[]): void {
        st.portfolioBadges = badges;
    },
};

const actions = {
    fetchPortfolio(context: Context): void {
        const requestOptions: HttpOptions = {
            method: 'GET',
            endpoint: 'portfolio-items.json',
            successAction: PortfolioActions.POPULATE_PORTFOLIO,
            errorMessage: 'Unable to fetch Portfolio data',
        };
        context.dispatch(HttpActions.SEND_REQUEST, requestOptions);
    },
    populatePortfolio(context: Context, data: any): void {
        const items = transformPortfolioItems(data);
        context.commit('setPortfolioItems', items);
    },
    fetchBadges(context: Context): void {
        const requestOptions: HttpOptions = {
            method: 'GET',
            endpoint: 'portfolio-badges.json',
            successAction: PortfolioActions.POPULATE_FILTER_BADGES,
            errorMessage: 'Unable to fetch Portfolio badges data',
        };
        context.dispatch(HttpActions.SEND_REQUEST, requestOptions);
    },
    populateBadges(context: Context, data: any): void {
        context.commit('setPortfolioBadges', data);
    },


// BADGES
    moveBadgeLeft(context: Context, index: number): void {
        const newIndex = index - 1;
        const copyArr = [...context.getters.portfolioBadges];
        const currentElem = copyArr.splice(index, 1)[0];
        copyArr.splice(newIndex, 0, currentElem);
        context.commit('setPortfolioBadges', copyArr);
    },
    moveBadgeRight(context: Context, index: number): void {
        const newIndex = index + 1;
        const copyArr = [...context.getters.portfolioBadges];
        const currentElem = copyArr.splice(index, 1)[0];
        copyArr.splice(newIndex, 0, currentElem);
        context.commit('setPortfolioBadges', copyArr);
    },
    deleteFilterBadge(context: Context, index: number): void {
        const copyArr = [...context.getters.portfolioBadges];
        copyArr.splice(index, 1);
        context.commit('setPortfolioBadges', copyArr);
    },
    addFilterBadge(context: Context): void {
        const copyArr = [...context.getters.portfolioBadges];
        copyArr.unshift('');
        context.commit('setPortfolioBadges', copyArr);
    },
    saveFilterBadges(context: Context): void {
        const requestOptions: HttpOptions = {
            method: 'PUT',
            endpoint: 'portfolio-badges.json',
            data: context.getters.portfolioBadges,
            successAction: PortfolioActions.FETCH_FILTER_BADGES,
            successMessage: 'Filter badges are updated successfully.',
            errorMessage: 'Unable to save filter badges.',
        };
        context.dispatch(HttpActions.SEND_REQUEST, requestOptions);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
