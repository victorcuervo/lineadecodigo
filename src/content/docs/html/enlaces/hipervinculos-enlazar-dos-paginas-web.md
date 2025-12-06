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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HASVXQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHypSrXfz57aMyVam9DkYAQ8FQ5i%2BAJxwSz8aLqqllHQIgfdTjZWiLCX1OE10Upo6MMKTMkt5a4oLXKoiZTtezVMgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOIr9wkjDkzSGIlGKyrcA1plEE%2FySyAa6SM%2BugvO0X2LafDwbHCSC5atC2nijxKO4z3RzNrW9mYHiWklNuiOU3FoCCvTQbAEUyG9AECEelkUL%2FcX%2FkYl%2B9BPbG9jXaYf7fNszQOOPxzuwpLiqOY%2Bcmu7bcetzp2Mxu3hOuKGUswHZ7CjJzBqyO8TWPmX0%2FB0zwt4MOv48OQc2Xx4rDk2wLf6QGnyZdNocxWne3qDMSPG2SMFFxEu1burlDbCK6aXW7NJl%2BVgtfoGrvu78rs4sgFfFuAD9jz3N23gl%2FyH0RkyT8vxRT1wbmKlkPsCB%2BEn9weHCffycaCJ8CM95IKYmocLkjpodsFhhWf6gyC1p72fqj2L7WHtdbSWjUWCXKZ92n0rGv6sVFEQSaas2lutAxFfzmeYkTGDEZYnPN3gHy093%2FGaLKTMRdzGTTIDGZGZAXq0mauBrwNQqsMT8H4w4zZ5WD%2B8NZBqkFY2EvyFaIuS9FdLTK4p2bH2%2Fv6z3BVw4%2Fn%2FKBTfRdSMAaKLRCOdSCvOJ3JotR2xgQGlqlPyjEcxwu1nEYoM6BzGjfO%2FcWWHzTu0kAzC6P1ogH82J%2FCL%2BQ9xtCyowYKuxadzqsNp0nHe%2BYuHyQMLUVzsx4eaeAp9ZNPNgIQZuNQd%2FHa0MJ%2FezskGOqUB%2B3pMH75D8eWQ1JoPLyAWupYqu0odN3%2BWKIHigzARzKqCvIn%2BitZRG%2FabdV4NipTESICFqdWcdwEwyN4jggcxnlk8tbbI1%2FfBBIPmEGNJ3NO4ewfbe%2F0TqKOUg3pODEHZoguv0Kdjus6nIoa%2B3qHkNsByZWxsGZEE656q9v9xNEYq5beB%2FAPtlop2LEvMgw6rycxKx%2BFZvyt91F3%2BtPbcKt9Q4PUS&X-Amz-Signature=59e6a2437ad1c84c1051a5dc33020f7c6da2d5c2e21d61b9cb5ca21d3356acf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

