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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCINJERD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC54JkeiQRcFAkIeA%2BJMIic7yz3krlol5iVmir5vTdurQIgB0opWc%2FU0eZx5I0nvF7C00F1eppr6D6QWjLh2tyCWkQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDj%2Fdza1NYnC0G1m2yrcA3lq1H4KquyXh1%2BSXLv82XXjhR0EHZpEhmIcue8d4oMWrXoeR0Qo8VSjJ62EtcTLVXxNgHRCu79WwtIMF4BG2d2DEmHljv2yM1nCP0pvqz%2FUHin%2F%2BWtu78d%2FSPcXEQnRNrwEjENMS3UJ1WACua3T64llBnkQJ7IsS9fIcHqRd%2Bon5n9dmdZexOVidxAClr%2Fjo8%2BiXn4AjOu8ooQD5JeP1jmenPUTDAnkMd90zXLyZHewUQQ9aYymBiDUTC0EpVKk%2FTp%2F2Iox09DJCcJA8mlMV1Qx1YY6QiUgWR2Ek5T3K10468oqfkpINPO8niDjadwVKSiAXhrjQla8YuwbQ3u8aTFPluK%2Fplxq7tYZ5atKZ3UtlrzUC8TITyCds737l9RC5LBBC1Ax3paTR2%2BvoSb8dvy0KwU21rTQarZ%2FGwD5YqY9wXWWl03ROE1kOCAOs7%2Fsg61MNuwFiXB%2BWNWS3BoUly5DIq2JUZgh4uvsYOA%2BgTU65lX3kFSBZfWP2tb5WweTT2ApCdlHHz%2BKdOGsMLf2PdTzl1bqk3b0EW5lCF4bxFgClXSfycNIcjjzAQ8ttKybdW8JJBWW7BXfqvyydDsIK5Fza7Dka1qDKiHG%2FYzUnpIiVJ1IlSxrURaUOGYkMLvyw8kGOqUB5nNH65oYcU3KumZnFvv4X%2BWoKa0KNegDXpJtSOqjikcneBoLsGKt6ZMaBnJTLTpyP7XCzNZOLC6aPAPPTbSdcHTeHx9H%2Bau4NfWiY%2Fwg4UIcIwlMMVOqtPnjKv%2B1VC7xUQ5Q5hnECad7k8FBQIeJ8gBa1AiLRrVq8wH4ghwLsC2q%2B%2FtxwSkT4Bm7eGKeLCVTOQz5bOCJ7gJbK5fF16TLpIQ2hid1&X-Amz-Signature=553eb388dfc505583eaba5e57926916d56175c30b23ba28171e2365a95f6aef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

