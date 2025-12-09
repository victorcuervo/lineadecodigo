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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZXKV6Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbflTfvPxyl%2FnNIQIAwD2TbXnaOmRMFfLouzouCcKi%2FAiBEd%2B6jY27BAp37UvxbEOw1FCgFJ3QPQING1KB0kYAaISqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyQFVmZ2X%2Fu50rjUEKtwD7zJV%2BDZzkukvrFxZcPWajIi4mSAAeKLrOgZE2AtOMdwTNACgx7z1X3UTf%2FvqOfR%2FI5uDgv5c9tAmHoIfPhiqpeTAjrmVNusiCC4mOwNdwYHFNa%2Bzh90MmddT3fXZBtgdUqTPvYt%2FX5bJ4bOS%2BQxHe3ONjBhhtY%2B3804zSgA9pBrGsxXo9%2FwGbH5Ofo2qmTX%2Fh2DPr8874g2iRyV3k6TP3WwxqQoaqSBi0IkwZQwJMF0gEQbS2XHckhqEd2XBYt%2FcAIjpslB8fNBc7agQV7oZgXmu0zNcSPXRQfpTP%2F2NC%2BH7SXlmwHQiB7NM2nBlvEjQhY06fagt5FO6RABcMnshyBFRK2%2BceSnASesmiZrtr3x60zkKkkkn9zOoVFp%2BpmFaTqN%2F0G8EDcW70dwS3UjavbbXHt1vtOuJShA66M%2F%2FDsHf4lGvFLnbLmbXoYpQw4B7c2whBkGR1SNI9dGsWZ3nEkcX8W72qAOA6wCF0WOv%2Bxup8%2B%2BlrKe7FSrwsb68dwUKEpgiy4sJhs3orLkUnqE6%2BHgaP8EfV1pXLQtQ4Opub2h54vazn8enk1E91kdFysVgS4oROJvfKfjc9K73fpzfRrrQjWPfBH80a%2FfY0XaCNw8O88TD6AKizVsLhzIwrYjfyQY6pgGQ8s0l8Z6tTQcfn%2FQPAdmg11UaUc0UxioyRz%2Bnt5O80OAsVQoEiqSOEVhKxRCEz3tLGi0sx3jvG0QZ0Ew45YOutjNcgURr56bnBBNH0h87OakBVidoss667kHQq39nXMXY3sW6MS0HTW50dA15G0ExhY7o0nxtjzFlFNO23oe5QmGo5GCa9UXnvW%2FRz1%2B7sN7THkTUg46bTSnJ4d4VaL%2BELm%2BrxjfX&X-Amz-Signature=686f69a26bd96bc0a9ab34047cdade914952647d4f7ec715bea6932c0a337d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

