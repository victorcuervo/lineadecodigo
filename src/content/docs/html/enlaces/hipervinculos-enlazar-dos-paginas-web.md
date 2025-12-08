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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRD37SWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxVs9JIU42V%2FNq3kFx%2Bqg6T5mtHINsfHPqVTmLCZWNnAiEAoQH2BzugoVTFwu4O8lLlsIxRyVt8%2BmcFQMTVR7ejiNwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW8DqZiR1cHGsqagyrcA2LEYXAAYETEJBx2uN7OP1uZQGv4%2FjsVHsPIKYO9iEBYQHif6Z6WsdMfR%2FrSvGXGrXEJdOcvlub%2FcGWUCCqWOXbWrx%2FrYVO5ZUYtM6uDciDGkfhgQQ320Y3D33hYneZVRNMj2ee2%2BOaicUa8OQmY6dYUZtmOnXTdmx8h1v4caic8rJOWY%2BgaGyNFXwkAtbEwras49WKctTxBx2U%2ByYtWlTzBSntgEpmb4BgzM1sk0AfeRnUALxWcYE60Va7mxd06iEj2sPJj8nFHeQB1V9o2Yqq0LF9zq2qywfK%2F5l4tEYLxVMLXPJElUsdg3bgX%2BgYDYtCV4x2qGo4UMWIkT3IY63G%2Fbdrq3S%2BDq84MyePMN1gSdmTtjJvCazzGtSBwrVgXMowd9esLUf2CWppGzVjw5r8HAHqGUSuWEq8SO3MNwcqXykpE1Al4Pa7RoPkzKhZur6Fwp4oWoNbSgyNrhR4wVR4EKn6geTJqMuDZLHH57vBTdScp03DmgQ3Nt1iJn3Tnrfrm%2FhmVtBZQxtgNgLFZgP61Gc4MBwr28asbW7nKLdO6YjFMYUjkOMoXHhWVD38XNvvBsrkMDUCL2emfl8dEChsKoKiGKRPMYiflGbTaRNc33S0AMXRt08i%2B9L4oMIrQ2ckGOqUBPalRA%2B5DgMe2YFk9FOQMj9ZDWwKXmTE4h6VUGiMff4mtArhQLUnSCEJ9jSNyE0Ktvk9f2RWVu5Yw0Ztd9%2Bi59o7P8IzuiKmxGVh2qsZQfbJMm%2BG%2F%2FDRhBEDTmb4lM7tTFdjGObxFcaw%2BuEev4xmXbXnG7aJCw42f1YCi2lMCZnMp6eBX2iLbuB%2BmNz7izdczYAAxKTc1EF3iGDYx%2BYZjGiLodalT&X-Amz-Signature=d129abca053fbc64d5b075cc6de7fe0248842f0e50bb424d748459fa1e196ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

