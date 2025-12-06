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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GYRNH3E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIPgpgSbCU8KbL5lRwiMoTl9WR3Ctr8bwzCQzvY4zoPAiBzaxemDe0Q%2FCIhbj7ynKjXLm7MaDL0WL4fCc0Pu%2FHiIyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNTZAiOOU%2Bndl%2F0cGKtwDybNgZU8lUJiZTB8%2BJm3JIgQfg9XFnuMfO1iz3HCJAohY4nhydaEc61OYNgN3uJHtA%2B3UQXxIh2Jrvst3PtNEUvnY26YfUNj51bsrsQUGdgJizp2imNotLwWBMG2up0oEYLgcvd%2FGxflLu81NrttcYkW9W8jT68omk%2FEp17E1vUAHrJ7Z8F3fNANBQn%2BkzyHZ0pT%2FUQIu%2B97D%2Bmq5jxKWUb0ex8RJ1GXcMhmwqT%2BxAq4ExIYE6HTK1vkqF9Hl07TS6hrwBYNlzgFT1hOqrJ3WF6EMbPJBOoJ5ktalLmwVUV%2FVNBJlR7jsR9AHvIADTT3df7vIGBmCl%2Fa5tmO%2BT7CkbORWATFaApHJUhl3hiR%2Bviykpz1TA92moxsL52nMcoCL2ZbFjc35O06yJL%2F85173c5fS7V4iDK0dXSfajZVtpfaZhCEsuhm9806wlwNeH5B4%2FPQHp5qe7AO7PM6q%2BDiE2hFb8VnlA2kuBHCv2wpyrN7djGeSZdPDNemUJkB%2F3YZtQjMz1%2BJXzPNaa123F%2BHB%2FkhIU9BNydAfH8u133ANPYg1Qiv9F49xZ1jN3RmeyijP3Nn8UYUMW%2FjiNBmi7oFvtp4fF%2Br8%2FQPfmjQbjvm18v1%2BKj6AzGL%2BbRn8%2F3owlqfQyQY6pgHjukL9%2FnyjmNtKcxle17RcojJNK6MyB06VhckUAP91yZy67q2YZ6u4f5Yf8iGb8R82pzke6Ar7tKfYjgHTlWJNUhQs2bWXjmFtsqSYOALBnCrjCcAj8L3MjNhX9iUFtJ3mshSvjglUZgbBZtcbjqlj05PIOxXLLg0uOLh2jCrQIEzJOBqijKTqbaihqOtMHb%2B4iolLL4kmtE0nr7CWUl2Iz0P8BMrL&X-Amz-Signature=8ba615ad6997498d5682de2052d9a31fe63fcd5a6627b4e9a02f81f8c1f0ff5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

