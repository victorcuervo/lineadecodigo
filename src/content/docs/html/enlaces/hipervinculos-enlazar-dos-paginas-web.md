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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJKZZDKG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDKzCLA9Z743QwMuvVM29fbWjcczoxnUBSycRprtaoZlgIgLuLOCoRinYkhhHxUIS8rAn0qY1MTl2brD8tWIDqoAxwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPzuP5%2F1hAxylF9AESrcAzkp47%2BFFciG8i1vtjvdPGPY99VFZ1aByc%2B63QDjf3gHR2BYhGUixVTOEStlX0E5%2BbORefVl5x%2BTcKy07qGAdhoqYE%2B%2F%2BoZR29%2BqoS8ZDARwazMmkb17oDUzoyepeOd5lQEn22QpJ3TzhpGnIv0QEta77UjjhMf9SH08gQY2pDpGmKhetPrmEfggisgPalUksUqLPaxVc6tx2Q%2Bz3C2I%2FfLTwader57GndooP5l9ApHyg7fJaaXmV8L%2Fdv4z39lonNlx5%2Bb2UTl%2Bcl7cVGToyvnreSxw0%2BmHtsVNZLuC1CQsG3dliM5fGdhNraTFGwo9HpkTzlOlFyiSzkz%2F0C4lR5KvygTGqDRph7V0XoUb1bsy4SGOZFCH2QbINmCNwtSrA3sNMLu0hsSsEF5Jz5P3OMUdcpjFRsjXvD%2Fmcg40hW55hNWvx7TWWc6CmwqjdVIEIhhI6vlS2yVWEtCXDoij%2BRFotBgPD0zcelpFXBSqi0JRfY202uZAKyNg90u9pV10keKbS7UuO3cExFOc%2F6bVT5OB3Nwyp2qf%2FKhHnhiA0cSSN%2FlJL%2Fx6OahEJdfquq1zjiuXh5tcpzAO7pKkxfPEEKL165RRrTAeBtSI%2B9FDAwNSThcRoj2nkiuv5vcRML7nxckGOqUBTBqPnUdFadVJIPTI7Peto7%2FjULn7ex7cvTx5khsBOUAkmmiAhS2gBryIJ%2F81iRrfs1wMb9q2q7ORvfz46s8IOi8QwCdRnE9sC0xgKnKigCWecr7fYm2LnjGJwj9C%2BCs8gLzhOXzmgBHhGh1IL4o1NkN29vu4GWqWi3tCFlGlTtwCK7zxYHnfhBolR81DzXrYUL3jJ6Z9mSx4vvM6b7UyUbkeWxuE&X-Amz-Signature=a140e1bc0056d66fa26e84637e8e3fd4a9e9cdcf798082b67a4139768464f856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

