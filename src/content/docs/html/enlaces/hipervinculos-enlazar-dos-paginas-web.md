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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKBBLMP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPIOIAk0jgU8Ddv4Rixzpzk%2ByiXKTWtKhvCAFzh2tshwIhAODgrvsrSiAjTxHxeOHaLFj29nwTJ4NCDW8upUU%2FSYsnKv8DCE8QABoMNjM3NDIzMTgzODA1Igz0jdsYU0P4tJcoCJ0q3AMyMrChSXgm3KZDPNZSELwU3RokagGRcMxbqllGZ6Tz%2FZLTRMi0lVkGm6Kt9ty9I7aAiL%2FI01Tm3ZmdPo2qflyXY6cXwtKKsAUa4Y689t6djH01iNxWaeoDOkGksIb7Fios3bXjrZH0JBhC1zO6V4cQCTuDvRmaxMBIeZUsbJlFg1GxllR9gl2VZaf8rO87gvPs28O8zI7I95SnozTcfKxEw62BmtwWZf155hsi46jwKabcPoCkJ6d4uJDtaGRLyMww0L%2BSVfwo3q9nC%2Fxg3eDkif0Jmfhg7Ob6TaD7ye5fcGuhLjwwsvFwycs8NWyISKW56Uby8pQEuz4GuVyOydFgmJ3eYNYkR%2FjC6%2Bhq7eVJJsoXcfpvfl1bGM9rv2CAW1K5oq3wpC0Ziz4eO2RXq12jQXmtQCX9enx1pQngX3Gw%2FMiNNdbhoE5u4uw9mIHUStCASnXwIGsQWh7%2FoLUD9%2B%2ByzXmHf9RC5aSfzR0joTn2PpgL8hQV8US6kFxYVxNP8RVLjBVu0sj%2BR%2FkdR45xUqVFzDFwf8LCfGGjpsGxbUj0ZJ7vZ80tfyScVEYrtGd8Ru%2BdUUQsy75gZ7R6Ni86KcubYtuVOWJ03C5jiVEh4PEg8fIUzaL41ELMMXWsjjDCjMjJBjqkAZRD%2B4VGLxRkCvGfBP0bZmdIji8GgCDELGwb5ASuN4ykGdKWw6Fke0qHNPvkxcAlhpROECVO9qbm%2BrBuycUdXWMb6sc7vPr9IR%2Fw01IHBX9mXWtgx4yQu0DKbSSWhjbdQDkcbUDvN1aFFA0Qzrlkzoqm98OwgENF5Y1cgG4agkAK%2FyMkHa%2B%2FtpINxqOAbydnD2YPEcGR3ugWQ33Gfa23g%2BTkli7S&X-Amz-Signature=69199ea94318f97d3501303c6ceb4f99685dfc0fd52b8b130a909cb2c19e4282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

