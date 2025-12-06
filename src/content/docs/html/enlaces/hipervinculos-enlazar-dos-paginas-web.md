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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CDR5FE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClXlL%2BcwRrTpRdhAEkd2%2BUhc8NhSGf7WfLgu%2FaWRijiwIgHLNY8LVhn5GUrnycMhjO5ynXjuOlCFQMcUnprgG%2FagQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLTNPcr0D%2BenimRnnyrcA5vdrmz%2BmxC6FOJHaKGtXOdQVSAk4pOp0ww1uy%2B4GiyE5Q9Y9W8mAPyRKbYljFeD5t1d2KBuHxf1o6PgmahQfOIzn59F92NYxfnnWQDVA4b9ROuHS2%2BDSK%2F9%2FVKaRxk8tuLy15SerdToeqg06BUpIeiyTltPVKAJB5bPRoEgwGHzcNBnucGcca6q4MchEJiQ0KrHHDfQZf1gK844eJxKgHdzvX%2Fi7eX%2BoRNiplyFyoTOPH9yWC4Ji409bYGeb8wgcNs12QMokLdV3gsQ3aT2czl4BCOoSxuYDzaf8liAWQLCEjntVtLru3U0x8beZTd7irrOvPGfpc3LMSesa7i2lJ2f39xXYnSPu%2F1Uuf7srRlngX6j5G4rkeCA3S50sIQr0fKhlF3yRkuXmIEU4FLQFxrAbJGMHvfZyd2HCOHOKAYTPLPfDBLH8LVwRwJCHg%2BTgTWh2wH33LVSLAKrVbVK4nyY%2BP6AczV7vS42bf%2BvPuMbxy%2FZiKifP0mZp35QPLbdOLrxPEFjqJsN2tNMZhkTzXLZPUnzkvFK1HSmqFZPpFDe6lUoGJUVBGPZqRTJPE22bGici1CAG7E%2B%2BtEoG4%2B6vCKTfd4cz9LRrpnbRb5TtXc2s77a7OHuDLTMDRVxMOum0MkGOqUBg4yu%2Bfjb7jX11d9RL7psHtzsx0DgwuRoa4gqudgybAvZ2wDhRkNoZvnyIwsbaLtLvVbhpjOn4jhOnSZppHnAT%2BcY2Yshy8iasK4vp9sbyE4f1ABvHwXOLzf9Z5V%2Brph3ZTaFjnFve3kE5X%2Fz1KnwZox2MdA5Idk9JeXJIvj56%2B%2Fzv7mNwWMirb%2BSFASu7M556GT9Oq8cVNXita3MEE%2BTSBXPLXHq&X-Amz-Signature=ace9b7af8d0b98717f02146b12a999b3471271e3da3b3fec646823dd38021a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

