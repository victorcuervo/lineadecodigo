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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2MH3GK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAR6S3jpdCm5YcZ5%2F8oxvyDv2iudjLRWZGa0V5Lm5KqgIhAJGImvDQJSPcE6e1iY9krOfL2sc846yxHtymR0WEGEXoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7YUCkZjVBxgwnu6Uq3APfRRc0qQ4WR7eyXZ1r8r2RLPWHknGUmMN7kHLvQspXoPsuaVotyx9oUF0PRMvwAcLlKR7VhwnWe3ggZzjJPoNyjhbSvbuIytj6EUrbzbqGMZG43rQzx%2BxNMS8Mw3V%2BzdQs1jZlQhIDIZNkPYN6Z470LmiCX7ZG0HCbsjtlX9YF99%2FH6zinLw4G8cD4GXG4sgXdN8JVKTjOaM5P%2FF20%2FOdWUZgDztTBm3Dn7QXL%2F%2F5pLCR7XaFazgQpaabaceiASL%2B7Lv7PRk%2BLwG2%2B2JzCD%2FQfT96fZeZ1svbn5H0uh4z9dLCRpXzk8%2BkoTGIrlZ0ny0wC51ZJQIIe8S37%2B1Sv5EVFCLXr1%2B47jcu0g6zJo9WPcspLc5DiOsj2avDrjV2wrN%2B4wVhpmEMzM0ox9beyJoSG%2F4eI8vhwHCBlfQtxmjKGERgk0COfUbqZBbB9TQpYaDFaCTPh%2BveOE%2F%2FAJm3A4PyHWcWQDavgaoLBT7K2jhHwQHzx5TUxcTKcmkQcdyw1SE5GLyghpKf3eX0aifJteQLsvdU1VTGkofLz35ytveE515864HDHHKkrUC%2BP8WqioYdoS7DnjCVtG618Oo7V7YceaS48a7%2B3%2FWZnipO8U3VGNq6s8Jxw91rhQzTPszDRmdXJBjqkAepakYBKWYzGrVh%2B2U3wwLI%2FDwjt1eD7y%2BndBg6UDW1N9bSvv4g2FfG80%2FCt9LoWh%2FvxjcyC24l8oL14lhyFoR%2Bx4KsPyMAd7%2Bw4qCqyo0JhiS1FaAXwJjcVxFjOcATxrl2Zq6uSRPXbUbdvnN80wE3Zlk9T12fURXIDzxXp7jJHX8AykBLN05wA3SChAbmG5E4eo1aSvYRTSmBXQ2FgjEsqjRm8&X-Amz-Signature=06405e8a522791af1c94f4cd50a02ce1aa7a6a8d5e4a03aaed5127594b49ac0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

