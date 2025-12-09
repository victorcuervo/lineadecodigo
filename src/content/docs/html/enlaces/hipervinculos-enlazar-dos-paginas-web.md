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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJEF6HXJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwL8ga6Z5RTMtT0GddZZqUv%2FWUl71AvB%2BeQhodSpJVOQIgSVX1AawfDZzjzevtHoUOipTsTlme9vx8yV%2BLlDVtY7wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhnTo%2BOfXJuggMcSrcA4N9A4%2BUUZUsyGRJS1cy106w23YYBirit31P2kAz%2BvpQCl8x3MP4iW7v%2BW6hyJ7o7muHs6V6g2DN8FqRoPz3YiylnjB59Icvxkr%2B4m9EPxVZO5KAfhjdmN9CTNnc%2Fnf7zdg%2B6rbollPIlRyz035s6KcjbMnWJAgGRj3PeMQ2%2BN5eNQWx2v7URjmDk5BnVYHHioEhZLxafpz9LDdbZ1exbPrf0rAIYaGfPM9Ooj%2F1zjD5jLpaLLiJy4T5GcYsnecDSKLrqKpvqzeuRt9kxeYvEXxEdv%2BnDXpt2ReVxn6eklPa0cMfZF9eUoN53OyKVCL57xMs%2F78ySS4oqDw1aQ69OMKx%2F7b1NviFdg6SNQRgUdnuEE4%2FMaLIkN7435G9gpR1qnK6Q9pOOmR5YsBKHQrkadIrRw4CcQ1L1grnpGVdjsAc7UN26LU5ZIOg0exiBMeuHzUfG3Kid8mB0SNfvFo%2FnaASwwGn2CMZ2CzCOnVxYyzRVW13uJ3oAOO6VP5OI1rh6VMk1lKOuNRqJPnvbuoiUeIYToDhpxlI7nHCsd49CRo510qmIJXMskYjuAaBbws77WCWj3q2mc%2BbRsCIBl6k27Sg8r0R5UEdQEXw1epSDw5fjAD%2F9heyJDgXv0vEMIK94ckGOqUBWahh57q946SbA5JufqOs3GfWwz47Ib7Sn5R%2B1opTTGtlemtLbYXgRVfNFGq84Q2nhplC2LIa%2FhL9F0lPY2ARwMmU3SXPzNCYBFRmRUGv1w%2BgGUh7k9UHR4Mbn1O5FJMt8y%2BGOoX25ozPUbeElIdSRqtr8PXOtD7i7n%2BYlPcZXwTIu9AVQ3Ii52Y2KWp6XW5QGEXZd52yqG6gG5BGLcbZ8G21fetv&X-Amz-Signature=7b20824a05198c189010856df434d2e3b80fd5cef66d46bbd01f1deb58fc3b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

