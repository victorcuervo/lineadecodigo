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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBYWXVE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BAyBdkwBsp%2FyMMFA%2BGHn2uI%2FqKfyeE7Osj4Ds1OcHQIgWvTTb09XvGQgrxUBMk4mc%2FpRGXC%2B%2BKSR%2BDAVveve1msq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIPsnjMqBvmbd8mFZSrcA5Y0a%2BQgwoqEc0YMFrzV%2B3SGHrHgbrCKAmR3cPhfWElApZQRaCgvercmvjWyDRmSuf57K585JmJFM3RiaM7umepq%2F5o4tyi2UMWrdIEcqCFn8JuFJCOu5o6xbXRY1HCxsB%2FkydKNqh5R0m8afcujlOMmrgaH%2FZ9SPsu6gDsQc4rRBX9uZykbPtzk0e5owDNdOlkiKf01YFtSiKIN1ccOKI36QHd54CM%2Bu5NiIQLR8VHpICB9T3oJRLgrpu9hsfv1smoQ6AZiIckmVY%2Fe9tEBsSQfocSoNrtBFC17U15QIEpHBohLWPnps3UX9vEspOuxhYx%2FMLG42g5cFEAeRJy8TD42Jktzm5FMEix3yPOJgWdr%2FH1EJ1yhPvwkygdF%2FG6cPB5X%2FUrkP%2Bmz8LdvMtq48xqIguBTmUbRand6ATAbOPlekztb2y%2FE3gB3mPnPC683fD8wx%2B9zM8iKCweTVEkXSywoLn%2B%2BNlzhmSmPe6BvhieZ%2Bv2li83ODJ%2BXRxdZHA98KJA7H8W9X9h5nrbi2PvfJNQ0%2FsQkbCgPNatnPt0rROos9lOKVIMb0uT3C6a%2F2aFJHqrUaNSVgAq1X%2FKdz1VNVu2XvILysOX4LzbjHHEvq0ke4UUOmtZVhfUmj3QPMNCm0MkGOqUBiASafuU0ykjeCfvpzj2zfG3LDovM8dousVsFc0Ki4IZC%2BDCSfFSQqXhnv6M2lLHjlwQun1FmqJFxREKvOgQHSGMfDkOYy5SQSaO5VIn0r%2FyB2v9tryw%2FiK1xGlY1NjGkEXSGseDR9%2FyDTDDB%2BXdZEBFxmvzDn589ZGPRIo2UhA7QYR%2Bid0tCuuoGWEPbfBV5uOTR%2B2XfdnmQuqOYQZuf7e9dQMPn&X-Amz-Signature=b63177cdfa2ed5f92d95dc6f47c181a4b9daf5583f96ff1e5c4b15552cac300e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

