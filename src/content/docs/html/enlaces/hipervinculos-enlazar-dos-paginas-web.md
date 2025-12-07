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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH4BDJU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rDeKcOcIQpJusyKHdtmoBbJulE6uhPXR%2FLb%2FDwuhBAiEAk2fZjfbxoI2%2BSVYs1kBUCP3ibWEEcH6SX3%2FrsCFjz5YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsdWR8QZM9tUvrtlircA4NcFPwoEtzWlw1fl2VqG2pIHunM%2FnYBXFYyatMpoBwh0d1IOPUVWmT1lts13ZbQErnbgkZo8xf3s834B0DeMDcyIAeEziDihAN1%2B9W2ekhbABdiLArzV14pQv%2BP%2BdE2X4Bx1%2B9lea4rtggmOQdA2jMnFnNUDTmh3G%2FmRR3WyKRgiJdgCZVQ5bEfhzNkPd5dX3lOmLyvDt5lRMPvidi%2FlPEDh843i%2F%2BgEnnpP%2F5mxJslej1FBWC6i8QFlhcw3eYeXO2LDC0RhtCkZMWgJI%2BmP5h2yLiTi%2BAvCKCMK4qQLmiKen6cBKr2ZS18ayQYJLaQm9x%2BYOAEt66XL15F5yqmbWbzkiaLGCg%2FRckzn88YgFyfPCFzAXTOsUrj%2F39WYEMLkfPISBmrWWrYtZWomEF0z7WXwsjUml%2BSycCICQVKY%2Ffclw2epu0T3V11rd0DIJ5v%2BnQp87LkPJLQaojvNHSglwLPUSynV4U6rEhMfYIrImUbYH77gx1I0XKbC1kchHGmG1KMY5uIxDHJvodxE%2BCTthKeBk6EQYKYftW7mrusVUh64zMTCBSNt7iMNng7rKIQ9nvwHFXqrNmeFHXwZqvb2uOsJ1MWKUcs9srYKaVsfbFnRjFx54yPQ083W5nUMN%2F90skGOqUBxa9bhkb3LKiQorKs1Th%2BYjW0J7h44x3ZYG%2FVhOCyG1P%2F%2FxLL3OW0e%2FYlzR8Ol%2Bi8EUn2KEpnl6oz%2F63x7OeOD%2FePxZSJVn%2FZHhGggBforQgfbaDrw%2BDUXR4G%2Fbfb4Sj3lbcSkzYzZPzU25JhQIbNyIFpd%2FXNcvZ2ZRVJQCgU7IUT40gdANBIn5cpIgU2%2B8YlFUHvJWGcw6dCLKj%2BW4HrCAoMh5jv&X-Amz-Signature=37909c889d70dde292256d88724b1b7e484aa9bb591cc8a2d4bc57202c9d806e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

