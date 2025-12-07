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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DCRTF5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1lTLe0xLuGEsUkMJKWF5iEq7RiA%2BkfqAU8tzDNz19LAiBOCXd838o2CkZr3QC%2FPMZ8TUBwDqa97MXjyAmlGBL1NiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa16bJHXE4o8Y6Zo8KtwD8se0BQoRAZfqZXZFcSQAoJtcACK8BdzyX3PjHnX71dhrQ67RhEM%2FPo%2BCDItbIv1nkHP4MUZ%2FGa5972Fun%2FD3YuVkOuJuHzoAVewIF9UD%2B8cBpnY0QqxBoYES%2F4eh5D3vqaW8qqyrcQDmLJ0NCWQP2hnr%2BG%2FkdiMbdGjo%2B3Wp6J7iiFpJcGwbSyNSrvTESTuwlvVBM7uBqMQ0cY12yEJgRhN1zmRvRSWDx8M67%2Fzx6fct3WlYb130c%2BBHq%2BQ%2FiJ5Nxsy%2FVIrNxt%2B6eSDe2GVrdN%2FsZWvj%2Fuci6dWl2sl61D27ldmxZMCyNGsUnF%2FJDRLK%2B%2B1W5qiGokxPhBSiOSgayBsVOhoBDmhXewpM8jkUPiSmjenRgHpSXPPhDvP7bDbgLckn4ZzkTdS4SryxUAA%2FDQKVURPwt5fNtJfpP8soNu%2BXiKLtQQJMOo%2BusBBxYDAPQOu0uXTEP0F1mAc%2B4U3sQV6bvNgCMo4yixj9IyVIazVDIaOFGGnvaBpmBxh0iACzD4V5HnJdPz74B5ZteCoU%2BGzZ50BjV4bMFamoTdXmz%2FhDNlPgxaoSe10Zh2gIfXTNYUQ0JOiUuPPTXagjOwEc0WyGAkmw%2FCht9SUR7766PRIjJwnURwL049SdTC8wqoXYyQY6pgGRtW4YPcNrXR63p3a0t3Qu%2Fs9EG63XflYckURLkfHPLmrVWf6vqMR90reIIlWB9Y2xOSu19wizRAiRgM34x1adGQc1es0iGqCN38MFLSsNj7xYDKmh%2BR9aK6AN2051tedd23OXEiOx4qiws9gqbbU4xWPgc7hVYG2184m%2FK6wfRLZpKA20yJP%2BZj8QU0e0jg6SdQs1F%2FBzcPr0tD1B5MLVt8Wscwdt&X-Amz-Signature=a9a136a2566a897cff12b0b9a61a631a5ee92f02a8d5605837aa93bac7395b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

