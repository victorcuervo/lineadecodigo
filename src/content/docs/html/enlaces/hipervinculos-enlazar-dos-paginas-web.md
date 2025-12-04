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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCYAMGA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGfXZp35XWcJqnJ%2BDyvNhmfPj5sybgrt7fQVhLIce9raAiBui3MIX995wtxujM4bNxn42J4cT6X3qY635PsK5rjffyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMauujwRqJfWsG3domKtwDRG%2BtGDjwcc3bZCmIfHLux1LmGQVxwqCHjdPURYCGXl8yEF3X5P3gz3eEpGzF%2B54pBN3p1NeQVOaFaqO9AW6M2rt%2BwAdoWzBLTN7N%2FEjje2hLLFgQm8jRo83jROHJ36SVYO0f7SAH4eitO0zRriMl9L5UiWdZymnlNsLPlt%2ByKOA5yqhMdtJfPi3LitsJd5s9Ix46UGDa0jwrwMEHd9XQ1Z5aRPqAGgQneg8sRqF95vtdcuPyeX4TxSImc2zwEgy78KlIU%2BvFmOlS1vkYaG%2FlFXXY%2F812YqkyZEj%2F5kbcRQ8Gd8QQgRq59jq2taubv9XbceFP8jQ7Zl2W%2Bdr6Gyqc1EgKK3qZ6ymdw7TVKmY0An%2BdB8aL1DfpEPkw4ugf0J6KAZ6cOUnabfEgjdDANiED42%2BDownasGI1kthO6a7JYP%2FMpfv8mhtniin4ATVwP0AEoQ17K5Q4p1XseaTI%2B1gn8KR2anvUIlb87lfxFSd%2F42Oq0odVyKpMNhe8D8uRDWCmy5Ylo0UdNl3h57omOylaH9UGeNFqSva9DkODj%2FnfwEC4h%2B1fw2y6OprqrKHHkSeafAFMbTaoSWj%2F0FUg%2FeTaD2k2zIaLCzUAflxd%2Bs9z2rb6WLoj15H4mPlCoyAwgsrFyQY6pgEUGR1PYzj9Y1WBApoacy2aFYR7ynzK%2FI4vRXwUZ9Vmd%2B29JIIfsXX0bW9XCnKeTnp2FbCTUs%2BJmAaRAnhE%2BknX9Y8BCSrRGImnDglxLqryyIV0r8SHVJVDKn4oDZ4jumI%2F92JpjU2rD5OVSaYsDnrTILj5%2FtV6%2B8lZQFPggM%2FiJ6KUAN7sRQYt3gWQd34MlV40btPyjyOPzUYykkSNFWBo5wqoCAtb&X-Amz-Signature=822b2fc8cd17fa72b2bdc17dfd2dc0c99d3325a3262e5173abcc1639e15ff05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

