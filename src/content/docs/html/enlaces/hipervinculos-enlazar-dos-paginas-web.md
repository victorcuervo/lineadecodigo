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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIV3YSLD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FVfJDfYcu8ruDL3kE48X1mb3YStb9svsJqheLmBhBfAiABqERWNCKCKj7EzbJEeFZtKiMScgQ36vMioAcbHZsyqSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHDV77mU1GOZ5hVHHKtwDsJbC%2FtPeM1rE4UzpqnxBVXATR%2BzwoglhWtAW8Ab474EOSl25Nc4A3nqn701kbgcum4b0UuWom0fcGOYVvrPk3JqZ8cvsTjxkFXa965IhKOmbSLAYESwX3fM8Ir5EEcumYOo%2B%2BaBY1lkkbscdfTvE2hGInpQA9kTgn%2FONW3Py%2BSFl%2FTqCs%2FydVLsgAU%2BQeZsf596TI8DmKVbsCp3kUSkVNwpBj%2FaS5Xk8P9hp%2FuPzSKhqkrSiA%2FDKMY7YyPqRdnbOV7ROjo9or4vhxZUwK6V%2Fj9Xr6DQBh00YzjjzqXKwBtPra1XP5rSiYf3g%2BlS%2Fyt7AgzMiCsOmW%2FjOvjh1y4xiGCjsLToHQUYB2K8CWcb1yq%2BiUs6f1xQtvqCXVsZuYHwhd5zoN71ipb0RFBJlOYWcJGx6IS32xP3gfJDNapjTua%2FbwHFmqzYlOqz87sdgBV%2BDv39WShugiKi44jquxkqy6jNGKGXrtXp7K8kcpLlfnscP4Q6IEiJcJZ4gJ0VRYwdwoOK7R2gwXUwDEwodyQ6l6kD0A9ebiGCYu6XkWY27qxaU08Zqv5sv20iu%2BvE6E3tjQBRWUjpFWOzSn7ILz9hUp1OeuLJMuDEdPz23Dpn9dgbnMquNitxxyr3A8Xww%2F%2F3SyQY6pgFvWM4saK85U5YTn5%2BXpF%2BJUvTpKEEELrzHS6tdpYEwW6WbPPqW85WO7FaSlDezuDQQHEFatNoNHC6QyaJNKMAa6XzvhPlkVKcBBbu2XKBPVVfYsBaMEfuyk2VZDwzf2iRv%2FfhQomvWeJVEeVfnFHFYaXtk7SQBiQ0jP8ug3eISpuUs93%2BSXpav2Cs8s1LeNrWyXr1VoMlhtbV6a0EHxJa3LOGeyJ%2BK&X-Amz-Signature=b2a7d5743ea9ef6495cabb36ab2b29afa28af41a15beb59df6262f71652e5a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

