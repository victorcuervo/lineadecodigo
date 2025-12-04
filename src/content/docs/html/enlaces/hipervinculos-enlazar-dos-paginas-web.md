---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQMGJBM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCZT7zzo6gkiKi0r70%2FsPgXT9J58FxtWAeHS9kh%2BQVR6gIgD5gHNL5sUssY5M1KYLjLoHBTL6BBHoewg87tuWQfsFUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDH8fUJNrrUIKCz7cUCrcA4VihoXQ%2FkExfPTpPrbNcm4zQc8gFZAjWoSzdMa018PXSlGSmXXgEsZ7EWbA3SFIhyGiHqHvGnfazKzM1FDTcBW2TTGebp5qtH1kmOUIirWq6kTAzi9ZUwvHsms4niQK2uq%2BD%2Fx4t%2Fql8AQ36MquK%2B8ybYq5adQc5ZFVSjRXuMzGgzQoLYNaHCrOnKmTBbMOddZvECWVkmI4ssk0Hef1fDN2y2QcIijJtYVb4qWlhkwvhs2dFbcVM52Hdl77xP7B0w577alJI32zqRYXAtz6QZ5hropqxXPqJFRpjn%2FOwrQrItakQptsGqCNRTebbdQdlB4NkO66PDpULEKVp6UZ48rEzs4QtHu%2Bbn40pELEn4uDKbGC37en%2BmLEpm3745X4oodRU7iy3F2x8v5R9tEfkcsH6qHlcmtd8FQhEG2AvaV3N71P3Sg1nROhAraeVWcJhWcvIpNG2zbFK5FLx6Hf5C%2FqUcXfG3uh%2BFP2K5PFeLRaQUPMMFzLtng1lxzkBMr92Gxl5qdWRkQkUmMcmgqssfdxH1Q8QELkK1nLY5m9g0zEn67OEaKINM3EXhu0gBL01e65BDd2n7BdRgFCr5GdZkFEtTQngfB3GfhaeDMccODfMhZLgLhInjl34sVYMO6uxMkGOqUBpd8kJE6zTvt43vXj5D5lm4EzZjNsFjWDBiaMEa%2B2kaD60%2FUQThCq2rhytbdO4ZWrdJSWSOjdK6zxpWtfqYnS%2F1JtA5n9O0LwUFoSNs1rXvLypNCufz54nex4VRfXfVTjtgyo21Fu962wLfahZbKzgqRvxuKIgzdyANhhW8qyggbzyWnbr%2Fv0iJHvirxmnFmr5JHXRMNjj7F2qdHMBtE2pIy%2BsH0g&X-Amz-Signature=4262f2dd079154a2794adb5e2d006b4c9d368ebae8c9e2e8fe678a322aebaf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

