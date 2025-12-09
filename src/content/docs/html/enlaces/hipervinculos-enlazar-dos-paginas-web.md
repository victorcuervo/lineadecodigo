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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HNRNBR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGkN4qjLlKLfp8%2BuC1NpQxlBDuXLJN%2BrU22JJj34pmhAiAiim%2FlTmLYq%2B%2B9iF28c0vrgGeYeZQW1FjPjVQ0nTe5qiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRl0Rfm3zJk%2FXezBuKtwDAydU9LmPIraxdNg4at%2FC4RQi5AxMUkR2FjNzKNxJzyEg34rqAc1W6lYxsYYB1TRmYWJnnrfnbcsSCFp7JPwlGqPNIdNuJ3N19d3jJVMUTO1ubJ8FoPDGSXkgkaWPTxSiQfpLtLQ%2FBVz%2BtwYrbkIjkCOtdJKdEP%2FL3NdYi%2BhNAmlwq%2Bpew%2FHOZ7LEHJREg6vDLOIYFUCxD8dpLMb4K1c8A2fOv5gbTxMnOGS1HdWOVDTkhor2XaGHe7FkN71bBS5WggSWi1acB00A2AcGpZWJGZ5x9smnY23dLrNrGCB3FOxKuN273EJG4jvWNndu7076mCILfYXI5u8fQpCMpCISV%2FlMoojudHbyaTEhhA8pLFJw04pYoeVTsf2fdVFCI2iCIh91Iu%2FrMcZgsZHhAPkIWxoyFNDlhM9rEV8JU8IQa49Lw%2BPcAGUr16gxduBxW9zCCDerTGuKo3vuQ96ASAmwKabZNaJ1pSLsl15AcoAXK2194%2FqcI5Kkg5A586msdLphMna5cc7gJRPYf%2FfK8D2abkZlPMpMipA%2Fj%2B9VqnZzzADBQscvP%2BMSUBmziSTyH3n4sf%2BjPf0ygN0pMYFY%2FR2XYrrw2PK5McPjThGwOlHzBvhHJ1PG%2BOtWYeF%2ByyQw4cPiyQY6pgFEvAnTnoeDxdZTWbqtndh8tn98EgQUL8jkJl6m3HSiDciPYF5N5hzkE6t0jaxH5f9l6ZH7vfmwaMtQeBePItzYxl8G6vSDDm5SC9N3cqC6eZKpM06Qs1aL7eJ8qh79SEREgLZG4rfVWFmWIt6zgoodpkLbdG5aNoBJW52NNh7d10MxLd0Vs3Ks7havlREdSXBNx6lkuN5RkB5RpjEJ0%2BRfqzRaaMY9&X-Amz-Signature=a83e1bdc97c742c946a26bd7a9f7b157f36c6ae0ce8ad4ca5844a37cb3764a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

