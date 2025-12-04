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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZGFOG6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlCiw4U2Vi%2BsuR5GYfQ9F9Lgu9xyLW8%2BzJXVGPe39WXAiEAkmkW3kS050cvfsSjz4hXvmRhST27hLK%2BvRDr%2BiyxKy0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJQeK3rFcsITdYJzGSrcA0MPHKfzLioVGS8Zz63o4ftoxO7zBL%2FcItEOzu2n6l7alA%2B02Hur%2BJWiJQf7r9ttLGkDkTERCXaYV4aM1KXV0HvKZ8Fo27R17j1ZTXzTmD0PwjIfWcej%2BmdP1XMsxKHyC5wgRc9uupRL4XCgC0rDcXD8J4kQ8JZrHnOC6Gb0XHlejrp5lu03zvcokjPPjS%2FYPfRQ%2F3yMi9yP4oLgDOSroFoG7FZBZABkKAnIa%2Fk6Jnd6wl%2F%2FpJY8pfRVxraAVvisfYq3U0RfTHqzOT%2BT6tCT%2B2DpZwbUoV1SAgGXGHroaGETEjP7pusZiO12Cn3%2B6ktH02qmw5DgNm4rerkwsZVKMYwIr8xSPZcSKguyXBEyWuUBmeuG3Bi5MtreuEqJRGeov1ss4i5ldvVjzzKuVstfknLUQt%2BlDNUW8093BVclLa67YAbQg5Q%2B2WuxBe7Cz5cxOuCcWPVKPmbx8213Q537c47M5i4pRH5a%2BeEdcZKVZJRPjh4mAz9apqlqVI%2BMwLNovtMS5gAYP32LNZr%2FRCf2YzqFJT%2FIljEOwJviEzxf47jsSC4DrPhnUp6b8a%2BzvySfWE%2BpdGtiU6rbChRZWAI7MO2hdT8xE0E%2FSEigmvy8X59T2mMCPngVhdVQTln5MLyMyMkGOqUB7aa6C%2FnI1tBuZwgq9DE6mlLhrHdh4cWpsAPfDunCylDbFKQnmL6X6rDJBzZ2cYOMOcXyeewGcnZC255Imc2jwdI6nR%2FfQNaujH521qhQ%2BIsOi%2FytgP1M26NUOhm0Llg7hNLgQ%2Fv6SqSdfFrnMLSSN1oODlrS4UBUWNDXCMXfo4lPm26oyJDBL2FmBXoQHQTTJDD9Je4zARH77ylkFL3ltY1AoHaX&X-Amz-Signature=3a3061b79dba20541b656698603958882f8e1405225f230b5bee88e90f1accf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

