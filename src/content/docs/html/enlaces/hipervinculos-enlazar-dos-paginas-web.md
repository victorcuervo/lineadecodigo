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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZRKAUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFYHTnNHIqpLzC%2Bj7o7wJvfmrqM5Xs%2BGo44pqOZhj4jSAiBJkNlsp1eFDrxRQCJUcK%2FkvQwDPJ5d8Th5vT8PdDNb4ir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGFJzqzaXZ5ZTym4sKtwDCOs8ofK8ni%2BrAb9oXQ3PkZTYooUvm2mmxiw2bVmvIu723f8j38FQc9kxvflEXocaOaAQpX1LGuZH%2Ba%2F0SNzEQ8Dx5y16sU0khkMzuS6rGqJ1xPxpbhA%2FNNbYC7ESO69NQKSzyIV6pCt%2BO5jmZlUSK7j5PimvjzdeNVg3svWZ%2FknLXseptSbJL4cvqk44mpRxStgX1kcLojNcPOubDICJyBmkg9zcqT0TPygn6R0oX8pnaGiHBxlJR7sXVJ4gKUtboUbX182PAgC9jx3FLA4y3eWS3dRPW1fKjTmFmuXfXZJ3xenlWjgV6nj7KvoxvmyYZxsXBVFiHUAtyngGuDdBhgnGHc1islO%2By%2BNRBkubL1FTovtCJV9Kw%2F1rxnOJO8N3qyligxo%2FZKO%2BIxkm7JQjQsbLbdgr2RE385XjZN82RX0nVXKVP%2FGRiCluoLRZkxdkjg4JuGBV%2F5F8qkq%2F1y%2BgJb6Umz4ZqfqDJMh%2FOxBxkj4rSiq%2B3z6faf6eiN9UQnjsxaj7ohqVrvGDXSaLnVfNB171fjwUPKwTeVBVjzGIqUZoxTQPPkLJLsOCxHBQfvH900UO%2B7%2BMLJvWNZUmH%2F3tBGT632Kz3UeTeiTE4V1N6xI8fBhqW8T4W2qEO14w%2F%2BbFyQY6pgHP6eFmNXs0S75VIuzycDbg1FU5PQLViV%2BcOK78KZb35FBKWhNQ48qsA8ssOyqqxCiuTt47xDFEDUvqAfXn3jybFQ%2B4hnPsy2BUYHKWMMoN3tFJdU8klXJ3lBS3bjM%2FrUJBu9QE2eizd1hyFKZhAF0bwSTPxOH%2Bn9j26lDmJWBcH%2BOqX4aUXQCEGa7QC48cl8fW%2BtET8SABb%2FKcGeCNDFzHLf3oaWmg&X-Amz-Signature=dccbaf4597a57f4e27daf7cf8599d99ef51ac5d35ac406ef164b008bd0e12739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

