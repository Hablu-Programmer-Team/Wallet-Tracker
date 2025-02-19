import Capsule from '../icons/Capsule.vue';
import File from '../icons/File.vue';
import Graph from '../icons/Graph.vue';
import History from '../icons/History.vue';
import Order from '../icons/Order.vue';
import Portfolio from '../icons/Portfolio.vue';
import Twitter from '../icons/Twitter.vue';
import Wallet from '../icons/Wallet.vue';


interface SidebarItem {
    id:number;
    icon:any;
    label:string;
}
export const SidebarDatas: SidebarItem[] = [
    {id:1, icon:History, label:"Explore"},
    {id:2, icon:Capsule, label:"Neo"},
    {id:3, icon:Capsule, label:"Hyper"},
    {id:4, icon:Order, label:"Orders"},
    {id:5, icon:Portfolio, label:"Portfolio"},
    {id:6, icon:Wallet, label:"Wallet"},
    {id:7, icon:Graph, label:"Multi"},
    {id:8, icon:File, label:"Wallet"},
    {id:9, icon:Twitter, label:"Twitter"},
    ]
