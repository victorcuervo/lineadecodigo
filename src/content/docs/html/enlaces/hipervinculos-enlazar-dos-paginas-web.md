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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6EU2F5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7WiHKv2eg5a6uED8gpHXsAwRIAls9wF6QFMm8dwoo%2BAiAPZkJd4k%2BeH3nWvh93pov5G0C02r6itiRtrmZYYJDyySqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOD2Ztiz0t%2FAjlA4KtwDA2yty1ncBpX8XhJUkrLIqIg4y4Bhdu4NRdCOVGdPyZj9IVC7tH8zNUPbUEZw6k4EfteqyakRGv04MiGUz164h%2BqCg13V9ix%2Bd0FS4fINPFBPjvl2PnDgQoXPVsAgBKC6gSV9TLF5Vf9Vs0KR9NXRiamPxFq4vy8NxX5xI1JMbfjYt1PL3ESye5LZT87VUgw9L0zH0fnmAKW9e5TKScLgNGxDXENGkVmLlW167tQFoQVVkMBnlR9wG0IBy0E7I2c4j33MqPDPV3At8L6c8gcA2FcScv173DwgOs5IV4BoxWA0OUpv%2Fr24hWsAZVdzw0MkLqwesjiWg4LWiYZb35BkfFwdrCEUhiqlxjMaWpuHSRtz7OXOdHwNxOgRnoGiQo6puYD%2FHfOQdUxYSR%2Bf7dfQoYCkr2gHYDVdBh5bBJX0SAFe4ULZ5O65sKuiHMcSv3C9AT3Sk2%2BikAI%2B6GlotuaghhbHs%2BBkDy7lL6xuZ9TvXzeV0OfRw23HykzjaW%2BaOFrdkjpX6c1%2B%2BZ0IIUMKkWRlqj%2FSCrB5skAxprFOqorBdVdeKQcTfv54Z5dp7oVfNa2mvjeUZG6g2bcN8Db3bQNBla%2Fo%2BZrDYlNYJgsPe6cO9k5pWePOjcmQ8cjVUmcw6%2F%2FcyQY6pgFQt6wz0%2FecTKxjexWL43ufqgFEFsMf5mUkLVmwsVCaN5noa7vAa2MO2%2B%2FV2EWHjnAOWHxevfeLIU0h%2FnP31WWMWJhO1M%2F%2F8aQ3zoSJMCMx6ryvqBTZBjl5yCjnU5P0lj615GQk4ULOaPXwkmQ2sxHnbZx9%2FXKhvZQEnI5C69DtWNeE6TLMWd1Zgw00rnOSsvhwMBivwxYyZHyJD1IonDxZvZl8r7fR&X-Amz-Signature=8486d3938693e1e2e12b33bf2f7a26c9f07248544528ac60e28206bf8c51baa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

