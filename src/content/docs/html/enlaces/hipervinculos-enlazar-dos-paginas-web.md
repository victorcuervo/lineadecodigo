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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JNARO47%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFc25Gi0GG8JwH60Xj7qhck9jziXV%2FwKrlgCLsu6FC24AiAewShvibtj%2Fk7UxS56PNhxzM6ft3MEsCvpAqA8AC9ESCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMupKy6sFFv2U5FK11KtwDN6Jtr3PjaMfbMy6qTyd%2Fny1Wo2PCPQAR5OIPmX6agzlJVSkHL97w0fR084voOnnhn13bHiTC6FeDn%2F11zFIJnNRCH9hclymvks%2F3xw6dtu4ZYhKPEBRAHWgWXy1T35PBQs3mnSmpzrX13OQ5HMXvo3uLNaqiAm9GKPSye56lKZVc7YqMq%2FwI6hj30NcG2XAiCnuC7x7GiJNrrDgqt%2F%2BYnnXRYal1vLSGs5jDUq8mRlX52p8eBHHFBBMVQDAyRqZE%2B8y649JMW9UBzy9xjnKBH9F86yclwVMcOpYp0SEKiaTAh9FnY2UaHIToQTpj7f2tyO%2FEsVlJO6ijHvqMKSLVS%2FBZ8eQJd5IH6hx%2BHXvGEaFNjPHYUvHqd76bpa1QSwxinQV8Z6z%2BO1U11BxNSPCgxGMf%2FplJEBh7RE59teu7TViVWbHX9CUEedbPS867bRu7RmCfvtHsV5CjYAHSGwoMcse1HeaC4SapS4%2BiMIGgZ4KyncvGj0AZvCuTe%2BpQVmdx2mzOBgrWZf7giffprI0GBUETTY1fvzrOGmjkC9Ses7KwzdL4CFKViMNfd691V7R9roIeWJyeoQ3lWbhGFTjFmWf2dNMgejnFvOWyFct8p6NMaREsV1ymL2lTrVAw84XFyQY6pgFLQzsDuo6xPeooEXD7O3JdKLa1GTLkJP71jz%2FHFQpf3DsbFC2e1bb8yT2CLLmu7S0rpjhRvurNjBt68Zp%2FbH%2B8F8j2X%2BFYUf%2BPpREDIWMWq2rWd3Gib%2BtNM63krD6l2TMIizj1j2ZhbsCj6qWz%2BIN6w29jFbWUIKyA93bgX0bL6kxyNUhKcsLONaLWs7S7FpBJtee03t6UI9JI5r76%2FRAch32J39FB&X-Amz-Signature=d38b2ae0b6ba41f04df4979af5ab6c06476eedef7b4bb3129c08231e4d6ecad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

