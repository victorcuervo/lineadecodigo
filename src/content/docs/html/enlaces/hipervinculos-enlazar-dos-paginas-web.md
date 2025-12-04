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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVPW2DW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCID6nk6XCtuFORnJcUKCsFUR%2FFnga%2F0hwW2j%2F7H0F47RAAiB%2Fy953qI%2FK%2FNzu%2Bs1FPFGLXH%2B2A%2FEuRRAdThXsmZXYzSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMC3BeRY%2BiTIUuMsT%2BKtwDVAs6BG0oKcdU0tlgBlOvgzr01JZm74Ca%2F9UOPousPVig4%2BSa%2FyCtBsh%2BOxBeUkxMB57c0EiJGJTcXPjwmm1bZj4UIx1QUCeQHkD4YrT5ApvSSFvAAC2PA2xzx9S8ERh%2Bs5ezNxSFJ42ldInjGYlAYZu8fgJAXQzPVRoYNU4vBbRvDLSsv4QHRgL%2BJxl2KDU7BcTzM5gP%2FE%2FHW0ESZ1UOovZsTTKWjunH4HTLJFQ4aheTON42e3FjzT7YovszKu4U2Ut7y6G0RIUDEGJYnTxZ8c7nvHqhUIyhMjeVUjCbfmRZM3o5BEUZHpF703AZdskg6GB%2Fz28Fe5xiJizKRIpAfVT1EAB%2FcyvTx9mVIlo%2BeghAa6lzIrBcsia34JXjreMqIA69oW7F3fMuHVNBlkyit4EsSezIsRPma80D5nELjply%2Buo%2FTMKWLRRwqanC3rWCUcohSnpHjvmJHTJ3P8fvRVfoM7D0vNz%2FjSmqZy%2F9IXLefeynvufDY9xC60tVuG6GtPQjQ4QHw3r5wy9m1K7YRmhiS1Picyqbf0NkPLwioDiORSJ10LNrIcbEct8rgPVnsChkn0nQ2KJ99wfforb8YjbUa1iXZE4QaGXNXtixJC6RYEnjgYY3RJk8mfMwur%2FGyQY6pgEyqU%2BD9xv102KzkhlOKcJNE93x5XL5xmqYn%2F%2BfqalGlpfz2XVDaHNFJxHW0cCt%2Bz2Ml9wXOUTZYMLbBZvbXifsu%2FQtIDhrtXG9LY5elRM5P8vqIJeVNjGUT4%2BaelIBOib4rspvJSuFgghgcqXQOS85u5YB8yIz4SzJvwM9B4lZriXnhZCNxFWAQy4OAk1q8ktiSI37nJ2oWrpMW9ZzeiSoQ55V8Qv6&X-Amz-Signature=04d422113ae2c0bc48fa655478b128354bba3fd92f1a658150f347a26c1a198d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

