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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4FO6WZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQUchXUuybI%2FxJo%2Bbf%2B6AKA8ZFnw84Vxlg4zyD8inuKAiEAs5nQASghzTpoxEtJl0FXELDby6nmDslQKjwl%2BAbxSSsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHscloRj69EyXfT%2ByCrcA8em92qL%2FeW24sRV5qS5TbOBh%2BYZtRFJgqW0FLWVN7LcYa1JKc%2F0dQ6Kh5MkEF2u7FcKCguTHD4YLLBKlxEn6J07eWFE%2BWdq%2B41Jm4d6uD%2F6XhhkaFEelRevSSA3vnD38QcAzk0vHIlqZqmO9lHhlFB6jIrOx5ZDsLV957l7OxePmNBtRuLYC8ylU%2FulrecpJ3dr326P0EiQO5NGhfU%2FGt28XV%2Ft6ZUAPixi3PK0xV%2BNP7UlnqOyUduIaajacHEXYKEB9M46VvjThyzw4OpVgognRxEvy30y4byp9ojyLZ%2Bfuc6aMcIRCFFGsKJq6wdvWSItx3c%2F8Ojmq4W8izUx1l4Gpn4JfOpliGVzytozDXXfnErU9h2A%2FhjJiz9NpEIF2V%2Bsk%2BY8n6apq7sHh9fB5C3atfQaAiYoAK64ESpjZ3NNgFiD4C57WCj0aJ4InGtGLn%2FHhhahb4Bn6I1lAEkOMqlFk8NFXwlemFmGun3T%2BQud5KdmiV6rvXlN%2FtebVTTIBJsa3p5bH1CAQfoJGTL9LlkMoXEDrWr3%2BzXaBCYh6AJLhdL4HD%2Fq50f1gLqUDAX8mHtskFZH8Joy%2FTU4F29IgDkYlp5j7meZZ2Vgt7OIEdbLgB9H0RxoR%2Bpfn2WCMK%2Ba1ckGOqUBIHirNnhvYkFhZC47vt2FI%2F7xptJBc0IiB6zlnUwaz80Hu%2F8gVEDqUnvrSdp9YJeLVUzPsrZ01JNrYUk5zAKTVdVigSk9qD6tdV4jna0tWqYHldYM2orL%2BIGZNlF34hi7l8hkYpoe2iHBDT0BPgv5bDUFizlghjNVKX3K1uDKUUsHORwlSTbk%2FMHPWEgpsIJBEHVbeHmHRatgZ6p7fGc6oTs5IbLX&X-Amz-Signature=945d19ecfaec4c0a8d74931140c3546ce9bffe9ca6737d0b825fddbe31528c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

