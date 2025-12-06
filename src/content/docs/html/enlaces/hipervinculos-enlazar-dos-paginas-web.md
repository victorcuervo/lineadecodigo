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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCP4QCD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPysVNBSoFf5X7ol9Hyd1uGrqL0H9nqZdLNpJN622RIAiEA6klOLsMPXSF1EWi4EOcwXudTwgerXG8LbFtT3pccB%2B0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHuWghqfanBRe3nAPircA0G3TqkAyJVaN0m3Y14FAWH670yExYdur8waRz0KOGZGwnZDaL11wfROOPatfTl5ikrS%2F9Y%2FYZoOCAxRbZ%2BcJUJ9C%2FDQjoc5rnXa4JaFnirXmoNw000GIN%2BgxcrQ6VbZBjA3N%2BXkb3og9%2Fk98izbuFnz7putM8ZJWjQLmxoAYLuszry2pZLRc9219LlReiznPeypRCIu5Pm7MqiljDy61KAEB%2F0MKHcf92ZWsqVumNdFCKo20ursuEO2W7%2BT5UX5n32c2RjUjCLdHlfEFqLsfgXHnCFaZSm4M5m7R4GvMRJKWwnVQRs2tEWn0sGbk%2BE30zsoJRbLPPSwilmGaXek%2FM6r8K%2B7dnOOnghaP8hLulx8k%2BYle3ajWyoH7zqqvk5cNXd15bZemqbOhQ5wZ2AMhx%2FKjOiyZizROFOWsXnBebGxu4AQe1FwCu1DQFv2iUVyK46OFk9n2PXrxE2yvMVwPMtO6SV08UF5lGzaKWS6%2BmcgTZd9PxXIFnQC1vbMpbzXawGiYe06MxpDDwgsKJMH95%2Fvum3Wzkm%2FD3j1%2BlqJDCnvYIVZowzCWam%2BD8WPy4kw4DR7Le%2B3Op031PI8t%2FCWo2SKEIeqmvWv%2FKua4gw%2B0ONFmwV%2BlextBUP7b0DCMMSm0MkGOqUBdQL%2Bmtg25YY%2BSY18LCtYdvR6zIB%2F9AKvqetLyjUCGIXSunbHT7EYcQ38epF2sPKzcH4uhrLcjEC0HvXdfrB4Qlzv1NUavi%2F4cgv8odclM6N%2FJnmNh9pbpNsBi8oK62RF2B140ICbm9GSuPU7LzNvFm0mDbvmohsvtc2io1r4KOLfM9HhR8QQOibyoAh3qtEjXsYg57b1giumCjfOY8eT0%2Fg4y%2FID&X-Amz-Signature=0e7675c290a13653e140c6784821de25c2984b212a19e641baed13c19149d391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

