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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFKWRPU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS%2FSqF%2B0tPW%2F6%2FVRNhxL%2FEkNrY9c4Y9HffCtcPLI15%2FAiABTFJ51WJTZqG4ssGZ9vf3RhIHtvT6QGr%2BYhZb4h7v5ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMSxOwATxer1kUaTwoKtwDAqdSfyjhgd4mAQO%2BlMFgqMpGgpJEaBxHWK1bJ6awhLcJIHwsquXPYAZtw8KkD3SHcX8C2E70YYhZFuzuUEji9rCxWt6imE9n1dm2SKsL3tJ8X76MWEodz3zATKNJoWjYSW9VAZ1x8IXyMttpz%2BFDl2IF1sQbCeEobHIfNGktBSKwOtZbbrIwevjH1kbZmSVrZ4jzQyko0HG4Pmc344PBNT8NxlS2LzLliAPadcs0E9J6bQIVlrRdVUOfzOXKWx6V9Tdzba3ed%2FIuo4pEAtlllYqF%2BTOKVj6gXmh4NuTL5CfpdwJYhsIWXvsTRNn5HFMJMLZYZ41dwHST%2By6YjALsPfiR7gNOh23x84D4kEMSVrBcVzZfWsnDaPuBYNjqyhcNTD%2ByqBdzvs8iWksXBsmNBeT0qUQc15fOpDJFLs9oAd%2FvmZ2wUTO1YRuwQxD8YQHuyZsvyfszsUHNKdIUehUJbk%2BxB%2BVCqYOyU7lXG3NRxKIPFCTNUjXXmat2uRzaMJmWFO%2FwRLrEN0L1cz77ZMZVMRd62szIyGZvkzgYo7BQuzgxv52etntAJ7VYeyoJD6TozTYJEuRz5ZRDWl0VizFHwsG84lntb41ZGeU74LAv7b6Sl7SlZZ%2FJwDMLjWAwxpPNyQY6pgE8CfRCG1gdtIyg67aELPX4vQshI%2BzzsjjKbT7Ug79oh8Z1aExplYD7YM8%2FaX%2FL%2BARrcLzIvlx%2B3tXKhbJl0cDfs7Fxke3tFNOZnQ9rWh6mnWsggTa7mWO8GXSGd0h1OpBbcAMcCoMOzzOaqsNN%2FX2J8RS3ZAAGq9ucPWRrImvPBU513KXKMUH0hWk1vj6IQd%2BDXFEaoBqiPHkLY%2Ftw%2FXhg3JQXPZDc&X-Amz-Signature=95b11648ddea3b12f047d185f400fb1fd358196540511e5f1994e15a5db62717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

