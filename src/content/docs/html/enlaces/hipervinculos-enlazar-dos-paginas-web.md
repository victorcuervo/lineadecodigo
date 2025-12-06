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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662E7QCH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR1ulPHQxm47NmaEqu6Wzp6V6ZfBzBTBGuAS3JmkhtCAiAFBwt9OFKl7JNx9Q6Ws9EzseH6nlqxx57oRHU8wpGmDir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMd8re0ndLxLK1sslhKtwDsx5e1KVP5%2B1xSpnAoyidXP%2FPBYl3otRMTmKEzpDvD88ETAXLPcWehIxgAwAsW7ZTeL8xzbijDBWic8xj5haaW68IrbMXmaBDuIC0wuhVizqE89QnsQaayhKazeR9XdTKjJL4waIjuTAmnJAyVYq7LVw5V%2B86xkAXq%2FVOHbIoofwviShv53OBfVNyzRI7%2FbTccyKReiCs2im052u%2FDH81G1WMOlXg1hTSrk0XP4uKx58vaUgAgof72Gmx8OgAiNelf3E%2FopOCUUPbrErxo0%2FIORhHK9IKJtQZmxdsXiDxHhO6lM4OLtcoEXlUMIKFn9SxzE%2BrSOdjWh%2B0p6phB8OpmtOa3fnNYn4B1lN8niJc4%2Fnrd5WH%2BAQneilwrDXrqTtc01jsGNfMc8dow%2FETz1ud5fWsM7XG45wLd8P6%2F%2F%2BEP8R%2FKetZ3J6aa3NfBiFHbAVaxxgimnlw2OVHGgFeuPk7%2FifpYmSf6S12SyKgr%2BxiuvXzTZhthOI5ys42x9JGkB55r8UOMLnqwTESq4poVf0n7ft6CdxNNQQzyebGb5TEFWaMcNsZAYpC3KFin2Dy27zteLo9O3OXT7fh3W4xNx6H0L62HFVTH45mvyf%2BbSGWXwYa8HYEdcYL7fYhlIIw1f3OyQY6pgF3PPvFxEtf5yrveJjiNC17E14WBCvJBRri7SfqJ4oFxDRQCcMM%2Bh55cigsMwEXllfjFCsvN7j5jv8gszQ0fWcG3te88vrD7DbndPXIEhPsdh1082rnFGB4ZAER7k7ACI43BM4cIk%2F2s9%2FDP9sjyymboA7sCJa6aidr6vu0aS1ECWl22RCkSw888JLpLJWE16Foo7mxTRV6gELwW8AmUJcUGJSZpAYw&X-Amz-Signature=48f59a883cef027c4c0f8588c3e3d76da9cfe1211a1495995ead87a2a3fc1fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

