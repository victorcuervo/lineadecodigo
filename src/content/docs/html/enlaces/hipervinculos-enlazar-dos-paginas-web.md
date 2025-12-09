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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUUU2DM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuyukQtKw74yd8EL9NIpVipYWKIPxmOPbethEEgXVh9AIhALZgfqZa41uOKBO9EsQ4%2B%2BsxUzIAfoVUJ3JcepgDOBMgKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz10noJAGf5v5UlGTIq3AMyWv39SF4oWWXIKI0R3Ju9NhUrwKg0JYcwqb8GPVEMapu2zp1IjoeJtUsu4H6oekY1072g6XzEY1sVTBd0nZgTxRejEHNq504X3CNYwmhEyCUxhfaYOX1EtClrfwugpPNFMj1tE2NxXTurfSd7kdbLhIQOZRh0zc2Z9j1HDVREm4OiasUbrvOEnpa2tdkrF%2BARV4Jb90WXnsQAOLUYwZ%2Bd5p1KEMiNJiNz0dRsbFhScmjoETNAOjuzf%2BrAUtbeJ7DsHe1EvZ8dWg6nTIpE1WDyBtFg%2F1U59a33rLXbsdxwZv0X%2Fr0feCKA0tD4l012F0%2FgCj%2BFA96xCFu6Hupn2pi9NC5fhbeXPahb0tYPvss3HE3%2FyiyRb6eS0HchkyEyHR2C8XkXGlLbhJxRYb96PCfdUkUpcJp9DORYvVO0oxQVAx9w6WANGMQsSjZXqe8hz3uebaTy8vQ7MNGr1WbLLiHXNKMoc5Xaiqh1eiC6P319ITFiCiHvAItBR%2B%2B5h5ws5kex%2F1MGTNfmlJCP5%2F%2BRMWNocajnnVW0pRz6A%2FrfrbBQf7mZz%2FngeU2ijFK9fxTGn8Y3K5ZRcUfmq4%2FdFsxSIPZng6kQDPrv9U0mmmkSPOhWdJSdnrxIKapIeOwDZTC%2F3%2BHJBjqkAbkuqS5srfan1S5tfR9te9hLZNeGjCkQrZBJsaYnFQ7e3p9UAArr%2FbKMvyC5I3FXO56LjutMA57ePvvJRHLvZZXBMbp2Av8gBzxgFQEQ3R9l2gj7eZOnRxobEp1ZtrJRPmaSnA4W%2BRXXTFnM0OUPcbxIN5E1PpXBzdMkwTln4jxkyEXM2okvQK8nMbpDY1s84sf%2FwA0HehBWv3TEN2tB594e5rAM&X-Amz-Signature=03244864553a5a03063c5f858a49044c69e9869d8f5dfb96ce4fea9f57197424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

