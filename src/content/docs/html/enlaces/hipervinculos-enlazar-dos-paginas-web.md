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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTIC2U4S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHef6oKlSB5k7vlgbWVkPDwQ9H6C%2FXuUW6wbhb1FMHP3AiAtAZ8PuNDvYlOjlg%2B%2Bc%2BtgCkcG55MkoOqFG20r0CQ0Tyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMO8NOCB8aD9gUL%2BViKtwDlVhCj4mChUaRP2WYWfvywZq7nPblE0ye3Wrz9Xj9uV3w1etSrR3WeRwobkXGA1%2B5vY%2BLYembhEZwPLbnvmHxeRIp6FAEeWOsO6SiDjNJXl9jSoXFXtV8moONJTkOvqMG6UZanEUXQonvF5i3dm6uVZ2pNQjcX0bwpDQfvuoTvK7u5nMfmm91bUdYTk%2FdFXCi4r9lVQBCGfPCisPWPDXAuZFGUrohWtUvby3jjy2PnPCTY8jHGoIg7eVq92vjY16M%2Fp4jvjlteO%2BYIIhLvmrFRH7gpkqotPCipka1v2cAhY6iylKnYy15E431TfwOJCW9hUTG%2BsFk1f5elVDUCSwUPcWrbNz3%2BehpMjWUTEafghi3F3hB9C0iALQNC1s89%2B%2BYs5D%2Fqsk3%2FadwqDl7YgDd919nG5rchUne1xNF5TWcJcM8m32rF6szaxrvSlNK0s6cy9k7gJe57V%2F0%2FWeeWyHpY3SYugx4f%2BXSf%2FltMw1soZ%2FD1xCmyx%2F7xr1%2BBYHrN9a6%2FWsxGW3grnH7vnbF3jrYpmO7sYfOBGEo5jr6nDIenOtjJajp2Q2fB7rDrvTrpE7KVrSePO7e%2F1LXHRBlK5RJ8o2e%2Bt6ke7Yk9zVjJ5B%2FZC9PdSo8aW%2Fdjbk%2Bwcswi4zIyQY6pgGhhtCLmU%2FV4pLJ8iD5BvQJ%2FgogAzNDDjlBxmlrcfuBIgcP4F8J9l5kT5VKbKkSYeJczd3e5ulu%2FZqG2wk1FWH4SdP7ya4pvnBOxaT7FJyOhm0qKfmHyeu6NUZxRV60RgBHCZhJWZLK4MXSNG640ymotRSDcqgF42ptmc%2Be8xFu6TLzAdoV%2FLE%2BhV4fx13nVv4%2Bysyz%2BjQvmjUEdvVV3iu8nmXiG59r&X-Amz-Signature=3ce927fc6c83b126958b27f4a2d50b63a26b1071a9b2c50e67e0cb432153bc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

