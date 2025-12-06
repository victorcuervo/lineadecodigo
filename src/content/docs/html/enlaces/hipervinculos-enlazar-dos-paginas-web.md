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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L36EIBB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62HbD5jeMJFedIxHzexVjxT8EZb0rNjFdm6tYmg9spAIgf8vsjh2VMghy76P8lZ%2FxCpOp0sbKUCejudcin2suSJ0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB2j%2Bot7Zc2kOUGePircA78Itn%2BWnQAUjK76uvFZ2p0fVQC7xvUcBZLH9eWL0WA9ihZcszfJwY14%2FpPKBKjdMqj9%2B1M%2FCsxOrdcmImAE1TV%2BbDx1gZUkULCgqaZExcqahOsZrGwy7KuHLEruYSomiqBD8bi3kq3Vq8j%2B8U5rBZGaaAX8m%2Fynst8dKl566U%2F0%2FBZONIaKSaOtfAR3k1xH7KYTEQFGXo87TZF%2BnCFSbprgGCeLIEKWAeju3qtsNIgHVih6vEt1jUw4G33qyHNsBXTj%2FDbtODWxYjaBzqsLXWyLdp6Ojejsb0rcpZphDsQxjdcOm9CsAjoSKJHj98hkm2pWC%2FNLIYMQWYY9EEGB%2BHGFlnrsQ60UbPAAEljPcPUWGbyfLuEa5Fq6FrHVBR0EwB2uQuMteVKDpaCyjkDMHtrv8%2Fe5Ix%2BDUwvKRdZQr3w9lc6uvak3mLvhTXzl7dvxfJ%2Blnk54%2FMkJU6%2FcsqFEF9JCUBBosO8d5JrWdvvVi2lIKedZLMLxhnygZ9Ig35mh%2FS59llf6HyTym1%2FZATQyDCWERRGW49ubPvu4p%2FeTRr5Yf8OqsRhE3r5r52fjmj8jaQr6o5x%2FNf7eNl%2Bsz1MuiTdM6mbSedS%2B54LcmqrFekLZRCqCeQCzdmFSxKNsMOinzskGOqUBYrRwdniznlKEEWecdP1IfzLO5kAJ4v6%2FIp5c4ss3dHQt7tUe%2BQ%2BSfORwwjMgaiNb6nKOTwTTpL9AulgjprcftkFFaWnXvSHZ3ElRPDXRoLhAOSgB7n0rzbSI9nIKlGe46BQdaQAMxOvTtbDSmCmS5ey7zlROCp6VmeM12kApctnWNOFsImRz95c0oIQlynUHTtTuGMp0SFo6EtFWexJSRwOxhjXL&X-Amz-Signature=27e355a9338d705956e17ef032619d3990ff23a900936dfaf86b799d431a2d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

