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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXJKWZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF9vJtip5bNnM9uFCIr0wgcXqOrAZNRwvfB4mzQBexNzAiB6XKgCpVRsWr0AgGi1bXNu22y6ulLGYqCZ8n0v%2BtXvgSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtkr26qDe7ZKHRKm5KtwDy5CGb2H0gdvd8QTeVOBjesg0cS4bAG8Hzx3g5ezpt3nTjGuiZgg0QSM5sfFcXrBwAHYZyU%2BATqsWR7hXxNf8x5073GXe2UoCai%2BnP9ayBf4CQcPuo8M9lHTOXAG%2FPU61PnsJY0VbzvQacVl6pZCJdEviBE7Z58T6CkwQPUKvI5Too9K%2BF5WBluPLNVJRCBOEzl8MqL5NFq6YoQE52DWc5wtkZ2uSw%2BsMOOerHG3EfTNeae9LX4rLcETzZs9GmLWLdbnxWaUsgpn5JxPW4R7bibA6J%2ByJByWDk1DWGCYfuSUJfnGZMYka1FaKPJ0CrdHQBkQfeXXSSoy57BsrXl%2FGF5oPJE25gxc1PLpL1iO69Kiv93%2FE1hTgwJEzdmo3VKrkH7EGCsA39BSf9yHagJU8yraDQXAUS8v4JArNSt6Xz7w%2BlZkSp%2F9PPuSef5WKoqBn1xpt4hZuim7Rd336bzm3voctrBTIwUxunf9jdHhy4R%2FNuo6Wd%2Bb1M2SRholSyFTYPPKvgjDleX0JJtqRkeHZxS1E0W67iWuRezrbiPvalZ1S7m2cZtO4bHJKbCaJgWPKHPzPGj2t9KjKttvUNmLwvFYwIX%2B2pDqWp3XCIp7JRru2iB6724grFE4FAAQw1OfEyQY6pgHQAvAKFSg2ktfOyuPu4sV4TOf4jft505p8eAz7pIOJshDoULdzFSFrv05u9tTO2TXx2iLTGM%2FBJLREbwi%2BEtwPHgZw8GZXqnLMiC4Y38V9I%2B41j4tqki8EF%2BRVUBdll2%2BmJgYolFodWJAYgj2LHuDgCnoNY3sZiI33PA7XgoBvxRcPOxlsPJewAKin6w6mTygh2b2kUcXS2bMBZfJMFPkvbYYxPCIf&X-Amz-Signature=6eff98fd3a69059db79ab40fdc4195ddd34f9bd54160f79fdd5c666536102631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

