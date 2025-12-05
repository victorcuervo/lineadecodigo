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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVRVGEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJ1BtgxDZ%2FRvoZYNFyO9AXU7n3CzOkgT1msUjDIU%2BvAIhAPbMXvVSp48BG%2B1oAB45BdNj201Mf1pvDU6b5q0vV%2BQ5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwSvcazznoX7JQLVF4q3AP%2BalYRZi7XmBm8LnFnML3%2FvEiW3EucODd25Y9EzeOByRFcAUQaUfKK5LsCX6msNbyHalhYHkXG%2FFAS3lOgxSnpSyrpluFJqHzEIlOgtP2wDg8PaYeEE%2Fs6f1XO3FhJut%2FJnLU3bLnRPJgDKFusYua5pyGzhTWC0%2F3sAjFmoTfgGH0tKJREGQ3iDtliFnK%2BLHJv%2F0putmCMX%2FegsSYTTGDvGnJSIClOhFxDZF865r7VCe1u6aZnKkzwGZNI8Z3I2CAydVPymbWVuXDW7dZfBK%2Fb4YbazJOwYHgKYZhzvYvHBz2HeouYu7cSKXvS8kMtfvCKxtoViQu9DuMx9AM9Ck9UuimdREsxLeUI%2FbTRIZuZ6s6vBOU4AgSeviv15G9RoslTzF5Z35jeFXFC1%2FkJnzKEdk%2Biyk%2B1hdxa5YYk%2BWASdxK7UKGW09SfQfIavAvn8pfW0sHQnpuTjRniKAKNgGmyWgL8GQy1dhC32%2FrITQMbRaLasEt1rCGGMdmAJAtKo5HpC5zBn7GpPTPO1dGbySkw8%2F9%2BincFmpTY4w5emZfRloMrm%2F85uG6Snbn%2Fp4xIanjK9BCjk0VBLWzKIzMOaQrbW2VaQrpv2%2Fd5pqLNB9fbIh8RsyAsiymOl%2BfFhDDM1MrJBjqkAS%2F0x5g22vvDiNZYzmzj4Yk6LZeIrNe6YsYIm1HzgRfXCR%2FRTZ1stfibUjtxzRH68d%2BKPGTPjtJm4fD1ljK2RoAUKRwbtQ438Kpf98eI0XAdN3wS3Tmw6k%2B%2BhalmfMNa%2F8spkop2eHdy1jLiTGwrAbuFjXnkfwheIW1PDXYPLniwOy4hzXnx3%2BwOFnIA%2BiwdXHWVcu1ZvgxOS2h7l5uAaeMx2Nmw&X-Amz-Signature=f0e7e8e4cc5af71f90b05485ac307e7dd40934988c73b67b18393d826c6a20c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

