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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2MHGR2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Y4HydWGvUTmUs2jFTSxxBGuOeBalPPnBFwBiOEc7kAIgaO%2FQrkNH6209jpg6VjytjHWYKvIltJP27xC1G3NDlR0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMu7SCj3ZvtpmfM1CrcAw1RnjYHEd1mfzL6bI3atWDpg7teO8fTYDX%2BfmkJvJpEf0K6%2F5tJO51I7zf33%2BsxmO5kKFD6EYf4g%2BkCTUBOxWrW3NmR33ZZysHPTvx%2FcJDSL9oiZSMQLmlwV1FiAVbZCo8eArBkrDaS5e57vaKB51Ut1qSsRU%2FyVTMIf%2Fxa0fGLwa3f982ByAiInqNbHRQy%2FQu5WRDzVaCRvWDRYxNoeYhYNTg9fo9xd0PYACZPuLB65dnTwYJ4C2ypaenU6eyT3OzbFl8dD95YY2H%2F2FkoiHUyJuJ8cBJotwg7rNDtDswt83ytIIQAJkAWAlSx9dyqIHEtnZORMbjr%2BB5wZAA9N9Fu1tayHyYQ4TdjjqBlSupt6%2FR5hCELXWKF6vsGq8GG0oSk%2B%2BVynHaPWZGZlsUWzPc92tjCHJjUtzQ8s9YqZvcaNuH8KEf%2BZJt%2BcMP4%2BcfTd64t56o0MmLgRlpr1UmYT%2FFwpRros8GYScLU5cV%2FGw3xiFOXYIb9goT7SS2nMHrFhn8aJNplDw5ES%2FScfP6WP%2BEy12r8iK6WT1HZ3254tJxUdNA55Vvz5cxYsXYVgU7Uh0o5spM5kyRSQmD4iAzziVHXTe%2BbFOvG6%2FDhqBmrQXYUFI3pBMv96K6o86P0MMzB28kGOqUBpsSGPlceHDNFScN4jDwMOfe39JKSuYwEQdhVy5RUcn7mx0RVtHpwljzXRCGABqst9ja8LXkg7ydEiJKsJRbr841VrkoidsUyS%2BC4jFtUZAHcuLl1Vl8%2FVxcYc8WFKcZUzQXnBcAtGN9dJakgdKb3g%2BxPU0tchyrYu7B7Wm7yW7Li6H4dc3M9BBlMSFO6pmKpgoOCoUzYaq7D0FMoNY8ZiIbXScLY&X-Amz-Signature=bf2d80a90cb671b5d159a9051e7e43bca614106d57e96e9c94d3340bc7db0b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

