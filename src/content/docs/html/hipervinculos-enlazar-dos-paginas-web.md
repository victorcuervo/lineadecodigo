---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIOEO2R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHB4tXy4eEgUiXoXBnjrWUa1iMmaULZRsPpF87T4kbreAiB7xuTlxk1J%2BzXQV%2B6Kt47Sn8j76yGnfiNZ%2FueEEgXRryr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMO2tD6XudBwJiPkXgKtwDruGEgSzpOsguN5CfxNXztVO36bXYCAWdN%2BR8K4k7RjlpZJlANUaE7%2FfvskUsoOOhb9LXeUuLwB4HVIESzUIaj%2Bk2FOXd36qnRJBAn%2BJl5PZ0xLqwYf9j%2BdqT0V6CNbJHfhUXhC1LM7%2Fr4pq7wVc8tly2Va13hDBl5RKLl4vzAYE5LiXiLM98S1pJ0zmlOb0UQ8Ycr6HfoSwkmqxxWkKT0scZ899FFVit8EGSSxLElV5NZb6valWg%2Bwk65M0evjLNAIUg43U4%2BcFEPgdkgXituPGmmtAQ6D%2FFR%2B3DRymHol7dM1esTDsGJdKRy5zXbC%2ByJSqA8xdwDGJfSqzHvEbLAkAPSkI9yLOyy82xzfiJdC9BaiRjs0Hj8JEwd7ZeJ%2FXXHZSrlyg2SGwCqjby48Qsl3C6stR9s%2FM%2FHS0HZjnr5PV4ERfQA8zB9YPoXuQn%2F2dOy7xhqrDCpDvU7Ypqgl5gWNNEFoiKdZi6Ib%2BD5ZtwZT%2B%2Fajt%2BJq7aSfrRMovhcJOb%2BZnuyBbCo0M3wFHRoYLME3chb2V6tF1ab3%2BuXuJHgRjApZA9BA91vuf888v%2BxPjcXQEWaUrWhUsM6TDXcsm287rgJYj0PV%2Ba7yaOOgOwIJkun0zjglgBmJQPY5kw55HCyQY6pgEoIhXnCiXHgUQZQZDOCHdTd12BYlLGzVpKP8x%2BwK5sDwfxfJ09GH7LkIKwGKAtapEYhtRI1gXfm%2F9I%2BptSmL%2BLOVV%2Fyl%2F5uzZdA9%2FlJWO5FRmRBlgLsTro2YWc686rRr6tujR%2FJNgrENaqvacEzlrZD4%2Bdl5c2e1LTdrT3HJiCGHjs%2FP3zOYvERxnMKaubkllgsa2O0dDV34tVr4H%2Fflo0ZVFNHRaa&X-Amz-Signature=73db6dee7f850d8e15d8ef73f3b4f9037e1109645c5295de88ac4af7c0ccd66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

