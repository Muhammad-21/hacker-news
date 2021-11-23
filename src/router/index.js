import MainPage from "../components/MainPage/MainPage";
import NewsMain from "../components/NewsPage/NewsMain";

export const routes = [
    {path:'/', component: MainPage, exact:true},
    {path:'/news/:newsId',component:NewsMain , exact:true}
]