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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KWF34N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLsTG6DcjJes5i%2BdcRNAJfTb4kuSqKRfqhrC%2FmwwktLAiBdu08ROpUZk4YXVci4S%2FLlSbTY%2BIzCDxVRmJnL9nNBqSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8smvd7vFwDzf3A4SKtwDXk2JJBveIsDJtn2ui%2B5yjGjBFO72VddqR4eMkXq5Nx42zvnEzNWWEDSElK56mLT5jeWmq9pjCSJPSOgFa1yYoyYI%2BKBjUo%2F37lT%2Flyf1F6MK0uxEbDR%2Bx4%2BF8NI816vOBpfQ5k8PZ1fy21rB1eG6HKz2CV7DKv2OzQJShofetWMK0XjuV582mt1BhwarEXllZawEmyjK%2BsRx%2FShF1P1As55ZW%2BDSKS2GlH2uPxN3UsFEMVK62vq9xd6%2Ft9m7ogSqDDhWtGGxyNPx0SgGm8lQEal24X2qbvkxgMvfvQLFT5KaqnimPpa4lUTtYdTCKZL42CtnjtaUHUL3239i4rkD9H%2Fwf3R3CGGXG6S2qDm19zvSGAwaMRcWIOXq2nlQTHe2EuGn9yWX8lMQMXGWo6ssCt4ffmjCEQQNOFBTmDHHG8e5PngC%2BStHpjFXQsNCH0rXi9GAeYDOims5leiZjqKo2U9CxmuZYR6CoXSeEaDKtcEtSbxlogNvsilebFfb83URuyejziamhnYjgDvUmr8iQSxKQolqRbt9iORMu%2BkmVisvn%2Fqlb9IKH0noOqY8zhiEBuCQE1OKK%2BzwnlP6WhX7zM06NMcTaNPLunRojLb722LPJPmrNk08vnsFNCcw3t3OyQY6pgFvaHf2h99aJxoFjtVqtvMsxU103A2iOARdaxzU0i1tVi3egpMXA52ua8nmxZ3og0KmyC6tYXRLIHX2AU0ru8f4PsMukQ3Hu1%2F3HtYN1Q5w9tD7hZMkDq%2F1u6xO3dGZrZWYaHvPgTAeXvokN7bnlBM0qLgSkvLlvnb3N81TgVNz5%2FPz73E91SjxgG%2FEr7tmid7HZkAgHU0CTYKeLKntPNPP2z3zL8I%2F&X-Amz-Signature=3dc6d281198166858e2ab031d3a78511792a7c3dca7d4bb5f099eed70f0cced9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

