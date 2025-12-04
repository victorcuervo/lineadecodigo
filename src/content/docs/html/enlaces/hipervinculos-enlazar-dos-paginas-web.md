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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFNNXHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCtt8awa3s8x6pRYDzpBJu2IstfLNqWo%2FJlKbVLpAuc5gIhAMwz2XYv%2BO4i7EdkNrMK9O%2FG4r9XXMFAJtpSUC3AgyHYKv8DCEUQABoMNjM3NDIzMTgzODA1Igx%2BIOXPpQ5Jt7v9Fn4q3APc7d5T9LEcnjj5I%2B%2F7TDT%2FnQYfVRnfU4cB32mghdkDs27Tn5arDJM0IFLvmZSvCmqwSSE0dQnUSbWNiBb0FJrxZM0l9Id2dRLErFOBjIEKbBvHwHYyUJBy6kWyjaebSBvXUAb31T9WMnwtXq7TnI3Rpn%2BNlh3rFh7gsR9U%2BeDkbeT6pkF%2FF%2BnznL97cpE5gsea3ylvN5v2byhKWIXDiWJu46gZ%2FiE13ZbU5CjzAtDc%2Bw5JRDsq8W1dcLceEj2mtjDqRdeNadt5gyowOVg3nmJVd3SvJUwZ6pbWbLCChnN9DdzUGfRbURZUuo49of46qA6E4o7IsexeI0xxjVkFwAhS6Ygw2IhMgIVvgrdicGyUHd8PJai%2F9Wp6I%2Ft6GHLLyPt5EHsvdbkDO1qeCDhjyg2BLMzolSiFoElD22CHp0SXHJvbLk3WoN5GlT7GHp8f5DkekmhrCdgg7c5S7TQg6beAIwXNQdihzw%2BUM4Uj3OTzlHoDp0OrkrTuhqdqTORVhG%2B97JerbuIRfz39PvR3ajUvlbbuboZQwHm7epNyDwfrcKh6YY1dPU0e7Ip1XB7q%2BmiRocUZRxPyXKoV1E2BczF392ZcwyqWmoBeYRD323CyLDBjx0RJ10KwWUThhTC%2B58XJBjqkAWK28wpFXoqf7l12mn1amhnnOcUj5atAnHtEI9r%2F%2FzCSWHX47HThQSoIt6fyvQEMSU%2F6MvVC%2Bzv7SUh3taoXFjsq831AfoT%2BovocnNrmUuMg7fiwlppQV9GrQ0GwDPErgZUMIktI%2FGjMM9zrCY%2FP0EPcW9OUOYbsMaEAR11CDAdbbTHrA5SLuzntF83hST%2BXosRkbR%2F1xEbk0pghz%2B2EKA%2FvN7uV&X-Amz-Signature=5dafd6bd6ec8ed0b54b883311455b0843070592951333fea3e3db5a899fe531a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

