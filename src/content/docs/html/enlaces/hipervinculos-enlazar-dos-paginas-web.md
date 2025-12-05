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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBH32TI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyxZt5ukSxDIUV68lcTGGk9SfI%2BAQBocND1MbR61ZXvQIhAOTQiXTXgmg4w%2BGtgrqE2jJ55buzL55KKlT1hlQClhsWKv8DCGEQABoMNjM3NDIzMTgzODA1IgyXRAfdG%2BXvHKsYgXwq3APsOQUcM9l%2FgqDrwFIKYHdEIVc%2BxeoJmc4W6TEj0YtPZSbZlTsysruRMNLZ9PBo3kYYyG9jDecV4LYWpVghQ2HgBuD6NCzytR%2BYf87EhS73ljs0Rj%2BcX%2FT1%2B1r4QViQU1yGKh7MmlE4YN7igipb4d7Px9YexYtR33HfKxlF0Bm8mirFqZrVw95W5670cw%2BpgD%2BFqwye56F5Q98EIPIET6Xw4tP%2BQgQyfFeJPOA1drnWQ0wxJRPcQlgDqcbAI%2FJmTR%2B5%2Be6UgvZLCalqxX%2FQNj4A1kj9b22mFKSJQ4PbtkCwZMUkMwXjpdDp5OsO95r5ycSxjRzkl%2F8BXWUwM3YHS5J3SUX1qFDzsXGbTxMXGZZ5I9Dv8HwWCMduc8bGjLVHZYOPrWjsOTeK%2FWmmxRJWNWSIqCgIYsBu3l0JHJlaNatwOu2ol1xUBr7VBOwo1fySqwzlDC95W3j4lN6th90aDU%2FOtGc0%2FZKT2KBrcYkI10Y%2FCocLz3BcEC%2BRCvu2gJ0kIb5aLTCZLza3wx%2Bqe3fDl%2Fjq3ETDsBWfPO4avz6dVUADIXg7yitJ8Jf96tKP8uab7xII6xGz4lO%2Ft7VZRZneIwEGBEnasf8kobAsa1c8%2BojjauBlhSt4cteFRYNXmTDG9svJBjqkAfJUODr3Sy5eK23mMyz4PqpVzgopqEJxH6QiTZ9BM%2FGnlNuKGFmKOpiDbiOeT%2F0dxgH1oU33sKVvmh9NYr2%2BBsLysTjXV1vTGC0XDSLtuSyEuAbZnuK9mOiGS4wEx7BPBfJAAWDAi5ZGXXJpGdZHx68qS1ntG9ZtH1TPEqi5ydYPL5Q99iu0PiT8ZCP8pNTDgywkW7M0d0Sz8b353JX9GQrgK1Sg&X-Amz-Signature=428601b98cc156880cd7b0ca60dd24d700d651de825145b6392bf834a6551f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

