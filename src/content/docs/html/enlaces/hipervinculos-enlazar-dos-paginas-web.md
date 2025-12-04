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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAE5QE7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFKTzvQP0w%2FQxhDPVFqx%2F6mLw0vCgBFmH70TMPko%2BeU5AiA0Pxf9ljphhEN4kdgQLtVUi0xQ7hybBkEqy6sXeCgl%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcHPQU7q3obdydrbKtwDV5Q93A%2BJJ2OfljMKXk6O5kWcUp7G1UITkXU9yEA5MZwOVcdqOeyJ2IYQYa1BC6%2F%2BWgV6NA4i2LZTWYiQXSXcRHHICUpAhcqBPcplsWzWpowk28D%2FYnjsDLKEO2P3XePM27olt%2FDLo%2FTBTcfLDhHJCv2Y8ZheFlqp4tSb087lurGgHzGpzrpRl8vhC%2BJ73OJsGSpa1bqM8RAtB5zve8WRZRkV9w7CRVnLRlNdpqiMBkkiwSnhLs%2BHwpUMbUMy5%2Fr4jscQrmnjLW5NcNOlqT%2BzaIHSLPdFL8qdM7pAfFYKYtiQ%2FUEz6YnCWdceoZBVWn%2BU0PvRl135B8tWjlONEwRnlf77NTirU9KzGA%2BE1VPfJpQIwRUDMUsFxMdMSy5sgB7jN5RG4%2B3ki41CjN6ka7yZyCd%2F%2F%2B3Dj1EDPDjmeG3A4UC%2B8Jrv9D9bqO2CtOWqavqOaa630Fu4MMr9IOXcel2bc%2F1x3R6Px%2FAgQ%2BIH2LaC2CAeSiFlK%2BZftrmKcaU7eeqgFs1oBPmK8FGj8wBgSt55nWl0wqxyWBD5X6oIkVbAVbZCz9jfXyhibqJvHl7ET76g%2Ba8pB%2FhFTfgxD9yjLEZ69uyAZ8M2rP51upN6%2BHVXNjGdPS7k%2FR1jgY4k5mUwrMrFyQY6pgGjpxK9hIG8GaENYFgxsda909pffcsZ3uml7t8Mg%2BmUlPNsNEc9eUZKg5GqCS09JvvGk%2FwjSQ0QEeDdLZ47r%2BHsG97bjQ3v7yrd2pSJCvunxDfba7b5JoE1fvy4v0V1Ke3ALx7K9OTmTow9fP7HTll%2BtREpL8nKwXYVfmf81BvKU7DgS6%2BcrS%2BFlPKY3yQHEchp1iVPn8ZnDDalnauL1TXwAphj1Ktp&X-Amz-Signature=2236be8ebf76ae6790f1129cc708aa4269395066f4e22e6f7e33100f1a487cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

