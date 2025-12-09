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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXERRL3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYF603w7nWCoSDIidgveYgwxCoxRLwV45c5nFry%2BKZAiAD9EfsUYsYfTb7XGto4SKuafs%2F1j7Ug9FrFwrjgtjCqCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2BWXBA0Mko%2FAOvcZKtwDsIU4btM5WJpywiVUi2%2FyzEgeYfvsmmuK1%2FU%2B%2BqHW96tgdHat3YeZhvtRjkf855NBwBhm46FuNnssVv5UWsNaF3nP%2F9fg4JCi%2Bc7VqcnL41bGYVjFolcgSxkTaOAuj1xEju1TJEVFghaKBQ5KjAkPU%2Fh%2F4pRQsP2ngllZSXxy5qyrCM1OUMpYVxqA6eauqgI%2B44WyLCFA%2FKhUbaQLMwY5jHV5qgTGrQIP3ucPC8u0m5H4KQJD1fEkehwHDwgwa3SMXJW17hVWVGvMVn5giW%2FHla77Wa4ZjpztxT3kwynMECasHDSGEvBVxH%2Bf4AGKU9FQf%2FaEsFvlEj33Y2OlLws5L%2F17o1TK3NaBcKylSoTCco7FsKEHo8MsvWPyvGbmUmNWQ3Hk2Yj%2BSqlc%2BEajmdZEbm7PVyOhWTqKSZty45BGLqy6O3%2Fiwk8jnXJ8djKFg0CWUjZ53CGMAAqXRiTjetYThkvYOXTCCIy76ArDvt8Elqg0E%2BvZif645%2FM8D4ml74jGgT9iLvgaQuOpWeA3lKEAhSU%2B5m5XJgmLPdDM4UncJMFNzdllF3pqLpL1iQcSyeP1mPGVt%2F5VdmIf%2F%2BZB4RTK6QcIi6foBlE4NRBaxeW2c4%2B33P%2F76%2BB%2B5h%2Bbi5Mw%2FpfhyQY6pgGiJChfVJ81wa5ZP9u4nSUgx5b7df1KXjqYziEvPEe51wmo%2FUxiMfrsFAAR7zfgNWDrAE6LlUce5huBcfeFtlGLafS0N1WajzS%2Bcv3A2LsmaadNVDyuy39BQmdc%2FLU2yy19mhoBoY7go3RuRmOUSqXw5YRm71NP0hRmdaPYCpCcjGwTI8wXOlWi6%2FOm5eiKaFG21RVu0UNwwaSZIZ%2BgWD0E4pTH5z56&X-Amz-Signature=d41af1915653a5c3fec69690bc9e15507f2770fb795bc36f3bbecc3d1d4d6824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

