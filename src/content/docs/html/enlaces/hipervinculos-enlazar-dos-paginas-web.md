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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMB7ZKUN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj8wV%2BWpz%2BpJ2p623JvNQtHlhVgrmE5oEqjXQ39KraEQIgGnlcd0i5C1S7lbnIHCRmExhx25Y7NxXGpt5I6eCIcvEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKqfOhHEaPr2pSGogyrcAz8LF5Lu0gYiiguwZ2I4tggoQbGVKUGsW%2B7STzPou7tcTG6TxIRxyGAp79Cpcad6cXBANFJrAEOtbMFu%2Fq53jHwYuD6%2FLX1Qri%2FGwEPZ9SnyqN9z%2FKqkLx6Lk%2BL4b7cMtR457pnT%2Fkxy9CZF5o9l9tN03A4ozmn3jy8d8Chc6S5afx7O1LRuU7m6rPZYOFZcl64%2BqFTMNqawHATsZE3xoY7Nac1npoo8omnHLf5zox5peDJGSZCFlzintgglNbdOCDhdanXs1IqssVA03BEgY7dgiVVvXTo8eViyAS0zrsqpFw4uL2Sso%2FUWydUG7ziGOdF2n5GwU57Wl3Oe9zUWzL9uZDroas3K3yBBvI3l1A%2FRzjuTML0VxCSyZgUH4g93DtTd9yf7ZOFxpDm4ZleCO4j32CeF0%2FV%2B6ILeODZW71TvmTIMmywS9wQuAT68oOMlUPN%2BBePLDCbSy6d6vkaXb%2FLUkzts4SlrFqOvdmPH9VcBjN%2FgweaSrl9ypos6Z6yIj5aOc%2BYnJ6xlL29rSscovJaX3R79hSk0t0rtY771mSEGMMDA6V6Snio%2Bqinxp3zmqjbC8IR2x5nntpTef5%2Bptu1IbvFsS3p6a%2FGP3LyIqyHjek75A59A63eb8p99MJW8z8kGOqUBV1fxIGJp78cnHeLOVNPsXWSMtUDM%2BqiXfBlW7ZQliIs3MsBI7izFpuriR51uJT1Y05U4OLIVay849KwcauU61MU2jdWCQWAdqB%2FOVq44jHskDUlY7E50i59yz7Alax5bioG9QGSRMFEazmT7BZfNLWMTyWbvUo6FC4vrnRpNg7H1FYvUq1iU0cH%2BwS0WNK0CJlp0v8os%2FmolSUq3uBf%2FexNjerff&X-Amz-Signature=9afb54a8d2fd52afa24492539a57ad3ca726d2502f4ffbc096f6998b79d07f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

