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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHXUPI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxPZb%2BeQBVcxr5tZ3ryf8xC3yYZ13YlsQM6ayk2x5YNAiBR%2FZlpE%2BqMPL3K6FsNfOmXuuRymuvz7cJOddwOVJW40Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMyg5e3E29TVCmdJYvKtwDDxXbcMGn3rZbXPDl8EXDK10hhlxHWr5rAceGB7MOrjYXihNbW5jyZsP%2Bt%2B4PTx8itMvgQ2YhS%2F0kky3db9MfGplmSLAGvbwoitHNZPYpaQdlH1xV3jnvftHIRo6RUu6cjlabvcLGoAQ1yWPitTCJ68aA5ucJljYQ33pXq9C3boh8WG%2F3yfWI%2F2D67pvqf%2F576xsmZ4qTFk6IJQmn%2BwASBp5Z30MZr8tjgXceP8AinMRX4soA5l%2FAzEEXfAi3ULijqTGN4kcKR1FSPLlJNSsOY4aemLOzU9RZHOm5ElRUNlnethGMdgICnNg7eR%2FuYLL7riUCnp3oUzUE3qJPQCORMION9Ckb6RnwrXvQlWwth6tL%2BW9N5lx3%2FKztbUy6U0X7GhtB0W3eQ7K8IMboYzudOtgjSJGYS2id3BtB8IKMnOWEks%2FoHg3jfBQdBzaU1jExvpMKvv7dPzuWqtCEJjyDo2iqNErRDqgLUIIz8YdBae%2BiT8e40KyrswB3BK%2BDxe2KWJwRg1BWijnU91xWFppu4tWl58iVLg66%2BvvVBWQUSLUs%2BXG3PdNaovrlknUOkOB21PLsWbgMPjHZkgis3zJgta2FUvIQnsfZhZn1HYIcIAd2Wtd7rkH%2Fz87tn%2FEw48POyQY6pgGjI%2BygGveQmuVayS5lkW1lgH60A4hSAvhYsSJwWhJ3c3JIUp22qRuYcUSw9reXQKYCYAaa6RyWjkikIMQe4VdTZZjcqhuE1QbMMZz3vy0oVy2Jt3LfWXHp2JIEaoBNkzD8z4PJVn88HjVWp61aZc%2BdO8U33Hlf5Q3awF9jCPtPMKWLHz8BPhoQYGc%2FHHgwVD4yHnr%2Bwnzhj9XWp4vJLMwxgbBHLAeW&X-Amz-Signature=aff4108a6edea46a9f8b659b020aa6330d22241eb9e3d0d1e475631dd4b8795e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

