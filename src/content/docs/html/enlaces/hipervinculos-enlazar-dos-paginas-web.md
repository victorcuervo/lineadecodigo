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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BIWR22%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPtSkeHOeNfevPIm%2B2PNTg5lBjuSN9FBE1HpXeMTq%2BEAiEApiywu06f4gRArH1b%2BCU7t8QGmiC1zhu7TNqjLyvt7u0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmdXa1uc31a44Xn1CrcA3Y7eEQ%2B4OkiQNJ8X4Hhq6IiSCOk4cfID0PzmXuLV4wuDLY%2F5ySp3VrZNiKUThSJlk7X5qzeXNJS05yKzNq6vMaXjAXRB12Sl%2FsxQ76AmP3D5KLCDbf0ojL9BbpxZwAlpm%2FYq3fwdlFoMNKp1c2fVZ%2BAnIgCMM61O45VeObRmthTxlL08WdVQ1Mor%2F%2Bmsfl7TpuVO96eBtz6qR6Qd6iqSqfDJKwBxzU2ssUAyjJ%2Bzh3l1xoBdRcU5fosOf1UeB7RtpdDR1nCaaSDwGIwkAuftAUnngoHlxyFhdtjcqPa03tM1gQCBD30szFdXou2chceY01JhypmlNaUcuOKUzAIotYbpZqPDl6euVRNI%2FbdtGkkKdDfPBkTdbP7fKloLqOPNujKt0b4jbzAiaNHKeXJmPQsBB0%2F9XrBmpxLzyNvjIbLfP6WqBpaPAUZqRtXsN0z3v0mTAQy7vkgu%2BHAzOiTpUKzIQEIIPC5p%2F1kKGUvQSnt7ZPa41LAAwV6s%2ByYR2NYekri%2FEHPCqldxzGxdL2zi6lRx%2BEro19HFkad%2BleapK4BV%2FSnCF%2BF1aX9CCa5FSMio%2FeTmXNg16oTAECtL8BYWCZMBuqEErj644wTn4OreGc8j91FMu%2Bf%2FhVCCQymMMqG3MkGOqUB56HZ0NhRkZbtwnFFnD7frjbp7iI0wfaAfG97P103gT3ijALuMX0M1DsdMtCCOqC5PZ2QE7J8wzMmgV3etp%2Bw8SSRWcMxt%2BkMHLiE46B3RNvVP1t0uEfeoy6wYV%2F0NqZC3VDJcBoSfhSp6U7AAr6%2B1hov3aTWmeWPRPlIPjJym3mbUXLK69qPGjYgHDKB4IjPbpbxcr44QqvVy5en48dWU2y6G2pO&X-Amz-Signature=8b4d1cee2114441a93076e950a1972830872a0664229719c20602a2275ddea27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

