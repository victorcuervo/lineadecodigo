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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVLRBPH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC2X3RN1BbDWKurSAa2wBo%2BjQrxn1nWY2MdjqNoVTWxegIhAJFXtJv7JSvU88N3lfHaR2tyi79WA4LQzrChLesSSl2yKv8DCDwQABoMNjM3NDIzMTgzODA1IgyEIjKIe5tcvSCZriUq3APxuVC5epd4QHHo2VjqPhxTVrSz%2F5wMf79dN394Js0DL74HhUAupZXqYstBXMQqoKqYbhm9aw9kNkruF%2BCtpWqWQc9a4gWVBZhxknptaZVV%2FlR6gM6M0lW8t1omPc%2FhSQO1E8cuK7a6mC8Hu%2BiXFnuHwYfhmwaMe0UoVaPTSLrKmPj95jBMVXn7WouPqUBiDmrXs5Y3fXXzropDN8TGpg0ZSjoXjQb5%2FVd0qaFeVLnIQ%2BYDEYHlPAg5jLYaeEaXQyp%2FXzwO%2F6THkMV%2BVu3hyKr5s1uwnNohlNvfQmH2AeSQ2ilDyH95FtRhIDxDSPYU4Q1vW7n4MBmHqICTUmDDeTWp9R0a4LZWHcmqiEm%2BIQ0M3OTFvsggT30CvrgrgHkmpYePtdqptYtyfIIjATZ%2BDKP8AWBS31kJDmCRHjUHtPATBNtL%2Ftcn7P7yknfM2WBly09xdBGwE7AQsgc%2Bkhj1mbAOftU4ctHDzbY9dfgnJ%2BS9XQ5OhqRfTqLCll%2Fo0nWBU9dywuiHS2mm02s0V8eMfLiz2xSeIgkcn7DsDzR76BDYmxiaM5ZdReqpZiLOInwy40G09sw81Zs%2FL%2F9kYFWo7HY%2Fhxk7iavJsAZTKaRPyXpNqcmwh%2F6gJVxG6PdDTjCs88PJBjqkAfWSc2MosuK2SqTBjvMAKOrNNPy1rIaxdyZjxF9rS2s7ZwYzf0SJstOF3ceezLr%2FoQJ1bnG1DfBWRwnTP9ulSad%2FG8nult%2FDoIsDGhEGcKnc8lf%2B5yTywm9IX%2FPxjpLIiHlIXRG%2Bwl46C0VR4FJij1hxeQHpvUWEboZXZ2yb8mUrpH7KvmohBitI8eXPGiT5AhFMJ04%2FRqg4Os%2FHUYgMMPBZ2RnA&X-Amz-Signature=158ea6a44a91b476a9ea5d60379f410f91aa9b9afa890ba596cfd190639a5f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

