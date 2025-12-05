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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXOOGNN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5Wai5TtP%2BW1i4de%2BbGkMcc1alYLbIzrHAXJCbnEJRAIhAIJhk6OzUNq7SJ6FCpjfJ1emdt1%2Fo3X11NRsfIXSzwfiKv8DCFUQABoMNjM3NDIzMTgzODA1IgyzRqlXgWI61YYkNdwq3ANuhneOv6bG2pklxXfg3dTkR0k6b%2FukhMyReyjGo8nCVu09jKyjFMGSujjr0R5mMz5nDJO97YEnjHowChNByJIFC%2BIpadWp5JxEjNnFDkOmVnpmrdxhYfAymeHMtUnnRlCoQm8K%2B%2F7cGge4K2ALnSDFs0FjF83BQG50JyQ8G3lyT9qOydQzURGwM3luU6KOpH03DWv3jfl5sdxk3kDOy%2FlQnaF1gvdrBPWPxvMBtXJtKSFqm07EpgGxhSsMYc%2BWzXXC%2FOAhqHurr2mkziHqzoi7j3V%2FVsa%2BYMQVBrYjLgogJ3Bb0Ic7gDJ104lYwMrcA9eFVTkftEiFTG6ygPagBY4jQ5xxEvY5yuDlOSEaZ9TN3nAzRCR48MBXI2evAcaPKz0FoPyJSL6FAfDyWg4oaf6jy3V7dfbYHApxECtbwwPnK4p8y6Ya2MUUf7rP8cgk72%2FpPjBvC6ZVkrCRlw3HtfbHmHUkOnOBamd5%2BvjaF78OTxnQqGuxyYRibF1pQPDVkEp6eiyUpr489xUmrlbN%2FdZ7ADYIyscCITyl2AB5DIGQHjm08puAkn8CCeZhgXglnJSC5rAf0b9vNs87PyzS4lnkB7EejjD68x%2BUIzNzGuWEuilXd0vkEK5FhB%2Bo3zCZrcnJBjqkAf7hDgkUi8Te7hQvV24D3gT1jxmZGWU%2FgwwaSCBv7RXSg7HIRj2Ro8ZrXF8PD5sK3qp7MhJda93id4mRLrbnJIuqu1nZaQeI36Gh1ib3VL7f%2FUO%2FlD8Zic3pkvwQWod%2FuslMD1pmty8lr7%2BY2bRCBer40DRlCxKOfZ%2Biynpgg1gj%2BqXpdEioZM%2FTRnXMNqMstZGeyyaD6B8mG%2B3695D561x63SAJ&X-Amz-Signature=b7615c2eb2f829f0432d1fe5f770964389a769629739e9930338aac790bfa1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

