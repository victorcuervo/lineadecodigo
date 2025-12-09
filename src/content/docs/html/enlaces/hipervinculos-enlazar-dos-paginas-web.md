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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZFI7RK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgnbT35bqhQRj2t0HC2hVqjwILFJJ%2BfL%2FyX%2FJ7wx8KfAiBcFDKd6CKAMjJvC5Vwhlc2kKG9OJw8asS2sQGh0ApnXiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN36GXh22hLc8e4CHKtwDugA3bLWI5zWOEMWFQND8KGVsL6Jd5Q4ekpasufD%2FhOSLB6VO2h7xoddiFC899AxJpfy6VC60Gcw%2BTe885xy1gbdguK6sgntmiOG8OaA5N6Z%2BogNg39HYU%2B%2BnjlM81z%2FHqZgzP4KMFi4LqQ00lHRAFqNT9F8QfLRfXs2%2BwpVhqEz8JUPw0vKvKDQg0DR4ab6ZIkpZeNBkIcsEObQusFvyCvF1d9VMt2YYtDbxB6ck1WA1C8IA0OTc%2FRG8RvIuPJSVU3zWbrhn6O%2F89BrnShgFw0UNsI%2BQXOpubMNHVFjWjUFkbMZ6aTnYjrD5wUshXSnscDkUFTpcwzfZEv6DAK55KH065lNJjAfvBbZFgaFVr%2FhuhCL0%2FK02N4PC8O1Cs%2Bfy9Va%2FbTRxljLSod8DeCiehIG4P99KqDWwaRZYQwA1hzILp30isx5cBRhqE77kq%2BYgLiaBV4B%2BdgC3RKtiqhn4Izq10m78liZ%2FqSEy%2FpHSo%2FI%2FvD%2Fla81TAV%2FHUqOAh%2FohYgk1X1BNl65jPxjBeGYOnl%2BRfU%2FEvfBT%2Fg%2B3FBICV8D%2B3%2B0SSKNbeiqri%2FPpOEyeFtI3qrh8z0eVMyunD%2B4qF37s%2FOP1skXZLirt6mI1eYzP6X3P4c%2FTz%2FCeJoMw2Z%2FiyQY6pgHa7GYg5pfXxmeNT0EBHsF%2Bhl0E15THHb6Pjg%2BwV08VLnUJiHVPbQ4yjOZ05R4l%2BjW243wtPfpDm5gdoVQyffzwELobBTFPSY2TmhOIJWRIOx5StF3TBhrwS99Y9%2FOakcGZR5GGCqGm%2BPTLBaP7CRbrH0pN%2BB16dmFZIrjd%2FYxXQaZBjP23q2w4OCk06GBMrVmm8hrAMU0o9Md2zcde0kj406lC5e%2FP&X-Amz-Signature=d79a3187fba9fc0eb945bfcfb769e3cbe6a41eb0b09af2deaf82aeb7cef26813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

