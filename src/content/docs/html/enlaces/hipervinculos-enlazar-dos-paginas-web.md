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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6V7ISP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzAKrRgpMi0UgDLnAx%2FjVLC4%2FaSWqMZHfLNvWqW7%2BkmAiBR6C4jeAuN7q4B9MMPfWJOSiHJqoPuNyN3FZnRTHmozCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMD4qDHftHD%2BB%2BcEmrKtwDL3j1TlBkD0HLD3eHbYeb873xwW8bX11QEGp%2B%2FEaETeLVfO85POuotLbwKOd%2BNtGnqIMtRQ1KAk%2FoYZiAyqH5ngZHnZ2q8rB6rvXDySKEGtuyg5t3SHm5jy0aB6ZDHV89A%2BABnxCHqvVU9Txx5qHGNiagSjupSpPlGuOaBSt%2F5EDfd1ttBT2zftxxC6JqQp4aEatD%2F50m27ci4GSJlSD%2BqPr6MLsZFJEmGOM9%2BY6L51VuMEOrzDhfTGkLu7TcGyQDPJeLD0H%2BEdea%2FalMGqDL6194g7CLl8zDMjgJ8ZU4PDbbVTKw9mLNw1t%2F%2BfAvYHaMcfBcOWERtPdNhaIlGBRHK05piXgL4pj1Qx1WwbWZRwDBrdEeeX2bKXtLgQE72c0GjbF7IlHLrbHSKZmBS5eehmo8II22iRh92%2B3zXLPO%2Bg0Ve1JCD9sVJaT90I8wSGGvT354yrRR0t2ELQsF7Ror0LTsyOV7yVf9Fy4sAsO9YPpWpjkojFzX3o5cyDPmWQ7Qk6oKTmYCaKP3w6w2izVG2MjW2PbjInjEErogK47sJqO0PE8GNhVUZyPtX53ejNmfW1Y3uCMxamtFJkrMu9YQCi0uowPCJyvMN1XyzOJ7YsM3oq0ylX4WFlfjrjkw%2FfzOyQY6pgGieoOsznhYOsyearTl%2FaPwVTXBjPlJ0lO5sCqiQwH9FtP4YkZEwtz0f7auU3lG2Bw%2Bs0ybepxgxPYvanFiW3wtIfUd1Zi8gCCBaZyA6ZguG0CKRWMR3Jbb%2FyNDCPEWZO5vlH77iwswv7KuuxebAs7hwC%2BC0%2FftVBmoqe%2BM7VRjjSvGZwZI0ZhRFHSoT7hc1ju6FcWNkedRo8nurz5ry43h%2FsDVRB72&X-Amz-Signature=c707bbd12285f0a115dbc434e0d0253ee464dd35358751c0e4361e2058b64bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

