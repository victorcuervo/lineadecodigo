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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXO4FWTL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4aYWvfHEpHDrkxM1QA4OQP9%2BIkf6OogN%2BAZ9bzO2MZwIgWHJHmL35c7L%2F%2B5w1JdFViNQUaj3anWWJyd6XpBT6OZ0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIqwM75lzH1Sr6s6yrcA%2BYkXSey0%2FKda6COwfGaR3gE9cVwD%2ByqRl1nijLMu%2F%2Bwp6X0RCWkne6MwpSylSygMARSGOYsvbMuJUBEifh5anmjOoIsC5L%2BZzx23ghEOwiTBfC3HrqBQJcpd07Z0QhignCbEUIcjrF%2BMmXUt60FlAQHEkodqkb63uYSwhlRT18jm1GsLXcJuEKUeOiRaslT1ZwIIXGkBoFsWV4gbC0EmOeQFLhUVDNdxURSebA7MWkyP4OQvMm3EOxkxRTN06Fo%2F5MA4lzaYoyp0iUQAjfJ6TMWs3djFVkqfmOvlblAo%2Br6alih%2BiQWlnoCX%2BcIN02GTEoNfvbABzh3z64wNrVD7ag86uDPRBpWR4rEL2H8Rnvfm5nz9WaJYdxtiAhOpa4jWbFT7CVq0oWEw0pC8VTegWLnp6kUE4cQ95YBAc3yz4iNUdxIxb3hOadHjjTP3hdeUXrPtl2p4TxaxKvDUppdl56AfaDsi8DYtyvwgW3ZukXtQ2%2F9fjYxIf3v7nCahbVb%2FfWACbFE11w6NUAGU8yO6L1kuvFTwobg53f5vkNlAn8JFvgW8%2Bl7W%2Fb07SLehWxOG3sGDs0%2Bh5jDh3sSI0Bwd1ITO8amfEMWtNPNTkGDQ3KiLUzaLEYRuSgVxb0MMO%2B31skGOqUBGlUdor8jGf7%2FhsI0YP5FvZeEIuwGJMsOoB4j4QyCWjE0XjX2SSmiaW8KvlFMDq8zsr%2B%2BsDgcOEI8PiqZxAuGfM0nLyrKJFG6I57EeC73OJ3IzWwk%2BF9YTrYGE7V%2FhYRaQRTtK%2F%2BBUqMwN%2F3jhB2p5tTfezj9%2FcVbPscFaKZyuLjnwUTLuCq2XeTh162RTqdTUQCF5PvL%2BRMYIcoA1BFf0W%2FJJQ%2BY&X-Amz-Signature=d555a63d6d28e996e1eb970210432da9f48fec461818f9488c1694a4355ee3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

