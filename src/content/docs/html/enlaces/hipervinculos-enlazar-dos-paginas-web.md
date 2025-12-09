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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSQDGUC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLTo3EKRMwaKqWmY1h8KT8yB0Ivrfv3smcFkfAJ%2FRjrQIgdGs51w5Wf4ClzOxTnPv4bomwBHS3lv0y6Kdmshs5B2kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyXnG0CdhMtOD3gGircA%2B5Xb%2FU4YINZnLsKBtx%2BTBYPVYs%2FFIZ4F2DjXiVlAzNhbiui4JAk%2FiwayrjyP9LD%2BZWs%2BFvCR4vNYb%2B59BXhjZ9ZFK5cVq%2Bv%2BdAiCPvAM%2BaPuh1%2B%2BtJXY2%2BiKU1e3DtcpZTTIRVZBKAtyh9ZcS1rwJJrKdjYKFjqVEDZuporrNHsHSQVoM%2BxJ0kprgmFlLyiFb8erGSbjeYCpnnppN8DnhUS0f%2BUybEy95JDVK6%2FFAGcziP6VP9w66YUzkjIcRpK61w0NyQ2ptSlTSzW6irznSFHKqI1uGqSMAzyrzDI%2Bv3rTgBoZ%2BN7qGpytuzkaHA4O0u40D1K7fs3DoAklGdzVKHJsthbN4qR%2FRHaj%2BbGxyi0Vygye3YJylRtwxuG0Bx0tuS2CZ0EIUt4QgBtaP%2F1KvEmgHz35DVohyXO6WZjiRbJIFfyz3sN8VMofUyTvnPMCYe%2FaxuLsVVMDEgbBXaiNY6TnhiUh%2FrH%2FtsQ%2F9rp%2BQo%2F9ySZPlrsODGahMXxnlx2mlw4ziPrBeQz5kiyBc6QX%2FNVzimn3vkxKOBbh6q5v2Ns4wbUTAAhwrUE2iTVNfQapKQpuCkxlZUkrQTJXrufNVfAk3dKORpN%2BUqRgHGWLGENyRvBeE0XPljakUrHMIrK3skGOqUB4CFg%2FMBhIp1ryEBOXcW8C4jx4ifKTPF53wdWMSEmxOhDk3PqRF5m9jSijiSPfdzqea%2BNRAzDKhSjdIQFF%2FcQp2f9A7BQVBZH0C7G3Xenpl7UChRD0nIH5gYZkHp9uclslzfIiT9Rps9OyD%2F%2BwQS26VOqRuEO%2BMr039cBOCjMA9OTJjY%2F6twuMlfP%2Bw3iqBAiY3gwC%2BtQ9NYJWtDyxD7P3cLNCGyf&X-Amz-Signature=0c643e76f941d30a68415d02da16e2673d14b599bcded9bd4373ccc07cef9c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

