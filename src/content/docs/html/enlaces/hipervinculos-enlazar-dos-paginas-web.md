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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO2XBLI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXI7trmwPu6zEtDYkeGngami6NvO8F8mcUE9AmCzeHAIhAPOcgj0m7cEpJhbRomgnU%2Bcw760r7j%2FwtrD0f3QIK73MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83pUamhwC3%2FH36B8q3ANa58Ix62J7GWWhrU2ebNEWd4ZB4XDUXlR0m99G8AIvQqsfjaxQKH%2BOAZus0wuc8grn2E2YyxmlHJYmHiO%2BASMoNC1WRm%2FxXH8w9Ry07jK8Ym7uQ5UehvtrGgGZBZpckhCc0qkIsho6Hu72K6fZr6yivhJJmk7JFEu%2BKUyAeYqjm5q2gmEdy2X8xRbSFsWLUImZw%2BJJoctKxcJVa7v5RklulWws4hdAjzAoX0b%2FlrQxbgqon7XsNqHRIzr53W1QQrdpRFFeCPZSSJhOF%2Bj8Fmz0tJWnDHxomRe4yBW7bgJa6yqI2nqcyyTrSOB6ynCk3%2Bq03cVrXn98M2Nt3GWX64Z4et%2Ba2fB29BQYTgT7Jq4j2Bs%2FukeQCs8TN8uUrGh71zTNjR9Nyc4jRnVpEaNpprKDM2rjJ7Uw0Ik1fAIYdkMI%2FAGVOMrO95vHXNGaE8tOYFbBbZyCuvXPpDo8HPDDFDp7Ql1Z7vrLyXHTN11Tj3rx0K%2BMcmosmCLA3Dp%2FO6VzIjzJbI36C3pgrW1uWjbk6TmECBN1DtAtA5sPmO9r%2FMTpC7HUBk1YqY0cF7nCjJGpRZ%2BkHrxooG1nSLB3OrP18%2FK3vGeVwmP%2Bb8uqclZZmO0uVF1JKRQbYDTev5Z9YjDH3eDJBjqkAfVTDR5gX6cq2x83X2NtqurPgzliHcWyp7jQbuYTQHwKoNINHzOb5HQEPZEf8RkocHE%2BRy8O9H35o3wj%2Fk%2BEUKMVIvkPXAy9EtQNX7NuPaNgrNK9HW%2BbHr5AQq3qzLXBNx4VJ6SnhEAQxtavwyKKY%2Fmxvr9%2Fj4QIKzUF0ZWVOJcAFX06mtGc2W3us4vpwI58mzvNGtZMbDnteDoobf6vKojPJHxD&X-Amz-Signature=53ca139f1e1f21ea3ad544d2f9c142816d080b85f7b293659920b3cbf5c42350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

