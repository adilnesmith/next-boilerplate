export type ImageType = {
    url: string;
    altText: string;
};
export type HeaderProps = {

}
export type FooterProps = {

}
export type MainBodyProps = {

}
export type SidebarProps = {
    setSelectedID: Function
}
export type DetailPanelProps = {
    selectedId: number
}
export type HomeProps = {

}
export type ProfileProps = {

}
export type Page1Props = {

}
export type Page2Props = {

}
export interface authContextProps {
    user: Boolean;
    login: Function;
    logout: Function;
}
export interface UseAxiosState<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
}
export interface Item {
    id: number;
    title: string;
    content: string;
}

export interface PaginationData {
    items: Item[];
    loading: boolean;
    error: string | null;
    handlePrev: () => void;
    handleNext: () => void;
    currentPage: number;
    totalPages: number;
}