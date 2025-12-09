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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBHUZXP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEM7To7H%2BQcmLEnHxJ9%2BTiKXtvSKy4YjYarVSfy%2FdNiwIgClfJkylJ6NDK377Bih1O2Gye3U28BRm2FLAqp6DDW7YqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpjOzZZe1Hhn5G1ZCrcA1nt0PWPjB29pPQtWb0akg3cAXyyBHYHXrIrswmLwPRLLsiSZ%2BJQaMSDlw1hYaXDhEQBMHPboArw6Fk8ypYE3O124oLC3Gf9AvCaS%2FdyeULM7uM9BsHptjZOEjPOvBlqbSLhd60x0m4Ml1DxyxN1itqQP6hvbTnrWfvYK0UvgzekJpsTm8b1pRzYupU%2B1INafsjz8op6o8Ks2SLudR0fmfKSuCmq78g%2FaAAp%2B3LKCGEbOY06mdoDwCk5Rwx7YfoFhysGbaq0r7zK8XMqjHI7FzPP%2F6vDuoPg%2Bom1qmok9Mwp0ys%2BFD%2BlqrQ4rKajSdot7FNdm%2BEHJri6IY%2ByegDs49A7%2BXRH0PntrnH2h0R75OSTOFdFX9q6nE8Rv0wu5YiL1BXe178dc0qMPcMk2Hs2X7CgvENM%2FROpqJLeE6rwQYaMCMrkcyuAYU%2FFX564%2FeU4%2BWr0XkjmuAWrnR6iOgeHw0mftjjr8e7DPOuxqSkvpQCf6WFSmIL0h78BvmNG%2FQRhQQoV22%2B9KMeUJWKGCCJ0lnq3T4zRnQFkIQQbKz7WGb3TQIT%2F%2Bb7crrGKuyfwws5H1Y2nj3L1nsFvPZzAsHu9xusTLAQIkWjs0FXE3t%2F3HkommbOh0SRJ%2BPCOvE69MOf%2B4ckGOqUBqW5CSatcmhzhL%2BM0H4C3MU%2BwHoGVSsP%2FNk%2BYQWtAS%2FwEPNeC3raXztK%2B8tBVCJOjVhpaUjr6Wc%2Bw4ih%2B%2BL4B0FnPi8Ylov2YvAsjUNK6Grdl51t3kUnfFKfX8VLiq4ZPtCXJsLWpzAXIOahBAyo%2B49MFa8QjVjgbChh%2FeVSiyPUxe4EzJlgT7W7bHkBfSEGuJMdaiuaNFBSHOW2ZuX1UYIrh%2BUKy&X-Amz-Signature=2836ee6b74e2de78978e7a9a342847716018f64de948744311d84a2466c59eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

