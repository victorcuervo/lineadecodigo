---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDNSI4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID9g7wpYX2LlDWjUUSIsv%2Bzey8QVsmYGXKzSfLekuwFjAiA7zY0VCxFQnspsAFcf4j3TzynLlBiN4YMerRsY%2BG%2BGtCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZgqWNO66oYwQm6NIKtwDXgdt2DdSjeSShsxP7JPMFrWdAHwws0ZwcAHlTxy6W6PQtAaA90a0SZ%2FzVhx%2FbZJQN1u9JcJkI1hkT9sfQiFeqEhwSceA%2BI6DxNw2SzVv1mdrvrpBmN%2FCeBAwNKaudfzs973pqlVbBkXnKuV53uTCc4uDqVEoh9H6TQyNcGqBzuSGHNfXqSf6%2FJo%2FUruSZcGjofZWCA9MIMAruDhHHqnK%2Ff%2Bq1qev6r2y34uzoEsGPD9Y08hBsuNXjgpxM8U6nRSE9yEFXBZb3dCVbb%2F0nZeQgJvP%2F2gK8qF4sZQ102wOV7nY2nmZ0HiWQgD%2FjWgcc7eV%2BkKo5pHRU9%2Bj1dma%2FbPjPmWRB2rjFJsVh639DY19R3U0paYAVNU5UO4MFSKf0t3K711dy0k5jzs0btvXw%2F39a0L1sPGu8W0YS2nJ%2BzHfBBwplWUZqKdJISxrY1HLggULym34y79KQ%2BuyYVugjXEhuAHCOM3t8GdDfN%2BC%2F56mB%2BdliNAasItPpc6AnFpoTmC%2Fs69Ki4kznqBU%2B%2By9YnErRVOEc1eRp0enCc8z4M5HUU6jfq8YAnntAdF7TJ48JYaQw98D4Ykeiw7blY5CD8hAshRTWAqefkKkJriV9kBQclUeKOjuBVWTPmPUMoYwtujEyQY6pgFm%2FnSt8EosF067B0%2Fu1F5ONE8sekooFivILYbBfYfSYTxN8xXRAvgiSwD6UqHqBkX7e%2F9NtUy5KQW2i2vEybJ1VMA2zrKrC01MFADD0pktvTs2XzdmOCdxsBl0%2Fyl%2Bbz9p2D6%2BsbWBO4W6HF5JEnfhBsuvM%2Bdb9yF7DepYf249ada%2Bf8yof63IPjWFSXvlX%2FLBQdOXUi8rInhPujHL7ibBrtvUNCMi&X-Amz-Signature=36672a8ba42edc81fb6428fba6e32c75160eccf722e96b5520911cc386ca9c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

