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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV72LFIR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIELvidn7ZexG%2FyVYDLANjzDrDJwYl9qonzudts5Cfg77AiA8Y7SKqUnsxZOqwusjnkvrZfD%2B%2BnEJeCOhyKvzU8wApyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQ9exGe%2FdJorLdMBTKtwDSbf2uF4G7aG7%2BuhOja1XRFs%2F3zR%2BcnyhzAe60yMgOhuz90hixtqTnb%2FQ7VVHGQhuDexoGIx5MBog15jbeQQoKy9rxm3FypREEz4FcklarKAOh6cV34iuw2T9dEgAkr%2FZXZ5orQqB7aP3Ah0eIkvbN1jf5%2Fuj%2FETXMBguZGOtkCbw8WCggYwC3Cmh7xZrUzMn2kJxc2M%2BO7xA%2Bf9QZlHU60Cm4b8c%2FSWUPQHhGjHpLyZgqaA%2Fuaq%2Fjx6NDz5bzvoKFc5bxJKSlvnyUZ%2FJekaseJWTn7L0HSawwbcrTmySdPOVt4CspGY6Vj%2FVZg%2Ftr%2B6fMyIo%2BHs5gCEBJysM9KBaulQvFZShyyo%2FdGXYIgGtYPzdoiJcQGInXiXYLCYzbJBGgJivqvVDvvdDKvbjEkG%2BPFfvfx7lkBjQ6H5lh%2FaqETp1hS7WR5DbF9EJNDvKZskHQlfBJhOreCseopayT5wTzqk9cha2z9symtJhYH%2FrD4QNKoBqWnO2Dg8diMOxJt0rR8dq%2F1J6q6nIjAf1i1rvo8pVQ%2BEmmuXqgcpPyOsGveq2AbwHQOE8PmyQoH%2BxPiozUxSCbJJuJC6ip%2Byni6iaFR97esJBukvWHvYy7dNfYoYXzlct7H%2BI7Kk3C74wpcrFyQY6pgE9zDojTBiEQ9X6NzZWqsYnuAYWV0Kz8FgAOZ%2BajBWHi1gNrD4Spr3up1xe%2BvQOXWfKj0EyxEwqoiVcUj5K3SEzAojvLtEm5awjlELkBc64RhlLQpIJD2ECct8Ktk%2Bd%2B1z02WjZz9vfidfQmwMxKFPONjD%2Bpug4PeozqikJ2z1HSWxEfMtJK9zaQGS4jvbUlL0agXemqlN2KhqKbkbiCcZ5Wf59o8vC&X-Amz-Signature=730b87bb9264e5e35e46d044d301c51936831936be5dad5ed8aa1123a357b803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

