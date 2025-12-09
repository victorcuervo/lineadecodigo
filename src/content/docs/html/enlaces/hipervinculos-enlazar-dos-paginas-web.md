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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRHIKRS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwcmK25C4BtdO7flM9TVcYL4gsKzTOI9QnCHoeQCE8EAiEAk7cTwaMCbpkyB5UjRuW0r9biob2c2j9HjfCQ8cWUZtQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc3AIy4R1e6J%2FbRJSrcA4dAyYHx0pNIzsr1CXf9PPAjZFmjXqOjrR8QwTOGxCoQdaRn9nD4L2zeSDvaDEHSquLSCDdS6fiTN472DTeXEc2Ml%2BU%2BSZHZFAIfSwaXFZb0bneGII9g6rcLTSCeyN0vjjSKATYNHTgR8EwoPKy2YuGGEuQo2PyN6Zes4CJpxOEPzaQlJV2sXF%2BvBcd60mKl5GnSjVtBa%2BxWWc3UxGArnhnn5l62e312dtf%2BTuBcYVWy1HixRFdJagBUBEFmoaeQe7GHxL5FE6By1ImAhafN9A8HQoI%2FaKYv6AHeV7oX3%2Bibe887C7DxzHYwKudfiMUSB2fvVFdz%2F3LheQz6PrThsyWX9m5haXNy1OuECePNLDGidmUSlgQwR4ZdTCTv9ls1iGIrtmCAcprWSUSZ7%2B6m%2BUwz%2Blwt8eQGw98ews55S9PWUeQElP1QEFmq9%2FDel3krurlELDZl9cy1cuD%2FRxH4zyTVFwHd01TvNp3e3jR4ROB%2F8o%2BFevGxto68aq8Nc4I8GlDtPBfLdxu3zd%2BAI7xwZkeGBQSOQ2sWEbyk%2FpEpUu4pCW6eJJPibERvDs3u05ugr%2BTf9Re6EPSBCGNUyidOMcYAgzY7tuss25Qa4ZpXlIGMvXoqxiwoUCuTeSaCMISk38kGOqUBeJhneoU1XECMI1VVuSiV%2FdJHekJV4WA3m36Os150gpvlKQjFFFzA8flJ2Tz25sUdnBJgdYbVeNltqsjSBW0AJLuiVfF1Q6mDq2G%2BcFAsP7S9T2FdFG6u0Wr8DQyf6RFq2ICggq0IvBvfzUjeZLfwcf0hdSsXNJNlG%2FtpqK2%2Fxx9dfvc21CwCjC2jb3MDjnAGBarDBykVZ1jK0b9LEKUXHyb3WdL%2F&X-Amz-Signature=6543304bb43aa5403683929bd82d1113d361f93bbb246dd34202f78a39989a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

