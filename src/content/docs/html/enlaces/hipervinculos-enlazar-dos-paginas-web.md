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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CCRH5H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcY1nyTaNCceH2hcbHOpcFQf5NjdI7%2BgOAp5SK0gtUlwIgE%2BHgMQxHtLqhFbYSYXoZUVTWNbJKON%2Ba2P%2F6sTt%2Bg2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK9x5UaEroSoDDkFhCrcA66Eg5f6q23ppE650nuHFFpIQcwvGAfYCcqwFGxb98cFq7%2Fh%2BZkQoN1kdcPHZqd499z%2BtrtXc2lwojgk4qjOMdOpV5u4EJtoCn6gvUkGEqAT%2BRCDMRFUE3kZxqV5x0hGJcBLg9Fkgp0PdudCHgYo0ZXPA9CsnLpkLjbShsQ56IFkJM81bmr7ZxhFgO2rIDqfmSh%2FCN8%2BqrmRSNidqtXYAgMclUuUEBw%2BScqTxf%2BCtpF6xmMtfw4LS0lNgpRWrBzNNkSGgmave9rJ5ruVbU7Mml1YNLjZRtzrPEc7bHSmxVs1xcN65nu7h0hkQUelO7b3qYihOIj9LJYCG6ZFY1%2BMvdqhydswY2%2FGNGPbTXDbu%2FL7Dj7ALtgbTZ9tg40jo7tYSsQGw9sKvwQkqCQ428hX0TkuTWNzLM3Hm4toib2ccvw%2FBUjdIpWfdxq4scPYUOBiwxFZy2Li1VSQbQW1KcZ4A8alIYcpLRJtaQbrU1fQRR22ApPLhgxuNH96%2Fkm39OJVckpaPe4zn7Rn55QEHk12TyNBw44fuspoYOYi4W5kS0hgSNzCZwy5v4HjZ0VqfoDpxQbX1409M1WDOgimmF2Aaj45IQtkMGKl1cV05or4GjCq%2FWpFNRsLKDfkR0VhMLfCzskGOqUBC1vkqJZjo0ap8xameQKkgLLqJF3Apa90R0Xuvpg7ufnDU3yvVB91s75tG3KRbfv4Rw7lb0zXyQOEfWZaps1mxKc0QYbjepP4dDmXOGlbsmne4q9plOnlrDd%2Bsh50m9l9KLEpEhG2V7j6F5RAVNvSjKX9GPzlOvYhsUVkFR1RX4RBZxT0GJIuKrWjQ0ygAdZNgTVd35JfSYyhmbGxIrf04AQFMjNv&X-Amz-Signature=e3dbdb2609c0a89fa014917e931c5b17de1ade304574b65c79d5ecfe13c1eb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

