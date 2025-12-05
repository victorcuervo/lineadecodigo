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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXMOODZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi4vOkuGjzIJRlX33W42s7pnAFDiXISS3xI7Q9gz%2F7hAiAm8UA91fiajk8NPrI5eyqefKjxqjwGDZQ3uoX64mKbdSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0XFiCZDVXWLAx2QlKtwD%2Bu%2BetQm97vxmya1YbooJJrcykVgsaJOITuY%2FEuGAX6Gcg1g4fjFnriAY52BKP3m2SRIiWoI2IVde9scco07%2FnJ2tSfMEfYSNbJrRxDGypnTw9WJlpQJH6nlTdgfDlHYfmw%2FSrQDmKq4TCmYtkM%2BTdg2uenQxrfRag6onL8JGMhBW%2Bir35j%2FZkcQDlqvjdoz8UjrxUqkKj0xlA8gHVUY2dUAfkO8%2FYID1BNXvaW8HQZKU1bUjA5NZL6I2%2BeuIW2W3ZrbxzuYCc%2Bj7fL4JLlof%2BlBVGiAKo9MUZLRNPDaZWeCKVjIfpIoRpZ1HMNcj2sfXTUrsZ9cTpAV0NaFrMBuNyV3DFSuJAhDiztsa203UXrOloiFqDmLF8DgDz2fnXRPbfxpY5Me1hGKeljVa%2Bk17qUBNJJt9UV6lWPhXuVZMFLZrNQV6XFeKSTdAC%2FhEqYGA%2BbJi1PvqWDlWAKjNEvSrXV%2BAn%2BYqSKRkiHtM475ZMBfWM8UDgfaDCa45mrB34WvPXJZWbVd4%2FXKxebZBZiJVvRv%2F20Wcgbbm3AF%2FZ6LZ1n8WIAyKH65d131OfQcefT93vpxmAsrOaf2%2BUzVuMxPjy%2F%2FFkCq%2B9xUaBXYAbIpZi8RZPFB1oG4GIbyKX6ow1I3NyQY6pgFdlMpN%2B69hWKD40DByVsmKuVWn9CJNj6h1L1TxnUHlCFJp2p%2BrlBp4LsAyr%2Bi8sCgt8NQKylIdPsv%2Fgeb1MbkWakQlm4LVlG7T%2FBGDtEN4EqEyK2p6W9puMIi%2FBuagwWGMPIlmaWIllrS9o8NCwJTfkkzz3AksJaTHSMhy4KbkyIL8iRzQjgKipymm%2FxuaSXbAxF2WIu7Utc67IUw60orRM17XygcZ&X-Amz-Signature=f0e4791d4e4abf43a40cb9c627e4cdb6eaac6f41000b6889abc341a4a7106364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

