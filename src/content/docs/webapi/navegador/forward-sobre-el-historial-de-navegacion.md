---
title: "Forward sobre el Historial de navegación"
description: "Descubre cómo implementar un forward sobre el Historial de navegación con JavaScript y mejora la experiencia de tus usuarios al navegar fácilmente entre páginas."
date: 2007-06-23
updatedDate: 2026-02-05
tags: ["history","forward"]
slug: webapi/navegador/forward-sobre-el-historial-de-navegacion
type: doc
topic: webapi
id: 2c8a9dfb-adca-81f8-8dda-ee7ad2b1ae31
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/forward-en-el-historial.html
---

El historial de navegación es la lista de páginas que hemos ido visitando, las cuales son guardadas por el browser. De esta manera nos permitirá el volver a alguna página anteriormente visitada. 


La verdad es que podemos movernos por las páginas visitadas en todas las direcciones, a las páginas anteriores y a las posteriores. Mediante el lenguaje [JavaScript](https://www.manualweb.net/javascript/) podemos acceder a este historial de tal manera que nos podamos mover mediante líneas de código. Esto es representado mediante el [objeto history](https://www.w3api.com/WebAPI/History/).


## Método history.forward()


En el caso que nos lleva, para poder ir hacia delante en el historial, deberemos de utilizar el [método .forward()](https://www.w3api.com/WebAPI/History/forward/).


```javascript
history.forward();
```


## Implementando el forward


Solo nos quedará el lanzar el código [JavaScript](https://www.manualweb.net/javascript/) de alguna forma. Para ello nos vamos a apoyar en un botón y en el control del método `onClick`.


```html
<input onclick="javascript:history.forward();" type="button" value="Avanzar en el historial">
```

