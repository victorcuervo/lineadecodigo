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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3S7MUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICWIdy%2B0Ur7F8%2FjHVZokmUUDDxafNPMu52nDYXlmq0oPAiB4aByT88rdUYHtgNKWT4T5PeVwRGj0xdMiFKt6UUGN7Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMWMB2%2BxuWAtw1f5OMKtwDVu5mx73pPqbbMjSn48nfjS6pVzQchbO8MO8bbrhnC9kLSTBOmyWuOXDKhc5PRSLSyKQV3uGeCK8%2FN9lCcj2aPAGJT0hoH5Vp5Y1DkP2z3h7g%2F4mAdgxGfC0lVNhqkm4XYC%2BcIQoYY6C6Dyi2n3ytZEdYRafb%2FeAKQXrz1c9ytryrOZSV6qFCNxzcAwYNRcykltNYK4FUMK0tZ2rR05%2BuWx7HdgXY1xKREcEAFuAOG4Mr74CQEC4R%2FhU0gKvueQYtEOGF1KJuIr1LDL%2FHr2PaIYhkWgUrAlHl0S%2FNJjkoiH6YQzxYMNHWOxSB79aEvqEDa4AtJt6yDbjPme2AqQ8wYJp%2Bpb%2BGddpWIKUnR3bEGe%2FdyCcOhjP7Lh2HJfFBdZBbsGL5pUUbvOoA6Gz%2BEMENJzvK9ZRGJiMTqGx%2FV7RJJGLQmLheJfnvQ2gqZwGoc6f8iZcIpT9c4iqne0dy5IVaB57aYgxuRBIvgane6Qz3TQ6sm0nl5Q5S4vRYsBihYuJTvK5JadS%2Frezu5sewWbB1kk%2BgajdBavm%2B%2FsJBA1B0q9R%2By%2BeYIjFOa0%2F6e6O6t2Z%2BfjzNKWsrIEGBE5i5MrMc6bP2uJn%2BiPtKNylpHdDtn3%2BnvMWljy5COQSMitAwuL%2FGyQY6pgFqpdhKi0%2Fdiy3Ulivy8bmkn2vZGdFBC%2FuLLidK4VqeRkLbTFeb4GtW864KmADr6KXny8CiWCkkW5Xsa1ikZaYeQgMeMtCgcLtUBkjOMLDx6g4%2B87U71uvyG3xXe0i6cJZEzRMB%2FA%2FFOIUOfDwbVlRFLq5M2TtoeKdTTte1C3%2BZxoYWeOnhjeRrq9oRBet43NGeLB%2F7kTzmbmAdwAtEPMIRbkbLWZM1&X-Amz-Signature=c302e6e22683cffeb1ad2e8d550703d8166098c48aab59ea8cd07f9185ee7eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

