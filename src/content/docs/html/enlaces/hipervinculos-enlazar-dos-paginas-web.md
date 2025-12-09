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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUQWIS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcGtwGq%2Fzt1Di3Vh%2Fbk6fcr%2FK2yMergFwpzoycxQrwLAIgGfzwGJjN39woZZYktHHsPCgffEmzTqQ%2Fa59Hi2Gn4xcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvKtuev%2F2HBD1uzlSrcA54nnLQAWolbRxRJAWgBDWD6QqHcrVZhlB%2F500CM8cb6%2F7iLq9DHaj%2F4%2BCKhN%2BC48jh2IME2Y7uPwDJwNHb0jhFMmfeNy5Q7oqZ6fhn%2BVd4t5%2Bk0Jjn%2FoMXE%2BSmed8Bt14JkDfTlHwT2Sbh6yxhniEjrxTr2tLv9fWCncOW81ZnNlG5jO0A5T1Qhvd%2FOBx8UPW0zpx4iFxB%2ByLgMW8d4okN5r35s0rfzsgPK4Q0QV50jB%2B1%2FecMfm3kc9RGsSwmO1c%2Fiq8UFYsWTaUXm4v36jVODSIjplVaZXwnaQTgdO5fU3k5fAjzMdjEb49Q%2B%2B1G0mgD0En94zPulFtCp0vEo7bFCAHb%2BLKSNT35ZAE3xwFr7eek9illylNjcuKvtqp8wNQruTVd3s7O%2FjWlNHtvpQk0KGcms7Lo4390b6KhoKwd9Cxd80saavcxbHiNnXiCt9L%2FgtnL9lPbhY%2BbJW35FyX59Jq%2FGtTLR2LRlO5OvFkwa5EYdoyKbRCWdHOhUWfO11BRcWYNt%2BeU51FFloBLxiAmgo6idYWsASvVQqJUjBO6iMsXes%2BhYZ4e2rBhrXkiG29OCy68cWsa8vJnEy2ONGxpbx%2BjuRrADgLHjcuVhIsvyZxN3COmtWNqtRU9nMOTe4ckGOqUBuETMd4HDowrGL71VfwqYZtOksK2PR8r4EPBUKI0ekK0ph34OkkmkkEHxIzTXXqYViokiq%2FYNAjUb3WKlPmsnQyCvSQg7XmDlCq63%2BWpVYzhAzlK%2BufqEgbMtLOHCYT0Mq9nBsvto1acUbRcYvTcrNDrOIlaRr18ouS19O9enlSE2pJurmI9E5eOby02y7%2B7q5lK1toU39TLEpLx77gSLuTn2hhBH&X-Amz-Signature=25286b8676c65e373ad992c5fd0a372ee607c3edf045bbcc9bf5452fc79ba939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

