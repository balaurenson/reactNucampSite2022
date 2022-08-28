import Partner from './Partner';

export const selectAllPartners = () => {
    return Partner;
};

export const selectFeaturedPartner =() => {
    return Partner.find((partner) => partner.featured);
};
