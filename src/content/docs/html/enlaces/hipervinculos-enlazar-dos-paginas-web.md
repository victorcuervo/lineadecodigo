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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYW65TLA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKNE1ei3jsaEPR%2Be9fjKDle%2F9jKBARKr94nxDGOuxY0gIgEGk0Rk%2BrrhzNG3R0TQxfHlyyjrc7BmB1SIPyHtIeOCsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMkO9Q53mBuzbygAqSrcA4Ds%2B6rms66%2BL3kui0cA%2B0gANtv94y%2FCwPvOA8qGNxSCPizXgpSwKOB57T8RoNeY5Ni3dBAFfabTF4N5pz185tk3hDsFIDL8fQ%2FKSZVjdifLiQEkikdqcqz8xfEP%2BE2GJRz2JB77XiZZzAyWExyPz2kaW2FW8FNdb28IqwYYt0TiDbH%2FZ6pOuEr5nSN5yZTHvtNbK47HPCdXi1gpiuu5%2BErWTQsgWZ8kuB64x4FgcaMRzlY81Jt0L07VXYWOd1G8ibwgUiz7N4i6AuHLgiU9ngG69xjeIaYrPIAtb0AIfjI1JbsfpKq1PTSu3b4abtjDKNDxjq3Qp0p796kFM5iAUSeELh4Qq9xmQ09NY9Xe9Qe4i0Z0DB9ls3jgi5ikVxdYmhHng%2BGF%2FHsWusJ5P6JGyIagW5yKa7VvNdE8Q%2BhOFB6j5ummaVmZubvND8CPz6OOw2v0RKXcFmDeLeXXaGUjqEwcFhMP01cm2DTqRxkGcWkxx3RklCJ589UHZ%2FvCzLROFDVEj7khQvQRajpas9P9wgfGXAwqFfyCLB4tmqghQUDChkwzT%2BnlNaqlBAxapsCLjvaPURmDH3kIpWXlCFOUbhInBGh9ptkgmseJrzqsJFbk6OlAPHV3NnCY6ip7MLLty8kGOqUBvUFrUj9gx8Qqp%2BOlpRQJoZa4fbKnbCsHdUmKwbzo0PGtG1iU7iEoIR6sPy%2BF8cTtbrO4VMG6y3FdfYko6j0kpiJNVnrQFfsWTibe4JCNFNuhxj6MmK9ivuowZxnLB7u7zNA9iroowhuMlzTPiAUG5P0YfUJhRL2e5XLHLVAQnSBZNzaHwkbzWd2mnPY2VARvYmZcJ8y2zJjgYNIeOjPbr3SnnAYr&X-Amz-Signature=cd66c7be60f569c3a80dfdd0b0aa1f8882fa5213c1a6c5ea978341327065a7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

