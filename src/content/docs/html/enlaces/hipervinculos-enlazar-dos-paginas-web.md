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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUSQ6DVG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrrq6HolPMdIAWHYu0P8L5tOC34UZfqcUOtewQWRt6lAIgJhlwQYXn63wk1P5ApCUVpAoptW%2FF0x6HLPXAUoD%2BVj4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiFHAQfa%2F%2BE8QjFmCrcAypdxEzpoADVoynOgr9eyUcg4z5TYOl6J0biNPb7DwOHuLJamA%2Faf3tjsUhwb19IBUikgJF81QFrObSeaK7125%2B33cNwbGK8ogewEorw0CUOz6dI71pwqtUMqvzLl0V3RR0ppeizigxoHqJ0RPelIGUn4YqeG3HG88OFRkNEGMHoJT0jyiK%2B119T964k8AKIl918UEEzxnF61OnV5oFSHjoquXjI8b%2BvvcpCI4%2FhXZ7HB57NCAJMRAEc88gcWOgl7OUlARudvskkOq7h35KZrzTccijyScvuzM82yqrBTMfByY228xPZRlA5M8%2F6r5VLlZ0u8eJzYV31Tw9TKM2toMT%2BVDqXg76aUcQJsK%2FYD2hvMkNpdVkfF2C5aDlep2PRL1cKV4yBRwgTIyFIjPWs7hjFxXrPnzoGJtVJHUOD964OyOURXKD35NwQSzoYJ6XeIceTAx70SsLrRLeczSuqo1FVSui7fxAaXAduinZbE%2B1yUawjpPKKku2HEBd%2BzoNoQIEz6AVZjZGaxkr2L05x3OgCZ1swrg53cGIAFW1wonCIQb58unN0zWwoWmC6llWGPSnEtdWrr1Hw26HpFcPeSnOfo3vuObFbrn2LZBR%2BJVzZJpkV%2BYKM5P4oYbWpMOyX4ckGOqUB8V0mradCbPDf73QTW4stylgNy2rsLcRHhDU%2FnCZjJNjD%2FiYR7QRzrMJVerAfWNZ55UQpNI7B4RO3eRzLM6xzLuhMwuvhMW3nWnKuggw2eAKexv%2BRpREz%2B%2BgMpXoPmn0QGnRwVXicwxhU1sDrs%2Bzj46l8LfM4iV1JmoLkexX%2BBQ4qWDAbbWUgOUg06LEQt2NF%2BNQ9Isfptot4zG%2BqvaTqfzrBFxb3&X-Amz-Signature=9afa2126c0dc8b2cafeb481e8dd7d3512b4e524061a6c2e979adc68d37900aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

