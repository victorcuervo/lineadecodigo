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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5U5M7M3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvBXIfPC4aKT3wjDRrpbWAoiQDjO4YhhXFOXzX8YvBQAiEAjRAKiIWnBEjJGKqveohOLhu1BZRMRMHvz9F4mYwZ9NYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDEmOVfBYNup1a9ryrcA5Ud0AmvEScOFCdxql%2Brak713lmRSzAVRrfmmUkf4uoe1wHRF3kWSjKLkstGwmv0QufDkTIVJ4NU8%2FN88NwuNr6ahNR1XqjzRUEvrQ1kI%2Fs%2ByvdEJ4InVt%2FOZGQeKwbRmCJ2Z7bDthW68p3j%2FOZAXBqVATQC%2FqUN6eadq%2BGe2xrO4RqeEKF1ahliuIa44QmSRU8CcemaLMVUCrooxway2AbSJaV6AvZ1gu%2FNYGuyaUeibUWYGc4y6jmaSpvmpEjw9X8jLui993cCz0GL3jUhbr3i%2BG5pjgkKKzdrKgdKhiNq1zXYP1uLu3jp%2B8rh%2FGm%2BAd6p9DMaiARHzeWMioLRv3LiYtmbj0iTuvtH4ZJg7fpEyU8rFgRfPYmXcB5lPr51lLh6AkGLvGEL93OHZtxRKlVW06U4bvlX8%2BcH3Nik4ahnQgLD9jlQe22SZ8eelshbtlp0e7ng9Ycuu9yKZ36RpEZcOPFvq21Ulk1EnQIPG5Bqu3xjkplkjXCoe8LYtJJAjZFjC36JoUWZY9VImzewRn%2BqvdoSwR9A4bl5hlTZDA9kGWciLW00d6xZf1v7UkeJ4%2FJGuydGF2H%2FQwPoRyURl1Kv%2FYEGe76CYjHS7HVnLyqq7DqggABo7EeDybjzMJm94ckGOqUB6YxBkhn1pUeJqa8Z3pra3Qh5X8gOkwnpPtGfeUY%2Bb%2B0pqUU3ZFncuQQEhiEKbKLjjpXUbiZQgWa3EHEsJxfOwVZK%2FOc33379OoseNH5kNGADNPRP4ZbO31M0s8iRS8DSVT54OOv7%2BBTaA1dLOA5A78TzfQVX1qkquB2kixtTqobIrLAm%2F05rTv5faTa%2B11xXOm6CuSO2nh7864dxKhpdWzxPKLlj&X-Amz-Signature=a3269f797037e9898f9bef9803ef63ec4eb6fa37028d4cef9b2383a4d9eb2cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

