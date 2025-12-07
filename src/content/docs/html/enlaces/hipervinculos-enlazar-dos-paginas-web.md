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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKOFHSF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrKd3UbyQGakq41qJ9NxOYxfyPai860RziLa8DnOMIjAiEAvMvBw4aRc34MPYlTe1fEbJndtYmK6SmDplxiK0P1AOQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4d973j8h35D8Ha%2BCrcA7fHId2xdeTSBTJlykFhOSx3oEZIh4v%2B2Rmkpe0IsVDGbxJsJTDQyizFDrQU%2Bnhm07LFbEXsvCrl%2BSnKCssUwweP51L5X%2FAMbHgM6I1TotnhqCB5QcRaST9HWhXllt8KVQ8b7Z6ZA4hzghvTrG5Nj36%2BOktdiZEyff3rrdne56g3wLu2xUmoM9pbLWAnd%2FjjN6pmoaklt5XyprbHq%2Fz%2FYgHvTQPWHVU8qWs8A4gg%2Fj8qtNqnexaSHUm9gXmPtDQJsQAcZ96hPyqzdsJNAuzABxUBDaev6PKX%2Fa2OGt%2FnlYcKxEU6%2B0j%2FNCrl6rVIfGRXJC4dpuu421TwZO7nuvCBitEnHSM8cw1v5eRYDuYsFE5%2B1VU11mucPUuuvRhXaKXqEx701RqFqa8KpgyFyitkyMweeAWfAK11uw3QnA0pMvpKMij8U4rw%2B%2F0zY9zNcGKIaiFi%2BdwiwlZKyZ%2FE2yAvmCF2LZ4b36kSkWsTf8uCh1j1pjIu3Syrpa5loSc18s0GSlKb%2Fo2KDLTYTtXO6nmds1qbGpPbh%2B4op7nJGF9fr6PsBwV8jfQwqncrT5aao0m3C7vvoCZb6D%2Fe1vIt0eHRkn7dkRQWZXXN19jVz2fEMoWh49qt4YLIgIP3cspsMOia1MkGOqUBbP3hTN5a9%2B74fJvGpMLQQRr%2F0MoF%2FF5GechQ5afPZGz1Zk8gYzbLT3R52VRKhWzk5hhsIF%2BhjU8Vc9%2FhbsaQgYYGFL%2FESB9cEUJTptVCt6b%2FXOzHx1fyDav6Q%2FhBbq7ug67V55dEoy8qPLH1BvjSd6PbkXLBJHoTEopQS%2FFh%2BuTMLwyFmS52YdOZq2tvnosxHxyFnznVo8nlGvyMK7tmZiOTCi22&X-Amz-Signature=0e5d3e9d2d4d5c79e2a6d6151d45ca2faf1cd7cf7cab81cfa68cf310f2f86ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

