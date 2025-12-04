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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVHWQJJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWyIs%2FLuFGp7ADkcFizOq0AUJFIPCLOyishHlfe3r08wIhAMHJ%2FWkkB%2B9vwnDNTVVs0TEhLb9l80rsPr8EpdbhEUdyKv8DCEkQABoMNjM3NDIzMTgzODA1Igy%2BOHA8F7JoEtgFXjQq3APihFNdRaPxAmrAgmVgzQrOPNVPF5iTxEW0fo34%2BQf3EEnlRXaLF38bSJXVk%2Fg%2F8fCxcQbgovOA85zVUdg1ZPZ1yzJLAb9tEWTLjzEV%2FaFcd3a9hjyATPAjUPMyxEgj0NI9b%2FJJURnD0ut%2BrIxfG9KCcVxOOHlvC5L6Q2p9AIsy2tXmJsMK4kIsui9S6EimM4MGsM1qoNGrWIN3isRGQv86%2BohyU3aaTRyFdIPf3qup3okgnP5woMLDewWVjn4o%2FKSKAigllXbb4zbIp1a3260nLGm4WxL%2BF8GWcaMYFUc85vwPglGQ%2FIgU97gimPwEPJO294lss6MlbM8lJZnzAQobUBJebDyXxIiJg5Zy0gaie2yFXLkm6%2BaNzoRwlJe5DOlIg7YpV6Zt8kTfv%2FmZ4V0Y%2BTrn3qmXQwiD%2FFoZZEuSVOBIQXLfVt8JNlN0dlsSkcyB5cdhggE7s1cONHiyfxJUGZCWaQePOGCWnink%2Bfahvc28TgUDExeyoOVoudLki73O8L2tQ8TZAWIM9ZrmHb5wh%2BCg3prvqwLjWTdJq1c1cZHzDnblDJeKYPkBqEWfqWjctq5oOyIbNc2lIngidWeBrSsxNeDMSDQ9IMoazG5xgIgPQBluuID8XauqbzCb3MbJBjqkAcmOWUrKaSzwRok9xaUNV86AehbeQDxsqm45619S1SZJ2q70posLDa4QRpFt2noAN%2BcLCMFmdk7UKsyw1R0QpTbM7FF9DeNFx1yOP8Uk1BMCPiLD9TTsaGsgkXrXRSa%2BAFKeCjpq10%2BzF6gSofOn8erazaEAeTLfK3hyeAyg9g586wnRLGAEz2XgzDd9RHoEdviyl2o%2B6%2BkkZpix16c2tzCtYj%2Fk&X-Amz-Signature=cca926f32190de9aee9bb30efeaf82780255e8b12be3bfaddac3bdfad07180b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

