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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPC677Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDywlDBygXjluO3x52GFGYpMPzFhi8nIzJnBx5tdTdUxgIgIxLYTSdAhz%2FQCoclp22HwjwvlJ9%2FqcwjAVEiuSfi0PUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJggSboEmYZnEJX3CrcA%2Bjbn6yE7mvFTtW8dB54VL8fRUECZxt%2Bxd%2B7LUXF09GAr1b3578FESc6JC%2BsnXQw4IiQDOjyeetHfVACaY9HZpKn%2FgvCBFWS96pExlg7emh4X5K2uw0kBBqu%2F7QOz1bHOImLMDi2%2FTycd3snq%2Ftf%2FdY13M0re2QJ4GkaNjJii%2B1GPi475Df9l52f8r0SqsY%2B0QyKCh%2BU8VC9rQmrOUw7mbvbckdrXdOW2zNS%2FA7FLf6paga6NMrwkEJqvNXcj5TCkA%2FGMzqOWvvC%2B%2FHFxyLwtHTl%2FUIq%2FPlw7b9pcZBKZLj%2FC7o9gcVKXAx0fUmPfV%2BZv5TmuX%2FRDa74e8K4rFYct7pb%2BhcmB6ZvjT%2FyChI8BSIOswunRLh9yAfCTwoEqrcoRYs9vVi9zH%2B0EknQ%2Bfl6IgEqWebmzLw50AgTKjImqwan%2FcyAlJrXaoH7620%2FEw7O1zmZUud4d0oNTbbOvH5%2Fhz6sOuABL%2FcpjLZDfErRyYjqDqKynhbvsAVSiy9RU54MWfDAFTkhC5JIIwADqwKTM5q%2F0rg0SkNEV4LgwRkcCMqwkk1OQ6kVdemeL4DlkABDkiZWVk39JhPsdeCdHQddqv8f7Toa9x0DpXBm4iMQoZyEKPpu%2BD7y1Hg84cl2MOC84ckGOqUB32CNbvcoeJ%2FYIPNlg%2FVRkGuFJxdqpMYwYwE0paN9zgpDWwbbY5bkeyXYYDIKRmLWa5lVOJ4iWSIM6V89N8HdQawUlFkUlFgFAwUtq6vgP5LnG8MjiZ7m7iULxVK8XM4ZrppPwK76y0%2Be05q9%2FZeL0QmJUurZkvJaDX39SsIDyUYsyKLz9oXNb%2FVTj2403eXh36pzThyT%2Bgu23TbbukMdnYU3J9B6&X-Amz-Signature=44a58e28c7bf290991b4375fa414434ecd5955605ece23a5be6a7fd88d5d9a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

