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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDZPA3K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFJRy43%2BHD%2FLg%2F%2BcyJiT%2FzsYcV23ciQ7hTFI12h1ruSAiEAjFcbFFCJwaqb2ApWvNwqKXbfpDvGyn8Iuoiu0EEXpj4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGII1gGF8Whj%2BMAwircA4XLPvcQzz4FCoq7%2BaeATVCNilioJVPQV2mM5zRKDaiEYfgI%2F%2FYNU2gHv1OlCmWSy%2BHPm99cJvvWcI0cb%2B0hto44pDRvGKmAlQi%2BrCE7Dn7BTjp4gOZhBGHZ0Ib%2FhucbU0v9hC1yumi2YOHG%2BlbQttsRQn%2BLQizBjkenL3%2Btjs8BN%2Bw%2FW7qLnlv0KOLgi0p2nFifle0fliCnZGBPErrrIwhX%2F2WbVMtir9nC3EMVcj6WiWtiQhxQH5PA5UHFHjQNTx3jZ4qGGJKgfe7xY9PlzfXcYLa13dRNBNuRGp9CsH9axjECZoSHCmSDJ7nRp2k3Dl5t8iIE0IVDj6H8C52LMoKvT82kBBVboVZOltK%2FsOlyYipTYA4L3sJO1eH4xsJygvZRbXK%2BCLULDQHLX8qBYaANKD3BD%2FTKJ7B6ZYy6WTvByra%2FD0daHY5y6MMVMTTYVFruYIF3WDDzvlAQ7fpoAt6sYf4Wk91FS6Wsla8hw3eQDPTctlhTeBOieQWFtpa2yzyMtqD1Vh5%2F8jntyJMi2SUuK9xCSDZqVAOewnEyQ4FvA702yRP%2FWvN2Nu2pS2zXf2ay0H%2FY9OG5ZsD93%2FxMGyjOpdUr%2Bqbvnc5ETEgOgDtl01Ib6yIGYOSq1zZgMKKA3ckGOqUBThLhRuN1t06mdr%2FxsoNRwoGWakaLK6%2BZtJubI2ORPUQnTyr04hA8i1fqiGpAPeqGhoSWG6sGlhOhtbJA8JxFkrMAurWnpn2%2F8qHCBMJhtfQ7zPQTG0h3QXjfkr%2BNHJ%2FjmcBNnijJDslL%2FZ8Gjs65hyG6dESVi%2FAO%2Fhlj31hyV%2B40RErQR04QVL2IZLZCuaowK17BG%2F1wA2wd8x0HXKiR1rt5fz%2Bg&X-Amz-Signature=cccb5b7ccff6e5fb1c722b8f459f2c3e593f640d71f4d9e72ef90c18eebc2ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

