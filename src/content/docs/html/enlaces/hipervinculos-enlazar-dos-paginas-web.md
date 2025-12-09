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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633S5Q3G4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsk1%2BfolQ83knih1quU9cxowKGNS%2Fm666XyG%2B9KKusNAiBiHxYrKUMKwxR%2FsVVCXXG9iijfJ3rG1%2Fl7NH3UaRuqsyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0JIENYMYdwOeoQUHKtwDxt%2BUZDYTkxSc7ADM190FeN66MQl0fvkxBfuotF2Dx1cgO3S5vuZWmS9qix6YO0VDHPWYt9EmwddC8J6DZk4TWDX0mBowQDUXyOUQrLfh2i5MMNuConZzzMBqpWJONfiEEA7grMS5aMc0nlNhtrfz0vkjRGoS2XmovCLDkLbUnily%2BMS2dWmh0PysaB9Cqgr4eu6bl5F9geDS61kTvtkqmh3gpg7pVvMX%2F0ElC%2BrYvQjxypM5Sx%2B7ClwZugCCfyZtUMB4To5avHRJpgdVVlWwWTluoB8aMjJFTb%2BI4gDYH5qyfENhimkDkc1VBPR1TPy3B7NZa8FCqTjUriyTvHe%2BPyl%2B0NYAj7bAMIJBaDxJexU%2F8C6oQyE9KtzR1VJPKmY2itI8HghP%2BiEKERSQMl051E%2Bs%2FcubzYIsRGhcVH5Ka%2B3zTbMO1DScNbTMJDrWx0%2FOXyvtQX20TZB63CBu6bFUthN2CAJ3iW4EV%2BApwJ9%2BXM691eby2lQlhJmZChskHZfUMXfzY56p3RC%2F5xLiGEgT9nP%2B4pq26%2Bdp0XkimGJvr8Lj4NZxLDPnJf32jzQe%2FU%2BaDzAhSObPEynvAOgzHELKNwmFm8phacHzMyRC1%2B0wSniYoiF4CdKVZKbiln0wnZjhyQY6pgHiZE%2Fxub1qiY2I8EF8BNyrbhPZwCk8iCAoZZT4r7SS%2F2ocRpkQjePuPmb0pIAK48vcUrlrVs9%2BGJBM1237d0kVAfG4XSS9kTQUATTvhFmt5ykuwHQRMj1J3ANQFsbzSv4k95b6r4AVeu9UVL3lmJIFDWfK5LWrHyzUlKdWEVE703rkrESGxYnsuivDs2NEcbR9p3vboQHn%2FhplO5wua5366J%2B4G0rb&X-Amz-Signature=1ff80aca35b58e180ff71aaa41e323ae7912e6b959c4f29df3654c4be1f78016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

