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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2J6ZVF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHYammF7FatOhsBkrLQzH10n0msxRLc8lvipJNpFdX9AiBdFEEoBwetBz4rAMVRhP0Ss3vLAB%2FLTXQ783mouztxiCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4cttojKzLSLytc4KtwDO6Vy7uFK6Y93Qr1bSr6gx6bjmHMXhcS99EBDYT6HJbMJVW9lPWCW9iChE0fk57fbKFd4%2BYbqr3oWMGcVCrUmD5NnPwrxIFrPpbskSAL4Chq48OAQ43qf7DoPmoE3NZk9YVSAZKkQER8O%2BlpyCHVc04qUXXRExp1eLPs6UtVl1Z15i6St3Wjz75oLEn8XqQz2lmi0tQsiQMgd9h8JcGEQXUg%2FRtbbh4PxCJzC4CVohHaD4dHwaIxDz74%2BMMPGzwtPpk9tCsqrTSzGCtHcYHN6OIuoa2YhvSmyNAwk5%2B51OBttyuy2ltAp8zgOVKOTQ%2B5a3XpHI7I%2BleNj9kxUy37ZinSVi1sXbcDT%2BMIK6G9F0Y6GCzjuPBW5j837sZwSTZOvyIr1HqwC6b%2BmNK%2BQD0duZR8iAEF62q0X0H5S99AT5CLiXff0WXf6vMamuQ41v3VTKp%2BcRmBRSA2U0ZcEbJmlqpiemHE%2FmyJiGd%2B4qIaScLg6Vhaj0Sd36NF96QTjW4Pgy2MuyB0VOrGXHoLP%2FMDYyjHWIReOJ1wo7pmTis%2BLwe1fwzDzSKUbO%2BkcTK%2FSndwANGBykn22kAm303JIZI3uoxvjYMTkIi5lCasutUmMzYifxQGo9FuyV76wx1MwjZDbyQY6pgFGuEBbHQADIFYpuUwZtUUxf5xFHaMooXbb1CRabgDzjPbbaKfZ%2FuDFetc7Wo0cQ27pysyJ90J5rU9IVNv%2BCuYkNgidclvO64n8HIARfc1VWJwJNdhUtnDV3kbUbxEbZNTUa7GXpuFP9s%2BqvPTbwEv0LZqdsr%2FJFS5Gz6wlFE6XgbismXcpQja%2F8ZgDyUspVZi7XRrTehv5QhtPi%2FM%2BvRicg%2FRPkIMK&X-Amz-Signature=84d779c7a851957c5829895fa9732a05ae67c864e4cbe739325a415489e61a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

