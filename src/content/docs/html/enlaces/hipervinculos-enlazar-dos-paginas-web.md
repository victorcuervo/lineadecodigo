---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRJO6SF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx0N6WXNpghfawxQdfWjw%2Fg2%2Bjd63tZ7MUj5nv1dP01AIgK34hjs2oFDYqcXy7bXKiD2iNA3cO8ja6IEc1mH%2BGQZcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJNyuVy%2FVhbwQ0qLZyrcA5cQkskxWecM5s%2BQ7m3wGGg8dRDSdc%2Bj9IKdSqXsue8HoMDmxVAEqSNddLqQRIA%2FSkqq7iBaz5GBb6K21pwoJ1JhtB3SvU2rv19e%2BgtUp7PsjplQF9lPWZ7B0qv8l05Yu2ar2v6ViHoa%2F%2Bk9As%2FIEbsZLjloP3SiOFichSDkb3ZggCiaEXWDVypjfBQxJPc1Im7W6MHErOIBaZAgG2TX2vUHPAZeYIWlGC39KcnLxSO03DB1hMzE%2BH2%2FWPgqXbeStd1MqvDIeBT%2BwrifhW0m%2FQF7%2BG0EcvlXfnrp0dEDBOoXoWe9NPO4bnracEme6jsG0OWtexLRO0bHOLoSd3uJBubd7T%2B%2FZXPuVfsR2xeZrbizozAWT5HNaI5UDPFugaX1WAtMPpccSHqX%2FjX1hv4yJzgaWxj4NbnOicjD7dg0XGj8c9gk52TasKfyDwNoI7INZ7WIzqcwIpBg3PEHIOUe2B1pJg9%2FBL3W76YyqFTzuRhY6dtcKD7W7GKEBrEaqoByQwM8Zd9SMlY%2FNRRQj0T4rsCqqXCA8XfUvR7rounIB4KNd%2FOsQ2xNwtcI8rZ5pg542KdJYZQ8yk8vZ2un5VHAaLM3NrMSEuklMa58HscTLvEzMMYjaSshZGQ%2BHRjJML2MyMkGOqUBS2WgftaPzUBNWqgVBXwU9Y300EO038S%2F4fnCEZFNgPDsaCJJLDgXLndU3GQRxF4RSQOQq222qp190LP554GcEMAh%2Bqj7jIYjQQjWu41rpX5UNSdMI9wgkF%2BL9%2FEjNFwRf8fLT1E8Pxcc9HnA5MMCjjh4eGWQekdNb9g2b5lnzg%2BOjIGo4KwIVs2Hkxvw%2BYz5JFQ6XfKF8ZWCD3VML0VO0TJwr9Ei&X-Amz-Signature=de6ffe0f4ae818d154e228065f89af399000eda2c21c3089dbb107ddb8ae5e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

