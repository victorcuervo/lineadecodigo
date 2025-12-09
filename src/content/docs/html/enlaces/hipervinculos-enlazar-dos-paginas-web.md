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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4OPXKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVsLprK0ZIgFlRDEX2775x0xXDY3w78MNzZkrLXBZgNgIhALTKNLzs64J2L5hOJkxQ52kNSfRq1ZFbHtEcpyZLqXDPKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSgbU2tHnHRbQvOL4q3AOSI9yKSuXfWviPVJJ3ZxTlhC1fPugK5Hm2%2F7hkdZiiQVwIPRt%2FL8cfhuSjmGJN7kssw%2F6X0dVwUhyF%2BOrHHkTgvESiBatjF%2B8Xxgriddut2MuuzDgTqJqBJPir96gWwmqNrmpPPw%2BfOeqsBgjtYC52I3oG0b7bvGQqxQBBlC%2B2HsOeWKLNuX2%2FoCVMu80ENora7vM4tEfq0qBFxaPx3l3%2FCGdtvrc%2BKhK%2FE53UuUje9AZt1pHu1yO8v1%2BtouVpWeCvoxyUeyMI3RauNrN9yevIV1FGO1zdwupydnzvfyLk2CP%2BJ6yMkJJWWApGFgvPdnNBXM94es0qTK7LiBjWCDfWKGhQXVpjzq6avySonQPLrGqWdqPkYo0z6m25u3JsooyN4hoUxSlDgT8jtKf6HNsWa70PjB9TozVLPWv8saaeS3rO2taSaJijNoyZj72By9K%2FGDso5%2B3kL3q2a9SkAecGYGmADsej1LKpgvZXH3BJB8JQIHKXxr6EtOYzUlw8GaCzlBKhsJGXxNlltRrDcfnGBdRGfEanX7%2BcyJzsmDJafRhEe0tVU1wq8J3SjV2Gr6t%2BNJ66OazzOEGson0PS6UddofF1hdiqSJOGfabVNNC1nyZ0ro3zAgrS4yCQjCVw%2BLJBjqkAd0rlYazb96W59hB8VCAfn8CJKLAPBd%2BkuuIy00qTOwBryVqJPwGcTF98Mcdjpvomb5ZKT0xQBnut4JOPMkLwAhXFrUK9Cvh7OZDUuDEwpETrkEqhEKmwTJ7%2FZmN%2BCWI9tGJcFKOYUrz07ViNn3fFAH6TQ41jXgIx%2BrGgWUylOKl0bWbSVxhev8Mc439fctek%2BhTwWReN3lvWY37xm03xjpYukBW&X-Amz-Signature=89921ab58fb28d18e540c533802b578eb6f725ef1f2bf878bbd809430ce09884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

