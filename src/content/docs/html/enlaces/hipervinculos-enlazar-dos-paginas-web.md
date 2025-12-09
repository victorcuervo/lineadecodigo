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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TOA6SW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCZubrO9XzvtNDlVxyqfJVpp1%2FTyb2BElWXUe2x4P0NAiEAwecvxWhGzm2pYr15g7j082gIFP190EY9TlzMZOva4YEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbIvttmObgALVeluCrcA58Ynhk%2BNe6q27m%2BCAHkLiTwvxT%2FcrYD73MSfsCe0Cgus%2FI6GHi4QPqKS4L03bWmodkF3ed04rYYwT0SKClbGVS8raGScgcvLjvV1hJpEJdFaVaJvW%2FBU1LHOH8PCJuYUCJsC%2F%2FbWh%2FmokAhdEUDf%2FYwSqlHGNJgPITdfAa%2FGHqSfHztH3w%2BvRpMMIfcCMx3jbskVbqzsLdBoL%2BY0pTlTYFW3u%2FeKh9raMVxzbHxb%2Bn3Mqpg5qxHdIGJ3kioHuQFxIGmrMqGm%2Bg2gk4XAAppeO6osnvhUIrS4qM34NbHlO%2B86vF7Uu%2BD9tdxvBPSSGGfroSldRMpqihw5mNAKSpB1STKDAH4%2BLMsj%2FYuSGW%2F%2FTSzOzISsjGjrOyPCOXe%2BTBKmQiSX0O5UcCV5SbwdOaGThkq0SjPs155Ni160il6NJYKDeThsd9UXFqy9rIGNdMePw5NXPJlKqPVJcK5r1%2FYPOfsXhMlr%2BOSyvqC%2BXL2Pmi99%2BvIXnPbVcE%2F%2BM6FFu%2F1yoJWdDEQt37%2FJkXLOf%2Bectt2HpAt%2BSFO1NYZaVid1yd2LhO%2BA56hda99Yxz%2BPhpnhJ9PQiDPbcQqTpgpM08Lklf5c0ob1Fhba4ThGX9rYXGVs%2FvsYudbDqLJF2ngMNDe4ckGOqUB0fnCqC%2Bt9PYSdIHhVwbu9bw64J0MKbnroRBkvMcotY4RCTtj2fu%2BZ8M9oOhKRqX%2B8CAJanJyQHW%2F0UT4Pv7c82WUaO1Hmkg0n77luONAEn4%2ByiAyQf7DXlfKq7OhhWUm09xNupL6fVSCvdhYFnegv3TNp365qOY7mp7AlhB3S49rIMuks8PDc0VaXAaUpY04PwuT9tNpDC%2F5pjElOdWB2hmKmRil&X-Amz-Signature=874dca8a26775fba33770fda2bdea71273b6bede01bdb2311032f24c64dcedcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

