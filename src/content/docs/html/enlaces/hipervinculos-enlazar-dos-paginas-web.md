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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5S2KEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm4nWg04oonQ5%2BBpAfFUw6Au7KcFcnAeAT%2FSKtylvhLAiEAtaUXhta3v8ujyooEJ%2FXnm%2FmdWEywDO%2BsCd7%2BOKl3NUwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B8YhorIMhbIDWNUircAyhJsQNOtpT%2FH1YPlIXejjFPAq%2BEAH4eZYGTFJ1Y3b43IE%2FUEVqONete%2BAY2ZpifnGumVVwPlBMVobs%2BT1B1JnhsGxwDOzH9b8OUnkHTms7uyRLp0BbV64IpYxkCjRvnZ%2FcEE2jdv9sKry%2F8ig0sekr3%2Bvytchh2vTRyVGCyqP1VMxYZcq95%2BwT8EfdTQN2i6I1tM%2BmWFv%2FJnkMrnPp3eOzONoy%2B%2F1MidM5x%2BKqE4P%2BXVqCvfWcD7IXh6y3jelcZYPKVOlR0QFzenZkOnHgz6crCUbfBuT1ALTu3yBzbd2QQwNxbUg5fnzhPpJu5jn9fULdyQVk6qkOJ8ouKm6tmv1DNEscA120%2Bu8kw%2B58WL%2FyQ2%2Bia7cYYWITGw7BkVBIGozU%2FUQvTiyZIBwUieZexMwy4U7zewd73BmFJ5ggD%2Fv5%2FsMTdPNsI%2FYCDZdQkarvIS195f2%2B8Y6UuWtigWHE8vLPQNH2wCUM04Je5rqTIQ9s%2FEAvW1cbjGDshlWrfd8WClrisrJtcX%2BsoorSau3AKT3kMuEuLHUJ32095plFQwU%2FqwS5P3FY30go7XjDXTuHwlWvzHo0mkvNg7Mg4Qq4oADippnKGUutNJ0oFI%2BkrYTHqGzUHcIZAdSnaxv8vMI694ckGOqUBiNRNbQ1Tf3GD1dqLw3Xh23d1%2FVIg0Etb0KhDgYyWy8KwdaGp5%2BRQZCocYzB1BkM4ATx0%2B1IHmyDdW1LmvEwZdP%2B4wNcau3zQY%2BqOOagr9rWunEyiYUG9vGyhdq3lOVFRZNmpb0hs2GM2u92u6Dy6GG60G1uWsYO8EOCQq5U2liD%2F%2BCnkf1fAGOZPFVwiZzaCHmfb2ZQL1lpSmQ9j8UQ%2F%2Bvbr%2BbL%2F&X-Amz-Signature=2e196103203d749cfa5bb5e8f7a54361ae5163dd710c432dc1f46083e8eaf854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

