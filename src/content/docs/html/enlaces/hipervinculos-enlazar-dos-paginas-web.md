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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIVMENXB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6MLinYAPoroJEJGeF%2FI79u%2FlhXLpOdyssiPN5gMLUgIhAIRhmPYlLe%2B4zOPLJijh8FOieQCzbtk90NlHjC3vKRBmKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEdrZpMp4YNYO5pIcq3AN6RwXgsJu1IeVDOgQ9cLUWf%2Bo%2Bk0Xp7UYj%2BJdyvIWjLcmlabPimRaZR3Y0argZyzWTf8qwxAlXSUskzmMK1gD5OAm0PLARW65gypGg6%2BtSC0G5m3nZm0Jo1P4d5wC4i%2FHOYTi2YVTu4DiTWYsh8ltxSPLmurqsySYscGMQmiv70FcZ5QQanaXfb59HVLTRoJTfogRg0UvRmAgI1qfx2eZ5zQDZ%2FIGmVVLxZRxT9iYIvBjoh1bNDVuf1YwXsF%2BL8LpylDzazUUSqcV0TkDWr9kcbSnIbviKWhJnTcTQ8AqiotnbrvhxmrnLQ6omRVXDzJx2n54ob008olMmFfQmu%2BEVwYUDtrq6alZUEGXRSgoWnOddsUL7pnn5wR7aHkRuK1%2FHrjvW%2BAOB84H9Y4nZu%2FwK5elEK%2BTewbuF6TnDH36YFJwRS4oweU4dZfx98F9RNHJEmFfvtf1oVH1GSwrclW7UriQsg5Lnqj8iwbPR%2BHM4gC%2FIbnLgNslxSwh7DbhJJ65pHpXViYu9sndKtCGmesZRMzoezFNDVgdaJH4q6HMzN1Yps3qdtKwFDYOPKb17fc2PaHmt1W1K23fZ2DsaaqU0zkX7al%2BmYoL9LTNx7ZGlYBicEY4i%2FK%2B0m3PU9zDhod3JBjqkAfkI3Lf5QUNPPLTWnq30NTis5B%2Fm6F6jsbzVjGCxPMYz4b5gHc1PrIqwtN8ekJgai4e8oP3IH4RR1Q0bPlmqk0%2FQlR%2FWCK2GWX9nG68bcNx2We%2BzRlc4QQ6Qmzmnr1NmOpYpaVPisXF6%2FSvCWQLB6XKHH9XtnqCZRRmrsoKQ9iQ%2FidZL%2ByafHMUJllH7Qb8GUdbjw7FTYblx5dpb4AS00vtsObwv&X-Amz-Signature=e2d2e6ba6f17f359aab990c191071dd321b29d7a673f5e05c273e6e0a65073ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

