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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCNPVGP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWUiBgKjc0WU4c9YCNhJWOcutCJomPAMrP3T%2Fm9pr0%2BwIhAOCVthodJgZgRt1fQJVIw4XtFCOoDx1Lw5cZBcSCJ43fKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7rTYVmi8XW8Io7w0q3APsc8FHcoEvJ2FldlY57WZEmte6SBFsZm3DfoaoLdJdrmc3eLADlblpyXjJ7TjQfbULpm2JYHXPw5v%2BlD8UluBPHqmHj6qwGTAg3o1byI4w0zFCfHiQd3QwPtpMniN%2BzSxXV25oA7UxO3i5jZDY5%2BObNLlBxKb0AeBQHh80uFqalqa1pETHlYVY2z1Uxctr3cknY19uekIFGytKVBc1B5a2eIHYS%2BIQcA%2BSbrDPqvNMY1rTeGWbES8t358PPCbE5%2B28i%2BB2OMv%2Bkr5DFtlgc5Cdo%2BdYOW9MS%2BPdjiUDH0xTN9sp%2BlA7bNSaGUqHtOJJp%2BkKqzIT0UFFT%2FcJC48Gd5xBs55h%2BhYxt3ABl7apdMB9C6DH9cQtaH%2BQeh2gC2cTA5YkCfgE3vD7EGAGLrRTxa27DvS33MgBxjhC0VFQ5D1jR7Se4zlYDnhRgrJpwC%2BJlgobZ127i%2FpjUAGlK3i8O%2FnXaLiGIUEMkQsK9EcUNc%2BCPEtnCBsnnIYzAlIOrfCoNtsGfP0fphjAACuIKCLF9zrdPSwCEmDo8FgNFn2Eu%2FnxQTLkZascrQJchZb%2Bo%2BnV6tRRiu2BrR0Re2oUu9Hx0tGDeTGQ5pQiYkGB1LOT1eVYqhRIhrkLkq0BHxiFNjDE3eDJBjqkAQ4VwDFRzqBDq28300oBZA6%2Fn370B49MJe48SgNWu%2BbfyafV6nhJ9hxTspj%2BZJIm9stFcK9TDIXBuK3DD1WHrct4eFoICogCSlPD1IALx%2BFgoUOCgvtC64%2BAIUmXKZeU2pOq%2BDndy0GCb7jSaPJ9u9%2BH5WDCCT1V7CWwtb9sv6yXAhrRAjXtkjBVNQS1eLtlAy80enHc039tLLCIEq%2BR503X1Wqh&X-Amz-Signature=66bae0e8afd779793ac0349d92697acccdf661abaf68ea53a1d55567e06bbc60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

