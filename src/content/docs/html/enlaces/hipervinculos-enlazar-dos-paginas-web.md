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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBLLUQES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxiMnjzWf0uSH%2FaLjNdd6rYfFB8%2F%2Bb3uv5QqSPrpDYpAiBSnU7cK0L3bws3WwHMcl%2BSJH4iOCYv%2Fcu92xy3TYfBmiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFWrUSR6vUrA6euHVKtwDi3v%2BcGZ6w5GyHd%2BC459h0TSk9A%2Fi7XHa5beJwvzECb7XaLO5Ya3QHqPXS9aHnjIpfEceWzsgb9UuFgE%2FMQvXojcAvRNvvbGH8h0JbzJMQMTRn%2F7%2FxC8i6gCGufQ1hfUmatvrgtUKpYKohYsCtZ8xu%2BNg3zDUkp7dRRBlEwWvpeHXTTZ3ptUyyQ%2BEXKafrMcIkHDSvtOf%2FjPa9GydoQZaHEesZ1Svrfu91tcZT8tmFy%2BoiD8EKXsbeT77I8lsHEHIHgyIGuf%2FRoObYrTH9ZU3wfSMBYz2uJ5APtuH1trQAxZniMw5uV8I%2FA7r7pIsfEp%2Bzmj%2Fp1o7bO4Gu4jXcbqK7%2B7KBv0EXRNq%2BFy%2F3kZzcCDCtsV9ZGQz%2FxhO0oT%2F8QbVcuT9Zsan8wtJsPHdlU39CToSBbr5sLvj296FG7pJEy8UwSC6lWlVyBLz2JK97dwKRBfdqQIv0tHTBvDNM4xbf4BARwa%2B%2FwDadOmJNOZuQgx16QxdrKYs7bDE7BNL6Z%2BBFRP453XJmXY0JrfMOC0I3yQ48V1J%2FOzKSdr295zcqfclNZKtSyM0SycrgeXNMixyZexceYZ0SRuFsiSKWblPiU6a6md4b6DZvysQds%2FoSQEfgJ%2B8e5v2sXMRX6gw6MfXyQY6pgE3kDjk3nU%2FDQtB1NAlHxtIwlcWslVuAGoGIH9%2BPOMp8lug7Hzw2THFRDnDMOfJ8YyP6qAnGuHEKE6V2VwPX560W3erUViP3W3bmWxb0nsyfIFWQDCz1XZSF5A0iyFMNl%2F3IdmQChVnscApS7PtB9SGdSaWg0YQ0hclEGcOeOBnPCOLo15TmlwL%2FixFpQabIPTMRnUKbEuf3MG2Gnv2lwzIpyaci9Xl&X-Amz-Signature=a479ada03ac28c00dab759580e478d0ea51d1d282de0d0af28504305f7f98eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

