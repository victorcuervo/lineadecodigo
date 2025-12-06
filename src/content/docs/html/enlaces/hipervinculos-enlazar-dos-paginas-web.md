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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGJTIZ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeltMCCWNHuPge%2BsGoR3YTMRshpLlOEqe6dyGpbYu70wIgQ2o3SCxxvVjZh52%2F2H3n4lNy34b2y%2BMqG6tYd%2Fko7B4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHQV689XedILS2NFBSrcA9RdPybAwJyNceY%2BfoupY9zYO10cyNhSbmnXDOS1ULPQ5WDFkEp3hpnUKd4lS%2FYLCwpcm9FpozU9PdfF%2Bq5pVTpnJe4xaWjN5AjAaTqs5zwK147ftzyT2xZukeUd2777fkmGpkiqYN7yu6uw4%2BU7AwkgV7IW8tBtWaarXaJq3eNNqORwMBnaCDq%2Bn%2BDEsBgPJ4fNuE44vfAX%2BERDy%2B5FqzCk2kUyZptApuzTAPrPyNVq3W7BBAqId6C66Xr60Mn0S8tFRZz%2BXkAF6tOPJb2mU342t6%2BDa4MXo0djpIU4dXgONTkEkPo5%2BAk3B%2FfaCDgb0M%2FK5mItDi9EgN%2BJMm0VvQWJrSfG25uq4OqVTfujaPIBtNSsrKmF8016ljqKpQdLYfALAveeqjQB%2B2xtQEJ43WrKb%2FDYSKQH6603Jgx%2FbvVUe%2FyZBWfzxNjYVq4gM3c4MzVg%2BdAOxNIJv8OVLN1GvlNZGhJAjUqPsoti66sDXLrOjVfPTHYf9joVWeqzlnF5nWTu1TWcdSuywysjbkXloJnKMIxHz5sj7R1EklP4%2Ff9xNGZpJ2LgqOaCU3mQNmHD%2FCnzJRaXZUs0HbUDE7vIuQHV0Zgquj5VbpX5%2BJUlFAZzLodr5Q07trxZyLVzMILF0ckGOqUBEkZQh%2FIjgzyS4Y%2BKQmx1m27eoPq2eQ09by300cxMEPl43sMvB0Nlh1PCHj9MB23mSWYZQHFhHAQAAmBmjxPpUJ4zmDQ9kFzzVL%2Bkj5elxtxTQ3Y4Mbu%2BhmX0XXV0soYnjyKFSj8Ov96%2FnwgCBxoIY0bT8Y5W9nqNd9ddOHqrMtFDN5xE%2BwXiWOxwQFlbowct9wpxhjhbbDdGrqrrVea2XZWpVo2M&X-Amz-Signature=20cedd39743cdffff62251b67254af1128f1d9777025064e75efafbaece59610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

