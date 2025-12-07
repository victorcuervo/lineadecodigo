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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33CTVVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClhosqxjMwCARtp6jyPgk2awEGZBA6WqI1l41m2pEK6wIhANoa7Dw7J8T4%2BzrI5oIOH7i5rNYWpK4KZep8vdk3cMflKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkQHE89ENJtlrg5gq3ANv9c8XYT7EkvmYJaPtb8eDFD0Hz1auZ8sROHgVo1rperszDgn9K38c0aB%2FSqU3E2M15hcwH%2By7A37wcpH%2BcOefHwm1COZ%2FOUH%2Fk48%2BLAftsRVncMzWnzzWNZfn0aJcuyVXJaPEo4gookjR9bqRbu%2BmPZHZvnYrifv3R5DAkEnoSRM2K9XUAVxw3Oc4%2BsxAAQYosNXZh2qVSLrE3wvQioyYlMeZOBCL%2FwnUOS1b%2FlGjR9xANtjaU88XagnbUx%2Bew7OXmOEEipyDhnrjTZsAYrTitAGcH5WsorrF9Ky2Ar1NH%2BVXNoFxA%2B9c6C2JvAvVYqFqOKXr0QkuxTI2gy%2FqRBOTCLjxfd9zRD1DkYdS57nXCmTa3pwmnw9WpAz9w0uUNl4O9bBSDEicepkPIjV7TxlIFedW8iawFANoCjCRbbjnDHLRwt%2BqKWuHz98UAomPzBcP4LSRhqviyUpzJJKJZw5SqdrUNKA6ZVBKClNjjFDIyAiSAv2wVv4PYjpmHTsO8HO0qUcfqn8acSOnCZaok6CeYTKehC6F57fEluBM4Mpen8r1KXFtaUGPkI2CTxqrUkEqlHOqWnMiGthF7ZRxbMEAff8mzlElChkLHvT%2FSRDuV7e9sF%2Bib%2BwaROOCTzCw%2FtLJBjqkAXzjd1S%2FlEI%2FczYK4Hd7Z9FymAYzLqs6GwHixs1ce3Y91ea9J0sOP9Je1UaPhzT40ZbuiezfyhZNVf6G8YuigcMVYAmXJcfxn9sncgTDeSXYLg2hI6G0%2FKwwxxPT3CFR%2FUDp9uMt4fFSoPByKXmCU8DXj4YpxXlQ8%2BpW4o5PRJcBfRcbv4%2BKRts2Sw0%2FmEQ3d9krHvG%2BPvuj%2BxZPlgGvRJNAawp%2B&X-Amz-Signature=d3c229db466624dfda75f9345c982d8136f0c957cc45da8e02637bf8f2ebf005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

