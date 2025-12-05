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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJ6UEDY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjDzY3xQj6swCHkxqiOimnODFIjwY%2BhUZj9ntk0iHEfAiEA46PPAMjwNNkboCtfHlmMaavfABAal3yGKOzhO8mck7sq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJLXL0re1vOLT0cWsSrcAxxnJrh1Mif2N%2FlbzIe3cw7x5NUQR7cHLqL%2FYKEGNU0TTm7b5df3dIP5CH%2FGUpC0ahwXhVetTyzZIZ5OkFfbs8nUjCqZP%2FwBuCiXtgKswIXMLuWYXn%2BJyrkxizx0NeyXsCParJQ%2B%2FK3JKLz2frsfguwXzZ2%2FgIvGZU9jEbFtDkYeLWU2HAsFifTBY85lorN9frWqhqyqJorbss20P0y8CqZhA8yCrdDM0AfmX5g2iFrENrLZ3onoMPJ3wIY2VgqvkhVVDgWIEy1Kvtb0W0tdatQe9UcIjEgR7wTsJXnjN40aqceEq5Zn7FxAfCLZeWBpyqDaG7H8BtfxxNIGk%2BnPQZS9yPKZn6BHu9xG6TuN51Xt3TNS20YL7eo2bI3NJuYTrNLvaMj6KNW0J9n%2FqFrXS37w3jynuDBdxt5DkLCuabI08CCTeNlmKW6vipH1vR4zVgf4QD5ZDt5a88QKGMlH74U8cTJW1RcnZbtG%2B7PzOTVX3z5bkDH60I550jVYJ9mdz4dVGo1MvD1xXR14k8AIl9DJZnlaMxsQriBYqEwG%2FCsUmGXnh6ACNrG8O%2Bm0CqpAeiATZcq5VpkbbUsDEQfKX74NY0PW2PD4M0N8Pnq9QO89yum%2BvY7fFqrcikK2MOjFzckGOqUBmOPl4HcZozyVBmJ9J%2BHRFVHssQbESZJ009REiKjK%2F5nxPkFsYSUTyyqpLzDsXQYYZymsPS7XehnHcuAxmC2KxV9qPSLfkmtUB8wiT9WNCJUY1Irq4%2Foac3Bc1WpsVpSGuLd%2FuZJaf0gwGorEurmnxl0eCZUjEvgTxEq8wYkIRvnxMGWev79IMYR%2Fao2n8Ol7vENb9NfmpJ96DUZWXzA6qaiTi147&X-Amz-Signature=6faec5c69695622bca4195750b8dcb730587849789db9574aceee294cdb7bf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

