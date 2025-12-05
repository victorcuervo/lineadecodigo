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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFYMHRU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjNyCiU%2FSWGKDwC1GoFgVmoIc3Vyc16hNAHapJyldCDAiEA9FgjH%2FsbZgG7lG7uXhWpgrK1WOLG53FBRee7ZErPZ0Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPuRyOOKOVfnII2%2BDSrcAzbjVkJdMgecITBLteetCkWRnew2lQCm8pgjQfOiZBVia46xyLJfs71r%2FF2nxSJqg8m3Pf%2BDoPZuaJSJftORQ9wJgmIAC0w6UTJvpzKK1NajgV6CHv%2F5zvnuwK0QflSWZ8jrLMFgBF1EpzF77KnuIuGm9sbK9lbcxDViHBEsafDpenWf9zn3BgJr1dmZruEwewHm%2BHnwJPTLqHQHJhcO%2F%2BD3N1nRTLVWxpN%2BbApFzn1I3BLXwPLGSY8urpwX%2FWyctQC5qSJa2oXMV8WicmcyUOGTWHK19gfRjPbWbAXe8HDU4HV9XUWUk3kgFjdyz8Lei7W%2BrpMY02UtH%2FOmSIP%2FdHmRVVsEHjY3kzJO7lAQwU%2BRqx94Bl8pyWnqecAIc4%2FvVp3owRYuXU6lVdtt7KP2EzLNcQmgm%2BqekUa3NvTNACnJ6QqMlqLjXBN9ecAKNFOuY%2F3UIkaQ%2FcVveoCsCzl%2FeLQzL4b0Dqn3wade%2BW5ANkn3dPygqyu8c6WDAh56jpEZfdmOAqcniHamrgtpgUUIw2%2FMpljyRiKXTYKlFXRRdZoldoLjiEihRgTirGufkSZ7IpXzMQvtjsmlAHK5aFUDqrB5gir8%2FR6MGh%2F3acDxlp43dVYMtj1PiF%2BC1UsyMMKMyMkGOqUBjf%2F9%2B3KmVuNoElWpmL8JAYb1t8isy395V9LmmSFPia7ji6S8eqtOtqMkD5Wchr0Bp6B2zX1JxuJjIFswmRlMasnJQP9yXpxiBPZt%2BPTZ5RIBlNOfou3t1NzykFdyqf3Kwx9nXGZZ9nArLNXJkAqaGmWn80%2BV2ZnKjqi%2FjVoR3dBeSx6hxjJM9fbMS3KhgCyfQvPdbsNToJJxii%2FtqdjdD5hRbKEI&X-Amz-Signature=3cb04217c57a38e532661ae19005e0f22a1b655f97f85166433e9431dde81bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

