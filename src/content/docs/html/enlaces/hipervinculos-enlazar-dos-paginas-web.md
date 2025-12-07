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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWVGIKJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgK1%2FbPrbluZ4KIXOubSLNfG19oiIswkPBjr5WaFqqzgIgAOpLpCfLSgHvmbPWp3yByEVs7GcdTRF54UyZzAO2hLYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq%2FNKmPQig4zqoabircA9YvxLf0FB6IdyIpYvEnDl6nMbZJncr8IK3E%2BuNu%2FABjUK234uQ5vvjtc6jpw8pCTb1bPn2th%2FwCzK8rzcC%2FTgLJ9POQcZYkE8cEsBPVwucT%2F8h%2FPFD3T%2BPbi7qGvUfqTkpl3uMAY%2F0FRcBZd%2FsQ8lIK7QutEUa0reFSLgucNYp%2BMIBBRmLIBCxr2vVgMxoVvwCtURr048C%2BGasq3Wo0l1fIHrlQEiG73EnrL46TFJ4QYX7BbMbO5DqZy9Te17gxMt6pwsF7LM0kMGAObxNwJMYisvOSYVKacq5t86drzwtOfAA7i08S%2FvFlTx28nQ5frBFN7GjoMB2hTx41zcOtbRtDZNbvAnU1r6FrPFK0RZ6fdYQwuIpjFsu0PKXt6ve7oDn3tiQ4xB8K3NCVIum4MefgMx2DvBFF%2Ft%2ByZOq8p9PsofaSEsIv7DcveQjoFs51jNzXKNPwKiOaK5V2ZtbUPpVCPHVPypVVEmWJRF%2BT1XzTwFy%2F%2F%2Fo7TNXadMI%2FVa1L4ML1QA5NU%2FZN9aycN6J1DZsgzfoPFcbFuhgMsoRwv%2F8neDdlLC9TkjiEa66NByMwfJ1XnY8bCV5oRfOdATys8lMic6RMCngD%2Faumr6VsunI%2FlRxqwR3R1VxiY4XrMN2%2F1skGOqUBJ2e%2BOaFGmLcu2yJiN4fEq7Ls61EMmRQJvDC6oxGXjKMbC%2B24XCFtKg5JJRQIRxxRaUFOS5OC9R0um2DIE8m%2FQ6pSE20LgLJlnOZFKyjsthG9ZgfJjXnJa0migULJStUEvrmwi48k8%2FoHIoUFuPOL95iTItncDbFUNY%2FecuPs0GcbThaflyRqffxcgxBnyXD1ky1Dp84bp5vWYOm4ziwpj14TJ0MV&X-Amz-Signature=3e40f8664065ad422f9c66806dd34c52a2f8d094aa170fada5fd804f9a96daff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

