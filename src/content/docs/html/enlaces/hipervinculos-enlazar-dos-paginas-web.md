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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q72DAP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFIF%2BiKQWrx6gpapBzBKAf96sX7manOuA2WBaHKB2I7AiANEfoYOmz02HkHrKg4FXPY09acnSavqS6%2BR28J01zhMSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMieACnaw%2F%2FL2vGs6CKtwDikYEi4NrK26FL5q1LVZT3zZrqQRQtKFi%2BT89uEZk7h6RUTAysTYDlfwsCipCHG%2BKt7KUBvws%2BzLzI9DpfpWIfc3kcWNPK1WwS3hl8EvvjgawlXuKTt6boUIhuubN4bfvs1m2i6o4R0WHKxT0%2BfwNNiQJ2FXxeXK%2Bwd43hMIyPmAxivnDDLtNedSaV01SN%2FrjEnUwsAvbLbSDmQjP1bdvTs89koprtf8iaoHKGf1ZhH5qZ4B7uKDctx0XhwgOw6R%2BVf5J9zpDnVv5PnNVvnxLahOaFG%2BrT9k28T164SMGSX1EhosLNidLzTi1Q%2BjTtV35v0Xxj0KWgWA9Ka66yGfcIac9gW45HYdVpLtrZ3eUoRg5B%2BHvXvrHc2fS2iPpWLw8c6eTYyFIeEiX%2BfeGKA7IqHst2OZEaaQVll%2BSJJtDQBNqM3Ch2bseR2ZTZt2tvERm2qnJE7xbodbK7tUJ3YCkJN%2F8FcUJBrEc4MAUyZuCQtgaJNjrH6h1%2B1FHbMDokXXtgVejHM0dY3BRrPYPkTiKFjlLgI048uh1mgyplZGrDaZAhasAta5XHf8fbCan5V5CerEp9m04GiWQJxsruytUnB2d1R9O2FdOLhQatzcV%2BuPjvrqPnC4bznhI0u4wwZrVyQY6pgFVYv9njjAwckDjnbf091EkGeAaLubb9pTYtWeUmG%2BOm6k8vmC6Jx3FQ0fsxQ1NB4PvPOnLEJE2U%2FEKvyX7AbgFm30cKzsYmiUaR8PYpUqjflL6c7P%2Bhj6Mdpazx3S%2BLayeoaLFrQ92850G5NJUmvTn2mgI8FyCd0GwY8U1YDQ%2FcNIT5niH7LgjRgU%2B7bM5%2Fi%2BLTg%2F2VzJ7q7whMtbx3XNCpm0gO0i3&X-Amz-Signature=3ed21102b04a8c46e71ee432da94065d509d6f9d4dda9354ff9d9ae7fa115ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

