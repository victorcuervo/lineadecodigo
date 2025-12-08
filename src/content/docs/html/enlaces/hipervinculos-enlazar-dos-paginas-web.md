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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W476QO77%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjPe7s1iPYBOvc9dWpXwZk5Ai5%2FGVhcZcD1Svzs7qk0gIgXC%2F%2B8xk9woAPQ0cQDm9FoqEaJn03N4xyYBKJy7DB1qkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7nbLh60D3IcTEukCrcA1mTlVRIp6j5P3hS%2FDzVjPWoISYEK34q4AsB9HfCFlV8cao0pk9f%2FK%2FQVtARpmzPVvQIDRcduGtByQbL0sU8duzXsP%2F2k27af%2BebGCeLEHjTvoj%2FywbYkXLRE5cuG2vuyFgN4UzLwVTBCz08nrEMo7geR7WYWnSv0%2FKyc%2BIZWKXGeoiWvcDpY0m8U39lkIXjv5qLdFiQdkoRasDMQ%2FUp3mDi29vRiVhtWWg9FV3pexDR3xEfYy9wr280T%2FYImWhVNWcKSOfE8GURywxRYstvSEAGPgWALkhW5RxWBU98xnUfSFnfbmE%2BVHkyCGeF0D4I0UDsk6iZEX0zvAH%2F9Wtn44QqSxxBuCDHV8%2BXl%2BY1VrIrEEveIcEA6YHEKN%2B2Nent4rTEwVCLxW0QGxesjh2mZYGB8IYD4YuohqEesCLLDVl4qp3m4Ciws8Lw4BbQH5X2NfE2ooNvEycrRDYzxlFNbdjMNjWiws%2F%2F88%2B2A0SUiO2ifZENScVABfoJqmNFCALaNFEApw1EItbAF98cwqxZubxE%2Fk7NArTTjC7P8nbITDgmqR6X%2Bi9SH6s3UdfxbLOtDV0l2USTmjNvPXFNHKEmNThXBw%2Bfl71iXt6GllwGF4n3%2BsWgc9dWh2PUVOd5MODD28kGOqUB6%2FK6I2ErCVvOX044ePz0boXGjQbQ1Kh91aFgk%2FFFz2TkcVE3c88O%2BR5X2EWoFZJzlrhhE27s5ajBj5Q9S1wUmB3PA%2FJ6OuIfa4y4T2dep%2FM27T2XY5WNUV%2B67MgRoelEcEsKhgKjkFc4bJvcchhMvtPLGX2BahP%2BwDMUNiwgO5z6Yx3wmRBp4%2FRcFDtp%2FnWuUn98cied%2FSePz9Xo3gk8qhpE%2B8G1&X-Amz-Signature=34ac9ec200b2366eb982ef231d573954398d3158ab69ad9a37a12112a93a0a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

