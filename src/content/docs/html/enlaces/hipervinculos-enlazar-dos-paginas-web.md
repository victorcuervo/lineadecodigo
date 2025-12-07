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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMO6CRNJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyhlnNovRJW486b1PwZq0Mu8uLdeatcVlojfsBzQkXsgIgMVSTAJ5ZHcIEU6A80mjt%2BPmT2NmMAsFyMITVfsJEbqUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEghsWIubItfOOK0IyrcA1DMVNc2n7VBd7YPqMnftNHTp4MKHuP%2FBwRIwsOzZ1hZzMOy%2FHEhJl9ZTRATCA4SLFtm3BQBd43wfIIMtm9ziIuPxkqXlVPFF%2Fo6P8wW2sDA8jJ3DE6bXOVgQJiaAdBmbhJjeaf57te7lXQq5J1pI6CXl2vRRc10vxk%2BijBWIJiWaNpSCcX7bBwLl%2BF5G2MJKyYTXPRUUzf2%2FGzQ6zHLIis%2FJDtRGUoRkkxWUG8ttSiEw7PAp6%2FcUJ2xUorxKl6Nx918xDsxdu8N2b3vqKgjsGpVi9i1mZtkGkLVp0GoDkJQWjmcQdaNCph%2FxCSm9JbYh6ORdRIh8i5DujMQQRxM2nsjbNjRlKi1zxTTEzcppXwk6OLgPYP0ylhTEkPV90jMJLedk1UwSSW8hUByZuRDq1gxyu4jrOFgILlNQWZge77jjVqF8YeRwPZzluibYjbOUu3CgctMoiUDM%2F1tWNxqLk8gSN1BkDoE2lNYikdwoCxXBYeL5tFP1IaHjmdoVSRSvURJQKij54miqDv07ilv8l32zMnXlR1HDq7ACPYzF4afw6FPtSRA63uwGzA6V8Bmlhe55F4qcnyWErT3g1dsaF2dMzTP4QakIjKfTASnM%2BUJed3wGXQw1%2Fyny%2FNqMKH90skGOqUBs%2F%2BJBZNAYhh8vQrI5rM69AQHB14yLk8VzWJFI7f7OJSwNwrzHCfEgS5481%2BWjyvuRYb0fca3eTmCZsiX7gmcmk%2B1y7r7qvLn0GnYk7WFH5MqGi0e%2BKf2Gn%2ByV72pG5UMw9bll3UKQE7g3BYKC7m67F%2FYPiXIRJKhYi56iLChEI%2BJiGwrAFflwWf4Hqat9LSXC02W%2B5NnOfWTFDH7u2li4cdVSX9W&X-Amz-Signature=06558e433fa04c89966d4b47505bde82052b2ba063b303b30a5468b7a008989d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

