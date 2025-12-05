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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLHVAQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcayFsRDWXTYpa1cwLUj5Z2BSymLbH82GrQeJ%2FoOR6gIhAI7%2BRurjavlVQLE3TjyV5rR2ANk%2BVP9GEuykz8Cd83gQKv8DCFoQABoMNjM3NDIzMTgzODA1Igw2fsNPxVggUwE95PMq3APro0c%2BmHn%2Ftu9x%2BuEzm6OWRc8LY5Ve1OINxKuxrHApxraqKJ9lscX9Zys3DT8saMy0V2WMMSrJjy2OXwW%2Fb0g3UOeJ5cX3c947jApbbOpxRKchZThyAja6BTl91hAtU2uq29y9FYNni7kEwqclz1OzyyG6MaRsrR6OfyfDV6kKzYIHA1nF%2BeUx3P%2FlFIWJhNpc%2B7iUNl%2FeY2CQrcJ7XyjpjUo17B5t4jEinRadC4wNiWOXKhBauviZrM8SxKXSdibjrtsUQE42BzGLjdocfel7juS81tHxhY5knZMZUukeH6zggO4nd4teRGEmfWHgRZxXhpnrEQr0uEGf1cAmO%2BVkikGXDigsW1uRNFYQlw0Xovh8qwHrCv5U5LcLGQ2CryxitpWbH4B4hm7%2BxPZ%2FUwYMaqI%2FKcMEwnIYHOqY19lkAtyjWYwJqz47Fpz866SVtkxcIqTVdB17eDYlKuaGYUwSyiBTF8LmykCFvvXFelN%2F1nCKcil7pU2xe1gMx13EByjmn%2F0YyLwP6nN594UaSTh3WDTDdHNIrgR3R6hvgJH4pHjAK%2FWKMklSKQY%2BYOahXs5y52m08SrpGi5r8jZldXC7PjAww46tQL886vWyn9oQuRS7yCWIR4u%2Bat4fLzDqxsrJBjqkAdR31hVKBz85ccpooUzrHur%2FCnKPAOrz88gi51D5Ksco%2BbyMw1AayBrNhhBcQp4uR7xW0578WhI3qCAdSC8qIkp%2FPVCjX32nHP6ifzq8j02InWHt4xDhMwtfI5GdjPzW%2BKyeMwLA40OC%2FtwbFGvYOsjupfhgBtuzNRbsy9wHiQh58p%2BemwTxqQRlq8ANf7%2BIg6gUnKjFmZ58sxWHktBk26L6kQQ%2B&X-Amz-Signature=1eb2a40ab25b40fcfcccdb481b034024ddf0bca5aa6835f672841b2eb55c9427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

