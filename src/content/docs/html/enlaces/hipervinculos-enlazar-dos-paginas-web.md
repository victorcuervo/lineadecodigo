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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDOBCTC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn%2FFmMSRnFNPP8kt26%2Br1n6QeFaTIb1PLjbvd7VrsEZAIhAN8lKbxEHObUS2caTiH6sd04AKUL5yeBzgIEKgRdGHHOKv8DCFUQABoMNjM3NDIzMTgzODA1IgxEkPPxoDQDSi5c7nQq3APh1E95LVA36AYM%2FbzcoeuV84IbabOp65B5ptIPaXOOYdWrzcFJSsFmT7KuAtcKm8k7kRq5ZtGXlUDKJqT7aQcdi5Kcc08HKpR5c%2FUYGT8U4yej3xgWoZajWmJgpQltl%2FSfd1gftYqcone3ihb%2BrYLqc89z%2Fh99niCLmkRWlYsfRhWr4sUeyPDhg5YcN2rsv7Hh4rqhJ3YK2dniAcDIiU2lSk9G6%2BleNO9cx8BbZ0IHiVxZdetEC69jGS5VtXPz%2BEvgeiddqYJBepwUXrMGqI4EtgYM7lWCz5C9hlG3bjWkQ6s46rObypuxI1bRHpwkM5gukWOxHEKCAjok1lqwRzi1B%2FgSTfGrhnE9ZI73iX53rfK4YNQEVA6U74nVn3PnnAqq%2BPQj69dUjgmq8ez2xHoTxnsdd6nkWzQK8a7ZAu5M2%2FKLTGi13XSj2U7W%2FIr%2FtXtJF4tNLYkFXLCnicAaoyyOMYwVCtypdAfmDEmcNnuBUf6Y8cTc0cPvB4F7n68Cq1hVrfNZtKEZVJ%2Bn0lcGKzxZ%2FoBxoqm%2FFKh%2FBhi758LNS%2FpHEfNEuqyXgunWqKlNBiUHy9KXJC5k7ZZ3jlrUE6eOMVg4Rfud0MkzMeyl9LlCOc8tz%2B7p5QiPLSxtHzCLqcnJBjqkAbEsKky9qazf5tT2RBPOiJs84xIJHztxFmMcnL%2F4%2Fqy4VJ7y3Y6BwqWJPgE0n41qefi%2F1njs0fbaVZM6qsAaxwu6YsORSw%2Bdcmay3mLGHz4N9%2BKsYUueaI2mpzc61bARhRPnvYPxwY1nhQsU2YvDs3BQIlFiZsP6L0Oo31MS%2FRdF%2BKh2Vrz5lM22XThJBwpBsj%2FLFKusov2Yz1PcFYnyZBlTHD4a&X-Amz-Signature=65d9a1ce4dde1c825c237ebcd117fc7ac5d7a2b817f1efaec5f0e4a75c26b225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

