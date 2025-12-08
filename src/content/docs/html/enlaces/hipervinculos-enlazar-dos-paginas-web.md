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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVUJCG7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVM88808MIHOXAtlS%2BTUNSGAO5LToxE48NFZPYA1T%2BAiEAiojZNP0b%2BuhLDeD8GQfefWJn2jRqoMGUMawhu6%2BjOZ8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOd939So7jfMUj8xoSrcA2WltrwdjUSsrF1Ui2n40PI6PqQoTbfIn74J%2BqHp3J5E9pr98iXgCSyglS3d%2FLX2JsryLF2C2UzP5ohb3wpvJS229w0Qdy42BUG%2BBey9VBVqqWey%2FN50pynkXMFWSmVO3nzU48q2yJ0w0FoGdFkOvZjZECOJXyJEO5q0x0KC%2Fk1Wok7T%2BEJy0Bt%2BFQbFzmX8Gf54EgqvY1p50UHlpQrVCsjBfmWSLLgLtXaN94LcXulDbV%2FH0%2F22gGF5LVcBWHGC6w6Yzo0%2FgyaI3yLE%2BS7O%2FU%2BIzFHA5iw3wAT2MYQx3UD0fJB7VO9%2BMzzGkrE0rLpQDSbfurkottbMQg09jlhAY663YjoKKb2UHhVkgz2Y%2FK3OtZgv1y96uyS1BH%2FgFoPUOCvdMs8fPbuEdqXd8Jz6HU%2FreQ78GtuzKe9lPcg%2B4tCXq5ocwsMfR5QbvWfHH%2FKB%2FTBnKwG61qZwbJ6olsH1XWGVJi884tHqMQzulLPnZjUwAdyLElKMvnr1lodjezaAzfMWoc1ps%2BqgN4KHlcrRX%2FbgvpDPkF2nX2FqO5HrsJ%2Bu4Fsz5xlWORiWhzr0YVHjdgXvM%2BPjwOt56NOjTqRIGugRX6GrzWBDU%2Bkzq2OydZF5i2%2B%2Ft9tYvqRaPMc8MJH02skGOqUBEy5vJewwX8hY2tuH3MgrICqziFlDnnicDYXcY1rzFeGlOOcEibZcQ5NHns1brARmrO0Zpbw7uqb7wDZZ3G2nb1ePb8VhfXdhRvizPOnScmo6vH0Nmw85Gays13m6YBrwOjS3XlaJuqteU1HoKSBChZxo7nBq8OYPJpuSBY2GswuHZjq3JlpNDJMf1quBuYMXscSfTbLaCM8ZlZxFzXpq%2FOyA5DC8&X-Amz-Signature=c9b16ec1b221684fd8dead4808ec292e1bc489c8deebb41403edcd90f029bf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

