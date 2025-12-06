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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHT6YWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG0T5HPhAvTfHHNPkSgZEQoX0J2V2m%2FV53vA0DI9b8rgIgSmTX8RzsKia9mM3vft2s1oe3eqE%2FK2FTlZ9LKonwmsIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDO%2F78RDPVeDj7hbwKyrcA0diBdXtV1CMqjEbJ6CVqo2mgFTueIFBjSN%2FJLXY9oWQYpdTCbRzmkJZYApiKBmFa8JY9NNmVyyhhAE0%2FRXPP6MdaZxb%2FqEndDuoZDnBdAsmuyAEcq5uadLxrvnMWJUc9rCTssTKTZT38%2Fl1Nl76wUqLq7%2F5cfcCjLq2WHFgWIMJctUemFUseFAe9ViRLuvoPeG5PjjVYzgWTfm33P4u2B7IGAG%2B1%2FpMNXYPqROf0knFVOflm6O6U3%2F5MWv88BCjWMzkqfuzx2V3faYbTBblUrqUQIsoqUovx%2FfodT%2B8eeULv%2FtBEZyu4RgLDrf4FjFJd8J2hPNCU9m0jZFxV9x3X%2B0uP9ChVgaRhjPBfn9D4QmVS5FC56JLkFH4U3ms9NRP28mYyss5TTEEIvdphOWaF0W7q0AEKmEU%2B2uPXw7YEgtXf3CfNL0Z5bz2bTsNlBALMitxRlEZv0%2BW%2BgIeyQ%2FK94gtMHgi9bvvu3VLFVOzQVkvEQQtk2lTtHkqoSWoh97rE7%2Bf7MeZqV03GRznKg82nfh0VduYvMcImKRxDu6kWYR36HxxLpqHzeLy%2Fi8s0H0byMW%2FIb6p4AiXgZKSh%2Bo3p4W7M1%2BuRGnZBX%2FL7FmkVmZG5COIxjcFqmP6IWI1MIvozckGOqUBMJeVeP8dC4jGo2m6QWoStksgTf94IM7zrBY9OXeXiqiwd10%2B7y%2BmB7Kr2DkzSKJB63isTns75tk6gyoPmVhQnSX2DsTy4eoAIybBzIknrekix6yfXQNzx9PbBeeLCWAP7hmu8Ks5di4bBLwjIEa%2FykGYMGfd2bc11msa5uWREuN7KB%2BJ7SIhPhKnctD7mQxu2juoEz3BANCQQnD5pPS0yhs4pEiR&X-Amz-Signature=78a01972b6db13c4527d147fcaf312fce7281bddda548657facfd94542cc01b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

