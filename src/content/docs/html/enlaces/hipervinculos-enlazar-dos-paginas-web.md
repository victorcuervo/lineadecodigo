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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RM6TXWE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQlBPZOd%2Bdxyi4r9%2FILHvNcj4Yw1W686yI%2B5JS83Q7qwIhAPXdyb0cJpkoqAiv8DupRIf9xwUkOKNr6MJlx%2BMq5uJhKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXwp3Do29CriZQH4q3AONlLZv%2FxqK%2F72Qn9cCByhbWBpx4EDQIScgjdZQ%2BHTD73ImAJyQ5fCx94wKw8HEhlc0ZlkXsmS%2FE8NhjpMod3GMRgxfFew8hQAPRfBjPZMiiT3MXZE4MW0DgTpngZ06febhieA2ii%2B38woyuaMEnZWv0CFU%2B6vUy2Hdxsem9%2FOi%2B4QTEh36G5JRM41stYfVVJTGrXGyBXtJFMkQjREeZL3Nrv3vmjBdEbxt9F4y6pRxt7yajLxFt6kLnXSr9CerpHaWDBp%2FsEIRFFj%2FzNEArw8RXgrY%2FeDdtuGvuUJMZIAMxnq%2BHlBJRn%2FZo%2Fzmjm8cCrod2irNc7FH6VG%2FFjsYEUNiFDeA29qsDSfF7N7bMiH9liek05ZfOyLzf3KA9DR%2Fvtko7savWmq6OYO2v9Mj4i0WCWQ2kwWS1eMRd6NVw8gZ6pkgosA90UoKDUPy1dk47TLewKzWIPBe3liyAg5R4lKPxAxmTjhalYe74topBorsl9McrjzSBlGnjM3BlmAygYUsog7SaU17XjJnQ%2Fg0LFJy3CoynxeS2j0MfpImJxHpPi5LxtU96C4YaMRwK%2FAn6YYGG9HTr%2Bx6auQWtPfmtQEQZfZDYIiHdWU5hZcQLFEgqdXQw%2FIJ3pu%2F9NTBcjDknuLJBjqkAbrKPpHtBl8Rh0TmvxbTGp19EpUFfRPXRCkbfUCLioKgYRPS9ilwHEkbsAVx8yrpBCnFdNqbQgmZn%2B5EEG2EpCnb4jBgipTM4CGBAkHGmIsQ5wVeP156CwaTCWhiMvbhmccJtUEcQ3is%2B%2BWEgSK0IitVnOHLNebsJ9ZHzu85%2BjRD4O4cwYCFtTQQCDMV%2BrtesggiGRCb%2FLiAgaCBntdezHER3pp5&X-Amz-Signature=a3020f6df107867bfc80afe12f594b6b27ffccaf93e2189806e2a08dc983d076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

