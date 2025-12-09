---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKIAWPF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCozBApEGgKHwsBujICYsnjTTGngwvsVcXzqxG2PS1AywIhAItFyt84WtvQNIDPpIHqz3aQlgDd%2FkG7iDwlOD0abak9KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO2D9IHvO4XpQH3B4q3APnCc2cPHYO%2B82obvmX19FNU7vG0PRWHu33xyBzDMD2899GYC0%2FskVDCEToH4sOoMuQCwNGfzHLvLN%2FtJCHrzOdi7OK3wbi7BBfUnZflsB7ZgCApfh83KUEgCzJuSrRJVpHqnw3Yd7oIZwQ5Zxkx7OlHetbixmxLQ4hrpam27MxjeXa%2FJlCK0uPgvmEM1zTI1YIsEGQI2hXAazGdwcF2dHPF76jtfNsl0dl3%2Fz4I3zfCHg12TK6RY4KW%2Fj9OH97eL1SjbbGHHhH6muJ5JmKpuo4r3mURAacWZzMN4EpZ0uCHQbh7Ht8ed1xhB6j81gsAT9N3qp0QYh4uCuy8pHZbgAK%2BhO%2B5YP8nQ7DRYC3qcPpxWfHVHxWGvKIU8FCzErR%2FXEhoFKEMzHTpZzhlW8FoAcDpCwQSLHRz%2B9QJp4jHCH7QalT33P9UqDG8cEvLljCA0li6WrSFpJn%2BfnVnfQfDibRmnwlkyGTN3NIwY2nqKQEuaN4ayv7E5HKXFAYbXD25q%2FZyu5c5xfub7LgPDmUOMf67BgM2t3b75ny%2F8oXkbyQBz4xwyrBZQifn%2Bykd%2Frk0SvHqlyTgFE1a3LnCuEZWx7Z72h7fFNhbTaoVaBvHggU8k%2Fs70%2BrBLsGlNmEYDDhveHJBjqkAULCd2hihUnnPbDZGfqX4TWgsaRy0GvnYGwpt8ropwzbjdLvkjroYdAxd9cr39fAYWospaE49uNyEkUE54%2FiF4FGoTrWhfCKl5TWiwyeLvVE%2BeBIpou2bXCcYonpOAdxC%2FiBslcjeRgXzg9cLJQ6EM19%2Bx8FktttSFNJpwdCPSvC8ZZk9stVtquTEODxTz9w3R7dm93zCjRxgPbY9rvgWVfSrtsl&X-Amz-Signature=8ee47f6227ddc2de8080e6148829b128cad854c654d9cfd5570a3d2939010472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

