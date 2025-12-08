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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLEHMIC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFchTfNUy6Sxlu1Dzjb%2FaQxBXO%2B%2Fh%2FxwvaeMyN6Qk%2F7QAiBNEpZROni7dL5ngRPUKeceLFx%2Bx0%2FuNYUBk4Y2nLClWSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMurJv64Mw3bRLE0YmKtwDqEoJ9k7pGUZhd2cinqIynWgCHpnFTPJKnbLcX8a8rP1ZxRnnShOePPFTfbJFS%2Fkh6UbJYOE70NpF55USrZEfeEywFZQNvVvyFeRHRpqmW9gXW3eaM2MmDmTIC%2F2XGtNAFyQ5dJmOKifiy2ou2PWSfsyYJZQrH9U8CcsoOqxqtqvn00b%2FJxbF%2FuRJ6U%2BJU0C2K%2FFie6YFpy3t9boYLErinPKeCY%2BIYED6IOyYxSHCXDYyrFb9VeC0%2BB8tTkYguXPnujLbRHDOTOqaotM85M9%2B9GSB%2BhdURrvCbh7Msookh%2B6joPjydv7b1XoWaC3vK%2FslH8QROkIR2KyuNDbQrsCViUUtOvs1HLr6ab0tZg9Tggi%2FcpQSg8hscdY7C5gRYYaITESEjWYCPgQFBJDBYg2JMEwxwIi2nFGAoL4MzTww6w9MrxtJYg1GhuV697L01l5zoW47oZkCcg9NyXDBmh3mMr44bh2cIvB6BC3txiyQzLU9%2BY5ewiRV4svpcQY8p970nViFqk1EicUQqG3ayskHEzxrKc%2FqUGKpEUQ561v7URxQpODgAMQSyrzKYGTlJu1K%2FnngQupgtFZaPcthpbh%2ByO9R7KmT2HF6vUgcvGxUbv9yL4NB08Lr%2FA3FX2AwleTbyQY6pgGmgZyeOI4Qz4OsOmIfycTTEJwsU6Npe3sLdLX5ZTSHjmX%2B%2BjQ%2FPAAJs2pOGir8tnemi53pMcl6oYW20qTEjbEXd1UxY%2FbUacTLKHU7ViJM9SvE%2FaAQdQyAK%2FBBTOGSl1ttwKtsqoV00Oqc9Hlqt9lRxTX0vOH6tBYo48x0HFBgj9vUTsyFNWWW3n3I%2Bx%2BznAMubM4oEZAV8kx%2BXb2MAHXZbaS%2FE55o&X-Amz-Signature=f9123718dcf3911ea1e7db82ea57b33db9741e6c99ca381d1b7e32abb9e0362e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

