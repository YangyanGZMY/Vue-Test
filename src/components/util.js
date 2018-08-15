let util = {};

util.openNewPage = function (vm, name, argu, query) {
    let pageOpenedList = vm.$store.state.pageOpenedList;
    let openedPageLen = pageOpenedList.length;
    
    let i = 0;
    let tagHasOpened = false;
    // 循环判断页面是否已经打开过
    while (i < openedPageLen) {
        // 页面已经打开
        if (name === pageOpenedList[i].name) {  
            
            vm.$store.commit('setCurrentPageName', {
                index: i,
                argu: argu,
                query: query
            });
            tagHasOpened = true;
            break;
        }
        i++;
    }
    // 如果页面没打开过
    if (!tagHasOpened) {
        let tag = vm.$store.state.tagsList.filter((item) => {
            if (item.children) {
                return name === item.children[0].name;
            } else {
                return name === item.name;
            }
        });
        tag = tag[0]
        tag = tag.children ? tag.children[0] : tag;
        if (argu) {
            tag.argu = argu;
        }
        if (query) {
            tag.query = query;
        }
        
        vm.$store.commit('increateTag', tag);
    }
    vm.$store.commit('setCurrentPageName', name);
};

util.oneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  } else {
    return false;
  }
};

export default util;
