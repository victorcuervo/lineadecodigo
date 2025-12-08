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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBEOJBJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnelxJrbyhljA57hY4lGgSfh34RlE0MNcQLgf%2BiYc1JAiBcRdFqbRDLpXnCkT1qL8fYAGxtf%2FEL3lfGBVHcSJYBmCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0X3j9JPjKmkRa67KtwDlz90MDoGUZTN5gNjkqO6pKX9tYjCAJl%2BK5EYaNgJQ6lbn7OoOn%2FAy%2F9Tc3UMAwTnQkKlLOLAdTOiO8VV519T1mNI3vKdJJsYS0kqeLqPJUb9XD0TpBXHbwur2Rro4WoXFZWkiN2QddPxmjLZjq7c0vR0Rf1m0bAf4%2FTBE3%2FCIlBqroi%2FqNq%2B4ftn2pAe4c9I0xPkRNj%2Bw4A1YC23ru87a0sKN7jQOqo2pGg66J0UO1%2FfvvtBaszX3%2BaUU7AA7ZjYD9eqrJW%2BHEEL02vVHpzOgRnAhOeB81D3eo1xfludFV7H2OPOJZmevGQnItNfGp9O%2FgP80%2F8Qso2rd8gfMF%2FG38QWsBCiQn5yVDJ7nBnhCo3q8akGLhgGEM8uZ3loLYvn3LNeh92PKIogP8edZmbey6P0%2Fh7Rr%2Bb352nsnM4Uo8XcBVKZBDjMaL64iy7hnKV%2BL%2B0swHrmTf1qywqLY%2FTv0U3m0Y%2BZ5vj28D%2BpOcxK7o2Y5ekYSBTeHQIxe9UTzoxw2jtzsEWh4Gjf0meJhEmxj46Rw2LGe7hhYyG3Miy7yC7yw%2BzKbVD8rN5LyJjX3PqLAOaT5kNAh91%2BIvhtBronxEk39May5QV%2F4a7i2%2BbhfdHSWV5zJlt2TzVK76ow%2BezZyQY6pgH%2FYn5Yl2t%2FSvAcbtjlNQezp0pNP0xVuY%2BPh1YNJQvo6P1uMBk0r3XJz9o4EbsLkjSHifls2nhGULGB%2By4zdB7OkdVyZ7v3MnPRgY8fCl0fy9u7uiudKkJQcU0Xl8a%2Fpjz3iKFlrwn8bmnY4EU2Sgxntfen8F1D%2F%2BFATCzruALiiBu%2BVX206wkIkTG1KPpcnah8xs1PbFNmk%2FsecmFXrfJkFK%2FRr8SS&X-Amz-Signature=a5a4bf64b48d9e0217ffe18352ab40cfbcd0776e991d046c285593c9cb9f1178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

