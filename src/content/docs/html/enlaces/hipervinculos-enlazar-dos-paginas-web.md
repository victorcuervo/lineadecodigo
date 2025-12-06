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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXFVEU6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcUeU4FS4iM%2F4HvQnK42T4ZNk%2BlKklzk5t73mR7lKmXAiAYhGs%2Fyp79zf9OIfYXUwlqk0orQYJ3F%2FTiMnhhM6A%2Flir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM9WB3IM10aFmuYz%2F4KtwD0%2B2EzH4FHx5hBf5uqzNDrISurubYPCbwSg3Ldvp4wbgomjGhPEzDSKu8tXploHBpYO1UyNXCgwQIbMVgSfDvtcuOP1mRZmD%2B6cLhOJf9DHoHZemlX3Hy9Z2l%2FHM9zE7JvoarSMangUq%2BBrQK7nBfM6Cs7IJjTMuGTkBarvXXxWZR4TqmHeAvw7tfwz%2Fp18Iibstj%2BcPr1fFJffn5TVs1AUENvn5V9ufEJmOl5JkyryJZx5Asd7lM5h%2FBHIxTojguN06ztzxBoT%2FOmf8B6Zu031wonwktMginDqmvX%2Fhs43yDGQquIzaUGmnHq8gasGrWxMyGF4gZsEYcoROHKYHzqqJNgYWU2d5YKlMB0KZMDF%2BqC0xFeYM3u4AK61QyASu86urOrOe8WgTVKtm%2FLEPpPY8fsOkl9sk2bID48gxeDk6lRijDqV4Axrk8Y9JUKWchRX4nuY52Te6X96Yt31sNUFwrVYSinWsspgcu0P3EvqwN8HX4628ItSirrXIanZXtSXsB8UVqhGZY4vhcsK2YvrFSkVHBWVCSv4pD8ZfrwkZBIug2%2Fsq%2FBq6dEmZuYBsXk0GqSEvtVPM225vlQyiJSWhfTiQLsWu%2FczwkriG8dbimIfhzCNlxKNDy8iAwis3RyQY6pgHMIOs6mNFfgdWhJBm5x8nHaKeSvuBp6Kn2YBoDXLBoLtlfK4Nopjv9BoKBhMoBBK7%2FB%2BE%2BSdpn%2FqRM6iUoWV6QXurxqbjIUAqv4neQv5KCdbxYp%2B7GYT5t19hsaAzHeL04a3tQbE0kGGRdW%2BZxaWfy3jkh8EathcCngkaY8JGvgPwauwsBat45aZZAUqhC4u7dOz5AYlhkdAxjOqI80b4FhtvTyT3p&X-Amz-Signature=5cd2598e6f287e66a5feb980fb185136d2f5c208cc3ffae75837ec1756cda674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

