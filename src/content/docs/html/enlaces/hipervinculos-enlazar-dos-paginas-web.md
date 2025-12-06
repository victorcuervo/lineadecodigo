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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HO6BAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXnkDogX0rL70vbWhlN158bbUQa6rm5r8ERLFm95EkgIgA3fORfY4%2BwcX2YNi39VFhprE1X6puoXR0CXo%2F0C2Z%2FYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJVUnYzKeR4t5lsBFircA9HbtPZydZQ%2FJPjZoWusZecy9k1jJxhBmCQoyaFWwNDCCrPTM5pVpNgD7Vq3e9DO3OiF2SW5W9S%2BD%2FOykhEirdGAC2vjSNWZW2hCjpwMjCUh5kATflN%2B%2FXIr8n%2FTbL87MZbZJvVft9WlsfOrupd2Wrgj9WfMgvfw91ma5pZtDDWVpc63nz0QEB4P%2FlT4etZHtnQujKUwnzfmUzaXYz1i5CJz1PxyaqdHud3rYrlqc%2F5R4X3tkcwjSsHupP7aWGsyfIK3f0nz3DfGoM8l61Z2%2FV6QBsRxz%2Fi%2Bby614PrH9nHVFLYQbvmewM39ZopAyYwoQwNgoBbAspqRyq%2FLJ7A8BF5pGX0PEj3WcRK%2BnLcN37x%2F66gzU12Ria1Ft03qIW3WpORem%2Bu5%2FJPrK6qJJAgCPAa%2BNi%2FJe9boQb4yg2zMzRBx%2B1yL2cOgiHZ3s2AAuoQU08DSCzQNaICt9uBbjZaC4V7OaFbOf4KD6kzMPZA%2FJnvovLCMwJISQ9Avqlax1CyvSkRVuIdmwbJnv9F6Zv%2F38uUP1mV7wtCD%2FWnkIk7Qojhs8ZqgUfx2QZMiWm34qok7utNFNR3oFVuaY%2FmNAf6pSAGzWHXRVWhys5DjtAvzlG69OSq14FWgUu0G5HtmMPLdzskGOqUBDK%2Fg3SmJppvjaE7KTuu0AikjPPu7VD8TFt4AD5JUYGqPjzd0zWfGiVF5q6hcnDnehLJPfUKsN5bXi8BEWTy%2FFk5n6idvcPCvOZd0WbXp5QHizn%2B%2BLZDSl20Vjb%2FIisUj3TRGLDn7wq7Yj3b9vVJNMgNnfmR6%2BuB%2FnPiyUcFuJ6DFcjW6S3Lh6h4z4aqGmhTvx45mY2%2BHZ529mw3mDgYROwAmFXpn&X-Amz-Signature=aba81be55464eea08e7354f8ec3420f0ddc14e4c2aa90ce5d41d824c5ca7c094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

