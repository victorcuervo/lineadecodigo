---
title: "Obtener información de la URL"
description: "Utilizar código Javascript para poder Obtener información de la URL y presentarla por pantalla."
date: 2007-09-28
updatedDate: 2026-01-12
tags: ["document","location","url"]
slug: javascript/navegador/obtener-informacion-de-la-url
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/obtener-informacion-de-la-url.html
topic: javascript

---

Como vimos en el artículo [Obtener la URL del documento con JavaScript](http://lineadecodigo.com/2007/06/11/obtener-la-url-del-documento-con-javascript/), mediante la propiedad `document.URL` podemos obtener la URL asociada a un documento. 


Esto mismo podemos hacerlo mediante la [propiedad document.location](https://www.w3api.com/HTMLDOM/Location/). De hecho, [la propiedad document.location.href](https://www.w3api.com/HTMLDOM/Location/.href) viene a ser sustituida por `document.URL`.


Si bien, `document.location` nos proporciona más información. Dentro de esta información encontramos:

- **hostname**: nombre del host. Es el nombre más el dominio. En nuestro caso [`lineadecodigo.com`](http://lineadecodigo.com/)
- **protocol**: el protocolo que estamos utilizando: `http`, `https`,...
- **host**: igual que hostname.
- **port**: protocolo de acceso. Si se especifica. Por ejemplo, para el caso de http, podemos utilizar el 80.
- **pathname**: directorio que alberga la página. Es lo que va después del hostname.
- **href**: es la URL entera. Como dijimos arriba, es sustituido por `document.URL`.

## Obtener información de la URL


Mediante código [JavaScript](https://www.manualweb.net/javascript/) podemos obtener la información de estas propiedades. El código sería el siguiente:


```javascript
document.write("hostname: " + document.location.hostname + "<br/>");
document.write("protocol: " + document.location.protocol + "<br/>");
document.write("host: " + [document.location.host](http://document.location.host/) + "<br/>");
document.write("port: " + document.location.port + "<br/>");
document.write("pathname: " + document.location.pathname + "<br/>");
document.write("href: " + document.location.href + "<br/>");
```


## Ejemplo de resultado


Un ejemplo de resultado, de la URL [`http://lineadecodigo.com:80/prueba/obtener-informacion-de-la-url.html`](http://lineadecodigo.com:80/prueba/obtener-informacion-de-la-url.html), sería el siguiente:


```javascript
hostname: [lineadecodigo.com](http://lineadecodigo.com/)
protocol: http:
host: [lineadecodigo.com:80](http://lineadecodigo.com:80/)
port: 80
pathname: /prueba/obtener-informacion-de-la-url.html
href: [http://lineadecodigo.com:80/prueba/obtener-informacion-de-la-url.html](http://lineadecodigo.com:80/prueba/obtener-informacion-de-la-url.html)
```

