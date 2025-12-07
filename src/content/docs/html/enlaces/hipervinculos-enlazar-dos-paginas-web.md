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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCFCELCE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVthRm7qynndeC4LOfLup%2FaOG1kUe53P8GhDcaQn2eSAiEApGU%2B1tEJq9MDRFeZt5OpLMpFXoOqy34QeOsmRtVhr28qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9PPgrLHX%2B4wdFuAircA2Z6ozhnfspPhGl6MZvsxrSMMtFmxgTNFAWTAKl6naPLoi1HKEn0fjuvvXEe6MYzEz6Zv0GoeOHcQXwLWIBLwD64iDdPb4oc%2BR4%2BBsuUxjxSUB2aDV3skGSIpqyNXA%2FWerc2v%2F93JUoPHOZQY2gRvhTDJHO7oHFCbKJXyAm42GVV72FiK5Qg2yY3iEnusiRqOi8yoREAg1NixMk8qmBOIv41F8RnhxMslB8WAUwcJB6kfwtiIS4cdzzwFw6uqZNgZxLOEb2iTp2E53oMqHicyG4Psb4HhEjPjBOzf55d%2BW39i6x%2B0TGbs2oYt5lmjJUTiyo34QRkByDsxR99XwbhoWG6l%2FZq2T2tJqjogeTLW5mJyqsipCb%2FSYKKdcNBGCaR%2FYw%2BMZhbAQlxlMp2j8AUs0OZAjtMLKFZgRLMqyIQy9gLbEDu5pP8Jxbc2qE60OkFBdVNY%2B8Zp1057JhWp0ddzaeOcxnWJYhlESGp9qelvxHZXKnbvkIuW2aYaU8BMKDKQVtNQ4EAhnmvQRBBUe8gH4zPFEzJuOk9m6O721Z74rymvY21Po%2BuAp9fwISvf5Z%2BaGREVxZx%2FfEk0mmV3t2WRqpflYZM7wwtiqDzDjVAvFecpG%2FRtBSVYzEXForQMNC61skGOqUB%2Fm8OgKndHa%2BmHCMMfoKcYqk3TtIccKLKs21i6ZUlbY75qUVaYZKGV2uLceDjMwng7fz89yYknrxlLQZ7Af4qXGls%2Bt%2FMfG4a6SawUCuKobG6m66Y6SRHF1DqNGPB2DKN5yHOzRpQYg18fo5RahfXabKfpeqA7Igq2IKPL7%2BesA8qHY4tlOZwIeAUPKc%2FTAOTE34RRjlZ4uVZLkIY0ZyasrxsWrwl&X-Amz-Signature=0e256d443603b42c7dc11a4db3ecc6d83e326f7cf316e3e4c95c424de4359e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

