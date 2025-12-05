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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CUPW6J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7Vch2gfY0Z%2BjCQeqjacBeejBQwzyPUZa8iTzYQ%2FCIfAiBk4DHH8GU0r2tr0AE9bKvib7CdSwh6HeIeLC%2B5k%2Be0Hyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMW6LMbNPQjWW0gXPtKtwDuDncfZOLuKx2AZy7vxa9MZsCvjLM%2FxVxka0NOV2VLllpQ2Jq1jz%2BDFxf6opowhlQSQ0Dx0SMD0M4WTxIVVBo8ahzE7LvcXjFqU0TVEEnITEr9%2B3oqEZfZAlxcFbU2i%2Bebyhp9iPLF414ENRz3VzAh%2BCiY8V9NIzwbg4m5ZR6j4kerHTRgixGzaC%2BWUMw%2FbLqwp8JahfeuQR8FoQy0Hzu%2FVSt28HLv5Xy2cTRvfgkzZp9Asht3lApDAT7OJE%2FyNibs5yhVBSdm5PAljg0HRNskET2mqPgeNF19wQ%2BLRzZqAVAwABhVSYzEmSES%2BIPq1nDsl4AE6o04cwVXQja93GxxiYoxMwNCjJdNyUdZZoBPLJPiHVGLd7%2BXPGBiPeFVDywuK8HI1nt9LMeuUYbE8TAvJcF4lpS%2F54BDlkttB3F9jjiv5uZzxqh6OuT1xCW52492pZn%2FHM4%2B1vhy6YAhS66Zlr%2BSy7Q%2BrxCbwXnBRozXZizftTgvV0yY0JR5JSYWu8W4JPPGoD0EB6yZlD3E0PrrSzM8Y5qGlo29hrOfbGW7HrfZIqrb5tpxnVyrGzXQu6Ov%2FQp%2B1IMRmWkwVb9Jv2HlrMmFkITpySI8oXbOr4gFs%2FmhfAXEu5Mqsq%2BsFYwnebLyQY6pgH838LkL%2Fe2V%2B96y7I83DiVSMlja6zFU6ixtREcBJsd0ahMcH30CSIWc6YEYlme63WLex432KIExBqQ99y5zRkS%2F2bliPBxQ69%2FogdL4EzuqHEwl5DKt%2Bt%2FEFM6JCleiaZktoNzd4lE7oMf%2FN8l6S5Lg4Vd%2BKDotetJ8%2F9Tp6QZ4ztOzEat4u6x2dd1yvPZB3rHAiSVsDz9mfZuj9UdKJQ37KuSGYgf&X-Amz-Signature=e60acfa280b051242f927eab7e8b2113f833f2751329b9142c25037ba2f2daab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

