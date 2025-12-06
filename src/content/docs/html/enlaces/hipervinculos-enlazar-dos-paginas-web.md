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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZA34W5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8cS%2BOKc7IRvp1DX8szfYnJB0oLLwHDY7kuS8Be2DRRQIgZD%2BWA7frCDvSzULHMNsE4gtOt3v3hgNRF5hnFNq%2Boycq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFVD%2BeslOMpDuzXWWSrcAzQt2z29GdPDacACEupD%2BAS89NPm1lxBou5K43cO1aj1zfg1iyJgfV3yaB76DZN1H5y4i%2FI61KDdVdg5AgVPjqD7Rc7HPDzcA%2Fy%2BqA9xxb3CaoJVnP6r9aAzN6oyU%2F3QZEvOU3UCogAAy8wryrTjBuzTN3WFTGjZ5ReFfWsC1BXTSgcEq3TQ4n94lKXGKb%2FcmiEso%2FbdmgE2aJ2hxo8Rj7Z9l19vAn%2B77RWVdRrluFBsy10xjkGU8fakgUyJdiWAP88yHRhhsXPRZwmNDJHxb6Oe7wMGpVAmZuozbmVPJhzazimmv3Brttbzx0sDjpGHuYOWTmD0S%2FJdkFkxMqIqU6ih4bn%2FO5GvuHIjMXbjPw01GYFHwscjEAT2rF%2FJ20CdP2bTyqG8GOAdcGc7CleYqMCZNkbih%2BlrnMQEHThQnxxLUW4FOKGCrfxQ%2BTn91GurLtwbtlFxs3z4EClA4RSwWRTBgdjOj1uHw9htslQdQs0VxGpDtsXPmQMTHpTVPrNGOgnzJR7MpqqN7NPEX7nIXs7lLGBU9q8gtmgK3WqHpToaF%2BG33xTEn6AZGl3eLUBXPMd29zFYVDclsHPPPZMHQlh%2Bt3T%2BbJipONdeVSAwKHsSQSLqCpoWxhD6PoT9MLjJ0ckGOqUBzIlS6xa%2FpUt8jt%2BjgNlHkBo39BaoML7oPABW4zPjYSS%2FJGSJRb4x2bZxJJZgvuP8HZq6AK%2FpI3mLUeLq3DJu0jlrn6hDZ8WZFYCpc%2F3B3H%2FG1Cc6NFGzV%2FvyWvjHFO%2FSqSfiI6sJyy23obUb%2BjcPLt7G3ibzs9WZh3AXNdJ7fObi4Q6Y2e58pPoNK785wkQ9A0JPos4eWZLMAFThlg3ZYL8OHlGU&X-Amz-Signature=73e6ca2c68f004ec451e6ccfeae199eef6de9fc768c145d96d537f3fb317d634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

