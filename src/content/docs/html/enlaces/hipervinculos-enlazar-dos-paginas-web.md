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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK255QUG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhe6mRkXEVsLVXqCGeYGNz8CEUoDTbY8usG%2Bq%2BmNHxcAiEAti8nuqRAQj3gaZOzfpkAf6p6SsjoKJtpeugkKHAPVpYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNl4o39BYN9SnUwhvCrcA16YJWs3%2FwVURj0oKA3gFBptfZx%2FiFrH8Jsz%2Fa61r6UAc5%2Bt9y24oryXGAPRpNcvKZ9haThUaxmUZpIQYefa6FcOpC699JDxporGFLRqTUlPW%2BYI%2BhDLZS2hy7qZcLmav3t2eLcvW33wR8UQmpDGuHxb971IREXmGcJAIR4rcZuzxNbHZtl8I7In8dpn13hvy%2BjXSZL4k3AuKCKPPEkGrN0KXbsw4vtXUzeOQniVreFU9aaExe6O1WErZZEeruR4i1U6dX%2BywS3J9tne7Bt8yI6b2zHOsEENkS6zhpPjhcJ3D2NrRjSzMuidzclhFi9m8nNWt59c6P4H7CwyKe9jckQO%2FHxoA0s5yBGKyhKhrj9cXRRMHNO%2FzVFlKnioFqy05LljLm1FGkCoI4MmdFgUK%2BE6f2InMxJygMRUmBc8aJJ9fS4O6YZsQoK80g2DUJhWRo3ucfBa0Iy6PmFLB8QcaaHKYiCgByBLwOmPmLbv3rVJkV%2BdjvN7yArX4gd4utnC%2F03T8F6RP2s%2FCn92IqY2Y%2B%2FiPcI%2FBfanLH0j7yDY0vcYv8jkZc4o9RZmw5sr9HEPzuzii3bMu0ObK4gNRhrL02jKr7tYGrkxHTehvSrc1lg6Xr8aIN6mdw0eFpBcMPOLyMkGOqUBJ5sNcge6pErJWxbyeHGbHe16W9QrZx8XY0BnpPw%2FI9H3%2BPCJtJJKftuuOb%2FYeCjlzSsSmbZhjqBs%2FkwbPKcp5oUwSjzyHIbNk79hcoUupDEQJ7zj%2B1%2FTB3uD286Sx4hBuyG2pr%2BIBm0zJhDg78n%2FbfW1vJ8fSXGdLxsREWZhYthydL5skiI67SSEdqx%2B%2Btp4LZjFLWJ1YTxRC8GoEYwdWvxU7cla&X-Amz-Signature=d3e35ad5d11620723a7c01035b0f2a3e929252fa7ec0dcf515a3d984f2006e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

