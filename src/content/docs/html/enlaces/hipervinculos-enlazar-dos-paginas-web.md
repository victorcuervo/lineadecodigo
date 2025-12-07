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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSZQ6XZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlf4QVU2u3azi%2BE268CwRR5614uNGGxstghOhCFHpHVAiA3uPJvtRDZokx07wHzpA9Y%2FDrhOiyIRsrVs7zvDomx3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyY%2Fwg%2Bz845v5L13KtwDdMo9VDzXVnKv%2BLI7pi3dfa%2Bf9hMqnnjSr0mcs4JcpSXxuUn5s9klsmTc0bAl4zhMgwS2uNO3NSOIX0c8mWmvmNRUD0brXNRNNWWZmhl%2BDvsstpEnNQIzQUYPpIfnVdFANHgd0wgeU0KMXHRiPdwnRu9W4dplb7oYmUjvIf5fE4y2cMgaF0FRz6PiqJlYFye47SCwrOzS9YcIlfr6%2BGE37NdHeaBTDkYA2uC5Z%2BM3eMx1gV7jjQXalZy2R5wMlK4nbQlu1xDg7ZtQXmNJcLM1sMcUmiwxTenIMJZ3gU6n6nIqDaWEoo1DfnUojil1G4znkBRVi9tqhzz9jSNTsrCf1693a90Eb9jlma%2BPcVosJl0ZLmYDHGEXQNe97VKXXFK4%2Bx8f%2BvagP7eDOunYKDTU%2FGb0CkW9flwM5xh5%2FYF72w2qtAbrspaCaRTAnWgnW8LC%2FE1%2BDjSkreBoZyZopPzs6caqHbMj2t%2BEL6Y0d1f1WmywLn89FG3j8wpfd43sm8fyvImLs1E2CT%2FsnDrxGCVcerPrB1n%2B8SWBIPOBSGbS0XAQKhQC6eZ9%2Bt%2FEkm7qYdhgMwRi%2B2TwkzaFeR7hWA8YbLz7hhOViXaRszOmEHW7fseDOHeDEwh86G8pIqUw4JrVyQY6pgF4WJAkS1rwuj9pBdkuJbpyXu6g72%2F3asBS%2FWQthtOSguRi92TC2u%2Flg1iXNf39yC4wBE5L04WPqyaAFyc0n7PTLQbKvh4I77bLz%2BUmVNarTfd%2BSUATtzNfQb7yA7RQokWXftzNu6f7bW2QBqvZQFjQF5sRu4YMPnr%2Bqy8IrOS0wWF8aiSdmk%2BYZatcxtuI3j12iMNWupclZ5seip%2BMJ4%2BaFOWp2Adk&X-Amz-Signature=f0f68e19177c225c11eb55a82d2643cc49545e411f4d35f4fe8d2bc2c2dd7433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

