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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZP3O7DL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALotxFlvdfqLMBgqh5WL8O4pQ0Vhiv8E9M3%2FHIwZSppAiEAj4djOMDleNYZjgZMFC0od7JacLcCyFh0zgSpDTDhUKAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiecF1GRzdvyriXISrcA9qpjA3c2ivhwAyZ5w0hgk%2FdnUDmR9yQJwIiyQrXmL%2FklZKCNDaG4TsLWwEo14y6DAGP7vPITkhfTsnpwkDhaq%2FN98e1Yr9prB21xW3AuSMUfaoNI99kWKyTUwf8JvOez0M7%2FtZRUat0guTF4Jo8WsH68rM0%2BpN8yWq4X3FaClGRPkrtN1jHR40qgKwr7jIR0nasNPQ9KQA002egNnUxzBWMHUu4QI1x629Bm7SOdyiBn%2Fs6DxwrW%2BRRTpta4j9Edv%2BJxRN66T0xVZAVM8EKg234LbCM76cLu2G0YTkMs8TbxHL%2BcD4tkHxOCPUTJyBuw5jKgNziXOyONqwpo8GD%2FMoKvWNuZ9oLeAXF4Yh1sJCO6eHEV4mzJEGeqoOqETI1fTjoBclgQDftGAkEakpyk18zdBMyaLYOOTlHMoFEaKxefF0y8khbbrDzH96jiuTkBcnB7JNJawmz%2BBB7eWFyRhxijOhmo3qkLhLWio3LVBoxbwSDXg7Mj3q0Fuok5PbU2DAyYu4qEY9oj62mFyZ75ErnZXEKDg4ptdtxakg7YkH9ejxao52ODYQluk2tJcq8g4f4aoFLrfgf%2FYvJOQuBHjCcfu7qSCKnZmrWzPu2F6TEEecwYdpl75T0%2F%2FfRMJOY4ckGOqUBAUZJxsceA10dVmPazcYQnRkgpAcoobYPUKNgNXw9d1L7WSn7hK8yv5WoL8UACRIKvQyzf80n2HWeLLxMiT00GX5hw4KCz1QJsvj0zJHjIUzHJ5kKyCfBUxH%2FmRt6PGRgAeh6icm3jxbneG%2BmIJTNOVqLyPQ1tpFLnFvtP4%2FBoDiqHWjPFgWgRFIyMd2tVOVB3Y0n%2FYA0i0nsWHIizX09KVpz20KY&X-Amz-Signature=bf14b5147611e993c183cfa71d7f68e5c84c5c2f0f71a3c06b0cf0a76c721f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

