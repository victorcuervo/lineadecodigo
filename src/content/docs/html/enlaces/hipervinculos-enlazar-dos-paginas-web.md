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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMSDIW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFJFoSrTq0KGL6nJ1vIieyFAz6un90CVrSihY1WFTrHAiEAsLpaYonehntu04MSMbfnZNUGze28%2BrJxD3dCpbXUZ74qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMWypQVqes0UfnCjircA1%2F7N0OrejjCQzwbic6LAxEMpZo0RSqhIkYslGeJzNDU7lXX7j9sVIGapbzcHYtOAFUd5tukW%2FOdko33hs3Pns1iZgk3ECGqjwI7o2WOAS40OR3rZGgh0Wq1LvLQfozeOwPlk9hlz7%2FtEBt%2BmX9B9J60m6Q6b2d8fgMclkH%2FBMxBaaI7ODoNLKOIg4P3f1li%2FLzWs0bIQ4CvTYIT4XUZRERadUJ3NNEdEDQlOXuln2JjM6tXHOZ8JujeJ1X5XyN7cA5ORj51CsgKq8KYk%2Briam7o1MTXgjAFsz0rnGmPeI8rh23AXSmZsSsQ61L2diToZRYyI1F9K3fth74EayE1EYv03xGlBB9ITuqhVsubyiz%2FpPUTKNNC6BoQkbw4DRu8R%2BVlzktgsJb3Tek33Keoyzn8wxGTd20%2FdgNe5zdswuk6tfOcHXyUHg%2Bpa5VAUrCpE1AMfT4p9gfpK6VNolJD2hPoHcgKxeOD6%2FZU2VsVtMULOrBQtrUIjpGuSXyN7%2F0uGMV3x3V4%2FFzw4FhYV9NHDlpAB1A1VjaHhMhubOPIiiwbE6MqVDJHRFy9ExD9OgAyVIRvpECZJWm2JwRPApLyCGwvwEQZ6lsEAl3tC0J%2BtODKNd8v22ik3xxu2Hr9MK%2BQ28kGOqUBEVy7m4%2BrqqhQ3yEMts67Mb%2Btv6Zm7Z8OQZGrSh4c8FpIrgzMDgyoxnSVahlleZrdO5VW7C7gV%2FB180LzsTk1xxmhk0LUEO3KIJ9J6Ti59Fe9AvzrIGy7PNe6WYMolDrZk6Sj6aeyeo8JYAv9fKVpWPCgOvjDuJd1JlTpzmVjz%2FxCdOjKepWzlGMMEL5u2%2FD8MNyHlo8Mb751pcHszoKLwVE3Fu1K&X-Amz-Signature=2adbfacb03e0ec5b9a608101f3c5fc20dbf752a773ac1bb95179f97f7eb3af01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

