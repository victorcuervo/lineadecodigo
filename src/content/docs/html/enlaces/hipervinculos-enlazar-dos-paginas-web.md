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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OMDRQC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCw3OSQvnSfF798ZynenAa%2Biu1MPQrXJdEKSCtEhZhoigIgMA6E51lLQNQVZDeHx4Fb1rOePOS2Heo8dp%2BlPVB%2FWR0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPqQLuPEbS9jpaLIdSrcA0vQVV1ebl4FB6%2FSm%2F6GxHDXLz2rAulf3F%2BW26iJdj1T8gCdHE5nJ33Hf4SWaiHn9v8pMk4PB%2BM7sNdtUN57WydnSNKrzHdU8nl0dM94UdOO0mENfuV4mOMzs5G8Y9FFIAqqv3CT8LwJZP2K2iFrPl5y0m5lScG0ziovQ8o2I697cTpuWWZhF9wVg2O%2B77atrbfF4DdtOEnIM12dl6XdcqVtmcYPU1Bsq8eZlI7WzVZo3dX8MG9xzO5wZqNrwgxqF8hynlp5nBg8nGkzg2gJbjgKNugPM8PNIbwriYQeA3TfJ3pKawVhvfXkEimoCTzYjGddDByKOHM68%2BWyjjwdRMCeya%2BbLAWPnH0qi9wRzoLx6SIYVjlTtYDqVwUYWSQgNEOuZflrEaKtPmQZh%2F%2B0kbnOK83r9ConDPdhhtG9ycJI2gLOJ%2BgZtpov3DNEgUuA9x%2Fp%2F7sf3QJHXa5bLACY0tEk87%2Fael0vsXuZZkaBMetusvS4TXWXpaTQVLmne3vZ81hTCaY2%2FxZT%2BytgSfkgKmG4GgNWCUmFJbNUfjaMiocWuL7Zk6aCBf4nyl%2BYCnLdHoZRdSO3MB6lJlsWL8FtUNGvP9pB9VvjqWqLbkBeOnTteDi6EcTvkWWJ7XEYMLjUw8kGOqUBh6p8u5HiXeEygyG2S4NBdlk4rwMkaRmrT9EaiWuflHAZ15f0l%2B3CmbeJR3Eq6zFZ48zsjjk9e5qoqmS6DBF5S4Osw9No4F1VPV4nThfx%2BpPt%2BEUGkLgre44TsmV0qUJpJcDS22Yltvx2uonuGZchI6FaHgshzBHgsRai2RhF20%2Fs0p%2FdZr7QKUMSHOPfPTAXLGqbtpflQG9%2FOoJJwLICnK5WbRX9&X-Amz-Signature=073382987d798d8b43276df3b1489485d67b88f8d3ab345e176aaba8bc814831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

