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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3YXKEB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9iCYVr3rDLPvDhzaZaoky4mN3Z6J5dFZr1VW4FU5MYgIgEWPwB8j%2B5yWPImYPd0dyF8k0u0nomdibGxKPtyKgcoAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICtyJdsbT9S65Z9mCrcA5zmzVx3ajN1jc0AyBAb7%2BXFdtt%2FxuejFRXR1qMqYw536aO10uRAYKpUbdYPRN70DfMCdxuzcEbAqzvgbMgU0aWJbbO0OOahIVC%2FNsPhFfsZO54UDFgwkVna8YXwClF%2BXQhuGAGXPzcxnNIeVhc9kpKQDUtZfPZ0D8j1ep%2FG0bkUF%2B%2Bbl6hMRzboiljDSYk7rv8BoBZw2C9cded018aUlzzGJmf3q%2BRZekCDIxhgtbO%2BOxZ9HaBtgpWTGLCjObWW2d%2BLbRg3vZ%2FqjaNNArodjzdsqGfMNQZ0uh%2BUuXeXvJbRJfgsjE2AVqHhmYjKP%2Bf8Dfo55mYFCaKkkE4iMWFpbTxak%2BJFcpPsICxvdwlN5K6PzEhNyx%2BqY%2FqzZdxXY7QxQeeRCtghsB6Np5IodSPgR0C5Z57WIKvvMmSP4z%2BSVEuZUS4eoV%2Fxq2PCkHtEIiL8ES%2FxXTP7OB9Op6o6Jyt47i1xk1FbjtcnTuo6HxMJYf8EYP4RTBWLG%2Fk3%2BbvSvVuGdLEe3UMLlXbucuysMvA4%2F01c4Ys%2BCXYPo1K3Az8M8JVUCOA5hccEod7BUg29cTTDiVY%2B%2FDC5tpvtThh8y2F4mMPjafQyZCn9ACR7BdPHJ7rAdkY%2BaXg0aTNLFaLyMM%2Bu3skGOqUBRfn5TjV0Afr76s7UY7QPrsUgrb9n3yitfht8c2tZoDgD0nvOBuqCgUdqsiWzQfEolYCU9%2FYCeeG0mic7e08bkT389RfbAMiz03ty2%2FkCxrC5%2FzyYXPvnFqAQR%2FtC8uXuFMFvLE8BsMdsq4DrsDMnNobyyQ35dPM%2FxFf3YAICyviQoJxbE%2BpSSdKrCLFTEBuvNFUNa0DLhwqkXMGjRE9shqm0XUoL&X-Amz-Signature=79f86b33352711d5166f3572a77c3bf9b8b29f7380114c64c4f91b3fd9b367b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

