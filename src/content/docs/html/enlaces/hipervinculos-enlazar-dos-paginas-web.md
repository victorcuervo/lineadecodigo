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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5DNSPR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdaeCjf%2FcypEUsF9H0GzYsgLX1w3W4Bl18a%2B6Gzo%2F0XAiB7%2FAvOaNWiljHZsLFNdINx6A%2FXeN2PC9OqcXSqrPo6OiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiff%2BVjVYAayu3VqbKtwDIzyvvXqh47qOtlPOmukSAHHtHRQq2yLcS%2Fy45iOCwxAD8lbaTz8ZoDBqGv3W0NG5NW9Q96EyijL%2BTxFhBdkce%2BraKXFlLW8AvH9lyEIlABKwtur3QKwyXXCa4tk0EnQEYX2WzhPcnfWKRDRAxeNP63UqfsvLAohBfgo%2FPUb6CebTWzkR02mbu1lwYnTwhJGw2iczRX7QSEEn1Y07emM9FxJXIYTeKgNT%2BHdQnpcMH%2BWo0qQto17s8f645sTuj0FgwO%2FJ8SEopMScMhrf8qwYR98pHRXOT7LP1j9lDHaIZd3C%2B%2B3qnngvxAwsnTZ750J6Tzd31yUrE1ItBRLw3BYd6sj%2BqxUfRABwa1GZcFlxla5dbnUYQ7%2FexGWGz3NXFOpIkxktsbTvCmquQ67SX5AoNF816%2Fhgb7FR9l56DoC%2BZpBYkpVXBpOKXdKvFnZcEaBHThLVQ25BSlP%2BJUNk4ZEqWx0pA14sw1LVO1JuwFcnW2Y3gJ51yPY%2FeAmdnCU84JS%2BJ2KkpE6NocF1wHh8X3yj69UIqwMDXBgyYHTwjRaFg8gzRTYmEt9X9JrqlXSSHZuktuO7KgLj9OsdNpq81rwjJoElrFLbt6Eoxi3ddNL7UwxPeStXZAqBGBnwFlkwg5DbyQY6pgGVdtftuZtdUputaxOmaw94l2Kv9SyRinJ36%2B5F5DFNQhrnydDXk1rsyT26N8V%2Fnr7EUrD%2FkyzDplPT9AWPQgybRhl%2B5U%2BwQ0pHZSvd12m9PcBWlXOPBOZ44ddgWJpwP51eH%2Bvsr7X8J%2FnXe64a%2BGECscsWtsaN8xjfrTA5Pe%2F4QXVROVaC5e3VaeoDGxo4lXoEIVC%2BqfNQkrv4xlz7X1ggmqTvqESW&X-Amz-Signature=14e72619223e17f62d10ad39ab221db8c1abe5512fe91c7da88c6fd3cca96652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

