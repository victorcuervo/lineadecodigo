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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZYIPEA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7SXJbyVxtY262kVi9jKckcPOlD8ugSPJghJWPAxX1tgIgLzpc%2FysX9YwM%2B%2BzCeskSPAdyZRbBZf222iuGAqnLS2Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDA5nn5yrlIFw4UzLRSrcA62BRgOnRAppx3j3d%2Fx1W1ae7%2B%2FmLbWPWR6FW%2BPRVTvVqlDxasB%2BNsP6Fn4xJ76neiKmETF0EOfc6YN6juInr4Qt0NDqtOI2Ugz7kladMI8YIl4%2Fer48v0cA1QmoUA7JBAuT97KUw4pfu5N4VER5rRPWe%2BElvBPTdvBvgFn%2Fi2MPmX7BWkf8VbJVBzoocPTAPzRwIr1rntMsr3ZqkyY0e2gF%2FoE2ZX%2BCPqlHrc3ucCO92wS%2ByqHzgOfy%2FaGhmfoyZ1YxbJjh5m0YRt5WzMGcIYKObabaDpNdxR03zaH1OLOfbqg4E5gOp1NOxZYQ4pc%2FTWIoEM5DtX0HeDd6w01%2Ffkjbi5NnTfUJexrRycvULE7n9uwt1fO4OdCIPusXKWBqq5d3%2F3%2BhDiOBO7dsln5ZWtInX5E2UFU0T1T05tZOxxbN2L%2F9%2BYp2Nwnd4C47I0nFuT%2Biosst1HG5RDKv7NxnYf39dD%2BGmjyzrloV5LLG65hSeQvC7Srf%2BhWzyqfZWYsaaQ3KtBM4%2FCX6TjvyzrEu6v8v3XoYR0fT%2BhOmIPYydikfe3aEjBTU01iT2ygBwwsoENBj4TI5Id69uQXMZyllXxOsA108TVJF1XBMQtAJSe59pbpV7nIOZXF3xJk%2FMIbyy8kGOqUBbZ8Av%2F0nFTtWjjxzFA1IPgFqLDSt3Z7TqxwruKiTKAc%2FUh7k%2FqBHuS8z%2F5F%2FmjyAaUD1Sg6VkEFqUeZvR16C8jZlExuV%2F24n1a8XEY0fHGL%2Bx26Vmnua7Uk4tNzFegCFae%2FVRmc3dk3JeIjKlZzmTzBMHJlswPeEJRaMGEOkHe%2BEc0ovbY6275MvMrrMytx9SFwve4TxPPhZmoC4jFM%2Fwyu8Qqkz&X-Amz-Signature=199a72b6e0a11de40c6d8a6564db0f0f6278ddadc5c629565bb6ce7c71522bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

