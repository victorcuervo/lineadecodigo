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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D52VQJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs6iX%2B0dwcfhPudcsL9z0ix61S1IL1uIx%2Bzqpci8B8zAIgVi06rN4jpHCSOlHPJy3j%2F03s3Xikh%2BLWZ1Tzkoc%2BjQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6Bnl3f0iA8NqKcaSrcA3uqWiZF5o9K1%2FGrhmCEIuq0S1vnPH9Yoh68UmyoAuA56YEPOmgkzh5oxH2Q9Y0ZF4rwDMAkdO7dsl4yTl4%2FDIKV5omdxOgsQe6VbMQyTyFqnBf4yLj9Z7ckarxQx%2BLTvjNu%2FsvruRqS20mH9tj7IN7joagafMlsqezjoo6NnKSrf7kMXxElyDyT6XFSy%2Bh8BpZIBXCjoTOKB6fwkKlzEYbWaY2fSWzCqT38QT5o9VLT2H4ja8XGOzRBteYiMWMIrqDLpG4qFm8JZTtNFyfRlbRBJZcmmZSaS%2Bcy7pE8N5oTpz6kMFbiEfatoCb4X64kee7JC3TxVcf5vzsJNq4L92m6IZa%2FKJNJKsRtnrH1Lhc9XZ7PZJiRcZPw9ok22r1S%2BZqxWutmdUwjN7Pr6xSeWYC6Hm8LC6i%2FLOsSEgv%2B9OfMM9eWXsXr%2B%2BVmnmlQY0DlWg3qkjhM82hEvY5o6EAt6sh4ZTwYI4yXt9Wf0FdcGm02e7CUVRvRqGpISAGvrj1fDucOVlk2uXOSUBpIBMFitsanE7ODMi80rEdE8Exm4lEHbI0PzYeIoGs092Hy2Wa9jPidKU8F7VHImegi1iE1p8J7d3XQxCFabSeI5IqLVJ%2FxehdO20Z%2FconZv%2FUsMLTu2ckGOqUB%2FscnSe7xu7PNCQ8TgD5IKfTJw3f1SoVkNmAYLSQ6qB9PFtohVddph%2BspYQPthQPsoISDKkcp1ByiZ3VqSrSIxZfvcYzz3WC7lbrHBnJZk6wu3hR5xGsPNzozS%2FroQRum7NarWKTmK4nIa3E3aU%2BUy6Tn%2BVmNLK7FWlBej4hZwLAuZqm%2BXlerPMxK4g4J%2FRsK8MbWwjagcyGpf9m0fvglagTkdLBu&X-Amz-Signature=6a19e0f25249909442e43773c86c6c34c7dcdf30e26db33708ce3c9c8904738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

