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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJYE3UJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrfrF40yk3MSqmT6DL7ZgS7drA7u7hMISH5G0xBUHXxAIhAOpCgPnEJn1QLHLH4R%2B27rRDImTr9DhENHu4As%2BtX7sYKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH09zX3isp%2FU%2FGsbEq3APbVpEBQl1%2FaZSSa3Ts24IwvpFg%2FXuzMYaB1tfeVemVKIEtKx5BD4IplbJ3ti7ZuaRsU7NE1dPnncHyzpN1vHDX5Xb1ScP8sfjgtEjmNTYvj7%2Bpu71kZbMx6G0narmEr7V6l2TEgLwG30iqqD8yvjQwuSIK9qV1FcYftGhyClef2vpRfI69gO3Jay7QcgTNIeYyLnRDrKeU9rcA1vJTBSd0mAsyFAJr3LwjdIQ66LgzHRySk4xSH3LnaXusbNZ%2BepNIrKZK%2Be24FEMkga3puLt5%2FRIfP0EypbWU7f64a4OMjp0xV%2BPk9QP7bYJZ1RvDAbJbZGHWzVLsj5Nb9Jk5NdKUPkDqL7S0WeOQ3May2RuMk0K1ONUVaxrIvqX5MWJnbkTjopKJyrqaKuLAUpgw3gc%2BlJLxxxzUcjKLKPO1AbhIRs6lOgyxexj6vP77yqAslQoWTrlLuKK2qTN0ZzdRzfky6Jmllejn%2FlFESqXAPYfdaTPtcy0cwrc5j%2BqsKfSB%2FQT%2Fdf5wqn7xHcmRcQDWuW8ZfOSE4PidLuiBIRvZEYMctdUNNclS58sGMHkPbNeAQ2w5OdSSSykTRhJJWBmT5BAQi5u%2BJ1yrswbA4sGyKkjypTCLTWKRvcjzAjrcpzCQtNnJBjqkAaB7pPPGNEidms0XbND2dWWWlD5nRME6cUeu8R0lJ8Us9Et6JYuxec0WNCAHJId2tm1fIPhwluML1%2FWxxuH0Zxy7%2BiiUl54OYeb31XI3d5AfLpP7OjtJsCH1VyCRWhspj6dDQlUb5yPDALaMhHiyggu5sQalgOPkadeBkdMFSp9av85Jku0zV6ZD0LRNRpXylddBhFuB1WGBOfcRMlbKbbwb1ASA&X-Amz-Signature=0f281c926f5f6c137df8588d816b9c1c65b69b490483a7f780aa93e865cc39b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

