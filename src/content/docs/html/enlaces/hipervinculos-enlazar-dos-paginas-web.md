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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZ47WMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXcfh0wdxPWzk%2F1sKHWWycoubEfLIKsSLrMIT%2BsN4rJAiEA6UBhbI0cm4RnUCTuqzI1qpTTeaSLt78XZ68DuYHGD08qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvjVEA6JJadrZZFuCrcA0Ii4wv2exV70KksueVHd%2BlqMsKzGDL6SxgsG%2FwS2eDAkJ%2BbTRC8kuKXwlWmtI8C3TUBLgt3l%2BRg8gLGF4W%2BefeVX3F0moLieODcHrblx8nM9wGOmuCWKNi4aTC5BRCRa6VmQS64e304flrYPRBF3dpbfblH3BM5Gj%2BF8BVKGTpOtqAJPSCDHXRn1zpb23d4wBvFxfpr1PBtIqPdILeuygizvO64hJz1Uwo8bOQ%2BHp0MvWgnQrqHIVrlGYw74QDJT5EU0XwJ4Ko9rMEizRGQtCNBg3Uw1Ngd3fV7m1yv1jUyVIg%2BW9Q3nM0atyMq%2FhhVaWPqErw1gJZPTHJQ8F6ytdxfUueQzSQwcyMrQCbxKzFufVD7uirrwqVQWuJUWX0AeQ1cMqVGmSLBfZw1dw0E%2FQopF052MEUsHDKQDTIkpBpcvdVAquq6FFNZGjhLPCufns0S1ichUb6h9%2FdKo4sHb0FlirShe3jNzzZEpaHhlALf4j62Q%2Fe%2FWTYJwbRyAE1uGTG8O%2F2qz5qfFaX0v5C6Ou3JXQepsH1F%2FvMYF1XiKNOeqcXsg55dbEms5JWWSLdd9WhT28ACej%2FgEWjzuW5zoRXID4AkjxbBHegBye4frUKF1JxbQOiAsr4fFjawMIjR2ckGOqUBElzjSozYm73GrvRos6MxnYIW9FUSr9vkwkFjhQfnBkbkxQXqqW9QaUFZteKSY%2BZYFQ3lIgyYIJ1M4njM7A7MscrYZNDT4tyY6ShB0VG2PZM2NX2xM4Qv%2FyBEVNt%2FP%2B7MGABTtlqqeoBamnyJ0ncCh44ympDQnB%2B9tUsWk05JbPW78kBxB85idmh4I8R1xsufix85smAWNIao3RCWBlFfPB0VfbwD&X-Amz-Signature=0d2f7f08907bbc4beeafc5e99c6736d86eb3fbabb2e0703e39b9e12f5b921e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

