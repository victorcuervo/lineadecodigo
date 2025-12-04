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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RO4JSA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDNezemoIycSvXn6KsQgpNUPf9L0fHPqCzELBWYfLjUJgIhAPGyQRmYtc0bgnklpj4yYtVlg%2FkXhpzvhjx3mLpGrJtdKv8DCDwQABoMNjM3NDIzMTgzODA1IgxHNayWMHP5dTKqye8q3AN1f3Z6FoRCS2kVsjWXj6GacZQioYwyatBrw8ANKcOVU6llrlsOw4Rryr3%2BxMX4CvAhs4BwHNtL033r2WxivXOj6a1S9M3DcOry9B%2Bs7w5jbmvbuG72AoS5tP%2FJGqgdnKWs5eqDy8ToU%2Fvc0DlcIr1uuVDoafxxTbfBotI9NcQibT74K2ZzleOypmLO0QobvAe%2BEujMM8P3TmtUKE%2BzKcRdE7aG%2FKwZWlazVQ%2BtF6De8xRRRRUc4l5GiYg9VlmsNp0asMhiWNnfBnrzJbD4u783VjvJr2cqAk5MgOi%2BoLcSypGPVuoWz3KkzNltc6WB4FYps%2FpIa5jcyM1%2BqyxKhaWW%2FPu5bQU823zaYQalsn5R8CxAl4wxftn%2BiFIEDtdkJq%2B%2Fti99CrLGg1zMv4OYrBBgutlkCUvi3Z8H70md9OR4NcwEBfrPfVys0K1oHYOVXB9WxxWewgMpYZ3DvSo9tr%2BXjfzn9KpAhlwCGczQyHNGCVE%2Br1cPv7Sywxh1hpNldIcCauj4WKeCUd0AbTxazWr8VnNONtXEnw9D9b2AjlXLKMetSWQ1Rp7yD8pa9SkyOg4nj3XsI8deg7tMrilAe3BIsu1m5QQb7489lIGk94III1LCgM7SpSC%2Bi7hvVTDK88PJBjqkAV8FCWK8PBf9aZ3ACNSkcVIY7WAjKmkHvThdixOanlZDVa%2FA8BrK2Nb2dPsrEhkdUaStRzAz2rbj%2BgfDLETa1c1z71bZt7oDHCpiDo0xEt9JewHGPlS0oIP%2Fa%2BFLQwv9Lh1OAfW1BnNz5YXeRF%2Fq1nT8ZTov4UwrFYXhE3t9unkzX1LAtqPrpD59vmFCuW%2F3GIoU5lSGnDx1Nkp9RSsJV9MeQcHk&X-Amz-Signature=8c1dc8ed2ba17801de3c325831d4507551a14c973b263ce68a70b748bd971f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

