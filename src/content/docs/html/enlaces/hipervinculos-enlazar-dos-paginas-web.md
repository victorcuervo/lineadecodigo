---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDSNBSJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCZSImC%2BjyylgKbdXfgTuf9AZft4ydpKMz525k5Tv5U%2FgIgJwd8hPYyesp%2FCM5az7O45cfgXdqMCvgHv5DT5f1dJBkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKaL7hZqRMssqhYW4SrcA7dLVB%2FOrFZWPCWaAK4lOvcMI1wbYRQtHIAWo32WPva2Sk%2BhgXb2QOH1eNkBFACZhb155do8RGxVv2wAYPz6x3LYOnOKj6iQdYjiYEpI5wv97NahrEBfKpFJNsgZnVokl3KzjSIWxkyzfb%2Bo3XrwP2Fu7lOv%2FlBePnh4nC5Vhhz%2F%2FIBaPjJi%2BsjodOjc4rAedFTnE11DGV0g6%2BNJeU0TR8K1Q1fm%2B3fZDh%2BseHUJj4dHr%2Fz7qjW%2BDYj8b5LMfyaDNy4Or8cRLU3uZgTYYDkfuJ49e%2BFaPUNhDBRCkdIFx%2FJ7NxeWhX0c3YM97SY%2B8lBw%2BO2cBlZ%2BJEpAeoB4SksgfSSJv0P3rijlIgxD%2Bu1eh8jR4rtVRxvyJsnRv8PuICNcapUni4e2xHGeQowagGk63jH3uN7TKsvbQlm2Ef7GWellqnVwI8uKHiveUDkU3M8qpR%2BqcIcc7Ph92LAMMmmvYW1OK%2Fi32mYbwKDgZ%2FXegUGkKt9ousCvbnUsCjdk7Hrow2Tna7%2BRrpWR7dja7cPn5lGAT3xhFmB4S6%2BN%2FnGe92jB1fLPahRCECXeq0XP%2FJqrTsmIMg7FKeHqnc8DOBOFEj5Y5vZ%2BUGa%2FX74OhPf3jlyiqYBowIt5keifRkWzMNmExskGOqUBBR9oFV20cTLlcw1LvqMaunzH4fG%2Bg%2BDcSmADk6knnM03pqlMzQP1Y4fNnHYjBxElEwIrz04JqrxAbFpMUTAYLFiTcA6QryShoJXSN%2B2Joxo192yOdzA8%2BSV1eSNQIufiP0SZDpp68ojHSNuyPu0vlFwBEKxFMI9CuXcesu%2BxMYn4k%2FIEJ9%2F8qDqg025q7C9coFbbyttmTQJN9S2LUimBgA5d%2FuFY&X-Amz-Signature=fd53ac4d763fd74f40d0475bad88ee2eaf291be0bef741344fbe43f5b16988c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

