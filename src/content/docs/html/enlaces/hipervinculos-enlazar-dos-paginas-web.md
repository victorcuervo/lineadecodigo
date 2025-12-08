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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZ55IKZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPHy%2FTt0lFWQ4zfSeCEcYnOUNbF10ZwXrvI%2BBvm4vVvAiEAjJuhSK%2FF%2Bz8E%2F7CLVgPe2CBguUCSmAbZlhbW6WH3AJoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPYY09h3dcnEl2KqCrcA34tGUuZzZOGq2ovP7PYYOdRnCFddMEnss1bu1Gh671DiHB4QkV7kCNTYXEkMHSa%2BzPVnRFI3eFUfTfcmjrJOEBVoPGdfgi7j23abG7IHgk6NtgfDRBg3u10saXVySKYxcbajugLDSRqF4XY9auOvRhyNCmxSqHlf%2BesRC9seb6VceIkpvJs4MuQjErXUNk9%2BEvmlCMeeiAuNO4ouBxeO5jU6kr3f0Sx6WZ7lsv0IQiZEQP5hO3jlLiQib6o55I4w7VTD5kB2wvVEvEp4TABLjMbOILHsRFBsYtz4z7f4z6owaeFkSWP1I4MDtDWeYouGuLHwlwc4rykFX0YWPy3EE0GXAEKXtCxn%2Fox%2FBRB2fGji49tv%2BJmBqk19RQvfnXlfHxBkBtDfqoJSIN2Ac0ulRLhwXnkHKpIL0tMl7oBhgO7i7WWWtijacgD2Y8NrgRb5ZdhA%2BYJ%2BlZ4p9KKVsbsCTHY2iw0VAfyHSxP%2B3hYQPg83J1EnUY6ywHnHHE1XYwj2tMVZI0nGE%2FWVHqCn4TJ43%2FMdpJr45TCjVjwQrczua49KziZJkmLETw%2BTEwNvGn0K3zcDzIv%2FSLD5C7YSKfLi2QjUdPPRFQoBYNuF6yxhTdfxFjwRZRhfXfyX2RKMODt2ckGOqUBpfdMX%2Bs2iagblzZFCn9PQXoEZXUWjsyTdrwsyVESXi8G%2BZryT7h%2BedWmqLeF0EWlPHWYxwvuiZ3Hi7%2BLRDQTJUTtHVbAk8n7EMzbr2cMpeCJDiaZiprVL5Z6MN2bBKOg8%2Fs2fEd2mHuDoXBGjC7i6VJ5wceGbPuAYRvR3nsOi1z0W5RLRP6zHJ7Diuc4PWHpazyFsRey8LhGJKKxphePAFRWmvZT&X-Amz-Signature=fb43bf5fd5c3d855b72b2569aea66d2ff0bc6704476c8f9eecde2e6bc518ea52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

