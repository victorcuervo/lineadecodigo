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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBYQIJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJ7NTMVWKy4g3DwzDOs1VMhvdLcJ2DkyUZBXaSGH0tQIgS5O4EnUJl0msnfn8YHoXVg3rdl4raSyuMD2VR7vMVqEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG0JFCn7nUS2YCEIyircAwNAGIytN4R%2F3ndzxvimNTdd75xb6%2Bh61r5neASjOh3nYVJc7L1Qym%2BBIIeZowAd8V021sZxGS5yuQtzVQYpkGi8Q4ZmUwL5ROfwk5UgnvsSSYuxJSz8MPnZe18bUmIrlmjm7hHx6CpDpnXmT%2B2e%2FLPyO9OSh0ol8s9DKzfAISiIWTlubYGKYBJV6rbhykpfEFeKwvUpXRZzxvaO4mdGMglMr%2FAiRLJv3NJVHLrowReaMvdVYxe3QVtl80I7E0FOPChb4I5V0ljrw8ypGkvpU4rOSNDjLfgQZCTTGdLnkRkMXWCA%2FH%2FQwcIgfAWTSkfA3bGpVdYuXBdsbHsagxpNxFeW7nW8ciM2Fno%2F222F8IqSqFrbAgBvipHZWU6dx3867xtiTywvC5SgQL3JlBsqtCnDaYKEGLZYTKKNvYqQPi69Xm43JrUvS%2BaD7PJlirLdee%2BJztvQMKyMWvWiqIWAZCDDubQbusnH5ADiD0muO3%2BBKQ2mUH8%2FLX95rXhweVkPzEpx1ZtbyyFg2ymPjGyZSa6Wvafynmigeb%2BrVSebjdupqwF9WVqzFbj3LFhDRcOwGxWti6er0sxKSF%2FNSTuBZu%2F5drQb6e%2BNL0qz7VRrdp4S0lln%2F7SaslwxQfxMMLWwyckGOqUB5llPtsc%2BdjhwqgOqdrnhK7qMBaK8vNIt9ETGeF2MZ9TT1G0JbFdEhxOtu19efM%2BZhunRxNe8ynz%2F%2FwLqGjf%2BHooRyYhbQth4br8%2BxPt8R3FiwevnnRbR9a04oZnInPAMuapshQBMbG6bcSca2InaXZjchI%2FHPJ8bOqHxtkPuiXRm9jYEuUGbhdfgJC5emOa6UjeNlD5XLdEm8pyZ99UxhXbHkW8%2B&X-Amz-Signature=2076840412e15b2de2bd3edfc3cbc92bace5950fc303af18dbe54090255b9d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

