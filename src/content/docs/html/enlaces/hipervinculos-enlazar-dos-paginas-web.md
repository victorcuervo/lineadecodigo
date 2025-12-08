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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB45IHJB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWG8O31swV5PVxig7sR6nf1yWh%2FziXaOqsVfGN3PGcIwIgO3O1N1kApSfMcW5M%2Fdp16Qjr8sIoH%2FqREqCTVWHINskqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMe8FSO%2F6%2BnoG4jTSrcA1w37JQcKZOOn7c1A8TbWq7YYN5ASCZgvcuXGwjolH1nvnMVa4wU0%2FavxlkvUMtLLAv%2F8342p518NWEdZ829Pvu6E%2BguJsxO4OW6bCbfUUR9WHOM9zcbofTZ82JXG3DKX3W%2F8v3%2BE00QWBceSEb5pmdrbe3eBM%2FIQu9B%2BkHwxhkk3p1ByhDZWw3pXou1GQp8SzhmsUp9T6j%2FTnNdfahdLTt3%2FKehHZeDicvmfNwcGs5%2Bz0Kk6LcPEbUramdwEwXJzasH3K4fHStbKCvSgDjq6EFzkGrp6F%2FWse48T3uchwoTGD4gVnDPnJkP22aYRaG%2B1fIxhTwqoL7IgfBGY3RStBSpjDHPFIchBpqvEc7mRsOyjD6adpDKZaySps9BfvcX%2BGL8fLfgPpQ1sSXl9pSsUs0GYvmDixjU4C9Wcej7nfpfLNeIQU02edc1VeVWFMM%2Ftgp6h14GjiiNY4DXdm2wpQ3B%2Fsvflo9BXrEEeihVZs4aHABwG40J8fNv%2BmiDvWrTCtfF4%2Fj2dlYujBkdEXpBPX1sWuMlTGJqxNgFPzTz6rFsZQ4f%2BiXiOsf3lXFhcdDQlFWx9Aho3OR663JU4Dk2aUS1fJgNqTQnio3AAAQqagvx3voE4u9aMo44gXmuMNO03MkGOqUBbJcRTLnO1JsYZ2VzLbcLIjaAGJkLuqp8ED970FFqZZR6Q7abDYW7jM1ZOpb0f28n5SA3dRepbtaX2bdbWx5Udb9zBmlRoV4p0erGxjIRWLTWH0tKQCzMrswIlnP8jzRuSHRO%2FfDXxiMAjqKCbHo1%2Fg9asNL%2FJWKBWug95Gfjv1LwPk1kXpJZBPc4CAhEEA7Kt0uJY%2Bdf5GA14kxFIudw%2BjNA7PnX&X-Amz-Signature=38e612459f02e3974e9bb28be9d2a25c85e48e9315c09154a9331bc54305cad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

