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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPR4E4FS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8HSJ4whLvxaqFnC%2BhlvUNTYhjeQmEc0O%2BtxGWdtMyVAiBoT%2BnmCfzRoYbH5ylbguuRMyfcSk32Ra7cU%2B5zMRET5CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdEUbwoo45zKNvolYKtwDPcQO%2BHiBs9U5hm2Vu322Q2VaWCg4UEmuFfSC2F0ypnwnQgK9X7g1x%2FwmVhf9%2FWqa4w5rt0IqZPU8JDojZCioD%2BuXKt5%2BFvlBqJee77GSBw0Ra6oI9w5LOf3ShaWKTJKqP4MJfHweXL4r0Jx0qOTYU8uG1XjGsR6672ITOJIy9J1N8yPLQ4te3mX5uIsFIXW4b0Zir1plGGiHezSmSKViaHUdZDv%2Bn%2BgAyYY5isvCu7coW5vbtRat%2FLDJCcWAmWDno2Q9%2BOp32acu8YNM2V6F8eUKmJQtPGQOffE7GMsiSjkAamT4Ov3DxCGwKknW80YiULN5p7dwRFFi7hLYNOdZVnFIvaS124ByXjqnYmBne12dWdEVAoHCrFINFfgwrJn64SFgH%2BOksMKX97FE0nK9TvdXnSrVRIXlefjvJfqzjOIrUADkJ7iZAHeOkUhITECGzqBWJm9eGBv%2BPIS1Ynu8oq9hTXrrtM%2FG82obwM1%2Bcee4azr1PdNVX2OrHC68KRMBaDQCiA9xg%2Bq2nZg4r7yA5sRiAdN1QopwybcU%2Fhq%2Br8oQCEsJ%2BoY9qiKohgkJgdwUixLlOUgNnwCNZWHL0l97QJiBB3osTqnHf%2FSMtVmBzot6OGCM1VMUQoKhZbcwq5DbyQY6pgHQncAEtSlYWXt1QsMXscp50WTAa7Vxu%2B4ne%2BO8f1p3KGTr0ysWu5lCs1v4iADAQ6gZBpmNP0VJ1tLEGkPGzF152XpELIgEhiHNKQEqD79ZKY23PiUPR2CHnJGWQWCcTF%2FJn34Ze%2BXeTCMGNVs9mpbNiEfLgame9vXSrvW3DO7kdpATexqp%2FmJwCxmG2YDj5cXcN8gifso3%2FobKjg9kKlEHllcHF0w%2F&X-Amz-Signature=66272d550a7220bfaa53a98fd0a45b27b9f4e35e00df301b34569ebdddaa199d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

