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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SP3Y6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS8M%2BQDaFzgwwlsF%2BpH7rmtidNV7Hg6x5L7SpNxtXZzgIgUqTDz5bJOUZI9iBxnh68OObHB4tUcv2V9TN5r0qF4IAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNLikRAfcyhg6ep8ZCrcA1O3PgWIfXP8%2FD0Z4ZfszzEM6GYUq4X89828F68Uz965zDoTGa1%2FFgdmKoLzfJcn3xIGcLVSBytwDnY14UgY3aK9ivg6%2FwqQcM7OCetHTx9bPx61ZGY1LYV1tcBXgyuKaJG2R7htIyYawnptzMBuSTLym2%2Bu%2FUZN8f4RyFWuu5VgXHChWjruHWzOz84gYamt74ZWxN%2B5rFKcw6qrmUXQ%2FGkUBbcb39M1FpegkEO83BUC%2Fi%2BO9FEDmzeIG1KC1GsIGULpLc7TLIlbiJ%2B2WDKfqrHxJf7GN%2F%2BxrJ54R%2FPT4xj88jMb14GIcCydQBdWWCpCkq3I0b%2FrzXRUi93psdfLWJmaFSegKrTIU8JXvmk3zABQxvPF%2FuMp9%2Bzs6L5p8jsgWVMIjXY7rAAFoCW5D%2F%2B2gIuEJT3m8Wy12LQgSy%2BgoOExx%2Ffn2zwsXfgG57stwtxThoSZANhKYG5W3jMML9lQkcQZnE%2Br2xwwVd7BpAZPoqyrTcUQ12XKclduN2K24mabRPVG1ymTAlDMo%2Fu1LGSHqZ7OPva5AktYfTYDyXp1Y7DrPE%2FAqylzX0MTf4vXXaoZ6bKjOpPEvv6IjkNtgBhVHJOSNZFGPzI9E6FQ6CbJ6DCBg6UUJTA8ZOPOj09AMMrezskGOqUBEmscNMQlmZSGJWOPWiS2XXaxQHfyZXHUerEXrLX3zwfODwQKeWp7YikSstSAWiU%2Bo%2Fl4cNfu5040ntfPv7SsoqiXsQi3dPl%2BotEPzQaBL4FAZHjSo8g4xwVyUuMqdBn%2BZ3G%2F727ZhB7N5LxsYs1dTmfK9t6bW9HKuB3xHl37J0Y%2FhM7HREV9Axl36vv4ZptFJ00%2Blx88zaeP9U%2BQxxHgcUIwM6LX&X-Amz-Signature=e5607ef016de33f4892e26a82d1fefb9bc4f47e00492e8c8c1d51735fbb3fd28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

