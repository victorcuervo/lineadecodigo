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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQWAS6I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFADGKhfy8YXYk8OqAC3KCoqblhb77Mm5PsZOSmnzwwZAiEAzgg5NcJUtEe2EeC11EhdVKsKWZe7BhYr96ERiweUPh4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPGfrrAOfVTM3NiMASrcA%2BIL1%2FUqGw8weS0F4lE3uR%2B6nfADlKJ9I0bp03y37wn6dAjxgQMxPxJg80z0hLQS%2BLqH%2FApVrNOk6X%2FZuocIoOKYpilMao%2BEYpjHXVVU9uH9Fjyo7MQ7fG1n%2BuMiV7o0QUhnglwEPBj5CAeE9qI7ANvJoZlLfWdg0Y2pNU9%2F%2F%2FtUkBQvauL7A4f7Uypx4q6LRcNrN%2FEKtqvMyq%2FWR9YZ9AxO6aiUu4b%2BBBXd45%2BWMHM9dHqFCh%2Bi5nF23W5KIMj4XhjgEak8UrOKD9iWeDDvmxbkJnOMvEkMsm8fZkCGEYVSBxvznJg%2BNBSyw7BGNWvcbSelRLfi8zYomxwDxxCc6TDnCK%2F9Zvtl%2Bt07KjJpmqWb843sTXqBH%2FfLgK58ZchQ1XgFlhFd2of%2B937V2HzhJeEmziK42AZwIJerchf8H3FlXJRZy%2FWMc55Sx8UxN5KbbdfzRn5sv95Qs3pF7N0%2BAF2KKFWf3xhfhZhZDITaa%2FRstitlH4eA2ifM%2BYcCdiIWqca7fIhyaY1AIQCpyMStF9pmqEp4ERo1WkTCzRlh%2BpM1Gc0k9ChjufRQ%2B6TTVTfkYTpOFEpJdfMlAt%2BCZCnL6gSLEnDsHKq5EcvWadUsmTBAsJvLcOD2olAOpWSeMKCMyMkGOqUBsu0bVAbz5wt5EfntPT0c6orQExcSmhyaOQtvJ5aea5X5%2B1OmNN9Om7H8QX8O102jeO9xDtAujnv0xXdbHtDNm0zUw%2BifhAQZ2I2sJcX%2BrZ%2BXiEikn8Xy5V2hALnl48zOMcIYa%2FahMrORaUwL1EjnfHyLsMU8%2BJGC6q8ajbmi9805IX%2FdahnO2fOWgAwaXwOu8tRmhRj%2F46J%2BCgMySqfSBE17xeJ%2B&X-Amz-Signature=d06a812f8c56c43fd4234debafb62be60058983b25f7fd6091411aa9cab48acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

