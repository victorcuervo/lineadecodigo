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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X76R4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCssTXaChqZ0TD0NWjcPFZOUd6W33oCbThYPP42difxUAIhAO8%2BPPPITAy4JFslqEjwvVBmFqW9iyZolbFUNViOPYVLKv8DCG8QABoMNjM3NDIzMTgzODA1IgzJef5TelA1Cq2UW%2FIq3AO9%2FnMTbGtzt1vj4TL8npPO965Pe86LthlkqnPNwJz10bXEGMLAK0otqjDrDyTxMuRBXDK9tQ8uV6oxPCLV7r6INnp56k1rDf0ONpEiti8%2BrkDHamRre%2B9EJdhbKOvtqCnl474h6GxYahyOEntRYdSwsdrQCUs%2FrBSdgrcndNXUIb%2BWdE2sIMrVCHsTawwmdZwljhD6%2BAZ2yx7IPlhrYkJd%2BPA%2Fp0%2B2ZNxhiXUIZkXhZtE%2BPhiW5WCRRlirj1lOntxVWqt6ta9r%2F%2B5TxKCICOUVprdntGRQNROq%2FBb0WPe9tPrP%2BtK2zgNEPiKB%2FqLbAVPoIgMlY%2F%2BGCZWJxjuHkNiR3kmjG%2FpVNBSKxJG9TsG1vu2ktSVoSEEZQNLVcJ2Bqbmj77yG1sAKxmTE9nA5mk%2BhnZgQtmC8%2BPwgh%2Ba6oQ7RmBDpmFrdrNlTrnj6kRRas8l%2Bs6l1EELYTfXLw2BxSFFp8GTTc%2FRAvM58eMan2S0G%2FDzKad0rru8EBkiqNfwk3tPm4BMAg47cGr8IeLSPEEnEox8UN0DAmx90PTuBUxTO%2FD9n%2BncmXHLfWWJt1uKNY3C8Awftl8qhXc%2Bd3iLselVkDUUyLUQx2%2Fo%2B9K5nhhCzQovy2Y%2F5NDkNg2MP1DDN%2Fc7JBjqkAYy3Wryo2kmXIQ8XOZix4JhuP2T0UV5tgNDFr4LB9mkJdR1GRJnEUFSUqst4YOElI3jjv09nP28ZlsJU4zsHBp9cOJMn04wI6H%2BSrXQB1CKyRCYmja85FsY9PMDUefBWnkqs32x%2BjX4I6pQLZ6Pr4nzwfP5iDCT%2B37YjQyxWidy9g3D8L8vLDiCMCaI2PfAFzCq6%2B3k5hzeVd5i9z5fHnQ3OsIk%2B&X-Amz-Signature=e5608d332131a35d967b772dacfde4e2a41a54a31f15fc35d418694dc95da423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

