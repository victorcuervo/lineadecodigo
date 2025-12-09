---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XG7R6SZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZXYINybxFdAhFxkANocmevYo%2FC58VsrEGsvApjZ8%2BLAiAoAQvay6fsNCn4I6fCkCESpPM2McWhU48upHV82pV3KSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9J8eHLl298k7tpsgKtwDTbowMLX7C6cKh9AGCDKWcvMVRZ1m60IefxFVDMGUSROIhQhHF76Vwv%2BdDWVGEZWLRKvt729Zas251b2WDeM3Er4OSXKX7n7We1lbFbu7qiEfe1v%2Fh3Qzl%2BJm5iodo1MUZpa3bFhS3nevinoB8w03bc2YzEeGYmQsw86L0xvnP85EH%2B%2B9cKlLI3izofVlfUxD2K3WDNxYPqrEoTi16iPI2euswor7EyorOjObvjZmyps6yoDUCCtBQBfq2577MyJVIInAcUbwD3GaqOR%2BUDlQQ2O%2FjKJGpm%2BnJ%2FPvVXJS5Sk4o0bXbFvq7H%2FkAjF0VQJ22t1jL5pP%2FTpzQcJprC4Xre2NtjOSGzZLVYvtEfUdcqqJLte%2BfMejMYfixxIk1qzXkHdgjlXv1yESb6fLwok7ibE3e%2Fko%2BCmrkIWq%2FszrOd13Kf9qvMNuD9lubsTS7%2FUySlRZ2%2BWHRPpOhWpWx1Bzrkxbzwg%2FXN2Pxkk%2F%2Fhz0ZMDwsD6dZ8eomFwMc9kIM9W5ja58S%2Bhym6vPCfjqpWScYqkY9XU%2Fx0S6BsjPMvqEFzCEETn%2BTQpYMszs44wWn5%2BEa8zIUEKxstkPe%2Bb%2FcCbUaV0zp1eK2jgsFOIjXYWpGaQ88%2FmaS8rJJBs4MBEwxN7hyQY6pgGf0uv8a%2BKVY3b%2BIglzO7uuUfOFd44k%2FJvHnSFzFBYsxlE%2Bn4eVvJDnJ2zqxJInz8kMvI2antKgx%2BC8h1GzcWGu54llogWKvyGc5X1wWV%2F8fHWBTYwiittCUCwaf7eSyy60cVZaVU8bkCvuCUL4sverY7yt2BDQiEd%2BddJJ263F%2FNg%2Bd0SVTL9I9%2BdPAPH33gIUoRDwlSWSAf1ZfCeH1gWKx9NIgpcN&X-Amz-Signature=fb87602f2019c2b920de84f0a3008003f6dc9464acc5575f0509e1c00b0d92a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

