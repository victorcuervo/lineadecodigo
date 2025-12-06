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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCAAGWQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmUU5P3yqsLAg%2BIRCTgZEGjp4lWdWqB1%2B0mpcZMwa%2FwIgAnxvKFWbkjLK1kIsV3at7WAGoV6MIE8rK0IPSEk9ziwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIJjW2d1QC6JDGjHqircA0u6xujoFcHaiuV2ndXuobQKQbDUBSBpKkvX6qCUGXvKs%2Fl5OKHK%2Fa7%2B2or4S6c7HCR0PkSw%2Fpsl4sMqLB1069bYNHplsTHSBrnB06QEV3w%2FEDTuRDUYo3S1AKFT7qvOPs0nG8HojbpKnhJP8Wv5MMsPizfqtxMBgXmKqsLVbaLWMHPyN4Uo93BWXMy0%2FZExyoBxLMkR49kbVLyemMGRg4h%2BaTLWjt9VDn2riflFXBTToNtEgb2Efq0nv7JyZKhD7pLDus8T7yQEou8DXQOsKhV43n8pwYSP%2BxUuyhsFIFL%2BG3azZ%2BURhQMudtzgcPh36ZwZkfRlCUPIn3UT4XXUN2Q9f6vjTaEfV%2Btwerok495iryWMJb4BDA1ZuZGxlx01qD7YuicOZvzQGOExIQdmIk20tfCNyWEZC9COLhE7MbrJBdWaGBChHkqsv23Dqk8QjiouUJDKE8Hh%2BoDGMKKraO3jGIllCaAioW%2F1GE58PIfW2CZ8SdnDTU9sjgltGfuGTRBOcaSRvShQ1%2F7YoDVJrcYAPCBb1I5wWOw2EvAKqlCml08n8uImewcqSF8xBH2Rvgnaol%2F2tX7Y4ded%2F4BPvX5Epjya3n06%2BZFqd%2B%2BMvuiXJGYe4dUafwITTkgfMMfrz8kGOqUBKGXEJ2IhmU19Ff7EMxBU3tqNLvCvb9UQeVmJRIVJn%2Bt9pwQc3irFe0Bi1stZNJbihj%2BNhFXYJXZrj5VFrFyxqDKj6dm9hZi677tj1DnIj%2BRT%2BJ%2BHGHx%2FEYgM1OmTh4%2BgOeKntmvGkC%2Fm8VwN8XqQwr%2Ft058NpF8zwyW6F3Uy9ZO0pIXgBkumNftKS1TE7t5JNti74ymzFHbF3x826Ntz1akkquOu&X-Amz-Signature=1b05f67243df0a67f68f3f5cccf1b3f67cd77263381abab7cc6eae6dadb99565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

