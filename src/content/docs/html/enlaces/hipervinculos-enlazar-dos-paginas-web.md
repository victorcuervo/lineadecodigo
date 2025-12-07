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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWXCNGT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0kUjFOPfFo4y02OKxnz7kE%2F2uTz0f6ofuidkWjOO9wIgZF576NnW6r0lhxFpe5MEjDka%2FOXNRYDCQgkAgJ5Wpp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQvMOUed57bBLNIsCrcA%2BzMh7RqN189KMUryS6GAvQ9hxslPdWCQ54cGjiN7jF6qzhHthT%2FWIFhd4ZmEjw7jyyqzH5CbXfkg0DA2DuKbEIlRC%2Fneu9QRUZeSRiZ4Ly0C6LlZCUzo0mhXNKPPKgE%2BtKCsiomhCFeZBYyzJc79pUCTTH5G7ZHN0U5uV5DBF9bk2api8sGNRqsLh9VGgc9kI3GvxhqgIQb%2FtqXkF2tQtSQYNmNjElohzxTUKRHBh56gLmcTm4u00giYEJQ%2BTo%2Fk2A8OQxKRF1VVrBtb00i5eKvd9QIireLUIHDxBA3PVW1qzHHa22XX93zXlfTT9c2ORpeKBaW2zBkWMhKsALMI%2Fkp%2BrpHYXQ8YK3brGGOCov3zwssADOIoShrVaFh4F8wRSmPJV8uacUG2pADZqb1gctvyRVTTSOXzLpE7nzfzka9RsVPF6Ht4OFbdUZvvdFp%2F1XLTq%2FKOAYW4anfyh3uUPsv%2BYZbtrLOrQKXaMGq7qiBK5FaK6OgcGZOPEptDCZG30M3VDQbY1qS%2F9M1ZJ1amf2If5vM3XM%2BYgieBCW6QmIPFwrCmn73q5zF9kZLKwwhA8avJvXvNfZfJh2FjYvioC9JWrPNTNbGFfEBG5qiUmRCQ1BjU97dWfC4qRC3ML281skGOqUBLMdmi%2Fe%2FbXfoJ8SVGTSaU8qFWp3rpeq3an1qXJoNbZhCpkuW3p0bZ6eXncLYS7BEQ8WEFhVdo41IC1bpN9ugO4Tm1k8dSP7r1SYPxhirfONs5tTLv20oOlTs%2FZYJyBnXLWYf5imlV97aa4lOPhZfqNgCBPo4fHSd6oe%2FbAQ62Iy5soLW46JRFdAuHQStQrVfF6SEOlkzgdnBquylB0tgrcY4PQi0&X-Amz-Signature=18c052abab11f3371643095869714d6d8e2d1cae35eabe323b4c76c82b6c9811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

