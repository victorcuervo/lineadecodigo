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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NA4F2RN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmcay8b%2BaoGZxzwP5fikVewTzI4tZJhtWNIJmM6wfA6AiEAhEwnO5L744ZR6t3x%2Bg%2FIBJ0muOgyAjt9k9HPDTX5EeYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZMcabvThBzuNar0ircA9DKJIK07GWvnROFCProHwjFvOnPS4kq%2FspXU5tkvALUjz15yzf3COARKTuTUSPld8QaPEhlEAiRabmaw0PppRIH35d%2F9WICBXMq%2FDE55wlQZHu0NR%2BjPaQIcvLODmFjeF2MSHm5eeREvv0Nv5txyoGOjm10xIkindXyYL6C8VuzcZmiZF%2BiHklltWI9OY2Q5cxSxUFs7QpwxAtg5h%2FqkvKezYiMl9GArREf0ZVuqyZjVhZ6EQZkCruB%2FThKhMSh9p1sUSkS9%2FZMJHCvhnnKTiOTq%2FSpiL0B%2Fnpw9PRuL9XjETVKpnKRE%2B2ki%2Bfy7b0iDR1GK%2BgDV%2BPfP%2BbcTLy4BE0dVVppQxeoZwfk0RFyK67QLTaetQTYRUjloaz3zO2y5a3M3hOPfOGbTAvSXEYUKbOeFm%2BAHTPUV2k0Z9bvHQYgcSsyoZFh%2Fn1a0dWOH2KHnGNEeNbAAA9R5qJ2kMcxCQdwdplV6BU6SMRXcsLl%2BbQXvG4Nf7VWToJYluLyT7KklbHxwr93rgAUSWZ7KFMxs5DH6TftGXKN56RP4e0%2BMGZrPLiMueqVDdUjoaQIgmAF4fvxEZT%2BHaHjDdmf%2FQ5YB4GK8dCI8EN1wp7L8oymsqGzWDGZU7y2fl2FBoqiMMeQ28kGOqUB4tlEXVa4FZSw6zIJ9oyXV0ziJk7hExaMvdoBh732eFGvCvf5h1YrrCEErVpewTi4a52mD8cH3MmMKOqvoP91r4h%2BdAjktDXiIM32zRkcIc0hJRajobigGork5JMRi1FlBT145VEBYBUj8Qf3bIWI5yqSjOTYvEYLIdGuYdYfzq0ZN6neqM7rfjk9X7uVEW%2Fs16ATx9MJTxQEuSC7y0oTea5uNVEp&X-Amz-Signature=b3d20468b96c062ecb0928161dd5cee456753e6ae6264326bdd4f388e6dad298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

