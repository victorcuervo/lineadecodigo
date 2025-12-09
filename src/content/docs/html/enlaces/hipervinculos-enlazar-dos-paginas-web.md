---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWIZTL4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCulyrPWOg271WSkgWvqGGHnoiZKJUjBdffqFBCwuAWUAIgacBeTPsqsrL9aXWmcrYJqZa4GfOtj8Y5aEi9fwC8Aj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBqR25sWzpoGDul9yrcA2W1jmMNreSQ4Gt4STTphV7qz22RzEi37F0sQedqhb8DfVpCHU9urB2wLOGuv4QEYsdiAQYPRrim1x1s%2BQe7XtKq5qf7nHoSl5o%2FT1MD0%2BNUw9%2BuY0p6ivrkNe6st8qRlgoqbknHGjcyRJFf6CdyArFju41bVd8PSKxLTzRmmexlzLvHq4G%2BxQ%2Bhqh24xv3Hr8TROzF2CdIZCJ8ettZxh3xd5F%2FRxo2UbzV%2FnNygrfc1M0crtRCTYjN9W7F6uXS8MOVmgofvBDTmZ5YZRDB4Mzy33RnNe5nu0eA%2FE7%2BTHZPxVQGk3rE%2FPmLF4fIDsyA%2FXAh7k1QMfto8i3VacDkMoxB4UH66l7B6DYfxDNaC0SgVrk6HEygYwX2Y6KuodrIiYqVI596On7Tw6ZRytOsBCikFCcQBhiuqQsnfYwhx7WFznDGw2pxdyLwfBYVq0Hzeg1TUB3lKpa2MUvVMulcqh7H%2FZDefOf8gUGMRZfdcaB7ad%2FT94iK4f3oQZZvZPedWcWOunD%2F4jzzr2PIHzO7gseVHpd14bGa8kA7qOFD9A3bsCvyxCHOC%2BjIiQgCfyxSyNC%2B4pgjoXtdq%2B%2BoJAYRtGQcD5%2FxCDZd%2BUKSJxJFlsUYJuqXCp7r3njFogf9PMNDf4ckGOqUBuz2NgJ4ypVT1OqXj%2Fm2b10hFEf7mej%2BZWFaW9iYo2X7IqPGQuARZ%2FTcM7d2qy2%2FosWeW%2FmUmnVJizVvopju6fySgFxesLojNmDGm658LyXUqQjOOEV7dGFN7dgrM6Vwp13ghehcEAWOZOuhtf5y9ewGfC7reD8vePR%2BYJ6Qjez54117PRKro3NBxgle0pCFWIj7hvRz0k2O4Iw7a3QsuuVUQbzmz&X-Amz-Signature=fcf0f421a8c4d54f11198e28b893300c77b9a00854412e89bb222a850991d082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

