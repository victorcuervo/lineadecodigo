---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WSNV5Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFBgXttH%2F2GI3yws7ZDKp8n0BE0OuV5sXFxzRoTVWY3XAiBLchOUHHSQsF5as36J1iJM3ZxWngY4FV9oElNTor1rMSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMpthEtVCvENPFfJHhKtwDvbpVZ0qxmpmA%2FQFmn0Mffpb%2FeJnW85BTqit1JlQg4kIU9gtPXtIhQMsJjrsyzqUzoklH3FpI%2BNXZyOzff8fJm4vt0iF7tHS1cZY6qcXd1%2BfCn0eXqHpXPP8uC5UBX35ivb%2FL%2FSByrwSF7%2BabSnaxnVUH9QlaTb1Z%2FeeZvd0FJjsYl2262H%2FP9jueqQVO6xXumlRH6uFrHOujFVak7YLRc3pn7Ttf7sLHZLzI41E7NwnbyxC1JskHHOOIl5apE%2Frx6uINcL42InZNFY5HkUyQPVymsJqQBWugyCMlrduDTJHSKJZhfglCN32OQXcOP9kD3gR0zlvmYOCF%2Bj3907Gy1CWQjO8prCaFS9Nyib44QSSav16dedcqPq0%2BdzN%2BGHiEtXCOKMaNxwAHcUQraTGypiu81O%2BvyS4jR8mVR4fR2od6b8uG98RQeRZ%2BHoSVmaKFnkXvONnCa4MguayJEokGlWxUpZ3U41Uk54FcfLGnqyHsBL9%2F2Qu6M3hHW0dwfstC2kM%2BAmsWZdZ1k0hjrS30sQl7szEJT9A8xsV7UPPON%2BnBN1RhIcIF0MB96XpPOK1Czr41%2BfCCR54DFcC6PySb67JSk1SfqNvLjZQs445LzVddNsVy3cCgy8VhUGAwjarFyQY6pgH4FvauQfJcA9BKQ1FTpHnRDHn2H4i1NVHS4UqMLftr8UE1dwjnpqtCKvQ6OlKdByEzBw7JfGJVRGm5f8ATflSYXrvgQBUifHyzrVAEwxWlvmjVFPEfuDnCsLLacQebLztPnK6Ngixlf4wxUcOf4uAw38tHBeFlHRPlDgdCmhH5adCQzh0rxG9avvJn%2F%2BG8DUcN2gLuoqwkZnMWWqrVI0fhBZ3YToEe&X-Amz-Signature=399c125655096a54c36a3f01b7e495fc1d16ad8bdaa22036390cf85a2cacec80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

