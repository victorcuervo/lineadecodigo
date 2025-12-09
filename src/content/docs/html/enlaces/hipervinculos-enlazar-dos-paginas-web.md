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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2YQJPG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGduSBikslv7G3qMtM%2BBRizrW1boHJm0QUNTWEMTEf9JAiAzAmA52tm5ZpirkinRLbcxuAgR5NhMH%2B7tCgk0195VeSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CwZvXKYjO%2BNRuTXKtwDSiJNVbk%2B%2B5diqbzxnBq0jzVx232Gu%2BSa96lABC8jftYjgHwdmi3aP443oPrJqfFihafRLIdO5kylf%2BuHlSWcAZuCPFbMIB59e%2FSSjEkTEf%2FDUJneBd3Fz78my%2FsBEHFsgZDGOl85TyxzAYLdMnk1%2B2uU%2FtgrLHK0NBhyLf%2B7POOyfpi1zI8%2F%2BL%2FVlH5ASbtiHWS5HsCUoapa6jrGedAWb0P3aAbVhJbkFWy3oCQRY6w%2Fg4221HOkR23XuBxYybC9uT2KsnQnr7J6FNSWIxHrIWvMQsqMGc7KW4ozl6Lr2nVkcVGkVteyBx6KP7DH4BuGlUtyR3PXQmt9dP15W7qjkYxZfAkjioorlmAxH0L24Qh%2B%2ByqF29SmU%2BnaSmxS3gnboxlfWetEWQxN8k8qnxAPOTF4N4Ulguqq9O8vpLXnBxGi5KgwdLaL05cU6Cr%2BJfrWk4kyf828kodUPhfc3IRQnwTok72I5Yi8Blvq10iR684paOEUpoCLzprup%2FHGRCYYqLqBljh%2FvxhCgU3F5l8hZsiNKbXTFRdV%2BwD8x6g7%2Bjr7X4j2mVmvEL%2BU4JYVf8roI1vlHGYj2mM%2BX3Y6LLPYMfcrjPbXmmn0RUqa2RTYbxt0YVeedw2vaF5kYm0wnJjhyQY6pgFzuyAgZwyfkJINB7Ya8s8hI7YkLBOOzFI6wGt84Klqs1mwr9NgRH7H1o64qVUAERLkvz0BZLHZeW7Ph6QLgHRwoMVmEANuh%2B8ho2YWvPk77igoLEthN8E0y4%2FSJVV4MPDfLBxjSXLUXsCh%2FjEeibzXL56KbvpggqgXKwZ6jX1KHgXhAdb4maguweSNT5LeCQ2UAkuirEsvvE4s3Aa62k0S3bVkWRuA&X-Amz-Signature=d2790085f6df7f82be26e1704d0cf070109e370c7fb83a9b0ea8035882d660df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

