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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62X7MUK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y8zyNut4IgjCNwoR3WpjAu2XxvbVWM7%2B58o%2BicOiUwIgCgDZ5qRflvmJhkxCydWu5SNHalgE0zKtahVVOBrfqsAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMWiolxtrwjaidkxyrcA70tNeUuzFAuQR8ohDYECbly8P06SwQxtPr8SgcUi7Vyxo4X8r4I5xm4HeQ8WIJBqFPavYpSp3eGvL2N5aj2GMLCcZtonXuSRoBaDy8SBOHgURQsGT9L3NDB%2FV8k5slgbPnKa7ueWriqfMjIkxXGtMA4ZPkZLEfuHbPHgN7y5sFeFSu7Fdnq0VLahFlUw92EH5HhkZWj7GogU6WRHo%2B36tCtVpxl3dHz5F1qzUkf15XbdNYVvnQ%2Fxg95g2ZEqOHBJlrbQ55RnUGvHLsQNyOnmfI8z64sVRDXgijfRvCLX9hIM5NcTHwT9YIi9KLzaamC37GOyfbu3y4vtGAwCFCZyA2SJo1JBvNe3nzczVJG%2F1awemFZhEgFnY9X9vImbmKdSi%2FOy%2B%2BZFIdCnHlg%2FQlSuYW8llgx7jUiUT50rQaX0gJgzQuLAzB4g5XRj3kg59d6O2lrKlwYYBmo6Km6Rx%2Biu9C9EZAdEqWinRDxxR9MmtW0xTHMPKrU1ftAO38sYwVDTB0JHhPUaE%2FDlMyXNKY0SR9ahQYG0iUBlrraDyOTeonLmFI%2FMIwAv3eXMbmPY%2B8pnwBFX0jRX29EbdaOR56GKQsKqGBWEQCWhwA3S5jR2NFNYd0FhCPbR%2FXWWcnUMLLH0ckGOqUBcSg8uyX%2FfUcFeOGDCdnmDRG5lOoQ2FQuw3KZdCBuMqL7YKjAxrects%2Bhc1J%2Bc94C%2Fe%2FuKwnrWuTX2ORlE4L8nzCDWxh%2Fjiw7YWfZml4m6Cve2Rvg8sO1X7RnXe93nTeenIR5s05qyiOjsbYFKjyqZ5n35FduVmi7lwo0qt6QrcUWhYmMx%2BXX1tGy84yC9LmVtN3AOFtPW7hYNCs%2FSzP3EahmuULD&X-Amz-Signature=6cb1b867f7ed6d0444602269d4063afef4d9cb5a992fd29461579dee3bb47afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

