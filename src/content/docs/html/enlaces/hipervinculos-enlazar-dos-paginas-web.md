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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGQXLPY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWwqjNcG5aMaXv39R2EHwPSKqsfqs9wGmGWt%2Bdn6PunAIgWRPHZ6CwFrBfWNPq52%2FzUsPyIoZsuTm4ffOuouaeitwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR77c1PByl%2BwNr%2F%2FCrcA0iavCulmXgI9POnhVzRD9OnnD3ePLBUB0%2Bz8XW8LYndbbzD%2FpOjCa97n5fgGIDr2v%2Fsr6YTwMe%2Fe%2BVWbGe1MFx82f58R0k3vJDqPGTK8XV9ityymcdylrzcYt%2FqYjiTC7uVHkmfXuZSKqn%2FZfQMn6nTzGyPRgRzfn6qPGjseXZSCONWgiSyhNuUC5qQiCWCY%2BrP2VqiPebZ3hPeiJ%2FEz2HygpIz6aONtsI1XmEcmvs2cfeBQ0ieeQ0X4EGTAhDrfvNA2IWqPmqE2%2FUo%2BlrK5b%2B6dyj2mwPwdcaRnZ%2BCn8SrgEUnfsRvc%2BZkTjZjL9SaoHurrCjGeTKAYoUb5gHXBtz06nrJ4Ia0i0WLTsLHhlXXX0sSjNKtuCycnZN3u3HH5a%2BRACMgEDKgIpYFBfSyOisjc4pOAqCaptX2shKoD5mUo3D7Z3eUhR8ek27pMsYrc7MdJi0GpYYRBNKSqS8%2FUCTV2Bp141HSAAmkL1J%2B9X8ReomZ5lwEN6pHinTewBTFiVGotiNuRWGc0iPz1feraw5BpFm3PSPfJ0zjWSQgaXd90t3S9nF72Hh1v%2BaE0zkb3RXFF9HPRqw06dyxBuKE0DcpDXCj00FY3szQ%2Fz9NPjaPszP%2BuPKFACkqITVzMMbt2ckGOqUBLYLhMz3%2B2KGYR8sCszEpRc3rf6bOb8HzivFNpmka7O7OChp3jPswTt4%2FZQchvIxD0zLmpHKnGxxdmXy3akhSvkQUNL%2Fnc%2FxV%2Fq7qyYXq5So6giju3X1EgOwIUBUDnOLggg%2B6JQjUjtP7VtgGFCO%2Frtgb7UkFMjYcn3RWOXE1eimmwzmrJCyGjd5erDsvDgOOd%2F42DYRIZnapQ2iQSzXB5RZdEiV5&X-Amz-Signature=5a5676f816c63692b6fcc0d82567e93e5cf292af67a806e1f95879aa6156e957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

