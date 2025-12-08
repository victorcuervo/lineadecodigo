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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TRNU74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE0RJYPqiQiZBSTDKqteOyUA4j7WfY2%2Fdx%2Fzemy6RMuAiANodheCv3RlAEr4yjR5d6zlJfJ5387tYe%2Fz6s%2FCJPxUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66btWi9ffx7D0ItEKtwDMct6Y7OZdWqrMqcjFiLQwpeluJLedF8TXXGGnocxFK3Uq5kPQDFvEDoZYYIHpa%2FCDGWZ3Dueink3J2VQZc%2FBjTM%2BO0NDSjYgtYRlxqQyErQgOeAMzTufx5y1oZQY19rqpnr5udBiYWrMD4NkN%2FtKk%2FxXsVBpg5x%2FrkCJtQxZK39GFqrAkCz%2FiXsNjJ8872kHMVuLP2zvTSfr4xzMmtx%2FR32qlYwKBpzKJyVEJxHvnzYEBaiH7KpVrVnvdjHMZv0zJPeg8kQd4N8AAbPfFCbJfmCOv51P%2Flg0jOU7IpeV%2BlC%2BNq%2F93RNv24A6r9MzHroXYFnoU3pB7bLJpGK7lgoTRVFPl766cTw4UqRYynZXGcyYpsGqfIVL74JWrR%2FgtwkfPH%2BHf%2B7x%2BrYArHIPEd6TaJYwjctyz8f6azG8PHCxfXmffEuTd7KAqF9LjWma4F4m3u5DNtHRLTw%2FPMlus8l8kYXS8ZasoTHRJ2BMpeI0UOEd6wbC5DuNCXRORAAosK6hCb%2FQpmElH%2FtcQsOPPD3w2VrlsLvEGRIkLLzPpS3IoxPr4jDJaqFSt7KF0Jdkqn0qL3oCGZN8FR9GAg7CIbTZYth%2FN%2BUZQFKlQKPj%2F3l1YpmVVZaPkfZ7YBsDMGYwuu7ZyQY6pgFNUWN5bjbNGa6v4FL9ne07r3TdlsZ0w1jXKCcwMDDEyOAkLpBevFxurRbi1kiD0JkZLqD49mHH%2BkOv5J7qfRB3iqL5kCqIhTca45ku1fhRwh2nYeoZ2PrP96h52PRz8z0lNBX2VvQ2qQlyckhY3LHzNWhVgeKNZVpl3xDIe5TbZGIby0P%2BG3cvT0cV0X7J0Ci8TEqAuLnbuvWgVNj%2FQ60WzNnTigtR&X-Amz-Signature=616343b4ff51cecb9c53093816791811c979ce528ce4b2c9f190271ec2a0e2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

