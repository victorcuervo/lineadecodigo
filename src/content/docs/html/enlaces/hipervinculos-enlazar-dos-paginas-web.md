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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU4AD7M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqS5IjCo1qLtP9dbTvHdbhxhETe8I%2FzfKoay9Jcp6%2BdwIgWpGfprHejvr4Gy62khafRS79aVmfU5xqKrONNkvCkF4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBdLX27BuYFGCuX0yrcA64RzEaXjMFuTTQ2pWiLaK2XbNJIFEb%2Bt%2B90V0EP75FW1yKbiBbnPC7AuGqSS8ufFcoDeH4sYOFTaFL4p1ydhWhN%2F0AoD%2FxIr0m3LrRHAAORRialjW%2FRRq%2F7UtGA3SmzEeJoqPmejDMnP1d72YErcf5vBc%2FQv2HxZqlNkZ7xPYqyjzoycq%2BwfVUvKJRQNTLqZvytL9DDqlmzaWwhBzxw40ZGcQ6t%2BCVsbqR5lIRk92ufF%2FYSQ4R0CJE6ZcY1%2FpxVPSzXkoEqmn1WGzElC1zkQ7%2BcLZtBH0KxPpCGT6R4ONBiv4z433Gu0l6ZgL2xo6sX%2FvENnvNnviujsd7JESMj7n6dbGJhHBlpeHqeoOVl5LaT8CHBm3H%2B%2FLre%2BxxVSSzSS%2BwOwL5JJW3z0d8iYC7EJf2WGPYTHTofvqUYYnc0G2xIOqFdifmf3Esg1E1l0%2Bpw1k6yXGRttNeJ2nH6cF8VwBWS3xkOmVgWjRzQ5wurOoX1sT1AxtVl5RrqNkrePdsvYRlvbatiiJE%2Flnsaa0QqBTliCapoqM%2BENIaIQDQMidKECCIsWW6KJ%2F1KPWr0XQrlSptFbTQ05Ch1oo47QBPHqeO%2F%2FALLI6bg29M8w8rAGLP%2FcBmpTsVsp4oRFbebMJHE4skGOqUBrUrEaogfAqhoLP0AVrg3NAfj41szqsL3X%2FFHMgl2zNrgWXVeQxuKoG0IW72o%2BSVPbKcpKSivqRraQFfo2f00DKrEIKbdfUmkSP2YU48GBurPkBxSmPJm0YtJIC64phIsg9kHv%2B%2B4zIa6w84YD2chDKYFUe6PRpEl3yq7PPTxAL8n3Le%2FxO31fdsNkgHbAZpvsSfPHmLW%2Bl%2BlmvETf8pTLqozJdeI&X-Amz-Signature=84927bb1b45335fcbc3260e0bbd45346bbaaf997a9c2a4c7f0d57a791813c82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

