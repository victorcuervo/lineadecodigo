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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPK5GCAH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvJedEnkqrQqSoOngGL4WmJ3tDsbcoOe7maLn%2BuHhhWAiAuvKH9yVOOhyrHWv%2B4%2FQf6mDvmsdePMDdRb6Hx6YK12Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMMknKwITlyorZC4ygKtwD0bpq8OV1byB4iVnHiDN9T4qBpqF2ymyCUGhTp67o4cnL3rgf%2BDht8BdFbDLM3dW1je6Xc3o9z%2B1NdnmZwvQWhkKPKHYznjZIET7lnwZjz3ownVhcLOxm%2BUmKRLnUZbmoZPstyt5NPHNi%2B%2F2ec3KtVcHkzjlkO4MOHGajfSmov4foWaRX6R5%2FniHXp1w2NPK%2BF%2FyootKZdNnH0%2BYUGgcqEHcxdHHTFYAgLRMUbT1ooSfwX0%2Fwu9I%2FevY1ptMJn84o2HIvW1xW6LCoYPhKU%2FWr3KMN3NceO7BmvFURnmRhIkr6n6ewye3axx1md1waHQdXadC2HhollsEhV2mr9LizDoCH%2FEO4hU7N0xvMX3y%2FmlWpjE4xdyxUExtzf0xNebr3CqpSwBUzdm60qzfxjB85v5dSefVx%2B9zPLSDvTtRhE6TH53zjGvMSHj01mgVQf0b%2Fl4Bz9Kaq8rWVZQ9Lvd7mHn8lFFPNym8jWWx%2BWVAWPtbCqO46TTSwGthWV8t4Z7pBxfhPsu98x4lV4GCS2qAPTg5IufyzSTCsRfa15D7S2fLyOvV4HZJ%2F%2FVKW8%2BnpRukeMDzE%2B6Ubz8T62m2HJb265lbZpm4l1UlgvKh%2FfWpIm4Fe4HuzXOchihbyY1IwjsbRyQY6pgEWZbuksdfqwQZzdK%2Fi%2FjXXWGxsMiBXw6qu1MdS9NzhC8J%2FnpMkpifiIB%2FpJmOu2OeThYKthlF5H6H1DWEZMW76SuPwiC9W8phdnKok9RMe%2F0QRq%2BCsM9dSXrk3c1O7XLfKvk1sNdcxPX9HCtKsrR%2BoOIh4Z%2BRgekALeSjRMs6TRLUTdv%2FNd3DEQIfmLY9IxgE9f9AtuZRpGL1QMACoWgb%2FwQAjOmgI&X-Amz-Signature=4c669eb3274aa283ca1446407523d5b77d1108d8f173d5c5a2bb256d73fd5e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

