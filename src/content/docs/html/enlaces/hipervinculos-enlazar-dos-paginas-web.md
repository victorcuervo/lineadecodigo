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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JUO7F2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63LvnaEYY8lBdiQcXv%2BRE81UWJ8lO%2FuHfYKFbUiFkwwIgZDh3rHlpKaBvFlkjXoS8VolIehF3sxFudOX6enpWVKoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZQcPao9R10oGugqSrcA3k1NfSUm0rXQIrTL%2BTh%2Bg1Y1%2B67iuh2eS1PdYXLvdDuNkNvc41FsL0KkSRr%2FKtRZDd11p26Ryg%2BUf6Raaf3rHdJgbYFJylQTkwA%2B%2FX9HyPyErarNsIsAIOzcGMXFQePCuXJB2iHocB11GHUSHXsSF4WMfZmwDBMPKmeLiB%2Bqs85370nR9%2BMm1Df9OfUSSK7FKxOH2EFOY07JbpH3i0CGk09yzAw3McQ9UYQ%2BGAoEoOWZIQARTyzU9A7JAurqVC49%2FSRl72WQfKZMaHe%2FvEF0lp5SeZqfRLEOwDDtNURUYah6GvKqs%2FuzEzG8S3z6o97VVRyHAVcnW%2F5uKkgsC93ZBGc3%2F6cEPr3pwPjrhHsDYHrNe%2B1mVBxZ6OS4r4q4lG4TRnuhq8Fj1on2AzwfKAMBs1dJwcwXFukRLJHzJAVUwfvhHA3Qa0d3ctBlttyvShc3PGMYepOtVrwK60loXcz1OAFOpGRxff2sRIireBK8e1dz0uLlpI1vyV2BjxwEZ11CORL0qhhzzn0N0zWStx5h25dBs%2BG%2BNs0pCN%2FU92tqIKGZ8yX%2BGF5bjGoTgP5lbYtjDY8TP6wcDeubwvUZmXvw1EEK5H%2F2Y3rbacQGOG2VSyKyApTC14xWVgMxRgBMPbe4ckGOqUBdXVRkkEep318ctnVAlAY5c9tuYZrjoGDttBBwNIHumznd6dJJhfve7lq7dAv6qRUBkrTEmkjhaPoAxj72ceT6Cgx7AE%2FxfnKYGqcSGiVW%2Bx9L3hUS1LeO8gWtjv0EEgtG0yQsWKhHrAB9m7cwr71LQjRG%2FtOritrZ7kLkjFaRVxxtawl7MvDJZRcOENiyM0QdzZVPh6%2FE%2BwAolsbtu5nsX4FHJM4&X-Amz-Signature=d01aae1bfec99c78b907ac82164179cfc17f0336b1fa95746011c123e8190b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

