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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLN4CILB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgae5iL6Fodb3U3qbl1oSBp4o3ksS5rbPpMDQx9OKpMAiEAww3BHMDXQcuHHsHtmYhFnvq87YQC7YvIAIxNsS1lypIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrfDHnnfPoaFl638SrcA%2BBcS5Nu%2FSEDRkjvox1Q0Ge%2FTKmsHhPvEB%2BpB%2BGAi%2FyyUkUjnPygod7vCXz9xdAAJYRSnD3LOGK5J%2FkaxhEc%2BqOfMDf6nZeiYzLtOGIjoCVKyalFXLE2XRuFGdDngUAEVCETGXWDZQ586HqmPFYjJP%2FrJr6YxklhRVJrRrIHJhHq0U83jLb%2BSBv%2BAZhYZ3V8ByYoNXE1cItiGIpMChCKq4Im0hF1c1%2FTh8EpjeQ7mSkaI2u5n9Z%2BKeX%2FxWKbIh3ViONaQmc5HTtgAc48HkNNDCk9lezMxp%2FL4uIhryou4PbC5No7jHMpMpz227PwthDUjQkM33C6YwfUZWSQQbLXdOtJMWnREeUUrF05V9TrfPRN8e8TOh5R3MLGHXNRc9AitDlAZaG%2F4hncZdifoby7wYKtrZ%2B%2F2HxSmfMwqQuwV9yp9kyAnJUp0PZiJ8MY3gLnlYSadAAclZsb5%2FQANdIxoGg2Wc23RSVwsC8DktDpQf1f74lVi%2BAgBNDDqj7rYIHgqBh%2F51BpJgbhIk%2BOCgwxPzNkOTYBLwRJD6T%2F3F5CjXR3szdD7Nm75gXvavXyD5%2Bcxjij2GjCJM3rYL6eLL%2B4yCZJwyUZ1G4V7phtuYZrBMfQfhvW13U7y73Kh%2BiaMOez2ckGOqUBrMD%2FtaS39M44utYxM5fj5tazphk4dpQd9gFmha0G59%2BWOw0VfzEcrnzFHU2%2FIMS6zJE7GFLO87vSaN%2B8lR%2Brhjf%2F1nCpPWOzUxPlE44hjBuJuQfwPq7h6aWCVfrXowAhqQ6p%2Bbu%2BMCfu4Ib8Zu%2FouFw2jKaB%2BDpFfVWZK0q9KJr%2F3R7pBog0GNw2sg2D1JZLoV9U0Yx6sL6FQuHquQjoSkS0Lddh&X-Amz-Signature=4f8c923d43ecf61bc74c907c2a49a85b0b5d10687b31192cc8c1e060da56fcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

