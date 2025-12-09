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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5WXJHP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj6TR9KK3QHOLpcG6BIFJWOA1zvKAUtRcrh9rJjlw4LQIgY5dYiXQZWo1vqGDESrK3WjxHwPLthjdr%2BaqYiCdUYpcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGn1BcM5QgNDKuSAJircA1kig99sDHsQGVo%2FMQBAcQUlJd4aXfUT6EK38WJbP%2BQ8hWUaqR26uPgL1GY7MNAcmlKff%2BAbL5XSLVFDUvbhD%2Bw8jHjmCut0iAAbPGYaBTmClEjBL01P0AFgrt5RFXB1n00Rb6Qxv5QQ8b88lsXx6YGt%2BAhlMljCnF5qTUCyP7YbXgtYfulF2NLPTNdxUToJ12%2FD32QqOLzpcJXx514HxWOrgiq%2B8V5en%2FKPw9u%2FsqR8L12M8lUYIZdcf0BQU8k%2FtQazruDINsXdqXdfKXBQeLEFGU50Z9WK5ySQzIUicmhvV22oN7aoQVzyoEMRLSjij1%2FV0kQYBm%2FO%2BlM57V3tms8nrzaxReOJJ6sK5dx7dfNtW%2FTv076RAI9H5nSK01J%2BekJ0ylNQ%2FioRWUajXdVeqESQI4nVLDHmfoaTf9IlgXNgff7t0niUWLeMa1GXjyFlULW9ITzTZwRpxmuA8%2BhEQFQYLVn8dH6tI7pELnoj4VzKAYaRCXdUoVwS5eEis%2FK7KnOVBvQ7BcPi%2FCg1YWw5Vk45Gqh2hB4NwIIFT8YJC49eDaevjjKDScVB940h%2Bi%2Fph5OWD%2BMIqQFPPOOk3AdwmkofPKaIH54EnY7UYM0Zw1ZzlDT13FALPeyChbZUMN3e4ckGOqUBJUb2mziGTwHhVHr75GBip21x9nYpD8sERXeES%2BWNuXbF%2FHkC3pzeMLEYLO4Mz90fj%2FIDPlwtI7TV%2F3aZqXNpNcW3K7coMclvytjRDtVJBQdxvA8tylbYq35QrkuBTLppkTs0tpn9BXWtk7mmnAceA6uCk5dH6bvrtgfhCaP98brmGS39kb8uJbeiuQREQK%2F3J7cyRxoGFJj7wkpKaqrne9aSaSv8&X-Amz-Signature=62107d379ec6e363b4ff47857a55d6172cac0df220241299f122fe23d959c437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

