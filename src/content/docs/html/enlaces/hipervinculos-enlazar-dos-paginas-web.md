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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJE66EL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSgeXrc%2BDlkbbtK1GdJlTGtvl%2FtxSIAWIsW9yBEekSNgIhANfDxCHTrLYvrwSywFlKriEvUyoc2spKz8Dnk3QjGoSUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC9zYhdWoM8SHaOdYq3AMld%2Bd36nO7wr7vBgjQFl3LspBKDD2ETRo%2FLqaf5R2%2FzrkvAxAWI8Hbf2%2B7mTK%2BCMMG4wTa%2BsN7zrk4iKy28op84%2BlYWzkVHPQheq%2FHhIsCJP2p8hNA3vdjgyI10JdUfcEFnoDKDxOpX1im3Vw9WgkVozI4A8%2BEeKXQgxmwZKBHx%2BlTGMsLPwKQD2FnxWt%2F6dZLnF8MRW6MnCmXJ9eBLtaKp7EwuUXfRRrG%2F%2BkX6GkFsDTJym%2FPslVOXHVJxVyxMiiamWmlmvnutsLxJmSDrGLpGwgW8SSz8MNrh3MQHbG2H1a07ALbJ6cWJPHWi9s43xCxJRci31Iueb6v2DMDNAXLLoG%2FJnAT0yrZgO%2FCDC21QFxz8HPqkmOHFO92koJWoK13F3SUsKn%2FiXoAXcjLLgi2gNMjEFicQJy2hEbLOk3fCDEWD0p8%2Faw0g9qStEkdBMxy3Ee3Mipk0%2BrG2X6SrYSlS4deEhaUi5%2Fl5NahfALOuS4dbS7AEcePGoTakZ%2F5usabGSz4E%2FXNWbylV1jqCsktTxhGl%2FlCGJFILtoes1b%2B7c3vVZzjbDs1VSOV3CAMsu4%2FJMeU9xiU7dX2rbx4DK48HvUwlPoeT9X%2FH8VMmbsAesWYQ8xg%2Fgwej%2Bc%2BTzDbj9vJBjqkARpkbk3GTCjjucWHYI0Cqv2U5wKe5XAk8bgQhPz94XDkl6hmJ0pcm9prosP6sah6p7Zbu1yrYwNEVavqvmf9%2FtIyIyxPB%2B0FbgluRvOw0QrsyINeE%2Bq6Wh%2BD9auSyt8D90WULyRjeQO4PNljyZ3ghlLUTtTrCQGb917cd7ss%2FL2lAD0HIJH9u1iQnW27038dH8Sx626BSNH%2BSjcRwquzTnl1tVwa&X-Amz-Signature=a18cdab90b2434f81a3e85c1df0d6dec063ed6e2aea7ee2850fb887ceecc6d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

