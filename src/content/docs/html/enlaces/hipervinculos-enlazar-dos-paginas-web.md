---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y5IKF5R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD3RL4nlXzdpqJSd6iDl8Dw7Ot8CLYxwWL6kM43Op2XYAIhAP%2BbLZXpQgw80JMYMdmg6jyNWwa8VaJto1h4mFOsC9HVKv8DCEEQABoMNjM3NDIzMTgzODA1Igwxn3HyHYn7Au76mxcq3AM1bn2H6hIAKn5LyzuqUlHIryAo%2FkRPKMaYhUcauMOWh8BzeW8WetEY4SNfEUcHUvL%2FJ4wS9XvINYtGjZPxlYmFUWncFkEqmHK25ejusFyENSU8naUFgyym7Ds5OCk1w2%2BpN796WDfvXrs6ZMYcgVnmdfCbXgahAQKq1l3Kgml2ztjTWy27vANWoMe81icIfvmdIts562ZD7mJiNd5CpAfjl0n%2F%2BpEn4B7obWcez%2Bly2r0pp2tbXhj3SBbzV6aNU%2BnhvTqBSJ5cFD7V7cFETBlQFrmPT230idNJdqcKndHgwAUBGbtRxhN1SuMHhLKgEFznTzVfTjwDiiEYjTKIZHZ1SeWGIeQxkxgUhuvoZfxFJ1F%2FRfBcSswp5roS6AqKr2WV1WGzAIb9kiurwpCnuH9a2zhWsyMjvm0h5fAZbl5VzbgMCC9ZL2sMQVzj2UYlmrs8Mtwkbt2rw8tKecZ%2FITzE6O74yKZXmDdRFgkHzDRG%2BiI5E62XgrUwHZHQ1HWuHrxrBQ1qVIvjfqGDTwTTi9cpfQ3w3cavHr6lMplD4CjAAQDy%2F7Xf%2FITat6ThnwtkBGUF%2BTQXJbD99yVtjQ29b8%2B3VaWFrBSDaYieAC7QO7pv%2F5gHFGCF6DVz%2FDJYxzDJhcXJBjqkAVBZybj1xdh7soC%2ByceWepgTmWT8SRwtTfF1e1YIdT1CIJavKhXWYiUFxoSQLlIJoQ3zaGgYZzCvm75LX78at3ZqFtTWO%2BntJsAm0oUDVve8iGNCHDiZUussHoSjkExN9uOauIXBoGconZEQnv%2Bn1Zes5k8SMgrktxwbsajL9CdO%2Fke67QNDjLUCWi3kHAMsnnmf7rHdH%2FkuFb5b%2FNJ%2BhsDOQwdt&X-Amz-Signature=ac2c4b31e72c344e5d2a2cb62738243a0bf1529659aedd0462b971550b037694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

