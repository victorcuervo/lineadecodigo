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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNDRWR3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk23KYR2o5pxn81%2FnmDK2WKMehB5136Wq8vwUPsILvRwIgTnxVxLpdLBVJ2hdTeyyILZ5C6IL0zcWUnZfqoQlB0Rkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAe7EHZ9wiP6IyrV0yrcA0BmCuNHzsqs%2BKV9APYQQiRo0xQeP%2Fb6xCgi8XF%2FzsR8srXeHSWuq2QruKuEdW6fXyc7bQWrkNtmkkrGde2c6fcK8g6%2F5Kha7Rn1MqYNdnd3rFdiScUGi8G3UT%2FMsrWAr0iqEVdnuwpn8xtPpGdrrxAeOHziysq1JtHb%2BpyFEPBQ1V4z6ctczClfmheAmvZenO0HBJE76%2BE%2Fau4UvZY%2B4iCXH%2Faon166L%2Fyd%2B75uTSzb24UrYBDOhtfjHhCYg2IFMY7TK6ZdANohOA4aFVE1TrxodlJwskUL6iiRJbLWnZ05XXxZ%2BpIaAmtAH2ivFJ%2FViUzSYQxHh%2BjP0V0GJ%2BeeHx5MHR8XJIBjtmJKBcKNYOz4zdgfUw7%2BElJ3uNo%2BItBgsOiWCxwrIuXflforuEdBg6R1MfRJloE3yRuRXL6l0AvRAccz5qydSQ21EpujeGHUMA7%2FMi3f2Pra9tTxDzpCvCAAtdDYDglR%2BRqSCE2QEmC7plIbBaqPuFoB7KDc%2FXgU5ywiGURqqvK6gIZmW%2BezlsOFG361Y7y7ZLbM9F3VEdMCy9qarWNEqymcfU8k%2Bgek5zsQbgqjqzuky2gwUy9I%2F1tRskhrP3LVpAAJ8EScPisQGrtX%2BFmFxFrTj1voMN%2BnzskGOqUBTO4znwjz6Va442pdJX%2Fh086Wq0R%2B7PYdml6VlAnZpmG53Qdtu1RbTraverOPgKCwVFGHKnL20hcFuc%2FbFOsNg9iefEsz5vJNEzXNTrfoRyQT8v1crEfuNXWCtTI76UgM4elfH7YXMl2cuL2mmjtKmKa1iN%2FltuiCC5ofgNC%2By5gi196VRw7b9hX1boB6%2BgElRIrvQBgBrHVUqs46zJ360MeIp%2Bh8&X-Amz-Signature=b183006a73d0a1cc706afa09000e364e144d21990cfbbf7962df27e2fd32c8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

