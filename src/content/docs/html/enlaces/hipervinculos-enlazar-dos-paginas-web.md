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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2UWNKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSWnTY315xRaeLZK7gElOifLwnfAuA8NTHaxgcuyQCAIhANuQ%2BYcbhIjEqDDslVIclW579abpyGvitFem3vEa%2FY7eKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYmerdBZFVX%2FJ0a0cq3APsLkP7vi3dOQCSj4RxSlYcsSPU6E2YR%2BsQBPzrMU4fMx9QMZGCZqzFgsW3vKAX0OJj8Sltc9WCFSQtQMwxFVoSGVvBlBCv%2BMCsC6Cy7KQ46W3zyipUBvY85m8O5y1lKAus2gdLSMkBNlyjMpuxqQMRytZhQwXg81aMSZOnYXdAQAaQWxjZtHvy1soDWlOe%2FFRwj39PWFDU8eIT3P4CYF%2FHQSGcWBR48iPBNj4SneRNpBJb3Gb5PyJTUSZkKTxRpW3uZ8lOMxc3243Fz80qpBBI0Y2fsv5P70OJ1L%2FacPyKQEQL1Fkh0lhD2GHVgmkaXpP4vgktSSIXbGeG0IKVw8ATqUe0OmfbwKWUzftglm8EwD74JXgZ4PJL4s7qAle7QVg6UNIYpyuHDu2FImyCQUHrWU%2BG6UEZSFVpZdOdX2FeCeSPJL7ltFl5ZvKUHcWV7dW9PE6xJtv6umJKLiSwEJ8e%2FE4efqGoa%2FOixhgGTeNfkEMqBa%2BB26%2FTRl8SbPlDECtDDLbHVm4esKK4LAEE2nicJFqWPSv7mjOKJ%2BZ1z2kH8uDpVa7awd%2BP6L1jXuJvndPwULTwM2YfaEOZVq8BaBAv3B%2BURoQoSlJWaixm53mPT0UksYeC5KCK8VRsRzDB%2FuHJBjqkAdA0eFKHXYX%2FIFEOwqVB6mkwyrPNhxCK6zI0LhFY1oa%2FtdbZ1KA4ZnPGHQkQZB%2F9w6ywCkJGwTGI5H24tgA6h2fs7OppJb%2FfbtpzRmDmlURbOaEdyjNhkSV7xVmbFB1BspkPG0TTy4QbzmNjNeGRQQ9LNhAaftTq8BS6Cr0DwW8wsEgtprtJT%2BGZt0AMSFqHQvnuWRVodtU3iXN74AbcZkIoDsfu&X-Amz-Signature=149de4b65776814994d97c110db1aa1d36d3b1fbcf1876ee6bab0ad454fbf8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

