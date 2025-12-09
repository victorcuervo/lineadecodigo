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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXLK6YM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FO0307vFIW3p7TW%2B8K7CSXFnClCWQOw8YN1%2FKXWlBgIhAJvZe6maa8MBtQDqbefxFdYzAMHLCGeNalE5NSMFy3sEKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbvjpAPrSVkU02HNQq3APk4GkYD0aaYhxoD2vb1JEQAACuvTlfyvCkk1XkVAfmyqwXJXmqJpsD45bOuCenPDekiTdaJK9Otd8IXb1AXKMFwc%2FfrfLewc0f36x4Fb%2FYrzEq8Wdca40Eu4do82Y067BtgQgVp6yUEjYXX1oRxe2AVzeOh38wJiwJiml5bPp3cgJS0WDv1a3HWJEJpn2XXkCSe%2F2%2B4uL71lZidjBcBedIgiehlgQvxEIGHHfq1J1XqlCXiSe9NFQXZxAskn%2F6zzv%2Bj2CoLnLiwLRLXQ4B%2FGmbY%2Fo%2BalEkm0o0zPKCff8%2B7y85M4IJV94QDPZH8AqQPB8Y6D8wdUls7ifPxZHzFYtVFUXjZkZ3McXe%2F5QRU4zt%2BavZPpqOFVuLA6w6SgUSGRSblQEZkRecVl0YDaJjLekFQgABoof2d6PSEQe809uuQvNa4pgugqXdsGsbhD%2Bu39qQWgAhx6AHEwmbVRABXp6AJdxou50Yf55%2Bktt05lHwgpriVkVY%2BDHeOr4yWqSXtHbBWChyAZuIMRoBZpyP3Dn3ujqU41GlZ1w%2BzHHufXxL2KFQcvX4F2taY%2Bd56s2Rg%2Bqn89DgBO2eAe6NzB9FMs5wnKnZJeYjqf7HYi3VgpSysl3aBoOPnPDXLEOaKTCIw%2BLJBjqkAWX6a6SoJ1Clq1HPOEB7kOrXUv1XbKXjvwn%2BO8glPE8RkQLs4CHzKYYhsNilD2%2FYDpdEW3C5loVW4bXlXw1%2BuhndGw5RYmXBveenjXvOzZEYxVckNjXoeEh3VxZ3zirdzy4u4CM0MGvh4tw7tERvKSHqwXq4V84VDRo2oLhb6Pz5I9FdBoIGJVTbZ1A2b%2BYQRRh8wWicOkPJb7oAf%2Bx7Y4WMuSMu&X-Amz-Signature=fb575471260bd3fe9f20f9984a4e463b0bafc75ca35256532565b83f1f150192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

