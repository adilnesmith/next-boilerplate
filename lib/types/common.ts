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
export interface authContextProps  {
    user: Boolean;
    login: Function;
    logout: Function;
}
