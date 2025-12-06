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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UDXZUC3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BaMx0ZAop%2FWIVrhM4PrXaGrwKrAw7oeEYYmY8lOiSlAiAdKHbbYLc332LNMyVeWG1Ow6QJ2ArIuW2AERmcPMCwiSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMP42Rb%2BFwL4hf3wS2KtwD0SohSrzXJyaCyYiKWO9x2xLh41vlPa25XAUqV7TqmOf3FqOZD4SdfMK85HWFcH6fVE7lXFnEvmMGwDB756NlGqPRYbIAn2oc0uflA29nqSWLUuvWA1jlvjLB5i4FjqoKc8LHFeg1Ky1z5h9%2Fn1lH%2Fxavg4i81GbcIiTHgFH04hP1o6QhK2QFGDhY6mCcbh%2BECqSjiJ0vjpWeVMBBnCLj32eh98IjLjL9tMGOrMINZWZ2Otknqi06tcZi2Oul0IbOe%2B0YD3wfNy1SJdm%2FFeB499N%2BgYr4xD%2BYSgjUGAnrv5v2RvybfntC94CPG4umhjrmEcd2PMUvpsLlqpeJ125vgVbZhss5pWJOQGHxeBzbTPQKwDQof4NYW%2F4RNo18IPyn2Zq5jhILquctZcASPdIZiO4BlpFrky7434FoXltzoKGBJgdvVSe7x%2FmXDhJSZHR6imN7D8k%2BQ7r8cG3%2BJpTdIgDPM0Dh9xhKm77OT1xsqyBpnPfB0YQiR36jXDcRUvGMlE74yBDd2HHlhd02TucdV5wUjtGeC8fvVKoOUYLnltAkLSB%2F%2Ba9xeCmmeOIqPv%2B1Z2079OibEi0TI8ljGWteIiLNZ6Tr%2Btg7OD6QcBipwIIl44SxT04k7qSEL%2FYwtcrRyQY6pgHxZXQiypuWCSGF6JFafU64jUmXJg8RnB%2FSKJpEp%2F02ezxLZk%2F%2FMv2eDNhFAgcNFTOLiCx0l%2B6jsIZaT9%2BaBVg4awFELbIDDoIP3Kr5qMypT%2Bn10jgQGIROP2tEgIPLgzxdgHgePEUQqG6IE7WmOR4%2FVZa%2BztGYcPNtsJ51XGdrGI51mcKRRHCAXb8DLS5%2F8GTBZVOS8TUWaVF4PlkBedQdrrsq4T2q&X-Amz-Signature=41fc6fc2f1aa0b946398004b1978765d78ba2a0439531bb90da2b7e6b4a2ef45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

