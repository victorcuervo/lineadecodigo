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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANAZJOB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfWoU4hy0%2F4NR0t8xvXdL3SLz9sgH8aHb2%2FJh4MAUV%2BAiAQ5do%2BMHW5NOprut77WI3lwkTWBQ3cr%2FRdjarRk%2BZa7SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2pOHQY7txDuPka9vKtwDf1KfR%2F8aoumrY8pHCISES8x5GlPyk%2BycnrDrx2S9db8jAcmkLewbViWush1uuE9bVB3PCoitekePyAvnaEf2AnOqItmBCsbLvqr%2BaxO4ql3HQmnm78v%2BMTmemITb3Mj2GjnENgwwWk9i9gvF41MFqTzg%2FACgOg%2F%2BsKlGFXRNFCN%2BISZBBAOzm1oZRZBED1ld27X%2FwpzbocCeFVAyE1QaHqdBG9dQCkMvx8ck7DvayRMzuHEvix2dafuLfaDj6vTV9gfmzGR7%2BnaFPh7J9Ul7IKXEQfp1X881YHTg3p2Jk24zBGE8KMxqex8VuTvVe%2BE0%2FuymkTqz8d9Ou8M2ffO5TSjABdJxV%2B2QnijwB16U7GQBEPqdFhfKv%2BKwFCpGqISaOKu61x%2FkO%2FvIxsGEqU9OfMqrC2YfTBHlBQIo%2B2Xp%2FVX4mXcAZIyfJH3O1z9sj7DwqDTafeW4iBQfm41mj8LUkaF%2BxQMVG5vJE24evJv5Clhm%2F%2B6jnER8kiM8stt89EDzxNoHPCCTNW7h3qF90BaGIrJQL7hg3A6VW4gIuGS6cyRXSUjFZDiq%2BH9neJ1p5CRAphncs8Iynjh1aXr0nHh1zl7EZPhE%2F0RjjRwurgdswIdy%2BVl33bMRE27aQbcwwpnVyQY6pgEgHbe3nRDFOhWEln7zrVHB3Dnxhh8BxMJAUDPGYwxOSXM6CtBcvVf80BYnAEkRymdcJAq2uQCzb5o69hH10X5ttfeGN%2BvEPrzdJSYe1PQ4yFuaVHm4iBhQWc93azumZq5BxyoqwXVgxkAdiyFLww0Oii%2BBQ02jL%2B%2BoRU38DFHISr%2Fqjnp5T2mSfjHCy0Rl1v4t8VpxgffE%2Fpvw0uLAqAZ6Dd0OgfwN&X-Amz-Signature=0591098054845d8187ebd07ae2f1fae7ef86d320955cf086e2db0223e9fb4c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

