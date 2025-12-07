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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WU3YAJR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMX0RBA3g%2B6muXGvruGan754PDI3Eq5744VtX54UKD6gIgdsb1JLaRe68qai9uKqFDeiglOuk%2F31AC1nAVcGwBsV0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTXmSIBBAvJ9E4HACrcA1%2BLh0FpfDixNaMtU6luhEIVurZbWt7GCZJcRx61A8qKKg2yzYcGLpYVPNS5voaLXV58d0fALaGdo%2ByOiXQFYxwhnDAT1AKIdurPrqNOtN0wEvX5tjbWZDm4XHUkj8k%2FNlGvDDdklJvfRbdQAlZlQGqULV%2FG%2BptDGrivj4%2FnJggwPftJMA%2FZ9p8jw%2BG0oc5uUPhCdI7zOv%2FCnHdg4sxBWlT0u2qCLASDzwJr7E3DSpPtEzEE0DUqG%2FI5I7YaIgDSk3u6TgWwDJEfLwgfQMeeUx%2BDWeIwuTIqRQe00XRQK4nXoEr%2BAORsHgDy4Q%2BMQ9re4f1JaVfi31QX%2Bq0%2BLUZVHJJpfmuwZ0722Zz79eZEfzIDM5tEaqoQl2%2Bl3JmhhwvP4eDLqFcJp05cn4dXxApCI4XeTgPP6mVkf6svGdnTPaImZw2pdYlD05cxYH3qhdwdPbaUI%2FxMlvWXjtr9fsDvl9xJG7olcBerTsxhpEHV6rfz8zVzIbzWI4%2B6ek4H0HgIQAAquYw9rpXova7EbGinI9C4XD8AJQei1WGvPnaHCLcLvwNBFt4TvJy%2BW%2FTtnSlLHAkPPzLgQi4GtUYwYryZQIQadePZnvewkWZRvNIjUjYWRjgIm2zMnNqHLJ5wML6Z1ckGOqUBQtdj5qZ%2B2ZMoVAOhaiFzDFSz6ZL4ei8Ex96XvfArv6AFRT%2F%2FoKa0NfWYrhmN3Wr55fIgSo5yR%2Bq1Uj65CYM7XRFJmwXLAHWbA7UTgpscrHmhpnGPnjywNgkIpLSncYsZoW51Z%2BXvxEeK0ClARat%2FE6Jy%2F3FUrH%2B4i1OBijIC90SutMjlWixfpWyHONPu%2FiAxd0g6pJ%2BuwBr%2Bwy5AyrlQPl1LRW4s&X-Amz-Signature=1647e5e483f4ba4b193e861447a489a63fc8cc154543306060bc19519476e7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

