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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELFXIOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEHJV%2B27y8AwiBIW9msnT0Q%2BCkTrJMkwq0IkOv90IhIAiAMiFIHpNMmYElEe%2FGulJbB%2BJBcwquvVcc4No04XAZ6pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8nHG%2FbdDdULug9brKtwD9yTEtdf0Nh4tSI4jnVJ9PeCC7BUqyzU%2B7F7Os5OcYr7JpLYqoUYTC545ELnpiV6sEDO5Xsq6QbEAgLTRxIuIPDAQVt4w9y%2BXVsx7G2cLGwj3ssqHpvb3lNvTu5Lry4mi1kWdVrczKxhuoSu5eX86Ms3DatILDYdrPY1Ou88zdEm738CwiL0zpdn3y87zs1D4ei8PQXRFUqC9ZrRu7TmtpL7HA3k%2BR439gVFj5%2BAHRYgKpPT%2Fjz77M7PP5LbHPgAAaHyh5soqtVBD%2BCLd9UlRwo%2BoxUYaR9vtYYr1BIsfeYNzdf5ZZ%2BD25E229J6oGi7ZFsZ3LxEWafenFAGed1SQ%2F3fpLT5gDOcUbjrWzCfZ3zZ99KnNH2y3NKzB1io7Su7WHgtFcUtSxVwBnhMWsB47Cc1ykSJwDCi8VN0OefoiSgr4hY1dZeS%2Bsm07R3rfhoIr%2Fl9jNR1kLQeHO6bcu%2BciB3c9%2Bc7vaLS4bxu2jW0r8WKMpLJMAcbnvUpe34TlxJkuxctvCMjgIVOh%2FXKAMVahOuJl1drKq3RhWje9PbsKJhnStLjy6uU%2FP0cNcSxUs1n3RynfwzeKyz2XL6fNZSe42QrIbaLyJCmUITsrCCBP9D2Pdyb0tLKMaMPzNugw3qrJyQY6pgEIIq%2Fq2rDkp63UF3yhyl1FT6%2FbeU9Sh2chTx2oXhm5%2BAhvtT3oFgVFd6ni3oTJHt0nXMu2AvGFZn0nXtFOws%2FPCzFneEJNQ8S6fEfbHejO05dWOTdk5ghKgSNOns6sJAcFzuWJeEUYTIJ0zRBYNAT6Y6SuGLC7YDOBJNWFG02RWQ5TPHPKVrPHpLKjlOvn2%2Fc0x6hICN0eE1BKWOYqa%2B1DmMsaB5he&X-Amz-Signature=ea27d4ccfe3f21248031fa0bd7491186a5a7b1ee11f62c4b80f2d78241a55943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

