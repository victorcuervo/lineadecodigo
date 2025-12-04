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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5PNEZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIH8QnQfWmfvM3R6uDSD4pGdfLGLzc%2F6H7L6Dy%2FtcXXuaAiA%2FlRLXS%2FazX4Pzh1fL%2FaS9FxxitES%2FkKHNEVhkOTJRSir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMUCiw8uJM%2BIx93F1nKtwDqUfDu64MP%2BDbgSq7XeCEk0crA4NLPNbdlgZZPykxrkpdhF2YL9%2FjR8F4pQkTxAKF9UaPsAyPqXxdUyYI3v1Fa4fIeW0KyS%2FLRRktvk%2BXzYx1ZPSLnad2pZ3ckSMsDNtAX3cjgiYXinRx%2Bic8VLxeGUebneZDY%2FnmtArHthj1%2FwBU9QSjLTlc96AZplNLF2MajQ%2FbCJX5WBvClyPYw8gUYOqMaRWJS3qKsM7NKnwf%2FmEtiPa%2BVjGDA1ukZ0fClWddVyrA5BRSA1mSHasa6IlZrqbvlNaygX0ANghbaJ3gNMudXmvfviByprpR9Gh5xt%2B8tVLaLTCYXkBXwLSFJPYtaPdhU1jUhgEflMuEFlOiu3zIKegLYzPcxwYWhwISVjv%2F6biIY5iGnNUPrz0w3zB4ZP0dd%2FNypN71%2F5GCxGhlDRIzYALJtjNn0JFMEtlxOyKyNbbXddjiyHGHoUofqxQVofDN76wKc%2FrrndlME8ppaGQkQWzZ5A9QNdym%2BdBpoYaBLfN9oNzpj7aT3qMCghbxwOudfYm2pT1HMDPlnvWBfsswIttlcVMFX8ngwk91MXxhgh8rYiXWDk6KZeNGKNysMsyh3nwZ8p%2BE9CaYOsGmDd3dTk6pi9YWEhv0pgow5ITFyQY6pgE4FFdbBOElcezkVj5KXcWGu3uUpNVTE64caizLxQP63c64Bhk89fGaLN%2FmXHfHUowHmM2Yj4qQbS7RNvQBwfQTImvwH8VTpXm21%2BK2I18sFp5PTHgpMBrebxz5LbJ5%2Fc2FVU5jFU99mk7F0czbDtmvxTJvLQZ7FphtqVpA5uIzxKmvcIyHpJ5tfjULTxNXzclbWnSNRlMoeg6gU5YeH%2FHxLLQhgaLv&X-Amz-Signature=8bb9d3a8611b33cf9bc2e7f544fb21ddb7bc5a1da5f4d81f5117d1fe0f4d1cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

