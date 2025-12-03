---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTR7CDQB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEdiLtwphzQ0Vhh6aj4o2lYycMGztuot1PExxjH239iCAiAwqXyGYBUX5AfV0riawLgPe43yf3jWHST%2B6yzWzj%2F2kCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMGKhtjDFWbHLRxvR2KtwDYGudjFNoCeeJwz5Kp%2FO1q0fIjtYDAsaT2WY4LYaIVB5F1ccMMAL4qLllxvBKLzOg%2FQu6WTxJLyWcksM8DjDJt7wsD9Q7FxGdusMzdkvBAHZ5PPa%2BkkqvISkteEPrpxSRROidoL9o4j8lkyuPiALZda2r4MEMDKO%2FhfAYqzEd1YIS1GzAQdJINLelRVDwVIHf39HMpH%2FyWa%2FVgtvB9djGnxsWYPgTEoKwuMxyum3Hy%2BfQCRQ8labvfU77I%2FXNrDK98BnwoInWrZykTjQEdmpRAxREiLMLTbrcDhk7uYECwM6FibgjVjR4on%2FsJdQSYgyNmBK0o98yVsiLKYziWIQAiida6Y7ols39RHJ4PgFjjp3%2BfGVvabfiDH7Yneam8CPCXAxGC4CZ7IyjJLGvu2aMW3175msF1t7%2BnBBTJ36yPmSJ2aTuwA92xzuI50oL7Z7k%2Fjn91Am3anSNIKYHa0hGHK7IqGrvOgyyteGiXh91XqAXwY8gdtd91nh0VCoj1zstp1VThCr8kcI7tbusMj%2F%2B1h4LxtK88sieUBtanq%2B7T%2F%2F57zq6tf%2B5OWrvQ2ZKfEr1oVlCk16NnHkcLCr4N6r8iJh%2Fwrro9eZxtO4Zi9bQst9QEnEVPoR664WTuhowkt3CyQY6pgFfuJgq1yROmo9cP889KPQXtNIvnYjtKMJuoKFDm7r5RPcs8%2F2Ib3%2F%2BUCczKRCPKDmvJvhAqDEu2D80B41MaorpQu%2BkIHt3hE3kcUZkUs2opEpLU4VKmnFvHlg%2B2CpLrcsuIP0000LplyI2X7p25INcVIo3ykJW%2Bfhs66VaFGVo0KfkGC19%2FCEoa3yh4SdR%2BRR4oYj5ClMMNDfK4BCPXssHCfpy%2Bl8X&X-Amz-Signature=d789dd5a4597275789f58086adf032edf43a62190b0233a30821137492ed329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

