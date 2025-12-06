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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTKQUGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBo6dEpHP2A1qFLiMSkA8h%2FG8HWiSDvnVQL2Qc6GIOQIgEnvrH96ngSG48612oa2k56SPzmG9H2tME4BKxC4Vm0Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFXPdL7NWQ6SVkNJZSrcA6IzNlUDms4iuoxblM4A%2Fe1No8ts5zp2h9hd%2BKW1BRN2Hk4WAVfd4qm2afKXd%2Fh4UguP7hSCDp3Bq3TsW1szSw64qbQyDrkIiy0eOFJRK5WOPyO4ks%2F590o%2FQZGLiV%2BsU0R4mKkMMnm0sp8D4WIBFhvU47GnQVJdnW%2B8UVR9yM4gZ3nXnjLqT%2F9CLsgleyiiPQQgMn%2FV5QEB45It6I6JGu1ZOk9qCKzOLw3JHjidsjrhVJe4N1RLfqvNoAU3jarbnURorkFqSHA5F0n48A%2FczooCrfNh2pmaJB6%2Fp4M9cJna1d1NpBg9WR5ZcR4YBlz1xofcuiQn2bzjKz9TYXkP320FULz9NJLoLIR0Mok2jSMKlltRy3FNMjvgzE30x4nZCrQo4lGb6PsqMGkC94F5Bm987PG8HkWl4cCo9sxqb46FChzz15PpN0eDrGNBDxxyNy3dwoiHK9cxk87VbXz5ZHxZnSuEnyUZ2opev08wdMVsFtNtssrLowJZoMQKqlUW%2BxNnZw9FXoWX2z1gQYHuZpxB56LBMZvXnaZzX49Img8GioTsPzsao%2F3CakIrv0GNycBT%2BvLR5dflWspIP%2F%2Fzti3L8vuEtcivw6On9pLRVHgRicejIMRa4oWV771uMO%2B30ckGOqUBXj9KeGCpE2m6XZ%2Fvt24K9qXAG0c%2FrjxJfcMJgjYuWMUSSbepWIkTLv4KwWJoiKk4k958DOFrowAWKhwzieC2sMQLfo9h%2FaugZP%2BengnwogmqU6yDWT3Vt1wtjZ3qjc4fT8zFuJgpsTcfaG6hjqAlLl2xnE%2BG%2FKMA3JXMZL9OijHuhjJaBTgllJ0wsjSGq02AXuB9JNrvQMpEOrxSb3Y9%2BsekE64n&X-Amz-Signature=6fb92af0b74c222c06091470ec9f4bb112ab60c3afddb3aaf6f56de31129c51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

