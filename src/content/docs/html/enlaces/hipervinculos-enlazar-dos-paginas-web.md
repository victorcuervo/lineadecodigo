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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7EYHW4E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB4IF9v0vCZyyBFcwWA6DbRgFWI%2BmS0994kraPRnHjQIhAI90Xdc2SskOEq4adC%2BaSlRZCneXmAOSnSYgYKGF6qkMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqFkv1VfGOW04jr40q3AP5u2QLgI9W1BqFYc5RrDFa1jlhf1%2BQKUsvwqFJBXXHvrJT7GbgUiw7bZJomb1MM45HzFsYworapJtWhdhgmFrY%2Ba7rIU9AVs7iBbFcS9huQ1cGiTxYx%2FNSf7n3Rdp7icQBJcfmFmNxIbocg3a8X%2FMJzshn5shODu1kucBNswwYL6fzZz%2BM3sGqyIW49fOg7y3Vi3qBtGyVOM06ptbMYh0%2B1aIpcPGMrnDoh2wBLSxETEtnHgmuOnnRIG9LlCW%2BlxY70BNXLqkkmlP2ef81aEg0Wkq8uC0jfRxywAhf0jofsBSGoN%2FPo6U5V5emPeL1EkVBYAtFc36JRXk95zh%2BNgSMv6BJDsTHdza0T2zCS961ZRTIyRnUoTCH6%2Fsl8g1nWNwPBPd5VmQriCvZoLmojmvJ7kIE0eXnr%2F0q3%2BdixIWfO%2BN3rPkhkuGltJ41ncrMj%2Fsw6K2BVjWFNgV0JSiyTAFdQHWXfkRaaKGyfczN8aqXf8jtA%2BKx1m8tOjIaUh9DLEo8d5jxGpfKw8kbexenIPqlq2wK2Xw2vIjsKjqONNWgQ2Jsg5HeHGBMv6P2i6bRd5xOwHmP9z7yyPvyPLCEjWG%2Bo5LGursEdQ%2BsMP7ePDUzPX0xZmEudOol93v96jDChtzJBjqkAUXoMSEkYqT6fh%2BWNfU%2BJTiqQHiFz1wZDT%2B5q0yNDAKpPnILwHhVN72XBB%2BYpSAlkPitUt3dcPk1oxPT09mEYR6LY7vfVB1QtE7dVwlaX9Sl5ZzZdEAz6SkPZUsyBifSI9QkxAMERS2uvEOlMMk6kxJidqTnCVQnHl%2FrumH6DXnT6nfzEnWAIYQniUBMSSSE%2Fr640H9ymAcRgEGVX79aDO68BRu6&X-Amz-Signature=e43ba1486493fe72ed6602a82b51c51a5c6655ef1d2834fa3bab55c6afd16b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

