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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6SP6FA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPQTfoyVAiSWjJzdmFQvppynudPclF2Wb9WWQqspT2tAiAnU4Lxd6aXR75EpN5lvF4M5NNm2sjJBHOB7N%2F65Ws1JyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBD%2BqsuPCTxUG1YDhKtwDiYXfEm7NKVWttzi0WCBjrGAXgsNBiasYaui%2BE0LHseL8S8BSoBBNIhKR70905hoBZcFN4rWZhtTlW7nuQcZPuw8GocnjginTZPICFdu7h7omXSo%2F7JsXhki8ortiS%2BXc59Cl38YnhE%2BBeYRoZZ92dimIhCJUM8c7SX%2BLHeM6bwd%2FGsGiCyxclj44rLS%2BbIDBrVNuV577%2BVRMxRB2efSfEgIKWcBqzHWSQI5GfYVU0B5Ptw4VbTgHeD9vEVv4P9JoYqUt9tAInUp9W0JwTYM3s8Weap9a1g9Lpr99DZkcAgplyzYFzuzLdcoKxFz3GTS6Hix6DcUq8m5LIEEvRJ0O0e4FDOttJNu7wCUQpIOU9GkQS9bCWTsPnYP%2BdKXb%2F%2FIs%2BKkifOwMlZBI7mXb9lRm2stil%2BsfCVgak9DjuEYId9i1GwrFrUqu4o2v7X0Y1jKp8pNuJDbKpmPI5kZV4sdUIA9EGLRRzvlQ2Q3XZSv11ocFdZD8Ymfjzab0x7fRzYZd8on7u%2FaYV4krVD02ZCSmIIGhjDJjTSnXh9lKN9opp2CskCA%2Bvr9iMELvhAaIvofZ3EWwj8ffQm5VvNCHznmTVs%2FOhRvA7VnY0QB0mAcL3oKH%2FpekxyG5ioZIn%2BUwtcLdyQY6pgFhb%2BWwcQo2B2lpcnWbLyjAMk83btsJvaVLTVOXWsLM0a0O%2BNbQkZJ63qNVZWNPAMX1xzsqb9qloAo0gh8tpPAzw0bM0lom%2FddldiKtZxcYOjL4WX0ce5GFCTlltUsVtmIXUXYpHlPQooJrw%2FW5pMU3xjY%2BpgHYUDi9q9u%2BnQ5qL1hpVXzsBbAern0LbH2oIcpwdnFN%2FFyLG8pDbVDKrumc2yj9xU4N&X-Amz-Signature=e2cab90137a466ba3165f26d1ed6afff20b8f0e0c2e00a0960caf90b47ed6c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

