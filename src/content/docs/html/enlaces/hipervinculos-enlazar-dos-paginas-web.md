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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUMFU4OO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk0ZbmhToJjempmyqT3brzbpvIR0zP3hAWdcPBfVTAOwIgT6sdLE5KkTLWh4GXP6xklJSs5MermP5UGGxnxe%2BmXaMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK6%2B8VncGhKYOMe4ircA%2FMUPHgzIq3qLj5hQkoop6WbtrdKKQW2c84PJhRoeDTzzMNHIVFyqWqVvAVjFT5O6%2B90AOvl%2FE%2Fj0zO9zufxe7PbPHK5gB5rJL6WQWq1H6BwuX7VjohxnHFDdOd7qDlopoRn2luijZ2ojAsqbQSO2JUclVh%2BQdEU6KGF4%2BwW6OC0cGqVCyv16uDyW1wiw2dCn9SLfUa8U5K8NJwIpCGNZjvzqcXslid8FoB2JfaRd1tqqPcZaQ3IH45qaWcSHVscguQsQbfCYNkEkZdO2h%2F1nDNSvZ9o5rrPINIkqDZH%2FLW87Y0TUrp1u7jmMu%2F5utKKGs1fV8JoDovIuP5gmrt1QxqAdV7dEV71nzAtzKDBj2T%2BT1xuJaGia0Bo68R34ETK6qmRSv2zdlZ7EAgKmFB8%2BCv7RdbwzJyoYEEa%2FYNFmyhtBuZKRwUNBM5VLKcEFDuLDBNur9IJusblqXjjJnB%2BmUi3JjxbYY1hA2L%2FTXf1IehlKX7b3GMu1Fo9HB8Rgi8uFwVNGUPiJFdSlrh61jQ2kCntsHkAODUks9iK8M0u5Mq749iy39nVM5jb5CIuP6M9r%2F%2F8Y848L7Xpp25VSkIg1oaQyDiY32v7vWPZ64lmTveQJtOCQGAXtlCwl8VUMPP90skGOqUBxyuxUZKuchv%2BveL7skGA7dMnyxrHxf%2BcFJHbENdUXeRf49ECnqLK2xbJ3UuQEuCXXIipK7R6r0Vn3miri8WlYIsZBF1HrWmnI%2Ben%2BkKx3AVe69szgpUqWk12gUr7loJfymftpoAO55gKslJUVU8Ang2eM%2BoIq3H9rL2GOf0w5G9T7GW4VuCD%2BGYLwfIBHETmrJ%2BTsDj4sgU%2F92GicjaM7JCiIcYN&X-Amz-Signature=c6d2562484ef929ad3967adea393fba470d8583b2c8dbf4b3f890ab1fc592d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

