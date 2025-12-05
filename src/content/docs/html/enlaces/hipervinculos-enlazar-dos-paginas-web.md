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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZMGNTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWWrUdhnNn9cZx%2B22gBi3WnKPpdt8tQMmiylL6iThkOAiAYmCMekyEDVFodqRvY4vrK4BxuINRFFCjRiDL7ve3upSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZL9sPnfmp6BggkQcKtwD%2FOPjg02ITh7GSY%2FsfhyktPePYGFkDTEiACPyN7kcmh%2F2eNxZqNZCoXUyGDsDkhAQxayEuM7Dbibd0FAZ9HKio2hSRnle7ET9AjWZ0nskloCTflio2N%2FG7oUBRGMMJNOFhvG8D0L1HbghTFai5IZCT3P4N5NTEx8Hbdl0sHtvS11bqu971yre33o%2BFtX9e6jlDQgv%2Ftxu0%2F9CWOAtn%2FD5tsknNmSIbJEW%2BMaD%2BXuNh4AExZGmGK%2FYPsJ%2BlZNfYUaCZ23aZPRxELQvVvwj2SZZ%2FAoa1GY1KdDQMc0NLYIeEdYOM3cAST94S1DIoMhfret72Gq9NOe8Np39iWkPWl11WFPa2ObV5W4XpmEg1IFMCeKqD3moW47IYcLDIdbgsczODV1S8Dj9MbK1kBGH%2B68%2BWZWL44Jm%2BkynSI3oPCUSrQoK1mvcklMSMS3zUzok2zsSpNr2wM%2FYyOaAluxDQp2tTGe7Kk7dvruGZTEJM5%2FEbMF19QUCO49UeUT1aG6BzjB9Xlp0VoSZf3rKVGBDL0b78p36pp7MUKBImO3ZuBG9%2F0CrVgI0ckFFTs8zXPiXdPPnvYzPFXx9d09HjoWd1QxFcRPlVHXNWu57hoVFKQ8iZbkrTw2gzC2WqcAaUjowxKzJyQY6pgGxTAsmGoXdY9g5d9hITKYuDaeFTfOD%2B%2BDeshuyOx0DWCgpyiENcrmwwx9XrKPPiZoigVsPUECokDEiEDt0ifWeVRB3oFUxZa48mqpdKaoDX1H1EXj8EntaTyFR%2BgtiKQcCP8OoP%2BzaEuaNPGwHn55UhemCUhB6%2BH07CpK4V1nTr3g%2B%2FADL4n34RukkLkRG7720OZ6aYP8lXYDoykRfsfQE9uAP9mhV&X-Amz-Signature=213961c3e872918c79a6b7ea30f329c2646356548511297a35d6c5eb3ad3b826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

