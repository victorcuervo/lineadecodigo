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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4M6K62%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUk%2BlMAdszv%2FvRwHTwTIw1Zm44azaPawBe1QqvUm2MHAiEAymLDYkU2kE7%2FXWzOPPVj8dF2Ln%2FNhja2B6JpmNwNrtkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVHxSVg85mesDDitSrcA7Q5dWFzFZ9JEoT%2Ffa%2BPA370yxf%2BL7JxKUidhbNTBhbDvp2clj3wQxOwTRDjammcVz7HwJjoxV0UEYBoTu%2BrmGTfPW%2B9dE6zhYiO7NiTU1u6XkBoGKsf23wDk0sla6h5Ex0%2BF4ULl%2B4uuZhrQJJEa%2FI7lh0pY2kWsrj2n5j3KhWBVa0SWr7rioBIOnPoaML%2F0hennItJe0KkNlhO7e1%2F23JrgVq0ZoRoqKRfwTsBhcgMQIImusgNGO23BM%2Fj0574EdBztie%2FdUfq2zP5bl3rN90aN%2FN802%2Bp8Gvt9xbGUnYKzI2kmcPWOwr7TDAKbRrVM3zqpQGd%2BNEQwwdTk3ta%2BVAKEwu3K6Hir9Wv7IqY11ntjBl3C9%2FPBGBt6pOfBYAJ1BcZoz5cOUFD9QS2g456t2EHnYGT8EMOj44l6fo98tA6X4py%2FlAs%2F7OFS1vbJowG9GYrKgJy6yXIDRBQ2e6aLKSCt8aYU2MQ%2Bfx73HUQPXSg0bRE8QaN9jEj1sW97RTVlLOPr2G%2BSFZDJCIR6%2B05eeP%2FbasdrK6vM2WC2ukvHnRH9dsmz%2FvEg6hJT2DIIo6piI8dt5X5hM5wC4OrESnA7%2BprZaZI2nHbB9IH38wVy2iclzbhYcUPYkICUPGvMLez3MkGOqUBoYMf1rVOzPBbKvvpTBb5WLORZ6AoivRVcvCNgt8J8hHU0%2BSeKG2PaV05N6LU%2FQQ6FyaJa0uafTO3MK%2B0r43N4ZA5M29jbkNiHq8A2I26lE3VTWSjUziDdrio8zIm%2B1y0%2B%2FlXRg7vzydgYsv8T94AWiAg0gUb4exGk0oomjjf1IXiktIC92t%2FSzUHMuT5ty6A1nCXiu1EIsoaBvCVekCyohnkxxXK&X-Amz-Signature=9238708aa7a6dbf8009bca06d25565b202402d179564bcbc22dd3d09580713e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

