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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWFLPNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEfNsNtYXoKCZWdUeosoBsjsNFfu%2B0ABdYkrAUtgq3N1AiB%2FUWDK%2FaxafUD6l9aKyz1sfm1NcZRIutK%2B3VaR3WZ74Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMrFrkujd%2Fjw%2FxG8n7KtwDYXoJy7kw7YT03jfC%2Fd2h%2B6K1Aio3FEsh9hGnNz4URG4%2BjYY7KJHAaIvQ%2F9YdlwDjUJ2l%2FeqPMePGQefWiGEQQ1RYj9chxCOnDoyac9ztTKSH8im1dNX1RcpMK0v1ze32oHLKNtKTPeC5T1pjQQGUOhZg2VnWTAsr0l5WTD5tDAnpKAeYS6vwiio%2FmTV6%2F9B5nq4r1vCfSq0MaF1OLQE%2F3w4MgG1sXVwQmvOZ1zTYiIUaUDOB7ZyYTMSee7rOhmL70etlJSzbyGU8SuwMswqNnScKZAopsN6H%2BWeGIvwOxeLG0MedwSJXKy5r%2BBiCPFRHmxs7kJSoeVvqe5lb3QVBE49fkvCnOGTt2o3pMGaYfzzal5F%2FXe1MxNkxX65uT79mEWjh46GuBm39oKD9OeVzM10xcTdjNNwkOOy7SivUBYNNQWC6nwRTknr2XWu1acH2gYdK8%2Fe%2FER5CAI5aYDsLbK7r%2FyWJvXPTdCEvEAWiQx8YQDGJo4ToU4QOgThMJYcJI6%2Bbx5VG7%2BaV9MjEnyEJLvz1FkQkRKDk0CZjPMCgcfwnBk%2FBDHVEtWXtyWybTBxArnG9Svy3xbamb8EuN0S0J8e%2FOz2BaFxOMQQOPtmZlcjdwGCkYb4EobHjttUwpIPGyQY6pgGVMezGfrNJYK7NKaWGAvY4ZTEi70OY%2FLzflGrIRxZ2yHc4CQIoPy9Vd4zBWXZ35YlMDvfcEr22KDZrAQGc91PDmy5MWVMtTvcTkwSR0ZYI4idCK%2FHlL56zAwXKdA6vIRgWqBHbO017MZ6ExtuVn8HTUqmYe7oV9teqpWgcGfGetzB94Ry3RENokga%2Bt4OeU3Vzt2RSh595ke3RB%2FZDqyVWUlx8WPVR&X-Amz-Signature=0be290408a9fbbf73c44cce643dfae29cda0322a73d2dc3c85be379a9861f41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

