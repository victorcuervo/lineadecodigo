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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQDDIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICsZOukjsyX45XijXO%2BcAmp0bLGoR6TeU4E7oS6AgW%2BeAiAkO027ujwXFstZgYEkjfIEqqaSaFBVs26qHatDDzRzyCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMbFtu88ZzuJPIpJ11KtwDw3WlEpIQUb8ApY5yiNep0APg1e4FgpKjK1R6DTJ3U6695gx9qGJ0662OeDTodGVthkVwsA%2BZ4f0yjD18kAElXJTYZGz56Zri%2FLJtizK57fRa1x4bvNOpl3jSrpYFCGDFem%2B%2FclF6zcss9BsvY%2B2EXZJjkcQoI5QE02J%2FDvGWcGIo4OoKYwyM7Wo5EeXeYzLuTkr4ruWIhKJhWG%2BDTxJUYoKQIemDcwjfUbitE6mLdRqCs7XOAEOUNZO4fGVkLHTdrlPjszAnpl%2BYfVwLfM7ogINWmbLC9wNDQH7DkY76oD8VruyWGnJwqEc0PPn24%2FfrM32mh4HUfd3gY091Rled9%2B2mDGB47o4LP2MulXhKXsrBkHKoRreerXDpEZTlvBaPsuFWHxcKUlvy702THQC1MZbaKpR31pJEbeUcohgnx3HDtGmwAsDteETBuKFGgzQNExLBNi4Pr8F9104Oyh8zGa75a6bYLAK3ojG34y46kCdOHuyoh%2B2iyE0v0XaqlkGsz9xRVq3n0uK731XngXMXe2SSK3pQgRq2ZHfo3b8MZQUZAzhxTwa5llNPefsYCXAxj1AKlrOwsTBeQU3q8NfzE1PyhjZdPgQzb9rP%2Fea1Tmalx7hkNs3Rr0di3IIwiejEyQY6pgHoMzWMTM4YILMdOtIH399govPdfjdMMrFosUEomtTYAwiLJBvgnae2UPmx5%2FtTyXQ2eXWKrbU87k%2F6KOlOuVt2T9xEMvbxkJ4W65BqosWhzZdWDOUYk9L45AdLm7SxrNSNQNQOPrcUp%2FOC3lWoN1eL8rO6Jman9Iu0xL2vvo10iG2H1rn9%2F%2BO9ooj63ayBbjBbr3k0zSHufFw%2FRAO5ZdL8V3isxRxi&X-Amz-Signature=7bae420792ef26e6c27e0570907f3c9f2cbc8f728e7a1c472919023c7742d01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

