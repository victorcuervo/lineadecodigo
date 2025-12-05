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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7Q3656%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZDTDn%2B%2FU8rXphNCglyCH0%2BY0ne9%2B4%2FAaME9yc6dN0AiEAvEi%2FDOgH2PjxeFTKg0Yv2Aa7jq4WQx33dFaiNusV%2F%2Bwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE0cEPOnzqgMz7YsZyrcA%2FPOijdd8ervNTcbqzRDGhqkB%2Be%2F%2Bo%2F5RNZ%2Br4boo4qw5IgfTFmxFMoyeBzJ%2FIVJxTds7WUeRHLeuIQm9NPGNSMPgVtFB33300FubiRNH0nPxEitPapoIP9IuhuPIpZaFw1%2BhgLy4NV5ZZbLBHn6%2FnPZzKXlA6UKvDMqE1UK0LcQfJem3hPdjfUPoscn0rmvRa8AuRYi9bewqa0jd40nmTYGqDMGdJdqBwC7OK8VII%2BhXRZNVBLro3b9fhefwBz7%2FanQMvwIqdSnnj8G1vQTdneES4uPbHS5YDC%2FBA%2BULYgR6%2BgdDuxZnkbSXO1FRmc8EarIzoIASP%2FGqmRfU1r4MSJC5RzTwGrNSO0Zq0Y6jLmOiWfjc1yeARsO46jwz4ZzlGrIMdA%2FXKW%2BtdiMp%2BYgYjUolnber8zwHwsZLOPI95gadvv%2BNf4iZjVsiP6ZPEAxyc0Fz9BcNsOds8wOlHVU2goGrOwTn%2BvYIZRMSlRWaRSt2D2kdneHGixJzZN13g3j9GefAdn2SieLOTv8nLrtVzWgMBtE658Km6j8P1hVBaySUF8NWMR7myKKwaKEdCcd4n7eR5AuvJmNzTnPpegSXe5%2Bnrvxj8ygBX1f07k0EUUF7%2BkIhkw8BsyZmU3vMKGMyMkGOqUBAGBiqUcAcqFMNI9eZaW%2BngHOiI61yGnll10kIwyoTs1t3x%2Fdl17pXuljnoClJgKS%2BonSk%2BLGpcR3kYH3uJz1Plj%2BbZt7LMYVCxwZ2AqoXk8zTmBcs6Cp4HGF%2Fa5p1pkiTTGCydUNd%2BqjOfZ4ewmg0vVp2NEe9w40fOKYaPO8y6Kz2DqueR0MsDhtDvABVSbDCpSuQSgQd%2B2JoDQdSYyJ2qQuR18C&X-Amz-Signature=e0b23c9f838e6aba16b997b0a82b1d99e8e4c729c25403559e3526955174a77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

