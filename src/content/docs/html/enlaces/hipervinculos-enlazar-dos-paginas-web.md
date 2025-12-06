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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7JCYYC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2Oekn9CnWCzSVaoO9qHiJidz%2BxB%2B2htkxBLA23QLizAiEAt2B5R6sMv4krh5gzv0P4fIxaODKcjyTAIGddIaW90jYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOy7v3PQxiQRGXpyLSrcA%2FMIWYcPFEaJyEoqWIDp30eIQxhVLbfGP7Su0mEIkdpKJWZgystZ3MUbomJtE1qYBkA74aiTBfsOx8oUAtwCaetB7yH6QnqPBl0t%2Fo0Uyk%2FCinlDEjzBZJ3Zexea5QObodrDvXruELY09E%2BiJe3aJIiMjLRrSORBSJXV0oud%2BCXN8UIT4BkBeNiY3h%2Fn3dAe80uQ8bp85FhUwPZDqhFZF9UsC8EhNvKj%2F0fnn0l3ZShie1yTf3Jpd5wm0Fx7dIgrHPQLl1ZNglUaqAIn6PoomO%2Bc457H9QfacyDhzVzJlH1j4B5JzGI%2FHiok3IamZfdgFvlLARN32SxAI86OAfnUqMzkdzAp4oPlfH1m8MrVdmR7sJZ4W4MErbmJ9n0vuRhltfeoBvOJh6Y3HXjfRddwRzvSx5aU3J4HE8wFKog5QILJ9n48dSR8FN06te0iegtEWkT2nh%2BsmWzWMjkHo7G8DIkPVcF4Q6vPB9l2Q%2B8PfdcjtlmzSgIzCO03opxOKSs1J2vjzY%2F%2BDK9ItQ93U9jc2gsrfcRfDRGUnCx4UnNndluiWr%2BhsvSCgZ7tw%2F06Uj8C8VLKRuAJy3NNwbY%2FTEbqB4lfTQVrNjCE2vzY0fhMy0OtF0GZK7nfK8VFBKa%2FMIzT0skGOqUBJQ0Le4EX3PftNzB14%2FM4Antr%2BITRuBZulRBjxx6JL1oPurDIYaOOA7OvkvYVDmcWqmrivwMJpIH3tDcKLjgwH1pUtRKDCBFte%2FtCyzfF3mzIpbQxpOGT6VfjZfHSonV%2FvfQFMnZVMhAO9wmjvy0ndRClSPpsw1gRJuaDTSuCdP4NMKD8qPm3O4UhTozrIOttU1SUVPY4frQyYnTGDBMogWKD2%2FiI&X-Amz-Signature=bb9a21fde8e128b8837b1877e4862b95c93b8bdc07989d930bf1f7f9df35b66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

