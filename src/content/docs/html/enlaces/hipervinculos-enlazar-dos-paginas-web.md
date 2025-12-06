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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVQLY37%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Ft5qV95R14IGKkwo1HOMEWCJKOs4fYcjsq9zf22JtsgIhAKMdkDGkbyV%2F7b%2BA06dzq%2BDxKP3AYVSmgtstZ23dd%2B8kKv8DCHAQABoMNjM3NDIzMTgzODA1IgyzkAKIfzS59BLpMawq3AN0%2B4vc77BcJxwYOKUziuRebybS9wb%2FaPqfOCk6VQohbpS%2BCxnVz01UcS3Ppi3EEetsLHdGrIkoQ5NO9TFKTggpCHzfPX%2Bxgv6qR%2BXnPUcg94Uleu31PtvfI9FcimitOn6REJYGHPZuaa21F%2FZXBRvJU8m7Bh2u7hQG4yhmH7ZTG4aiBvyDuogo0gy7KZvSVyr7AMRvYBwBtdzwRtWek7l%2FzokBoCJQSEQPmSouISJkZLsLLgX9byRLRDexi6jgUX8oYEPmkvrpReuquCflqliWDBZvcfC5ao6lv7TtbD4J%2FFpv5n1Ml4JMAW665qE%2FE6R%2FzgqqnHX2gtAckSDygM5lIWxZssG8jvtUadVy0kx8M2yxZRZSdmdeO2jGconH071XdB6QYbyEEAS0xLe53OoaofmBu%2BqK7EZj80a%2FU4nmn5jGrJoGcWDhSu%2FNaEmuCRVAVoZvP90lkp%2BuNwBarMzn%2F18mfaQ7AisGHV4B8DCIVUx4QvHwv1hQ0TcEWRrZQZTsuU3tk6yZM21aqDfPBKWxLeTY0t%2F426WhhNBRVLZ%2Fkgrf%2FKoVpBr4Tgi6FV2dwPFv5KkB0ODsxIaqgZmMnlDTsz8386qJXmRId7uUQvRrxrYx52UvczCQIjVhTjCRn8%2FJBjqkAUUGlxra%2Bpmn2lG7MkjHjy8BAcp3w4WyajSceRI4fgJTq8QnBy9oZdJ77uk0S5fFdeLoy20FvVFyQpMJUCUN2fUWPGl1rEAAW3mGoWj6QJVo%2B1cH4cR9MXkNktieL4qyD%2Bz3hYA9nj8tAIwHmQu3Iw3xQdn8toYoumHNKG0k0oqgjluFIWzZQPNeCQHgP5JwC%2FGSCcdIsHfJJXDkAxWZn6Sl8xF3&X-Amz-Signature=e76e9615a90943c0c6d7e0819c96ecd13dc200a0de1dcfbf6eb2244c328fd43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

