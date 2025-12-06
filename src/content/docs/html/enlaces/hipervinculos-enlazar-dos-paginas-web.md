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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V56FPXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf9x%2FLMM0UnsawlNBY2GHtZf900wLykwz9lDwrWTK7uAIgbl7Oh2pQFF7cpNxoO8t7ponGjLRmJi9PlT00Qap7al0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC3p4iHLp5wP33UMyircA99ZcNgfHJCihtuqZp8iyle6Js6KX7jqwyeRS%2FlBX0RSQI7GQopwg2%2Fb8IGA4BNRbW6lEACfbOcygMU0Jg260VcMiPMq4NDdTf2t43P0jsY7qSPkkDa0iCeHG6rjMm%2FfXvtj2MmvxdrqbpS2i81vf9pJT2tkZ5pR0kH1JODrJ8n0RhbdbfJPGuW457g1XxSMLfMobWoehQtSF1t1JSmj%2Fkiboj4hyHy%2FqQmFMIlVxuKxchY3TozFMQ8dsuRQIlAusdFxl7Nwm2m0V2nc7UwVyvWn2q%2Btlg0Kd8euGc8EhJidj38Fn4gKXUQx0dnkj7l32E49f0CEPiFFhGmw0F%2B6p1LJj93wrJz2OH79kDYhT0gWp%2BOxKR4uyIK8DKhd0FlouAbAQLzgXWgvOHPNH3fwcviCFI6YXS9uCi3HcQfjaJHuaccysMeo1WWTHDId4IHZhtRugRsy1Z1w3HsLT4dPWHTTG9%2FkZkfJAtwwhYbP8ZlAWFTzbEsLt0c1K9k4deldeKAqdWEKQXgjEIQfjzZZGrxnK%2BM1714G3HrSEjdefE937eCJxrVnkwre3DweMQH4QEoDwEKg80LjhOErH6VtOt8rinm3e2gRbF2kKpB6EdIQA79WsrwFSl7%2BoEVUMIa20ckGOqUBMSSnOPlzHs4uZ50ueirD3SWlovcs66IPJElt69e6eIgwh%2By%2BU3qDvZer62aYt7MbF6gN3VzW%2BSFA7ogf7GglmLyqOtNr6YzDdS8urxT1sgvcznrqbbExQmdyaVHlTuc9SyQvJZSaFaNGEUaXhblzlG7DV3BCIszk1%2FwA0cDXnBk9jZPTmUXKM%2Bk3vFJIPOSNETFUCBld3LhhR2Qmlq9tiXUqHrl9&X-Amz-Signature=0e1e950d5d276e111463958b6f42d0334455a0884a3840deebf1ea9fa9c980ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

