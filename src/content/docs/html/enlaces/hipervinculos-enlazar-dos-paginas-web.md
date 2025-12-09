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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC5DJ6Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG8g2ZP2QWkwkZoiB%2FuymBZ3PXyCQKKrZjU2WXGwZJ0gIhAIJlPe0W%2B0%2FekzryyChianPvw%2FP3QMzh%2FAmSb1zbJK6sKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydQdqOOV5%2FhD6TnI8q3AMX2ft27F4IDjIbKnAzJDqtdJQIkvCaffDPmKzERxcXtJaSYD1LMc6ZG191ob4t%2FRBHHEvNqSBNnRzd7XCA6Gh4dvYfG1tybhw4hB5qo80uzD%2B5h92f900y4p4DJsdjYBBivLVe%2F%2BdKoq5Gc2yX%2FkW8oM6C6b113WFD6yCEkmc%2BNU6%2F0cvcD3OEj3cNlHmIyzFuQx9De1cV4GKdZy1T2Yy2xFydSehAzovyenaOqCW41RfaZFLCg2bFoJO%2Fj3doNj1SXIurOySFDJ2cvqR0ZZ1Xy00RbRIVIUJkwia4QVaPJjJmnAC66nTBScT0Qn1%2Bj1lV8OWTk8WTKsasyUAhAuXSJhHZJhrbwiSh1l%2FCIGn%2BRLzHpizfx7a7WxDL5hWUP3qLDnLDv72uX%2F3mT0MB%2BqDlEYh7xUrugCwWifZTIqNeYMWzkWoOvVoQF%2F3DjpdcP0OUGBcotWxjJV%2BPvyPr7dEEDIH3%2FMV2czqSemKXjq%2B3k4z2kvle%2FxvlIW0O2KJ%2F2957b077PMjygwuIA5jIAZFJtt2iuoOMlM3pSPtODH6NPCF4PMtukL7onRkAbS7HlS%2FkFK%2FI71fJrrNnbgDWiUBxMtSYyUCsIVmVvjEQih1sYhF6W3nu8VY99ELu%2FjCwxN%2FJBjqkAecK0zI58xeUlCFoljHoyidVzGIi%2Bnsypjo2QUh%2F7b1Gcfjqx1oxo92OBntdpXoWrudeZ%2FYxYNzN69wLNqSiuICzucKA4liN0ixIMi7JbV4OaXL9u37Ye59ulze3NZLacJFsVgP1IMOgUjkph%2BZihCZ9ecnjCgJXWzjIPr9xTqIYvfYbMzS3NSjwTI0JMs%2F1pqZRZTRODOgMUyWZuTLlGC%2BfPh%2Bg&X-Amz-Signature=2df967b39575dab15fc72df912ad1e1bceb5808d9d73d5b205de6eb3409331e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

