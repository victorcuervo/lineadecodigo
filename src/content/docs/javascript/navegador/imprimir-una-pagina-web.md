---
title: "Imprimir una página web"
description: "Utilizar código fuente Javascript para poder Imprimir una página web."
date: 2007-06-04
updatedDate: 2026-01-13
tags: ["window","print"]
slug: javascript/navegador/imprimir-una-pagina-web
author: victor_cuervo
type: doc
id: 6c1e2779-49da-4831-9f4d-7e28e967379c
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/imprimir-pagina-web.html
---

Una de las cosas que posiblemente quiera hacer un usuario en nuestra página web, sea la de imprimir la página. Está claro que esto lo pueden realizar mediante las opciones de los navegadores. La idea de este ejemplo es posibilitar la impresión de la misma página. Para ello nos apoyaremos en código [JavaScript](https://www.manualweb.net/javascript/). Dentro de [JavaScript](https://www.manualweb.net/javascript/) tenemos el [objeto Window](https://www.w3api.com/DOM/Window/) y en concreto en el método `.print()`.


## El método Window.print()


Este método lo que hace es imprimir la página tal y como la estamos visualizando en el navegador. Esta soportado por el Internet Explorer (a partir de la versión 5), FireFox y Opera. 


## Comprobando la versión del navegador


Es por ello que para el caso del Internet Explorer deberemos de comprobar que no se está visualizando la página con una versión inferior a la 5. Ya que, a día de hoy, todavía se encuentran Internet Explorer de menor versión. La versión del navegador la comprobamos mediante el objeto **Navigator**, y en concreto con la propiedad `.appVersion`. El código quedaría de la siguiente forma:


```javascript
function imprimir() {
  if (window.print) {
    if (navigator.appVersion.indexOf("MSIE") != -1) {
      var version = parseFloat(navigator.appVersion.split("MSIE")[1]);
      if (version >= 5) {
        window.print();
      }
    } else {
      window.print();
    }
  }
}
```


## Invocar la función


Solo nos quedará invocar a la función imprimir:


```javascript
<a href="javascript:imprimir();">Imprimir página</a>
```

