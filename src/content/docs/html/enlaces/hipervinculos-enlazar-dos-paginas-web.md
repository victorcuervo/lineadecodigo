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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JDDCHIC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGkweh0ga3AZNPVQObTDkZvdUcdt9kmBIVSBMpVCK7jAiBoQVRZZPhxFzLz1%2BZlUdSBOHK3PVhD5KQecO7Lvt0lyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjBzlVlgDuiqMEhe6KtwDG4k4NJszsTpuUspAlpBYKz95edTDlxaKxiG%2FNqZjlbqHOAAnhK1pVlRV4IyeW8Eqh767Qzf90QM3pefdRqDsHowWi6LCEAdGzQaVGasGXlJMOe2ziJaxWoihzTeSLlADDODQJQ9q7GebT5b%2BxAPRVgWPK8v%2FwNdGp93w7jvxws59j6pGWHRE1GSI66sM5SDR881YeM4iosfeAm6bh%2BMR3PyJmMf8YADLVefrPjT8SoAT33n1oXJhC9u2sf3jmdjo8arTlb3ar8KMahRy7zIyIq%2FSZ%2FiQucM9jBZi6GshIyCjfVWlOPCfCNHP7RsBLA40Q%2Bi5QCkyTFDv77LT1%2FXOMje7stQyv87fJf2W9pN27kbt81knBq9z5fmYKm693ZLV%2BTw8sxvAibopfmIw0qwWiOuWYeUiYqGhEUyDqiIqhrW%2FgQZpKoiRqhF0n%2F8nItlcjmyhMHkw4tLdSAjRguQc%2ByrNifVN2%2B%2FKTkChdIbx4Jv5Otjzpe1TUb58zpreOjTGPZHVYcKtVNeH%2BE%2BhywRFrD4tPi2xHr%2BfUhlGnH787CYmMGsdnQO%2FloLjozTPv%2FkGxoUYPqGK442K71OXTei8HsMQNx7yqXqaOAskI0KL8xQPPq3PIDc%2FF8v0Kn4wvprVyQY6pgHQIxCRp3aQQ%2FyXvsmEC7ggI98puumcwcH%2FA7TVTYYDTk6HbQn9zcgqF6PCyB29Kqwfsuzsd1NvdWDj8aELKnbJXQdA9TcdofxPA6qLH9I7hjQnRZ%2BkCGSywQgQjN%2Fly1yY5b5Box8Odnw36eAZW7307qFgR95mHIJP3nHfdT%2B8Jhn0x%2BBjuwhx3vervv7ND4a7Fy5rWguAuesevbaJBwNXXoO1Qs6g&X-Amz-Signature=4b50e7fdd61d3f1c991609b6a6ed9e03f973fcc80bc8cd2531c071001cabc36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

