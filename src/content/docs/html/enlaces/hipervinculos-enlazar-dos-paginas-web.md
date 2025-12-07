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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=6be6d8f1281386a2f7f34d92610a6e86732e0be1213ecda255d5591a7b8bd38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

