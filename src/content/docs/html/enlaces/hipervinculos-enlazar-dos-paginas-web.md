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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXR7W2O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxvbTpTmcKQgKLU5e1jaai%2Bg6tdanCGbyyP3%2BYiHUE%2FwIgKFWnLmA0aVTXHQ5YvCzU0jEGsgDPzGB5%2BJsUKYV4s3oqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL56ntorGIIfhGLcSrcAx53qzXUe%2Bd2yEAun22%2FUCG9TMGHMWff74Vmw163VbPFKll5wlMp4f0coaJEK0aMba11KjN5pbynHWt8PN5KG7zz3bGo4bv9BAIHuyjonaY%2FCqF94JtgzfHgGalZhcQK65zEzZxgfd1a9SbGdvxJpC3Z3X%2B34XDUpST%2BPsUdvxCAktsxay3eh4aKX%2BBAI%2Bn1FYKgE3Q9cTZ1SEgxj9E6EQUZ%2BvZIvOZUkEajlggXyMlod4lLnXdMtjZyUj2aGGuk%2FHyzLEaFv0Oz4JaP1Ip%2BWUgcdxI0efTWRpFZfY6uC%2FKlb8TbCEnFQKU377FaYHp0335aqzwk4lBqYL7JdzY5LpzKciygRKlpOHoO8vPzGbQBPyzs5mhL9yA7LST6EQChTJY%2Bh5Jvz7a%2Bhnu17tAawOGSUD3bLXpRP95y5iJpCljl5UyXR0%2FtkqejmtInjBWRYk4f60NfpawIhjP%2B6Zo2aelu%2F3dhCZ3sbg8qvj2%2FZTo3aU9YMCQvjlDawSjiPI4dTHHu32DucokP9vqgoBUD1oFo3FzwTkm0bFC1FqKSaXQOVjH7NjSJCebMU%2FrSGJqcUGk0jKVr0Q%2F77B09kwVWTbQWCsCupfeC5a1wL6LIu9u2d2hSDcY8PhQ5QQYfMPPG18kGOqUBYzb64noLld2cq1JnJnekDoHZw6Ps5%2BV%2FxfEjsvl81XWwqBYNqr2isCCxZfPqZlcdpojqyqLcpUDLMd%2FG%2BR%2Fvs1LN6mjc4Ux7BtRiY9Xlcmp67hRl5GtMyxxBtV8Dt9LUZyFjMTiw6FgRfTA7fr1w1bXqXfihytkq1JVYqMClYa%2B00X9Q%2B4CpRfmeHq%2BSigxDeKOAbBMkOxIgZSdEfwp%2F%2BCT%2FZIFA&X-Amz-Signature=d4349504a701dd3ee011871db6de664c29e2a975eaebec44fcf7cac9164bd3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

