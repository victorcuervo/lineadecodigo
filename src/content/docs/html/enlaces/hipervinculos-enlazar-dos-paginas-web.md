---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMVFCTO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFTrBrfQ7affL68yDCzw%2FRvc1mVYkvrevEfQ%2FtF0LJowIgJ5pnk5WItkIeSLZqckpQTrSKCWNZB7OGhNeCYC8BXssqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0Z9AHZzJyowMU0mSrcAwMCuvpiAi2TFaiw6jArQyzeGTuoetqa5TvSgFjxTD3r796VWnUWcPMsuCTTEmgmRNGGeQPau8vZ560jHKA4RJ9EOstfgCup6lvu%2B%2BUFUoRiVT6J9GbqCnGsb0UwWgWZRVhbNuMAn5I3DkX41p5YD22t9enxBSsSp%2FjOtGMx%2FisZlfCbK3epUP5pIsjEEDAHM82N%2FdV3FhjK2B44%2BnH6YrF4rgJ7kktnpuGirAiGugDYjq1Iush7OPcvqeX342rZuOIOzKcqfsBOB6OTenbKNE69x%2FlLmKM3WGuJ11S9T3dX%2Bv3LiQfvfSLVskw1o%2B2UhZjDMG2Ip0ATldU6p5Gmmu%2Bxs6PAYM%2BU%2BL4B2LN1zaIZ4Nd%2B1rUZ8ni%2BN%2FPSutqrkCKqxA%2BZbQb4I5fphbQVObrCQ7uRCfXBqi3IdXeyxJkoROWXBi%2F%2BrHixbK5OSEj92nY9vbWLY4f1b0xbuOFZJMZK26hdskiOqRw%2BmBF54aoWjyNk94GSVRvcP7KFm63JvpHTlGYv5kPMISwQMPRc1HMLnVUPOGhWmyL0uxFyIlu8D6Fh4NSu4MwJ9XMwH8taVscbnTFLApZDez13Wn%2FLA5EE9EaUKOYc17Gw%2Fzkvo0v58hRKCgsRW70FzdNMMPOe4skGOqUBzZqlcaDNdILFZBK0Q5jZvlSIqe9sBhJ3CXWz79RvcQ54SYD8S0rBNs6p3n6m5uPaSCfTCOCHygQGPzxzu2CuPwbWV2GmNa6U3ARryXfYuoeu5%2BSKQBWAVEvjYIKTNVsR6CwCcOqMicsNZ%2FkE4t4%2F0Iko8OXEOFXTN3sU1AphRJCshw1SlBxKbATZ4hvE0OCjpx2ADTTgGuBxhh91HDKPrIrOhjgG&X-Amz-Signature=9da4d73329bbdbbb21a03f08ebcdfa373bf317b388ae1536df02a04b520bbfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

