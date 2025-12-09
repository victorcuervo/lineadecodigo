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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VKHGE5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTYSGljoEDMhSwOh%2Fg3MfjJK%2FFKtAZnNKJroyYIBZPmQIgXFHNBkDortZj%2FCVgb5ixs1JRddBIwYguaq7oajk9TiEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5z5LCt5715XpG6ZSrcA7E4In6aIqZLkoYVhoBLPbfkd0TQmPfi6FFAPSnyoC%2F13mlQn9tKG0L8GavFYrqQvkSoT1kgraF5qLqcNmX0%2FlsSdb5EmdZWVpjYSEbFT9A%2B46f5oRAKROfFHslVSiUUJf8%2BfWmqFha%2BRaQ8X13vN1jZ1bpOdDXeg30fqBwSsaxjIfJQu4X0Mp4pB0gFa4QTUU55GLtthBuWsmYDzN%2Bwsm1jFM17EGhBi2Vg2AWNhPgEUKAY3%2BXuE22vpKuj2kTeS4RtUNcn%2F0i%2BmgPLE2W6E5lVibsG1DZMLVretPhCcvOGvp3By%2BO0aAxucG3NiasgIXuFOwMK95rcxSNB2PBE4hR85fdwzIxaYOeTszy%2Fv2GnIWYeHohj4DHObKi0UcvZ9NH3AASTOiBNItk90LbwOIkV5HDlWI6UV0v9h%2F749Z4PMQm5vcrxUHpmu%2BugLPV6knZqJHPnZKjbodRGsnVUGwyBgPRd1w%2BaOItPygmfaeHBBypngfO869wWQBsduzFJD7UguZlUi9QgTNK74Yh%2B%2FK7OffpuedOM8%2BcKzOqKraxxciQs1qehTTNIanmU2ZH9Hx%2FGBRl%2BrQcHe7sz%2FpP7CuuEgpL9EsVV792zKMuccYuvjHlg00WCfWFqgWgkMOS84ckGOqUBAWgRm37vaHNMZPkOF3w45NKhgW9qmJRjCAtxTbeHns8FYQ75K3%2Bdim9nJRjWK5BL3sjBquSQptZJjiSVlteaRVik96b6SXHzq9Ht00HEIdy2BNJi5kwEQRRApJHk%2B7sS7yxA9tWAq4YXwF70MG7SHZmpH52PBcjfq03vE8zVCJkmhPJEl0sqJg4UW7svfYveGNLt4uSVAzGq0VUzPAWbVHzXZ6hY&X-Amz-Signature=3b1b9a9b5085ad2b29088d5706606a76334db00cec55ffbad08b739e9a8bd978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

