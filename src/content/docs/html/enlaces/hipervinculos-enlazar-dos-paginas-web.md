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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHAHYVIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGgpIBjjVMsPX2AMSK2%2FI7TbymidrcplAwEt1BTupcMQIgRvo80cmdT2FUbo43I3V5tIfDHM906nr6UpLqOs4waO0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLbol0JzoEUEiF9N8yrcAzYVjsFm%2B39558zPgyR8Vf%2BIe1nqq1beiSeKvasLQ8Ivket1SEiXazU4Mq0yh0YwlmSQNtnzJOFSr7r37F1VhdfHsDhEIwng9NNxJd8IDCeuYQoAH3OhGKmBvCSGHpSzWJa7QpBW%2FZd4trZ6SNNZp3T6Lkie2sMZLYGIi9gyG%2BCRvNhOJHuACS5lnnSNllXbBTP1aIDwJ6SLiQiF%2BROo33%2F1cN9Q05F8CO9snx2Fv9ujPLbyHAJ9GQ3bSSAR3ZIwzzytLl6QVL%2BXRukMFxdbRM0%2FnlYA%2FsEmR%2FUonamlsK7Cka%2Fy%2BclEoGIYIdKqNvBW1IWgECECcOrZHgtcLVzMQal941nC0fsT0dUMugEWy8vLeYUSEDmeZ%2FDu6cCSRkwfVM9QXj7QUQn%2F1b8Hn5Y%2BMnPE0qFsQ6QTjH%2B1kZU78h9RtYfa6L1rwhVZEQodKpHj%2Bps2HiD2WikxmsG0B%2FV3TLKatpRLhPZ3AO9GH6VNNljvQeNfer5ywtASYFlY3QAMwrdioJrGurANtjGIKcRXXEXj4jMBygHC%2FDmOxJRVerQ35dbrC0Kjql9%2FSM3tN3wf9U9qdThi%2F36OU53NjmOfjtkzXjEpYmfk8R2l1CPlSWhlyx0QP7N6n9oL9dNyMLjCzskGOqUBdz93UmYfyu9TElb%2FRdb%2FuKsQcTrGnf7LWrYTQeqmtxKYDuDOQOdWkGRYcAIUM7M%2Be56AQPD8IwtplpmakEcu98fcZlObDkUPn1b38fnhGIu%2FjOAZYhN34Cm%2Bd95W%2FpC4M%2F5ojqEXVkv%2BZRpdDKTi2qBSjYTU8bX2qCgjDehB1YsZPyK8KfpXk2KalxTnP5CUm4IdB1mC%2FkfcbHMYeE5%2BGKCKQrjw&X-Amz-Signature=baa4e2b1a520fa17f21e10aa24cac272116a57c385f85b07a0501d097996eb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

