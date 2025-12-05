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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDW4AEZ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbpNIAO1MBrW1drVIdRyLGObDFdbxQ%2BVisu3b7ACQo8AiAYZS1g9Twu%2F8LK9KV0RkIikMKySGL7ZGdrwx1p%2FuGo5Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMqAcXdqNMEtq5tIflKtwDvkoGj3pVxE%2FPLOZFtsVYgaNO%2FAqBFAWw3B4UHqtMNc2j5AXuBfjbffQvH77RpEJlWGxNr94WVKzJuXXSWsZY0pcOKJcLj%2F9DV%2Fi4sk40fCjGuURfLxyrBHQ6MDzjdnr%2F8koRX5POPlUm7zNf90jB0AYg%2FTxmXn9xGn2TneQV%2BykRnZeG8nEuqKVXRI6lU5Dxr2acoGoYlxWCA0an9tTlEoePRG%2BK3DsC4lbTlC81Ej%2BYpO7Q31HqXbvCWxOeEYC%2BdsjYd9yb2vHA46NLtGJ%2B73BX3GDiiFSk0hHH3ZuR2ynlVSzf23aLUXkqX825oEw9SrW54ockeWrAVAbwzGf1iIuO0JcTsG%2FESW8Hef5%2B4IJ2iNySqg5RwBO8Ha5tn%2BgUdjffAJJvYOl6Vl63QalX%2BJeySA85ySZ5US9gxrbnn1mhwk2ZYuE4fNxkZoLMbeo6l7YNwtaS8tSIDstzHPsiBskldE3FSGaQGj1FvMnUstuNBAA6JY67yV665fPv4Hy5CA7X1Rwx6RrewPd7ZpZYqmEB5DO8IBwp13YgUHkd0wQcRBAk8FITrWjvdRUNQU7rJD7R7mnDhxSOUgunBdxOPNNwaZWHMlck%2FxwWQ6kA4n%2BxaIFiJmGISIhodDQwnMbNyQY6pgFAo3jDiDeBuqjmVE0kAWs6EwYwTq7NFP0LOEs%2FpQESXa9XuvAnYt6BibQdaCMyH3XCWrQTHbssEVGMgD6%2FJcDdGW%2BSlfnqKynVtgnednOLG8K90qYQh0D%2BM7M4KOUfm2t1EjwtP4DJ2c%2FxSHF1hRoMd7vVtW%2B%2BJQoYN9XS00AOhy7hQDz4xCqmwtC%2FHK%2BTZRxMIt4tacdsjVb6gYGOJxNCTqUC11fx&X-Amz-Signature=10ec82b8678d93d550793b19c2a4b86942a88f3749fdcd259f5d828a774277e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

