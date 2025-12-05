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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRYIX5DV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVxOGgAWqYlWcsJ9HDYRcikQygwJ%2FWeWexX3pH7ZclFAiEAgkqRTxolXVUzyauKpceZqVhpT%2Bc2Ehgd659hOV92wYIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDD1ZKWMFIbXjZahGFircA0CfP7qiAOAg7JbZx5XvTEypCqYYUA1Fp5KxoVTZnofWZ73utCi0yYXbfS57Psylr1zCGc7%2BV%2FMVOcn9Kc2PeYbWLxm2zUAMBs6vF7yVcQ%2BLc1D3fzO4J%2Bo6rFB%2BVn0xkbzaPzlSQKGMeolwjOBD4QRkAR3WS8cNoXwM7zl4EVre65tUHOt7SoqNFmraN3PjjG3ek18k8%2BUMzAcyTSzC7xDXaAb83s4Wo%2FYSpyWJiisA5JlFQCu5ElczxqpZhptm6Sbx0l9rPqFyhzQmjXqQ%2FbZAv9iLW8Hb5%2FYkXtdF0Gx0pMJn8uKnTi3BLQSbCn1YJGCRRFp%2BwJO30zSj5MYR5B0ikLoDIvN8ZFS88KcFc4uZtE58ONe%2BZr8H9T3axqIEQGQ8J4pxZ00QhLJqWL2qeTEK4On1pL%2Bdn9u4I89WGXjoWmKtjlh1Io21%2BalEStPU3%2FqMpur96SL66ltA86alHtWnbKPnZtTXLCOskfz8g3L2OalVq3U51%2BD0VlHvmH8OqVRUmkR%2Bzy1ISxwIXNqCinArdBucOsc2ubOsMQ4DVevZGmMCqCQc22gynwoTkkOefwA1FwfnYoo9AsSV5iqzGOMO22NpIO25A50qaugyl%2F73V7YfnvdBx45G4CWOMKH9zMkGOqUBf1%2BxMsoNfbiZyi0uRFXDL12PM%2FEjtzwI9B3S4v1hHOYnWs8l8NF0VbNaasZvCAHWtuzn53obvwhx%2BA5nJ2TwZiK%2BBQ%2Bj98KhyWZVd%2F73Vt87uh0wTbX6D5PPILhrCci4t5Wk0ZA0d60TQUTmVhrWtQyrC1DrcvmrohzaGEWIwvEskEFlIL1TCEtuLUEcM6n19hqgSflTg%2BVo4xruc90Sfclz%2FevU&X-Amz-Signature=a713f77952c9b78f4869291ebe87937259fcf9e083c8305eee173c0c3446ca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

