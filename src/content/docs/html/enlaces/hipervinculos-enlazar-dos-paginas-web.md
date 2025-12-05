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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SKIPEM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaFglnw1dBQ2R0nUB8g6lkARhtBRyJEqhHcpqj4fih5wIgLXxy9VJNwI1n%2FdVwycxt5BozNVwn3RFE9QQl6gbcSYMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGtvMM%2F3tBWqMISdzircAyGDEzExs8rycy%2FZ1pO8Q13Z%2B6%2F3%2FCCFNiYMXZom02%2FaJqIXesa0A4I%2FwDxtYYKAs1fW6dcTTnUb3P8wsM9jgM93KfCaSw0wXmkdsQ4Kx70R%2FYLLElcfgRHE7K4Os6DX8%2F3w5N1MtImW6NgR4%2BxjrL%2Fhg7RR68aVHJcXUeh%2F6q93Ff8DunT1h5sp8GkaX%2BMb8TxmRuMNJHk%2By00%2BrHcez6zz6bM4XKOQMZ20%2F3hHljw4cOd%2BApl7pSUTmWL1IDtJD05E8tP7iRyVOkY%2FdUoWflaArdtbnfiVf9l45OmR0Zc1WRe%2FlxnILgDg4oEg3b9us5OSHc0atygIkK18DUyGjex7qpXAglQ4qBJzEjUfkmAQxLu%2Bb4voR2kZtjSwFnQc0qG2G60Yx23jRqPqkQT79Zu3u33q5pBplkhcAdv0HXLEKrfD6EQ26yfkb1AXKGJylASWK6Pnfr3jd7To%2FSQnlklt%2Ff5TJRT7DS1uo8pDhEl8C6O9qtuDEnC6HYWbG%2BKefKf%2FZaC6uKq2L4PoN0G3yPBMvhA344QEE82jz%2BRFhssm3RmrUsztNEh1wpNo2Ze4vi3c6cHC4dw%2FMm6bCPUZoqvAvM01wQNKw0kQyMesyE7iN6fdngwpmgElete6MLuMyMkGOqUBel7wHL8%2BNMXhcxAKWqFSQlE%2Fz9ugUUZ8sAOhK1GugwOqWhspwYykk4p7PSdzjzAlPOpOvUiimuMZowL1pMCan0BJ16ev1nJ83Oz%2FJMPbUKsIt14pe1CJ6Z0JVuf1%2BWLn7Mc4mgaqlhkvRzqIZP5Elg6qpb8h5sjfcMAMGfOAUq2l0e2fUQXXMhFXhixhpsAfOtSJ6tgh%2FuPyF1ZMJ4%2BpDj3uK5uu&X-Amz-Signature=a2ddfa5a29b871b37ad90669ac3b7049c13279ff780e895fa6c5903d65eb79d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

