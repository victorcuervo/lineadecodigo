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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNA3LAQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU71PoCAUJyDRpCNrXqDH%2FMP93GHjewXtn7AiCj3NNwAiEA3dpd1A5RIbvw8NnDETLdWHHG%2BUkCrahnX0JlXxH%2B%2BWwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL85TXNS%2FObD7SXtfyrcA%2F2%2FS%2BSuEOCWpdZrmNg2wd9GNsC7fLiGtZj9vIUrn02HK3B6nbk52tHc8E7BtHfcAF0P7GOFgh9wHicuVTFAbua8BzkFnjmsATuW62Ki12VMkPV4hys8rlPlU3I0z%2BleCO4%2FC%2FrxfzFb%2BEeT%2BvAaHyyChzAncMzeZc5t%2FuhrxY41uWCzKoXxxPX9AJaInQYuCTMcW0%2BbiH9je9cp3%2BHfRNMUqogOIyOfT8reiDNWhfZMUdUiYWIyywN1Wnj6FQ5uHCd0dplL7lqlSoVJF%2FyXK8utMWh1xXdoBeekJb7w37yQ07VGcTPzbG0keVb%2BW302iC0ODnccfkfHRY%2FeSXu%2Botx90aPsLfyib%2BzpcPJ4xXFTT0%2BgvTxXeTbPGBJwCP%2Bt7ikkp4gPJo%2BKNZIP%2BwWyndyoYbGiqY0RtWygGinFFiopnLAKgFOYYU4EyYw9y828xL681iUlxAN6g2vGJoRk2JOWTJFakJSDTj%2Bz0UTPNnR5tznNkC3s%2FHIW%2BIYzHPMXOZT%2BUE%2Fdc0L72%2BzFiVwKto%2FmgradSCLt4AUTY3brZo9KjmHdevGkzCKf6Q19yjy0gf1hKQqptSbzAhgmPL%2FEHDRF%2BifvRHK8vu1dK1743%2B%2B4rPudmneJ0P2nSQtNMNr%2B4ckGOqUBxD4NZMcO8qIwevH9Clo7vr0SANc%2Bk6pm5tOeLZ7F07d1Arkfr%2FvdOh55ck3LSqM%2FzPbWNoFNx48r%2FHimRWqzuaCX3n7o4CW8jIZIqRJViDrGOOwA7e5%2BLbr2u4OlHIzsfLsIRdOZyHUAihKJ%2BJ1YwEyHdXaPjHDWfjpQL8zivsglqb4%2Bm%2FCZtaaOM5ffRgnXJKc1KZB%2FqO603mcYgGYOzhUfuaXE&X-Amz-Signature=254f13b31a0e6adcfe6256073808ddae080e3b16898546b509ca5427693c75c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

