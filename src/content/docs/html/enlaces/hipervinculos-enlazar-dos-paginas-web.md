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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMLXH5A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKrOKGBtxx5o7gZU4VOMQSIj1vAoJ8kEBgLfmwV5mcpAiEAnp8WrlSMg25PQW4wy9XVlYPfhiJ3%2Be6cxPsxokw4ycEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8xt2DTptYQ9bTquSrcA8eXV0A0mlZTKd1svTZ0naFWHUyL%2FQrTiJMZocS1yOyOVltnVM%2BkCqmfOT6TJgG%2F9rhcpl%2FgijgWOzT0zJv%2FE2QASadAcvS3Qh0DoRY%2FUfiGW2Zhfz5EuJX9sxR5p3dXG3WLozaBcQO1CITsOC%2BlHASFC2zNov1WJDNkwZK0IguOz2wzk9D%2Fdnu4cTr%2FmkZeqKMU0fMxrb8OprIxVqQcpjB4PIfVNhb07YqwARUaDvy7p%2BzKzeIC8H%2FPhSUYFWENz7lxEbQWq7XDus%2B%2BM1c%2Fw6o1gWmpw6Yz4gEjqlAyIALjTdBtqFlVYFmDW6k1adU%2Bu3a8FB9BU%2BzAgEJ3UuqxDgMMlQ0fDwUBtSfXUPfnS3Z15ZYbuP0nMtLgTPviTDAjNJEgVV3R5ane5PUw7cCCYZzSjW8Vondx0ENdg%2BnAG3C4%2BzNWh3g%2B7VFdzbV8KRBnt0uL3Gl5416bRv4h%2BPYgY5X6LWZJrOFglLmbWLEqOurW98SizCC8gLy05VqHwen9CEseeR6Smjy7tG%2FbqYqTvwWxeX87vLxbPe%2FSHPGqc7oDtSpbT0jmOoWgyKdgh5eru5HrRecknFRmkPeK9hajceNRldgfUtoC9pVv8GxAxFG30f%2BV0HPg4N4%2Bo8cOMMml38kGOqUBSYN77d%2FY3qh%2BbJbBMEkoAEWvj1p3dPGCOoID2HE3fCg%2BC8jlgHJfpYuA4VCguzZ7jhN8UInuCTBzRhnQ9OL%2FwUwaCL9PpbiwI6MbEeWKXk6PFS9a%2B5m4pV%2BIk9nnu2CrlXdw9SLFAUX4%2FcehIQBAd7cMz2kZKZRKRV5ErYrlUDZap71f48PE26YJFSeCIE%2Fw1NFcQs%2FIj4UzdvZsf9DE7ABry9Ua&X-Amz-Signature=454e2c816096306f791c689e6ee7aa0ff96b81556a2c16a4092633db287195c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

