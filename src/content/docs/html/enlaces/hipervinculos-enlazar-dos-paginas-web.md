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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLPEMCW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrw6pizAhFoG%2BP63cM7XUY1fH3WOkOfStSujS0R57XFwIgM%2FB8i0V0fgJuVpHUGWm6g3PjPvVtxFaIW4LBsN51UsYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDESSL0jAswIm1Y63ASrcAzXRu44%2F2tumiIBMeg2IsTskWXrHjHxxWN4WvHsCFhG6TevJjKk6%2BgKPBPkD0ChzX6ZUaSxJD%2FQ368hACSc1qROb%2Fjso3UuF1Kci2lYL55YpAMzFCQUprswO%2BjtlasmNra8C8fHpvcRduetOrnmov1f7z97kYJtNNPnEC%2FCCxd%2FEnXcI%2F4liTI8DHpsjVjgbiH4101YcRQJ%2Ff0JB8fCNDv57kCZgAuKz746gLqplJMefGmAm7nHrFlY%2FBQBkGRcRDC4vs0xER%2BUTWY4PpMbP%2FZy%2BPMYbNwULeEN9GObf9n1QszmP7imjyx%2FL07S%2FnB75vZWrNOCNeTpmyRUgA%2BkgJ3LtwGzeFNi%2FVKrZqASn1um2Odb42qFsMZFKK3XM0ZUcMX7SAX5y2AXz3t3bR6wwbbzYiXlNEYo1F44l7vn6H6m1hgdoray4VH8i0o2Zj%2Fc%2FkgQFqyD1XTdQzJTCgpl5T0SIB2pigQgl5%2BLV9ARI33owJHa%2F8EylyFAGLZM1l96sACnpb7ETbEYNjIqV25dGFUBaVcsYvEVaTcBrqEFXzZ%2FejJ5%2FVGxxR014SYMjzJzn3pLJwEPpAUe4YjEBcPprMu1PNYX6Y7IB5PnbBEiBapexWwlG04nn5p6yO03%2BMIfmy8kGOqUBOvxc5mmT20CsosHyqGG1O%2BB6xzfLrHPUyEWgVZRj3e2sjANtm9dA8uXKzdaOU8ZIt1o5L7qhZqo6bq0ISZ%2BUMXlbcuoD82lcjktRLBI2Xnw0beyBNiqGdtdRh6OpJUrpl0100JD%2FBjdT9dUAFJ1%2FmT2uf5OMwNnWQozU2Nsh4t4AOaDIHzkFXenqNG3uX8Uu076gAgw2aTF%2FsFZ7%2Ft%2FFiascB0%2Ft&X-Amz-Signature=80e490ad804691529a906463664f5b3f49c8cf70288e0433ca14136916d48fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

