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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHTDIJ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNOT7NYsHjE7AkUOptgYZI6VYlIocU8bfnw49DUpXVgAiEApUGEi3%2FaeLpl0cEyQhNPZ0O6PxvVpOuA5rS8WBYpEIwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA2FADRaG%2B1VAWWhSrcA0o506OFKUq38BO0ym6%2BgnMc02y8NjrAInVuhG%2Bo59NxtsxuIyxeEt6xD8Xe%2FtLiOepvjv%2B8fSpBuWncZtZf6qj%2FTokZweJR%2BhMwhe1no9dxbAttHH4hx%2F3VUO2FgN4nlX261KmWRtGNdDv0ObXcdgGRIHo26SD3LihDxrlHh83neotWZ0yzaC2GH8kgslGbzgycNHIpb3mPv%2BcPYLEmfBfzsN3NOPwwAJOpjNjoXvWkCOOiLNhA3b9ftcP63OJeUDBeqHCsen01Lnsl3Zr5bcmLwRD%2F2%2BNHEef3zhliN2WGn%2BOfd0Qj4A2l9AMFXzJNRLlgMxUiaoIRSnXx5GQYT%2B6RiPxBhkcWCWM9gwHa0AzdNu9I7accniBAQe0%2FQ1q7GXj2%2BwQ8yrtc3Rlq7R8NnjhjHO%2BzqvDFSsLdhxBQQOph2OWEntwKJTrB9AGkrqt8nJnKfDmbqJYjFUKd9J%2FttOMn5vgVYsfKIZUNGHnetVQjZaL%2Fwzf15vaY5HvWvkmwOPbWb9R0wdvsz0rmCMo%2BrFaauGi7wnf3RdnURv8YUDtnEv71ipVye108y2kEN3B4hjafT6GDCfeVMZOFOvNo6CRE2hrwYQgD0xBRsx9LD9EwY0KvDTGew7WNteYoMJO61skGOqUBWoNS%2FZuEIKUoG8J1P%2Fzht919j17CijA6TI9ESOwUgINvKz45YsHn6znjhpCWaEgvFF71k5zQ3Xx8%2BXT3wf49KVb2tWdMzoVOHcR1i85DhUbKrE844%2FC1dx5oQsu8%2BQ3afspPRohXvJfaVB4Qjw0z9%2Fi7qFGVEeVZlAUsD%2BwBhWwHGCsI0ynl03gMX5WccesP88ohLBg22A7aS3fBmlDvtaLwn6GU&X-Amz-Signature=8e263dfcde199548f452a634eeb0cb876dad194cc5643f14a0e251970826d2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

