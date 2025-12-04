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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDVEMXW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCoMYYc9SlIZ51LZYTI%2FDsQpLcu8T8EfjjkegONM%2FDU3gIhAMAelBoEJNjdrRf7BBaDC9MOf8f23v3TUOtE5hhKfZZgKv8DCEEQABoMNjM3NDIzMTgzODA1IgzKjadG4Q%2BOPc1peN4q3AMOpAxfcktz6FPXCIIZ%2Fp7Jg8DhXPlor5yatucRqgtdWxbqgE%2Bv0kxbcfZAV4mUeLQGEWmTT7jEdE%2FCq79gFlrhAgA6glCEQt%2FVibBaOjV9SmpykqVQ%2B97hcwpyfR8GAJTXddeTvRRpM4%2FcGBwiXDNl%2BzZFZTW1YA4PSEIrOOsdI3vYSD2062S0bpu8zI9sI1EI7ARwL2xowv3aZPBus6OSacthql6hx45ppf5EQSWlU%2BCSKQ9sHr6itWROiWbyI6yzBBDyzP15OMa0Rgr%2Bd36U4CPK%2BFLFrMoBCiIcNMSVemVY%2BusggMdMsT6LCIMyMpYXqIC23%2FGvH79mGMqeCCUGZIV08lUSkDuMfG8OldMzvYIX5OGCKLZx63wMCv%2BXKoaNOKWxdThCj2fC%2BlRxc47KDI2gwVafDesbmWZj8Vhr4nVLer6jrTgvduNnT%2Bo9y7mrjFJLAVI3i%2F64jtkeCF5YNuVL8C3p7SM2sDUkNG%2BXajSrHsmDF%2B%2FxEPqBNygzpnWCYjpmXp2VVXZNbmIPiTz9Ly7kmiACFI3N5NGvE7m4XS5osxDi3rGMMTP09ubNzZW2QVovlLZDErubmhAvKMMSS3d1dVG7UbQHHCewDNM3fl9jPzeKIp3MD4iQCDCRhcXJBjqkAdIfTEbez%2BxgAF%2BNkN2yTbIVrYfjZCCGAFFPXVMW4VGuUO7ETkkiM84%2FTHg2QIx0oJYTvVBzal9j6ZeJGore1AlEt%2FfEa7S2UVdSnNgNdgnzBsAWZtpDEFzcuLH0lu%2FX3sCenaaq2vgy1UhlfEQ0B7Z5md1ves7A3HiLVpMrrXtEbuQIPDzUNL0CB2gqujCFyP0lbk4T0tauHMK0o64rPOtOvgn%2B&X-Amz-Signature=335dbae5ff06349766133249f36affc3af2b79a052d7e81778769e91c3a17022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

