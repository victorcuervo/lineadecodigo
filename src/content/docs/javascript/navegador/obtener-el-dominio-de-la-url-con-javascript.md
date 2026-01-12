---
title: "Obtener el dominio de la URL con Javascript"
description: "Utilización de código en una web para poder obtener el dominio de la URL con Javascript."
date: 2008-01-18
updatedDate: 2026-01-12
tags: ["document","url","javascript","domain"]
slug: javascript/navegador/obtener-el-dominio-de-la-url-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/obtener-el-dominio-de-url.html
topic: javascript

---

Dentro de la URL el Host suele estar compuesto por el nombre del dominio, el servicio y el tipo de dominio que es. Así si tomamos como ejemplo a "[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)" veremos que el servicio es "www", el nombre "lineadecodigo" y el tipo de dominio ".com".


## Obtener el dominio con document.domain


Mediante [Javascript](https://www.manualweb.net/javascript/) podemos obtener la información del dominio de una forma muy sencilla. Para ello utilizaremos el objeto `document` y su propiedad `domain`.


```javascript
var dominio = document.domain;
```


## Mostrar el dominio en la página


Ahora solo tenemos que volcarlo a la pantalla mediante un [document.write](https://www.w3api.com/DOM/.write()), el cual situaremos en una isla de código [Javascript](https://www.manualweb.net/javascript/) dentro de nuestra página web.


```javascript
document.write("El dominio es: " + dominio);
```


El código completo de nuestra página web será el siguiente:


```html
<!DOCTYPE html>
<html>
<head>
    <title>Obtener el dominio de la URL</title>
</head>
<body>
    <script type="text/javascript">
        var dominio = document.domain;
        document.write("El dominio es: " + dominio);
    </script>
</body>
</html>
```

