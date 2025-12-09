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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGHSJ65%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5K1LIKDoRQv9GZoRZF%2BMM6QFmyPqBZj9Z%2BrC3XBIkxAiEAoe3L7c8Bvb4BivDVh8K6AINkeHiMv50bZ39ARX721e0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA23RuHqkAIxfjs43CrcAzDGErAvUOPLr6RLmOy68r8ZXa7YUhziu%2F%2Ful1Ck4vyBouW2uiSwSVUr%2BCM0PTTXACJ%2F9Apt3DFa06tzpdFV6QbGeblXJil1Qt%2BGS8rmJ3Cs5IAAFA%2FitPPmKeQNnmyePqGVA4E9ibUrj6kC892L%2FV%2FEnKo2uYqlYqgheCi6Wr%2Fkn2wCps1jTWdlPHoLzisRohd5D5kQVQD3mDmiY75OerxkAf6hU4d%2BBascPRVLvTKRlS337GnHw6%2F1K0qPY0fPEaPYev5MNISv1a6Q8StfpsH0JgpRBOwL8fsCNHTmmHiy2ZZ98etdwApbeiMDAh%2B5E86XfLSId3iDLAwLqsNnjJ9rKqeOo537pMwW7qnexlKKdNH1h%2FmhBmEhlpdo40h56xP78%2FjlX8sAxjiVTRkUP8epR9%2FhMSrsT7JzV9JzCLR0cVL3HyTSVgo0QJL0SLFy%2BQxKbtVyIZEGdTCtCym1%2Bdp6Jf3ZvrGollSn0Im75u9sE8SZk9nhk8y1YzgWTlqpwhDDeFZODzCqSjZTtcknyHX0QYPyqubD6yv5N9IqBIFdlZThxAt6X2APjAAc0ojbTI2m1u6SQwuccN4t42aJj9QCckEhiHBx7A%2FfUrIBKmohX5Fv9HrV%2FLnShvygMOPc4MkGOqUB8SA54F9px92sqTZsvL8w7vG6i5F1E0%2F%2BLh9RV%2Fyerqbnxrd0CQq0HavmlOMJRo6LqDWwvCAz6RjdyhyK8N78HIgF1spxLTMp2WSBQdRpYOcIrRrx4c%2F%2FwGgiZ56%2Fxk0FhbnLJ4JFWleVjGqxNVi4s%2B%2BCrO8ONew2UVyZKQBd6OLTnKpjPFI4c%2B7gcXDAsEnr2zJpn2U%2BcOyX8NRVnDV03wDjcHum&X-Amz-Signature=2169a1968add4ab65bc6d7d5f756a0e67875c628f2e8832e4dc9f2d057913fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

