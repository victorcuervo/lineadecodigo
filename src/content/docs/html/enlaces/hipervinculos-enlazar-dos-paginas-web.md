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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DDBDSGN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRFxyORPgGWXfzJAuWdluxZ4IG6f4vGv3ZZ%2B3pFQQX0QIhAKwmh1eeYXfZdoDY3KSy7DMAiyGRI4uv8bAp6%2FqVo65sKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsfybG82YuxcsMfaQq3AN97jfcU9tJfvi%2BTEzd2%2FLBWWjOu%2Fxn9gTTzaWxlX3KLHftdgDkIR%2BMfRGG6DukXnjG%2BByl8hdfUGo6yJZLxYGTNowRu466Vaj0Ail7QQxH595rpYICptwl%2Bo%2BGW1vWvvPhiJ%2BZtWpfpn9Dai5AApZIN78553WraBIxj3gCcPktekCg7JUCrcvB9IzkPCeowsfsnUbClhM8YxiZ74CuB9Z7J7MpWKPzKGlC07AInJboIXf8MCXj6D4HxYh2b%2BQdrE8vLT5T1U7vprHcYbknwnBAZSnTASHjPngD0VAN%2FGLI3YQXqvB2LkhdmZJ7CKPDUZxKFId%2BiB6Jszp5%2BIokMdqUOJ%2Bx5oxQ7Pimb82r9mQVOgQmgghmehHUoOdo24sSYL9dVSaID2FgVbX%2B6Tdp5twp0jrV4SrrMKm1x6G%2BG7uo1BcJegnBrZxndzeXvj6zAjRiIyxHhMsl7XAmBukgifDerh8WgFJgRXPOcyeJ9raWPsqwdyyJQJw2imk8Qsnl%2B4UH5RjgreuLWQE%2BF2bLlc0g1QsHwBMcBKl1a6MTD4omv1o4%2FVovrrBfICSLsE076wUct4xDjfOZchGmT1QnxhGJqt%2BtVOCybP3SdKxRCkC2RUJ5U5oo82Hbs%2F0mezCQmtXJBjqkATsSf68cLekr%2BdrPgC%2BDZ%2B3vzxi3vt3poh8UC0RenxZjQSiN4PHafE9ZMdhcOC0VyfooOnevl%2FyC9yQkwVSQ0cloP4UCiIQv1YQ%2BreUi7nH%2FPhT8VJl6HwkC0NFeR1rWjOFBawqMrGIPpIyCAXnJipqJrNqGl6CxfqQDenn94k0bZVuM3%2BvhdjMbvBEgshoBs%2BX8WEIHbhQSyoG1uztX17qYZudv&X-Amz-Signature=5dc29d4dfafc1d1e19a5e198c9df1a54455a864f1fb73850972586ef397bde98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

