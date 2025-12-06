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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLREXKY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAy3Z5ZY6rn6%2F%2BIqsTGDPXrNvWMbChOEiNtjuphWeJEgIhAM4BHDCo2M74EFbxkyOve%2BwzaAjc9QtkeW44oy%2BAzsExKv8DCHoQABoMNjM3NDIzMTgzODA1Igz3UyKKTjhkAvz8tUAq3AOMMPB8pCd2S9ziJEDhHpkibktdgs0wbEs%2FHmlrEH4kUGqi8g1IkUwntPDUdHnpofAg9Q%2BXb1II82jhcKhApp7vTVa1zgkcOPmsTFC6cqnCc198sBJGOCpsXiZGibZa2a0UMiN00%2F11gZFUpopoMs2l5c88Gz7UTDHl5w8%2BDFp7Obe6JkE7l123etjQQvc%2F4NktmPoWnkSqYr%2F2mepmCD0UuolnvkMQq59kkiOMgWS4eXbQwuL1vty5mpzkI%2FLrhcyE5DS%2FizKnWUcEs5RYTNJ8Jfu8yAxJP6JnwZ4uF8GzS81CdSGyrhE91JEHva90whb5p0RWiyVzNpsPJHTAmB1168%2FT40rG0FEfY%2FEzlLBQSzSpNvISOhrnWMjQCMKp9F6hKWuFAVa%2BiaTf3kSoDXzYdGATDMGUlQKHsEy%2F92uMouZA2kvXzqCVK2mVTrhWL6xbEt5m24iSO3LH%2B7YnsWwxqgMYKvSA7KVgZh8gowemY7YzrhCYu0pag3CtvP82r5L%2FeCo5ulQTdf1DHDxwLwjImJDkxTfLOUd6SOhVlJIipYJCx9s4k6rKzohcz9yJ6eEtnqnmdTERE9oQMmC9%2BobsYkSryG2e%2FxHwOaSnzMclE%2BVMBUYs5g3b%2Fb6wUjCsyNHJBjqkARPwBH83URWipRkoXiJAVZD1UvDH6smo14sFTjfIxxx7khCIfOX1HrnVyysK7B4mzXy%2FEJG8KbQg5u9bcK%2B8r8cLiBXnV2qdFbNOC8tpy2kUPG%2FguEkhphb%2Bnzp%2B%2FCqYGSdey4ryh9BMfg1LfrIbmNODpbUVrEeeV2IvmtKwl%2B%2Bva9i5Ud4lRQHKfwVSOpgjDSxzLC%2FEaqw4nzG1Z4GN48bQB0nY&X-Amz-Signature=3c45ffafb75820dcdffb81da5ca6cfa18c5ab9e668ab4122e8f2f5e76099309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

