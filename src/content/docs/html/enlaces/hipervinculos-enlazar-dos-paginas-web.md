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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47OERGF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGSGWjwWFotKSAzhuRYgjm4cKD99wiwp2JXIwyqG8yIAiAajQvUFBo70xkDMgalzQ%2B%2BjC%2B%2Bgdwp52xMtCsyc8EDXiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Yxr1jrQer7Yi%2F%2FgKtwD9NR6QrZtyzy6qm9WjoMM0qWI2h4HhfSqkRq2YL8Kz%2F%2BlcuBaFCV4lQsrPvM3X1h7hpGwaQEf2d%2BOwnWdeU5QsB9LOTp%2BDLMIucmGeKJ1gXPd53TwNjjNkJaLPk871w0N6d0%2BZRyTbGyI%2FGXrREG2HowfBTE%2F%2BANWD5m5qyIAR4bQ5au70rEH3fnZP7rp1fKw2gcIqBY4%2Bsn2MwV0yGR9z21wm%2F9v6VpA1hTi5eabv0N12rC%2FAD4hNDei7wH3zoIZJFa4cgwaeTJxJ0qlfZNyDSPobA44z4Jj0jeAMBb6sEYe15QAbi0eLvgWqBNQ0%2B1FmVfNsK%2BU5XFzaraJyA3FJmtfjE61hivBLEoY9IOZ%2FuKKdOR1yUzVsGhxFPK3F1v1NwWftzVqpWUo8qYfzTj9%2FqX1tDPyYVuC4iqID%2BjsvCc36KhfPS9mK0tr7xp0828Q8njiyiF3PFLojjnxvQHAffiIpNHLeUzzQXztIsUCsvTKeeY7Wfjx3subEuBsutYPd3zE%2BttniiS296QARyBpHujpDNKa9Hu%2FhPdRLZ1KDA2gFUq1hTHbW8dxUoTy8wFuDWT99woLCkoVQwfMfGtfaBH2%2FVW7svFy4NnG0uN29b6VUNPwfrF%2FC%2BVepXYwsaLYyQY6pgHDlJOIW7gG5aPiS%2Fvo%2BS%2B07ME1zelPjGYoavQtWUkSreRzZMO%2F%2FMYniXRYIVr9wIb%2FkcyM8Hr6i0M%2BMm6C8wXB1rnrbGFbsHRLvjwNq6mJDs%2FH%2FZWVxNnrFLBPmamiMHVD0Euc713K7F%2BcPSuDw0xNDQFtlayKM80Mxcr9%2BtK61c2w2D1mju63yso1MA3rhrxbiIrd%2BxEIvGHkRoGgvqPov2aNVlPy&X-Amz-Signature=339e53cba9ecd5b7a25f5e6d486f95a5870560aa75ee869397003cc2efdfc57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

