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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQU6JAG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICudSMrVbSAMzIO26vz8k37l0YW7hz0umQ05aK7w%2Fo4eAiBdKdlkdgsCsS2uWIBRvK6NcLLk64EOqocmqfTxSXVsAiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8AsykHPKJHjEoPqKKtwDhYvlHVelvSHZ%2BoPO%2Fuq26W2HAmuim3%2F9Bj2OMiHVqMRep5iBhh5xn8%2FCQ7xaRjLadnfFUtrPffoA528Ued4epfSQuIf%2F5%2F%2FWMgMhgxcRfnnmbWWk9B2aUY1TFck6PlUUGFLNG2GTuXZu%2BbUW2ohTK5plQJPV%2FuosZ1NY0xTGv0fCTpmw5eV9AeX%2FR1igzwPQV4k%2FzqFzKryxq4W9z38CS80m9JKM2NNGXI%2FdXoMfYDsYW1iRrs906ZtymshWEX1tGpSwxK%2BqqNuX17zIaeJojq4ZhBILPDki5LLGwYrS%2BIUE1NPwnW%2FHY4oDD3rSlfc0JqrNDezyklc4idVe9bz2zuGHWOPYKuTa%2BSRb3W%2FIZ506TW0q8oqwnjZjSHX3noSXMgEYPmR2tyXgbENCKB%2BHngZX4xebw91Fcq%2FyUxBN%2B5ohPyHaedsYS34HHs9DI6XzoZ4M8xorgcqe9iWYv%2FT8qs88hOHs6gyJQOLk%2BwVa14XWS2d6c7PP83jsu2%2F3sX2YRW%2BEI0SoQk1aQeKtv8GSYN8hBd%2BX%2BNPToBvhMwRq2Uo8ZcsMWk%2BL6g3535OsptlNRVdShJh3SefdptdqMoo9i69PSB1A8DJEAWik64Jr8ZtJ25TYKJsFjDbd0OMw7N3gyQY6pgHPyEpofVBEypD9uYRUTAeU1tEWZTFVWG1nTEPFm5cR738b%2BJ9VRUnIH2Sa83mGTwtWF7ExrkKmUzw1ogd2vXrhTNA1jnXFJaxT6tA8rOeTjxUhbxDpV1ikWmLOs6twGh9TM1UjdrWIUQkSo4v%2BjcLLEf65jPW%2Bqf8vqK9KudRRSp0puTeaHGZu1HvTBrZkSC5zO49C20xXDNkUQH%2Bkrd7MM1tGxhZ2&X-Amz-Signature=a2f12831d77066ca45998546999eae4d4f9dae63e834a6308e817f9ffc34a27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

