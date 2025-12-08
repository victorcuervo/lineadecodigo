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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVDPT5T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0Glq084i2WXcf7gLZRMCgrXtCq6opYE7NZ1x78wNiHAiASq%2B1U2M%2FTU%2BBMVW5LYbrcvnfXICgJExESs96YkHT89yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZ5F7QRq%2B0KBW4SXKtwDhtu6j%2Fan8bi0p%2Fc11hbegNGY0ltcLAS4L30aESOq6S3IVKL8YEEEgaGNvh8moOwcnVns1985YnV8s9BoE5AH%2FiYrAcZdoZH5OpmNKoAmFdkeGzj1TrHOGx8KIMjckdplXbp568cJreC8TZ8fhDlyr3pv2tpB0hAerHlgQ8mSPLOEyJeKizfYVGZywzjMZUwU6WL0KJO0%2FysGQyl0c4pMWmWe3hYnEdFKEpNduYTXeGvrJklIasBP3z7fqDZEJlmniRrFa1nXOxkD9Yn47AdxtH96WwcD1VxULhs47nUzQ%2FHI5Knlz2WtxUp8bvVkoG50KogB4PNY4MdA%2B0TaT9DOCeeytWCU%2FbfafQ7QAyrI0IHsgzfbKSrQPQKg9PLhjknSeFyedIsSQx346cf0aotwuQhPGhWUWnbENWeNyI7Lg8bLsd%2Bdh%2BlTi2vFqsHkfPNK2g6%2FanvUpGK5%2FwHdSJazCe3GYJQU0oxqWyVPfzWx3ME6Wdl6QWKMPMXkLb6b9uBQXMmm0abn7Qojt2BGPbz2yO0w2WMu4sAJG0BY%2BCyRVTsJgzDdJX45fFEG%2Bc5Pe3GP0nOSYalTlItpkkMsYa8wPXFIkPqCGaW2zQe5Ioi0T7TQSk1VhUHgpn1lt9Awn9HYyQY6pgHZoXn12XCdILWutzpq65shDSUGMghWy9E6Fl6aRst8UaYdQipJWI4s1PFwNRP3MV1q0ONWmvmlk8%2Bm9erR9eYyv3YnFa005NadYa%2FhpvUnPpzwBjmQQ0Kzlnivo1r%2BHgc6ELZ4Ik2MDf6BV1P1SBfz6cAhqHCnwBQzwfLcklT5OHIfjnsef99lH2%2FRrKg97UhlyJjAlMSntWyIPq5Ys6B4grywWGQt&X-Amz-Signature=41a11d129c902a308786d2e9ad5080906d017ccb2c4e2cb1dec00213d6ebf65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

