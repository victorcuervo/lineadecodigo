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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6RBYRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4NWflylbfkzI8aSt09De3PQIOQo9ykQk7gohHgJlYOAiEAmrFGXtEwFD%2ByUaytx8mwoou5qTWEgLQpxM%2FTbc1r0DEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFqj4POkte8HQ5mmOircA1BkT3v%2FeLygqzzYmutuS9HGXinO7nnIN2vfqX3KqdP9rZyT1y4RlmMPIExc7akcGgtRCh3wxp%2BgQJsBDXSmfjbIPUGTwy5s0tpCV4%2FxXNaUQGWdSXyBYUwiwgieczhAzIsfol1VIxf5uq60NxKbvaMqxe8%2B83azIZ9LR7aIMWyG4M3wYeSrkOVJNZH9X6nHoRLv8yu7Oe8AyCIJXCRaN1RfWw4WBLw%2BWhgVL4%2B8FSEMKQWl1Kqn%2Fdt%2BHAk3543MUg1tH4BzpZejJcz7yN3HIPdTOEMLU5Ap8D4Cq82vlDXSTzcfxp3huayPMvELQwVUMgRZituaPuiv3ABPns%2FjGGr1SzefmIIBdnSbRVtPetsKzgo0ZZ8nUeQaRkG%2BcYGTaBfxQxOmWP2Seh4dav2Ce%2B0WSYukvr2qAlpSAgklDuXnkqie4xbOP27AUVw0h1hQ5YXistaMbXXfhN45RfKrpIQ%2Bbt6cxdUjb%2F5UplgSNcZ7cOOyqR0fQwpiNCpm9iwqnf2DL9U%2BG4EC41ZGsfarK7U1xffxOLnU%2FWghNUtnlPsq9gJ0HuqaLkj4OiWhZ%2FFBfC9m3cIaucsKL14CQAPBJuRjWT%2B6%2F1iflTDJxZV%2B%2FS5W5CIvEerTVd0%2FULU8MLLH0ckGOqUBuf07RJu0qHR%2FRE5Z7GGWkBBax4tKG7VYxk44XHkK%2B2OcCjuErp%2FlLNpHpDqMHuMdNXMfSx1Ory0fD6kwVQzTOq%2F4XV%2B88e9fPIrZR%2Fb5x1fWbPHfFvgf8R%2FQyLUF3s3Vi0kc3gr8uJqArEsRJF%2F7Fqo7WvLkl5inEI5jz%2BUIF68m686UUg5C1j2%2Fady57lxEoTJTyBO8K%2BFCl3mdM%2Fgpw%2FYuPDs1&X-Amz-Signature=2659f2bb7559e4b6f666e532e556191cc11084297aa2d1ea906d902432fb8b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

