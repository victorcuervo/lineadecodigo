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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QAU7CSK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwVye2QrjgDRDi%2FD%2F0Ra2sCpqdwm570zzyYyaQPxNCpAiEApOl5paSEM0ZyT4kzW7ZMNoXlpiUzeMh2psZMuTY5AHUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNgc7S5Mn%2Fxwear0OircA63Voig8LjrpIMq3ojSu06ym7T7Qk8BuZ%2Bsgo%2FZg%2FmN7QMalrxy5JuKsH4yQ2gKhcbvaKhwR5CJhiSjjpyv5suN3uWqNJqDopWcuBSPagO8lZR6y4ICYRl8gG89BSdJXfzvq86ucU8kLdwEjyAZ6Geq2OFoUjVLnh9YoV1lWWNgSstPnZQKxS7G8zm3glK5qBuAKAofqkakYJ2cWBCGdbyvlShgWDE%2FZ0%2BS%2B%2BLW9%2BeNWeCxZU5s01bSvnKlq%2BrBEamdq0Hdk80hRZRxcB4FyECCjyX7V42OPQsqk9ZZKjgBZZbNbRqw3KV%2BT8BqMwUjg9pLqspKUE0qtLMNxO9XsyTReXn05OrSFADs6Qv76n0DFIgJYgLl7s2htTRhlJFn2aWkP%2B%2B%2F41iJSaZP7mTQO8SV5BWkMeEjQmfpCxZnUc5qpouJm59Quud2YxmC6ZQ3OyUWWlD7%2BYhhR4vxMFnwVyhmKLeM3he6pP1zZ58l%2FTtRpHsuqv61ghpGtBGfPZULMWXUM%2BiBOF4pCE1Y2AqoMlAMhjLMUDibukNuV0KMYMOsKQ9QOjmCnZVwDlpdPJJ4QSMJplcGo2d%2B28jDmcm%2F3ikTqfhM1h8RzJ5LetZ9vZfw8o7mpDhTTEc4CZOUMMKCMyMkGOqUBqN1Yy36jz9m8U0htM0XQ9a5qlIAOk%2BAqOStVBL8hBVA93gwBkWiyE2jaMtx9DwskwvIizz7JGBfrYyeSiDHx6mjUvf3TV4zeXdRrMrMyk7DyrTJKmko2yiPLQ0YsSTfuAROTTOGOf61e8GqNBA1qmalWAbDQgjMrrLfcbPo4FFi3fXTtGSX4UV1e4Tx24PM%2BnKhgma4ukaVaaDDPj6r0EnFNCep4&X-Amz-Signature=74b1cfea227a09fb78a564818d4c13f1bf220f6d341dedeb4d03351a41092194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

