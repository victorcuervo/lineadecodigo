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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBOYSHJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCulLP3Yx1kbrTYWkk37yCjvd10rVO2MOBxrtbijZ0QkQIhAJ%2Bep0scAxCMYch5F6j9xICFIZGqQvw5RAUgD8ZMzAJDKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLJvbwbWO0nWJA564q3AOgZHB3WniOrLLQn1z44Zvd7DFWDpwG5HTzbNCVpQHDHqW7KHLjS7Ophn0oY%2BQ3HxYJ%2Bod9C%2FU9XA74aEA4nKnq3dxBC5FHHjLQ0719DmXRLHVU8eOklW3cnhY3bizQZck6FJUM4bk3jK9NxqLJ0rVh%2FiB6LhCtsCs%2BcvyIp%2BjGj%2FB9UTERDCrAVfawpxczZx9ykWN76nikGjGFpUr%2BqBHKNIJDgCWninpeCBMHAtSys64bf2Q1zWK%2B7nIMSif0p4uncgs2u5024HjefbkOvzzx3lthpThavSQ97XDXpkZmG7mv35UGPruDGuBe1sBC0PTIwhvlStCIOjHG30lcLWoPy3ZTmC%2FsmoLhSYvw0NU4qCHkYVdKPIpBwjUe8JA%2F5xXeM2vs2fiHJFWHW7gLFttGAxxsBqLwk6pU2%2BbkQrCFgdprFhUY4d6u3lesehnkI9NpBVp%2BcqO61PuTZz2ukTs8ihLGwGrbnuP1ZbCUZ%2Ffxh12qo2%2Fp76ZgBupCYgKRwTewo%2F7JrD5jyYWIgO8qSJvzZurstKazo8FQ1OmymMAGT9LyLEjjXSNgw60zt%2B6r7cXoZNPTpGpqH%2Bs3brcZbOSndTW0l2vJsZEFBe0NY6Eo7XDg1WaTMuQp4MqAIzD58trJBjqkAZJ%2BnDBBHWz4iEiD9bcUs4bmfXNZ5zOkK5LaNczHnIuA4ps3Yevfq8lLf7FzIore2eqjfc0JWtPsH925ER1JrGQJOS5vS4olDH9VbULo5rptOogBNNsxChTyD%2BrExBU26%2FLj%2FQWrjtr4T5obxtnaNECc%2BNYlPTjTr%2BIFgs0OyATeHGp5D72%2BWO562G2guQluqXjvJm%2Fe8DyPw9Mk%2BGlJT2sfIyO1&X-Amz-Signature=7c28b0a32f713879ad268fa3bed60c71e806789c36ee0c74543366617c249476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

