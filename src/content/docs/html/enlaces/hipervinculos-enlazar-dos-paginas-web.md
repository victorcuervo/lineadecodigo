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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AFGQYV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKxwcIac5ZM5TV%2FC1hux04YMHyFu4Aa%2F1NipiTnqPjgAiEAqwpvpPZV8Fr%2Flw3NxTTojBMcxacvnlFe8SX2ftxI18Uq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFSXG1wDzXMqajgVgircAyBlCdzm0I00CopKbRHPNPyCbs8FYVPauMnyJo%2F89MOQ5zLtcgPoCpZ%2F6RmrT5sz2359vi8OrwOmOhg5dTtvbow%2FgAeB%2FJ6UyzUL3WrFC%2Fi5lS5ChI0CeAb8qdOf6GpAajCQL8WfM%2Bj%2FRUyy3wl3BanqNSVERU5TkRp0HFKK7EyufL5wNrk5t6qEn1PBImLbPiEl2Foyeco6QlWrKpo%2Bc3QIt48U4IhDNqQPpe8VzG6ZHTu9RkaCilwHR7NeZ6kIPRvJDn3LLlZ8vuvpTn0vzW1FAB2CmzaJQTYMJ%2FMnSAgUdnyJOc41N9jEyrvFQ1oPdoSgb1aoMcMfNDXLNVDviqfivJ%2FBpzmfBH3c9jS%2BSKMN%2B25ZYbIic%2BjT5bYjorfTwnMKu7GY0c4Y3HmTnUgUJoiAGaclAd4%2BJcnsB5vcJiKIJeojKJ74QdCPnTxHjf8OzWS%2FmXTj4ehsGEsFZ9W2Am6CTOQeB2xluaeZQb5pMSrSanokaWpgQ2qWSI0YH6Mm0ukAcBZaAoIfgf38AeOnZZqsNreMv2%2B%2BGOpx1VgINaID5Ihv34uY%2FqkndZ2L6ElXeWe5unCIsDZk3rQs8B7aemQ1IXKG8yyLnEj09yIPkwBbbiKD019GTXDtNLr3MLnCzskGOqUBQ7RStlMmNGHU%2BLd0uZtPDU%2BAVzy5Pbs0e82mu9WgUMRJAkTu5EjYpR5R6TKAGmlVHOlGsKK1zPifRAOGZ0Lmmn8ODzWxRswz3gGIeGHaj88IbKfBPnx1cCqkJ08ER2XM0rqADV8gjMIvrap2HW75LmKNWOqJ5bt%2FtFfkLXAOkCnAhKrYYc7Q6ZaofN3tItzkWj7bNDM1pEYxF6T4JFQl%2ByLGM38e&X-Amz-Signature=72abb1829e9d03de05d597020dce349af26db0ec401c3ab968da4c00730cf2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

