---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N423GFO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDzYc0nmNDXr%2BIMz5BYYW%2BBInkrBbb8RRdCpg2xPg7WIQIhAPnuKuBzegAjcyzdpwr5HIGMCKj0ugLsuXn0LIXsV%2BQ6Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyowsnT7YzRbBiuQI4q3AOEKmjT6GTArDt48j%2BiS95nF%2BGoeGk8OXLcNomZBD05sJdlZFvLksjgbn9qwjBEcrgGCLFE0l3M47ZC%2Fmf%2Fit52SXMn7Oe78z0KfrZOpKkBTXfU4UriZO6Ps8ODAImX6LZSs2iZmzyE5CwOfkBy%2BpSWJ69RGYViy%2BClodG8M0ukK2eAGT8LEFPLH3EbiTvyGuhJIGtJWluYogB8xfeDvLPdUJ9a0r7BGpB87z2psuvZPsMWndYvWxWApNi1sBLC9%2BcSRR7Df9DyFF%2Fb36Z6dI2hEh%2BNfg48Qj2tBJhed%2BrssJnAvyQsEupnDw3NQGPjwgACdvz7Uyv74Xt5mEOqC78vLxFGNQrCD0CYOjQwJ4Ft9xGAMqG%2F4m3oUOPT41%2FQ%2Br0nhH7SdM9BBmAvekvFC3vxfpfpeJDlkHBi%2FL9Cb1zZ3VxLNRHcijB0iIS%2FAvpnCKPFkRb6GkldBoxsi%2FIzfemAK7GVAR67bn5Buy2N7BUCYiON4BNrJrN8XDLCtxkVkIJ9lEUBy%2BenOHe8NrRIXOORpd6wDyhhKL%2Fv0TPa3%2F0cWTPDd%2FvnMUa3OLDVH4CeooraajFNNzFe%2BawZSikukA92bnGJpSJMQNUL3wNXNGcJ0kak6GujiKhfOfR2vTC43cLJBjqkATopGLDo49wdhb2vGibov6g%2B7xHhwDorvqgSKid5qrbDgZJ7iNAhBHn%2BPeNcJFKFBvuyHASMzudEoYPatT77UW%2FFpWSKW0CTfMav%2FKfc4qL6kRXbe0f7ZLgntlPGddN32HtlgMsUPlgYsd6vROnsDpJoIZZrTzETa%2BIG3BVelBJbi4tH0Vnoqw78izxKGBJsaEiVMzPuITvM3tAHaxRpurypJfBp&X-Amz-Signature=ae52a049ee4dc7298ce69357175b2b342e7585c9db8d259351f5f7c4f49aa449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

