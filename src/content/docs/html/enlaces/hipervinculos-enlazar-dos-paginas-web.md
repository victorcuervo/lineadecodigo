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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5Z6KUN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm9AE3Nkbs1pikm8wliHpEtG4O7%2BwoOFShzm342q1CrgIgFpdRJsw8cCWlKmAxy8oUmAfCDuyK0iKAOxHijauyBOsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK6jEUV%2F6MPZAGUM2CrcAxvwtexp7Ekerx9IP2B3RUgn0iEqWIJ352rSoLXSX5hUQZif6pyZJTOpVYSo8yLeJJC8Wf2fnQED%2FJPV%2F6wO5yckpbYxnqRXsLUNvli%2F47fkxZhBJRIIFA0LAMpV%2FT%2FtJ6a0B6lXpuEmTYjWof4rBHseqEgyjsiyad4m8PK02IuKEWplrgfEpzyYCTXxMF1mcCL1caItsHMvCuSur6gyLuYKsSSk%2BKn%2ByM9jtVFRDH3IX3YVQnGStp5llD0GJDouAiP4p58vWVE%2BUkD8FhSC1mJdmBTnI5kkg04xYYPxdTSTva%2FxhkS9PxmBZm6UYV633Hr0xY7GGhFg1WOQ8WyAlUvY9YPCOWEv0eCtrTApSa1Yi1oudhPPYoNJYGvBi4R7yRH%2FtzXV7ZrTFBq7bAXloNYRXz8gupl1qISBSFUb26SsAwGwFpxahslNUUwZRYvbbNoMDx0mlGCCKtSv4P6FIyrKRmY6Wzhbt8jHItcFJmIMdUrRNA4RjBMvu0uKuBOhPnz9nc7z67zLZaCXsTm9YXK4dnwy9hmQHuE8v4j2k629LQjK1FgUlB3CcjI%2FtR4Fc7RJeLNb1hCI13y241SgAFf3hHE%2FKKeUe718VQzVMRuWAz3FBs7b5bVC7U5ZMKnrz8kGOqUBpFvqKIp36btrlqOjtfAS%2BqlDtK%2FnU4ulKuP3ffV%2Be8xV7uCt%2FY6BAcR%2Btte9qHj5LgG8D0%2BJI6SK3EtpVcdCkmUOQ1qdtmKoVVzsjAfiPKaPrUYqtne4X8Myof%2FGITqMHGbksUczTsYSURl5CVl6PJfqCheAW83ofi%2BztcUqhTKgxsOmweBuhax2yQfPMQHB7Z5hxciKp2tFa22AHrbdhyuVbPnG&X-Amz-Signature=433b19d07e41f93884388ab39b2e5b1511a29d62cb9be507ad973abc61801fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

