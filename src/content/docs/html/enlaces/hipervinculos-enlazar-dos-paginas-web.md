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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPUKVCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqrIbJ3nxil8%2Fs%2BQVJeLNELxXbdBB973cMKLWNgDqK9AiBFOrOjUkGDfEiH3oxTU85uWD55rKnR5wp8ujytKlk0nCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMQOll4PK7gg7%2BAVuzKtwDvfOX7U7Q8fuwEspdUjBV0clEIbZvOKHxDyN0p%2BN8rjzZ4Bmwa5GssR26dG6esCbfbv%2B8jChmcfAUBlpj%2BDiGfiZ6hTufjsA8Cq7WgRUoXQ0r7aRiMn4jx%2FSCFi7IdLV70B0xOtRn8M0KX3990d9S1imCfkmKBTn07wTQ7KrJzyaKKB66muoY1UsByV92vx6Z0%2B0%2BLjd2pmyYU7rohrGUdBP1uqzRJdionYjrcrQ%2FfywgRnOlbz4R1WxmxDqWm2GL3WyAJ%2B6CxsBStt1ooL3wjTyZoQPhJ5Fczm%2FKAR0c%2Bbu89S86zLsszPkCK1SRefGZlni7l4ocvec6jGU4n1uYuU0OGCOgL6PrLCUbbtI3yY%2FAr3ZNjneRX7fVmxEkh1D%2B%2BfJT%2BC8LDWCnk8LkAiJjYvf3Nini%2F54qAihMZQ5rS9U1HI7Y54K6I5QJOBThRwLJ8NgSKAp9U8tgsLszhnpokL%2BgEHo00v%2BrhCWZkTfIl6GjEl0gl5bMZV1xihCgah8j47pMJxRDWFvD%2BzzKB7cgBJp%2FHsqNYfOBuiZyJGEvbu3vJ9oGcymOvIfK4yc2bTfdxkjYCE71DTP3Ku%2F7yuiyu5zSnZIf86ykscrS4tBqfqa%2BYDCFhGH2RJF91p0wkP3OyQY6pgHrzfVZWiphtAN1v1R5VHfjUFwddscaRu6gacq17TuIl3ZQSJL4mqKsShxr7x8ahDg4MZmvhJBm0MF0UV%2BbUctHtyE4BAMUPBmgUE1x5vgXax%2Frh4e87SIaP71fAGgTMD9UzqdrHy%2Fij1ThZRE4oyC%2FdJMZbjCDlxZfDxBdaIIqpZ4fZZm%2FD5Z0noarb6%2FExnOrmg5R2k8QFNmrY9J3%2BCFogIhjyZsR&X-Amz-Signature=c9ea8a271e76cecc62816d5fd3b4728d7d72dc2c0260d2cc656075e635160f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

