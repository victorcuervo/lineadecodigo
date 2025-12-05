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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S367YACQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKFscvlb8JSn2P6d0UP%2BSkF3hBHXnb8l4fBPItPTAK3QIhAMNHwSVB5adwGePhdKH54HRQm30KrYiPFvFRET1DnLcHKv8DCE8QABoMNjM3NDIzMTgzODA1Igw9gvwRvJV8VMoL%2Fmgq3AOYdErJ8PcA4fz8lui2N1d1YHSW9uEhEiEqDH245bDfvlwEtm07AgyZtUBvNbKFeHrzadtBdqDl29sUO%2FSSgmZPVb9uoVV%2F1MdNDqgXmtzM%2BOtFb8hiUYSnXyaRV5%2FqoElciS%2FX%2FSrG7YyQ11FzxyhwQUbAj2jwKxQ84OgJMkbqJ3O5vkPTHAVRJmng74MP4IiDnCrzAMIIrPTEXqdD6zs%2BvUsRd0%2BMvTqUWObvolNpY3vsj6bBPUEB201jVJh%2F8HG8YBDtDr5vLLPxB2TK8su0lmvfUQA36UC%2Bi5ypH0Ahkcl4YXWZDCwlgSCK6kaENj0rZ0xRhlBpwenEHsSm3rulZNlfihTdYdv1TShYfddl45jgw4HTn7%2BAM2JHfxU496PipQuaBih82XoVVut2DRiOJ9sPu0fNkqooFMMTYMbXmNLBBafuQBDpUvrap6w76QoAMv2Jbg9QbVbk9qC9SPdbUbq5LPBTxx20fbIMnIT25ZcNtraWardIMnysdg638cvAhkfiOhiLhdw2Tjc67LZ94HUvIvvEbHuMG8k7fX1HWviK5FDXyuwRIniHKS0YfRstIEYXSyoAhCrVRSypk%2B9ZlJTeXlYFJpLdTW5Do%2FoB90gQXQHhrsa9CyWhXTDKjMjJBjqkASs2vy5N8RS4rEbLHCZ2OrssgXESHZqneOxdbeNKAMbmt%2FrrLKyvMGMQYI%2B5eORGaT9PqlsM%2Foai0tEtQki5J0eeR9cfIGct9gpNIQtl9kgveuRDOl5aLWwne1tyhNx1zxGf%2FTQ%2BHhDOILdYz7EeRa%2FhLPagV0njlcFgU2zN30zJhJMc1z2PanoHr%2FciV%2BF9fSaGuP3wEcwLcdW1i3l%2FLZ4X6Brs&X-Amz-Signature=485d7d097fd0253623f0cfaf87d4f39f1fde1cf7f660abc6e80da599622061f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

