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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWBASNE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwpRlAj7rQe%2Fm9QB4GBdPg10AmnEbhiSy%2FMjFQsROoHAiEAiQEFUovh1rb6kxnqRS2tY3yw7ud%2BUr6ocJqwZ13dWYkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuVLb5a%2BgIjr%2Bg2UCrcA%2BiqY7%2BE0i3Ab9VHiUuhyOa4Cu6YhYiHW9fL8DKfh4kIIqzci%2F8AnjfRyJFLi3nEb3U09eYxGXrJwWXZWe5mHjOIjMCxkSxodkNmhAYLosFtrvxWvHd7%2FBGPF5Tp3oezOnqT7GFpzoSdVYzQe1N5%2FHmy%2Fx05Vx7cPyCGss68ovtN8dPT20Av74qkSzhhhhAIZRSroroQaGB26l2MlXdP7nfWnDKukspCdEnSPTIHwcQz4Ag9QoQ0WsJJn4wTGTGlP2z5CQHQK5vuBzWSv6FmzZHhZfBBwHym2b6iT6g9FHthdEMZOM6nYr%2B%2BePnMDE3LkGhhfBMkQAf3L1tZeWB6iT42TNupE%2FXXN%2B%2BQXB8gh5iZk0u%2BWJO8Q%2F8S0KyTCBRp14RXOz73ZpjUO4g4MCT4tAJ7qoc5EdP9A9GygqZANk9nP5VCWu22GHhRZAhtEuxqBEWBUwkyB2Uab%2FTOHPP7hBmji2kCLVqoZx7HP8SgFBVomhKx%2FfI4ZcCd38JfVrRVHcfFs0vcXHlVVyyl7TW13XLCMiqHuzlXbmsdzCWx4nkdfbVmmsbbo1b3glepnYMBsimgh5xHIxQeTZbp3ew1xYGORCt4nsPnNZaKIrXDY4gGlXxtFeqXRFDFHVIYMP3C3ckGOqUBZyIjy1OUJE7ssMA1%2Bbgd5zkQdk98scExJgwU8u%2B2uT94pnYhGMl%2FR%2Fv4pOSo8rOjNWWXqMayvRBfrnrt19%2FYsthdpK%2BbSaGkXojZthalZWfHWm5XQQ%2BYw00Qmd1KC2r68hYljctwpyeakqhp5sa87ZGrOXUwTXfJgnWhvPk9DVFEnihSrYxNMlrQBu7BQnJ7qYRN%2BkUTKDbVgiMwWZOFy%2Fklm%2BGP&X-Amz-Signature=3ee4c7dce6f42c658475ea99fd167f227f65ef64650af37f67f776e2b98268bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

