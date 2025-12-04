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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNS4OOWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBSm6vFVKrPTM2W%2F%2BYoUc036JlXTvTe798CDxX1gS6JsAiEAh1DmZB7385fxMrB9sfVR4UlGY%2FfmbaU4OyxXK99BJLoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHAFq8zWEu8wJna%2FxircA2ueGSkFuzOjkhxm3gioFt00yafj3sw%2BLOUGSC1vVTCEzxDLQTw8byceNzlcC2PEVQ5ktze4Pbl3SoXviKeSxjMcBnSgeKCbI7X1yMhygU2NG7SQXHL%2F7BC3WC%2BBTwUDCaOftYVXfTUKXDroG9bOTAhVGJo15XYI%2B0r2LzLEIHktmZ3jbMvSaS7I2Q1iSJQaa3ba%2Bdoe5zqJx8TgdGhKwGwvFl1MaEbjqsBSOk3JP4eE01esf%2Bp9%2FQ1VD2UJKzgBN8FY95Vbcii8YZE1PM4GaWHkB6f3H7TQK6HDCdlk5qwmaWB70KSVbW2vWhfufiRhdYOVAdctf013qz3Y241ilD4h%2Br2lnxFA44kLefysNMxegLlKK0VtTYRkwsQLoE%2B%2Bs33lc2wjaFkawO%2B1QbjEvRTASSEcUdDAFNSy3fnsMx%2Bw3CX%2BRGOTpiWDWPpwPjc9ps66wSmq2UWrvOu49isKNUS%2BDolKN8BGyZABcE8LmxUiTwKJsSl1cRPLxLjErtVHVkaiz8PX25ogcxTGFue0cLGrnSgXximHmdxBkqTASm18liOjtoEmQ1lwh3HN2%2FDdVQQlSllapdKURyHs7ywUEClAIkb812qXrhHDm6oZC7BxsMplc%2FZ5oXAaIHXAMO3mxckGOqUB7EOGDqO4fvZUkNdqXckpADKv8G9XP5GbagY3IQQARyLwIvP89hPkcnnhrPvPKs8jSVFU%2Be40Vk74Dk8pciw0soZEbHY%2FSDoPoZF3bnwz4lXTCFmPOaOUqJcHEh9bwg1Uh6bTw7OAALR1gxg2tG1MmZ6hEinQquubliOqrsZe2LbV8O2RigiLtITVv0YJ7Asd7VwIwLOzFpN94p8sJVMHEZHi2Kf5&X-Amz-Signature=bcdd93f126cf25fb17eb180d84a18a3ae6419a6c5a17ebbb08dafdd8736b62f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

