/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare interface BMapGLTYPE {
  Map: { new (container: string | HTMLElement, opts?: BMapGL.MapOptions): BMapGL.Map };
  Point: { new (lng: number, lat: number): BMapGL.Point };
  Prism: { new (path: BMapGL.Point[], height: number, style: {
    topFillColor: string,
    topFillOpacity: number,
    sideFillColor: string,
    sideFillOpacity: number
}): BMapGL.Overlay };
}
