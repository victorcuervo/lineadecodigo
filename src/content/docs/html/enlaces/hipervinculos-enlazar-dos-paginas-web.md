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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE654RC4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVZDBL68x%2B5Ak4QQjF5PKoCpbP4AZAwnVf2G%2FwyOJdrAiB1P3tWuz%2BfeAnTUd6p%2Bt4iN6SYpsEIThWBpes2qHkIEyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMxn2FcgIZdfP%2BkjP%2FKtwDAtYQJIgtkV%2FzhSi%2FaBRWUidGn11ucziTm03N2M1J%2BTfbix7xJgU6Of1BA5%2B5Q7jwnhcgEZBCIu%2BWWwVZFKJ6Pvok4h65Zqhos6j%2B5gMNbqToGdKn1C6Cfj9msotrBZdbnZVlE6n3sFqW%2FTVUdq%2B%2Bs5H4zCNqx3x3je%2BVneTrOAk02utRDsMgwQyWCjDm70IivwsyXbdtIaIIH8GjPgN9ejhsHyueHekNLt87a5ig%2BoHM3saTLmD8jFMHlkEOcU6zLvLyeMnltvko%2BW%2FCOrnG7iNW%2Fe66XzXktZCN7SPSSM%2B7seaPZWB6IYrkkkp7B0pJqwgKuSbmLdj%2Fqe6i0SVJWmAWM9%2BtCZltYYht8uj1%2BFdKkUD3hUBJY373BBdJ5s0B2UszUFYdctpLwOsASg0sxX%2BELZB%2BA537Jqiw%2F7oa9zi8f3U%2BAxXtUjfn%2B7f%2F6N%2F%2F1rlLTzvSkDxYEqqM2pJ6slv4fKT6Ohmp8Q%2Bn0KM6ddFOT%2BADU7%2BBt3hBR2uW6YRt%2FZhSwlULO7jHhdVT8DP5XBac9aMjkcf4RBLMB37OBIvQTtBmacLcIEWRlYploVZ1G6jlK5YmzwhUWDti0bQZeQNXqYP7GLn1jq30WWEjzVwPPFcWnJPb%2BXtLoNcwu%2B3LyQY6pgFrN2ZTNBUN9FgQvWWtzLIhkIBtyKnnmNB7UVYJMjKHWeDS381XDxVoGO6Pp4oVuwqnm6BdJa1VeMiw49YRFKI9BzHdgfMx%2BHI7w%2BSY9d%2BoH2su7x5jumS6PFQ6MAKn%2FK%2FQPcxgTIzMJ2kcemwvlvTqKKQDGQ6jqnUioUv7xmlwGDz8CfaUpY%2FtWDpQo%2BK5WiG3SU2CvtqW0jRVFr9LKAwniF4K%2B01n&X-Amz-Signature=dbaffb5b85c6f6d3e05ca30bff5799de7b69cc985b5a8d69725d8035f4941b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

