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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOMNJTT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMn4Oh78VfwAA4A%2FdaNEW1aMADohgUGiOTo1FLw887vQIgScCpZmI8IT4equrX2JgVMBajQiCJcYJVGE6bflbqdrEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy2%2BEL2xEriyPlPWSrcA9bP0zhBUtTd9K9mjL2pjFfb10WLYfUj03FcvrnQSHGU4y1l7%2BUQTxS8Ybv152XjX%2BadcWyupl5Y4pRExQCFe3vyAZ7XHWuycpbeslPmD3aETufevh6lnFzduZ3o%2BfxgPj4NcWR43qKVe0bR8vuPK9NZY2Cez7yx16XQY24YF2araFGGATCpi0wdK6MI%2F0UfVa0rMuw2n3sUp9gpCdHnUhazMRo7JPcI3uC3%2F%2B0C2PxqOLNfG0IAyOlHjD4%2BhEfICAiLcta16kuNjssea0u2xJq7MCxRIKSFibKzv5yAJbtgSNzVyGdLQL8yQnDQiQ76Xphrb0ni2i8j5t2FVBQPGpcwqB8S0AUO3kmUtqvzvOO2S0UdInzAemfpU8ufG8faAo1vcuJAeZZ%2BFE77mcj0oJnGu5kBWVkbpknRuQoR3f6gDKFH5bLVreDGC1KmGMv5sFEol9KbjTFIupfLpQmsa5Nh9u6xN9h28lCCAAi5Qi78kgbImgoQULb6nLrbQSwPIW8KJAkkkww%2Bl0eQLfMRGSes4EX83M540OMUB3mvn9HyLXQBn%2BdXuP7POhuM7QL0dJECnTD1df4Q2JZCmrX434EktRuRA%2FhSIVqO2WijpdE4H7HKya0osMP2ylRrMMSX4ckGOqUBoi0YouBIRrpIIcxhydoDwwgg3wKlQCxTicxBVO0DFccJbAmi8sxZ19W1pkaCsCeoAY7nJrDcyn3sQPfdiG9dL7d9Y0Vf%2FwPmFChLhKcN03SDP9R3py%2FON%2BIFww2Zuk3RZe42pSGw%2Fr4TUpCl0Re2pRQdgL5IY8CETZmIOYg7Gb3VKBLkUNXK%2BSgi0fzkBsZgFDSD%2F5XXeNHFDi0DErDGHJH5QrPl&X-Amz-Signature=b5bf83f3458c9d71ef77f4e626c1bbfc134e7ff6bf479ee7e4c47c5bc82f3cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

