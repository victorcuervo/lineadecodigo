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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTFGCZZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvt7PvVJEqs5VbRj1Sz6RPNTaQwWFxSmDYZf9bj13nJAiB9k%2B9b65Z2yHZidiSDykeRlebsRFdrlM6Z%2BIRhNvYMhCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM635cJ91rrAJW7YG%2BKtwDfrlt6ARbarQWNJ4NPlYb0fmKOPrrNt0i971vrnb4yfiQIXZBauOTmhGdNLzJ9E3LJegebo02WhNrMMeLJsJVP%2BnYNl7agyWVUmTdqNb9gnpeR%2F9ZvVIptyLXBsQrbFqw3FhytARtfb8aZm7s%2FPtAgEyQSdgYttzQyqwjzzevn3cDbgXtjFapBgxMzqn4FLMAp%2B1nW6At6mMjpQtQ50j32TKfz5ix57ADnUqPY%2BFBBS7zoYkDkAp6c00Xcxsho3aO7IPGthrNDXDND8yqgr2xyq%2BXTjltxN8N0fj0oO53tLJVUIepXJdXR2ez0FU6rGi9YbdNmy7KTLUPcfFTscAgcf3ioyfnTCtsgStq600%2F7epAfXYb2x5CfClm9fEZZyxU4pxCbCzE7b%2F2CIglhS3guFP%2BHub73%2FXD97ooWGouED2jLUSiE9Gexkf60Bf%2FKGxg%2Fi4QqJa3tSex9D5T6OCYi4d6vbXRvOfkcsyT18QJzpPxwCKsLw8Ylx1HTky8Dse4YQihbkdn61on%2BPn85xNnnoJQ22SkIG%2Fg%2FwdTYMsPn8Wap9g9vqvo0sebMOopwH%2B49zjbJb1uEYjMy%2FFOz0zJHH%2BsODmDy8C9FSVjzqo1Ixz8H2fy2W2Y0IXr0mkwqofcyQY6pgFn8hdndjVhdFyEYP6V6M1PlwoOs02mPfKdVAOMKwbNoJaYySZTslHMjY6qfMS7NbgLW%2BhDHXHjioZWqcxLoaPI3As8fLIxcdc6BsBl8x2gzONCyvm3gh1vKcJajxqu%2FJc9cAsvOx4NXLqQpQLbye9IFprE62g7gE5%2FYwYpAVjJd6MsoBsYWB5%2B8OLOLEDVNLDnw5Gwa3j544WFl8PL2L0DFnSIYxfD&X-Amz-Signature=862a25f9927ba4dcc328d6b2bc8c216006a1839e2a407f35594c01fe96df2af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

