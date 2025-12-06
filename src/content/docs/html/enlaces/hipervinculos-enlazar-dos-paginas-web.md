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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XUGPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXL139BA6beb89sKV3eHhUKxtIoeL7xwEMMKcwIziAXgIgLc4NOgCB0fvr44s2C%2BXpFnF5pjc1E1qrhQhoP1zmpEsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCA1HZmYy3ZyBBMLSSrcAxRViEPbDzPhuDvbBbGRbqs5%2FDJV962R48UEBJOELSHKAqHMoD2zUud6aQmYOV5CUyZFyvu3NKOMlI%2Fa8iiOShtn%2F%2BNH7RKfK9QpPykt8OQUdvpCJGtXPMctxUQImupjp7nRNALkvfXE3e9xylVK%2BvFA%2FhagMsC%2F4gJJBOyKsjqyVvLMfDJL%2BnEDBliUDMEBEEQQ8EJcVsugCz4ynCQcYrHldgbrVjGGJGDJbNIhLo74S0H0Dip%2BLHBje%2F92lYOx%2FjYakM%2F3kRZe0j32tpQoTln1rq1zzztyJ8GcFXJS8FZ23cIx1Zft17J5dSKidwcJhn7giDFi%2BUx97YuO6xWNmy0TTYaQ9NHUwtiOhI3O84OIYE0xwLKBIdOq7%2BROEA8b97iRq8vXzwwCGd3Fat6QkSmziWaqL1gFb9pRNe6XtG6vSiP4oUZwB2WX7f219HnIIetwjEYg8n4YK1eEbTT6kUY1EGpqFNDwywWPKtT5r2uXtEAasYLKC6Bv9O0YFFTjPVWxso9hkYMj526R58%2BmSJbNBBzp8HilShl4PszbWyhL1IY7rQLhGveU45rqTSpn9bYaMPlcbd9JZX%2FVV%2BnUe%2FkeL9w5YZzjMWdRqcaX3VfemKAoeQ1QXk%2BtDy7nMNvJ0ckGOqUBNIbs1EsUhowge%2BnwAZF8%2FdVX563MkJS%2F8UHyYxP2CDf0u9%2BQVKbJHaahyzT1MeCI2YSycSx8%2B2m6uVS83KuwYd%2Fn9NAQxvxx3wYt4TmZ7XX4xUzIvGgvqUy2WTAQ%2FeZYw9krYX6Iauu8e%2BX2armtOg5p1%2FpEzcq%2BiwwoOFQo7zu1z7SNtq%2FSRfjZabedaieZY8VmDuPMnZe65a7Cq%2Fv84eabSGOs&X-Amz-Signature=187e7ff310c6783fdeab568604c8f8d083cdd3a876822fbb7f643d8db5a9a2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

