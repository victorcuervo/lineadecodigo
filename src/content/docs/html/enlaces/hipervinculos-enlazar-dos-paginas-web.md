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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBH4C7ST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9A90lfkU48hkiIcxO0hY8%2Byyvnt6GnfFFVYl7CJ70jQIgcDHLCe4E5FZ0gbtaiVv85FWuGcxVcARhTfvgdOM7dswq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIxupjfH4FPVqjtbfSrcA%2FagTFHvCV%2BX9EMPqsycyHx%2BUbniMJ1P5vrEbf346pM2rgkr95KnoNL4qnePPJZMl%2BLqayMcrjjmiZuBkv9%2FeEmeNXDnJSgiAIqHURDD4bms6tTs7er4O2Cwi8jU9UTHy3KYIk6dDs1BE0uE9020MuOc8bQpmSIKvl%2B%2ByBhTMgnudG%2B6IkWXsYezvrJMEBWv4Kg646Rpoc2r3A%2BeF7g0LioPn2VC%2Bsw0E%2Fa5P3ZGIk2omIGmATHEze5BcUnA9j1x6HX4DjGvPSINnXSi1medSjSHSJ2Rh9KnjzFEVPOz2VQAfitWhCpUy21Uv8U0oF0DdgO0GemBFELGJsNeRDoKpWraEL2bI3mMISgnkmzh0KoQyniC5a84qsUmkGIWbtQJl5GNl3gQywxMIUb%2BybTSTVg12H715eHNsODQdgZ1HCz14Tgx7J43xbFDf7zS%2F9GZuJiU368XXVNyYJjOr0jO98E24r%2BjQ3j9xOgCWW36%2FYbN6dgOFDH2nFjUTucSNDoj%2B54eIq7mbGFcO2A9YdzuSjRPhIVRHIMdN4AFvg369%2BZmmyPvK4egD7FCqajeNJ8VA%2B88b6Q48k55j3Tmc0R6SfOzq4f9NQTquM5olyi2sel3R25LtORLuYGG%2F5ypMPjFzckGOqUBEak2XCWduE%2F0n384E9D5oYisCg6h093hlf5lIin5aJ4h6a%2BSWwMhEbWpd9igWTKzUxbe8LJQrnaUO2nZ8a0R%2BZNdJ96NhQF4e93HSxWZU0i0YNKHaMNULByqMPCdURg9iyvkyCHe2eDclMUGAgWga9S96zYNB%2BV2eQih662czz5S4kCorRlXYVSxKbESU7W1eL%2BYjGwgOw6dviykeYGPvuftPxTm&X-Amz-Signature=1b29405bfa5a5a366622cb74e1dc40e77bf6938a4f57a0c4cdbb74e1b05038e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

