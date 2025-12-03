---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOL2I52%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDR5LKALJSDloclyqyPZ71CZptafQWd7ZkfnSfbsnOeXAIgdW3ftLsHe7VJchA6aP2rEkBk42mgIcK1eM4ckl6xh6Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDCi416LTASdiL3wuSrcA5UaWwESDKoJCyIR%2BEBBffkKm5RG5d%2FaVxPpzFSIzcjdgXFxtPQwekh1wogGecQ2WFjrcQHmP8i260T%2Bu0tpxRtcSYu7pueh%2FY7SUbm2Va%2B0b3U0VoQlgK33t2KlMY7uaSkbh7OnLKgEMYTZ2BxmudNfLfIu0xrlBXLu1%2F9oES%2BSPfIBVbzu7808fhOkFM8rtPV8Pz%2B9WgKHuJ4fP17llCje9%2B5JmhcCfb815bZwIAM0zouUE1OD2REs%2FImsjLLYXlh5tsv7LO5rwQUvOlrrhdTagRQ4omkyMd6bpUtv8AZd2PScY0sqdhlF0Dw9blLfQQQbFBTys8uUVfz7O7R4vWrOBH77fBUTd7vx%2FBh4cZyESqzQ4yRUp7Dfpdm4qMGqG0use3iajAXUlaVU3i%2BC6GY7g7CLrIzrMbErn9JFhgR%2BKgqecGbtInuOXrvKT0w8i7FOSImu2Ggr9Xo0yggZrNhb3hZeuXuSMeRs5cs7xr1hGlGp04JWKz5f9Fqcp%2BedIOCyIoWeA9K%2FXzYUKUy%2FbbHCzVd10l%2BsG6GnvPi5COeW36LKIyqoJlogMxwCs1XTnm3OOazLMbsE1A7rNgxGMe%2BxjnjRKNyTjj6S570W%2F3CzTW%2FSIxCTYD4j9750MJvdwskGOqUB3iCILVAsjmlw77tfah3qOTkMn350LcATeveDehW7zYuimHDuEBj8ElMXk35yf85P0Y6OuKRvTBVlWoW2xt77u2WNrOeMcVRhWridwAS6jCRiqOEdA8uQzn9xIezD5H%2FZ4EOLoGvKcQhzTjzMsqbx0Bp9vl19ndd%2BnGeyWj5LkjU%2Bxv1%2F%2FDtpymeZSg5ae9FDZvCOIGP4r28JjxYtdMYDLS0OLa6k&X-Amz-Signature=326947208829ee10785bcc3fdb184bac8b27fa40abe1463bd61598d30bd83e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

