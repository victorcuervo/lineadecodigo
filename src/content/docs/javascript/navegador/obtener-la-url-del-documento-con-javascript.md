---
title: "Obtener la URL del documento con Javascript"
description: "Obtener la URL del documento con Javascript e imprimirla por pantalla."
date: 2007-06-11
updatedDate: 2026-01-12
tags: ["document","write","url"]
slug: javascript/navegador/obtener-la-url-del-documento-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/url-del-documento.html
topic: javascript

---

Mediante código [JavaScript](https://www.manualweb.net/javascript/) existe una forma muy sencilla de acceder a la URL de la página. Esto nos permitirá realizar acciones asociadas a dicho dato, aunque en nuestro ejemplo, simplemente, la vamos a mostrar por pantalla.


## Acceder a la URL del documento


La URL va asociada al objeto `document`. Dicho objeto va predefinido en el navegador y asociado al documento que se ha cargado. El atributo al que necesitamos acceder para mostrar la URL es `.URL`. Es por ello que tendremos la siguiente [línea de código](http://lineadecodigo.com/):


```javascript
document.URL
```


## Mostrar la URL en la página


Si queremos escribirlo en la página, nos podemos apoyar en el [método .write()](https://www.w3api.com/DOM/.write()), también del [objeto document](https://www.w3api.com/DOM/). Es por ello que el código final nos quedará de la siguiente forma:


```javascript
document.write(document.URL);
```

