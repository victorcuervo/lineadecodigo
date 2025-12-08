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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQS4YKLK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0%2B%2FlYjNUmLc%2BwjdvfVrF13pWOrGw0rdjQD2wmA1GaOAiBmuuq54azq1wwTB9%2FHMYo3kndBIHc0OTMVRh5aZUnwRiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqm0g96EtFktnihWPKtwD7B56KInBzEyCpLAGML7DMgbb0Ub1LPRyy1l%2Bh7uqsoLTPfQF0sAnezR%2FnQ8ZacCp%2FJ8PGgwM%2B5nZLDQgLFo44QTRfxB%2FvuklkHuJc5cgU0MWL5%2FCSCZb%2FDIjOEO47p%2B7nv2Shw21%2FlW%2B1z%2B3VYObF5mUd8Oui9XMwrY1xYyrAmrdAUlwsoBNPYrW%2BK3wkhyzlEAwYyxuO8JY3TpHz8TgA7qCybsM%2F2wRw1FOyhL%2B5qhhx%2B5x9IDLTTVtsCpGTHizKWraBSRnI49Fk2vQQx0UMnc7uTn0JrqIyf%2F5uGqksKJOHtwPHcQfKbCyrUQAvmWEBpv3E9p7mGlsGTbXNzhx9rGwfKLDMMrvjN%2BEm6NeuEV2TFWjj7njtsr%2F2%2FXfiWmDc9f9t9G4Hw5CL6ghg%2B%2FQJi%2FJ1NSlKFeiUvUtPUh6%2B1Kz3RejPR%2BWmxfMaWT%2BKqJXJFpLhFaMHVktqBAXGsaoL4ON3Aj%2BC5CbSiaiATv2ErwFM5R%2FodQust%2FQBahrhPBMYCxBazDAq44OMYz7DUzOwKZrwJyliaxhexLQWJ82OPC%2BwINXP2602Mi9P1w%2FT20I9C74r3wLgJW3js%2FhCuK01LgL5%2F%2FZRT%2F9dvziWbN0fBOl7ef%2Bc2K5Nf%2F9L1MwqdDZyQY6pgEHLPYqXItF4DODuDXtK%2B77y%2FPY%2BV7b868o%2BMkD4rsR8U7BGoPP%2FyBtSOjixqGIPGLFrGX%2FSulrWOI43S%2Bg%2FDDmnSKBewA%2FFgEdKpAEYLQIuseKJYekwmlL5eTB8zyp%2FnpWNGWWQjbLLa5M5WJFfZU1ZNarLAfWc2CjwrGK3A3eMFX0YPvVR%2BGyAjmGoMOALis76jVYL6W98PBjdukI33Sf2pMS8PYW&X-Amz-Signature=e9a3275bbfafc5294642d0d373e3b13ff466ee7559d6ae3108081635e736b58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

