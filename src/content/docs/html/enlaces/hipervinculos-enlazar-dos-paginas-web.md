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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGQ7AVP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9L55teRW1EHmY8s4Xl25SuScwa2%2Bv2qjI0FEVeNNBhgIhAN6qbxuiN7MiBua2ybBC7ThIAyBcSdlXdvNObkKxxoTlKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxFtv7m0QmDpp%2FuDYq3AP3mCC5hRxXajh5cCpDzGHXpcDnhBhFO6K43vdgMFBLMumc7OTrQkggpaVB3HZmfx9noUp2YRMPpGIZViwWJHpiTSHV0eCbH5gyknEytUzy7rqhU1xQyXCg8kY4BW%2FCBCAKjv3wqCBJTx%2B0B5Ku%2FpwRyLm6Jg%2FcCAGysRFllRTZh7VIi2lXrPLvaLpKICygGoYpPTaezBVeJjQ3IFO%2F2g%2B%2FLJDcf2qLV1BUl3VaQH3Oo7Gb%2BGb4zqCpNz2u5Twd75%2FAL4N2aIVwqWTlIXLTn1IDZOkaXEldQ9sC5ypo0meXms4wP3c1eXcu30nmanmfjhmYo8AZqkWsZSDv7FgTFY05qasNu%2FNJeLKMjxzoghk11TMD8Agfb%2FGoufobMqIoIh%2FGnRgJK59w7aAGOPQg74R6CCjcX7gMKcmUCKa7%2BjoUj8cuOxq94urJXuEs7BJTjbwtB9Zqxn1itxT0JNMc5X4RuO2ZOnkML%2F9K9nxHMeV3dA936TjRUN0NPyIGHXmLZE9M42kgZpkixG5fXcSeThzFyXRrgJNvy%2B0pkqXZg3H3XoKcrAlYCeBt8tW%2FDyt9abUCSnI1xuBWDJSUeaJafkDoEQ%2FPLLCMgN8XNBvOmpqrlf%2BhFKpxTReq7ap8%2BzCll%2BHJBjqkATauPe33eWgwqDQg2UCjcd6ZyWJFJhCLPfcSvLpKIKuv%2FquMEaoJxuTqaG36GKBrwE5IdzgBHpMER0hybG12gg3anblNvHnhBfh9R8XYCf%2BYo2eAN9PSkC2oLHfzuHH%2BgaeLP5yInLxVydvJARPMID4hYhQD3Hto20UsR7c%2FE8G1pYBRq2kT9WOf7QYMXb2s3wWtFiCF0HeOkQqGuaabtp9ZsDds&X-Amz-Signature=6f42952366e10bf1cd6345fae9685ead7032b8e600d9183e285271ffa66e0353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

