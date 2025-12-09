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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D4EZX6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRi6uvbADZi69d9gMVEMcMwTkyoTKN%2BeSWRMt2y%2Bo8QIhAIXBxsiVegp9IPPo9zJd4Pqh%2FfTRWaBftf04bWTRsfIUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjOZV2dgkbNaX7%2Fuoq3AOIehDFLSelBSCVeDlUB1F7EAXAvuKjVOJZOWMkQCimFbSNLvGk6urlR%2FC4yUxIv7H0tDt50PtIcV4zfEsYXWf0vlvZudJMkPHq1zeCMV66yqrXhtXI8ii7CC8ezXd6ieJhAlfQG%2BAwboidyKDpcFLwFU0GTxDwq9oP1NI17rEsTZLHpuBbRK6FuuUcSnNyt7Feq53i0oEvQbU5PqtJocK359ea%2F0hOLGG8uClfe51lvmNBGFAL%2BjghcM4%2BUxvc4WIxgOP8MNyNL96mZTQ4IZ9ZVtXR6XsgykeAStp2rOYNumNgl3YxnP1%2BOtPl%2Bpu2crUxdtEKCfRpCHDxObQL555b4c9meFxgIbGVb8Tctmp1UtlamEKn%2FIyzM%2Fwa8pReFTX9BEjHFn0ImsWhlIc5E2BJDx7Vq%2BPTOqQJ7SpdGLGKlQQ8kyuGZ0qTVdfhZgGOv5vjNWft5hDYmU4T%2FFjeyyrb%2BVwxHffKPkR86gJju5FmPrYiarHowUZIq7QkjXVquipsAgcw96Qo%2B9AwaEosyhX1LcKU2XkUX2sR9q%2Fmp5fUzcYd4ZbB5VcYVJoaQJ5AbxSlqD%2FpwzygUGW7oODz%2FWOCavQHhePJjKHUlCbMdLA0sS5Gpi6QH5saUIPkLTDV3eDJBjqkAWZpqMwRFb9hIuV%2BxqX2OGxf7QSQUVYMV5Z3US7pYpUBQMkakDIx%2FQYHCuUl10ObaPAtVGZR3LBZV%2BNDk3iGfvogxdP%2Bieh5UeIoYdb14u956TfXwXgp9eqR4G6LJxwFEzoxX%2BS2ueg2nbVkCpHxN3anHaZkV%2FAhDbZIHbQgfE7Xiq736%2Fn8YRZZX2WGIDUJeoQdld2MDRlEdV4cqfts0V00PhfS&X-Amz-Signature=90117b17c72073b724623cff569dc2b0bae7be6be0735722e27f27533e51ba23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

