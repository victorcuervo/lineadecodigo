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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFYX5M6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu4pPtWhSdH%2BhxJm4JSjv%2BvDOCX9iApQ0v43%2BQvyd7%2BAiEAhFyXlxQ4iGW1hb3W62%2BWjlaW3wDJTtx8mxIGi8RcSMMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk1dZF3S%2BfhLr%2FewSrcA1TMZjt%2Br6838GCQAgHL71rXe2d50CAzllEIejz%2Bd3nfBWEOfXEQXfRO394yI5z%2FAkoGcn7TBn7p2mEmS2TS2tgfVymzk7buMXdgQTmtUOwrKoFwkXdYvleKHFNiFj4urwr4qXl22JNX2Ta7cVQoFfDkxXUoLjVtDFDIrQSI0yrLBxv5%2Bda1j%2F%2BhYLT7%2FikyJcbc4aZ2zcWw6XCK42gcNDy71TZRfhBMDQ0N9maJOgHmqFNkkZAbWFyxlx4Dy8ZCVuJMBG0APVAP7mMSirpgdVv2KwSuWISxaKuv5RSXK3cpXymJSdrg%2Fvck8KReWKgpwfw2%2F8qJoTPVxuQNk%2FDZtdpkfjG8XGuvKWawJ7znpbZIpD4a484v1cdJ6GQntwAodwLPOlVRxuhuS9laCjxVW5E6jcZiNqb7LJoysnMBi8JOQuirqJN%2FxTTZAxyrYEu%2FXmH452nO40sI4OXI%2FiuU6KIB7AV2p7roUXDpyI0k8DGFzhrZaeablpXxIWZ9Sknd0NYWKsdu2p4cF9bqXE%2F06eayToINXvIhYNL0mtoTtrLJD%2FxjHsPkEpH8xYvjXpgZ853FhCFw1%2FFy%2B4voJolysgjgm0XOlJI4rTzk%2BJveC%2BRb1FWFOMCp9m8Y8z9UMP3%2F3MkGOqUB4MEt72OZGjYZ5uX4Eez1sc19HS%2Bu7jQv2MCf7oxFwnQ3MgPACvbRmOFX2H1TZmyb5X7pBPYfpv7qiJH6%2Fl382WFyh%2B8hPphqkpQ%2BstLiTuDGsTibvUot5MDsDMDFWtLXduFkAoiQinIBMD8iOmReLrdd339v54jpPCRvOnivc3N1SyliLsB3b190dinV3ios5cURHCyg5gGO%2BEVtlq%2FLGFDR%2Frgy&X-Amz-Signature=5c96e03733eaac396eb63b3988c3a95dd53045bab2ca47776afe9306792681c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

