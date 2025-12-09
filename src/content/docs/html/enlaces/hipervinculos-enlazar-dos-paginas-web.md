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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXA5AABO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FRVb0ZGFPR5%2Frk9alUx%2BlYWKrQUN3jqcV1Upih6eWlwIgQj%2BLBOAdyzRHLtWXzZd%2F3IMY1FxE5f27XIzyXhxFCywqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpaIZ3eg0aJGDdvyircAxNIv28a3%2FSUdPQeEi4wDTMdRVFqMsGaKRxl6E8%2Fi%2BqRiU9B%2Fi1VRrJMMXwzpLtdONH9QRXKpG%2BFWs%2ByG7Y%2FNlRJ0XWQYIvgDlUF%2BSTZ5HOInfmYiPbqmYFLsDFM93ejDcfHGE%2BStCi7r0YJjk8yqMKpgaVvayp2NKjo5yPduQDCTp1VVOwNjRvyZn2uF5cnXrlcQL7r%2BGCP80ozMGLJ%2F7vQY60N16chrfzXrBUVxOWew2yg%2BEUQFjGEXcQLzbiRNBgo8HvlRAwXrx2Ai%2BYdsDmAfoqH9655nbz%2F1Et%2BGAPKXLj305H3t86AADe%2FqujwL3l%2B3lsIJbl8iOdcYOhnVkLlT5uIt%2Fyk1PpOvrv1BbNyhsOApnmIzd6BNek4QYBvXNOWLvweVy8FdeWVSYxw9xkrgatvmusYKyKOo683pwW3lWjR1NNyJNHd%2FdC8StMR2wiJL0MMdHMnzaYk3LGT%2BGKBhPlvMJBAUqAF2CfA8m8yHq6yr7iwnAtypVUgKQ8FlJUjSjN2yuoFEwAfJNGgIHOWk%2F7l4%2FJagGWRVwjBFS6qNcMd5HAIkPuJrNyQxGon81PT8B2yFiYF5%2BrHySQS93s6boqRg0PhKKxdehYmF549s1rMyWNkhUvw2b7sMP6X4ckGOqUBrA1LaHJ7yh%2BWp%2FR4VlSuuOpUBa%2BCerTNqfC5Vh6lVaqw5t88LB5cyASTodA2QLBkubOlVyN5G1m31AE9lclvmnMu8xxSU6v9gkHHciBoteo%2BMzN3y8FMM8MFZVtHWtD7iNlOlHewELZrC20F04E%2FvAGMH27UNUrxQYGFg%2FA52B8Akpi4vtG4nguXCQgMoqyoOPVBo3qcuJgAhgRMGde71AXTGY6H&X-Amz-Signature=120cf6d0a8fd2c10a1b6c9563d0694dd4fa0badfc291521888ec49d2d73e180c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

