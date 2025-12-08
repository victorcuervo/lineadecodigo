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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLQOVDK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzWaDRObpzbW3evH8uIs5M2Q%2F5EiT20pCGSwXUV7dISQIhAOoDtKPopmKzYTpII08rKwINaCydp4pFd9ESTYdyCZQtKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZJ0fgiHsD0omc11kq3ANc4dUAY46YlGXnSdpQIjfw1p77IlPDovsCl93es7qSJzrFiOytruvLcoJlzUHzN0EE5nSaFjrGRITfnFNr9Fgk6VtUXdRxsrJFIMPqLklkf5FWDNI3XRIuVqOHx4ZWo33gz18gMa9JM3F45CoWkCh%2FKs2j5SI0f%2BxzOZ8buwJaMWBdKxofmGOtCoAiWRO2dUp1mAL%2BAnnbK68k2rDtlcu43p0q67YJFB46Zefxdz5krWKlD%2BxJhlX7OP%2B0xi%2B0VUnRsw7dUyMGAGcZ5KM%2Fj6EwZYK2qhEw6YP1SK4XlwviooCnjH2JoTbUl7FCfU7lXiSQVp3bjJxjDEumPPyJz%2FQ7PrGrElZjRp5q%2BTbhyL4%2Fv0yAPNE0JB8gmR7d4JQCpGQS6ZFbLo8jwbwTmgndBpUoORaFAdaQy6AwVoIwYjn4qppRbfSyWfMYqUFkDIE0%2BnzJEXw2dSO3TbzPcvglEWSCICjJ580eEb3ZtDYaz4u%2BzIOlI1vx3d1uLbg3%2F2jSnOds5yHbz%2FqHk36LTGXG5BrerR8pNl1bb5dJKOBRMX0Yrl9Us36LX952TgPolOmPE4hkoUrViGzECmaQpQ8XtudpXwsLIFrlTrqbQUeMjBcMLwWdoQKO7pXMSSEK1TC3lNnJBjqkAcWtvP2D6KedRogtmYpznEaW0Kf38BxsJMUlERS4s4eXRu8M0eWStE%2Fx8zcMenKK5onnxYvYR89JaanZwzc6%2B73VjpLYKE%2Fi4dM8S43cdI5HDJen9Rft8V91KZtFsLYl9F4Ezz0OQmcF86wO%2FIx%2ByxV5mBXvDHGyr5NUOgmiXnbBMtegFMpRWNsBTDOyxN3fF%2Fd1LPd3q8oeMZCyrm%2FrwNPXQofI&X-Amz-Signature=879d8e2f4352c4b00030b672460fdd282f24d58473c8518567a738f5d304b60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

