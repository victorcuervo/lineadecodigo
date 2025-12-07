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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WORLGPVK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEinf4QWVKC8B%2FE333FBNisImaNMsr3NhEhHOQkaUXZAiEA2arjV3r%2FKJEJ3s5iGjGwIcfwv9hpdUDsu4SnJDopOwEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe9ZG%2BxnyvsUeQXwircA9k8IDMxUHXt0JJfvGCRZgzApzz2fim4zVQ4sxSm5lvOnO69uLr8v3zR6yEtMtJm5cVpkkr1qYXOUwunSCsFkbZOJCazeGy%2BSld6irv%2FzomKRN70ERWJgmwsNsYQ5UGG2ZR2UtYnDPqcx4fqEPTugkYtfGEZJibe%2BkAN5WXavirB1RzxEjiQzPEk3ziphdHN4qXDB38WFIId3RRCfB%2Fnap2qKUYhgvqCKkdaksA4qsirPPa7rnV84zzeWqpinUt1BuCDl7cJzICqpSMaTxUtiGeKI8UsrMvmdWH4hFsZf7TIdrKJcIxLMOl992vj5UQs1IFaHdHVnnDHdYZNjqvdfav1Ofnv3iug3nQ5oAVxW%2B7CLA2%2BWM83TY0MXXBIVMdvijxn%2FclibA1CDiFaIaxNzcr%2B3Uglkb1jJm0%2FVhIV2R7esW%2FDJj%2Bvey2Amn%2BHRVGjQ9MTjySlMBbrIxB56hHwAhQolSgH9uLWDb5gj0JaGYYbqara2PKk6X7EQLW52YDKSGGlOmlUly5iHXq1qsJF5vQkT4NgP4Bo6nTUmZgz2hrThwLLz1rAM1u1r8qfoNxe4J06i1mzuYXdnu3Ph8pbjsucuDC1UtqhLeQpzpRor3dzNLrDnShGNGV9JdWkMPao18kGOqUBrTQx7fvQ%2FcyNyHABtyAgAKoudFc4j0xo1BXTiypKqvR7QQl3wM46Ca0LXpQlkwZRcHqxqvjSlq3TH%2BqlXG%2FPrRxFq7tEwJgWV5EYbIdpp4tnsbZismBxCaYCYP9OGj9BNMwLdjuZq2dw4v1XsuvfLWSbhjPohWRXX%2BbZbcVDo8zl%2FIO%2BEWowL8wM5Qoa%2FcgGgHqXsRo73IxEW1FIAhuLxTLDx8sb&X-Amz-Signature=c6794dd2fc044c977c7c0b511f880747b00fbfe76f975283db976ffec3d0d18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

