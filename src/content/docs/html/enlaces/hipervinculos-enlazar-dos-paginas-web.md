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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IW3DL7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTbH35jbZZ02cBC6LBgA0Qys%2FgnSnsWds13a9s0TVVxAiBDNZEYoGQg5HOFU39a3nyS7Lo3W3KmMPzp8EXLdOf%2BCir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHrdEI692XBnn80LcKtwDBYNMjQQCvbjfDwU5w5rj4BWWaHWV7at7gnBZMcjDx2zXypkg28xA05NoRnl9nH5YvcExHudxKaHFvBQtL5N6DZmR%2FOTgGSi4OfbJDyUtbgJ9PX9798UEu95X%2F2WtL9K%2FDKY7bykFmcrHwpsc9t3T74ZnQHvNfp4Mt5jnvBeW3ZsTUwhNm%2FJnP5HzcPqma8t3ZSBkqgMmuKxb%2F837U9oPLUlJQwut6DZWlUv2v2NyMwYoECkK8ksDqc7gSI8n2dJMVaunq2c00CazcAYZYtDFGo6jeu0xZbKCMN%2F3L2UIc%2FhIwaYLT6KS0nmTwOpDQMfdN4EeRfcYvUbdOk6FsiNGoYsT6lZ6l9m1ifEeyAuilRLll04l6ZDjwyP%2F%2FUdYqujCDcy0OMUhUvnOgxn6330bRFhW1DLoZ1wNu5nNX6loBrYt7wJMtbtDKlB1gNgVwroIyN6tXcx00X7X%2BL7yLn6RLXn3n4NYwy%2FksEiMryDl0S89Rqm5dBQRVEft%2FojWLj3jV0MTmiHe%2B5SHKfpuIyebRDT8hlmSUxipIbw%2F5ItdbvD51zDwlqX7fBzA6nsGV01fUlf6CZt6Wq%2F7vz1B%2BorajOT7nSlZ9cSA0kagp0dtF1IufZApIMpU8QVtgHswvOvPyQY6pgGlgNJJL4cjhxduP8vHCZ1MEGCfu9bZDRQ5yWwOwdV7LtK4CfZ0k8T1VtUO3RlXRbBtRUfh8cO1i5IO4wWz2N6w9nj%2BIO26Hr1ScPTx%2FmBBp2EBbUrseOMycQeMJuZhcOepYFIn3lCwosGn22wrLEwSO84oUDOlBEIzWEaE%2BRQOPPQJ3jH2qB7YL4KDqjYSsE0gsMu1qWtB%2BvnVoUApqv4dgK2uh9ji&X-Amz-Signature=bfaed1f2880fa6e4e10bb5609b82da8915ee61f2b79a54bb7c399b6b45d869cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

