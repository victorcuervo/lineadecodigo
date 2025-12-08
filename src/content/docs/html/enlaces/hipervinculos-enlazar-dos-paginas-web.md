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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB5N3ZU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2Be%2FiZebQJ0eIMnz3mdlk7SJH%2FHLxmKG5kWbf7X4bFgIhAPIzj6FQnxoQG4wEDUyTVD1wIBIOmu7e7aJPvDMlciD3KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHUCksBUTfhw8%2B%2FrUq3AP40lhtFRXiybKahKnPAtMP6KfWe6fKrSqZ62rc8vZdHucYGfV6LTquZGqZnwHjaIMfid4MhpNFdWezZ9srfb2aT4mMbVx3xr4NPwghxuKUWUwyXQozDhcFNDGXYtuMyi1PexPt5suiAzP6X%2FHSvR1WSPyDx7vCrWo785wkHD0%2BBFgbWu6dZih62PtQBPOK%2FxRrbNUYKYQii9PQ%2FvnZMX8WHXkRHv3%2F4B0cRILJu%2FsnTZnqxJBl%2BPEns6W%2B6cQMCdJ8tnfLLD4z3Z4nElHnajMUG8d6%2BQhmXbl5NjicF7vObTezADTEprVFryRMPoaqy3onwAxlrW6fgqxRlFibyejLE7cnadROs5aFAk0ARO%2FRyicxP4m54%2BV37gEWFQ1k9ZhoYGyVkXwiCphKGrbRnp%2B1E2tPu3rbZbVRcuINDb0OeMkoOOfI9exwxqVQ5DpIJqqtKFEv5PuPyPrzxrRQQRUCn5Z7QggXH81LIoQTMhdkIgX2LRtT2WVPE9XJ6w61rAEHq9eW5PveO%2B%2BsfvqjDldgtgAWCrNjQ5mcIojBpZ3QwirBRlsEN%2BtiMbgj%2B9ricjEWXVV3CDKOwWvV0kxXfKrewMVdbU%2B2xZ7R8TgRxHGwKSWqelUG9Vh%2BXUmSgDCq7tjJBjqkAf%2BkVuzgjSSpEZ9e%2BKkBC7N6uA%2FzNvpLv8hgMEBu%2Fi2xAMkixAj0g7ID8KjuUpnrFaiemqm6Q%2BuOXvavCy%2BO10ZCnGHRqaJx8%2FXJFLlSTkIURRk3ckpD5X79n8nc%2B2tNSfPOjcD7cBY5lNQMaTMBbtt6ToucErqy2mks7CDaEXeZOvz39Oewrd1eKmXrjTxf4U7fOkStgavY%2Fx2K4Q1tMcavaIeq&X-Amz-Signature=13b1ba1e7d277b2ee29390990156c0e7ad3bf449d202f1b2a8676a8c5b59fedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

