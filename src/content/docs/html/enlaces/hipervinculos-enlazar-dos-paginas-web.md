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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEACFRE7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMt4N6Z%2Bw4j84snlyQBSiFgABbzMQFf%2FQ7IKhJeQcl7AIgXK4NG0dHz1t5qdXmgjnQCcMMP7QurCCCV78%2Fgo309OsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtsbhS1CrX48hxeuircA9BrSW8EbVYqXleqvPxmXNWGvw2z4d9rtqMZCX8T%2B2bkEPjRzBjrn9UJZT2iTNn9XabhrBa64WaJw6Z%2B5oeCRHyDP9BgvD%2FlQOof4PXxHbhJzkrtdMFl%2BM%2BURfh2AMXxEBg%2F2yNwnAN1yS5nXTnUxXpPxvlkshv0jFAAA7hWabUwTc8pYoPu6iv9VUahE%2F9cThNFvSWcz2VO0UTqz%2BybiEQjj4U0qPQM7Ky38nIUJ%2FP4WlIKetWh2WNgtittRyey%2FtPR%2FxwbCOHnFX9esFuOTjxgOoYnrH8VEfPy6HwNXAdHTxw7iA7q3MaBURylPa31gXVPEt5FK6MAxXJhbmyvKG3pNt%2F3%2FaTI6NQ8OJXCyEUZWQi7D3%2B6XyEgC6Xe9cT9%2F%2BmnljUb19DIOUL5x9te0dZr%2FQFzRmCBAoUCvJ8%2BOWmfVZGgbxAo7wVR7bzbiGC%2FMoKENFrbugU1tT3CwnQKdEek4%2BT1mLFXGFZHqLgu49wVWY6EzhzeSSwcZ3cLO1JrYAjBncX0%2FzmhxYyq2mo1iNj8G%2B%2FEFpnhHrSjkaygPUnLjSn2S96jcCUqQRMYqPyJDd7GbP%2F5XKHTlRHtldWnC1zPAbivEB9FdJI4GESiC%2Bq17LmD0hz6WYKtwnGXMOme4skGOqUBJoh3TSlhjm1DZ6zjr%2BCocfb9HORON0eZA%2BqvjsyCMZlofuybqlpaq36etwNXqqUJT4Z3mglToyzvC%2FxxHfYbFR0Otwf2SswDJ6ovmkm0dpZzM8%2FGldLQYnYCzYK4TlWzDKIjEVlwytaYJGySBJ3234HLHgRdi1TBwIYsXWN7U36Ah45Gf0I443XFc04zJePrrz4agaE9B7MMzQnpnKnw%2Fk9ol6nD&X-Amz-Signature=4c28cbe9a089cc343ab7c70546ce76efe42c8a40bc542abfd8083b148bfe2689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

