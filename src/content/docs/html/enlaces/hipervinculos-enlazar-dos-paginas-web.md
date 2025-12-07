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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJSXKMP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FOXjvMu7P%2BfT5j779B1fCEI7%2F0Md461ZfcRYS8pQBKgIgcS6U1YN6FydhPjuQ1Hus4pna%2FN1aeWAySGrX5%2BRBqi0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDMawoBg9VONpM1uSrcA451r2zxKWH5S%2F%2B29q64YbsWdUGkK6KAgDAhbM4AiOt0wmHaAi7hXUtjhRWo27tQkPzxQ6mspyqmH0Ygs1%2BhZdQXyzMLcBvg1Y4dDkBu6TSwvxcgufR1%2Bo%2B8b%2BSJY7h%2FLQN%2FF0ppUy1dWPrAlSZmhsXeagCqC6v3tvgKAzFyjbMo6Eihy0DoaDez1eAT0VyWw69yfkPk7pNfwyAiYuPu%2F9iUMV18CYMBUvWl%2B0g%2FsvoY1U4S4JkCxg%2FNgOL4FV133CKocsM1FT0SA%2FjTuy9p8A6vvQJ9CfyWDQNo9y6vmaeNGnsAP3LuhC8shZq2vBac5QIgPHkQWV1xTAYlAqlUv3qKLyjAMX6yfNJcuBPa7L6958h6zy8QBiKU8dRWU6TGjhCugxUwXVJrDzle3MLueQyDm6%2FfVW69IjEggDGUR%2Bho3rnqqR%2FVjdjWAGbFTduC5Dhr9Q4d5JHZh23TvVhOBr98BHwW0yM4APWcsE5ru6nhTb8GMDN38ywXt%2FVOygk7HnR7SiaVijrNiQ3xOxU47vAMAN%2BAl068R%2FySkj59dIseLAb%2BQUcXvrbVRFhdfG9COXWHzlyuebB4Yi%2B429gDP3z9uXphsMwsbv4vroncLDLzxCZrSd0TOFWWPyFGMI3A1skGOqUBAXsm6%2BaZSxM8OmxXuJTVBJivJDx9spF0l%2BJz3eqBdKU%2F8sNPY0ZxX9lsWffXJx0%2BPojAiWBcgNCrM5PGx%2FmRzarOd7leqekBpYHaKvw3htEVNn7nOGCaKe9zUePZ4KWGX%2FNfE2abtbG2HHlDxDHCsz8TEFrFC9BcitP%2BL6VJ7pYWcPrxQRp2P%2BdtSPMLACjthymKDOTXX5KwA0g%2Fibo4ArXwkG4p&X-Amz-Signature=c51f6537aed06f17192d785d8ecfe8e37b4a7c46bb4c66411816ebcdcbf2fe4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

