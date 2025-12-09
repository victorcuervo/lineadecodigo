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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MHW4OS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH796LLx3B2TPVHbgdsCRG7096x7C1vcHUmvNRA4PDVVAiEAkGgjaqoxZiW%2Bh01gr8mPMiV9piXTr%2BsxsSni7CwFtmQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIr38RWxzUZ%2BslmsPSrcA%2FvMhrjd9W966RhNgHt%2F4jP6j0DKO2GPbYVH1L8%2FWf%2B%2Fvo%2FkknfkN0ihUVMKu79zacIt7nTgFm8tiCR4gzN7i8EYl60wmL7TKfV7tL1wK0ko2CG9ZS2KmIXmAWv9XAERMkaN4qiYvrk2P%2FbNG%2BJ5fIkCQCCrUMfQuny7x1Pc5ZSc%2F6hJGrJCbdFVvFgLhkhyopKQ0B9WfyCIFAdP6JDYZHvsP0O0xjcekawVllFG26UpkW5fR8UMYO17x7XBzZ3Qa7p8emGQ12aZzbc5ehSi8XvCz0mfQqRC2r5iBVKVgte%2BeaXYCMkFs1x0yvzB0J3cP3Cxbj%2FzVu3%2BoxIj%2FfoCpXEpFAxj13jdy8FeOmp8ZhxStMNe0IHPEYdgg6JtleWu7zUbI0hi5c2BG%2FM8tKIeJAQyxZeV3GYPVd5dOJSAFG%2FneHtHPlJiuQsogKVB6D64DyNW7DB4zIU5PPIlqKuFL8ooJ0JAkYuOfB573gobqSwSaX0dir7KqzUBIlFG1e8s6heI1jbidB%2F5opk6GJYmAMyGStWMkqTeMTBPjSP9iS8zK%2FmuGGiBQyXAD4ic%2FLGYYgxoC5gACgU2GeeRHuwXLeGWLNw7EJ3nIgwNb9G4m%2BcFpxAQx6QoeAJXo%2FQdMOqX4ckGOqUBzrDh4jiA5hAw%2Fh21fuQgsIsTtq%2FDuYBn8ykmbDj3auT5IRI50hGfqd11afUXb%2BegrzrcpEgRwtfbJKLg%2BZLDZtWZ7gg%2FBsfE1u%2FykFAsJk86aHJgDDmXxMJ3WM%2BXGWexardWK51SsvBJcGs3UmXjKuZVn3EKo3QcfpuhqKCS74SSIgxbi8gjeH6THXtheZkriPa%2FHn%2FO83OZ4dwDpm9RKdyxmBc2&X-Amz-Signature=11aadce09a462d494d865cfa33f142ffefd2a7c0484d46d79fb396b757b8b1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

