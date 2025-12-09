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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSD3QIAU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsp6bB1cD%2B1ojdT3%2BKxxqvAORadT0gRzMwldfVBpkgmAiBnrHPluzq3wcY8fJCOIaYBCpaO8pV5ZV2tgkJg5qgLoiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBehHVSxjbkVQ5QEHKtwDbm%2BwfFxW9tM2Xn8oIftUz%2FaPCVoX65ruqojbpKJjt0TdnX59P2ITvGGaaAfW4mbAkmlO1hak2%2B3ajawtFkhCyLNMGbuHi7344HqNDEizir9Qyud9S0BWB%2BAEjSXDRY4LeT%2FPVhX5n37z5Iy%2FeMDehoO3rlgSY1TAoTofUd%2FYK2kpyQb4bACekVURmeyZauufrXxeyIJxCqDyiQS9HHHsickbcYd%2FWFBu%2BDj1a%2FWHHMsmzSqsQK%2FIUldXst3zH2aRwaANrJ10bs1ThtvOHYWssmthiFgAsTDE6VrewqdMDt6sx6lYzdekQAwNltYQiBeusTgn5LQflqdo7buq4U%2BWYu%2F16r4OeCSTL1%2BjJfQNtQWwChu1%2FStf4Nx1yLJaQqGq7xnDsOFMk4BTd3cpAP8IjMrBICYHHIqKwVdxf%2FQZ8JFwVRGix6TTy932yffpX2PF9a6ajXBBpePu9%2BPmW5JzTsAPZc164A%2FrVnoQXYRVIqckmY6aucr6kmF8isM6xQ7dqbD6H04qbg6cr%2BU2JhKtX5j3wHN9rlf7eL4%2B72ylOLdVkPgeesp%2FdDt5EM5FXwgaGXbqa3BdXfIrDNIKXZPxdJ8ik%2BtJO7Tp%2FLTOOJw68T0tc9RuYQuJVF5%2BtaEwnpfhyQY6pgG3zkRT1aq%2Fr0e8fg7jGxwtcgT576oRwcV%2Fjmyz3yIdm1qc70q56%2FlyxEPf8bAoB45%2FhE2mDtSQMviLkjCDL5ZPMZj7gY7BgeBJ5z6kFXhIW9Ddr1DGhbPv3VD%2FXUNtvPCQuIoTC0pd3Of86O1kGT97b1mH%2Fb6qCOWHh81QLBgIuYWE%2BtqCt0EjaqIhl68pINPlegYXFJpkIDcEpvtmLjo1p3EMhVlS&X-Amz-Signature=93d41c6e647bcc9ed81d772ab9e86b663a3d5cad2fcc37daec36c9e7097f161f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

