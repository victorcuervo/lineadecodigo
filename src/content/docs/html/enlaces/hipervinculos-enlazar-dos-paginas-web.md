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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6AATTX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmuSUfej3pWnBugRlI0sx%2BGuE0KPwg51BwDoPTkcoeNAiAT2GGCZTRmxTZfCVk8XBKFAXM2NV1PhTLDBrQ8QAfVtSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81VAPw%2BI2NusXEjRKtwDl8q0Qdy%2BMh1Zrpg6SxNFS%2BkoOita1NaFBICGgJqUBKkjxWeIAKXv0l9CNIWUzivGKnRbRN%2BNASNkwC4fAA2JGhm3YqhfYWLt%2BUte2OOuk%2F5YPaV6H%2Fc5rBH5ZP5G4kjjmB1WJgENHRztbkDu4u83U%2Fm%2By63dVJE8T9slJ6Fa%2FyiA6rny9bdmEepQSjBPo5QC91b%2BmIve%2Bap5TZ%2BC16pqbsaQRqGR6h2f20%2BaLtUtZuuhiPvc%2Fs1vmUNLvMFTYrh7gs5Eq%2FKgoSumG7aWaQhD3aKojeMGW2KT4TY25Aw0jRSkSx47w2liniDoDJ%2BrsY2tSGOaMUiWMnBa4njVbqOvP1gzpJzqNvhy%2FOU4%2Ft6xjM3dQNKvr%2Fh2wV3r%2FMAQ17A8cA7eDY9G6k9uhlaJnQdYckTppXkLUIh7gRFMQN0amDtLVYzhY8VzQ1vRZ96Z%2Fr2bk8rVAJKMb1hrtMO6S5Ohp8gZF%2Fh4P2Imo%2B25fAIMZmsHwJ%2BtaJSyq7lKw%2Fkd8a6eF4GlNhTAz7K%2FBQD%2FbM4cY2nn9Ct9jT1X9tmSSsNqMuh69DLktHnDvn2PTfo7FWhrrhTaNE159oG2EUOIaEua8dcHnzNn2LfoO2abhU98H1jo47p3zKe%2BV25W3dcwrOXbyQY6pgFAMoksYnYGHJsfRDdPVvoSvHFrNxxhz0tSlLH2SMSJsXFJQyZlan6FGG63TUSBqqLLjN77aNenVV4RPWfmNa21%2BVyWmoyouOWsp8ctMp9c9msvh9OmDVxYBbLighP4mgO6aSgJNVUWEK9vu%2FwRQ3a4DG8ZZDvdqXUA62ihXIxb9cn16urfhmTaKcPB85Fg6nq3LYPCTJQHHRDiIisLM3rns%2FDN2kgJ&X-Amz-Signature=6726a29aa9deba90f2e4568574828fb2303fb48719a3dde7a02f15b6c70bf7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

