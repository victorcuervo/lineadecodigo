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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVNJPSJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSoAK6duwO7p2SKCc%2BSDr7DRNamY0oUVsGLXXo85hTpQIhANbNJK6Qs9ZihYsKEHI4ormRdW5qu2UWRiF69jzPth2iKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxV1YmPpNtxMuRnvMq3ANK7aZFHpSzNneCXH%2FACYj3lf8P5O%2FxP5jbcop2hfEwneeof4IIAYXDuJywdamOqQPxKvkTdw0E2Yvb243vyiV5SlVm%2B13wcEEpcWxxKy7vZ5bktqmMb1GwcUvs25hEc6vGEPGhzVaLguICTN5jSWt5kmR3ErBFsa7X7nI40uZkNHm%2BR1fJwV8HgkIIbFEq9V5L0zxE%2BFPHEYtru7u5JwCAAf3V8OhB0hnNOcbCM%2BWGLETlliBDvTmH3u8Ll8Js1vIlLhPA6FDg68C8bApR3ewxOzp4s4tSD5OD3bZJx37sgXIUimSwWYZLOA6Zc1wEKBY1dwCU3ZZh0%2B9nLrijxTraJ1AAZ7fgDhfAqscuDgoDhf41Fs16JxBwUVlVkDsiiGY6gwILfWAnABvpELo%2BEhMWfl8ght5qyZ0D89Yk%2BKLDzwqzSkVsZULjg7ZwOwLzcvTyTWUW1btdT7OICFOOGO24t%2FtNkvZqN%2F8hecVeODKL5lkTInyvztplO8oDn%2FN6V0hikU18DYGG0vJMDbjU1S%2BZr60RCpLbGOVnDrW3AGjang4zaGqTaVqFzc1rjFPH2zsHi8WRhl7wJAgkOPO8YMmL5nwjoQkryXwu1sFy2Kc5WxCPHtkXEEwx2f%2FODTCiodjJBjqkAVJ1Bgc2%2FcVG4UkNOKNHplwgkm1UWn440VltxkUPUYUQxBMTO%2FFjA7HhLB3c%2Bfm4JVR%2F9yUVZlQimWeBgjFtSv4G6YYjWaa%2BzjzGfWobncNi4w9f7xp9O0%2FKRizFHC%2Bjnl5oKJr7VZeq6kfbn%2BaDeRh3aDTAsT3Mkr8%2B9stsG8dfWiKZ7TWqlp4gFAbVu0aUhcAs52GUCwAXs0yljlG80wEiKNYR&X-Amz-Signature=699219979e98c2101b264f69dc95b770b010aced9b488db0720390436c835021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

