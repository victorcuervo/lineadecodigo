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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIMZGEE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcXINb1M0di4SQ1UwEeN4DP0NAwlM5vIHJThlgTw57kAiEAolh0Fz2s2uyIyUqFFBsHczg6POILXzrrfW6HwklSmtQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBN%2BPzerKUzO0jkxyrcAyVw42J0rrl8HVHjxPC60RsJCAy38GF1LPihvbvfqRWaAQd3dmjbkmLhy55b5SbDlKImraDDBx4IvUWvfeyoeyuv2JWgT5Rxl33zu5mOIKvNLixgn7yhI%2FWOa2WjX2lDpOlQHxdRUg4UT9tzsFXZSEc4Z6OXIMbyBAvtcnxqWvWsOqbvaPAprXIOemERXoRVeSW7cU%2FYaC7yuSoTt73NGEtDtxZoo0CcAPhXlncKI1rejbP5Yl4vRRcyo9FZHTA8Euk6XTFkPBfit4pDbba%2FLUnbbXm1a8F0iPhV8C%2BvA8QXNAVpCskAVVDClO91cN2revBcTm%2Bcd2sjSPNtaKBMUIc8cSykFMZqh6ZXZOv0wIXxYcikl3pGK5%2BxpQhXzAArmy4KKocrDaidU0jvNvK6zge41zjmHazcTQumpTjkOczTj8dMqGdnabxW5UhShE3dlYL7iyvkqhY8mumSZ8zw0ERrEZMdjyZ40FoJMWfLxKjW2l1NzUXbiXO5jJtO%2BiYQKK6Zapvtv3etKAirTiWmhcISYVFhaZgvj9RJVXIivhz2DBTqaVzDb%2BAnNfl2aH6vKj9My49j1qyfIfbIkcWOiar3TxUml87E1nLm0AwQIJXQ3bKMJN8lz%2BYqiwnJMKLd4MkGOqUBX5t9qF6bdQP00QQPJ7B8Mvo5FsI%2BVzL5D%2FYjWmTB%2FuApnbygcDqmJ8e1NTUsb2eabCoV10oc4k%2B7USrn4L0SYU91VYGOXKEy5lPnLEPAgBfObcuDKpop5R066GM5jHlIrKXFbQGvDrs38ZnlFPL3FSfvcVDPKluFHuf5R6xHvkKK%2FaxQP8gR2jMFnYx0zex73k2n84H7Sjpc1zExcynRXff6tQxi&X-Amz-Signature=d6f5a01b4d7b310730a4ddeaf04cfecb1e1616b3c49829088aaa6046d2ac7f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

