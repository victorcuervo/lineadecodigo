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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J3TFUK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRIGFQKW%2BUasogm51PMWlWtXLeaeKL9V63XhSrxysZLQIhAMWB22nXjadQJ6ivmMg5vQbkqsNhfKi9e71GUa%2F6r8WlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6mY3tpaX4RLEYx6kq3AN5mmTAIeRuQL7U9E9fjWXwMB6ea%2BU%2FDMJ9lTP8zgd1xSPFEWU3EPgw1D3ouB4OYg2dUkjiRMHPRUEUDsAQKCggWMsv57kBi8Hq4YXGREyNxpTA3K3A4CYkGqDdsZiPvj9IXQrHcfrYIbF7AiTSbg6vgt8MrjEpw3dXdlcPdUNDfsHGbxr5ufhVQv2Wk09KKJ76oGaPFzvK692cx9g26ublfQne1Y9qw0kB3TuJbAXePHaOdHO6ljYmGwPDdik80%2BJc4cTANlUT2rO72bOXGaP%2FJ%2BgzCilGPpjIwldGpoXEB4CzOM6VVxhASRVpQVnYJaj02%2F4%2Fo0tSX%2BOVf5L9UDOtutPB3S4LsUVBC8iSyBYpVnLH6JAUgBjbPqi46yIVG%2FvHTVkyFeMBs7hn1N4HyLpwB0WTWEmHaxpHkzLUKb8heXlbDKjK%2BTgEL0WLtSVrE5OkNwj%2F7zUAB6G7WxtnUxeHp%2F2ZNn5Q3Rkf3B%2BdNfl56ev%2BaUpbTb%2FkAdk4JMfIRykud4k%2BrM23FsTYkOowiR3mycNd7UCAkqMQyBmjfK7lrDjB0lwFGbLrewSZvhifjY2szlzIaRnCVcprY1hGioBmODCVR%2FUf%2F2OHE%2FNsFAAfs3KBXWKpxRlJo%2BJ2jjDG9svJBjqkAeviSWLsj8XM6iFmnsVTyp6bCYUmul82AgXAt4n%2FgTq7VhJ9%2FQ%2BcxeyWfMEYGDLKuvF3bkzMs9nsEC1SfjxP1%2BCE47doS%2BRqHAeWZOeEq0BeTsE9WIlfo%2Ft%2FZ8Ps73S%2BdU53EpgE0ZL046nt7jUCnJ8Fq1D4SkhWKmu8NjPSEVWI1V%2FqsWmRQhu2ThC%2BN8nVY%2F7PeUeYsprQoirZeGp0WOqCByxg&X-Amz-Signature=99d2cbcf064ebdc2bbf4239d17e242ca20bd00962b69ebf0fe72db72d7e63dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

