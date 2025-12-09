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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GN27ZG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcQJlUTjmyewZw6DIjkn5pSPhgnUuDSahmflkZpeAP%2FAIgCgso5aKQVxPlk3ZRQAH8y3HOnjRaNlcmbgkE7crKNJgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgWqx8qytnUbABtrircA8Trfmgki2zIGENSNvE25d%2FmaO5mx75OTPPK6dnkA4uC%2Bp9ysvgrOXkgYZHcaImf6AaDjge%2FsrAwKi2sot4JAyRIiKJGyA7R9SnGKojGlYxhKhMwxRaA14xoooaILk0afAyGhBq68lvLivEUrQ%2BSwlz9t7lp9sBPbvZqkvr0zv8%2B1ltigdPn0SBg5pZP72h%2FSwlWo27tUeg50Ef1Xa55uZQpPwhVSytjEbTMUsCU4EtH%2BYKgQPTht7K6ESo2uuj39fAxnnhRsTubOnTgkfak8b3JXLGVFv81Gc6GtnsyOoGVxDoF%2BpS94ra2ibL4wS1EBVkFoYCIQDIZyAaUuyfc0mjzAJvk056dzOr%2B1sLiZ2oqot6uYdT9xcSazxDh%2BOQJouj0SQEhNwNJbVvJzJYmfx2HkodGRy%2FoBQg6rV5nzCnuDpnrsSUX2X0T40gbOAXcN3KIoC1q3jhqOibi%2B7aE6YssXDF3ybKwCJJ3qkVjcXP0EXZ9xYcr%2BmjcsO1aXtzatR04dRcoBQUNa7lOLIP2Mo7vMIoN8NojX%2B%2BEquuZGy3ed4DzI9fC%2BEJlBr4JvAvjWlWH%2FDCAMHqUjYeWvoEqVnvBMvH2Vw7IeBwGW011k3u1ZiHbH4LH65eWEIdxMMaH38kGOqUBjomK0D3lIXZxgI6CX%2Bejkl3%2FwagyQSnkcCQAXGYeKbYvuRVl8lEmp09NMOnqf%2Fyi5RJnGgkr972LSvHCzOhV3JJNxsKsa%2FGB6Gn1sO97LYS1fZcYPIgq7TIhvZ%2Fp%2BLXVqQzqqKaRFriETs2eYx82rbVSftnV86f6tBB6mH76%2BnDoHAdqkivujS4%2BgkmNjoeHz9wI48qpXwjKZZzbPlMfdOf6n%2Bon&X-Amz-Signature=6661b8a2cebbb0482fa3a21ee7a7d14583ab528ac0d18817b0962819af150da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

