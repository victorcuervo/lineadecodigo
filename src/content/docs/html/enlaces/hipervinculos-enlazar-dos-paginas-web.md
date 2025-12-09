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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6GI5XV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjwfZLyrn93WRp7FDbJveNleHZX6Y%2F7ynAEqxB8Gj6QIhAOwZxQVPR9ZmnPJWK6oe80EPndMbw%2FomR4E9KbBOTP21KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS8To%2FP5oIBJk0BZQq3AMrDuLX%2Bg5YFVroLwBwLYbRflUQIi6KYjzekOBguy81eJgRlnvHb%2FK59iaMCUSGI7rF2B4BQWOfQw6KuDvgiB61sGy4CDxCewTUUyWHDuCBTgwBs0H78w1XjroHN%2F0Isu%2Fr9Wvj6JMcYDWrKRJ7vqZacPDCWumrSj5wWmhAkeXrTBBDaFm%2BwOriJD8Qg21mUCvcc3cm%2BUdPJ5pEwQtjQpPwjHZM7VllbMdN5ueIkd%2FboWoWMpZOhcGvYqFB6rVVfqWAbcABkIV%2F5vlrRgZvVL7gn9NbayuT6uYZcFsfncCZrdbxtAjNy74a%2B%2F5VBh0gTAFpTuHbJvJlNcIUwrP2Mm%2F8L07M9y1V8%2FY18Qv1wpITR6PQWdsfWp9PPdQN9RPivGMJYoW4eL%2BVzfXhXpgb684A0hesZSIoDnhvztXmcpLokGPuGS1ROR3r%2BPtRvCVkE0TpeWYK9%2BlQgmLqgioM4Whkx%2Fa6fBAPIlnOYbX2oZ14toW%2B8753xw6fGN622BFbDqPfgvQIs43KiVVRTwHvQTL2ymg7cHx%2BfXY1O8vsVbIaNka6rHZ3ihibNUOTNCcRm%2BcDgI6faZhRBq5b0vkuyPBNEhFo%2Boe6p%2Buvt9WUL1DfQeNkZ3sg6D%2F%2FgzN3pjCX3eDJBjqkAahXMeQmtphCtp7WXOlL8C0qK9VysyxcPDnS6W4KqyAWCNAfw1kXq2BaKks3Vbo%2Fu5O6yDLPfTgWsPltDA7eZnBNiADmhVprPoU80esSYXKUaetYl1PPGh2jGqDUBVau8oQMH6Ex9NJ9BcOJrdL1uB1HNNO%2FuJF7IE0uauN7Qr293fJrYwWmJhqoQ2wiuQNlMNE64ILI3HAq9jyJv281IrJpyN9r&X-Amz-Signature=53c67516c2bef3a1124bbe875d80249524ac2333dcd53da871ab601ea3e93d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

