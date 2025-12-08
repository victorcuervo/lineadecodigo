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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZUNLUD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWiNVLKQXPIHkIVHVKSJVnvVBOnWyGOlt31mZsJ9VmQIgAMQ6keSdQ9wpZmnq3%2F%2BrbRGzIhKTHtIvJo9Pif1%2FgJAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFnkeMp%2BLsVxtDVyyrcA%2BjAh3fM9SzpWZAWRMqBD3x8V59AaiGp6nZRxjlbTVygf6wCIVvtADglj76TLbTHRIfdaFa68KjaJ3ix9eR1HQA8Ljtu438y1Zd%2Begk1U9NZw1%2FXzu6zrYczfDoaXi3CP8kz9PoNhOqKW0NYUDLnTD%2FCYNId6%2FCWtnDVW1s7GevYjQvaOpTkctD1A69irDHYOqC6lJjxPlILH%2F3YdLwkjDbMmjXG2m%2FTNTCtwJP7rOw6XvLFt194BSwRwlqbOMHiNhv%2BY%2FXQfpxsqnwd0vpxHUWF%2F3pFT94tXLiQwMVLV7sYyiq3L69vJXx%2FQwOYX6a6htgis7PcQyszig6RpppjihkjLBWcHFalUxXiDi53rNcI5Gfaf6W3Pb5uFAv49iWgfUZmbQ53uz9A%2F%2FTOrMS8zsft%2FpBUH9tJ5Pg1XMmg4VAaWnAv9RUdjd5%2BPDLhJYdm5pETc9pQHbVuPOREt%2FURbeelod6lubEdPfkdRgokRYCjd7s%2BMlvZ7rmA%2Bdp3HGCI%2F%2F0KRZ8I27AmAZICBpZgGfydcZKUupfsa0CZLHBpAJiYisA8Q9%2BxVN%2BnkCRTvtMvqfMHmN4F8kEfmTZ9KevSw3%2FPKO6yt%2BNuawM0Q5jM9UOkMHUlYvnr5Px657dvMLm03MkGOqUBaRRNHzqkGwZgFpHNbC%2BRKBBV3kDUk69FTQlTO1K8pmSBIcY9ZpUHdD5aWLeoBO%2BdE%2BlgXP8vRK%2Brxvl8hfM%2BB%2F%2BvRP8IPXbSTgNH5o1N2wnfifpjvqLpzKu8R0sqhhh1U9kGYJWVz74Ul9yI7DgzumWd%2FLAPxQo%2BJEQsA433Y%2FSuxwU9H%2B%2BnArKtMDq%2BfTK3bF%2F95r%2BnYybnEZ6E%2Bd5wkc0%2BxkQq&X-Amz-Signature=586cb0f3cb1c15eb341dfb0d630393df71331dc30f15955e45904b4701e2aa91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

