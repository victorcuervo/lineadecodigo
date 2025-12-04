---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZAECKDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDluDJxzKR1GoC9TwTCRcGmOmvJUJXnAJmsVDrFZ3EQcQIgPpAJpqp%2BBgWz6JYBKZb0eLiOJJY%2BLLP56FJSLp8xR0kq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDH2QQCc8EwJrkss8ircAzUnrUFQM5OVu70llxxdHuJLfemer7kHXNc1uO8ZBOSeQhm5Ed4VkSR%2B0WFKXi1BKR1KvD5wanrSBVeTwfa8rG677TtotTcmT%2Bb56dT4nAEdGCut%2FV9RRBrFmuY3HUgFyvOm0ZW5rqysuiqKi7QJGek7K%2BEOkUvihmZumhOSrTp5ZmZ9AGbSIPVGhodEnCgaFMc7rBL7MO59ODp5ChQfFvOYOmC2hTMpVYvuJ%2Br6th9yPOwBacgEjRHlJzg8SPSLwNminMDUouUl7vvlWC3AKgz0wMakti84XWOt3PTfQ74TGCkFck%2BGrjlb72Rhv0rb7VwFU5bCdLiie0nGKB9fSQ29iMBz0rv9lf4jY6JsYSZR6XbEl7EswRrVxtJO4Su5ycqy5nLKkiiVrbvwSp3xpjfLyiHOgkeeXSh%2BdwZB7AsPy17MG4HDzAjv3nfV70w8CsQBlgTsLNr83gYpK3Tz7%2FL73oMr1DUme%2BWsqwN%2F5PAh9qeI7vZb6prkLMAVcwv7AdekzM3ik88FryBnU6czRybNO9SM6ZdIu3cdffuuTlQ05kODUdF1a%2FmoTVWFc1vd71BwyWGpJXMFDntE3OI%2BgcWLLhx083VLgYfnvNr%2FV41PyAXQJd%2FVF0XYpRvNMMCVw8kGOqUBV2ouk9s6r5lp%2F7sOZOPEusZzAd5m7OhPxfZq%2BUTXJJMg5CuZ8%2F9vfph5oLTa8RyZp6MBhg4GJA981qsXKv4BJsh2JdD5zxT92zDMeVmmrHEjmbx2z2yK9JwTqmYFptuAna0F5BvHd8EoxTmnZQ9030PgOf7a9ZoKDCj2uCkI72UUmqXX%2F1Ef4t3WKaepf79SY6%2FvQrcRCTtB0WJ1dvuYFVwwa34Q&X-Amz-Signature=96431e82033579af754d17acf560610b3d703a5e0b71c09fb49ddc70eb35251d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

