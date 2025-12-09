---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFFZJ3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExU680jY%2BXHPTYEWXkYd1Xw1HlseXs8c6wGXe%2BjFZtrAiBBuptvHR8rc%2F2NqJr%2Bwo0aIXejX%2BkwBuxeM6lhDiuh1SqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsrT0DgBHAiuGAtgKtwD89TZljOVEzN83%2F%2Bs4O1djf4K1%2FslHhL08S1wWNyCA76pRntVYEsW5Qo98pbTSHrwOJQuu5zbKDvzKWdDCC2JHGsKJh0PugcpXa2z6jJcU%2FZvo9F73zUTsArkOJAfvXQocKWUoFxtR6iZ%2FL%2BaUtOYhLCES2ofT1HMxrKunfsBMP3AsX5bqn9H69OtUK4nte3%2F5P9m589kColKmqf8XAiyiCy2SY7J6olCP1jS0wgxe4vVtKK3UHsJOrA2n3YaBZ8adraQFL7AeLDuJ1CPmprhbsxR2BFLwdEkMb%2FSvozktw1y3YUXwOyPkRp9e%2BSAIVqLDdxiC4aZ5FoYrT1oCPgCstIIWZCqNtdwmRZ7HCiwXVobNLXVZVy6WuI%2BckPuUwjXtrfkJw9ZYKy68uiBzFR8%2BFNu%2FbmY9AeORXW8pEl6UJALu5SHz4UgZ8URZ%2B5fo8L2%2F7XRhRAuOIu4N6vcCFW%2FjBW2qKKStlpN0LbpYEZDGLpsSCmCLR96%2BPqXe15SjjEvQGii51GzsAeEfd27OUlc91Rbn0Xr9WZvQrzvwLq1KBdVqK8FP1Mqk9NII29sSxH4BxWLjpglxx3hzYSBoi4co18RqArcx5U%2BhSweBGAFXX%2BrAuzANXLboHWVye0w697hyQY6pgG90goI%2BtqI8dTYHUZ1wwP50CbNVd3lnboADfDdQSkoxq8iHR7zzjyMPH5MqfftDyAbVDJGHs2WMf9Sbs4z9lw%2BmiXwLDRnfvV0YTYwPEFUy2fT3PxnpPfkYs6nfpQc7cdZl9dMFCD3CbClluGPuB%2B1kzr6slmVNazVqS46HqAcDreApd1jf50It%2FN47Ah6i%2FpRQyuV1iJ%2FgI%2FIenaFS2di%2BIspyktv&X-Amz-Signature=056c0b0a551375a68c11206d4d132d418745120bab93e7b67bc347a86f36bff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

