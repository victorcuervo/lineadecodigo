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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYPCEX3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCo0UqMLJkt5E8W%2B96E7Fuxc%2BbdYv%2BXZNuSh0f8f7rAiEA4X7iqhBf2nurihNTGAbxqUapaS7cAFyd%2Fw8OhGvYbCAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEClWB8I4%2FsaiPba6SrcA1S9LJtknJ%2BDGREY%2FsK7q4pqweBvGLsPDjowGOZLBqT02aJgnqZodLw80dBvwTShrR8e893A6QDgHqcRDRyRMK4T6XRfJ9CjDQf9ddRguRo5dDoZg2QDjuKLC8hWCfSI49OqBcrZmRF5%2BuLhf7XNeKzJUcFafnJRcPdrt7YaMK3du47DeNBGaDBTlbZKHzrinEh37PZNJ5%2F2F%2FL2amNp1O5VhzIKJH7nGJY00KX88v%2B5WYQU8S7tCkAUywZuW6HJoIGGaJ6QGev%2B92xQjISmIQyMNnqyd7tLQVhn%2FS6D7N1siC8btxR9sGeO%2BjDbNxfhaKp5xTNuu5YFtqzXVOqPuYkiYXPoOhqzyjx8ne%2FrW4nRRBskUWrKjnLkw59%2F%2Fd0sSFq7xBH1jn8QRf3NVx9O64lEeP1Z11w1Ki0LDydc18cTujAy14hBpplU6yHGlBqTlc4dNPr29nuwvrHRp6dBwuYdali%2FW1HX0njjEK6n3DKgJr%2Ftax0CHdb%2FeRDxuwC3wSrmzxnojxYtyL%2BJ3%2FqgedgFUKqu1hkmxA7KZzWiDxJD%2FHWqoJ7QsZgawaS6SB1GHgr2LJqNjv0BR%2B6UaAgLEt832TbfKF88SkgQQ2T4AWkV5hGGtO46%2FP2siBgWMP%2FG18kGOqUBicobbeSdD%2FkhOODsXU%2F%2BH%2FJ92yt28g7dz0QRoWbZPc07DsV7gPjKp%2BTK%2BuiJNsWTWqC8ALi6oovEakrZO4qH9qbRib0xHfqyvFXVOFZHh4v%2FbIUe0LVRLmlw1tNB5tBEruc%2FvFkPz%2BneyqoAZNaD6dR6iCFUv75tdpYjNV%2Fvp0xk8ZImMlY%2FZdygnRXMK%2B4jeh935fHP1UApElLoggPWZchxQY9L&X-Amz-Signature=26360680024cfe020128ecb3467cb70f990e6ebb7c48b5531069ca86a82f51c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

