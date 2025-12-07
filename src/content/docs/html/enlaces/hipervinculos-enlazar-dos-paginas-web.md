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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYR56EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmsFLrnFo4%2BcFQkhxUVXR%2FXY6Hr5RdL3wvMzitSKk5GQIgTrDaQzTV0BR3gliJFC%2B%2BdizmcKc94vnEtG3H1%2F3BeMcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN8xJ5f60VzKfRaMyrcA%2FMaRboYzcB0QRXJdIfmsU5jnLAZ0gqycteuYe2o0YY819lTrZVWjT633WeNmcDopsNaOIUit5s%2FVhvNqsrqRdtZPTT%2FrzrN8GuabQTZQ7n1dMAIxPgHtbTnfjLcWC3KVCa%2BLT615QPz%2B3NJcXAPk97X%2FbXHW4Fyqab6rpnvk%2FoaiT%2BBFd6htiFNKVIWklsmagNBwuZFQEeLRry%2BHcr1Bx1ASXzkde79WbL%2BwpOGWU7BswkF5SVQ0%2BeCe3eTlqa%2FlO5uTJFd5TBV8oCLR6gyGmgFIWm0nyrLi5lmpQbe2oQihUj65VWIJB1ESGNq1wmXjKTne7EZsqvsak2YlXlmsLwY3vAsrnFl5hKFju0FOeuMkuK6DoNdEFFZ9i%2Fs2kz6OARbvawc6jwKAM34sZHLh5Y8mj6cIiId8pKvglnE%2Fw77UBiYjrMy5OHBoUVcrBCHsXnKfdNOyO1Gw4yQB21glqq9hKcZugAt8RFa8YsJEgNE0e%2BCvou2x%2FnPdf2Gjhe6ZRNBXdzQe%2BoAL1k6IrJ%2BhZPfHKyocSHQVEhCl9oUgAFANnueoGPh1KMwgDrxwsBV8CgvevoxUHl%2B66zD89TpWtdIhBPkN%2FqBuaqKY5E5nQDZ7xUjZEUy2oIXA5NFML6g1MkGOqUBAmPJrmAmqncNIq3GLDiQLFP27tHoddsrs5OGvjRoTy0KiCABdFaPLkB21gy3%2BFqPieCNLmTwmFvw0mZ2fg0z0vuD5Ad1zvMICXofQTtYRrmX7nTXP4xvU2gGtekUvcXMrFix56fQoe1sJmNyRaTxv3m8c2%2B4OXV9KmBBstL3D4XJAkTQd7Q%2FthcuWKNM6Td7khKMjjsJB9gF9LZK%2BGkYHqjokOvK&X-Amz-Signature=0c18935465446bd4b872c0b66486966ae3091ac41724a747b3d59c5e84765a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

