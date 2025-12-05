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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFNPLX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzGGotjRouzO6%2BrkGQBPgbW73O%2BzsoP93cMwUX%2BCv%2BkAiAsz%2BQb0Vif4JphaXsqnNkYMoRrpJTAsH6goqALrxCLdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMGsHSmsWrAb4xZNuxKtwDeA1V%2B%2BKnAutFbQS%2FwWOKCfAL8FZxtfsHeo3lhwr9PYIR83aP69zqMZ7ehZE8mL8jz9eFf45dllF46XxOpmK21lFIQ4m%2Fu7hDrL%2F9jWlX%2FQ0d38dtHNklkoij1NwqJnQYuCjnX7dOcbnvrmvulfw9orVn4k%2FVJ%2FiQcKkfcWnZFs7nBFpCVbF4OFN5KQgeeFysykkMG%2F2O4hEIHURFcogFrZ335MykN5Q3eou5s0XMjULv2vJHsBdQOkfMcYw%2FnefwyA4H1jWdKRgc%2FsvS%2FWLKGhb0QVckzIlgYYSjajpADlHVfLM%2FSqCzg6wA0hO9V6%2B814VaacHG%2FG1XH0AX43%2Bi1U0mWqVl8bnuvhoSgbd70tKr%2FhyViMQN4TrRJyVuBqxswy0KekQiD%2Fq%2FusSORM4%2Fn2YLVODEshh3Mpko5tXkUGKBd5rS3OONo7D45mrfyrrzCkhmSFOeQ4U2rNW3B2NXq5vDl4RxbGvRS%2F4bXgE%2BXKe9wdzAKm8VYAVP8az0jY4HYNIu1VpsLISR3eim%2FdsCo7grYl2D3wv2dHCDLEAM9RmSgyJSch0FOT6JNRSeeXsz%2F96O30JeUx1r2AHYeWF40CwO%2F4yyaQLHEn3YkgrtXbTVOpTWKFRFx0jb%2FT4w6fDLyQY6pgHC53Cv4PZUvURfgyu5gYcF4UYwifqOsFXTq2HoIUU0OstMYECb3TUWGlBoRSyYg0WGshJhaSaazcDqGmCD68x%2FY3C5I9Udp7zY9wVqovjKpPGW%2BD2sagqWplzjlF%2B%2BurqFEKacmlEQ%2BEF6MaXHP6sGf4%2BAwoMjPsbcLCvMQuY%2FKigDi1CE5xK5YRGJW2q%2B1zRMBy020VKJgZiYlBnR3by7hP4TZS8D&X-Amz-Signature=45aa0b9ad4d03020452daeeb4604c14b0a021386c5f09f1deaf9426dd990c58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

