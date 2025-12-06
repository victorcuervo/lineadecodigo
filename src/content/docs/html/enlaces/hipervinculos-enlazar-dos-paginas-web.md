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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SS2UY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2RqEwU%2FjY4EtCfZ3%2BO7o89F15PoYle1tvItuZTRrpFAiBZW217bupGd5FV%2FfnlxBVN3qEPMEOQ1z86sjuVVW8rLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsloOB5LGk84rukf0KtwDKlFiEJlhN5%2FoeQMr9u9ZuSOhExU2YWRMjLrZUwJV4DHiD6APcgCAJfuqFJGMo%2B6t1sJQ5Js%2Bo2QiMoeHUG1YuXHa8TNErtAavKzy%2Fna3mlKyK9z4WNpWce4SyWDNyBju7vmv0sM9ALSiM8a%2FMOr0AqbwRaVheDID7JPgXdMZUvnpdzslwYp86Dqe8tigM8fOm0OWPg%2BK%2BMrsiIUROymXBhwoIBh%2BF2dZRDsji7zXqPVJkGuSWZZLJ9a8XkOWK1335x%2B317OM%2BRsQMN2wKD0aVr7oRAbdAix2FgECBzvmn7uqYb%2BPtemttKuE83gH6lpyFTxjqV4HKmD67UDzjpn8eruPKdQnuWhkNwb2eVYX5AQxsQATly4%2F4GDC2X5FDO6BBgnvNLEPRlZIRKAT0%2BCWAfkMinUqkZKLdbkd6Y7m1OENG23Ka0zXeIHs4%2Ftkn3eQM6uDM3m3t6viatd3JXLyB42nt5aySxIPVkxhnv0Q1snJDSszbleotRLyNEHZUKE5FrHGF4vP1c4VhSBwbQZ3l%2BWLVO5FiWVm13RRCk529QX1RlvIf4CgD0oaGJ5%2FH9xvM9VqlgxXDRhjloOTm4In332Lub%2FUore2Imcv29O80%2FsJpqUtaj3dGvEcAIIws6bQyQY6pgHW6IseG7CQ6oeoAAAC%2BIK%2BLt%2FNSWmks%2Fc3mIA3DGjhOK%2FauTl6nr7%2Bg%2FJiLQNG6gHS3UYw0VC2vXY1nd%2FebAgQozP1qYHdNmO5M31VS%2F59N3FOvQ%2BICeIRtUKqKSKo7oSiLz5F0uIxRZnWjpWs1qfXJMZRtZusI2r%2FmKznkkJd8qhKJ8meAQzI5fIp6PcXFP2rFd2kM8mDT3nnUxQ2NKyJs%2Fg%2FaGjL&X-Amz-Signature=87470f9b0f4889eb71bde938136e49e0fae69535a8989b5c6533ef83d19debc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

