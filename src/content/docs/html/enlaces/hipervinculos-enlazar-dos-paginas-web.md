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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADOOYY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2TYGta18IOa0p%2FO%2F8eRkgpmhycCY7vPRkAOuPZVst8wIhANqEuYMQDONE0jDMmX%2BMzkRjuJjLzxvoBf5xobilIgC8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxH9a6W5DiFePEfPAq3ANbzBwx3R3uh%2FPfVnILE6AGLuk9O0OqD6cO9XN1vN7b2acxmw3l0XUW2brPfee0KQlRvuowq2Ibn5UyMmBIt11FF9efVww8cm2uU3mMc%2By3nyz3P6ajyRujz0%2BM%2FuIQ%2FpMrcFpZ4goHTgpTHqlg%2BpBZdHwOPSKrm2YpSwDjp2JYoYEp2w7g47xiEXhvI7b8Pmgw6TqUsXhDQr5vmfg6GIHpO4mXHl%2B9YC3iBabzUYQYyAr6SJHC4ERqfmoFipSv28eocpVkLbRW%2F4emoPCqJq7Ci1ZGYCOzTScXnOxKQKX24cGoI3auo8Nj8YMwTXlHvvTl17BtwL7mpiYW7c8Je0jv5DdGecnh6zGtS07%2BkqiAg3mN6j9CYnhe4FGy%2FvnfwhDBRSi%2BqlJ1AfbDri0AmyFZGlx6cposLPBs1jZOUzr9P7h0npZxd8A7oea%2FwbOHjlWdKWLgnQ7hRGq%2FPnR3fzFcLYlWsLiJLMCKWk3kOgTFOYPaesWVzLrI9XC1RJmcmNWAZymkh%2BZDtm8fDn9hzegb7Q%2FwgABbBzE2AeXUKWLINYz5si9HdCxp3Rx7qsbluacMTmnq2muua5gvqK5HikL8pZ4bPesiIBHgvvfnyoLO6thq%2F9JifqfXt0iE2TClkNvJBjqkAR3RXmH8TQXWT8MjP3g9A3p0XWrNTQNqJq8lne4c82KCLNudAjeINTb00X8pVYet30e6e4%2FB2%2FG%2B%2Btb00oq0FjmLh1dfJ11UlP9hFPhEF%2FSUSf%2F%2FDhR94vwsEQNIR96y6wymvQN9VK4fVhgj6%2F42s2C%2Fjb3%2FmXEorJyvyDrSjCJJVPkWkvYxOEiOEVv97RiXMannXSJPYRGXVQs6fb5RyIk1Nsop&X-Amz-Signature=45739f4ac810990506db07d6dbe8a10eee7d9a07c36c97076125435ece78ae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

