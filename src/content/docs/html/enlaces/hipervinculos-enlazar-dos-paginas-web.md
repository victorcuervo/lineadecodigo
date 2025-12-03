---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTO6V6L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH%2BnyBBXN7gFHml5ucu9qfBLOwm%2FSxBTx1PN8RP2ioq6AiAUVceA8qy6TyMqdwLQ2ModF5S2RFMC5AplOdJ8FxIx3ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMH3Wpl%2Bl%2F1R8CpkzVKtwDkBG8WoeRE8E%2FxO5OR66IsTWXCRyXh8jCjT9k3j%2FeuopN9GqMCzRoYLlfmqceMD0Nw4IKwbcGN8SZkbL3URCL%2BGCmDFArhV64bqJuIGc5yWL89sVoMQHWb%2FowvPCsvpJr56RPVlYlCAo5L2L%2FZHexxMCwQrcZY1%2FNNN9v%2BnzwyPiJsFO4z1y55P6mQ%2BhVq5kmhUTjqQl9k9AY9v9xUXkEkWGZWJ4Ci04u1fFxResL4n6UWLnLGPhOszUo421c4QyKi9xZKO%2Fvf0zproB%2Ff9Qq%2FkfFKbPrVozZM4OG8AVBQzTYYjLW7NTFEv5bj%2Bw2wk1xAKHdcnbaso9IQgfh3nTpDAVG3PEsmOcn3V3nOfnERV3ycDE%2Bp4zynYJONe%2FEA1kOIYXWfn8JOtJcwa4M2EqCnJY0qPqvwSVg6hvy7agbUKvuNm%2BN%2F71OF76FW1X8%2FTnX%2FJQ1SdEZF7HmAdHsEik2ErBYtLlHgeRHCn84WaZi94De%2BiOMs2mcVaZnC8Sm7MbLUOA0k1HyKZrT2etR6APKQSiH0etsBBGNh%2FhFevBXLkYiEg4poOQr1rCSKLpQ9PZ50z8aY2T%2BnY5Qqhy7EYTiEONF%2F5Qjr5Huwfcuhq3aaW9p49sAibMX0OAQey4w4PjCyQY6pgHC82Mc5OhAeVJtzVJRlO0PzXp5Cpme5TqhsNjl6SM4%2BX7kNvIWSgLEWqu1Y%2BtGVJNPw8kgIAwj06IjkZzMJCJsOvHmq%2BTMSDZ89yueassh4FNP%2FGkqo2C1MYAOi%2FHlxaSCGXSkN%2FjAD8TjeiUSdOOfVgZh8hJiIadTWoZboHl118glYTz7SM6QV5LqpGcykYSvKtaY9FyXgLGm38NnpKZmasDI5mtq&X-Amz-Signature=9ecbb5cfc109528681482e9545afcac00c568b94848239e96cdf7f6ee4ca4698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

