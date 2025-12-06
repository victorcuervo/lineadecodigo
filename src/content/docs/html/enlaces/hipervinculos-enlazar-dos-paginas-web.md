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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZI2XGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi2ILtQ0Xe4F5FuQcmF3KFej5we3gV4EKRqhKeZoOPIgIgAMBClMceveqzLHozVosnjri4hhbu07b25OQ4v9Nk4DAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDE45EXdvyX3hGbFHRSrcA6G%2B%2F5gfBzjXgW7jO332WKUrkVHjH99QgPIivIySo1ZgTavWlD%2Be8R7AWBy2%2F8p%2FAnreU%2BmIhlmcKAfeW%2FGvFPiO9tD3pUCOSzBn6lMZ9U4MKDWsyNp%2BPL1RemEX7aeYPEWerggVhGIwiw0cEE20IiL9NohAWUXri4h%2FbPVNrVWocz57PMdNOWg2Te8vqZqkGVrL7XzlUwdoaF1qljbkFauMWJQaz1K1BuIoTRL9V2XmLfueT2%2FQySrkCF%2BH10OEy8F3x4ByZi%2FulzwuE%2FK8Qk508%2BDwsOaOQxo6Qr1J3s6ov2YKb2fohsN4bgHkJX93pW3e3Bq04gsOfd%2FF7EQF2x78cyFRKXlSz9anxC%2FkBOiwLtvbxNxnh3hgdI4g26ekSPcLayNMpsd3A%2FleVv8Nrv%2FviWhS6qNzEzLKzGl9fv%2F3%2BJWa8ngdGQneHMZSdAfX1yZoaT3fjFv9D2VekZrT6D7LGqzTZR%2BJAmjQKBfaxhySKbSNRvmd2dPbGKksXZioHnagbghoLp%2FrL8l0FFW1UoG15M%2FNGy3%2FP35FxpUBlGLvpFr%2BipRUfcfrh%2B%2BjKHv1vJxW8Bh3JOmWE5KrNmB9VvhJ3Mk19JOmFR40A5EtqFS3YqiBYvMUk%2BhvbfMjMMyB0ckGOqUBbZY2lpJyeuuVC5h6JRuJbOkb%2FCNsn6mBhmLRFZHB9LgYlNsRMTjdpmL%2Fh5ppu%2BeO1QeF1fdZ55lcGKv4LkCjD1ft3it5DDORLufweHoaMeTAoJ7iwK55qrzdnTVgiLWW69o6G55WDS3JUt8UsIPF1MUywauHAC7FI6oM2GRkBgxXJ0SMoyRa7H7EBR6ItVsCIre1EYz713lb7TcJQiZUOO5qcJGx&X-Amz-Signature=b291d62cfbbfb1565935ab03d16dd90b28206a1aab78fe52a755ffdff1e7c7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

