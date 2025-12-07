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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3EZVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoBiEE%2FJYI5lgs%2FujyY6vR2VhsH6g1OCgoDwgBQD4tfwIgcdvqPZoFCFq0I7t0XrmCAnW0rSRAmS3ksr2vfmYe3EEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGubOLVqcQxNwIhYvircA9qqK6jo2K%2FGKg%2BGM9CE%2FcLt1hyygXe4rWaMCZvXdOEY3DR2Ay0s31QVzQ5%2B%2FS4l%2FbBCNLd3J9VQmpCfIqR2NP8dWbqd6oIgDhCp6xoSLRq8LyHAJsJ1JCfHWuguty3xl%2Fjgmqnj%2F7NRqkdqJxtN%2BTECukKP3G6vcnLHVQO%2FTPBJ6tyk5b4ScvscJR%2BqlV4c0r2nzlj5fYkIwqOxJyl9iLVtPNy1Yxf68NVkmzpF94%2ByoFgu6VQB19f7ErAlgjbnhSF3xECssV6OgypVJrEkyRUa%2B5NjIKc0mpvKmeo4zStX9q4spKbVlRQKIU23OSA4ZlmPgdF7G7Qc5x1%2BnTlmSNIFAvsc%2Fk7eCrogWQpdNFcJhHvyVEud9HY2s%2BWq7tZF1FRXj%2FgTT%2F38odRF%2B5LAveEYZc%2Fq4q3RCssQRuP0dn%2BHkdeRClQZCU4cNdl87Imr1P%2FO8AbyJapAkTjlaSH3T%2FqeuWIV%2BNWiak1wB0QvRb1l6Bq3YGxd8xN3Qnxuq%2BjhuCM%2BUo9CTF6GqKKPt5biX%2FQC3oHIvVlBIHO8%2FiPNxdxlHrkwK0R4L8a5RUNs3PlzRUes%2FJkLvN8Ny6wVcaSaI5Newr5f8Tex88jhLRkBMFM%2FHucOLjiyHTSs0C7GMPm61skGOqUBssuo0lY4pkjaoz4FegfJylzR34OUP7pRX5ph1bB4QWEXsCfWnA%2Bj37QNQAkjkwW411X7HuQDU3ZT2wCSdscsOmjmtrvsQBZ9SgeuTrcj7FkP2ZADcQV%2BP1PpoYl9thbHiaO5%2FrO%2FYPltzO5MXhvnjL6gGu9kn3rfbDCUKHoHUi%2F4zfwtRd7Pq72VNr5uWfWlrbqw3qiyGa4TFlH6V5VL%2Bth4%2Bi8h&X-Amz-Signature=2264dbf88168b3cb4e1c19d4e740987c1185b9d25000c57d14c1450c0a69a58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

