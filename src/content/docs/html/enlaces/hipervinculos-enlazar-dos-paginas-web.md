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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISMHEBT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBLSCYcSIzxi9dDUYeOjIWw2tKwIFgYdpziKEBlfCRV%2BAiEAhbDsBEnfD%2FqxP8fvua9znUuMtfYoRF4ZgYWCck9KZqsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCkZG6lcKI1oUsqVIircA7GBnoL9XgLYbUzMwv%2Fau0m4T4y5NG9Q%2FAUBNZXlxADC7PSvNpq4zBdooGh4VWTJlPhh1yxTO%2FymsTBAY1h42nBQ69upq9xO4NY2nKh0fglGk0droEe3bt25E4NlWpG5FH8N05lZzF%2FFvzrQqx9FUJX0l2OItWo8qKDgDCKvJs3fk3udWl8HGgQRh8xc%2BrW4lyOtGBpkaXhzZSes7EWdnbPOALbnLpjnPFnkk2keSUl3sHRR4SOf66QQRQjXKc%2FFZavzNGguYB%2BXFJXldS0C92ui1vaqaJ65MXF3V6ujvqGYsNqiXh1ogBpxVYmKigdFRptpqss5CSJ5StfukQ%2FRcDyzsUJsNu26f426ps1CcKL3R8iObF2E8v%2BhSf2AvfOj3Dz9gLI3zYOvxBEsPkKe6eprgHA7sIUk3NwbSbWBJlda%2BjT9O%2BseE%2By%2FsGtnh4QUzVEsb6Ip4v2ULXGglyyg75EW2vefDw%2B8kgf8MYWnUI0pwiKjVqmAfIEc4mcb1EQJnBAhOFZgIM7eKJOMCyaAHh6OlqRhswjJZkEfqvjzpwodNGkNwmyfa3P2ph9WQMlWxn54x3Mvryvpqth80Psxr%2BnfoDp90%2FiQjdgF17k7q2IVdukWXxnLZYAEte6QMLnyw8kGOqUB%2B85s%2BQiWz4ZA%2FKwXg6hDsedmfXSkVWIzq5vblgVe8skZFGaIQhS0uhehV4F4tX1zHx4lMa5SbN6ugy01qLLdxqRUNPOFGdLDGdgvIQf2XyzPsJtx8A63%2F%2F4NsLsNOoJAP0b1V3aB8IDOVYwl%2FO87svatH%2Fd198%2FulOnoupN7AJnUtUvdDCT%2FKwmrrplFzidB%2Fs3tiXKBzGNAzp7tkpyJ0StsClYL&X-Amz-Signature=20f495f6fe0db459570374c7a5804e1e767de1996065940d97dd41daddc20873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

