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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3CVZWHB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUlrcuH2M8vIEMpSkWV2XSdXG8I1Z8MlLNBGIQcTHKjAiAE57MMtUywRJela28lSE2tlLlmdCQNn3preMd%2BKkmIKyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMiXgDad2jvtFc7BKBKtwDywQre9ojW1gPf%2BDI4j%2FYmfYYZ3%2B8xSqLOV%2FlJ3L4LdKQThp%2FTe9UBSQhMRKSjsv54%2BqDpJd%2FRu%2FR2sVyumE%2FuPjlaA71iumxBSi2pA5Pzjnq1ko%2B8GLyMnulIdx4jdiowxWb0HL%2FUJbNPlAZdBoW%2By6CnNHuYVoPROEmtbdPnkvePm3JXbi9S0KfNGpp5O5y0crLcY4HvyXgHQaZeRmsuNgA%2BqyuVA3V8WMxRFSXtGq8c7lDhPMZ7NaORAxnjRunIcNMVdNJm5wQIXuUuMMr4cBuRblZDlE34hWqFZoS87ATlFqceHPBz5XsEEe6xoH2q1FabNj1DZalYSXf%2FUjqrVUULcwRaDg1b3%2Bhdjh38mEKPTQFU6czjUu7yRLVj67qmTdnkR4SzCvj9pHUFbc5auybbY7YxZ2OK1aA7v%2BMuAnF9qYwt3hae%2BXe118HCxCULEtKKPuPlHElWZnNLDI%2FMKxN11Ao4LESXePymI12V2jWrp7gjNrGEdK2ZahhUS%2Bpn%2Bi9oVbygZmzSAqw8uZQ2kMWWJOiJTkSXZIVow0tVZKaoLj1smLYj6ljbp5cUrgK2likbL6t%2Fx9R%2B8tWN82yigP%2B%2FUbwOqmHC73ZjJp7aZG6Yzp3Aol58ZspmEwwibzPyQY6pgHlVLD3pUnxzIOypYdAPFg3nDWTsZwLsJGGbN5tfLXAxoICBPBf%2FgMZWNCfmzhwhQYTd%2FjqUw5d8F%2F5ydSjTXaa0Wx6Y50gjdYlmLtvK7N9rQymjUJhttqXejHowaDRyvMRM7%2Bm6lev3qUiCkQ3ZehviTJG5%2FrZ2TVCGNCBHp9XRSFwMw007B98jOK4tti089n9qVe1%2F2FiMUkwZq2MnKSFh78XLhLp&X-Amz-Signature=e986c5fddf818b66550e644d67a9785f0b23d9aa7af36f89f853f53ab8966abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

