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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTNSO7R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4auBOkMvdw5x7HMGn3k8EH9bRR4Zq0kdKTC4ieYWcmAiEAzbObyaVFE%2FLF552mEO0KsLF76rj4Bjvc3sw65c3YfrYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F0nEX8z2k%2FY1Jb%2BSrcA2KHVIJDDdPDjH9IG29p%2B9ZYQfCWoezBC62xII9gOFAma4kftvSjOkVINJzfmO87ljLLyt619%2Flk7Em%2BiH6IvXw0Vl48lqWpSqFPBNorBsDYi5QSeqcFUlMe8Y0Ukpgu2bSb5GgQBV0oIs%2FNr7IS4rAy%2F0wobUYH3oDQPuZ22YILxZHYq3rwGO82ly3P2ej6BR98OiL8IpoOJ%2FXlkw2Hpx8eN1Fk5gfwrhSZsnfupQWhjFfwEH7Rivy5OR56CxVtsTavCcywlouSIqiMfK3mApMcDn3jj5QOX8E6dkcMSED%2BymZblb9PDPNd5PSjjOfaBpxxg6hoHLHukiksMkA3CuDJfVjsmM4%2FOyPvFq1fLNl2oT%2BIilG6fLk1T%2BRkEEX%2FR3vklvI8Ps93XwJF%2FSt4b5dUcsakOg%2FKOAeqDaPfbTdpCAK8kyevEir3cMWDsUFQdeoSAHQyMSkrEac9Cu37k%2B2%2BP6Ra0a2CEwCJ3lxHpXBvoQrytjXQO7i9xscczlDHWykHDDwLXL26TMEszj6p7yHfW4DjSaKc6kIb8TFDR2Nj3i1YCJ%2BvHi9qFsJU1fZqEEe3AU4McPycBEQgVCxWz2ATuEuoKp6qr2Xd6HMy2L%2BR8VNwZ%2BVYwu7h2v0%2FMPzD4skGOqUBdeFCv0uXxkUb2%2B9rxmgxl2UpjD7rmTiIzQXoSnXVLhsaFEh9d9V1txBBSp%2BrnLZPBJSnClgzHuhLXa3HfvZOsJOxGnwdRyo5QcExOoZgWS7ehRU9ysLhOlr5ualzGOBEQS3JdK5ZmAAXXW%2B62KrngYO4ola7CCvBgq0GpzziOHfCMTkhRc3Om87HBMiFT4qA%2FawU%2Fqp8pwK%2B3OW6lDGiQvzt%2FOxG&X-Amz-Signature=221157b8718452207a69e3d990be407bc895a7c83d8b7150fdf5b036dcdfa0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

