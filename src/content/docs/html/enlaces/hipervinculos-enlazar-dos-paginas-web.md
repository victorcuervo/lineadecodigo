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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L42IANV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxtG0CDVo7cHsUvgEtQ9cP5kybk%2BeyGg25YKu3i8xcYQIgI7A8s3iA7T3BPKsaoPf6fianyGqF%2F3a%2FeDXjk2YehYAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJjudwpQ1H%2Bsrt33OircA%2FK%2BuMKPqBT8X%2BHfBdBlpsS9P6WflWhY7nh%2BaprPUhNIX6FIVFU2OGFG%2B%2BKkkVP%2Bhghmx3P10v5frHBxTyY3H%2FW91rE%2FHeSsnyw2CnpMkKTwoESBq5Wi%2BvOLGkZnxCETcm8niV%2F4bDuacrBkoXyLp2f34WthzdKHMnuVZt2bVVuzcXu1JLJjWvh6s3tNvEoKz3Qh680JAgLPh9L6XTvWuiAQee%2F4nxJ72QXXKMsxm55w%2FNM4GDAcDSNwfDsmJNlFPWT0nwOJcPOqcJ%2Basrdxh4pAkJkcjiBOWtznMAwdtY0MpEol%2BV1J09%2BAVhj7Q6B2ByyB6cscrqjF4RGd5hh35ner%2Bc399KT1kswQ6nhx3HQbOWKBS95R8X5%2F4xq7mrGa%2BlPELhW41bntds01pbFkiXOjFY%2FHCxdH1WDAPvIjwYIfbKkCw2MmPXPR4H9x8YHcZsdNY02IJs43XUzQebTLkXH9Qr6R90uSwDbETFM7AF79CeFWmU5TNjEDGdSi%2FzKkF9CyTwgsXXc5A3x0sMlMSN0ZHSpwUzw%2FthCyVPN0C2A8qeXo9bIgaaW5%2B66AUGnNQQ8JBtHdrto2b6Jqdc5%2BWh5V8HSyYTB0L7PVNl0Fd4PK8unISl5KJxEX8lfMMPam0MkGOqUBq025EqhLImAe4gg44ITTsJhZqqxFrhlx9T5xBv39QY%2FqpwIXklOxJ6NHkIWyZpySzqlAL9R4FunhiSX3iNifzi24eE%2BGcXjw3%2BjmGnzzVjKqBPVHiMsjuBVvTS11frJSbm2CanbxqUiCCo8xynLhQEfHO3Ft0Bc6qD8qOrqLo5RjjxzKkxTtN9P%2BoRpWCleGWXV16j53bvtHoJ%2FaeuM%2BBJWcoaIw&X-Amz-Signature=198fabeadcf8f95022b374428286238429458c8c6ad9be51d9ad50b1e067e3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

