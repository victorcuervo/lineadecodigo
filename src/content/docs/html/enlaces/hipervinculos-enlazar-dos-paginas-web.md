---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMT7JQGL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvqLmKtuMvpKX9uZyFKqmKRmo0QoG4rEzUGzmW%2B5aptAIgSdFbZhiZ1BG5%2FBCTHyxLebSWo3gKSWLREqF3%2FSTEUawqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnZ2dr5a0Zoezgc%2FCrcA5AXH96tjPgI3zoDysItRB83F7EuuCxrvxOx1GJ3j%2BK6oDMGaVIT1R9Ew%2FN8vbn9vn38d67Gg%2FJRYit%2Fguen1qeHPLFaYjjT8xrRn2mGdDri4hfZnUzYoZGinOudVN00Msrgh2cXxHZ%2B85L2eh%2F%2F9vAqrkJHU0qjPHDAQUL2wFu626%2BrXsqHsoZ%2BvlbNiSpLgwz2lbPZmdcjsJuGZMNt%2Fk3cZhyFHkUTrrWWz1O9QEQDQ%2BF58uRSYHyd1Uxz4yJ0D7b57OhC9cRofX6s%2FZgt2hcPivmYGdnEVe%2BcShEFrtoLYyOfSaDv71YxM17PD4VSG2YtxoQpFEtOIlm63kSRdT1lZeUCcPKDEXScsHmG0v0tnPgtlG5RsnR0IVOu26tGXJwdw9WfV3k9lE82yJ1%2Bv9Mh03f6DdI3J8VCOoVai9Z8fHFaCBHn0bFxOIR%2BQW2CLoOqbpEiMCGV9jpALX0kRLg%2BfmQeEfeXQcaZNdYiPQCogeNatVv0gC3da01QCa8KxKwcl95UCXb2jD%2B9ek6idXAN8IQnWvfgDrtQZWk8JztiSpzSL5moS7V%2F2RGBxqJwFedG0hbl7yf5a%2F10I5S54O9TLuabBc0Im%2FZAllvGqZocNUx%2BU4vX8Ftm5HPYMJj%2F4ckGOqUBDjScKfUd%2BU4JbbWIxT%2FBgzUJCd4td2M725wPTVcA7Dk943w3L169un1ObcUod%2FBVcWXD5F8QrTQwBO5Ck6kvq2yIzReD2C5MIDPnTa6H6Vb8gS3gJAiCC%2B8cqlsJCM7uCWbuLNTr4xjzSqU41S0Y6i8nRVZYHzTQMUb6EOOgUgv%2B%2BdkPe9PDxJsRoci57Ifbmg2MvHrmUHeCKjT33gbw8TYzODIq&X-Amz-Signature=81dad3488fdb9561055530da8df02a7ba6881665ccf1aa46005865d386221d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

