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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEE6KOW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVMuinNgSV2%2FmId33meNkxCztlThBXr%2BrDfa6AsszDOAiEA8NZYUAY3bTHHel60tfr2Byzx8qz8M4bLxqyg%2B%2BPf2Goq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOEN6GtAGfQv4x6B7CrcA0kr9GbQuiroc8VKzXs6gopGFA74VbJY28SA17SiYoP6hwHmtzojDPCDxuJ1P%2BYWp4XRuw7YIdyfIRct3MCMDtlPHbicG87QyIQcgQ8mrIIXebRrfWYb%2FCQOj288A3IbLeOXsPJzqu3FjetbHJ3mtjg3O8anNdBvaole6A6MXqHlqTJWxBWaF7Tv2aXkfLds2IUEo5XHgRkD0Jls45G7MjzzCasm1OLv69sWMC%2BsYQ6bIg0iDEiwGDSBn4xqO28RYRlQPUN%2F2s2ri%2BtoOiCAzYcenwMD3PbPe9%2Fq2jLq%2BHPWKr4pVZJ1SgkjB50%2BstndH1dMD7JThXE6joOzYFRybRODMGqS9QzhaUcGY1PA9EX8QoS4lLYEUzA8X10r7aNYYoeOSY4P7a92u1eo4OO1mniKI19WdiHatCsPZpyPWm3oGbAJlxDILQE7p6VfWR1tHCHQwlN7jovqYFl9xXQuE%2FDOygDNtt11%2BrZmMfiwcBmQocxqY7j%2BdZWuLsqH70FDRFnemiE89AAq0sZdms4wOfT1SKvUSnO9EDldQhIsFdiycQx%2BnaVLjV5nza6DqXqE7ML5iL1k8NMmx0UfxScAvN%2BcvdSgBi83nz34ic3%2Fm9sQqhX9%2BLh%2F%2BSVlX4XzMLnwy8kGOqUBVS0PzYY2VelabDTd9cQgY8ob88g9kuSlvyFwWIy9rZKvK3BmD%2BkGijuqaKCtrNUxow6v6j7jyDrgPxBHnUZwAwL77WIuiG2DhrRrx2JVsphcLMOeIxGVDkE4aL%2BX%2F1ShJC8TcF2q8538vc2Vu3Ouvx8xf%2BSf6%2BXH0F2DBVVJPSzrbRSBclV%2B2RxWKLGAhD9AFHWBtnW3VGZs8db9H2oTGNTS%2FhJT&X-Amz-Signature=846e6cbdb489f7000b589a9c3807c4d32fb6d9f1c2ad9b36a3ef62b1ce83daaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

