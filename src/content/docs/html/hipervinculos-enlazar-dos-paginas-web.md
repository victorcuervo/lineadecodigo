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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOE6EEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDiTThnCkcVsoTfL%2Bq4MSixPVVwQ3iPbk0Y57IAz2YLlAiAbuE39Zm40%2BBUXNoUlNPD4ZxnoYGxh7QI3J%2Bvw%2BYbkTCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8Mu2CfgTui0B1M1PKtwDKti%2FHQs%2FDT2OSpWssHk2J19JI6mXF5JIR8jORhJdFYqFymFvmrI3IUk6g%2FzRF5zN5zRCC21mJu2rbeE3PmNrtNwQwSkkXozT9Z5NAlZC1m36de0bmhdxZoOgkMwAA8ZjHilAEjso4rYJ7Xq9SwxHIcaxy749yklkr9hEUC0jPJ80DYK4yqHnT4kTtBzI%2B1%2FwFU7eu9uN8Fcu9gJysUaa8fIZvK4G5%2BGNjKWx%2BbZw1x9JR2rCZuFR%2Fuv8RS%2Bef5EEi40jeWKW8aRtGfNxUKqnlLOOsniANIDlwsQCnKFr8A9yvy%2Fd8eJBlNFu33ehwZpzc3nIZdcdY%2BiJXqdBz52V%2BeccD7S6f3h%2BqbyqY5bPoQTdWb88KRvVtAwdDcqPV%2FpDWAIuf7jA9SLx4HyK%2B6kc5qV8Yf9GDMZoQbDRVyB9TthHmqoNzrAI0rdwXsX2bnew8Wo6lIKJZl%2FPX5yASzrMC7%2BIOmtDPrIB0pFUHSG%2B3BRoYj0utO3u2nSSfFeqUEduNHR0D%2BK7vFVMH%2B1ABSzmcDOHIbM2nZu%2BXzndVfwU2rl8mxAhew1uZvKeZtU2xcxYYzTOUCpsxa0HE5jtmxDHk2a%2BOCcpDqS7%2Bc4MUmMxvFueWj25xhpHGOrpSSQww%2FfCyQY6pgGPzFzj41wOSY9Vgl9jqbKyjSbWNDKV3icsY8CwYT%2FN79XXBTk9U0xc%2BOHHJUSBfxprO7jaz4gshVgKk4q8lsO8mIxulYu0I7%2Bap5gwqDkMAB6FMLpEGvi3Idtv6AlC%2BJouqIN3aTsm%2BQMiHPBHKXVeTYSOdeI0SwgGtEBYGJcrykbhXW7h1I6VMrMyonBzr%2FunONF63n40vCjNYkq4%2BbRv8JHz9ENV&X-Amz-Signature=38c4a2def79c65d349362942efadbf586339c21ae9561a34ffd08b9767271ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

