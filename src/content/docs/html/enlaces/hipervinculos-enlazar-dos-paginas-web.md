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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNHJQ5X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApoa3HvYCfhTSpS%2BpUfe3GMoxnVXkCpTwopXZPUzNohAiEAnY11w5DV3nilM6goSWau4wSG5pWdXLbpl3j7h6ZQcuQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2FrC1mANmHbrAjCzSrcAx8SOIrzwXj520Q4l66%2F0cAeuXCs%2FBdtT%2BU88i8Mfnx66y3sCJ%2Bu%2F7kkaPyCsx2Px0KspOwU7l%2B33Mf347PIDGEaw5gtLX8%2BLg2DBE9Mwl3R70F8wYtvfk2LjJoRsq25knw6Lhv%2BYWwlbnO0drBMXlIDKJU1BsrqSRN6VozistptxDY0C7emZ45ytOrXmNm0VvfnFXTbkWEB0sDNcobXiVzJKUI0ZSyW3UdUDxEgPcEQns05BaYTXX5uzY8klU6z%2B46x4YsKH5rcUOYOCotXuWq4Mjk5JlHosjBMEYPJ49qEoRVz6efDvmqKtIBevg11JmCYTkRdVdMBX%2BJ5kRcSznzXvM4Eu%2FMkmNOicE4jxWgEk5mLZaiatzgY7dcYtENatB3wEnHoNfIt4W8zX7HcQqSGUD8Cr0wSbct%2BPRbRanoYdBekLdESEhsDbYOPxdMVTIIGncKAAK9V35EA3HK6yqMzGYckptfN%2BQv2bKQSnSB5PGCbMi1S19efNaC3aDtpgvJOrfYpzVtUyhH9w%2FmHlqZIwr0SnY9LZZxaseHYl0K%2Fz4aPd99iNfs33CLZQzLKhkay4G3pzxRxI%2FCKFTJR1BxU0p%2BrUpisDnoNZofpDk583xE7AoHx6p5lL%2BmjML2m0MkGOqUB7BlAE0aA0kqSZWjeL8L2usngHgrkc6P%2F%2BgGVSsv6AhN8wvxBdGSCPSOH2Dffu%2F70ambNuJRjhJfRItr6I5OR7ttNX4NQbORBbWXwCziiXbFXu%2FcLNFZDCE7SZKhJBfwbwBrryC9N3o%2Bf8RvlqpyQClw%2BhXIZG5NQBrIePATXzubs2PnQ%2BhLumBBFRaTF8%2Fy5so8iOwUCYbUW9TGTK%2Bv4pQqsU%2FYc&X-Amz-Signature=00b277b024996aee0cd5e7d2f1e95535b21904ce8c7d0dd8cef96fbd3a76f29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

