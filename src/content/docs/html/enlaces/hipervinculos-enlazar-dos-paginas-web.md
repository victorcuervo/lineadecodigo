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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655REKBOF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdyV1mbvFdHPB7w%2B2l9i2ulNU0wvidDws%2FH2gu37vXwIhAKlbluObecUszWG5hQhkeTCdDP5%2BX7eFD9nCxvXzR6U%2FKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVe3rphxCpunEKAeMq3APbSbGZWA73oxfKNeY%2BVmwnxBSz%2FFQBG1uPnXhgiUniB8boj2FamvwJ9TCE7V9IZC8Xsw0UZ1fTISB7fPPcLHLZGhOpc%2F%2F1sZ0Yxbn4VkYj2nDNWCXUalBdf8Gw4f%2Fsh6KaiB1qn%2BotKBe6Jc7nSfhloUc2uv5nyRALAQ0O0kX8w957I%2BFFCLxNUvixDW74gZ%2ByOBzsNB6OjvnGOKPxG2DUH2slEzFxEpvm6yQ8hewDXbM7MuJvHKVaw3Y37SU0OBjnNaHZGdG9JaL5xy5qOH9uSldh0SSTc7qMTY02tGnu%2FErrhkQMxvjj3mXPQYwg41yKIuXW51Me1LrySn8kbcZZeTX87%2BxychRCQbUyQhM9WZAtY2KD0twj5xIti69UwD9BnlhUZhrDnffSqn4MvbroYYRo1nKRKPvpxr4d5kL%2F3uKFYhcfwS1lGcehwhqhlQL3FMuIf4HqMpnn%2FX%2FauGXLlgX2njq8RSeuZULuZvjen4N6pxtt0H4KMOh7Zv8uzml40BtkOFhRCTHmNy%2FC7Ax5a2uTfm9C0BZpab7n%2FtMsYBUf%2F%2FEWmlEEDGOPfqPGJj5HHdcgZY9A%2FUUMkl6pjjhWiL69DnjzQCW8RGkgTNXM5KbKlItRy%2BkgEx%2B0qTDbnuLJBjqkAeiDlaGyoeMceJdj2kW%2BeKHW47KvnH7xcR0oghpMfQokqiIsZicQJ7DgcuGOd4lanjSS7DrI7XEwlz5O8Hi66D7ZfrtTIE3LrKmAAwyL07vTTGJF9FWRL%2BEQoFCJtk5eZRRFT4B%2BVzp2XK0teidoTyy%2FcKiogFhYXKCAk9RjfBMFfoFM%2F6F0%2BotdWRKDvrMpGyV0cPRclt2GsNqYou00GNf3zwIG&X-Amz-Signature=eb7e27119b187ba8849687ea08fa396eb63bb8a73c84c1b15d1f507c2eae553d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

