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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O37EPUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwwdX4oV5CNkrQ3oXTO6KA3jC5EDNlXzLvSbfI%2FjoKwIhAKUCkOoNwuwIw10NN1acMTkBy9nm5KYcmK8iT2Yi4gyYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyaf567Q%2FhJq6cFaH8q3AMnerSDlwsjzc7GlvUvzgEugoLA3e%2FM4OGmzFcDVwdGGL4r2cn0MuFJGyDjq%2BPpqEumCKW6fSM%2Bjex69xC08pkdf0NCv7lKBq5sT6e0bPNPyH4Xkb7l8DCl9P45bJ4mRq7WXwn36%2F29wduS03FfuzLLKa2pqj3jyj%2B38Yh0c76Q3UrHb253p6bKg03YkgmYdg1Cb0xnkvj2o7BjN5su3Z6y2NWmSD3oa5F7iyxBX1zMjjQ19Kgc%2BDmqDNUVMTl%2B1v21Sy1eeGQdrjPCkY3KEKRARJ1qQD1naEwpc0zSxe9%2B9VRs1LaAA2yXdg9FpdBi%2ByPHk%2FFxwpthisM93D6O2zPwsAN1MgaLvfmqTwpCGE%2BYQqZmlxJUtb%2Foz7lFtbbldR5FzCeE05tI3JlVSGYdtxkrPfZBfo89y9yrmsesCiMm109R1x%2FX7xOl2yN1JABnbS74T2Muxn1RrSOg9svNqyRgzUWYImZCcP7hplekL31RH327xFPuogI8mejciUpimKmxhWKKHrfSldU8G5z8tF7xVgeu3kKFZmpmdQ8Ffj47Mo81v0jRbA0ixA490pXi4EpSAig8ClDArpryX5Hy7bseA7%2FEVT0ah6w34PLocINXJlF%2Fz%2BcrKaQg3Kbf3TCyn%2BLJBjqkAQ%2BvnccURkti7joTjjm53EKIg7c7Ay5CYG1CjzBB8aAscytPmiWEn2WEUjax%2BTWmdirF5SkMxFYHOafkZyKzlcOCqp2YrD8UquvMGfQgRUXgxSDkvEQ2KH10Ys0RUtH1ETJJpq8Fo6f6yEkGBsNDYtHJZ91ZjPFQqeMDEpo1A2vAcF7S6Q4IOH2Scd1%2BD8tVEN2bAr6siyxd262olRzga5NmFElG&X-Amz-Signature=94653d3bf065d95761c68555f06711816e052993090440368182b1af18b6a317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

