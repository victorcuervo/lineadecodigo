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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NEA56BA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDO1p7u9rJ4rXmxeYk6RfbnW6QDJr6idFvh0Q6NUQXdfgIhAMZrKKq3uRCW%2F4UVDw1thZuljRqLzKrKS6uv7kLtlGg4Kv8DCEUQABoMNjM3NDIzMTgzODA1Igz%2FDW6OboDLrcBVi%2Foq3APncvDL9Ry3TrTEewzIQ%2Btcidc4TpxEabNHrefPDUOiRww4k53K9EbOc7lGrLybsMQDIYcNgcIwR6FaEalT89KthntAsCajkCHGjk2MwTQRuALsbTrCFf7XBaGO8E1boKWGhebITbuoGfJa0JH7NMykIU1NEv699iNfaX95xr0JosQiyOwW03HlP8VB1MizZQGXuLn6wEUNiP0VjoGMPS4ALYvdroYU8caeC%2B4ewuXDOsvNpdOEb501xNLejdVFVLWEAnQTikRMFi4ZUWYZH4MPopZO8Eh1ZMfnzHsjdI7vnm7yh0FxWerSI7AVRjIWcBhW8q5FrfAJBX9%2Fj%2BUbZwAcbzXbuCiIKj%2FFvI5kFjA6DXbXd%2BsWp0H1gf3xsJVk3axGOgMCP22SVMptUjklzTjnbJl0rCF4iv3SQVZPuE85fqXqRvBTGDo5UlAu2hyheANqJPDmsW2LVopmIzRkhMAyX4aUuv4JMf6COJyO4nHbffTet%2BW5v3kGkMqWdgvLX1kueX61PZPGVIkS%2BWI7WdDDDMuCB4TlZvFkOaHwG71JSUJOiQSlWZK6BwFEiE6U9hkmNM7DTHuKxbq3W%2BauU1NdhXhMCQxyJGcdI518ziAS63%2FDEjnLTGnycKGxGDDP5sXJBjqkAS5Xgssnwyg4df8voMT6PkIi53UGt2h0UceRw5DST86uhz4Jr79DkSeEf73Dx4KIyWb6izvSoz3QKabVfcSgeMI7TTMenzg6xzNxmqXc9s2zd%2F%2FEECXBjy9C%2Bb6dObBQpYKGwe2bX%2Fe3wzO8UHBokDyhOzYX9mFu5RQqHfmJRSk3lhVa%2Bb5bVD3l5ebvSzrNZuEUhT8wtmRW78hZZDvZ3NKNigfn&X-Amz-Signature=82949a543bb03a68c7ac164f2e175b508266946a92f6004c029c5bb193602ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

