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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXGW7WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBab73XN8WDFVLXLs6skmyP7mAkN3efTAjuUeebSXc5PAiEA%2FJLmZgBu4tET9U8uckf3G8K7xfu%2BLFN9T1is8ALJrrMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoIh8IrSwmGF9%2BK0CrcA2zfCQHJi77Ii55rBN80ZheIaXQo0K3FJzStW5Gze%2B%2BCY5ldqMoGfEVvNkVIr%2FP%2BHgJWuNnXpIS6lFZuYB0YZxR6%2Baje%2FOSF7YjhY%2F8BVv7kTtyB4ednKgG7b7FVHVCVvHIqRtidmMbC3q4UMY8CB4nqemojJZ3JPHIXtZSaekr0OgvnuG%2FsCneiYH6DwQ%2FxNBvXZWWR%2BHJV9P%2FjeCtzarQH6Ids1v%2FzDiOLrAAs%2Flts2tS3iwhc%2FAyLO029fQyssOGJcCHN57vQg8ktuh58G9fZ2%2FAjn2XQzPRLinDKQ8ko5829%2B9fXQznsEVSABYR%2BCQfM8bh8lmtx9mbZMDXfpeUJm6PyD76tnpsn2TwBWzt1w9fjFQ0VWVL820NSjcR4Z8tUWsrm6I78E1e9IH1%2BIzNHw%2B9SUz42sKqrfUNTs%2B0xynfnoHtJpyOiq1i939cbFkMzY3jaUgEn3Iorsv%2ByjKlyd3MacgtKAV01xljGoRb%2F6Yvt2EaZGpm89ns8ZvRcBvO%2FbiQfpRx133M3vvO%2BBjeJyUMlVCdsQ5pDK2UfAGK9DoImx4TCmIRuBKLao%2BR%2F6tmlAk5omQ%2BRcecQnRpJIJBSQes9GnVdTCBQXOwd8DCbhQwhUiWHLfw3dSD1MLD%2B0skGOqUBtKWUO7W1k4BB8F%2B0UWohwT8ERUzgobT9%2FJBSGEqWDB9OJdS8YxugH2EGaXb4HoP8BkHBWg3k4I5XGlI%2BxWYL21%2BmTeRQU7dw9FeQnn%2B68ozmkuvLZ06lQZgtvZgNHaIB%2F3U5adwlx88pX9rhQXZcA1PdBGCWSzU5tama3AFjdL02tdMI9ObhpRQCBa35GSbWivPpxpe4HutaPT8p%2FK1EKzi%2Fz2Rj&X-Amz-Signature=cfb59364447dc9921889b54a9407784d6aef3e835fac9e01f6a1ca50d917c909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

