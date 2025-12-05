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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTICTNRL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqBmiaopO3%2F5zVY8%2FeUPkq3VooAlDitSAgW3QEtCG3xwIgK%2BCYVQVNuILCuWMlnMtLUjUGtchBaKVlKIAiKTx1djwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFciWF0hB8W0pQOgXircAw4Dvit89d1zN3m50n0AdIykWxMBrQdX4w%2F919OUvnclSHAeW7ufUw5DUo9m8kb71zk1hsesCDp0hkTe8yfeDoK%2B68m4zdmORF%2F0PmJW7KQiPQQZGIRKyqw2hzQXPPwZ8ER5bchmcViEgHLmgTq5hpdVnCmmnrisc8eoiQdCNUdXepiYPGayLYyPD0zJRZLHgP%2Fv%2BnoFWUT8vjnr8W34YxqLhkkGJuJqqV33nxy2Y9ZBjcezGZrBuj6eCRSBem7jswTbaDSKVFH%2BXfnf18em%2BWcqj2s80v3iFZugSlp9%2Bs3JXfn76LTcv9Vu%2BHaxFQYz8C9aE0QKNP5PchBwJuGyAeYouGDv%2FP2pmldA4ESoCtjtsTUiVBPvfLcYgJAKi6pM%2FlcKyQSUbXQFaOpYjBVZJ3oZFSAMF4%2BrLKVK5C2LNcR6UekjkFhlH8UDrROucuxqdzvDJ%2Fs4xh5zmBBwxMtJ9NBpgJP%2B1BgsKxfUu4kwieYrPGDHfl06vKaqnSx9YbkUJf2%2BeTw1j64MX9dI443WCV6DIkDGKH4hkrMk56GKulfd3VROpYU%2FycCpS48%2F0o2YDPLreHk4hTNmJitLbC8acOrM9L7R8zlHpHksjAV%2FUoWAkNljm7fDgC9ro%2FTuMNSyyckGOqUBlFrUBWxUH79yyh9E4%2FJ5xX2TYqf1x5CWUQb0a3MhAHXRkRh%2FoEVz6v4R9FjnVFt82e7x6sXl2Bvz4yIgo27qdKI46sBWZMZFq9tiPPFaIJPvjE76Yxtuvq7gvp1tWnVUmJw5xMNgnRp80kpged9DSVdE4Aul%2F8xYJ3zrfsKRphR6IWayXgFzwdaDk0rgEkeYFIKPtLF7NFIjhDRm0nbHVMVxDXgY&X-Amz-Signature=595946abe21ed64ae264cbd50e42733cd831bcd07b0a46d11075c87ebc9aceeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

