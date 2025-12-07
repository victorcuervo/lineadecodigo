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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAU7U6D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF1CvN%2FH4zBQhyGPZQYEPX0PlXzaKNW%2Bq3NXDwF%2FGcwIhANhaWjK14u3rC%2FuDMY06kylCykoEVhSbWBowyjgnrmzQKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz02oW4dmgsSPgsXf0q3AOZ1a4uNXPIXoGiPY2KSAPY%2BYpgpLEMOUDfQSsk2ljcVtDoN%2FQ64UuMkzXBB8yuzPQpn54BvtucuAYJP7Yl%2Bd6aJFbMLmhuhvJ2JZLkzYCbboYu40gWfFN0GfaC%2F16WnLi2IUM5Kk3ShKfdG4nnRjg38tGiHQjFOyiNBExUUpu6GMo6t2Bc4lECQrLSmeLnfTe4ebtOegJ%2F8JsO1RzfKu6ftG7Wa9UZdgy6wcyylb0Y3pHLwQBu5vtzuH8X0o%2FsdPqodQMzKqSbe3x60rEyQd1LUlfEjFUz9WcVJk2yPza%2Bzu%2BLAnAtgNmIGWgSfu%2FP24p2U%2FQ9nZISPK1j1FDlhh%2BDXqkbzIR%2BwGn%2BIpiHJM2Az7q%2BpljD0yU%2FjA9uviC%2FYgNvZfr6UzwPvOX2Ca6f%2Fbh8U9tsiPZx7QWfQn1D2BoMUQ7DB1jew%2BbyPB2lMpIyuCJgXivZYlL5Sp6dRN0PiS5uKryk9V9%2FpU%2Fl5lClSKMexyLd70xvadomNKhrcvGVWhqWizEiT%2BvlnUgJDRZG6obHsHTfQZhWgokunilA01%2BNkH7Dqup3oK3OJvIEk2ftVIIzeL7JAhKoFyQPMYZ4Ryzpe2cLdBbfFBpoeWYIJvRK%2BPyRFPp8Y3dos%2BxRlTDwndTJBjqkAY45Cbn1535A%2FNg2RuxUgwQD2WrS7c4mltXdBrG5P9mgSaSiaIxRQAJYZAnDXGtJo54l%2FxY%2FA5pJKeMn8nsxtuxMNj4SireI%2BR8lvIoNabok64sr%2BYDzayN5hTcJrbAYY1t%2BY1EOtRFx8VthgkNSFQMuEz3w1VXp2CO2cK0dMRVqv1FvvLWdIl8XkXMCFrv6HlFN7rKdJkA9%2Fb37pqBmcEUinYze&X-Amz-Signature=334bacb53393d2b519f49ff0a2317c9543b53f2f43ae852e8d1b9786754b0a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

