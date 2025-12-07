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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHWKGEM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmWZ97aEv%2FbEhwCcUOCYnNbb5Jeu6PRJYW7iiRutZeDAiAYrK8fXaigw1d4w%2FIXtjV3uRq2yNrohk3bXUvAukh3hyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAr70zqmWlJLgx7R7KtwDkpGD4O82rGTZVLM2cw8NXo%2FkMMrsyqjDGwxgFwZJXXDWZb5wFPC3H6LSdz%2B4kscOqP5lLqqATBxaiXEt0NBbaaZ5VwBbl0zMu3yjIYylVYjQeXY6RxEdIKZQYbwr7TfG%2F5ZmnZ%2BWv7RKU%2BqoZRJwBCjxT4jI9m3MpT1Vba5J9w3NRU4%2FTjqJMEZ7KulT6YQLpP%2Bs6%2B%2ByTsy0FLxoxwSDx24io%2FbhThP9pfs10er2KRNpyjRBBxgLpQbdBGwLcYG0foYKvdzL7ecXXNzz%2Baan6TNVrdt71yqiX55JjX6FPkZJYhAy4CFTwkQ9b0gyNT77hKY0Z5gmnIOE63dNR3nnts4EDoGJ0V%2FrlOnHt4%2BS1H0HqwZ24OqCscs9jxWXfZiTgJ24nybaeRMsH40R1O5iz6bvdOroB4Ugz6ZMEA1ivncFwM%2B8QeNcNNdcFg90LK2gdHmUZmF4b7QFSMX3PSXbp%2Fh9GGZaYpqiPAcKc0Z35czBVqiWwrarCyXiMWw4rxOk%2BkwLEcUJAvX%2BQEwZ57fFYz45soRBmgcRbo5dLmzR5XKYuF45P8SAUVzhHoUYVur02K5I3GtwALzikECe0E2FMtpVHsFF92nAtz%2FKC04F7%2BmyukWhuEWaMENwiNkwxoXYyQY6pgGHA45qjjnVZNUskb80HD2dMzKmTuqJmqye0IG8D8WFt5gOo4c8EyirQg44hdIdS6QZX5c4cRmjNTERJqn68anpAp4xc7z4wfKDtwRYvW4mT%2Fa7r4kz0Rn3BNDhGS68ToeBGfVRfRRsyfvyn4fNCrO5vfArnANbVkBqIS9%2FVb4Nqls41HD4DrwSZ9dMMqMYfEaUMWn0brbn07lxJM4G%2B6zIZ92if3IO&X-Amz-Signature=4b4bb5bdd5c3aa4d1db5f4e46e974992700a8d23a5e62174611d70a132c037cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

