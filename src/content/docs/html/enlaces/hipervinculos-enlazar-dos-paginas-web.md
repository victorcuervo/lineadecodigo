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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6WK35F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCuuyzmC%2B6O9FiwlsX6apqEGCUso8PDkoEpgNGFmZujawIhANlEs1OoZkEnvFlV%2Fq86WXYiwg5%2BRTqjYkOgZrCgQYDyKv8DCD0QABoMNjM3NDIzMTgzODA1IgwlTRy6EnzIkRqrF4Yq3ANO87I%2FChVenh2jQoTRVdfJj0Qx1VEUh9TO8JCwU7gFxVepIkSEfme2hCJXMouS3GyP3hNrlnDbVEH%2Fe61IB6jUh35McZCLGyo7OYMdGoo5cJ%2FsVtN5PU9Zn0lPftVGdi%2FTaaacWGcfdgy8Y1%2BdydaO67XRnHQXhyRMrn2bBVxhTblj3GMRwdotkQpNG9pMncf9ycxjFqrHmjr9UjSPqduIrJSXryhCyJvug81frR2tMlHGPec3vOcTklRJWHnjmDutV%2Fsd3ekzVU4w6akyFNEau%2BuE5zm6JJFm6wLMkbwwm0cmRzrIKHZf04%2B%2BkOo0YCf3iPGrsYwrZDSVUwaPXe%2F0X6LZOf9jIwsbwgvdUbh%2B273pMbwMRMW1M8zcVZPZPrJSnuB5sYtxQai%2BOdUCB23isrjZA3oQEQ2sUUrswut4dlxAR6k93PcWJbxb0ryfpTGlt2BPQbvfHGvqP%2BrGpSz3rSewtBDHU29fAk4JHAj6npgK%2B%2F%2Fz11DDZizpkN%2Byg573tB3eX0Mitl7jIiYvGk6kkChZ8VCUwTyfSpFYBdSpSV7aqFHA3ZjgmbgWJzdCFfZkQ%2FS1xGHcq6b9qDE3vvxHMOBnOL8zxJUAqWT8XUFwkR2wkNW2dobPGgAwOzCNkcTJBjqkAQ18u1Issf5PnMv6lJozCHYIY%2FNuubkAjowDj0bTDIXj%2FeGfr%2F9HaL1aTuvh3Mh7VWDGrJQ1N5ZdPKhLaXJga5YNft8%2FYfn%2FgC0BbzEK0RTHXo6Je%2BiTkcrq1YoaU%2BVaqjOhPJHIMHVxtIRNkQjIt0zDr6Bfpzz47AtT9EExHJ9fE7EDDMXc3jljJljoQA90yMEjbVxgYVLyrjdIjgQwohbM2sy8&X-Amz-Signature=9e164cc1b9554c3d2cbc3c730b0e37af98f02a2dcc079908d2f40082e3bb32b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

