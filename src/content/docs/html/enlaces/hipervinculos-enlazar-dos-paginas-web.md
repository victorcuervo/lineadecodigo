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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2JTZDN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzvKoOpNghQdy4nB%2B53Qkwf1sUACGdjjLQl1dnWX%2F2PAiAlm51st%2BYP%2FvDg8z4rTuQiYoMiIgcHlQj2V%2Fih4oNVNiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BX2fAKMZKUOvYfCKtwDngrBZZ5LWtZZv%2FH5ctpyr2We16uaMwn12SydSGhB0TNGTHwMokTsWNwkV4Za79XQ78FoHLu8mkSQrNG4Wu1YO%2Fxjoy%2B0qZOLmh%2BNcBbsReqTk3twYltvIodIIMMP1KMUk4CSdY8NQYClJbANCvgjNKfmqZHVyElnKrDuGwOJ1MF3xoTtzvUsyAmGzFsvfOX9yHLZAhklvuADuqSEwnt4lEaJnbHgWXL2bIq3vp5o11BLpMcSLeZ29Cuyw6S3vun8W8TzNc82JDPWFNqxTPu6ftJX6I47QXKKHuu0xlZoIKZZnOO%2Bjrm9iF8fBUorgo0pKRp0X1GtsnLgo%2Fn0IGu2in1vXA1BtXwuB0Cp%2Bik0ZfuUaxGxY6fhKAoOacWkonIKSC74thknSuJklTrXMAelTHIWCg34hbg24UDy43nKC7%2FxnV7UTXJlIGzJHYglG8mmOrq7mRPA2PnopcLfTO5pz%2FtYw3klCu448rW6lROhNl%2FfSkO5lbmr1sBTLFm1AuPRJy1TaNPoJbF5%2FVX1KSD%2B8CMsFtIOngjPTM7afeLfRVrjMnxi%2F%2F8joJxBiSPkGmI2ScgswAQVS0y%2BCnqjr2jBVAbiA0YZ8KfQPjmmgaOxZbpHu2ZflxGXMhWZouEwhundyQY6pgHBvA0c%2FljNr%2FdIvZK3V%2FUHCJS9ppQVaNk27ltPXmZ%2FS%2B0ktNttF28Lxr7kQK%2BlK2n8DUlz30IgzuFV1SERykzFwMmrjCFaHPyBpJycc8sCQKPAwnPwyWNzj4%2FATnEyUJejAvzvvtUJOEVqGbK8lXFsBR79%2BAaYFMP1abe2Sw4KftxCFmh%2FfhYSBJM8lRTQzVyI03ukovtBkuSnuBnyJWfQIeB9vvQf&X-Amz-Signature=3b904ea6adb84dd06f2e8bacb4bc784792ebf9240a97005fa48b3e2b0f389ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

