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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNCIYVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyQDz0OocoOQmJ%2FbAlEmUQeZMR0H1H54wUzLfihdNRMCIQDph%2FDK1k8H6sGppOY955IYd1I5RR%2BB4bRSVw5cbZX6FyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3aEMcqI5m9fO8GKKtwD5GG8mQdxG7tWKVhsfQTWR7LjJ80unPRSu%2BzKGTb8UMtOAyUZv5sX8pkDBL4maLEJAMdzBtsjCebEGyBRZDyLSvGPNVikE2GZz1BC64RAwbKwX2iJ841jiGVK1vcHBjqjwWGia6QHlKylGg%2Fmn0a%2FJ34CLakh7xWF6q%2B156jDNM96GrX0avj4eWE4LZsZsQ3RmGxUceXu54Txh5Z8RAquCcTeRT7sChfjk47fBM8r%2FSUlfzfUIDliX6N22gB7Kv9%2F8IssUBL39qq9%2FrAttDiC4kvjASqbVhpUc%2Bnxbfu6HeCWNZpKHbWTOSvqlUlTpq4NOT2kUua63hutxB2g4VMBiA8mZyYqTNgCor%2FLW%2FKFG5we9uTPsc48hcHBu8oozMnS5HlWhij%2BitZb4h%2FbniwqyH5lAnQPQHOwAj66YAwbbISlD5KAr24J3CF2a8dISGn9tm6w12WTq%2BUuT4Ok07JD79Y7J1zGCPeGlmI0HagOtWMlq3EEMB%2F3WObCcjCEaatyVCH5OF4BEQQgz6DVZsKdEYhc3YSNgYOqTz9MNic%2FYW8qjL3pHAGyTcFJD6hDbE%2BMjoK6cRi5jKSoNMhBd%2FDbeEb3Nx8A6%2FAB9iXytT9kqOuE6wtmXDYUTGWLbyIwx9zcyQY6pgGF2PL46i%2Fs83YZxKHmSNojqMQq9xD0oqZuXb%2BAfhQ1Y0zbM%2FeX%2F4neXMneZn%2BKA2Ag5PzAFplij7JK%2BqEBs9lFKX0eHzoJMsJxoZN%2Fi9EsdAmfLICFoj%2Ffgs9zoIOogYP4Zt%2FLgv5thnekP8eUpG5UiRVlpUEmD9fG6SvW0cg7ky6EKsJ4IP8gIzlNpkB6LmUNe%2FTiguZF5uTVdc8OyHf7WyVBJXZX&X-Amz-Signature=0a33d3b4cec404faf6991e8d6915d66a115a3a09f2cc868f1ba99babd8b03100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

