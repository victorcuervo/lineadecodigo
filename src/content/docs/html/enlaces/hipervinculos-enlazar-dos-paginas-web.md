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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOIEAQNI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B24tSpcrmKBvIm0jbLm8EBN3Tif8d17LxhcaLtviXOAIhAKWkhgASlLnVXethYgKV3KFZmIc65KoAsVrh6hPeucwYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2FBjgyETfB%2Fs7Ujwq3APJ0lBBWigzhtqTDQcUtyuLmzjhQpgbqqfvrGRF4idfrcBoNSZ7i1x0kF%2Bn0xvLoMbTjaoQMAgIfFz6SP8mJZzG954otmObNBvpnO992mcK5i%2BnogN4USQT52xpMZg%2F4Wt8spik4rwZxQU3rHA8%2BmEBxOs1j3LM6NUxr2uRm7hq%2Bo1pSbpG2coVWKrAemLe0%2BteJo%2Fq777dkeg53FCzF2aReF%2BW%2Fe7iwNmv5eA9JLVSXme%2FvHjvTzo7UH%2BDaO%2FqyF6Jdvb5q%2Bj13V3lTvtSzr5UK056wd8TEfMSsr%2FT3ahPewWVP8bmfT591J63q3UsQ8igKmy9YPbZUYb3Fw97es%2FmblJLnBsBxNPB98HlersbvcCcfjb4YB13HEDqlBS1MLAoTWV4Rysp1TkY2yUTI%2FLkYMAJB6nKSLLlkQ05I2tZZ73SUJQbNncS3ybRueCjKsPHgF4dZ%2F%2BPkY7yRVLiRYfySfdlW%2Bs7eKqCqrFxKp9fkV%2BFpMxT%2F%2BtgITUy%2BbA1uQGMa2DhvOyPuCzrftG2p5I4s2XzEg9BJpc0oOcPJ6tHmE3%2FKh9M87QRcUPe1onFPNBF%2B1ietBsTuAvYRY%2BCgBp66EwFIh%2FfhF9rcbH%2Fcju%2BpUgEmO%2Fz7PJ%2BygVmXzDG3ODJBjqkAe7zWEAek7CVICjY%2FsYQRhHc9SxYX7MG5517qACeQQqdQJNGcIUxxhwReqmJqiqk%2BmH2tOS9ytdGlC17AtR0kgpxHbMT%2BbMmyM6wCQ4pGcuJOyJahPZXtJjwyaSS37%2FqhE7q9oYrKK7Fz2JCiIl35kTnPz6tQLU3fkUq2%2BQl%2FwaJm2ch5uCrYh2ljJin2EKtUG2TeNJRTt%2F6rAdZh%2Fr8XPFczem4&X-Amz-Signature=2f1ffce54f7c5728aa9d41b7674d17a15fe62a2948e701556cda8b0a4a381e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

