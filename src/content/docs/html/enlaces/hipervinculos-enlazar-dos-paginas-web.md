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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKX5GCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F%2BkUbyav2c7dC%2BuUVmIhXByjIUFBEt7bSiOb%2B7e5JOAiEA1xsXYcVHYlM8d%2BQEVtvD3xFBbFengJMPzYc1j7AAwMEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETxOiMLFjL8iSCNuyrcA%2FTtu9aVS2oA1lBQQD3XeXKPpIQgOcT%2BMIdJ5eMsWIql4Se8ZCoGsGCAWD3hmIN2TgTe34PsQg1Nj4XRpJfq3nTLpcocvrDgsvWJsm5gRzjOeqKo18i9EpFRdkeMNsWErAHSHzY1iS0gQkXlZjeL0X6nBAEjmtJB24hxZkncwuvQGen1P%2FolzNtBjDoed266SiOnv8MsDF%2FQFVIZtZ0bi7nOw%2BFjTci4IzIg4yE%2B%2B8qxSD0SFFdA2qDz1ZUVllCKv8ihfwEfvncWUaZCEqWaHufRCkWdnr2yFG71wF%2BKRHs6cRcy4jB9oFO2kJXp0CbbsWG8DIoldssiKGVyyrFV2aZnxOJDQKh0VVqupajxZZ4c3rAM1RD0INvuRAMg8lDZIV6CtGwFjBu8wlKw%2F0Eo8hRy3%2BK7%2BE%2BHrCCmiAdcHXPxkbqWHtFATkskHfils7p07HMAib8Gr0hD0%2FWgcwqzIIYZPnZCYMN5Gjy2SZAsuiXRQcIicuclshko94mH3N0vyELQstQCaXL6W091Yk7NZu4y4UiSjSvQItRKndPxIcKs%2BGqe5wfYljAlSZRYd2wrSTAvrmjGTXgxfwOj%2BAw7uGy0M3xvmLDgtW1V%2Bvy%2Fcbd%2BPEpZtW2vfoPK9C0aMIr90skGOqUB4O%2Fy84G868RCnfUVlEjoHVZTA59%2BsqPlvk1mBtLfnu%2B42DWJWsH9HoLGRgiLz%2BTXtE0R8o9xI%2FsLzSeT%2FdeM65ToGC%2F7jp%2BUT257uztwclVAi5UAcCmAHJxz%2FAwv2YxNM3VVP%2FidrU%2Bb97SqKDYxyCRfx1KJ5uvUdIT8sPl5qm5r8NrsfJ7w7f%2BuHvXC0cGKGxpmOpPUuVXHJqOFpw0ICq37gCuw&X-Amz-Signature=7e2ae4079e2ba5f5c2ba57ebff1788099d6b9e3b4bbecb3968bcea6ed15616d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

