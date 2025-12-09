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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWRY4UB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuhB%2FDqCmKX7YVTquDRAecYrmZVssGWkxpfoksBWkIqAiEA3Ksnn0cX7I%2BGeFtJYw59dbu3IJcZHJTBNvh5R0aSO2oqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMTt69YFM8zkRrSgSrcA5mF4yq1XJ%2FUyBFnRBQqFyo%2F5Hl0GUC0lnE8Hy534T7An0d0lPcyUoFP3yz%2FhM7PPk2bK2PSBkkb%2BFCf4H4RH2jDdxaK1n1NUR8zQiwfpY3Aq%2FjX2kAlbDfi%2BmyRa%2F5mXTkn%2B2WyLdmyKFSgLbhsiGHWsE%2B8K%2FEKCqybgxxxdUkh6ztvIzdqU92mQMC%2F7em3aidxPCPnrD%2FQljkGu%2BdJ%2BIm26dwZy%2B8aO0hNhw4vQ2fDdAVKhuYaiRM1IP%2FatpyxERaQexXK5uN5OI15BfxGHH8dgmOkFFNRHBFo6hMzxLw%2Bpndn%2BZJuJ5YpSuFSord0YCnQKiKzG4BLqNmI6bx0fuSZV3CGzgcs4jErSdZFjHIpo8b5clXf%2BZm74UZhNlNA1OmzXn%2FOgboraaFol3KnF4PyVquZmDf2hE1Q27MYw%2FBf1ulinPkKsfzoQlwtLqdJf9ezh1jgHmGeHFRfH%2BjnPj7hG0ScCEqZvULgPngDqenz6qbO5TuNZEd9IXYP4WlcElOHQ2As67ifb0yry5P1ERoyY2A%2FUCQ9wFwkvnWnzYyG1yZnJoy92vyZY4iX6V%2FWQYyru4DiyrMYZkGsHEwFCi5FgIm%2BQmkeBFmvkyrYLkVgJbZq0za2KndK0eLtMPH%2B4ckGOqUBu3VOM%2BNJiehR%2BR1GQ9i3OsjD%2F0nQcoZt6jgSyfyWNCrMigHjNL82ex20vKFA5xCa0YLyJ33Tnu6zW0pnOWxOygB8vFgh4sWH%2FmFzZxnBSSxK96gOGOtrta6g4hwvl3Zr90sHH57riHrnbdXNVNvUYB2WDoMuyjlrHarzEF%2FskqVpx1gGOwyFaDSFO8%2BiimOxCQ8INWQOp3rmq7%2BbKDxZ4mglFdAu&X-Amz-Signature=09aca76a8a497e9f550727ddf7996b0d6a0ec083f1513b0235bb12e80fbd5531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

