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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSW7SME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuVtfar15IaX1kOwZSnREuWoUnD70sxPn5IpjauxSlQIhAN%2B%2B%2BHR1FD3%2FVte9FYBCvsShJYsCEUxUxOtSxpZNoWobKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2eUhlY7ETqKDLwMq3AMeZNDDBNXsQliEmgnHABwYMYZQRjcSI34ztmWMYj0V3d%2B5vEgkY1Zm5TCULz3y1wR3fDnkrky%2Bou62XY%2BFwzkHls3H2wut2%2F6uCWDi00jpO7ekzs6tllpM23ZnYTeBLzAlDVT1UrVYGXdPQsQDHAF6%2Fi22nyvdwyquNGQBz3eo14FrE3LvXpzLOr1eUQfJ5AuRIIa7a2OYnonFUhG6RngeOSsscpyDghIrK3I6ODzxZ1fJx4PgAUm5YrDPxg6iDwxxGY6agMh7k%2BRn80T2HYZAjXcTxUYTlhi7NK8eLH4L7JmOZ4aruMa%2Bh9MwaNnBBvpfdXGi9iW0NF6roMxyFnZZ8cAQLSo0S2T%2Famgm6ppcuHE0HTbXdmz9H2LsLPeigsAOFFnX%2FiOJjfxETKQoOe47aFvMQl2QH8ab8he4i5pQigaRG9pl6LTGZSAeejAGwEqiThTdgQAr4utgQ74NoHeHKAzxtOmkVgio95uo7afFChiDlGvZRG5Amx11ARKFzHwwep0BVAElVrVxaO6pvFqjZRlBvdrNT3qvy0jfBHeNutIxVqiPWZoqsOjsIyxmUP6moWixQMn7qnMsFSIOSiLWfxePLhWK0AZ89dK40n7YMvzjmJXzWPl7UC41bzCl3dzJBjqkAXtSvUh7%2FY51L%2FPGisQ9RTTbLobbXfslUU545%2F5Rbq8QOz1dx56DjvpU5DsPpMqAakt6gnYVB9EnYB1wyqCYjglFXnPi7yUfplfZhq9F7YJHTn04U9w36TERY2cx%2BJ8qtdQS6RYILX9XnJnc9X7%2BGyO576cq4UKstD2B4%2ByQbyNru5Wl92mvaW2D3WCAGO5a0FERYJ19ZzSSGBcFGQrlY1xu%2FT3x&X-Amz-Signature=b6c31d9916cd94dbbdab7ad2bafcd589ef024ceb4dc2ef0b1fe0272fdb8afe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

