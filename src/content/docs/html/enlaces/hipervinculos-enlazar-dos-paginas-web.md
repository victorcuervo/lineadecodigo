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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7U4FH3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8Gb6RtP6rVhaGH0nz5zQua0GA%2BM%2Bae54mJUuvV9lOAIgAPRrrmh1TgjEg3uX8VM4Uj9D60XwMezqDaOInkb%2Bkqsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLU%2B7oB8n5%2F1EEjJmyrcAwlIsT6JCYxJJgmMO5bEvv1q47NDxy0Y60us8QZV%2FaqkFEcytEXZd%2FT9UYGpoz2AQZkIJejzV36wPytv8dyLXTNOOgV28RK5VcGPn4PeFO4Gsb0vHpEEdhGCdGH%2BGjx%2B%2FuekhvpprDbfdfBM3JLeKHzJXRN2Dn5ApfnKB%2BAKh9Bdku2M6vt6kaXUXfZGR1SjXFOlLl7inI9WKY6uEmt%2Fspw%2BHZ9fVUtIdUv5uJXbc9fnqlO631p43%2FrK3Wjf%2FOnZTPl1ErYLpqye%2F5wkpP2AMsX39%2BzkVpUu12yWV4TvvdjRtCR0%2BmcbVKIm%2BSZDCY%2ByC4n7Y01UyqBid6AzI4R5bRk%2FRP0QMigkQQu4GNuZsLn8gfU6as0yIt3a1Dlbjd%2BGzDeYWWp%2Fnx4IwknrZtvI1eKsCAwa1twv2xLPMoO32spdxhPhhyELNwGTfxTWQ2FS3oRHQkFEhxMlATKx2lKbDSWeqHCxBvnw%2BvxRMqM48yNMklL4WVTN3CRcKf98mYHfbMhNhbQjVAtfSu2BtYxkq7%2FRT2%2FTSmA6aqQYN5e3oAc2%2BDejvI2d7UpN0e6%2Fa47gvYtTbSWd35LgSB%2B8ryTv8GPUdHfoOoJgu%2BblwUKh9EW68jz5K9Q87agiP5XdMNim0MkGOqUB%2B%2Br7qRKyHOkxrpt1K0rinnUAiP%2FM7EGTXGyTJJwPQ939dGsKfRyfzaIYq4Kjwi%2BMNMILwl1oQviW8pHCyXtWHDtmR8DMOA3QSb6dLxpqgEEGIHPt1O%2F3ejqZMXSZ%2BlxDvBOadJiXDkqYq4qoO8HaSPyrn8m%2FHfYxkUoRSDTUqzRVdVYInAhclHXH%2BFTpujpnvRxHj3d2Uo3NefCaVx1Q8ywSTTt4&X-Amz-Signature=093b0d0a3f0c71c4849c110505c65da38bf9ca3857443b8ab95d76108ea15639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

