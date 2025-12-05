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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBDCHSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0zwdD1jkHxHGdS8lsJGYLHXsSamQbo8oBlqeK%2Bc6vnQIhANJhfGeBkNlexCC0qccgcvQpsnoIl2NhU2cM5gRSmqbnKv8DCGAQABoMNjM3NDIzMTgzODA1IgxcJmCVly%2FYcNPD6mEq3AP6Hu1NJrgCpi%2BaohfvCNIVyWxPtyCeJQ3ggRb9SGGLKg9dOeQwqlU9DosNPd8Cvv0aYeBdrb%2BubEdrSTIS2fIvwPv7dy5oMYNmV0fSHlaz%2B%2Fc1wHYRfPEg0QavTxuc%2FkdybjxMAgHbH3dTv5PE36xsPDKv91%2FmFLZUK32tcrhd1Ii370%2B7s%2FdxE6yKm9VaN14PZqK63i3YyE6v0LAg41CqyAvfBTgwtvUQvtxzDnq3IcudZYa22Vwf4ljpPiMWZ20q5aPgA9j0rTydKtJ39Z4YQm4OMiMJT2%2FO68gQgprjd3BK6uD1npIh63sDhJm5RQY6nd8TNLQdkcChF9ZZTMu6BvUfYvfPtGNZ0%2BbbMZ2qHTra3jzj0V%2BJDMuDwOhr3KRkcG%2FCX9tr789dSMLpGKsmqBme3I8RO2X7%2BRBuDWuhPWsJ9t3%2FkzB%2FCys1DOaS%2BikM%2F%2FF4M96ocsyEHxm9BVnq0uuWHkovvgAkLXsqpGAX243jImveU55JWjyQmEVzbrPja09xO5HjrM7ZKC06yo2PtGx3q4U%2FqbIPcJqDbZ5S9ooXPn%2BEJexzAorsdhpm6s15O4sskrxDDMnlMThDxZHc6cb7DmzdlEMac0wC1sZ0uDmeDOo0niKoTXUA%2FTDS68vJBjqkAcQwF%2BVICVdmEhLKJD88Vc7c4TCZuzj6p74E4XJos%2BlvcmzQxFTPkLRCYnjGffqtpB2XZDHuk%2Fi1cFyxLC3AyB%2FYv0PPAx38PIRnBAtZZu0BkVlraQs1RbDBpCtQ9OXFm%2F5EMmM5wZjTY8hRTKKxsF2OQ6ATmuJwOAteqTH41WF4l6TGdylphk30Nbc6%2FZ9CaOPdeQ8XLr1zqsfAIphXZ%2B4CAfsL&X-Amz-Signature=172108c0b3a654a8368d07da725cd14789d94c0addb90297019fb2e7cc9c6c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

