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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GV3JIF3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXHzPm1yyS6ThN2db3rFf%2Bf43Hadmbn%2BqaXQVCtFOLOAiBJoYityoJY9o5ua9JfNBMDjQ3ijwnKjWQJuoHQk%2BZKRiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3vIa2swxp49DSZA1KtwD%2FjnzUwywz3J1RSlZ56fYa9wh%2Bw%2BmVDOuWrrYaioGOH%2FvvJ2OcYUTQMnDt8sXY%2FhwX5oLv9RcLsEnpW3G%2BZD%2B%2BqjeB5%2BbeLR1sxFX%2FdCQRTZ2h2wxFE3h4vlaMcdJhBcH309uTMvI7RVFr%2BeYkR9yZ2pzuG%2BGIYHUFWkL2yW8ucexpOAtC6a77IvErsHfK85JAuP6r0pegIqfA1ak40LfCz34GinOkDU5bTmVpKCw4YjZ2WjhftGyI6yusWbMeIdi2izzvgvcUyx5yeS8AfVcN4g5J0zdG%2B0uEXJppjebNw95zsD39QdODw9dsDLt7tb%2FPKGVGaPiFK5HjadRLibs4Dw2d0gG%2B6CDqWt4D6TOnoNpQCSIW0vL0Pwy6nFQqC%2FvJdVwqgAvDWh%2F1%2BQaSUTHXiyMeiQyIMNwfEmRb5zg%2BjMJ0dXwoccy8FNlW3lE7sfucMHymMpdXSyzZEOnqSRIZr6I%2F348eYntB9zuVtAr2IeyubrQbOP6DIee3uqcwUBjml1v7%2Fg9LMNq%2B%2FoKDxTTH%2BFdIv5n3b7%2BJVg7gV%2FyftNwabg%2FtQDs42zAwLZDlVrBW1xUecaobMddD9CAYeEyZ0jlRabLqK5mV7fSQFK8m3Uc%2BPShBhVJrD1ACbQwqt7hyQY6pgEKiQ98n%2Ba5%2F1U614K4fefvuNDowueQGSzOEAr5zj%2B35N%2Be77bxnTqOWUkPa%2BhFlLlZItDyZCd2E6A%2Bt4Y%2FWuBg8GArxo6dqqFrZVJACF0CaYQjFM799UPekoGkWeVGMT8j%2FHffBfAZufrLSw4F89BAH3yUcwRRmsSgKQ0AJgiylaG1rgART6m%2FCx6pW2ndPTinr9TWX27v0lVLsenPGaJLEPc6H8GU&X-Amz-Signature=c55c0f966fc5628a70fd49cad93b99300b6ce09b2df3c70ebfb1945e9158bde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

