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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YULBAH4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZGGFVZ43H0N1d7ELTFTRNb6wtGIbHeF0GhF3yTnaWaAiEArCZo8q8NAfmKWbbPg34hs47vtGojEDv0gNxs7WNYEwIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPChMu8gHiA7m3o8dSrcAz%2B83%2Be8J8JuY%2FXOfuwJpOE6Jlc9qOm6e%2FaIuPtHhSmmoNkO5rI9KNxA7EtsjkFYctb59kvDaMKvVpJvJSfWMJk2I5ZAhlPcCniGCO09V9PeltG6CdwnMmNuaRJwZ6Hc68H9MNgboidEMZ3eMxedYLG36iL5OvhXDXTqBdzgHHwKfoCaJoU3ahWWyQf58C3hDM77fAQW%2FW%2F5lSnN4GtVlnOBaJVWk890f7Fhp57JQkXS8SVXITLBgoDqcXDKVWNuYlTczFWOYc%2F%2FWz190h%2Fftno8J%2B8%2FRX38QbM54xOORnGNlzqa9j6vHSLMWHBPbdvvj1HUH%2FXv7h3tgioB5b%2FKgMX%2BjrLkgFir6fP8oXRanKDIcbICg6NVQPJKLRyZY9ldN4mUCdBXWA%2BQ7xnmYau2p4eDmDKlkCTGp0wjtN64MIVqQsd4NRyGpwmJbxsrMa6wDVaMrE1TCrYqdT8RaFcpEVm45hLl4qhx%2F5Cyy3qPztOAFXDWiQKrr%2Bqn0f7MGihFQIWyu3O2sEZdVOzg1e0nrd4D7fBtlXipIQ2HXLw0OkWiAezu0Q5VXEO8yaBm%2F%2FI0P%2FnuRjoK6HyhmYH1Sy%2FzM1bre6DTTnRSYVvD6pJLe%2BDPEpCnTcNGsvyPz%2FT9MJ%2Fd3MkGOqUByW7TTlhL9j672NPiUGKP9tKT3my4TuT0pbI3CTkCjRRgrvsOmO0rqtb6OXj6VmfNdBYRFYZoygCpVN8Anca7Fo32hNRX97I7X58fgluXnAXDD7cM%2BypvyTMOzuJRF%2F%2B6W9Bz6UlVkyW3Y3LgHq%2B9kWiT9uFwJE48qkRZCzOfwF8pUT%2BFckYQa1Zd2URTupQ4%2Ft3B0p%2FYcCRdDcs%2Fcg%2Fw7JZgkmr6&X-Amz-Signature=8e2db6ed986a91b17b0f32b91d8a8364fc9a7f6d90ff76f89f9bf871731e15bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

