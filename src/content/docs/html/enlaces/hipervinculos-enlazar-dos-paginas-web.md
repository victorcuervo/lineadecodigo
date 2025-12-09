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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL6POHP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B30qL58DrIsrFdU%2Bh4yW9uuB1ukGNvJkvre%2BsdI8WwAIgdspciQN0oc7DG8qEY76CT%2BLVprhqX5n4nH4%2FCwGwYRUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWKaPjB0f3hv6GdoircA%2B6g3FcnMNGpNqJFB3oBkYmDb7vd%2Fc4gZ4tmWpJyO7qLo60ZeQ1LR8duGiWQr5sdtvYHOCfsFLDKSaByQ57zOBmo92SwFLhhIyUrcPl1PL66r4%2BiL23WEg3%2Fe3CD1tCT%2BFNr9oP3mFhsMiSkCbYLNRbjBMEx4doHeO4q4EC5FucbuseGYHa2y6shMdGeULHvKXoJ8LDG%2FWjT53GYa0O5rmUtY50G7N7FTOymJYXyRsBQYXj4px9Yo8%2Ft3M686YNa%2B1anG4E39O1rSNmv4yyDT9kDU1KjiY%2F0u3jqbtcnKjBVd4CATVWXc2KWt1UseJaR4iexvG7931A2Iydd0QLgBSxn%2BLq8rMwq4Zu0PjawxXaS6mBSZAXLuq5kj2G6ElT7%2BWB5Z3MhacNNQ932ILsvjMkLiEw2wKfNNOYUfST5OojS8Tv1R%2F9cxH5vDye2tyXuyid878FiVdvYqCjny%2B8SQVS5y7W9iW%2FU%2BoHtsLpD7REcYSAnRKbxd0vhJo2g%2Bm5HzcajyW4DTciK2S1klLKgkb3Exe61Ezs9dPM67TI5y9s%2F8N77j9GB09WTh4yn7OnnU71BSAvlVqv7Q8tb30yuqiA%2BeFQD0x5iEOEZet8GnY5VsGW7l%2BAdmJjbrporMJLd4MkGOqUBRjh07XhSD3Z8ZDWqOXwRF1jmqMYYkWH%2FwFrlWMJi7bvfYGlvMmRnlyoSk4fAnR0MRqMJ4zl9ZcpO9Gbc2MWfq%2Fw9sk0V4oqFRqXUUftFQ1%2Fp6XtYfebGt09BsPdxC3r03MddGSmrtjNCQiEd58foYkPprXRqWk%2BPAX9NEj663PrId9TKwXjHl4HQzTXQa5Fup%2FzL3SGMO09MHj8YEE9144uGcx8a&X-Amz-Signature=0a7bd82ecb082301d13f442082f68a002ce49c6d42fb46b520a467b85120a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

