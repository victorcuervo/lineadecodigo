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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAHNPT2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCU7ZG9%2Brmp9q0toFPLr6UfAmVIvl%2FLK4UF%2BH6v2YZhuAIhAPYdfPge37tRvjjceV4FdPJ82o2OZv%2B8yzjjWdZ76DKRKv8DCDoQABoMNjM3NDIzMTgzODA1Igy8eCu8ZOwIVBH4u3Mq3ANwcMVWMeR%2FCCCr9u4XZtQGoPBGsFbZbXkYCg2aLHDt0w7kcseoji34DgOskCBmsGSw0ACtojnSy1apUc9Egp7eh%2FMA5X2LN0djcfZNiYxjImlKK3KigiVT2r1dKMzgJHmh4miuLHHucGLpi1%2BsjAdoGMRq77TtYNWeu1XMLLUUdNoblhV3cZ%2FtJRi443fHUtjX0cF3j%2BcL5Rgsc4DDAAmcV5qT91eqWGPWdcLY4TNVgNJuebQ7j3uNfrnq%2FNR3VJVx3RZRuyKQgg6CO94KhuNnzIfEPjIJ%2BZruXEJF9W%2BUxcKDCAHB52ohY8Md2xyXPYQ%2FP5c0jsHEEHl0TkyqObNBTr%2BxwW49F4lDnkP2ZxKsP6nNPWkeFqGlLgoSETqFDjSPcaz%2FUEr5c6tntVspc40zxLSOJpc%2FItBWy6JjzZG9Xo5%2BuzrNGIRMhT1qH%2B789qwIXyXPwUUFBG%2Fl0G43i3x8KMhuWiDpWsqbk%2FjZyP9MNTsgsJqhPG6eWnFe%2FP9BYBR%2F8VNDB2TrzO1R2tHmPLuMZ8xmQZQ%2F6ISmJjkqYrS3aqyHPiDYO9%2BPqdprWMFidsJQtdz67G%2F%2BQbJyRLFxZykC9cYkLCUaEV9M4n%2BvmsTsxXPBFHFCqaB5Ped0ijC%2FtMPJBjqkARBqrTVjnohgJhBTi0yiYAUDzTdKrv70kn%2BTLcUIy5YMqdLEU0pGJg9IN3TP8Qi6k37YreMryTx9XMQHEoAjemL%2BXfXAHufpaieWLX8dGP7ZxQQtuNO1fhxxu0Ym2JXvtmSmQANrHEkvLxkh8gJdA9atbtGFEB%2BPdCScyls29OFmgPDwrx6%2BpmTHDPCopNGfbIa3RJdqruRlp5y4p0%2FeCRBF%2FPJH&X-Amz-Signature=ef0c44fd8788d1e9b0df0003ec55263a07926ba54487870256bfac23af3f52d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

