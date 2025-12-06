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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGMAPTO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F4BUfbFHyUYqTiSaZVPuefXHDMgVehAgovExbkoNnAQIgd%2BTDsUBK9wt%2FjbLMucTBzzqiYYNPooxWiQR1SHlpdWAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEPKe92eAnT83Sel6SrcAwVvJm25dt4EiYDejVQX3AvPh9RQJWWd%2FWyi6N6gjnCRwymOlDYB%2FQUnzIUkOlOw5FEzIyLTpFsDHmdncxyYrPbULzeWR21Qm9QuuCjIdwGlX9q8bUorXcOnfV8iG8xijM8qgJgSuXZykeljOuiLNRhfGg%2BW5KDu5ott1pcS%2BQbVyha832ydx5FL78rkBzmOrLkBTubJoQQESktlqzJhGCbsoHMj8MIvyCsRJ92YIWvTf2mW57DTucrL6%2FeWXxcW4Vs81arYqLX9kfg0LnrT4IOifgh3mERUxu%2FjwFWCGKV2oaFxG0zApg950NN%2BgQsLddL1MOR5hHfEfbP2hT4gclIXsvWGI6eJZYjYi20Z9YQ2kjHL7RWcnEVBQgz6hQ%2BV8oUqSOQLtZeXhIeYkbA%2BiBws%2BBzzw0sNCrP%2Bg1FBkC%2FtgygdImDbzL%2F6SHwH77rzpCwVIzSDW%2Bk%2FZndjKXR%2FL%2BIl5SdabalJbP8yFWQgxOOXu0i%2BocB8FWkdxwvyssDLQLyRkJzAsk1SsjDHLvoXJQO1V5nAaovjI5wNjLnfhFEjnsdjKklBDc486eDwZxyiE0kyouJx0OiWFVk06nbvwsCCH%2BGNfwDoED8re94YKUYrngyv%2FcOtMXefs0YnMMaJ0MkGOqUB7b3ldKXs2GzFsT2K5M8xgpyAzB4KFKsfoZPDsXt%2FtwLbTjk996y6g9ev1KFkGOkwSBUYnTCDEAHKqovHDs5wFrwuC3tCf55lwzuV1hi40t9DkDb7p7wAe2ALtc2mV1tljcR772Fxh8bh%2FIWv0rWNI%2FOGqbQPNt7h3HTq7ZvwIplbjNPOQ%2B2Iw%2B0NiJ3iJIYqH0%2F%2F7mYwF%2F6YC6k7v8fDFs2BXQ%2F%2B&X-Amz-Signature=6b462c64d45b2c3bbb92de55a5a3c7e2f0286949c5384f8ed78e7b3964d5ec8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

