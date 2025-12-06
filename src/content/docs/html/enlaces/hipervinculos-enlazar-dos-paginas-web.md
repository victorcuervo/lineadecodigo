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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIX5EUX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3ZF18k6rM64wsXFvzkfiJLRNzjpSyaOWjZQZdd04UWAiA0KScv8T6u18x4Rlxu33GuXTsAzZsSAAyy2a4qpJViOSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMivsymNCdzzGk0XASKtwDBD3k2t%2FxGE3U0vZwWjCHi3CLg%2FRZFsiSZSxO%2BqZR4LRqv%2F8nGDlTRT%2FS3zjwnY%2Bktx1cVD1%2BGrDXsivemunGwPqlBzEnlZBa8oCTbifZT7UzPzj3%2Fsi1n4KM5CM1UDoQwXvJN4HfKuOPJOND4OZNpqpTZSu%2FnLqoZMpZL0ENkn%2BoiKviJ2DQyA5C3U%2Fcz17RY5VwJiUjfQ0HNXuQ3yxWOUfk%2BWi6b3I0%2F2lqst5xrutAzIBiA1hcVa60BHbjbjtL7S4twR7ADERLXuzfwXfqLHkiX7HbiTwS64TUuWjpjG3dPQ9I%2BqS6fKR0Gl6JPpNN4fNQgYa%2FSh%2FNznTLs2F3VnHOxMkOyRZfCLE49inFlbmHOZc7w%2FeYpOT0T0%2BBwk30EbPDWcAePZigMZPt%2BZ%2FTXzDLavQX85jw2dvcG46uhYndbHyzsIfJFm%2FceSbBrWCldUhs0Bomi0dtDbpjBXwCs0bAGIvRWlJ3kfHqGut7N3RxX%2BXFDKNWlWqCiqHauMbwda7fnkYI57ipERn7O0saYbZDBWz89Zux0k577jeYeuTR%2BuQvZJF5xhWFD8YYkoA2ndpefLA32%2BG%2F3YO%2Bl3aZcFwQMwjxYw22Jt%2BNV6no%2B%2B5kSECNgNklK5lWOJ0wiN7OyQY6pgFnH5C%2BsOMuawXfVGnz2z61saZee6QW%2FdgPVCHQ8u9ne0aQMTnqsqU%2BYYZQrwqgYANbUvziOB9CpX6mtc7CmVPjF2Gy2nSBhsCGtQwZ2OZueIIfVkKhCI0MAekufRxIR337jDBmYfWL2KO39ZUn4Pr05NvN8JRy2o2rMnm9rxWFCF0KyUvkMxgkXKh5jdH914AkTmNcRMPmbR2EFloufQnnmZh0zVNT&X-Amz-Signature=aea2d3a5e2e4f8f7c240ba36c1fe439237faf17796fb60bae7669235e1d807c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

