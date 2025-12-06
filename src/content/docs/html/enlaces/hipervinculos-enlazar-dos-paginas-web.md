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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVUQN2O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVw4DisXvuGr0g%2BACpRPccWSmVDK8DxGwnxbTDljLJpAiA4ghQ0XWlad533Ds4niiO3haXuKEq%2BkAArgwxva%2Fyd2yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1XJKF9mxB7GPO91FKtwD2ncqGGbFPQomqIYG%2BglOJDIztIckkBcgf91Zv5YZkSgRT%2FxcbHi4r%2FFmssE2O0RVdoHcOTklkhrKlab1SuoQ0HoQK3%2BS2Xyl8mgBqS%2BrLOWVCvCE4y0R%2FdeVTCzItW0W5fVPMIEejcmWZHABBEoKw8tLJ%2FTM1bS4ro85lEMRusrLPtxBoL3tbli%2FIDwK4T0qOy6aY1Nfgyqg7ws3BunTaJ%2BvEh8E%2BDNmrdpRz1PgIxxY%2Bpc69Qo%2B%2BNit8wtBHJZR0cDsMVp0beH6RA0i8fbGV5CCNgKNbo%2BbnuDRfW5rDe4KjcnbcEAjaWeaqkJcw3Cl8mJuz0NCr%2BlhDUlG6Dk6vPr3AlNA1idyeCODnrxWKOM0OjM18Vv7TIUTQUbe%2BP7Jf3P9Pt4K1zpQ1Uc0nZUgqAMSIMPuev5D%2BEPhbbM2erWlh4mT5VGs3RsyHIAYAWomwAbnnDjlXLTXDyo8PhHdoYCi5zy3ksUn40yhob6jd6yk9x2Z%2Fu1TSmf7huv3XKJsXsW7HEiW0NjoIw0KBwkSlRFSE3ibRlgEj25pxCev1CFQ2HCbitnY8eDSmC4atZf0s1zkuMBZhlbkskNJr6i%2FZl9WPAPsU7l6eKrZfGpoWbO9zUcjOpDGz%2BzJS0Iwu6bQyQY6pgEpGI9FgqNYpnGju3bV16PszTXWavv9C6PR70jmHhUCcQ7eSnJdvXwyzyww3lzJO%2B7i8ahstI6bTqhmowbOCY2rE9v3yTbhXYaDceeVxASZGpza%2BL4UscmufoP1RFq%2B7sy0JJI%2B7ptsSSFbs9lFIp6kBmn2N6lIAvkvGTYNQLNZZay0Z7E7j9gcLJbULz8Wy2euup9HgqrqBeo3fjnuYIzTLGn8H4dz&X-Amz-Signature=008d3f4188f09856123b6bade41a1d91573a011230e46f498c824888d05d9d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

