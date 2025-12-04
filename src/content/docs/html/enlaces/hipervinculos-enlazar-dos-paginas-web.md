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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZLCLUD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCfwuN%2BiGNUigtxK3Jy7Dvj0noRSFTSspcVYpqHTmoT3QIgSq%2FJCU9ZjTMar6KpBGqV6zjmzchUufNZp%2FwH%2FIREKO8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFIQZ1c1nxmAnBlh2CrcA21NPf5VPrm%2FBAoBHDOO4xpdHT8lfIZqNLm%2FFzMuENYFryN5dToCQ4yv3%2FFGMXlyC%2BNKIi7rsjoJFI%2F%2FyXGgQJqYKoJIOgryakzS4i9pF0%2FunM%2B1bbUvSN471%2BTc0sGFo1zXiLn2zu5cshl4wKmiHwlE5mMBQZPy5zk3DwsBI%2BRDcF25VzxPeHToRxZy4ep4ztI%2BvImelv8cUOjAMhbMPZZGLifgxCYwQsUp%2BqAwwSQNrdcd%2FoO%2BbUrQNmZF%2BPfS7KC1tjQZE48ABaUYnqfZPLQCQpMWJDlkxP2jjMyBdzdle4gTaH1Oc%2BTmygc6%2BcGNajU5izkLF64xpZ%2BlpLaDvMbc6KYGPoBuxFv61WRoEDT9mU42%2BzfOUUqcrO2e00XNUIHtbFXPw%2FmYl7uyGLKZFQHPO8YFz8jK5Anq6DRFT3I82P780FikMoR9BDMgYIQ79%2FVe2zmX698ZIge8FZHgYw%2FvefjWbJ2dSDgJT3ePUL1wsQI5ZE4Hr1KrtQ6NlkO9JnMwHCqLGrtfwlPUr7kwhjYGfZk38mP%2FZnSD%2ByYOOKfkZDia%2BZv%2FtSgIpU0zhJ7mJr0exGCH3fw8xGU%2FT5r2IyIvfnPnQDQSqfyMOU%2Fqpjbs315yD1f%2FVHdcl0SJMMCGxckGOqUBJo77MFj6DqmKEoev%2BYLU9hSGPwAgNcJC%2FPSqlMVrE4Gw8v%2B1l%2FqQWS5Fxihx3RM6aWcY4OEMnCIh8b5Y%2BpTnSiZypPalqsKgHVutDPwaP1AEjlUBqxyB6hen96VmPMwx01wam8orHG%2BI2Z8mdImrac18Jjz0J7f%2BOn9KHzAMksfxg2tm4KxT5QaZIDCBBTQ%2BA7xleNxRkMJctP6baKLYAoCUT93y&X-Amz-Signature=6560941b34343badefd79109606867c1442fa3133b3014081367d03340f1d955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

