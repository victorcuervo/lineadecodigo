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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQK55RH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCafrUUpSTml68%2FOLRUQwccCggIRc%2BCrZFIVw6AtDoRpgIgTo0Bnh2RB%2BzrR%2FfuvvPhDyTBMmzUtFm640W3btXPklEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXAUUc%2F0Xfi4x8glSrcA%2BpOP8PsDpGhBTFO7n2gks5hohbA7GogRIAdjDUolDGAGrlKkANfit%2FKGGh2xXV%2BHdtIKlv9XuzK%2BKlrHuCzHBqgzlnWNE4DOtv0bx81tUzmaENFz42RwW9jWTbxSmxtHA7Mifw4oR5VMsi2jNmPmIdpRWvBB%2FBTUB2F%2B9Odumo7XlopJtHSW7MTx%2FqaDSODTJmendsbuKMU9%2Fn9ZaC6YvwIcuc8m6dWhhcMSmB%2BgdMNf36OQAMDhfasUD58PyJMlWUjzzPxeuEkvOkVh300cY%2BVTdlVgqMgMUFJ9BUznaRqu51AK6qSTwWOpfVPea0MdJIikRmMJTb5Vei8Tmc4jJ2xHRvBzJ01dhhau1%2FrtFB9mEW%2BX7hbFMDT%2FLGzwEoMaFOKrn25dVDDOPNwxhuptBTT0s%2BeYlCT6FH9gkhyb2xSKbjjKnLoI1e6nPqHpy%2BxVOLod%2BbWtKkF3QVfGzT3KXiO2Il2RBVZ8yBtP%2FRyKrAUAbfWWHbmkTPT%2BDc4nR1vXoFmFeUtbz0lHPG8YuVo%2FQbfIufOjzQbdtrjVV1RitUbuPfqQb8rrsRm3pM4quR59A4VyzjiAyt7pr9pTC%2Fgxok8qZj3QvFp6OFLpamdq9NRo8RIIYpBA2dVJN%2BJMKvE38kGOqUBmkdaz9DeVUG5RkAtFbv0KwKDx5Geov7JUuTKkyV5SEc5lrda4ODJsYXlwFNb1iybAxrhuim7UFst8JPSBHvHCgHsSYGkaexWc7viVXP0NJoDbjHuLzhKOBE0rwT0%2FgZw4dxLjPdDatCp7KcWpik4PpJ%2FlD%2FLbtjStCAVShttYZE28AmSOGhT9PVsjiXUND9G0k4Aqqx2jtQPKDOM%2BT8Vmha5p0ZA&X-Amz-Signature=08fecf62cd9f568d1cdcde62910bab7385a1f9b43e26a07f1a16c18fb79a58cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

