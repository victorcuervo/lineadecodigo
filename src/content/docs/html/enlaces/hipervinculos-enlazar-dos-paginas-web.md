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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCTESPR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDbwobqN%2BgJjKkS6zDOnS15TAw4Ub3ubNjgL65ynFsIagIgcxeKlZIi99oTRnbwZNY0cPXZyLw07HKM9ZJSUpiZxy0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPcAebakD4BInS8kNCrcAwJutf1pnb2Nr5dhuX7v8CYiOGzRoLnzk2yEbeuDRmI2CSU7hqYHvtuvlEVlfBPsOVYE4KiiRAHRUvpMOpbK4YVex%2FvnnddfV1P7gPH3K5v8ma5CkO82rq7vrqnJ1Ywi9pHz27UfmzafezCzdVKYwRv9yjH%2B7clDT8K9e%2BFsE94iondW6Sadgga%2F8WdVd%2Fd5P5tWn7RhrKWLlyGj75W2Pfc%2BgeSPVOlLHA%2BvIIQrJoaYMYxVJ6nV5HNtLw%2FzgPJv03QCMWik24A%2F9uKDH6Pfv3XKhkfkrXYJKVKtrP9bqcgorbKJWNYba9LEdNQghZxMAQ%2FSrJc6A%2BytqQQi%2FGva3yZvJJudDjP4Ach7C5bZCTsros3YvGmmrvPQbFHDLIhJSOx6xaDZOMcxZyUEN%2B0TYrJHRmbSzFZgpx2m9PvEole4E6UTNifOl%2BEzdkLE1HxrDtgJ9Uv%2FI6xFWMAICQl0zNr9OUaQl2Cd6mL3HeAw49d%2BmALxyUlF2R%2FWxurACqqz35FDZd8P4EwJ76AW2QTLsImlb7qR85stGzS1HNTjk7N%2F5Kzfwb8cl2MBs8qqdW7YSs%2FrC%2BJredpaXA1knpg6t%2F7pRzwwcGY83bAuk%2BCT8S8pM8kTXy1g1TnD28cDMK3JxMkGOqUBTCjkbqNF7K6wL4W%2FbZCDHLnwiXjaRndWI0F4qotF2GXy5h%2BYKcDVHW1ghaODvQzAQyahgrsVF5%2FttkLevs5RpwsBwVYZ40Og2v908G2E3MXiJz5wTiiNKJTsOx53c6C72cqs3SvY6j7vj6HYmsOSxH2zQfQ4jcqsmIgHLRStIn4x%2BlUCBfSNmlzDJJ8uhAI1TH8C7stW6o%2Bdss7vfjc%2FlhCkaZQ7&X-Amz-Signature=c9e814f8ebd7bc35fb67549ef8dfd06fe99169e3a88e46d572d86c7104449cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

