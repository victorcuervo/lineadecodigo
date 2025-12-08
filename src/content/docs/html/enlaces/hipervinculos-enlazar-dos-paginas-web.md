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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXVN5VEO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJc%2Fi2SH7JD9%2BCh8UZALWjajFM%2F47L%2FOBmySJg8VvEUAiAgXmGD6rDDxHLxLpzqoI%2FVmc%2BuaP6Bke3Gk8FOtcKYUiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLA6FHi5bT8FUMcgKtwDVIDJHT47NKup4fX7t4Jblzao7bZ8T682qbIvDQzoyv%2B0wSGJtyLiKmpCo43I8NyJFcGMFyz90SYFnwp5shuTU3opGgsNnwknjEyti7mDGqW1NKgu1Z6dyeHkcP%2BJHq2Iq%2FHNrEfc68eSm3nTRavHXtMlJs6gPDdfXbT4C%2BBYcYT3IRX4rwRcnyg7FnJ07oC7Z8AsmYlEbcwLpBSKtdG889d0AJaT0P0cIx6UtJAtz%2Bt%2FmXCrc8fFRSJNwkA77lLWA2W2KVAi51tKNCgy%2FuJPvF29E7uczJiM9OrjX%2FR4p8n1f0mIC3bYd32qWNb4nispGcpSXINsg7BCFJb7woIEmjj%2B366%2B6n3PYMEgCakDDYoirXEeQYnTEvzd%2BpUUmcjCmmJ0Tph6TQEZEWUfogjpPXDFZe%2BjQpO60fSfWVjEo0fRpNMZlj7Ev6PwPg%2BxIxnsPG3vVd%2FSl1a2Q7DOCn0U9L9j2K0IBMd7ZVkuLHAF06rm5CKWqcy9TCGvuTge9XYSbsE%2FllMBb0uAiMIsUSKmwMIDFcnjw9cNBSTj0rViNLm5Kx8C3ELVgc00tiqjv1CAXsfNUFmPp%2BloodR4Et1gjt1AxBF40YsUeG1jSxvv19jGkn5lakJNeGCTcsYw09HYyQY6pgEErEuP76v6uHmtsiL%2BGh%2BKnDDc0keJGkAsbVnyU7sMOei%2FBBROeGjUnb4M3KSH6KydWFm%2F7wt8jhTHtF3ZfCNvWsoM5uEswDmd5NO5DUs6hxg3%2FrIyy63KgR4jGBEbpQYEF23RJ6xdc1bRJNvBjAGXhQRE5kq2QQ8NYO5WP5KjVtCGMR1YFVps%2BLK%2BhJUvxXvKBrGAI64DIItjQ1d0iRm3XfOTOQHn&X-Amz-Signature=63eece0dddcbd469df56c801fa943743790119a174b65b78527e2579387c971f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

