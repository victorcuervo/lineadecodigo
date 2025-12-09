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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTK32JO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2Ax%2BQdJCXp6qKUSNFYE2DA%2BlVyxATDwfpj9jFq8s2TAiEA%2FDbnYRPrXGtxcBe9XLhPmxue8h3nwBIBZ7cSPgR4kV4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9rYMyo4CEmUrKQiircA780vD9zP%2Fm4F6cfO4n%2FfIjNZ9W7k2ye30hq5szGJ0BYs7x5qNHDKjFOOVbLtcGCAt0CSwSyLMuYj3fHAt4ElS%2FmYsP%2BK%2FqPeKKjV0X2i6Nath2up%2F3yDQOZA3WqlzzM8oGnAONcz%2FE4UU2KIWDZgc7Ewhvs6Uuh2dO%2FchtnzteZ8KUDF70dnMTUuKAswsY%2FNKrmepiXTE%2F2pAmSLu%2BT3Lpz7oo5BhJUg1gK0CypF6b%2FmGhIVBkXpaGynaJQeePP0RwhYRVBd2svkpNHUE7YElemumCGSEY1IExXNpklLshXBJ5En5ZqUi87y9PZcw%2BCTHi2YBf2yMCl7yyg67zZ74R7W5qFBwQLYL6GGQZ09emU5Up1630T3noea%2FzFN%2FSn9WA6zq%2FJ%2FwP%2FoZruTNWB35v9zybkGadQ6POnnAcI4TVFBfcbI6cz78WDyXd%2FECjXv09rB4swqcrXdDYN6JV6OVVqh5UDliBx6Xf43weC%2FaDeLhvSqVtNmMr1jJj2QAP%2FWR8MHDj%2B835nvnNgndkCoAHlXzy%2BcE31W1RIWbHy%2B5PExfDOPyXXRLXKl%2BFOmVfvUXq17dwKRnwxBC88g2OiD%2BgFBPuas5PHp0CBxn5psDtvVY%2BNgzzZnAekYJt5MPKt3skGOqUBzQDNsuN6WEpXzsT9igon1lf6809zAANCM3WAr%2FdjEeIRHi%2Ff%2BxUWWfcDOhTYGRDgP%2FiO4%2BnMXr3biBIqDvb7GbpewZl5CvVH9M%2FfVb2SP6az%2FOtBlPy8Vez8%2Fd5nN%2F3Vdt2gPay4EyTglEt3JzE7J%2FeRj0gcCC8PUqk4p8rJPyxf%2Bb%2Fl1hItssRiN9ykc60Wwq%2Bv7A%2Bz1pZcRrpOsegBDkays6zs&X-Amz-Signature=000023287d9f0ccfa3afbc6b0280be3a292c6330c284aed87e4e228695540ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

