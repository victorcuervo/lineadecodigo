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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S65LKM2I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwrxbYe2Ic19ywYLTT8a7FGPiUDHUsPkYsJcri4oPnAIhANzf0OdiHfYG%2BFncAN9wzl16jTpMIReEMMrjLCX1vBF6KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySX49drlD2NxWj8fsq3APYMjSH%2BS0Iyl1LaGxjeEbbVNdj1OjVEBKPQj624%2FrKyTKMtang6zpoeecA6M8ya5N8yeSdQ7SB0KHjeXJ1vrFF21EDXvT%2B127%2FfkIThDG3DU8S5GhFZQ8illv6QJMqZFkSDGGzuswuRi%2FOjU9Evk9uPasajV1Lb2OAhAk70BjSzH3RgfByd3jyEpa7XQN5leBNuh4t8hRkhGGwNtUoFUfQxnWqIXL3b7TGDQXGHdBcF6G9kUxSjfBgj61rVOhMvAQ4NZqueAw033x7T38gcTkBYktE66EBBjU2eIaoaIcoZObfOG5wsG8WPC1HjUqbQY%2BlLAWPFlp2j1kYhQkpo3v%2BrncqlH%2FYi%2F6oJTabwsWYaIHvcsWDHVL2IAlPNLpYLC5FuUoTlfuAiKzlJxCKJVZAx8yafjSrSvk3XMPJSRfELCEZm4AFbZ8VcEQgmt6hqezYjlbY16qAmYVjlQMAX5kLauzXGK9ZQlLhOHOtmcA2YtIFds3qrReqXjFeIeSKbxlfiCfXCOrSD%2BOkzcFX2Z0xlEn9qADQeVTupgJNrQEG%2Bl8C3aEI33%2F4rTPPiibpxRh6O7fQmszp8ykd8DfbuZJsg0axYf0bhonpmKj3E4JgYM9hW7TadYejF5RatjC26d3JBjqkAbXBzHIPJA%2BDytFuDGc4Gww9mCLTxEoqW2VpOZdFkyzAr21wTR0gnbgbUQNFW%2BZ%2FcggEOms9%2Fq4aFEyMnkKN%2B%2FK0JthAsDlHAuUE6srgxgdGNmT8rxnWBkcM%2BWUPeeSL2Ky9NXykJXDIp8jy1rouILdITo07yLrCNkqJQhJQHuk0%2BKRbBgQ7PMJg4ovQGUploBbI0XuXCAs3mm%2B2It5UR7fLe5L4&X-Amz-Signature=d01306a2642c753939cff212f9ce9a68f26525e17b72a77211a6ce7de5112055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

