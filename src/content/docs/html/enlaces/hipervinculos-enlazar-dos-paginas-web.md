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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODCW5GJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqTLW3FP9jDmIWNqhnNRbvn%2FYbA6L%2BeOn0oiYYCWShfAiBGkCKfffPDjflYERTMsoC4Bgw9Tc84hSgDDcZ3byx55ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNrP8WiGc6Osd2%2BJuKtwDzWgKkz5Xlm%2Bl8iowg7BNq4iWUzqxCEvzLL7vczt45oe4CpnG1l7K0O51tktQL4bI1CHba6glMPsAhC8iwzRRR07ruESsrL2HpIT0qu3FSISlzGs5xwcWGjCKxVxYysTDqrabL9H1fsYmlTWThMpWodWsy1bx%2FgKL3FpxjrDtR5fwk9Mw2ZYpojuPjSVcf%2FKhHl56Zix0O4XHY%2Btrw1F9dcIMPU5h%2Bu4NNo0k49%2BsafEapgjxJpSAxSmZbY3r74KLPbJSESQ4KCgi%2F%2BZAK9sAzeOEyfHFrtxph0zJgNm9zZwOdWPkZk7BEwY8M5J0YNDHWQE6JIjqqR7MCnla%2F5c9bngodY%2BEwHEOYYBssv6roHr2d22HRJS5GweX%2B%2BOx3xXx8YURh7BnVKBXgS160eLxNJaIUGSzqT5o%2Bnxu97lCdi%2FH1JzbWl7xPipR4mdxqMvUF%2FYSv9pTgesV00TPr%2B0FvGFZiq3zZ0MRZMgCaeQQA1MBQDwv8Ogzap1bYO%2FVVwCzpiLEDyHI9vY2B86iI3ZawvRz2dzIGm9biNGTDXiptxkDM25vkb3Q5XPylmHhnJlK0QI1bEoNM%2FrPtMtNW4JWQSc7Dxv5HJc4BDLxcck0IE6i2CnQoK4uXXmyO18whNTSyQY6pgHOlAhtVZlVFJVCVsZJAL36nOphmXCAyDc0bazKh5XzFOYgDzoDvonIu60P%2BJKTVIp9rXsUK%2BGoB47QwxCmUG6ytPyxrxaHTCcbYDNEJJvIDkRJcxyqk0JwOKshpAMTygVeVhXjr19Nxim7vrl9673Q8iu7rv1Lly%2BiysvNeHXssD7SWerAM4MPgIpG%2F0jK2k5bzA5MoUFUFdrbYC27AMbtobvHyvm%2F&X-Amz-Signature=68b3969764a8fb2b54f6bf7f956ed4d75e247c158de9e2fdd19597832f01029a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

