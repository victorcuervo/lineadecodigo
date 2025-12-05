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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVFX5LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FcCiNEqWrFDUC1uau504nmxOz%2FyZURuDDnOYHY2e3AiB4SwxakyJ3WllhSFbCmA9bny29NvYdp3iHvwJxu4rgBCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbUGvsgdCA2bQJ9scKtwDPPX49bHsrJAdAEQKs9blyYAl1FgMCFmRC6Rxv7sWAkYwubOeMc2pjJIsSEK%2Bf2B%2BOu1RY%2FvmNNzSlo7lhK117oRQ07Ah%2FL2RIXWdy3hMHlXH8awoDYAY09Y0f%2FwzQKXuxOzfldV9f0LhIQCIeZHQX1FRjWImepMOtEOzpcpF9yz8Syjn0clz27x1mOe25f3EwRdOHf6VMCmppKD8vi95XgpBID4X2tGGZ%2BWynm8ng4%2BVIhwr9MQRzUkdsqQAsyI0E7Onk7gpMH0nnkTSksLCsK6E2uFTZda0fdE4LfFOG8hJSwXai7C2uZ%2FjIq9Z%2BjA%2Bs1tZW7aStj3kYRDS7kDqQS1%2Br8F68q3NaU%2FBQS0AAuySNiupNwZs7m%2B7roQskLVk8FJxDmr%2BjkLysUPm4x6MHX4E475KZAos%2FBbmVr1%2FYyEue0ndbj%2FIKF2CMbbinWh%2FlCYLsI3o4scgpCwOsb5V90UYQIl69UiSnXMtXb97dixepY9DShkgFD71dZUq38D0dFyLMOBw5swMow19th4JzFLEv5CMfQjAgv7neJaXb3ffO6wybkCrOAbVneRdCValhhvlWWHiroKA4xrm0NtTHelWdeRB%2Bmb%2BUuhrbLLF0jxGuk%2F0JUF7zl6VqLIwq87KyQY6pgFamLgjUiiHvfG9zVXkY8rbDK5wGVGMEebGpIao8ooWa6J1OCZPFLl1UhilUTyr4qz0HHXpQPveAfy4y%2F5vyUfRE5DtUtIxUUabi6st3PiMk%2BJjr6meuBn7oYZQDjGHWEGKTvw92oSSpKPJLc5uXQZ4Cy5ce%2Bc3BXgU9RxXbR8FIAbaeSPRBX8X6ppvplvwhDRTc7Q49IqOrRz96vSbeq8l7f2Nmd7c&X-Amz-Signature=9466e5da2b869eb1d87e84431f3c7a795f40a3ad486d1c6a08b0f7a3d0748b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

