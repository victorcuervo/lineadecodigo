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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU54AZU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeDi0KaUD2W2qNHbxTy6gZX%2B6BN4bxwX3jhtWGljFngIgHU1QIC9z77RTLU%2BRvnpIbwLcdny7Jcj9esHSRyWWjMQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4v0lvi3WNFdqXECrcAxToOkcDwozjQLNCBRYWE2SzhORSNUf0CLcSacJ0tZw%2F%2BwqI58mBC42xDE8Q8asLKPts4EBa7fCYTaJ1pvHH9OjF1GpkfUDtV4fj6JYp%2FQzILaDZ3NVpsq48jrEKa2%2FCRtxHnhZADBvybUOEruvJdj3AtFOhsQB6vxaOoYW%2BvXiuZOgbB95iwgIYr989yGJtYrLLjVxuvSZ%2Fgde6aZutet3CWHjYl%2Fs5Ew44C1UQOAs3FWIy7890xYO2KjdC%2BpQM3JHS0axNM%2BktiGLsxcUaWPkgzIeAGj6YXdo1pI%2FXJsZCWfS8bv9IUV7QomzQf8%2Fx2%2BNQhFtEwrBvglgczguEcLwuHYICOu96rCb9lDQCjNzArg7W%2B64RnPdlJgFx5ApBl1KD5dJXTDQPEfKaQ0hm9iDaT8v7DPge8eZPccCZxUdhkatB1dIeAVqkDTNwfY7ShB8sXwDeVmyZUZ2anxW%2FNKNatSgHcBCX%2BQrDhxHnXjHqdyzaZ2rhCDrDg8ks0tFS8Pslw6ojHgZ7Q1u79bKsA8jnHfPH91JlcrJlz5l2Cxlc3L%2BL68W%2FLURD1AeqzBHbI5X573v5A0fi17Vj03Fn4QiNltN5h1iyrNFBhrAIgF9yeOoDgAuAd3jEFsovMOLB28kGOqUBfhrq5fLeibfk9nCSVtab9pg99eQlzyPTDoL3wSd4srk9TpccopfkQ7RHLeI%2Fcx1zfTH1hFuL6nBSnY1sGcYZFpXTSzU%2BD2mZPzZ9JefWIHKy5MYRcmp3kS0yxpeVTlgTvWU8%2BY%2B%2FII%2F2d8JfrPIqQrakbSBoVNfvabmRR%2BRwQiojjxPLd7ZBcx9hifxeYsm32Ax6dGuSv9giTj%2FEXKLJSfu5raOZ&X-Amz-Signature=8d99f9c34ababf095316bdd012b3f363fdc0fab03861f60af09c26494b7242d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

