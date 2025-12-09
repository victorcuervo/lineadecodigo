---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYTHSVQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX%2F2jAV6v4VzSStUDDNrEvcK3jX2kANnvphNBb02T0nAiEAvQZNbYe3jn52%2Bcf4dNgLayEWcxXlqUaIKmMkxRWF0DsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKif2xKYh83wnY6quircA9IUyqtskN1eW5q%2FTG4ma2ENOfhRUrEbBNbcOIwWvqZ81TA%2BjVgDClgN6J0qJW5birdHVThK8Kecp8%2B8oTnY5jlYeLsZCsKTC3aiMp%2Bu5bUk7muAZH37rpbVBiNPER%2Bkd8NPmp9QHFtgC%2F%2Bjj3%2BaYYVJaLBFzVUBUIzyUQ%2BM%2F7bBQHsbquIMG9hDM%2B8Ytj5z7IUZCbj7Z2SuIGVz8PuRX6mMiBt45zW66lyuO6kMKhlILaDyKRbbA0RhRuCSURN2BH8pSFnkEmLiu3mmVGuHDa00Mb3wBUrHAuYZfEYch2tu0t1pnFE6vOmxtfu%2F2jG6CEBqq7D4YQag2yCUvtl2dxAeVbtHxR27QFSBYQW3p3jqRPepubYWmnA93DiCTxtb4nh2zm%2FOAR6d7aykoIzZQmSOtnhHQgTRQRXDmCblKxajRSKFpeXJEccAcrZ4sz%2FIlP45VPSKr2Rjz2WYPVvtoDYCJSLwAf23m9YcKW%2B20GdZxW9dDZhsEfC%2FAmqBuT0ipPDcH8zgtXRwMDH3owEVkLX5a2b%2FiyF%2BrinL4a9TzVzhb%2FL3pTvW92s5JE8lPpTvJYT9f%2BqEeOHszvOuRa9O1gXsMa9Xv27wNv%2FhlI6Tk05WIFejyYHH1Tp%2BVQXUMOb%2B4ckGOqUB%2Bxys6BqwixMiwLc9diqCahXui%2B3%2BPrBNa%2BUeOJxN1vq7RLXEAmZz%2F2VidVA51Y8uw51KWgsBBRmnuYqlqc0HDn5MEj2vgEvzjvvTx11TjrG5%2F9TnDHThF2xjwGbxGPKPwZFdaAklOerZG6vVs%2Bo8I8w7sovSVpZ4oYs0%2B%2BmEPnHnEKdOBXIMwjuSbLIipCcW4B7FvtLD8L7iQtVLpiCen9xAUtpu&X-Amz-Signature=3e6bdec301c5fd79505c77fce28f30a0e2b76f96f0af043b623714a5485909d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

