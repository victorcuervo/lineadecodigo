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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662SHHWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0gAk38ex1Ngr8CHVdKS0OWyhfj3L%2Fx6iiuOD0CpOwRAiBamszYSJPpX1T7f%2F7HpTY4vq%2BwiFa3RbSj7OvHX6rmLyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMbA78XcioNcwTA0HUKtwDFtkYGfiknkU0WkL%2BPTU1Ja5AdvYmGZffHl%2FTL9U2OljgFothhuIgXqLLEoY%2BzuSZj%2Bre%2FdbHiHF%2B4J3YL6zqIVvqPzVQ4HZlNNwmm9qtbBSPr20xsEN9PkZAyjp9ZiUeFyIQPGQqrtF7pSkUaqd7LU0v5prdxLOz5%2F5LcX9QG4xjq4dxUU9Z5lTInPgRSluQU7pT1SyEduyNTEYqmYF%2BA3z05vo4zwlIrzPNxt0K2%2FqK%2FoPHJPg0QZquX4ktKfHNFOAi7gf4yeFNqP9Y6xbDTG3OYuiDCI2eWOKXt26Je3R9F5SQf2zE7IRi6mnn%2BlscnLSzPujwtDxR94rL2sq3eOtT0Wk0Sx5%2FnUUuB7Hw4SlqhVWEqW1Z%2F%2BbmZOcfoDjEyoFajU7UVApz%2BBRz%2Fss5ChpAbuzpt5fepPoQYQZOrFElpAZbiryVin%2Fd3QO0CnNTz5wDqYa6JiQSE6pOitmvFSNSlRF8AhufXvnwhd%2BgW%2B4DM4Zf1e3AdlgHMiB8JBdrGSK5j9n%2FqOdhEAqXYoiGx602acCVaSv0lYnu%2FACCV2CmydQDuSgzfHtTgsfClTdtbJ4e%2FqeXPSUckWgPR9jfEX0ThHwKbnHLYMob%2B9OfPvwaMx58%2F9eI9h9NBOkw4ozIyQY6pgEZ416dujfcndCCB1BSUtbM14N3iMEEghbKySRIO4QtSxFyd0%2Bw64awlPhmEHS5BIEmAioyuP1K%2F3Icm0uJeFkAKZwxK1SfQojATwkuLkq%2BDaMoNyDO5k4ZhQ8dHr%2Fidbe9eNeYYscVXyvMJUXULjnbXlnrkiEfE%2BUQ0MuNF0mBCMQNnwK0Yx1j8jUGIXaV2qvvdC4apTXmMFg66nUk7jgISt9udGm%2F&X-Amz-Signature=ec6295024eb6c264c6125336df55049250d506fa41ec36aaf7638a6be1991804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

