---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGYPWJR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCt7ld8zfyH06Syn7fp9w5mXnAkIdRTMm7ouGOw5qqu1QIhALLeu3WS7b8mYk2HbpWxJSUyrFinwrZ9G1k9abzEgPEuKv8DCDwQABoMNjM3NDIzMTgzODA1IgzG%2FMq9Ga%2Bx%2FlmO4Boq3APSniIMFgBv6yUJhD5ecazgHCprZW2G9bTZrQ%2BuhQnQDHlToNqA5gHIoSh0aKRyfM6l%2BUxKU93tmgvclVQUJ%2Fm6NHnTzqB2ZoX8%2BpQXWDXoaYtiGrnMTQZQkKXCVTsRS4tPwNaXAL9iyDFi9OlJBglkRLZMwd3bUq6UFz4OITTMeeWwNvQGzVmrR%2BnmR6U%2BUQ0vwzW5VO0IqzY4qB%2Fx%2B5EdC%2BTAc3b%2F8b%2B7q9FloFq62H8R25MaRTZqWIqjOXgOGVa2z%2BrHZJSu0wPxyQ2iHFwSlCLCuRN4EhGywylUolxy4HGGHg6mjzpmf3NZGFadYDEJXuHJfEkXbfLiQofTYHnXB%2BpPK7nhAcoX8Tkz3A2Jqfofcn1g%2BABkFmOfVzin5OSwDkCiqowHDFh4aIBUKtV9gAHb2K4LtfBuQRas964jVIm7514X8eszqZvz4Au%2FaAJ6Vq7qmWdT%2FYg9Hue1c3fDqxeprHoxeZ1DGi3TkuaHwFkLH3x8T8ip37fPWFw1JvFEvVM23VxWLOlT5d%2BRWXDKA24IDDfJ0YxTvyUPN0h0MQ6rIA3hjAxaw0R9n4JqHoG7HEGqwEu7PnrjMTKhTcIzbwBJQfJTig20nvVPbhU5mbB9WmrOGXTUPqyYFjC%2F8sPJBjqkAaWhlNR%2B5R4m3yWkHYET5I2%2BlxrNU7EZ5%2Ffv%2BAbFAwW54ZlcfQ5hQ%2FZrLRFzLTj%2BtywxnoPpjjXAoVXjgsvyL1XKvd%2BU9cB4vNIt%2BKIbxN%2F7FMoNu0i%2FSENOXcbK7zPSpBW6Q5RAo%2BE8deqkkRD%2B2iw1XZxtxKgWDauy6V67JAeaOfuHKtx3pajW03tmcs8wSNuW9q9fX5tsTNH3QCEdwkdVJBzj&X-Amz-Signature=cbcfac3fae65d17d00640d674b5473893d1628a91b5d9e841e797bfd82861528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

