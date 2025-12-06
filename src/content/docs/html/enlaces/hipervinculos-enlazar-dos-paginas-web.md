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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEJCZEN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs6EVd%2FpPP%2FfmLz9f4TyjjnxXMN%2BqTc7YZe57jasTtyAiAzLtAq8HKrvASaf6sJQtJ8rq7YxHL7F9F8xbowOhhInCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMtlM70m9ZKZdGUdwtKtwDOeBqS2Caa91kMBbVXUmmZm%2FTPY22e3a7fYpgCBhvikubI026VRxC7Pq3KxRmqXtEmekbMDbyEK3BeydNOxqUontdJuVj1F2IUXrlS1M3KtVl7MhgUqGWkQDlF%2BNn5U%2Bj5lb4xDTFD%2BuzgQGheo1jU4KM3QMzBOPpasULtn63fPG3eg8a2IcYvJZa15z4TAUtSuGg5kIgb94g6QqlRsqjtp5P26cl7%2FlVGsaJUlBt5co2G29tksp%2FrLOSpR9gfGhvSFqTl8SU1EVt%2Brd5Rjovty9oc03NJkCjLpHFPbR7U%2Fb2dIMNLWJZMFyh6Ax8ePdsL3JI2C8nX5yiUa3HH5LC5CQ47Cv1nyXwXZ3DG26mRz5O6VXbI7yyM2os2VTHkRKnlmgQI%2FjrHmNduP9bVf4MyXFO9FbesHhKqQS0r5PiUv%2FvsjnRC8e1TAzXbjuCoy%2B%2FLEn39k27E3k2%2Bg2tppsDxPfoZ5rjqPuBgU6D9J7vcGu9cQPh0mtnGAXaMBoc5EWk52l850eKazlgHrE2RCUYhWVqcTeH7lSNQrghx2jvzq%2F%2B5njKwmdAfoAPl%2F8olzW526YOYYvpr5xEuzzyfQQROSPw0EnQAkC9xNOx2auFdR1%2F75co4T%2Bb3X65YkQwvrzPyQY6pgEf5tMg2OMq00wauHgf%2B%2BYIXuE9Xu%2BESrCn9lS89%2Bf9I9ZMmdH8sEZfmt7lmtKJuGIX%2BUX9Dz7tuolAMgT%2BAOrq9h7LRPL58N4LewpAi7kZ3JjDSpJUyHm4Qxo0oUf%2FMvI0nLny2H2zMMs1r0EXmTqettIcg7ghgvuitNyIpi5xZY3wiFGnjCkr%2BMHvy6VoqGYAuSCe9%2BMcWCpF8pIeZ1kCetjdn9P8&X-Amz-Signature=0edf0a4c5c2683abfc4c04fb64c94b90c58b082671c2b32fc0a49f560ed9a3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

