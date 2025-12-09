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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XJXCNJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8GoIn4T0swh57JyqQEVQBBAtSPsn5Hz9FGhpWGO2wAIhAMYAe7AHLQ6fE%2B9SDNMgG4y6BJ6GaVFuljb4zA6MGY%2FoKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIgbHxQJZd%2F%2BPGikoq3APlOxhj%2BQQOJcy9k4ALDJ%2FDCgJxyk5xNEB7F0R0dUSRZPuAz0LrhHsJh4cyiQ7Nv4TPzSZvTjfNg9SCl2r3nLnTRv6RxZaDML6z7h5l5Fk3Z1qpbLM78UN%2Bb6HODvvvfY7MbZv9Jke9A0psIWbTZ1TR6lcuPez%2Bggg2z4sWdLRHpLwxgt5vDwtKYb7SGIE7WCweRmYYC44ZniLQJv025gUfwAIIzWEJV6YnqyOiQcXJ3JzWL8G39szd8ZsfZ6EiTOhEc14Sg0M3u87D5UxpWHJrJoBJ0kQv4VaIdDmb5oX3Fg0EyU4Be1z5O3cu1%2FsDcGo2iiA8htoQ1MYebBeHLeUqmk%2BLvz2yivc38xIaDYncrl1%2F75p3mbEgFwHU6%2FRqUrcdzpec2WpOBFMN8VpOuhApAFsxV8ttd8nU0yo651oP1RTiyWOxfwMJxbKbNrjLtYR7%2FYD%2F76jfUI%2BdbZI%2FeRddzNkJebe9tlEh%2BmW1hFj0g13jGlzOb8aoIHZpPcTK0GBRsi5XtfPsv4jaY1R8hbIh8Y8KYtx7uSuHp3morwtsVx92fFYI07kTLvGii7G%2FImL6OBcYErZ0P%2BnfHjI9t5bRBkqpcmEiGDiveXkQF7ez9B%2FNyhKjLsvfUnXNPzDT5d7JBjqkATlfRyh6cQUXPXyFXTiUzTFKZsSqHqSUn1eYCV3%2BLbdWogk5VmdJ8f5Kz1EamQnM2xiQzHFVSRHnMg69Y1nkJXniA6YT4liRo7t9hJdPft7IeBFu2lRnkjk85oB1rjOb8jXKEkuII7qGddUPbsln7DtY7rg1u67rP1zKSPe8nT0sAG%2BQm5ovSXCVQmzflyndyRrZMtywys98wcGIYqhXo6xsj%2Fa%2F&X-Amz-Signature=ecea9b51cca7ec6885b3edd17a9b8c7f23fa6540b8cf674a269890981de7bb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

