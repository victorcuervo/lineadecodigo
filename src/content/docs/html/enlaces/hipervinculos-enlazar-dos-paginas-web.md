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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKSXFWD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDfqBiqRf3R2WUeTFD1Z37toDL9O0yHqiDvkEXlI4kpCwIhAPbQsAm%2FcnAXq5zQy741fTJNp17eO%2Bpc9SXvKJx%2BgjL6Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwtIDboEiJRmJCAMyYq3AP3XV5MQ2P5vGFsnsAjBz4pqsccQ5%2B7qNBhU1UMQ5kEbC8RSBbBIuSLWhGbC2VA0vmIyMYqstXAROCg0Px63GlmuR5LpSUqpmhT6BbcFafgwa9uxvnicrYlNfhlwVE4yTTaIuPlT9GdaPOBcJ87oEzz6tHqKh7bxXOFSm%2Faivyd9Y%2BTZ4JweBTnbtSNimqYtECgziCh2vVlmwkK486aavYbdCE7nvjAMupESAgDalS1dWR5vjqmUT1s%2B4uaGUJv4ASvc24TWb2%2B34NCwVMMV%2FzuQ5OEJuWnC%2FznIQQngTWrbjVdGHxWWFkslh79cz1stFbbSdcoIvFMFtK1CHMpM8mBAzfkHcVErxKQWjpAb215AXx2TAJYNFreZERXs5gyoE%2F6gJiff%2Fy5CExOIzWbsAeVOJm%2BDE9S87RPo0DYTVmn6L1yYFydjZznbdZ4wsFDIM8bMuTq98Yjo1LapoJ44HlWxkwpRWvJRL8ggH%2Fh2lRWg%2B4lFlUI%2B9xdEz6dCkxMznVo2L4Ysv5jdTYEGpcTjtrzImE%2BV3lA8n9zpEYESh3kKhB3n%2FO7yUOVxIwcCNnfER6XGor8MTmDjtjbotmKHfqyUjZgEeL%2F8B2PK%2Fd59LDX0cSSIjDFmRpBjZWYAzC7hcXJBjqkAYjkg7RIxVJ92xs9qAS6PfojF%2Fod3P905vYJNYuZu15ANPLwy8Rklwv7OITlIbbkgXjDPYS8msPNYvgrqJy9OUA0BZn9h217I95O30X58jeaSqy0LvfDRx13Yx7L5jQWYsV94h%2FsUgPNQDxTeecVyDtp7PS2wwJSJXnePPWjubq1aTvcLcGQ6A1oM3%2BrdqqxVA7yPNHQGjAnv6jylsNutJAwRHD1&X-Amz-Signature=c77bc2311dc09ef5e95dab6ae5d33e8feb4ef279ba577d10bd10ac82b2c70ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

