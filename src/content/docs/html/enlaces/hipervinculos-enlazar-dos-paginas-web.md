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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TVA4RP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDznfCxPC7gVY%2BZNANwv0LybGXva3TU854SLJqI%2BHoshAiAONTMJkh2ydEePkChiNJ%2BRYe6yURdEiCJJSZN2JJPE8yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCnAhwBz%2Ba5BKD7mJKtwDSuSy6TQOkadSfUNzSsGxedOdEkAT1DYD7vBfCAv7NskmvctQtQWcd7AFOFikZc0Qkgt6nBzWtFbB2ANuAK3UeLpGOMGmLIVdwMoG5xgIaA5NvVh9N3amINU%2BA1hMPHPx5M5HbwJhKheWqJVqHD%2FdHldQgR%2BWqn83GMA3DDBdvPhdLwR5%2FI9XU%2BFezX9Nwz1Yw%2B8BrjSbUhK%2BbE%2FTyUvL8diJMZa4ems9KfDpzex5bDNFRfpnnpAvzoPKa1gMNzuHBRsI28cdf93ix5Rfp5ms3GRzNnhCZYwM80tctetn9g8Pwusoop9wujXJP0WCohX7OlbYfsEC7hD%2FvPM6GduJ4oU2NGISqPZra2vKvca6bgzHGqracVOwersB9x6yjS19NOO50%2FSYfvOM1X7ic%2BkjxXESjUz3qnmTG1HiFCdPQJTk72uriawP7U6QlNe3gBaONYd7HzS7j2ySs3tJii5SRG0F1eKllXr81cgXL3SMLiS8MHH9T7uLK7OLFgvKRKSkxz4frl2Nh9wmgu7xCy4xJSlwJ%2BtKIr1BcMCNXDBPhN2Fk0NHzG0wVRH669YFdGTn3OUJv3oKkBBnVESE6sQ8ZiAQfNGKT0qpcwev1aORt6Z%2FQImLpNccMoCt9IUwkt7hyQY6pgG%2FZ0d6ehwJKtMx1UKSHReNwX9KQyHeLA2yuHF5GDWnfTd6NlY3ejd4M6jjZ3Ub8ISp%2FEH%2BMbB5DFceN%2FGopbInOaPnvp4rsKSWYrg7Z%2BqkeTYF813wcmxmlTeoRyOsDyIw1oWve9swWP9k32J0Z1sQKF%2B0AyISTFNch6e9DhY%2FOX7n64mvyiidkXsbGxwXVyesvx1IQpMTmiDpqHn%2FZ3mxy16EKNFo&X-Amz-Signature=43372a2bd823bd6533d7c8e9a0e0dd24a54fb1ef98a8d29c65fa379ef8ca221a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

