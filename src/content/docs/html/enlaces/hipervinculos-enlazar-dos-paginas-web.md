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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LWREXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3q%2BoxU9OZYFt8SXuTLWUwnSWmD2Piv5iyR3jqT6KDAiAMxCIUvYWtT8R67wCUm%2BEpltwQwPwLSZ6cZADz4Gszpyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMl1CM70hPYDJzm%2BZjKtwDCB3InweG3cmP6fRh4Xe4bqI1DG5XDuC17eu13C%2BxQzNZui3zicbr9InEc%2FmLFkBOMRwrUIlG%2B9GWaMyzSJLWBkwQsuT2dP0anOVijb%2BNbjGFDNOuLc6XGzV9ZlcUSPAiQPIPyFbZrMbvNwhRIV6KMia4epeLsv303DXdSP%2BfcTbuUItkuSODtGX93Vv2z3roD%2Bz2yon0HCo4mTr%2BcRJSlAXvEDkd6c2CGNUoEmy4nb9oH%2B2h9nBxMIQ4jrZkoWbxx5N511Vhl2x1hgNMnxgXrDHhOcfzS2UDoobPNrcoqnUEISh8NEdAJWYPrAog7xOgA6dCp8xlLEmM6nr2LzX5ZWO2OfI8Ud%2F4lT0de8RWwNRL4ZBP5b5uDM%2BfL3F5sFwWZJxXDsKofgIaw6sj5FO6Qq1MZRll3aB9vntf8Ji5C43%2Bju4JfjC%2FeMtlbHBqDShEufKyw9J1ypEMgAa856lDVAe4KoFTNGVMCXnKjxLqYIVkWd3i0VzrClOcpcEv50g4AafqC8fRW%2BR8zM5C2DMJggPFztk8j75M8Ie4DGIVtiphxGW5O6UCo6dw4WKHNXcKIdBz9roYTFVYfgGHMN63VOVSYPpGEcl3WU6gOvcUQvGRqEIQwZolMD%2BN9U0wjKfOyQY6pgEG1wbq%2FLFvjgWyrOZnEpkHEHmMuOyo5ynN%2BtbCAplXSn2%2BplGcG1%2F7IqCEu%2Bi23GD5s%2FDX8ZX98tf3hZxo0kZiXUW%2FPR4a3TMdcUjATbkRxor%2Fc2wftpYy6xQl6kFwOZ6nrlSUVVvvqGeJNkWAtrzIRKwEqdjb557z%2Bp4PVyydo05RbEZ6icLpeEgzVb8ZGcBIcBz%2Fj6ouwwvphNAm6t0v3Wv4GW6P&X-Amz-Signature=8e8c824bc6dde5fd15053f2e58051e89ebae6c8c07b0f475a80a5f6e7e5ce6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

