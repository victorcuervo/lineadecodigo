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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BCSWGQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd%2BfR2VgfUu3Tfp1%2B05QtrhlFBEwNbKoFB%2BOdgDNcoiAiBT6y%2Bykg37BBGjoj6%2FVUVAYg1FlOdxmJwHK9X3CcIrxyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAAZfXorHg012C8PKtwDstAWXG3Fyy8SNjfo%2FxmzVcJ2Cwy2mIkxrVK1dS6fd%2BqB7kWN37iK7sfWEpAnJlwcI5Sf5SmLzwMuXhGGHoRvBzFJgpQZ3DQUkhyOk%2FwMCpySf7HhuB35Mn6AhAWyFzSIaDv6CLkr0kfRCQvNWHCz3ZvXvuJjUqgW8P%2Bb4PZ2c7kLao1zC2HPkxSxWCt0rtkpd%2BfSFXQTfi9i1eeYsC7xRWfkNd68QicWuT3jhSsOBktCSxy4WfgYhlV6A8BNMbk3phq%2FaVKfgQmzYwN%2BKh%2FkzlJ9jM51teGE9%2F%2B9828YbA%2BR%2FxY3Ol8GWRbG0CtAOAu1J52hJrpyT3HZk8VYO0gAMYzuRsMYB4anyMDclPYFZR3EzqYFVCsieq2GjjChEHUR8es107ZvJh9z%2FnOeJPoA3bgpE9CIEtMkwkG2ji1CdN4Z%2BzW3e5lt6%2BIiSa7DFuz4SdtfjJTCV4uRfB1G%2BFGyVvdJ4Ojm%2B%2BCoZktONjPEBEw3th86jcguArs3aJX1G2Ib4zQd8PfKeLIjDFxNVEldEBH3KqYzWkuz4pKASHSSgI9jQnKvM4Qx8%2BTungUlpDZFJKbLNkTIxfWDtJsAsP53VpAtL96FSu0r4izomQE3Y%2BgOtpl1iPrFUyQKaq4w8OjdyQY6pgFz3QTveGzUtRXPw7HL%2BZVx8LLnkay7EdQeBxE3es1e5cYFqh9DjxWXjFD80M5qkhajUUdBBUFrDggH6rGO9Kcl4KnoYsv84nl330S5zuHFBQFz%2BwFTvTEc4%2F8aIjzegCuGJLnEACmUS4WMSpUXozQb%2FMdSfar7Yx2Wg2i1lSBVlZsgCLkItCEEtQPUvk9Rw3%2BTn99QvnuWmAwQMTUbtJ86fsSBFOCd&X-Amz-Signature=c80c4103a90a4ff8eecc84002a628648846d734cd4863b250d7e3eb12afa1572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

