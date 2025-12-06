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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVIB2MJ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUSUegm%2BDf6XJ24Vz%2BkSWvoCc4974hcO8HJs9Tn%2B%2ByvAiBEFgbcksmhEx3tshHLAhEi0gRaaIsDadeYCGXuJVrFRir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMKA2WxuD%2BmyOn2gzkKtwDxiYWSdWOmMcy0hQtHD1XXG1E82SwCWJOfKJLZiRUaXfaKe0HcgcDsuNZtyhcadVzpTNGRtlUTPagEYScS6%2FouqaEnQ281tZ%2FHjTYxBTPAJJUjj88bEPsDDzekylWDWn4FGdAiPxhxAIlxhWXJLOCJVn5ZKnzAI5%2FBcToAKV%2FJc9J%2B5RE2OiH6JjAhUzDb%2BmZ7Pn%2FEwAf7mImnzFvygpHHr%2Fnb2t8NLSq85ISovSt%2Fno5WLmKO8ZCOvlEYMPEnolFACylvJ5yRFgm1tn2WZC1zh4xRSzsdjZwdnevNUpkYgxpwOIlGS7qSe4ympMuQdST%2B5TySOu%2Flw3XZd31dEG%2BkEDxwveBa9MVNIJsdNwyt5fKoteFs%2BllSjUrvllIKmXH%2Bg2%2BOL4XqHOn7CF11zpfaAllcERyVYRA1xjhwlnAuif6Ymr3a6AaY0cioHAk5uE36YX6SKdcPaprCKkZ1WEN%2Fye3WRF567S8FibjPCylSnI4gjc4B281qAwXdvcT6WLzhe2ckdah16XfYtfr77VY8RGks5H5KAvXWbeUgzfhXQUbUkXy5k2g8HAi2abeZd96edZvg3ktbVX7L2GuwEcB6ttf7vD6%2FWXBcccgsgiX%2F55%2Fkx7nqJ1v4lVW9cgwscPOyQY6pgHMsmpLZAg8n4IE7emljJr%2FRzXA7T31if1Ej0K9HRxxIilYahGILgJYs%2FLfqcdGfBtSpUHzdmVIHv6GSp1132DyF2UmUmxqlj8EhK0n9XT9pbwjSBpMxAcckFAcIVglv5h3PcB5hbeEV3uTb9m6rqJ8krzxzXQFNN2kYwlQ3L%2Bh5ElRfDeonL0hHI6CX9wTGaN%2FajW8tZ99HCSQQ9qi2j7DVrV0NagM&X-Amz-Signature=fa7c3a3b274512e43384824063ffda4d01e70618bc8e79b9459705cbd416cbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

