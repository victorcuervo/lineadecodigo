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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIGNGOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrItpKjLnK3XKgIBBHok5vnFbDuJdEmmHa073qrOC62AIgMypx%2B%2FvlD4mYs5hEjOuh0WViuNAEbIoyx%2BdVj5vwqXAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKuakDgBhfWpYTC5SrcA%2BveN3DHmN2XKPQ%2FhwFnR1RanRlJGsQjg4T8LRIUTjdBpzY3Ixhi2JdbS3Mu0tVXvSiUV5kASC4w4pV41tX36vQBonwH8wg3eqHdEw2SsAnBAeZ8m9JRV0is15%2Fiam1qC8h1GM9zsnWiCHlnXsigqtYwi4Sz%2F%2F%2Fwcb0v4fACPo8rJC0tRwYnWo%2FLnpKujrI6whpNJloLNKJnwq5uAOlJEK2iqX7Xzu%2BHDPywzm9%2FW2jTnS4NsErH4dBCLCdOc8eT8Hc1t3Sw5rD1Jz8l3vgTv2%2FWcOckjMADt6Kdge%2FuBY7icnSM8xpW2091BnGlnm4mYXzqzTE7MMbLAwDdo5x0JnmbEnLXh8gg9TR2ACHWbvNSQIkfSsjr37UYziRLALkdIZ4llstzxXDb%2FlKOaGHPh7GpGtSs1FOArnvnLtG4Y00i74jSCqVVg5u7H4rR7TIBt3TP%2FKKyX13qjls7hdZdYEh09dy95Najh7sQI76jGppKI3SqaiCBpw2FCvxjUV9bGwCwjxhos5ipsrB%2BXwiKNEWCiSfb94rsz1DeJoZpoMMVTO7QPqe4PepVuj8GvYye5Z92fFUSJ3cabRJtOI0tMSyNkvu2ygUZvV5ujoKnquxvP4HVBeynYoriZEDdMNa11skGOqUBKlGStvxSkeyFZ%2BuTb3LvouUm2fpIRPtz97OAT1CavZ%2Fox%2Fsx88q0W9JwlvK%2FvR%2FEHvoYOz3d64nmwe3a%2FEGYuTBrZj%2B2HJoRT9yTQvZSpRP47losdMWO4Cz3%2BTxlwwSw9Ozu3uUmANpB7HhCvNBv73ufCA0T0iqw54hfgrqn9hDIdgFlLsdM71yJNa8z1DDbCg1ZNIfKut6cCfEc9P1TfGXaBu%2FA&X-Amz-Signature=8d4a1e5e6fea469d578c8f2b4f23169a93b024518b14f2d4dc24525287e52272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

