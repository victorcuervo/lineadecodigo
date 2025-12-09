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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRFHKLK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVxg1fYYD7ddFIjyEbUkxYFauJpnU9odPNIUabClw%2BRwIhAID64IRL%2FNn623saG%2BDeJ0wR7kZKD7yFzuG0ZSasdR%2FNKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BRywhDa9z7zxy82wq3AMXMfhpDoBfGvgM72iYu19WsPWLjR6ubFbQyro42xiL2aVLreRkfk4ucgW963zfpovm%2BE%2FUm%2FLwFNcI15MHyLXMXhHXYYPVstlf2UW1WeMQ76Cy4HmvlgxeWj8%2BORwzKVDpY7HPm4TFxgK7xGsggurE0NDPArPQTOOD5ltGxsRDeYx70YagGOos%2F1iRGPn11aDmaetYmkLlWiIRPlkHnyHwq8Fgf3xHcfpBdecbwg8RRZlstUqKzfEfjOWi%2BeiAhfN%2BlATk9jJTd%2FxNKqjjraSUI80frXhm%2BObx1vgVP8KufIgQEPUTaQedZbXQ4lOqxEvEiQfM3C79QIRQ9BYq0L1vv53F8iXuU0S04x08n%2FY30iWQIME2dbJG3Iy6sku624AcPB5Q5336wI9f0J8gQf8xrjl6eDUgRV22Iq1op9YExileK2q20v3sykNFooHqYITSHvc44f9pXoosW1l6UCTi9d1W3OTG4uupQrlf7Ds9upVZUZFgrnUHCQpF%2FOpk1UvYCKNMOq%2Bm%2FK8CpvZWUaeCXOUSu4871tAwh9UMuZ%2BgyqL8TBOvwieM0RjKsl9XrUJrR9JBXPAN6Bc13VjIsk%2FWQ27NkNouLoFlLe8Cu9nVJgps7ybYaiD1LOvQBjDh3ODJBjqkAXkH56ECgQhuV3t%2BiFLcLQDXR%2Fsa77UhoNAOupeApIgmnEo1yMrKXn3gv63PgLTCyjMz%2FqqRlBaIVZ5HAiaWBm00xq5gCDzYboPkgMebP5h9oM3ToWpK%2BSDJMTWllJ3vviJ8TkMhbFxoMxx7aYVPvXXLSSz8cilF4D%2FGMrIjol8jr0aBTun%2FawozTcTLEJkdf%2Bq4cxUecPN0f7QBrb%2BsQpvlxn4p&X-Amz-Signature=895359d11042f76331d57e14ed6054f30733a48250b9cbb3e2a0aee98b51393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

