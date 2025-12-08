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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4I7ODS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2B%2FpY5CbfHhXDhgigmDHyfcZaXxafZ3UAW1XlbDbGAIgRhBKNkpmnH4XL5MJriKbB5AaIRSvc0WrWY2MSF%2BBNYgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvMs%2BmDcnu9aTIqoSrcA9agscLaZ2x0pCoh1fHAvtvUJFA5dfZAYfzyFohJ8PVrxyv6tjR6NoxwcOXRZ3fsKEftH%2F6%2FG8J1W3FoLdFNgOzie4DM5nBc7xhuQ6e5gAHwkQra7uQKmmUt7ErEqD%2BdT0fZV99rVKVMPD8GQz5ZiZ8PmPeSl4k%2FqeVsV11KPwXeGDVL45P3pXzI5GaHQn%2BklFtdOjQ1U8lMTaYH3%2FkmHFKmWfDVjjgONNonWnQNeqpOvS%2BXnbertfVDxaOoihJMEY5GFXH01aT4dzBhvOZrqQPkK0gZ%2BMwRR%2FpjlI%2FuidR99akW4hcW6MvIFX0oNAH9%2FeGt7rmhNfkuCu3OgyQVqjyIv9CE9aUftGmUqi2eKtOOJPfMuW6CUKHgxcmfeiN88Yk4tI%2BichCUAhEt09Sd5Hjx%2FWNJEqyIkTSI9zjpEJdFeBaK%2B4OhbHsZl5GgxOv4sbZZXbHTs7bJ0mQkE0NKbECEARa42LSI2IxJHCgO9FG%2FUE8CXVr8aYlJE20ADtIhOlnFvhx2WeOTZikUc9glg%2FX28DBA4iwvw2DOlTqI5c3S8LTOfDus8DwBnBu5no8wVAYPb6wuXx3LsdLSYr3lt1Gztgkhze1GP%2BETflxtxlTkTYF9RdNGosZ4Z0rjMM2Q28kGOqUBbIPxCXpMGien%2FA5a1vzi2NzcZXBJtkaoLzngS7aTWmkL2NSXXwVkUFTUwZQKcpUL0Q4Wx%2BepmTJLkHwGam%2BO1vBmACjHZiVVP4hKTSfakO6VFYfBUnqMogTk6Mjfhn6vKuFycc%2F2Sb3Ut8kiC%2Fmv60I%2BM0Pd5DshJYWx26s0lBPLeotABPqYKWXUgtdmAJZnMrDqHtUCVD52fjWTKMqA86eIgcoU&X-Amz-Signature=8c605ffeb7e3ba1aaa335bab2360a2a302ad91838a029191d4969bf0478f536e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

