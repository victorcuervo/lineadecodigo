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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROE6SMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8h42TE2vi9OSYjalKhSmHzdIzkjuCJ2dcDZv6wof7aAiEA5epLAmVZWXBM83he9fljvhtPd5hTW3YbmnRyXrrLy0gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR827xGVFuE79RGbircA9z8ziecrrv%2BUloyzeokzkwqTVE1AAf3eX9XehvNX9X9O3VdYT73PAhsj6tXYwmE4TwP5iOxwEFz8uCd5oD%2BaDrFPhhFVXS3Hcb6V8fy7vuPsP6QgCKATt9SDhslM7364JdqUjLD1QZxWfDOwDjhDCulh%2BfF9AIfgAGurSvXB3XUQpHQwhv54WtaOhyDAa3Lyt24EH7iNk1%2Fg%2FnA9dF%2BC3%2FrLdRutQp3PmQk2uUVEIb1nqbLLLhSdbvRNqNPcWBDg%2BKB0iQI9pq2vB1Rzz1MCTlXJpXQCUGPuYWgfZvyGaDgL2P58HQ463OYdtKsEVMa0%2FUAKIXdlBczENCs6hrlYVvgvRT3PBmthckzBos299GPXEWBYzxpYlFGqPn4hKtD5MYeVaFUyavng2tiFmtTILc4iszqRxgoACGIqYkuAwZUB8gWplYDvFB5tMh1F0NO1iLx1iWjpnbEa4Tn2kXQvZYdlU6ZCNDwjrFAg1PQ2Io2pRVsB%2B8ywqL3kx5O095X8ZtGVFDeqZAPB7CWG4HD8Uc59obIPV7avfNmHv6p%2FmYj7RtSswe3yPicLOH3F3RmSoW4rSTYg4eqWfbQpvQBuJS1h3DJFJkZjv290nBoHl%2FOISnVIEX5lD09o707MLXc3MkGOqUBYePSroriESCnGhuCHzzX9WhOI2tO6Z7450Cmp84DSRg8ZnCwx9W4D7TzTSGKkmvpMu4jWX0%2Bhn%2FDTZp%2B5H211AqrL%2BgpMaxOvlzmkTvAjm10YGmo4cZyo1%2B45C%2FNyXyNjLnPkNwDFWTLSs1h2j3SE9EJfE%2FOBm31OH%2Bo0jHxc7QZOjjMj9CJqGvTdivTp4Nvtm2p93emo86KSZbbwfpLSFN469%2Bq&X-Amz-Signature=9d00afabb0b23e2fab935d109dabd4b75334b306d540ad37aaf0f451bebdfaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

