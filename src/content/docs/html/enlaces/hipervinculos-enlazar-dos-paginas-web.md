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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YB3TAAV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDaUsHo6%2FjxYQqlsy4NBjEjc8AklKPesMfexJk58oII4wIhAM9uV1iPED%2BUBVEZRL9rdxptdJYXNJ7DOs0rzO5DwP71Kv8DCEcQABoMNjM3NDIzMTgzODA1IgybdXz5Ixgsp4y0tBYq3AN8wIw4lL6y7rNRJ78%2BO3dC2HDOHDiSfHgAUtZGfIzImMcUh1mGlUngREhgSnhA8gC895QneRgAEWAlf3qxsquli%2F58LL8TtDvL0sjDY4xDSkX2b1JAhL8X6a716%2B3zwtmuuArQzbpYM4dJWnz2OL1irAdtXhYQ9HVbhgiEpXhtJx3yCKRwa0Azqbysu9z65CHSluDk3k5hhaBCo53zgcxkUnYSXvMq%2FYbbMppSULcANfAcgu7edkjCzP3oniB6dIDrdXKQ1Psi7aXYeouT8woyN3rj9ePOo8gjO2r8JInOkwLu6AedV3cNteWp8ZDxhqILTGXfRqNnpYfbQw3Yf4gGwZuJO7RZdGnAZY2jEDO7mChlPo%2F5AhSOy4HbaitVdcRbWWpx5JvT42xIqENInRgC%2FHoxqIfRON7fCKd9iAKC2a5Xc4xm6xgP05s5zNLHLUR7eb7Y0BQznyfkKx03ncY8QtmvVLkjBVMrubDYTreCuvVZGFwtMVSF2RxTgodcvPKkizEa%2Fdqcb%2BtHThgggBxcK%2FlcZNgMe3FBPViAOZaHREd6%2FoZIXjHdLzSUP0oHWGKH%2FKE%2B3eFJKLrip8plAxKoQIFujVfrCc42zgXIRAjLFeduswkLMchj6nAoRjDqocbJBjqkARaftpehi9Br8H91vrN57uNU6wS%2FPvC%2FyQ2R9rMdzdep0ZApqHYfTsbKGcejwm7TMjg%2F4Bs0lIyiCzt5zXBacscDo7HvEXiJVOSJwLp%2BWrlXEokpKr%2BBIfM%2F53NijKPZOgEACbt6O6dBz3AhZCKaaFed7EoGIIygGeSCAVx38GJJv3wi5gozinm39%2Fku5lXXgohDF7XYqkjF3XBxwhoAjhviUhkA&X-Amz-Signature=6c3e249de6b1ab56f6d2de5a01b2414dcb1ca0789da69856b54477fa70ddb090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

