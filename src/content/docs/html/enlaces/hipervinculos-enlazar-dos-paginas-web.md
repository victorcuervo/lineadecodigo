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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJ7I2MY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO6SL9TmsZKkcEwrxBZnYhr2NpUOmjYHMZSkKU9AxoEAIhAKgWjiO3pJXf4xP%2BjykjnVVIYl5aEkg1p%2BSaes1IOGEtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq1nLDmbk8TU9bulsq3AMlavPuS3AC4xBJQH6uvPFK1wgimfrSwZJBA8%2F2JW%2Bx%2FXVlJ4Jrn4cS8TlKo%2FXoWCGHvFvNVEzmpzypoTgpCBPHPtckvIlecMH%2B8%2F3ti8GGjVY%2FLnrN7swTCybpDcOpbp9K1JXo30YSaVMABsXDfz2NsvEVP9CnppaqfvgiIzFH9wCstMBLy0ZR8fd%2B%2BqxW8pvwcLYB9a94%2BKV2DdMmQNH6PCmO04Kdq0SmXp0D8apvuBijDDW14DNUhl9NJgQEz%2FVYUwl8S58CIq6ex9wnfBMEBot9ebCNvxABueu2tw2UIc7kon5A2ZAnfBO414mSYiibRisrj3Kll1IJ9o9v4ATzcIPvtBM8MmYYlb3qx0SXT1h5LXTLkO8c4z99%2Fy9PEFscAaFHuLAa7Uk96NOk1bG0XpOh%2BrsrvItDRrwyiLJ02rzPB%2F95F7UaBiiSDc2HFLgvY85vfRl8JOroUhm9PDJBDDB7LCNkeQIUQm7dSc2bfkGcc7XWTTibv4vbV5jOTCOwWNSCekn0F39ujLCZ3evtAgrtjQk7Ogvz4Z6RHHKYNlpb7%2BqmmezwCj%2BOlX6qwRGU2LmKw8kWs8cqI%2BU04M8am2iQycdQMxf2VxRHxE3D8QMAqRVx2B2ow72HdTDf3ODJBjqkAUYXqY90oDPv%2BV3JHXKzi8QCRK%2FYXq8L8UvA1ILeeMP9zM%2FHFSj5k59%2BwGyhGZk45NO9LrJPawPm3Z66M8GWw5OfIiXNSSln6hB2g8O%2BnIMMRT7rydsdq34IuKGyuch1XJbYTcdn%2BqoTsEcwlAABn9V6rjiJtg13wG5l48nYLTD4Ku%2FMlI4FxmRYQFicEkMfhQogsT6TSacp2TNM4NjEcVZRNEEC&X-Amz-Signature=e792035a5d7d28e90223b4b779a19f2e0582893491c294d2adc4e4a3f802b588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

