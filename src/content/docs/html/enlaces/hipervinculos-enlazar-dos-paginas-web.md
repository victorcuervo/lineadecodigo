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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVUGCYX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMpgQzaSYdnzqMlaKTmK9Yp%2BciBh07uRtLoMUJpIfaDAiEAjsLb6IGZCgzGP89DPSTbX5w6E3QUSWja0jd7kgSs3Gkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE55hMNePFT3pjsRpircA6ZQC8bsPINa%2B%2B2pdzSEavxMGV6SctHCso4XeqDVl8EZVsSxPvr5z9yRbI99lMA2zWirGPb5W8ZR185pupe5y8vZULMvJJrVhWK2S1L3ViD1L%2FTwex0KCeF%2BZnUDAFLX2Y1IXkyHPiFFfHqvju1RSsFgDXzmyBGN9ZQKXbdNIcMGKxVTuDmGaZTriDTaqFNOR%2Fluf%2B9kpmC3W91Zp7NH8uxgsM5HZs6MRbTXSyXKPyyck66LDhgZnzZ8xewdYQwfIpwIMtrjLC5ZgJOn0LCkjzc8caqqSwXnOd8p5ZlYyDe1pLZ55YpADGGXS7xIh8PyaJmQdidPCEaGStxS%2FjvdiVdeA2%2FeFghAa0wuk5lqOnO8VDAQiGNPwsf6X8wXhwjHIATcU807ww%2Bym2bNcOOWXLWV5v%2FJQpQv3hN19MPZiYGMH%2B7FSqV1FQdM0lDeqT2MgkgyIcSFK05L3D63K0Tuhux1x97SxnkCW%2FKrw0cypQGLwkpPfZsTZxGzJbvGHNCfvThp6qUyB9SGv2Y6A4AcTaS3c3YKLClkMSeOMnmmlVyTrm5vbtSUIA8XqXAFJxdCuGjigeFXcfjDkCOZAKt59esyQtP5EV5XLuYbC3ySevfbblG0aviY0v5M9vuPMJy8z8kGOqUBC8pZTWMITQ3gMDuome16uDWPzN9MDdUha2m2WvCRFDEAJYCXv9c9%2FyuUZZxbRE7TAZRuCEMpfzlSD%2BR8DHnBJ%2BMpx0BsSq%2FaMcFSa43vPfFW%2Bit%2F36aGraSerxu0ao1o4VmwwxfBfseT1WStz0PD237jvwIbzKpDqUUem1sH47OEJrcxe1nwDsLbz6VfdNUwVDNTCDJ4zvjLR5HmJIF6YNWb6mk8&X-Amz-Signature=28cacb3271e20767cf5ea83f53436f43c47efc776f3df7b9d5b875ce8916814a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

