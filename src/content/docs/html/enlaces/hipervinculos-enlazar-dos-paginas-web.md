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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVXRPV6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm7t99YYZ8f8ybrNtWsTNZthRAIQSo2CzY7Cqa8F9hwgIhAJOoxqDmw2Xp8uWr%2FhcL0BB9xSc6veby13dtItNukQP%2BKv8DCGAQABoMNjM3NDIzMTgzODA1Igyg6f3536Cn%2F767iC4q3ANIwUz1X7LBPYeq0BX24oKxtE6Y2EyqEE3XjXBQR2TaEip32LqVwZG9um3Dmh3gYD2CmlNW3H37XsFu1xze5TQBw3FfzgkXWi6pzMHbi7BzrRZKGuA5FetPqRrOcGLxBSg5V7O92er4aCJP9mO0%2BWH3AMT09ndUKbggT0ZX0z6uXxmRmMU8b6pj6FEMBytAbPheS5jxHbXCe1V7SrCf1F430fgOaNWXoVe8NlNhnCk%2BCRSGx2K9A5FWVn1QbHO52W1epCfarf1VyVzOo2JFSbtzgmrAaHhGeXeKtJIBPdlT%2BHVG%2B2Q%2BYw68znYz4OBiNux6yV%2B4Mg6onqrzqTLY8whIp4ToIHzNH5WzqqmdN76iZv2FQHVtlc%2FaptlxvkrC%2F3av8B5ftaaM3ccjBDLBujvIJrjf7mknidK8%2FFbg8UYZZz2BYvSpF6qw5q4kJLTjc2M2Az%2BM9cKO8q8OhWRRQztiiX2PvtROadA%2BOR6YZPg7A6tFhcq%2Bv5fvsx3h2uEPGcOQlv56A2ozVdHMwgcj3vhtHVYjxEVbamE5pg6X%2F5A3uoENIYVYwN3e%2BG%2BGctcEUcfgWKQqZwnvxUhGFqYHGzbaB7ojrJuA02h3zn16WcAiW6Dq2PlvJXODYtmAdTCW8cvJBjqkAS2MB9uZg6hL78z1MpXXNQ2j0K5B7BQVaYE2%2B%2BtNycWZEio54LCg0mlLW6SvvSLCUB8CsxYOymDgtqgQ7NXxLq%2FNjz2eb%2FTM1cktHL7zSFIYO2aBNBMZpS6EWR66Dvp730aSQ3E0IIOb8X%2B8k0cT9ys1kOZsKJLd%2B5DttwvRLNz%2FWMeDAEm9IxpSvFUx665WXnFq9PyNqycZ7buJMQnRECb9Mgla&X-Amz-Signature=734e620b432fb8216c5da0689a37e9cbfeff2f413207d8ea34a54d3acf0707d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

