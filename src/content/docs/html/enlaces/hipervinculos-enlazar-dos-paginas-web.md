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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXIZHRU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVJtr%2FfTDhP6kI8PXRzcBjDYOzzx2%2B6GHEUOCSbl%2Fj8AIhAOJrQ9Y8xkoFUd5O5nNSWuY9JamJS1X%2Bvy2zcVSDsYfNKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvogGPiv36V1s7qIAq3AN5J8i4OyM83VFBjjLODfwvxuFEHmGc9gLez2ZKangmIPw7TA%2B0X%2BY5Nsj0kQpKOIKAH%2FWqhMYRQkh3%2BfnGZ8au6CE0GQMt%2BzsBz2lM65RSRYArqDosGgv0l1w8yAUv5f%2Bzy8Wqk7jt1FpjMWv8Qy9g3SFCS1p%2BO12kL9ItZl4KxLlwMU3rfFL3Jl%2F2U0gNF1907JPCq4VRsGNjX1mR%2F7DBtDfxI7zATbkoiztygC6qFWoWxUdwXJ8v0kLQzb8mN0nscUA%2FiuVPc0QHmKYl1VOhS03wmlnOuViPFYh9N8FIX2RsU7e%2BMXFCn%2BWQRlFlCgX3eCwVdipBziV%2B0cLhVt0hZNWqPiVrE7tE%2FUEWjv%2FumcDdAtf7MKk4peiAa3z3UELTLp5T0QcxVeNemJZLf8dme22sj5UeNNysYXqOH7NwPl2G%2FPV8wTM5Z8GkTRyfrWNnO%2Fz4mvopL2FLjciYLNJyIUK2rZMKD1C3fA5vUnCnDG53kehU1AJuRKnKJ80h%2B6wjerY0yde0VF2kDATo8aAQN3I6jJPmu7YTyld9rSyEaPdvejs69sv%2B8ynrawHsA%2BObkSQbPPQ1wqScIuUxPKEWwoYS%2BCcuQ%2FJ2tMC0HIiYRdEAZ2enssEGtV3k3zCTqNfJBjqkAXFghsW3eO34InrHzOPbCuvwNAR%2FyYvDbsWXRMg5s93%2FV1rdSTwRtQTsfCyz8ebErSs7FJMQC%2FzS8aoyytVsC0AKDulDDe4exaT90soPJph%2FJ%2F3VjljZcyArFtS68%2FmDXrCzm5F11Sd2sBY8CxwnciTSZQV2bsZ3sAWXMa%2FToTBBBLH4RuDDEJBQTYlv9Ycmwd1QwEANfa27XEKWJRHYF17TxdLB&X-Amz-Signature=e3eb91ddc3d6d17ec2d95c97308fe09f96d63c785c6a1def70ff9560f27b830e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

