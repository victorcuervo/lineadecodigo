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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JAL4OI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSmIvsjGwjWJFsRQx8AIUVEjS27OCI8Db8iu0uG4WWgwIhAJFMlCHcEkC%2Feu9qURSVTFmYiRl14BenNe8P5Xs9peXCKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU11cZBVk%2FLMTO5Jkq3AM41G1%2FDsCpqQRAyM4ht%2FEYhpnvWVDRyJEEZEFMYEtPGksoTR%2FnYtfbIyxFG9iW9CcWUoRAHatVh4m7SYZOrZd%2FJRoqKSbA%2B0SWBeHdLiE2P3pgA8v6mIWUXK3zWI1IW3Ic75qhNO%2F0Ck51hru125XFKX%2BqAysKLHEyLrilFaxG34aTXWiDQChrUx51hyVzL3rhWCczS7%2B7YYsOUCmtlOVrADHONU%2Bn07LQZnn4vBY5TneCmPLDBbKv9k9NllOaw280EDxTh0LcV21Vviq04LS%2BjHuJLPnncQMEqhXRJmAnMHzQVMUjnLsFlSjcdTN6laUuK527xZiTsmWHV2IaDbPnCO4Nx%2FFXlXhoNOIBR1rpedaiE0jdCJqSCy1CxqDNf%2Feav2I5Cq%2FQuYA1mchKalWWzUK8dbLb9u012fA4vR2Nx4xwdDeXL8pFJCH6%2FjntBnmSqSwxiwa6AInL4clvaSvXUAhx0W%2B6fpfnyt9b63NEsPEUxT36Kye%2B4bHC2zdGafn7ICjXfg5nGdjc5%2Famw3jMgtdr03RLKZLhZs%2Fx3vLkAz34EDxyEVIwWi3KZiijBALQwfCZDeBWzsf7SrABXXTHqyLOf114jECVZ8TNF7KvwoEMF8Vy8oiGeAQYMTDNtNnJBjqkAZ4QRRpXrooxmJ6gNRsKXuWTM6qqy8aeoznH5jYklfZklpVx2%2B2lgs2vnAVAVNNd2rPTMPdAq5C9RtXOQS2kwcAep7cammEqJE7lAVA2h2ioz1JoWQt%2B3NIzkCANnO%2BggSTY1QwkMCUotBHlX%2FDkzEIMPf6AmABuK8tWiysb07hGnz6vjVKScNbytMScwzrK6kUOQkhH7IZQKp8Udg%2FycuYOkLFl&X-Amz-Signature=4ce0d1508270ba5fe8a45e19fea24a5ef8bd40b905795dc9c40ae350943efe44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

