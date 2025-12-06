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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KYOLE3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXMlm6BRRImKbaAjkLUBDMjJF7%2FLk00D4SHwNf0RG0AIhALdAyf94UuSnPrlCqeM1g8hA5SAwzSRLnG%2B6lefy3scXKv8DCGwQABoMNjM3NDIzMTgzODA1Igw4Pj6WBJXElBKoc4cq3AMsB8SgrLA3atqb%2FSGhHlniGn4fzvSmUYrvFIpdirfb4HaiQRr%2F0nS2s1IW9o3aYq1%2BpZYpFqkV0Ptdj%2FQ5JdqgE8JSJOgTw%2Flyhu9OnQvq2KxR0tXo6nL4m%2BIFpIQ359tsb%2FeZEKADMxufnTB9vFzPND4zSKM41OR6heHf096h3TwFq%2F0ZjpyjPJ9Sh%2BdzHqZHhvWEthmmMCrmz4CKSx1qJLsD%2Fa39TpqLXjfy1j7PGTJMTTJgjTodm339HpudlBD%2FeQPHP3glJg%2B7aJCZlAfRS3aKjJVZ%2BjNULdy166WvW2nPZehOfha%2FKC0ydJgMFIUFV2JFKeDZf1c2HMS7%2FljmCwH%2Bws0uHwNQkzsvzGiru2oo1OAX%2BWkjWJtr1zM7B%2BkiulB7EMnT7qWxQ8PiXmtV%2BtpG12%2B9fmVENQrOquPvyD0h97NInqy%2FojfhioaPMCPtymZoi%2FGdCBWAotWiSnqrwKBifWnMT96yxlqVDn9zoP%2FJjjc4LsCQRiz564CIuUjH4ylCP9Sk3e7SB1LLk0Wg1K0pSAgOkInloB1SV7ZD3YdLgsoGd2pg5LiA%2FTP4S93nVX7ODemWZOCX4fxaYnxkK4agDfOO6RQDMrAC9P4po8NGYz1prR1nfM%2B%2BfzC1p87JBjqkARrt%2Be9L0vMCbcG6uJPO07BO0Z6B982ax4uSFOfGO%2B1HG05aIQSjXMv%2B506n0%2BMOFqblP%2BFg9L6b3%2F2%2BOyc21nTXzI5YOIZt4Lf2IoqwryDCd7R4Dpe2xFbMc9pALV2C%2FPN4p5HW0JQ4wDUu9wK3XHRJ4gcOimW8XM04tiAk84d7lfBuknFG6X2IbiK4GFE0jTkTGzFJtJqx37%2BRLjcaEAKRiyEU&X-Amz-Signature=1ac76506870307ec545de10a9c89fd0254148321d79994e1418e31f0f5c77c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

