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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4VJVQZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD01lTtn8NaYcjZYlY%2Bmj7ZqCFIQI4Otkouj7Pdmtu5RwIgDZmATNSir8n0G4H0OP68om4038DzXPTxyiyUNCdzJBIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2Btw72tcJpBiT%2F7ESrcA9zFjCFggwb3xZ168jtw9fGQgv7YYD5fNjXsz3hCGWCc4nKrNqJ4XytUaezO87fo5B%2B4guFyYF0YfMDSTWWu5lMQ4SruR%2B8pjYy5Rqfr5veNpUvh3sLOTpikBo9oc0vx3xxmsRDIkXH9VxGjJwdzt5YEHS0W4BnT8TAoAHdeJge4B1UdQYgTO4cICS9PuxZO7ntBveExiNqbfVxj7Fs47vJ4OGE0SgPXVv6qdI1QPktvnsiLXhOh5Hs7jb1Y5ER8ws02b3jEbc5fdnDSFHUZRWuJeUQq9FJpD%2FXZ1DyuDPx3mPQaiWuuwGfpBz6ZCDxzY%2Bq0nH801xWnESHDRorw6g6SYDqkDAJ6ugY5%2FLiRwnmdeYKRKauo8NBAqSGGlLhFTsyVZNkBDsHGM99ubhlKtjQ%2BA3uYZV2y6hKA6J91GpVrLrNGJ3McvLmBQn78qS58FMGEyk1%2Bu29X8w5A6ERCNSVF2XI4noeYCCxOH1rCrLoHq8e7GbB5DFXKqtRrNEw9TtUpaIOaAjdcM%2BcxKuZvmwW1uvZA%2BRZLl2jMXaxm2%2Fv0bAkkp1ETxOORSutwv6haL9brMH9RK7vXfLjSofrj0FHlCFv0u9p%2B%2F3FB%2BDsJntK5P7dso3J9SWUd5WyXMNKf4skGOqUBlvO4r%2BMBlysKPUiquJXmPtGxuUubtqAHMeUDL3VMxVXKpMdXfzQwu8sfGMXN8Xzs6XPjcsgd3vaYrXEn40JlhTSUBp0F51wLZWOCSGO9po3JN3q6TIev9ImhvMltKI2UxXq6v6fncnenx3S3Yb2zgQXekJB8Hx3jzNMB8A9ggL8rPNf1u2lUNuDQ9d4OUZDi2w5Ddr8hS8%2BQ5JDtrNPKAGOxpSkK&X-Amz-Signature=1d673897f1641f364a204f87e49b48925208314a4b44155ef2554229af47d3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

