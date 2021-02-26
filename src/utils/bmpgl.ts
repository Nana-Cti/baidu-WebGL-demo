declare const window: Window & typeof globalThis & { BMapGL: BMapGLTYPE }

export function BMPGL(ak?: string) {
  return new Promise((resolve: (value?: BMapGLTYPE) => void, reject) => {
    const csslink = document.createElement('link');
    csslink.type = "text/css";
    csslink.rel = "stylesheet";
    csslink.href = "map/bmap.css";
    document.head.appendChild(csslink)

    const script  = document.createElement('script') as HTMLScriptElement & { readyState: any, onreadystatechange: () => void };
    script.type = 'text/javascript'
    script.src = `map/webgl.js`
    script.onerror = reject

    // 兼容ie
    script.onload = script.onreadystatechange = function () {
      if( ! this.readyState //这是FF的判断语句，因为ff下没有readyState这人值，IE的readyState肯定有值
        || this.readyState=='loaded' || this.readyState=='complete'   // 这是IE的判断语句
      ){
        resolve(window.BMapGL)
      }
    };
    document.head.appendChild(script)
  })
}