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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZONNB5J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxK3QIHdKhMm5ShUvuw2fLKkM66ZyS22jAZ0oCaJxhwIhAMb3tFne8fOZ%2Bdh5Ydel%2FocE8rPEQp4IhSSe1nJIz9AFKv8DCGEQABoMNjM3NDIzMTgzODA1IgxCyC4kgDioJzDPI5Mq3AOPviWD4SxkpFnazeXqgKm5g7oC16p5bkhd4gls1kTMQHXAhFRALrnN5f3QMAdPs%2FIekDEsNFiYqR%2B17ISFZsXgk%2FMMWPo3%2BLyDERme%2BVJancd4G5BriOL4ePIcHlqdBWyQY8H0Y9HeMoADYc9mT2yKIedhTopfsqt6QZTiEpsESKhnmw0xK7UXI6StVv4ykPFksPnLzQT97EE3uMUc%2B5NzbYabhfn2PU9qJGDNyoY%2BdxlrQYY6%2BFZiLW0BnvvU8EajhtRe5xY1T%2FTt6nk2rL2zykp%2BkGn5oOWkVVP22kkD03DXCynls9DADdwmuJbFRQBt9G77WdGPASZiRkQ%2BT0IxRkY0jFWpn%2BUFYOOQeqYHg%2FLNv6mJobg10UNCbgbWYJcGSRjaAdfRmaTegciv04XYMQHTI935oVyqCIfEFL%2BBQuaOjgFHU36K8tg3qCZvW5nLtcBtpChgkF9bnwYR2mREYG3jFATwJ5SB5%2FBJluGYSbHytU%2BJVwnUEoSSOkGjxolL7yef2mfKJmX9sM7yBe%2Fe1BDP9ddk3HLoyRAsF0kH%2BgVcGmtN3s29ol6XFLSo0dczf5BOWyiKUnAGFYFVcGYlk2kcmh5IqnLNqRO5p2of5cFbNKNIHFpI3whSnTC198vJBjqkAQLw1iyIMHzX54G1tasBeVGmMYiHb1WE1VDj956UYiuOLzzliDML%2Fz53K3H1QWkAQHhG73XRWSOx%2BGhS84Y%2FRtWLZKRLR4B7Z9dMpEV9plecPbcTqF%2Bnt2XiQArqOzpvwCJcBhOXLMVBLa7WCTm3pl%2BE1ijrwhg88WQagNu7b32QfMIk7t3AeIg%2FnfRfol08Vu%2BoUKZXPWM09D4Da5SA6o9VlXZL&X-Amz-Signature=4b4c8bc792060c581877ab0f348288379ada7b08913ada4afb77b0d0ca253174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

