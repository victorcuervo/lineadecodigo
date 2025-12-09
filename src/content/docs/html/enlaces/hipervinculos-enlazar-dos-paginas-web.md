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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJ34DNI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCYeNDdskrADD0dKZ4gGRTbS5F%2B5g1OJSQ7eJiBlLRwQIhANXYEb16cnu72qO%2FWXdklWQg%2FVigzIWwHr5mmSskNaOhKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwglki16e%2Bm9XZ%2Fa0Eq3AN2ap59qL4OPvb43K18yWUbDhjnPHQcgfJa3KTJBxSD8zk%2FC3lQDXfNJKOLUI6vye3bcWvlVP06k%2BuPqRJqXFMj1SLF9vRuvMdiIaRb3giOAp5AU4nQUsBIORqwtqiukKxl7vlR%2FbBNwGo1eeV8rVVuxSFdRHBoddo9t1dO4z%2FKVjo2pc3SMKJAXet%2Fyby6W7wdMR9%2FZHbVO6s3lcmzxrmG2HYfE2yOcPrtmj4wvn771bM9bwN6cK%2BXtqWn0Aiv9amSBOCjj6SgqfWID0RwSnR3W%2BP7SohM7ZH4sP9cxQIPS3qNSFFyxpG6hQshPTtX1ZtOPoA6Hx0MbAFrkj74N0LPiwJxH1UNq2tusCaKKhTcfqmk5%2BaGsPD1LtDI%2B%2FHdG56xaNclAVZVhC1dMbktV8CYFkr9V2G03DxvT2XPnnNwLUP8uOQ4c6IPGxu3YFrLIfmcQ1THPI4VFpGGREoOvJvFStijo5%2BPubrzGuUVh7Xqjj4%2BTwaNaaaFVarnI8R94LivGNQNb5Qtn9nsEdh0dgRIZFWzXzi60pjaQwG46oCKqs5MbKIIwFqsFPmuW18ZQTNO4imbJCSMWPBaFjxCpRId58FtVElUb%2FouvrICxvJU5gah7byYoznr84Ig9DCQyt7JBjqkAVaBjHgGOVu24V4swYkwDRg%2FefknBmpUmb3kGmZV8As7CagmZett5T1DAGnSe6Rx%2FbrOW07JufnX2Ghn2bAJlV1qGsXvK9nmfOK7LH3JjDDtlUmPAq%2BZd%2BJ2QNYcfcOZQcpr6QMl0Gk%2F%2BnkhySOqr8dnaFPHy%2Bf%2FRpLMy3mjSSkHR%2FJrotbWleLTuyLyTscw6yQvYwF9Vj0OyKl1YhZhHQrSMSLp&X-Amz-Signature=03e382c1079d1da5ba6826b3612a1ea68c1331641259632f82d89d892ee8617c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

