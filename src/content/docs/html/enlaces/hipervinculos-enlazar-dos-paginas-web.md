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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYJE6AJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0XVV9imZDEGr6wRi3%2BE9B5H%2FE8kAcR2qb5zVAyuu5AwIhAMLsjdg%2Fn2bZr3GT9zlc6NQSNBsygbyfb2SvfKWKFUEpKv8DCFsQABoMNjM3NDIzMTgzODA1IgykRYvri6ye9GjAMxIq3APc7s93YdIzvNL9N%2FUNAJcr53g8J41uVZ%2Bu6UqEOJxiZ7kgENX%2BjAvEGNWPAhTvpypD3F6esAbiAkmHZwBbOE2ukmox6FAr%2ByzeQWG9%2FanMKaJk5fy2rYY6RHsdnBHX1z4reszaR3PAsTTu2pwly5gRVkyY%2FTTit9UPrS4ceLBEtbQH5w7KgC%2BLLYdmAEA9eQNhaZzDaTqaEgq2U7ZHP6D0IKpwqYsU9a9GK8GEHwg7wCdeseZW2EXufB84GUzPXMOkXtwzm%2FSBNiVJ0C20TUe%2F8qxoNzMiNOJf8h8iZFZq1Rc%2BRDf9RiHdf6giAP1k1q7IygQguDhUWAfxIM8XONzdUf6hUUtm4Pk9inaYqkI7xUmWJ1adHl%2FdyIYP6OlI5Fikeb8E6ML3h%2FFPSnpgjUsN%2BsXTqYE7%2B7JGNkzA9grlYF%2Bx0D666zet8ZxtMnMhQ4MQsnXoZ7DaLrDMAzJhcQHN%2FT31h9PvG%2FxZvXUaUSZOJb2hZbXlm2mMUSYmsMklH%2FyMCGEO3%2F4RU0cymwZ7%2B0IGtXf2BJm69%2Fnqq0a5graryUslUyF29TpoB7MyfBAHr%2F%2F2BcEEDpdxapYnTnOUGE577ly2MM4MEhWS8aKPtBAtmL4TO%2FAr1mGW9syzozDvzcrJBjqkASml1%2Fpsv0cC8wA1IogBEWVxuJE%2BhZdTD2ZAbTIUEXoQwci79ExiE6ZEyggHOmVb8XA9V3pCXpzFWpluR28RqHXkFxaYowQSf0siSuSvUHtiWm8u35yn9PDhjCg%2BISTGuI%2FOrqoBdxqROs46IfMu0G0Mx4pgV4O62ReRsg7ryZsA8iuxlh6iC%2Bv8GKwCN1ThCUIi2wLCFvWx2jKa43RuOS60Udas&X-Amz-Signature=c5c6046eb53a9d9204e8b9f5c332dfc58f4a883070190086da91815e1bfaa99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

