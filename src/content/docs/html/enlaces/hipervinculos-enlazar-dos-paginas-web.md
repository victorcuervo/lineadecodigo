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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNIXOOG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCopeEjuy8%2BWA7L%2Bzo61jvtqvF1hwF5b5wrZBR%2Fhg6m9gIgMN35fap9%2BgUeKNI%2BxhkzGRiHMBRwAxSSlk6YROw%2Bwh4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGDos581EW3Dy30ENCrcAwInQ%2B%2BKSilpXrQ735yPEEH0x3Y2%2Bn7NvBmuW3HQ7ClSuqE7C8GUik%2BbagqLFOA1oVe%2BxQ9Fnq2uNZo0v%2BzOmohMpE62dC%2BGVr6CyEgMBNxSsgKiMPdqMEBpEBxlEQI%2F6Z%2BZfiXOnDh695Z5Q3XpouMctQ4Er02SfvWC8L6vCzTd9zglXa7vp0TRra7pTLgJVOwK%2Bpy%2Fh0jJrWnv7pMZDNcSb6EGSFqjdby1nxYgJPGzurO4dneuVQexDsNb6UbajH5NaJSjfwkRBU53S3HRiTlgjhomoqUcnWFrA3tYMC6l3qkAxD7ILtKuNRJjzrPpH9XAmLCqw5TkOVIl6QOxaYw%2B8QhGy7bjr7PSvJ6liJBX0ejnJXV%2FrDF%2B9OM1yfFkGMdKSB4f64rl8DXaLL3LhI2gWmS%2Bw%2F1qo0t256p%2B1uPXUuB2mNsM5UsADQ8GE2jWi4C1hObPuqXxOznHhD1aABzvzDjbyp1tG5GnmtntPM%2BhfJ6rCijFuCxG5SSk3yrU7oR6PphoCB7TrZi6%2Fxd5TiXY%2FQs%2BlgBqOUJ40WLRcyOlnLI8mHfSVYfTHco4rRDyxmv%2BONzEYTMe0H6aSzwRiLlZ6HM7fPV%2Bw5TYEvfCbPXWhyzaqdP0pSPkWZ67MI7zw8kGOqUBwAiu8%2BNA086C4JmpaQHCm497jFa%2BpdfL91oFbR2zsLGf7J3%2B24T6jIV19X1fn7874G1fe9P90ViiXVjilLuam4tDs3RH5YKNB%2BNT953sz3kPNUhW1qOLydELIM%2BrmRVwdgc1P19LRdrPIIc%2Fz67fzu7Nc0IZcKDZ2Ci9BdrnymxDpTemL8KHkH5M1%2Bh2MqwQcwjZY7fGE9NoRTIwy5nO1eGkrk0q&X-Amz-Signature=c52120e0df78817d8e5b595df60d57cd5cff2288f5772b8df8b67211bf39f826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

