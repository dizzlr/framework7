import * as React from 'react';

declare namespace F7View {
  interface Props {
    slot? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    tab? : boolean
    tabActive? : boolean
    name? : string
    router? : boolean
    linksView? : Object | string
    url? : string
    main? : boolean
    stackPages? : boolean
    xhrCache? : string
    xhrCacheIgnore? : Array<any>
    xhrCacheIgnoreGetParameters? : boolean
    xhrCacheDuration? : number
    preloadPreviousPage? : boolean
    allowDuplicateUrls? : boolean
    reloadPages? : boolean
    removeElements? : boolean
    removeElementsWithTimeout? : boolean
    removeElementsTimeout? : number
    restoreScrollTopOnBack? : boolean
    iosSwipeBack? : boolean
    iosSwipeBackAnimateShadow? : boolean
    iosSwipeBackAnimateOpacity? : boolean
    iosSwipeBackActiveArea? : number
    iosSwipeBackThreshold? : number
    pushState? : boolean
    pushStateRoot? : string
    pushStateAnimate? : boolean
    pushStateAnimateOnLoad? : boolean
    pushStateSeparator? : string
    pushStateOnLoad? : boolean
    animate? : boolean
    iosDynamicNavbar? : boolean
    iosSeparateDynamicNavbar? : boolean
    iosAnimateNavbarBackIcon? : boolean
    materialPageLoadDelay? : number
    passRouteQueryToRequest? : boolean
    passRouteParamsToRequest? : boolean
    routes? : Array<any>
    routesAdd? : Array<any>
    routesBeforeEnter? : Function | Array<any>
    routesBeforeLeave? : Function | Array<any>
    init? : boolean  | true
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    onViewInit? : (event?: any, view?: any) => void
    onSwipeBackMove? : (event?: any, swipeBackData?: any) => void
    onSwipeBackBeforeChange? : (event?: any, swipeBackData?: any) => void
    onSwipeBackAfterChange? : (event?: any, swipeBackData?: any) => void
    onSwipeBackBeforeReset? : (event?: any, swipeBackData?: any) => void
    onSwipeBackAfterReset? : (event?: any, swipeBackData?: any) => void
    onTabShow? : (event?: any) => void
    onTabHide? : (event?: any) => void
  }
}
declare class F7View extends React.Component<F7View.Props, {}> {
  onViewInit(event? : any) : unknown
  onSwipeBackMove(event? : any) : unknown
  onSwipeBackBeforeChange(event? : any) : unknown
  onSwipeBackAfterChange(event? : any) : unknown
  onSwipeBackBeforeReset(event? : any) : unknown
  onSwipeBackAfterReset(event? : any) : unknown
  onTabShow(event? : any) : unknown
  onTabHide(event? : any) : unknown
}
export default F7View;