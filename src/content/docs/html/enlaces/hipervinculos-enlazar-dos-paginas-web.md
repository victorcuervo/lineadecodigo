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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5Z7WVG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj9z6JV7nCq5YIwYfBIz51PHkUwc6qdPK6HI4aR3RkIwIgZaYOIcLAuLFw0y7ux6rPkGqQuuym1QeKwzNp0FBfzoMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvt4EgRDaPgMW8yCyrcA%2BpQzmWoeSaMqFgI7XWpxCuFCpbda3gzo3bSLPxdR9SX1BD1hiKFiGH6IiQQ9QkIkE0Oc7cWiSprWXZ9RtVzLEoe4VqHV%2BfjeyX%2FGgBEnd5uv4ZN6Ze4y6dopDB1BCXflaLB3lVqkqE%2F5xJ%2B5rdRkoaRp0ZaIoOVapnaRMk1yQetLw1MRUDaNYPgAl8UJjQSM8lOCLYNip8hqdQs%2FGMSXDALI0UV%2FhyB3ORF3MCYGo28MwzxQPv1ZPgy3YRPny732Fuyi57sEdsIca3p9Yva4FnEneYcRJUuOrBi4GHJ%2B4WcAAQA38axePyjz9%2Fw1cjH0uRkYSaJsPoEomBIv3Jrg7guNLQvsuE5pwhm3vAVXpsG%2BWQtBT0ZGjR28G2%2BVSsAuFgevs7Liw6mwMjiJVwf51YziXMydAVCiGoMLKsblkiZr7dtBQrsv54NUxzjZJnRX6uQEAuvzuDtDvBFhn1ggKbie1%2BZd0vuvTTAUhTzjljWPkC11CccsNp%2BQWUhEKj%2Ftd2EN1DwCyaXEIPSgPtirVXabhObHjHJaS3vk%2BK3lh4KoG5MyL6X2%2FUFTalL%2BSggmlG7nUg1sMlf6EE%2BJWj3e%2F2L2OGEHms7ZeNN9bdol%2FUdrdcIY2RRu4wVGECxMJyQ28kGOqUB90nSKXDeR3eKEc40oFf%2BsWfEamzTXPj1OCC1PHOp6AWd5EgSrodKEEXM8nVnuyWPIZhrskh6tGtoWc%2FRuh%2F1pvotWVDwRZSrGZiBXLEtLQVrN95E%2BrLY2%2Fc6xKWJtsAUePQMTFIEEXxZirYWZQ3lp%2Fx9RStF0lmLKm96H8pYQqRNZUmseYlbQsDWac8ltfbt03W3epbAfcyHZ%2B%2BXE%2BCGkQLupFsK&X-Amz-Signature=6c4dfa9c00ba8ea585a465374bbb36712a87393398951e40a01ab2195c07bd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

