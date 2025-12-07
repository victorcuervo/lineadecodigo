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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPDPMA4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCero8SGH%2BMEN0U5O2CJpJrOlJgjWnlDkvmIn%2B0uJr8AIgUq2MRm%2FY0IzIUISfdVtsdYN5zLhLxMcy0yYTCFJU8swqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVT5nonK%2BSaDycweCrcA5%2Bx7ANF1hZk%2FHltDLiYwQT8x3HkfSvaO3%2BCVffxwu%2FUeR%2Bz%2FHarxTfXcLxBYiTqqKMOksBBaS85CL8swJ38YAV8K7SlzXqqseMaBFJO60%2Fv8XZi7y9fmiwXh4Sut059hdXZCmHi2LbC2ldoxpHn1ifgXclZlPOVeNa%2F8xDFD6RwyldxHtZf3szdt2WIKtQ8g5mgNEW7E3H5ZOEhikd6kaB42TOacwzUjLKDvIqsRUAANB4vcK0t5X02P5dTdgF8X%2BGWF3QGwfrI8A8ymuz0%2FXg6Lv92UdHe73nwe7xKUwV2Fk4UWjtfZLIQZ84G4Lks%2FEt5meBUVRqN9qC8T6AugINd9M4HRw6juODLUTtUYv%2B4jMn3qdL1QEWCPA3hz4JIUUtCO41nXR%2FROKUsmX9zhro8yBafTCyCRJTiMFG3z5igyWTgm%2FKA4kH7QlKVvCX13bbqM5DDKZVyPHS6c6xtzbq3f1KMQKDwTN4%2FM0o%2BCYVlgFt8CTq7nb8lju6lsFYEl1yKKwECJjS9ScexZ%2Bj4XHPlvwqGoRn4eCOCXr9%2FIPCEjmJvPWC4WsWMBanXG4HJLsq8frOBiFHfL3vpaFCOfTvWOJ6nkXtrQGorFMq1o194ug9L4VCVjLj5q8N6MJGa1ckGOqUBF3xqczqmXsm6EV7nJiIT3%2BOxA%2FV9nYHvf5dqM%2Bw2jLWGleDXElIfi0kcbo3QyDEXUDA%2FXha6JNqtHUuMYFxlMaYkBAKgK2vMj7vjg0MgVZQsmAYXiJjo8M5j3xyMcL8wjUbw5xpUg1Yk4XLwJeMbf0JtxZQr9MOF7qT%2FNzHMII1HMeJ3g3U70DZOEMevWHwfgHw6yWrfmC4K322Ue%2Fpr5HkjLfcL&X-Amz-Signature=ae2535f400d111bd3510c9b4b5f0dfa8c7e9876e6f27098097a6d509d5fac49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

