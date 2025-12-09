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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEQTCFG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCqtJ%2FDlFq%2F3l0%2BmkBWC9PLBHNq4R%2B4eMK%2Bq%2B7s3FAQIgR9GuQ6gExgi%2B3IRuzGJi%2FdyxgxV8uHBUA3FMAk6NaUwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJZCu0Ag79qYQw%2BYircAx0AJAP1RaTZM%2FoLMJ9c6WKh0SlOuawiwQux8Hk5HNxcZCJiw%2BEqNfYnV0xLtqF9VNX5u3ai58ilrkhr9R6kt78ZXOb7YzXSg71NNeUbXSxUaTTv2jUp%2Ffxa11HQ1zsDOADjH3%2FwijlKq6vegvkmcg%2FMR18EfYc7%2BiRfnD1g9%2FE6PK0MmM7ap1TWMQgisWggywP5xuTsKxwK8B0ABTPy5BRqfIEAWnncKFgetPll4QfIDEfWWa0qzzgnsn9q3FNwr8K8qr4HOIRU6G%2BJmvZTkl2eRaCaF3f7ti%2BE6Xt6jIneLi2sq24lVBfXuxMa1l7nPXXNP%2B5169lWX3ZOoA3hPGX62BEyVYOpdj8E7T0SXYuKBY44I8KoX0KqYzJHH63DFt4pWgHAwEmgIDc6%2FB1bk6T1SQ3fRgNKGuIYEcn7P%2FcBUQg72o%2FnbLf4SBnzbh4PoHZ%2F5qN3wPEL%2FxoSWsipbIqpzqDIugYdXCILOTI%2BVMv1s6eLDGCFs7B8qsMDUW67TcEs1s8u0SmNt7mFyho7TRuDS4VzxelZ5NYJ9dApXIY5fTE5jeY68qj5CsoqjyW%2B0gGsHQequdxh1ejC9qPdqg3DiUYfDKhfue5oTgUrxe%2FZhr6ifoRaLelPVwrpMMPD4skGOqUBdG0aFnwoIqu3yeIXVGN8kj5ypfSPTHVykcesjfnjaiElOS20K1cliGrMpG0ij8D6%2F%2BM3GBQjg6xweG6KYfyUeBjL5EwFan%2FVAktKKZNd6GV9vqTfdwRP7akjsUl260h9nqWygPHnSDZk1ptLi4hq0PXlQIbXKqkZJoVmPuMqIM9CHHD13hnmrp09b6KDwekJaSGJsp9kwEonBti7CxNgVNxr5CGC&X-Amz-Signature=c0d43d8553ee0b156dfca66c1d544612a0db6f81e2ddf5e8279e62920dfd2072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

