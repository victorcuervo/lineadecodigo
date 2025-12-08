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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UFLYND%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWGNUuJpo%2Fz9rkuF5puhlTnUT83u3jWXtzN%2BQPKIW8QIgGAjcd3AmEAKkJjclrqznmrZnhtk7sUEJm2EZmaJctZQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1T4GZ5GBaaUnpcoircA9sqWNXj%2FKfsmdBYCg6Phqw0eo6WBgW9ghEQDq8vZyr9MEaJw7Kkaent3xxodpRdnFB%2BQnpclkUDVE8nUJt9FTCCCSJLk41omwc5BcY4ODTYdMhdh7IUY5c7%2BLErxJgoIGeBozokfiRQvLvpcdnAqU44wxFNy9A3li6%2FLRWIMtxaVKOhRA6YpzU%2BKssks0t5LHMKhyiXewf6eX4ynareYnZdpT6vSH7XFeIzMZ1RGfjuDeT2eRtNszllQz09W7VOP%2B4a3m2%2BrCr7l7Xvqac420IyFYyVJG7kRPWUmGwRQiresM0zQSLEh3G9qzM%2FJB5J%2Fk9lrgLlf3kCf%2FEBD627GmIHRQ%2Bi2r8wN%2FD8VQFjTqgJuMMT2eGr5OU2N1jf%2BFhk%2BAOEqv%2BWnTQA14bQkJDoSQIztmLATGHUxePN%2FTlDRRk9zl5dsEq1a96BuR1is6Y3IS749oU4naa6sluGeRyS%2BEN5lIekODUgsXPpUJalJoDnRTOpe8jtA4jeDocBOS5sNpAXHkqXCm5t0KdnrE2AdV%2Ff0gao50049lCL4UfzClVkxHzlTM85XZdV2JmzXuZOiJlZYE4m5%2B3xlsm%2BLkyTrX0qUbMNH7sxMTbV7xU1fzWKwB%2BlMfFWVCNi4bVtMPjz2skGOqUBwxpBGe3ZKJHyQUQdEVr3OY8IJrE2qxeaxMQUgxcLAAsVu%2BeRBJ7N%2FReAwz6k%2FaXbMk0BqFXqyQdovUV%2B572NIvO1jlGVALk%2F08U1Po7612gc%2BEGhFGhSjPOacR%2FPnJDET4vgJuq2odG1I%2FWyf33gdEJDxRrl%2B%2F4XPZOunys4jhENlHOB4ViR%2BExmY%2B3p6kJNt%2FUJu8PZ006wywYtbO15OMFaF6u8&X-Amz-Signature=dc5d46d3de853f510f6dae420492c9fb71a86886e8758d2746517d9346cc9de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

