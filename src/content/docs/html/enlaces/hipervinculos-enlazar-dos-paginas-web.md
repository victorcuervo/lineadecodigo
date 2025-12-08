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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MSKZ2JY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSQF7UuZRUyHH4IQXHDiI7nXDrCelBLJLXiIrOBUxAQQIhAKcyt7PzMNiWVavHtl0BrROwgMyzF66AbNyh8%2Bi7xioQKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU27P%2Fv1aCqw7Nzwwq3AP2mSx%2B3y8RYAGMsTkzb4uxixiUD0FZGjEOjYiNaRCSCAwrwKaU4iux5y3BYOYVI254EqNsb2QcudGwChPnS8PEXsk1Tbdc6CkLDiYJh1HBXJmgymKKiQAZ3OInE56WuASMHAcjfAuY91j93H%2Bh7z4zgKgrDNLxmiNk%2BGCogAQTz6plW5upapBxZfwQxapVgHNWN3lbtS4ZjOkNkc1saAg7%2BiqVHjlLEBRcWXmL3g8joLINKKU%2BQdUGmK%2BGhniAKkqaGFDCCEgHJMUupWCnxOY94uPrX4oJr0EAbdDR4vfauRuQggWy4noFY6B42lnqkLHFNTr1AopmYc7U15bYN%2BnbdZVf0emuXmFNuQ%2BL0OazMyUXW9HV4Uc0V%2BPEd%2BXJ%2BJQcz6QyQPI2teh0%2B79fT9MoMjQoC%2BDIdk9LeqQNaEc6Pv0LUkf%2B%2FpvI6Ah7UAXqdmxJPgpXfS8Q%2FP%2Fs%2BoF5aB5UCg7GJB5Gi2MveH8a%2F3aAx9RwcUNkT90WxFZVr6q1kRSeq7baK9kWh4R7g%2F%2F2uZk99xqxun41xFdC8nsBZZKgYAM68cdyX%2Bo27zM%2FgA%2Fa4ot5VgCuES1UGlcsq%2BAkdENgh4cc388%2FSseHGLfDoj4vl7FOAyrsGqhqkpzmGzCv7tnJBjqkAYP%2Bc1u%2Bwu2cEbq9pb3XagGkxWF7tevwkpE0cT49QBjpEuAvB364JxpHArUwG1cnGWe%2FtUcQIcYU1bpA8fPyxL9P%2B%2Bsrsi3wLTH3kON52zKaLCES%2Fem5zhy7iuJ6GRS9MFw8zqhZqlDn6AAgAlmOzfMKA0Pync%2F5dV0Hlm6QQ9ebeIIj%2F4ydZA6jrni2Tl6UPnObb53qw%2BVrORF9Dd2FkoLYp3yU&X-Amz-Signature=f9893cc16eb517c37a2064f8707772f771cde34589a7e7eb2cdb20a79303aa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

