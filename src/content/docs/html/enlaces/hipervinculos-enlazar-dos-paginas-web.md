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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6MJYTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPv2h7uHl7RftjHG3bEeQh92Vq%2B0fkKKC%2B9R1YIPlCxAiAnYXrDSqDTv4k8aGykx8E2Nyi%2ByysBgj5aqkXYyJWUKSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMkXx4dFVjH6QO9%2FE5KtwDHYcvhrS02ZZz%2FYsXxcnuKxgTHmlLAyiGV%2Fopo8iq%2Fee4w5xbG7ozutCxXPi%2Fy01l8rYULeYxnkmhmoh3t%2B%2FiW2GW9%2FT3m6U%2Bokv56ROySweb0I4%2BYmKS%2FO4MJSmYlcN4A%2BOqas36bXw78j1IxIuo7PTRCcpAWolNmmCv0EuFkJ%2BnoJkFaxFjPn4ISXsNtQybiamPVfYPLSeCa%2F2zbWnp6LLel3hvzMA69WoaCrJrxyYviV28rXz%2F%2BcnF7sy1EVmL2lrtuqkblEirB23OZTdrNc9%2BsEifQhMRD%2BqP71KPB1K04lygvNxZEBOxZMj2d502SFSDqXub7T6dmaJ1%2BT11ZNZbRNU2S1PznxYRnBMeb0XoREeltq3Y4jtW3ZAn%2BBi%2BIOMKx8N3Pz153uw22%2BoQqd9lylK00by7YpZqW3bitoqO6Ziv3erBzWmvJsm9DsEocdF9FmZZ9yX%2B%2FXuWv1LOJPbEQh%2FTF4Ek2GOAs2V%2B2glvb%2FxpLJ2k6xiyeS4yDEas65Ry5FsS6k5ccy46KE2dmsvKz9KuGTgXY0XnfKXCl1ezHnnSEbZzcI238iuqmAMHzjG7r%2BQw%2FVokwJW7BXUZhRrq%2FgonrLuHLZOArIbM5JpbTB0bgnxP28h%2FQyUw0OzLyQY6pgEfla3dO%2FRFLwG%2BDvAl9d64HTPfFWmnuIh4WzKhsjg%2FjuScMfT9l%2FXr6i7E0pCuQy1AGKSv0O2c7J6ttFL5nMnheqs5wxNUQ%2FwteyM6c8WQ3o%2BLBGt3zKjukqg5yfOEYa9ZBe9WW%2FB89KWqc6lkfDYRDNv1Cq4M3%2FMWCv3VGiGnPelyeEF0dz6%2FM9iKsvNqoXBfFTqwu5fMWyx1ZXVbeQMXj%2FL43ZL6&X-Amz-Signature=a48ced68d00fef2bf897b873ae7e58fba5d77b4e4562380d99d3d2c7232610e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

