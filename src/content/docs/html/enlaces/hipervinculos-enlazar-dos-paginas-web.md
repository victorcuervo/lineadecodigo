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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4U3KN7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVutc66WxTHizX17n2CrXTSvnOozlca%2BYBEcbnbt9luQIgVpbd2KJWrHszGCGeoQcut1R%2FocLSec3iGqPvnf%2Fo4PAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInI%2FgKLjTNQKt%2FEjyrcA4LFVfaaq7BT6Rlaeim9b1wZ6HYbdh3VMt8Sn8kGQES11VTBSv%2BsBCSVyiKFeB9FICkTc4ekULWzP3ARXVJAmc9T3ABLrdlwqgSqD%2FDQLhrYhnwrl4FVxn08SspqVrEymkBFCcotm0ohNC3mu%2Fth9Bwr63ChQW6wv1FCq%2BZwYL7vbbREVYRE0lnf%2FMPHUGadgzLxSYqd%2BdfWIANF69PwVv1Mi7uSIX7oD7ClFWuUTIjYKAwfKE1x5%2F9IpV%2B%2BoEvPjyPYaX0y8zNcdYlPgVdG%2FUg7lgHfTPO88DI3sHy%2BE6DOswC2DL8qPRNSzJKyefSWj%2BFwT7Z%2B%2FdcjIq7qyNAZ%2F3mRcbsBygfNDIvVPM%2Fawhi92EwsP5bsFQ1eix6c7XIpWAG6i3PFrzqzYZsOVB2vlc%2FB%2F0VAnL2g9WooxhgNlb4WbOe%2BeT77CvLvq9hIjg8mtih67PLdpwsV2oqzbNxJLxv8EyscQg1zAdv2DnQkaTRc0I%2BrvGzl0JFQWsbn36eOQf1TY%2FMFlY0131WcudvfoazNZbItTLnPvlJxrb74STqTqI6MjYuSGFeuVCQGbwupsJYkwkRI%2FzxvEACoNWTMFbUTEQHT7JO3%2B2COOVSlDmfV4Pxv4367QXDkOG9sMMWh2MkGOqUBjGvGZkq5yy3Tgc%2BKiJNxVntf11hlZncBU3%2FkzJkP%2FnZWC%2BLOirNRLpNhUfMmIxF8DCAj9lr2Itr778%2F4UUHcvHcoEA%2FPjNhoHY%2BzamGbNZp8JplEBq%2F%2FoFZoBs9SoIRNlYKiIcI5Ximf89687f1F2B7rMZkCI6lcKpXSZLspt9F%2Bh%2FcXTttgysEVxWylLwYJ7lNzAawItGlLBw9vTrePx7pOkBHx&X-Amz-Signature=00bd48ddc3a1e6a8f50eb048b28a940cbff343328bb0ac9d562816090eaa411c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

