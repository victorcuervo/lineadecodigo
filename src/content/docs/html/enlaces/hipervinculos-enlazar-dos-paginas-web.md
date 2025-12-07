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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZCDG2Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB98jp4fsIrako8wCXs8jjziPmgtaJv0iaQnWvetHkldAiEAkTnhhKL05B%2FbqDqPU1U6JiAGWAfo3KoVpt%2FZkxS1U0oqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtGqkm04EDnq8T0MSrcA%2FQsxdMah2J%2BdVzmBEvVSn0tRWSGmYEkExSkyQGWmVmG6Lor6iKG3DlCiD7iCsA0RAMbv70VPgpVpdHsE4HSgTgHeAGjrN6RaZWoJkwCTyT4VV8EJdgs8nlg92jfsaYm%2BwVB8gIaCp14LEUpG05ZlC2ZSBeq84wPnRTIg%2FU79D3TMOquaejnAYhc7kFBNOqBpVrBl15ZDn0FyzUFAD%2BAjFvdquycSx4pcWXTTXaC06CwsDvn5ICuhGwwyFiBUnS%2FheY9%2FNzVXwHz0xU%2B7MEtKfWO0Jk1F%2B6yym07JPfllkIp4%2BQ05mWXPuEBzFq2X8LvzL5xzIN0bOMQ%2B0Bny%2FQSnbAW9TxOA6FsPXZe5y43NGkxTNuSp4g3Y1MYGhvxsAck7JegMS2pNIE%2B6NCHAwIbceTMkIU4qM0fQd3JK3RY4WU46fnQVG6sH%2FAqPzloRX8EsANZ9nZzXwR%2BGNyVjzLmXusxhwUPWegbKPhU%2B%2BOxsFLD0EBry0BAq61v0oZ80czFpjIw8LFes443djeTBgipdT5PFoNSEfc75ipESNcgkcXK%2BuNp8fJooI5JICWA1RIy4bS85Bpfdsjd%2BTC4MXxaL4EolwLBrqfdX9GE2j06P1FsbiITNhWbsL2sAjb9MOzH18kGOqUBcUSYQKqLcGHvr%2BAnM78z6jw2%2FZEF%2BnrvkiF%2Fe2k5N3yhNyMD9HtfVshpZnLm5lfSWZsVieMD8LXIoXrYhXY7przbUHhh%2F3VOpOT4zHmrGmGhNvwYX3Uapt2AYMjXWNvYm44XGecJJbukuckvOpnoz2N9XXviR18c2gS9VXm76JvWgQ8z64YtFUX3C7EMasl2KjEir315jpUApXV9IO45wNTs5uT0&X-Amz-Signature=e764f40c024517a9247267d76982d524c5041f6dad8fa3c5a56578d3964f994c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

