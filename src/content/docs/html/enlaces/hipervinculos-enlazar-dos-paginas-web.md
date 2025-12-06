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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POG76KG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI4T8bfFUsyHf0POocPjqAxp41HWxXyGGl52UNmXy9GAiEAoHxtPrNP7XTDYUvJ%2BkJBwh7bWSiuA6XU2WLN%2FAS7OoMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDILtON866xwEiu3pSyrcA4tnUULPakJx4fdwIhUD6ZZ%2Bux%2FKPsO3kZh06KhMt8v8Cuz30ETZGBLyiLEIubGLKIdtUFIqg3Fvkc42HBNSOvKNkTVA6QiRSTH7ejvv7h%2FV4J3Lj289zvUvUh2U6Wu%2B6%2BqBzoztqIscZt%2BtilgTrW1KZw4lWztsnAa2KKkQLaO45ymrcLGGBjpK6GRatx1fCvE9VRClDSckOC0AFjfr8Lc4z5DxnHIawXWU1nj9wD6QbMnYnzT0QXPyOG5BLABY5WYS7e3CcxS6%2FvzJfpqkmMqNMXWE3YwaEb%2BdZ5e26LQ6L22pXpS365EB724MxrM5LmAMST4kLIDsgNfio9Bc2Thn7G%2BybjYpP0DOpiYPpUviVARBVpm8hKcFJcCI5aR1VhwIO5lg%2B5NTT1OlfDFgD6m2699bRYKgZIcfWqOlSpIuAcw6NOw7cLNbKhwGAe0zvxuJGpoO%2BmkdNPTBvzIQMAlCC6zhmw2B3h%2FAdmm5rano%2BxwXWb%2Fr4Il2suv3SMoRI1D1TgHllP74yb89DRicOPUcaF%2FxLnsMySqbqFb%2FMy9OOCQHshI2yevT2U4I3YPhNahjlYGHQURPgezyfMSK4Wfv%2F7BHL5pTrz6ZyH4F0iF7cejGob40T%2BKRGbIyMJ7ezskGOqUB5A6%2FTym7IJL5oYe5YKmQzQNLEyFvApL9XRPnyK%2Bp27k133CfPyJSqpAHfu9dPtZHV8%2FI08WhykFpXyo1FoMcKvVbDc9gGAbIdAdqnCItsvK%2FfafdKFyPnpvqzf4GwqzlBl%2BX%2Bkm%2F2BmIKTgg124HdN8Fx9HLbXSw0K4MKZkzK9OTOh4fCRcFkM00M4UzQKGyNASt4WjbXiBXTLWqA9gFdazvYZeM&X-Amz-Signature=233d60ace43e02e4cceb04e93abd5fe63bc1672e2657349d01012c1e93793b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

