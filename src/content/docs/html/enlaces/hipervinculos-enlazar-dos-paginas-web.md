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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22WA2GD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRPSvldH9QNe94poWzsHeF600ekO9KgUZKZxL7dnqpeAiEAx1%2BUXpVM%2FrE7u3zVecZGACopgknXSMSHEusplAD%2BZPcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDrwpJ0INZiHhl%2BbCrcA%2FNqTiLkcx5ZLJ5iGKc8DRRalki4JoHGgrooRK1VJy6L2xFomgkV9oCdaPRqLRmwD6ckT5pYhgvlxlQLQROjifLEOT7B2tIEHzdXOB11tcSyAuG6n8aYYBXc3bpkiCpd7cQ%2BMIZlccetDnxd0FEs4vfYc26Qlnt7dwpzaIVp9iqksaPWQbVwpc5uU%2BQjxakW%2FQc3VOORNQncSY%2Fh1g3Lgi8HyZyjmvsXQHEX%2F8OV9ySbYyDRe3Ja3oV4FGxEvb2wjZf3v4wtWpVQqtFqLzwkkVex9e%2Bq87b6xYR6IKHHTLUnXCy8VYVEhNwsy8AqtDppLzWkYsMGrziSQJNq9ubVZ0E0FeNPerC3o1QReXXtkT2quRJdpTrVON6Gzs7aydcxa3CbFXSJYdhiw7CIvusmJuOWan7QXqGxMGT44t5htIR5u2Q8jD2oowxwFEr5xwQ6zpCJNU%2BKJ20GlDguf8K%2BZ19nmzhQ2zmp%2BYDNKRLNWvwQOJb1DMQN0K8NK5v%2FmywhWCrzlFjED1z1owwvBrsAruclS6VLMwJjqR55Au48mrgKTMXdjs5MYdc%2FCfSKc87cXopS%2BYu8ZCNUn%2BNlNnqfq8XcPIiIZHseTwrRzYO7y%2Bq75f9Zesm70upIKldfMLSZ4ckGOqUBEohzU6%2F6FPh56HvW28YkFh5KIFcXWblKAjey6rYU0cVrbvaw23fRqtGZS8NAIiRCvHEj3wkf9DBWfRLNmgOquXQU4ad%2Bj%2BFBpeokO6K9VN6ermRh%2FbsDLzB2sDywkb2tmjqRoUiVQ9DN7bKBBaRlSlkYC8eFVBoyxQVE7T7oORsqfloezSN85Fr8Dv5c%2B9mFpHlLFcDsaC0oyBhAq1kcUQo3mTlb&X-Amz-Signature=102d0efab92e3b5c43f5b224a15d43684689c6cf1de65e77b131baad1de7d2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

