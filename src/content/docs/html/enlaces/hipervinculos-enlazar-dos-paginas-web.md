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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2BMO4X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnVWTiKN1qjr5kdxU3saSG5hSl%2BiPDaJcsqPC2tY2e9AiEAyt7LwHg%2FW2T6QN9bJASMH%2FpAypcdGhDpKoouLrGcTdEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FkON84nA834DnQxircA00SsQqAaRul%2F79qep44CjPWN8i%2FCKBJYMGEGPXgQGMYvGESfEpXHpSHdK9jqfCZ04Acepl4mfnmLyJ3iJkGDWSQlrqSXn15%2FLGF7npYTcRjp3BoQmIfgwXrDfF3P4z9iZdtMsYM1O8t2v%2FXFk8EjZBafb1RPhGQ2TMOJgpoSsm%2BzMbisc%2Bz1Gmof6O2OePb92aiGSubZi%2FbufaYpDWj1JdWw2BdPAr4sU7T9cYOxLUWqiQI5B2zkCCc%2F882sDSgJLWKWObzRqeJRIJ%2F3EMPZoar2bJIiFogPKTedP9moqQtkq5OkTs4SpUiUe5LovRzr9Bddwjt%2BDZuN7sOyhpBsi5sPppkdkoskdH3Ab2%2BKz%2BKR8C6bM3WG9aoRncRuW2xTV2OQeABHGTsbbVgyRFGkkn%2BXx8hVX3NdRjb86RZcPJKYZmlkujUdOxPsGGC5AEW%2BTo0nuWYcJ3Lq0MOErOD35i7B8lTA8qo3Va3FA0OGKZbhrUdXBCAC%2F1j4z7v2C0A%2BLXJVEBJltACz5I5ptKtp5QRuHGI0h%2FYwMIPbpRFXqrgqW1qvi6ldd0TMj0V5YuH%2B1axUAepFJPqy3mN00Csa4JjxflABgrRiIosNNuOVj4yM1ggnkwlC8idUaCeMJLE4skGOqUB1ajmKuj7wRTAOTfmHC9ZOpxXyk5KNkHKD%2BFgqn9kAVUQuNbP4LqXRIczJ2F2FxcWwK9AlO4u27OHxJ6mgse1scDhsHmIPc3UqtfsF2sKGxQHbjYsOyJznKRhQW8xMHMCTtq%2FIWY%2BFitjvkCP%2F2PLIp2l%2FLwq1hy9GdwPVDzE5%2FpWbaaRFudliI2YkfT6QZ%2FmhJar3VgzlRHcGnBBZWeQYessRKEj&X-Amz-Signature=3ee3a01bdba01ea4fb7a514b0d51176732e02e43af418e029cbfc6ad71a6cd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

