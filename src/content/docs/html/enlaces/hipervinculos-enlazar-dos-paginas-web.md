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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIZWV3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuwZlwaz5Lyz6b2lrVi%2FC%2FUqZKOQuiq6FckdzOvToW6AIgdytxLTsF92izLWhqQpOEduite1Eg7Sw9eK%2BLFHdGHS8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLBNhB27hT1acXBOxSrcA4YC5SO8%2BjdJCBBdpqIUecC5uGhZe6aD%2Fo%2BrpzvbGMGEVDpyeId0TBJCxoyy%2BEgmhRxyRzpGLH%2F7j0KS6rWXcnDzfuaxiD9BFZaq7rKprlLz0Vekiy1nBiK3GPeUzAtlkGR3LVRJvxIxELq%2BM2oAeCCphdzq3Lip1aYDEryXSDkkak6vcJDlF6sRTeGapEs6pGJr3H7fLoUh9%2Bf1RNxLureFL6JunGEewIw8cGLM9jeW%2BtoabJKmP5bxgw%2FbJJGB3H4G%2FOhOdO%2FEhh%2FQcgBRUO8o75s%2F90moRnas6E8CtZDN%2BA7bUib1WtOKv3H58kZdJHnQibKLlN4UUWXCoUPheMpAfn3Mofy3Q5X09ePwalrkykwvImd0qxv0%2FrRN59s6YBFYa%2B8CW61Nt5KYYQjZ5Uxp8jQseBhJgiLDI4fxENt8OxK1u338Y%2BUPDkSAOwWaAd0UnmxAEzUDwZgzMNabQQPJ3qRMThnqFkruFlyCNgJxLkxO9PGHFNaKMQJWdvxN7ubGwI9%2FOzI2Psqs3%2BttN3bIOft2QIkwZT6gob6Nw6i4b4YTei2v%2FDvY1Qkp6W5ZfLIT%2FYueH%2BeiO1etZo1Uys5T0vh8uHRetquBLmlsjmzrnWAxn4S4PuyttGtHMPOm0MkGOqUBPVlqJcDT5gnhNQo6DmSlF42%2BJa2eZflT2dj6U%2FUa9RHMHhIEicThfxGBdf2L6uDKTtL9FZWkqax3lDXVa6cFa0bGaCEaYj6%2BFowZBtAd22s%2Bsa1e7hd6cC6T01KoItLrGqLRwDG8UUb%2FDPk6oWOyQfy57KQrvriJf%2B6YLhQYUtsezMRodYI9AiXtv5v7caqCAKB%2FYzpn1YtvJe6I5j2umgkhXyfM&X-Amz-Signature=9fa0680daaac68e27ca6439e4f38b3b73a4052b6713c1188f80ce2b3b9abfce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

