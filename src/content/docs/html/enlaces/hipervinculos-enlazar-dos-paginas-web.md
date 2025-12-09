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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7XDX3R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG%2BOJCCnl9GY6%2B9rHMQSgU0qlfIbQU2OxlnePsGFpebAiAM5hIDUWH4Wo0mssyFZybn50uzaOLtRu7IT1up7OTqkyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0XLurU25KGb1oRnKtwDj3rwJRt00IjfhMlSHRTmm9wLFlDskiw7CJbj86EtHQlGxensSfNzLFsXT30%2F1T0bNmxpisbcnpa5GJQdkKbdCz9VVxuJIzOXz35lqDOva5SkpX5cpHlGAQjnotZv7sypDnxypauDElYqAIuF193suJQ%2BDZyEQ%2BK99Luxvf8gApNmHDGK21eiNrSNgh2uEQbHNuPT1qpJT7voeN35j0FHIsV37Hc4jaPrxiQm%2FEZWhmy%2F8KniS2oAFMk%2Bbc5Ny7rdRvW11ZCEldeFqOWxVOsXA0kioBS9TFf22pvEYbvExeFrAyTMB5oCJ8uM7gpgjjL2wdhlm9vtWGCvEYu0SO1IfJpqocWuDQbprkeAfDepmhnIdqCfrpPHgHNjb%2B%2F%2FilHiJtiGozZEkAwVwjUtNWnB1uZe%2FzUYk%2FeSfhzemsAGjZWjbHQpbHU5RGd5JTAj4gC%2BdyLGaf79fkiq9%2F2YudyrqWUuZl4r20PLI8HDHSNxRerCdLE9ay8mAbgokMU6lnzAcdexLNE0G%2BOo7Z5l7Ru9d%2FZAaiPtbfmw7ByAUmszgcCxRKF7SYi1GquFHgpvHC541RoF7Fn4gPZPKY0Vb0imbH5Nzq4BsbQT1rcCygItc28VA8KezmxajjeV0j0w%2FcPfyQY6pgGSOmwx9pLaBOYHx7iAXGriWlZBnlO10q77ILaEFfEZJ7bISwu7uZPfZ6DfomQuyh9SzdkAOe8XRgvxksV%2FpAF6mYesYUhldlSYMXKhtCeJSQwcGe3aaAjgeMqpx%2FTHljhWt8%2Fldif2VdE6g%2B4iLC9Kxvji6vUZONA82l7lyNGTByRDBo0I9Nks%2FrFVeF4LyEWxRhKwcqNLmoqaKDj1MrhbqGtKmJ%2Fa&X-Amz-Signature=f0dcf12bf40cd9677f60bf217f7784d92e5e2e9ee0789436b2c516368fa8a05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

