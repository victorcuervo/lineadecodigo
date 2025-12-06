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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAQUOTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaaIlhTnsryrNUyEprIns1MIjkO4tausiMpaxamPtGwIgb3zQb0b3b7NxtV5ybrYbacwwQsDkApJtVYAPxBXFvAsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHiAjCcTE4A1%2F9jsSSrcA%2Bz9ShGD6whVVQW9fohcg7Nb6RpuF83fSKjLBgeVkb%2FCTCCvphLKBprgHEbPPUi66nRDWaLe1NmcGeqymPZgGYTloWar6cg3ilU4w7chHa18F%2FuCs77AdOXseIrc5T3qpSMKejCQGPMpuKaGjCDrGe1Y%2BPxA3V9Ozn9pb8UmuV3NIAmL95XNvcMhNpQNd05PIMcVFqUxz8yq84ld2mScFgwy9j%2BNo6CFCGzLd9%2F2vCQXPliBWKKEOkCrLqGpzJukbtnVYVGVT5%2BpEbeG6PgGEtvG%2BSDVuJilmD3I7TnlNRdBp4Q4aUNa0iUjTQdOQVYMCmKgVHJTL34An6GeRa8Tj%2BHxQQ4D%2B4zXFTL%2FfalSK7UUG3XiH7u1gmkj0JCN7jSOBoj7RoUzRvYVIGEEV0tQeFM38IUb8Kh84L5hSKPRV5QlWMGEoSccKuuwFbtcksVYpYjkF7AVa2K%2FUCmA5hIVwoM6YbPpb7OgkeeKs2ugez2A0aHPKzXY%2FY9N7HAYWLf1442HWagzqqFJbMndF5gS%2FaYygqTj74g5OwwMo5GDnNK6XLRCLafYYIrY5YaLDKsmAblLlmvwgcx%2B8eQxYPPAOojWvU5TjJh%2Famh%2F8crF5cCplywyvDRtWSXrbNbyMPjT0skGOqUBcT3iZJf0wbb5kI%2F32KV%2F%2BewNPQmlqCcQCR16GaczoOgk5WZEmSOqlGuo7ZD%2F35iUoseKA%2B7qJ7Yrm0Ap5ncbw34ddlnerW798h9jbwDz6A6dGk8IRVwQc%2FCK%2Ba7URI38kT%2FmpHUya4%2Bk3N%2FZHN3SG3w0y4GxUjo8KDdDnDc6Q4peUniAz4VS2EDWIcHTtqvfrOO1Qxy9i50kt%2FC9ntulrVzloXow&X-Amz-Signature=137cabb643ae0434afcc893899769e8bf05dbf4e9cd6e972166fabb6850b7167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

