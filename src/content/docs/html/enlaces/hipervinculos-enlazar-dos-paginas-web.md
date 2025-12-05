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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAKA4BP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw1OCCHeJklc%2BcFS2t004t0tSAkIFEtKIo5%2FmgAM%2BezAiAK9F8PoJ5Gch%2BhPWO7e0N0biUJpus9VcYyMmxFTZfCESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMwh6S9l3sHvJzTuCjKtwDOibrsR0PwaDANtoNzYCkXNaJffCUZzP%2BsJ08TK5wr1PxXtAhKckUCUM%2B4pYL%2FXCQH8W0w5n%2Bm0sPFJGuy3Xh%2BAu418LuWjOIbCweM%2BA9lKHz8w2tUrkTAOelztvaNlaMqAUoWklouiQUIGLTKHELC8lVsvZ%2BRzFs%2FgHs5zwqvdbzvaQWVkgb%2F%2BcUjl7HLqZWgI7gzFGUKLC83GYkpH%2B%2BYbGAS5jviH9%2FS0U8nSiA3x9cLhHFdfzCSgiqM6LTBX5G4HnnMhmOUtM7yFQ3xjHPI%2BzeUSRFsGPTLIcKi8AWaa%2FhiUzyv6%2F5G4OIOWY53ACF2bVrp1jz6CIDqqh2TEf0j7S4MvoEob6hdZY02tf2ZeAnyrYpXKOBby%2BBTLECUSTQw1ymEg7rlo6R6BNSNeNLEE6NS7GWSiLcQpaGu0pUX9jdrXLMkNaGymriQ3WpG6flpZ26TacgZs%2BoepbyLp4q0dP2ch6oQGquI8VwsrmQG3wF2S15iHO%2FgxhEvUC4N8hXWQceelice3U8IZ5wMkyHpNp6YBNt23X%2BuRgwTEaNnS2j%2FwcRgh9wvcoAd2q%2FNnWPdKXCJrZpZFQbUCczSl29sRWrOgBGKEjpfmhOxB5j60Ln9%2FxsfpHt7IbvgnYwrsrKyQY6pgHSYIlmYVOLF8L3GqzRmcM9aiyvxsTDBdqhkNfTf0k6b7TCL70aHu7kwZW6gzR%2FZ60cNaCWsPpo2CBzqkik%2BKQ%2FulSYLQ1vKtc8UOF5zoRcRzXUzL8gric639ZefWH6T9UOsQFGACEvCE7uOuxMw0laDZXihUvw%2BYCc6H6MvmE0rAzH%2BalYSdsruxGmaDP7efWoZw1%2F%2F98ub4sykHjWqhsWG4JU%2BwNM&X-Amz-Signature=61dde6ef7e58a8b1e41ce977846048cbf8c5ca3ecc9bcc167fc705b7abee6ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

