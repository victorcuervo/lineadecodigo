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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFX3Z7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxD03rbfH6AO2UaDhMi5O4wbDOLvcEt8NdqWtye9aACwIgBtK2eAZDUg7RuNYkqFfDv99QoDdSYpUzB%2FHEELGyoRsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO72G6SbF1n4FDp5hyrcAwTXCO1l%2BnsmC6%2BjgeiR8xaf5sjO83MDij3Hlo6xUfhzs9KlMZqvxN4kguR7Dkjg0yTsOJnU6moZbkpRyfrtKr4%2FfZItWXeMp02Sg6uLKWIexdq67Y%2B6BQ1iMgijfZCcEJWMVk3bZgd4mQQq1ufO0lEj5MC8R48A99HJATwo%2BybOTPOccBwCfzmmNSjAJvMrBWLnyvA9BGbwIsMQD%2FSeRgiKETjROQi8n%2FgYKKvB5SY7uXsFs45R%2FRi2dG5HlnWL4E5YONBtHTbMiskDtb73k9dEXvYc8bf9BJq30TXvqESAD3%2Bs%2BwYqrXY9o6hQDltmOO%2BLutIqyVv7iwKKU%2B4myvAFrgxMREB%2BnGvCsE3%2FMdZWOUz8x4dgRiX9QKUHdl5l%2BZRbsuUWYFjO8n5Fbv0FbNRUf1FTBbSk1klIH4P5p6MkZX6299nIVtyJa6QJtKoEqHAQgDBStBYQOPTnoG%2BX3ToEwEOwHxPFIErnK5M%2FS2kD9NLWjKmuX2objMp3Ns45oJ4WllSQKoorO54JSMJMJ%2BYYpZsqoDd0P5O0QKr0rHtE10ZBgDEa5Awmit1mRPTu0O%2BYswIGohd9bMbtwY0gZjxkYQ%2FKZcXD38QAW6ty9iOm4XYKRbCJQA5U0sqHMM%2B%2B1skGOqUBtpAlsRLFffkwAbfoPie51VYefK9hGiRz08zyHhsujTo1MxIz%2FzpfBj6bt8iw7JQa%2F%2B8pq8mUjrEdVEZ0BU7DIWcyzmQvraA6UBzMuofN9tR%2BwSgzh%2BMxIplsIhjaiQrQh6myc7rWwY%2Fse%2FKfuen9ZN8mQ8SxgxccalPs67oeDCQ2cfkUhmbD3A3PbX1Wdd1zsER9ANa1fPL7dzUWFo94QI6mhB6g&X-Amz-Signature=71530b59b4d641a921a7c829cba1c2b19ea87ff37a0fab1524a2b0ce4fc325c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

