import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
function author(Vue){
   Object.defineProperty(Vue.prototype, '$author', {  
        get(){
            function author(){
                console.log(`
                This is made by Li Xianbin
                    ___      ___   ___      ___      ___      ___     ___      ___      ___      ___      ___   ___   
                   /\\  \\    /\\__\\ /\\  \\    /\\__\\    /\\  \\    /\\__\\   /\\  \\    /\\__\\    /\\  \\    /\\  \\    /\\__\\ /\\  \\  
                  /::\\  \\  /:/  //::\\  \\  /::L_L_  /::\\  \\  /:| _|_  \\:\\  \\  /:/ _/_  _\\:\\  \\  /::\\  \\  /:/  //::\\  \\ 
                 /::\\:\\__\\/:/__//::\\:\\__\\/:/L:\\__\\/::\\:\\__\\/::|/\\__\\ /::\\__\\/:/_/\\__\\/\\/::\\__\\/:/\\:\\__\\/:/__//:/\\:\\__\\
                 \\:\\:\\/  /\\:\\  \\\\:\\:\\/  /\\/_/:/  /\\:\\:\\/  /\\/|::/  //:/\\/__/\\:\\/:/  /\\::/\\/__/\\:\\/:/  /\\:\\  \\\\:\\ \\/__/
                  \\:\\/  /  \\:\\__\\\\:\\/  /   /:/  /  \\:\\/  /   |:/  / \\/__/    \\::/  /  \\:\\__\\   \\::/  /  \\:\\__\\\\:\\__\\  
                   \\/__/    \\/__/ \\/__/    \\/__/    \\/__/    \\/__/            \\/__/    \\/__/    \\/__/    \\/__/ \\/__/  
                `)
            }
            return author
        },
    });
}
const ElementUiDLC={
    ...ElementUI,
    version:'0.1.0',
    versionOfElementUI:'2.15.6',
    install:function(Vue){
        Vue.use(ElementUI)
        author(Vue)
    },
}
export default ElementUiDLC