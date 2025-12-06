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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZPODGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwX95xGo8V2VD%2F5P1q0guB45%2B8eN4awZ0dAkndYxz4lAiBwOr2S%2F5MUrQemBBunPOdl%2FzeIZfsGGhA1lfHGeeLrLyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMq28LCiHFIUqXNgoiKtwDKzOzTevKRpDPE2SI9Q75ivKfq%2BxgerMMx8gVMldaNohu4GnbkpiHE%2FZb1%2FBNU%2BhE2X5OeRDxd%2FE5k74I5%2Bx0meEuMUCuwimP3yiJrhLMpLgGbIjltxHQkWQIKfyYQQza7HMFya1PJE%2Ffsnh1cVVO8u%2FUGaWgjZ9XB352Dm75y3Lz7VhYtA%2FmJSjiYNXF%2B69sf%2BCP%2BF5ai5IFEnNoiOE8GCwUA2w33ZQAjupyA%2BFMV73MCO1OU5Q%2BzcMdh53jUxdBHSbsQkSnoyZVqyGspEl0Fn2IbiyEXNRXtYHNyjz2w6jANCXt30epv2bL8ACDpfeK4Lfz20QobBwxfJO4xHJHYMPTWri%2BcbpCvp5esomriNCWiVjy4iGBMggVlw97fLbXr4A4vynbohAlN6hA8IDhF2AG1hAO6Ek6POsw8tC1%2Fe1sAIKdylKrb0NGWz6BB6iX5fCu%2FmV8Yll3Pa4GUvHaJviEin0PLPUaZs4WMKd18AXyNKqd6HQdD8A%2FnTN%2B0jQrLrm38Y2nX1HG8rK4EZClovdDLOeQKi50qyjKgpsVzAi51KBNircA%2BWzhsYx707G9cmBW5mVljLVuFm5djljoyUJ5yyuljtM5w5gk162%2F4LeVfHwLgwEJHhkC%2F50wobzPyQY6pgFrl1G4ARdSYBrauWu0BePw7fPVlLuz9hQU2hVcHlRtTNWqnvBeG1sGVdSZm699DGd%2BgA5XUgL3wITGpIWKjfZn4ey1ZkVJ3%2FMXCw918LGovA1Dmq46b0OaoMzlnwzQ6GElwMvN%2BTcZRS64%2FSVGTp8VfQYo9pjlj8pJvnipqaeSkxYwPT4eGISY93SK3ngvCImcsmTA3BCaMMtEQ6EYm3CYKdwZx7fc&X-Amz-Signature=1dd66347335f5e4ec648fc8a9efbe7f5a675172080221d615b7c15be11c07b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

