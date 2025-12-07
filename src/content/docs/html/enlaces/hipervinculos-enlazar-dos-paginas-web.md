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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JKQY7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEpvzUIgReiZCSK2WxiYHiuRqd78RWjzT2YhCcUBIzNAiA3KTNOqONEQaK%2BJnM5Y6UcrliDeyAolvX9%2FX958opxKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQrbhYcAPJ04d%2FXHKtwDmvadY6vqvB%2F3Z5gnWH0aDLffSI5Du7wJynodcK7K3Y7kE%2FAE8%2B9V%2BGJ5D2MQxRAHF7FRCLY4uVIDLLtFIl%2FnDuIC8oZWuaVkOwhWmNWH%2BVY8IVEhcLtk0riW76sFDKYBCtwPcQh4XLF40AC9go494rOqTMI%2BhUf5vycVXDYusNMF7xc3WHUdjXCT5UhC2m0rh1wZkrhXOa7KY%2BRYAtKvltIhqS4VODtblg7oIAHztGIWtScK9525XkeD2uqHolnaioqlLE7TdhTaVBuz7w7tHkG4s693cK8lDXPvxyResGbid%2FfvyURjUrFoqW5ip3pz8dQE6SKTiH%2Fc0Q71ex6OO8NINvFBDvgHiS9ZYNGJekR6EF5og4q23kzsYCBPTLiKYLPauoXZMzMEImMcpqQwJtJAFkM7jzPtfdzMWxTLnlvYBl%2Fn73ucLdbLbmyAHqdU6BGPX2E%2Bcc4UDNfLcW7qVFRA4tb5Yvz2TvwmStnEsEOLXeqteviPzMvcH3sR0mQFvIX9uAwtnpIQCUZsTSOI7eXI4TyxXcXS7Fz6xSQVHf5cVasXCtKgTlo0H8HztWg%2FQfCKi0FYm3lfzEkTKQmoDSjAWMB8JlFthL%2Fi9Fh0eWPYQugBMMsEbMtwWDMw3P3SyQY6pgFL6PwgNBePaJ89rexxqapT0RtES6D4ju8aotazxVGw03CGZpa0Vu1SiYpMz8l9qVRWpSzXr5VMuQuQebX3I5XxwfrbnDvjk8L89GatpbEWqG%2BQQT6ULYwcJJ6kS1KwNtGENlegn9KgQ8um5ke0WoJMHQfOjRm2i7iSG93g5VuJnLg149jnuA8lu8N77%2F9tkpAkg%2FqQHE%2FWM097Mb1lWudKLRE%2BQfxU&X-Amz-Signature=1698d028fdb92cbfe836467bda165d51b06508fc69a7e5e4fd9111c9dbddf59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

