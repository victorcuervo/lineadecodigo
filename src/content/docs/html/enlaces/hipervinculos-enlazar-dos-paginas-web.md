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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOZV3C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw5%2BR2p4u%2BbD4UJErE3YQTcxNCLvQcL0hpJwDJu878DAiBa4gmCUbdHmeWUFYGbdnelgZA3O1%2FFD7%2BIfiyTgRU%2B9yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsnRTuQIfIQ0vW7%2FhKtwD87pE5GGNHiENqPI%2BOzR5ea7x1xFyNwsW7GfPuU%2FWEZQ1wFHhvtYKW9Y93l7B7e1qvjBz1se%2FhTD1MXI%2B2AWdBagbtNWDt7oPspkpeTRDvOdhEkfBWR8TjOkh%2F0WWkkzDRtYU%2BEb%2BHRWSZNcNGf1hODGxz18kDjfENkdXExwHwhmiULHcq2awum8vQ3PCkL00%2B9YB8%2FeHKc6jUz2BMszRY86bmKe33PsLwqHMlkQ5GTf5viGVYVkKVQq%2Fam0tN%2FYPn7Sy35Vq02J0Ue4gTC9Pz0T5Uv6HP3bB9IVMZ%2BTM4MICGpWRSHXGjnkoN6kvMXzL1Lk%2BCo8N84jLAMlJCqHBIMthkjuouXdE97IA4tna4rVi4eajVRl0VGcVlPZBSMaibRyU9yjbifpcoRbv%2BXntvrTteXtZ4%2BiFHVAtz4e3vWHTownJYhYcmRUHBY08j401VvUiXVtAFqPerysUzFqI7hldDxEZD%2FAD3gReY%2FpMj%2FK2lf5DhB8T4Z3axLvJHuliT1ffcadKlD0G%2B6HKGA0OU5bA1pKeDJENTBiUz1SjFAfqAsHzwWFe674DnItmidqJViv%2BP2UKOIb4XQaJCTAOyaADZPMKOsljmRyXaS1ZHN3Hhb5WEIdTyJpXYuAw%2Fa%2FJyQY6pgG4%2BfU58X%2FFHYcnBTf7ukRaMfsKWDnNijagUL%2FwTEGQDg1cImpvsdNvsP5466%2BbX2Xd%2FWpnAOFd%2FuffQNriKlZhaM32wfgkhxIVKCcAHs4jCi1p2j1AdBPMfozw1EAqLQDc8SPcdXGSCAH0SXjFwOLsS2PmrVCMQclpLqI0Qu0IzHnuUPwr%2Fs1ww6qKDlaXHTq322pLFdo%2FIJOC9i%2BX3Vmr%2BkJXHOi%2B&X-Amz-Signature=f17d156b697e3440b8622b5775ffc6ac6035a3302300f101bd924494f3dfe52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

