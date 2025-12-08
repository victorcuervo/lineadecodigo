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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635RJ3W7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwbwiqdMOWUtZFVsAe1Idi4hgR9U7DF%2B5Jcj%2BHkO3bKQIhAK7IXX%2BtqZu%2FCgf5oeFTaisJNZHSsRFexUy4Mb2BnWGxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7pr8DHZWu24KQ0Yq3APSxEFLcrsR1%2BqdBlVlX8qS9hMDHhV6zbk7Q6MyWMvDBjIAJiWcAq5K5O5V2PyQHs1Wnn3rmuqZImlyKRRT0vdkeZadAPhAHUQ%2BAlSG7TMlBvwKdNn6MHECVmtDSSQEcCco6c%2B9KnxX%2FoGm36CzmRsfBZPRUvzlgnMl74f6eOvvOt3mHW3VaI6ZPzKq%2F8LCFxYPTGkGF7y3rva7i7TTyhKdl7cWP42NjcibNEl9FZHikvkenrJioidYf7hPFsLT%2B2grNWB8jrGUZS0n%2FgavuV%2FxCVmOUeSwUBGYyTOe2euE92ErQJyKqi7G1PG7QDaurUjXfQiDoduf%2Fl%2FOwsTwpq1rPOD%2BZXeJpAFm30ekJq2sdVYE9LnQNFY0%2FMXxICkGTqTJBezA0fTktTzAJEtvwi5JooY6ONDPn7qZLdpamVRqqbpKaRSZoUZdZDTwNlOCJZfHg27x8cN%2BHqNVA5jmfYLnp8ZzVlj%2F5%2BEilyZzD5XwFpEHABRAQTtmVjB%2Br%2B5IsJMvRVeH3%2B1%2F5X0lIbe%2FM2FyxaFGoHW10XtIsKKzPu8YLXnOB7PJuRc%2BoKmTrfc0Xepkhia1RqOZ3RFXB6LM0Jn2hdqlMOtiyqEbyomQb4s8QieypyG3hc6KkWD%2BJjCQ7tnJBjqkAZnzuMwK8ugK2CX9Ew5IFMoWiseTJ0UCrMBGiyTUogru9Uwe55IGUDLNLKiIbUGAx%2FIY%2BKDMQJ13kI5gXilZdyCqCfdBeaRqoFV7DEcyE986Ir076iLKmDsjOgza1cCuc58pxZzKzUdQzTxPYqHkwoWx2nDWP%2FsK4cmMu%2BRug8UCAYFgetN%2BTFvWMlxT5MG21bsjkycNGgbZTvhr47Vk3Hr%2FUafv&X-Amz-Signature=f435f9b4b58a74301726cb7e8dce358701b4208f2ad82a402ba5867219dd5620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

