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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF3Y44I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGopsU1yu2i8o60U92X5%2BlASIT8qTxKrLaFp2aH7b9HrAiALC6ItPSY5bvPc9GhOQhD3aNQWyHp5ZRnl9IMawtu5kyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMLJs5MN%2Fuo7VlVlqlKtwDqjxD%2Fjs8pr45RfvGEJEzL6oYlkSLqjMKI5RR%2F12Z7HUEyohDQJE9etbpwHVo8f1dIyHmGYIn%2Fc5YhoVsD9HMgDUCYspFHP6nS1o9bQSebpXtG7KS3ZtKtYYhtBG8DpEau5N6A8aEVBVyecS1g1mjDmAPSupZr7hIyGdMuIxOTcdIJhgKsjtx%2FlGZT%2BgcUt%2FmbD2XHobqH0uufQMScmTIJK74Ru%2FC%2BZ8no1fHPqlnvVNui%2BQYXZB%2FgfcZ%2BITDyX38Ab6GTHLn6tLVynrRqvu2G8A%2FWvqc5epZp4Q8C3tc1oOtLxk4CPNQDyGrfly3cpMYWrwkH4RDezAbloZRd7XPetyoJRsNlaTeDsrHa6QB4q09kKNCbWl4N%2Fo5VdE5YFhiwyb1Gj3wn725Xv334ng57kf76Gh8QIG7hnGFmh%2FcWobQQ2MLoBI8xmX9DW10NLBC3OsTozBjh573TqUhddfqCDzBqtzo3nyWuWaG92loGZE%2F3xdHeto4QXap%2BE6EvzA6j13s3sVUJDqHcH8mIutfKUhCAYjOI8zVL39n8TNmKRkozCXIpNeH4HnKu2m%2F28omsz%2BHvoiyEf4cuWgNTMZUJXvLwEMpXTifYlBobDrHQTbBNbiZmY9oZob%2FOxMw1bLJyQY6pgHEAlPBkUaT%2BHBesnOf7x8aivXPiL4%2BXV6FvFLbzD%2F1s%2BzqTiuh51m4MmugO877dm6sZlkVVS4DhDp1j4l3%2FPI8YQSE1HfSNqziCGhjwT6ffEGw8%2B7jK6W59VoVsZjMerr%2BwRwXfNrGZmByZG1XbCIlX7gBwZHDIThDTu3dUT%2Bwd2ZhnbySU6XS1orRmAQsMgwmQTw0Z3iSkFRFF0ddEsq2lBTbvgb0&X-Amz-Signature=2d32be3478d8185e1e3b47b861edb9d603940a0aed4daf8b30090407a03f84e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

