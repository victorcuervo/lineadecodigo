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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQX2XCEA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNowYJKfQgMYfePPc7mrxKndzfjn25L7QABBqm4%2FFEJAiB2Zn0M1PJ50hFuhkaiIR2Lu34E%2BCNeDumlAPZKz15x8Sr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM99kvpOzqR%2BpW%2FhlUKtwDuYQrPaF9UOWNsn%2BrPvfZgvh2iliCiMPZjsE85xZYVTUBQUgdZ9xzerkqmXOaMeagd1LHK68Z%2B2jBwLmqW6ie1ZE6PDz203JCzFGmAUmh1xd7BFSYEbhqXBAdYXxqdNu%2BZnkbF%2BDhklc9M%2BpVjjnKSk6ysfLeuTd9NFKhYB5cKljAshWaGs0A%2Fbr17yd5ZOCS4MCKB39TgmDOZ9rqPN6jhWZngVkAhRbSNdeY%2BYKm%2B9Ep9pYNCOR6wWuJ3A3by6BWxrgb9MTNOIMyu2C%2B7xI59Qp0KNMm1h%2B1Ss%2BaWlReuehiVEtYh1d07Hz0%2FgcjBFer9bDdcXuWaKLHH%2BgxT1RI72OYtUxXjp6UuyMH%2FQf%2F31jKOyS9HgyYR2VI4QQS4qI5u%2Bvbn%2FCw8fSwQi0t%2BB8T7PTUY8y4tjQlFqbL1eW1DgaUgXSoh9WQ5TXTNFsVQ0tG02ziH9lVSEU%2F7IPJkiWKgwmHfQsMfRPdZIKSo4KEOK8DMA7o7rcidNamHHDE9U40%2F4wFW2R2JwYGXNW1YkPbkRStx69OxG7kGvo7Zk6qGwP0Vk1rZXdsCMUfWWez8cYnd8k1h2WwVtYO7e9DUNVWkLdNsZYVf7yNGXANDlVvYQGJJ60%2BXF86oM06IbEws6jKyQY6pgF1Hev4SWQxElj8ZyvmNBWaqgDD5ljs5o%2F04M%2FcNV7CTdTNPAMXkLgj0q5CgnNgrUvlcPPlVFYW2x3fXmHdhc6QotzRdGhV2IC%2F8flu59TgTEwr4OToifxLW9zitcHQHIwdCkCh0CFVhqxHk3bOYM3M2nmPSE8RQMrRbB26epKPHvdiY%2Bz1Q2qHpT8jeOGW%2FxGfbMWK5o%2FgKZdmCjfTjUbK4u3kBfCi&X-Amz-Signature=6be5fe8dc6a8f94bc673f4cf50dc97d781b2b990743a2589af4a70e52be363f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

