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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZYHF72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkF9K1icCN555xc2i%2F%2B7%2FT6OVdMh0fPg7gEcCOEfFiDgIgPozSe82y3lnp8kE%2FgtOp8pfG5nEGSEq64RsdVDXXmFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2FyWZkHwj0kVFiM0yrcA8WBWUQ8yz39MUOmmddYaRbM2Am9Yb1GE9D2ZEGM%2BmFP7UDlX6pZge7VZhYDkiMTTUjs2gXJEA9Gf7czGaO2ANRHn%2FsridGei7S%2BLabSFS74Dr07QETmJzaWkx3diuThHTlJlvKd46CowtcW729PQSFmcyffzRMEm9z0G%2FL2q%2B1uJ9G4S4M%2FGuOfk4uiviiQqI0bNS%2Fo%2BC8OPvwBonHlxeV9N9s7BhXROwrw4x73haiEa%2B%2FWxWlYAyWmWctQsZds10ZhMkt0T45tKkO%2FKvKl6xQ%2FhHUd%2B6pR8m9U5fVvG2ZxkV5s5Onq7SkrOrjtXK0xmaTU9dp9X1Dn6XWQsqOdsgfPjY%2FZfeA8bkEfQERxm7kvo0NKx3rzDISZIuo8nCB2Szh1CXjt%2By0JXRjW%2BM8HAoLIVS7MQXhoFmCITUYaIdIjtaN%2FE3rmayyQErUZSPbR%2Bwr7w1oH320NA4GV6uObDQc6nPU8l5AHbQVgKVnm5MfwX2dtOliULe6iwG6xcutJIitYNNFb900LEXH8oLGZ9HNDcDSFtPKGOUdo6gE1lFMjU2RPWICkBmLkXpGaiJEL%2FNHoTVo8jJduG9ieddrC4an840nnrQWqyM%2Fkx%2FOSgVuDN%2F8fBxHcCmcf8nxkMM6m0MkGOqUBdsEjKrwNDuSr%2BvuNzCg2MOdK9shTsJbGn2hd5IuyetiA6irAAx5APulOArTqhipl63%2BTk1a0QOp7zTk5qHjB7FFL%2BX4AaBfI555RSF4MHW79l7PK5fSIzJAUOHpQu9EVrpR3b%2Bva4h48FMxIA%2FZAniDOXGtF2nGVf2bl6c%2FcWtybdhuRbeIYvwcdHccgA5YqTPkJq059lKTe2ahzmG7fXcGbYwZq&X-Amz-Signature=6229dd70a5a6c48b63a8202e9bf2901e37322f15c07525360f38d0ee64c772c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

