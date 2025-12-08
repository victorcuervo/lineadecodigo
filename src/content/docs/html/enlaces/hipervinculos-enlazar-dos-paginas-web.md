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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJZFBWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcy9Dw7a3MkpKkG%2F%2BO3FTB4M3AmcShp72oSaVsC1eB5AiAhGKldEpU2KgRKlPD5%2Fkkmt4kSWxNrlVh29zpuoWSfAyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5o3E0aU6klyE%2FX9KKtwDs%2FHoWpKKeL3Hg5wuf4mbHGkiXOfHFyU4xsaXj8LTcoeNr4VGJv7y0MbwwrDgJiRAnUFa5KHO1ipu4UAg0Qg%2BkbhLPEBvjreuGpaQR340Fkcvecdbo9UpKzCaEpLdM%2FDAXFVJTxvsgjrb1vSrjyI0YYq1NG4e%2B93YhrfO7qBD0obxBy8Zf5I2w8TXpxZuQpk5Sdv4w9CGpTzqhqUlvItQd7hsVJ0F2xD3lFb%2BA3acI4OStPUdIpZm9IMPmgxi4BUxsNApYcYizSfm38xXpXb2ZXoX%2FMS9eoVKNqS%2FFSFPpFFiF%2F60X5jkYgVIVcSRJW%2FyoOOnQLZECa2d7%2FVXmvSAZixK5X20Zy7MNcdlQG9v%2F0mK8IJpyB26zvANFtTGU5CbIpPP%2BxrPeOUpkASo0rExqoHMy6Qndl6gpTHYRH%2F%2FBSlTjTN1i6R7KRcq8wnIbLMSVopjGI58j6LjekoUTTnCxGldsuWNdgaKpG410l2TPUiTjU%2Bdaf%2F2oRS1xx94B%2FCv8lXL0Kp487TtguPIfBXV54zW2nlaSl62JwznjpwheuQ%2BmnqCyXnvKh5UMx%2BhpVTr%2Bwxroy4pxdqByoouKSrpOF5378Epb1wDyaaulCHLtnTSnHXKQLC6BrEaJT4w%2BPLayQY6pgHa0R7adQAD%2BVaoF0Zz19nCB6dUJFSw%2B1EVVoeWPd2TkjojefUSJFkxsTC0lJsRnUAyFL8d100juV0bIWXFhQ%2FyjhQxYxmOHTRrqDFKWp%2FYygJVexYccgxBXp9nhf78%2BaR9aqCSkOLJHZ%2FMwkoTfHP4i3S88GJzwK0YDhJ6jHL4Le0CPjuaUWw9ycFa0GiifAZOa0uJbzu9prG3vX%2BnVFWkqZwIB5jK&X-Amz-Signature=319f10afc465b7594ca3aca3e4d0ddadfc7ed9fafbfc56ae3a7422128a479d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

