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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELGLXNL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XRrhXo0OlVfdCF%2FN9gbqTfwZRQe9FoZ%2BMih1VxZhVwIhAJXQqcBKtHVQt4a%2BfaMLheBxmuxj1vOWEOzndk%2FoTkWsKv8DCHAQABoMNjM3NDIzMTgzODA1IgyMZlI75NxmHCEuaJIq3AP9jhkUEkfPxvccVwWx%2ByIM%2FP1zlQL%2BxOzsYf%2Bra9u3sVyZQxWZmdp7rFWVyGR7ISx%2F4AF3aNLgdQ1Jb%2FYEBdTcRyQnS9bVwIlgGc5OwY1eMd2g3Q%2B30SfXCwdH4Ughyb1v4aaaAoB%2FluC%2BB9V8IMlXNJHX5Bqy7RGXCSP5Yl8fr7QGzRx%2B2gw6qxdt3n7I9b2YayTPR5%2FHLJ5JlFWhFEPEziKwQUelQ0jOLhuUeqXovSBRlfXmNEmomKABmHWLNd1u4F2a%2FJQ5l8pAk5S6BMOu1zETLSAXyM%2BW4QCstJmFjJp8bByEhuiAGd6rB%2FEw%2BL1bgkTbC60BKv75ruVgiULj%2BBjAp%2FvXeb2B2ZXCYUrkoLjJQnna5n7L2dJlP7JW9wm4yQ41OYt%2FBMmmCyElgS7AX9yVEyetaFhb8Zpmln7g%2Bj3SRXrbyu11BdFAxUttzLUlztO2hHYBIIRo6kwB7nVblfGz1UBFbiJwRwGP5UBYix1EWvO%2B3g5t7GJnweQltiPoF4jO%2FBLnIyE%2FmXYaceTu3KHowluQO7Xq1KnRjt1Xx6kkwRQ18nl8gIGISgu8qQm8dDmdID%2F8%2BbuTfsQqzSuK9LlFGmAZAt4VpYhKyJZRrZi4IYQ3WFr08BL4RjD9ns%2FJBjqkAXc2ahl2d0kyyo%2B%2FHEta%2BFDKqHNfOGLYbxpu88KuyZu4ckKX%2B90WdPBEqoFrfaVvdV79Pi3b7%2BUjV3H%2BjrhmmkjrxUWlt%2F1kWJqPTbXyJO6hl3drPD9Q1mCPwDoH3pcF3nsbVQ%2B3w19RMFXydzsv8V8%2FUHPXRRxn4aHrDAOTrS%2F%2FsDottcH8EzDsGsjkbDbwGmoJcX6zL0sFavBtJ1AciTkSqUF8&X-Amz-Signature=ada18b3f5f7b8e0653cdff4d6fea112ff72253140af58d280ac4976906bf3685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

