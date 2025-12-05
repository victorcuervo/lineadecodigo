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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKVWKN5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAErDM%2BrmR3bsAwa6z%2FFrCCgzRhpZJUOvf%2BD2q%2FxlgT8AiEAyvJlIS5%2FXcb6dKgUgjgnh98dpa8jKfqcPzIjIcBPXbwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDL62t8jTlFNz%2Blgt4CrcAwwt8PC2neK9iMDZ4jCjhUwHCnTxJitJoBMGIoJ0BuceViY5oxMzIiTAVyHiZXjAzkcqvLNC%2FMLuxvs13WzPHiENNt%2B7Gf%2Bg%2B8qGxnKbNZpNO2bRQ6KTmKqbPmc%2FbtVWTwXM0Ahz6WDixds0zhWO5uI%2Fi%2FK0sAOPs4ErWvKiEbA0Jcv4W%2BOrPhzUxnHEZdE0AyZrWf8vzE9FnxtG%2FoqqTcLwcgGG%2Bdzc%2Fblg%2FcLD8womLs%2FHHE0H2aT36wgha4j6T%2FbnLkCzGThYBZvLlkSsnqKdkhkqRHfkEoBvphTSWnH2RUy5XBJfQsEqmXcI1cihUv83rtYHj4JZ2g1MtTOEsLWM1fBpcM5p%2BK5JNK7uV97kvuJjF8ucxk7r3R%2FnW9Lf%2FEhxnaLt6cFCs%2FjUl5MLqCcJhOvBDNYbXN3iBz0cCx2aSVzbfxLaogIl3hJuB8goBiAoJd%2BW0XOJ5mfyKmUxubIO%2FS2xIjiObk2yFIKzXczJcuQlhWK4WkaXs5dif3D9sv79N%2F2Quo8cF2yj9fboZvP%2BUYPdPBfaM3kR%2FFnpj7cFrcDAQRbrb3iqif3UOtjJfpPnSIE9FwtWT5ROredBH0jZQJMPjj9ZYEugPfsOuOtAUwXg6zDU6Otu6g8zMJ%2Fjy8kGOqUB0PZy6kzc%2FX0quz%2FUennCJVGsGLzcIpJ4DES%2Fyf%2BwRnkx5xBUv%2FZZFNXMI8b8FbxAgXe%2FTXid%2B70O6xOaeZHuxOGlzkLXq2AKBJDXZwdz3qTkw79qACN3KUuFTi13x4h4W1tep1LZ0W2apWeNvO2zMbEd1HzA00feZs4W8%2BuUrusmnHMut6fEFnbqc3S5B5qGACP591UbduSCk4u7ZDeOXPq0Y%2FV2&X-Amz-Signature=cd23d65d2c03c3826ee64c891eec336736ce488bc66bad2d795204109b74f9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

