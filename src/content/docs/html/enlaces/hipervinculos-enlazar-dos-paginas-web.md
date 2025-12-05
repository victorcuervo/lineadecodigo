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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJAXYNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9EHFkpAl5pcdcSQL9cFI1rg7HP40NOjySZW53GWlYDAiBB7kk0N0bmA5BuIKU6h%2Fqry3yPXXxwTdLsc7fOFtwGByr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMV5JfhoDSi6QvSTp0KtwDDMxKVTLDj4QnFU4wYWqrhiDaopDI7F8w5dq1iRprK9%2B%2ByWiwukw63lnZkGWVX6Zk83gLSndrqfwM0nidb5yPjnlBjfygGV2IPfB%2FB7IZLxt8WrA2zsgxMAmRCc5T%2FDQAOEq%2BWwP2W6BBO20KzoOXx9eT4pX3FkX07zpmi5iOL2%2BTBmlER7LJNv26fN%2Fl8686jVH0ovpsTPVwvHL%2BXxmVEiJffRvwD6i8bOzGTWdPwXlvTGFCenT9PjCFUpf9KNk02nb476L3TSxm%2FjyAV19slgOUKOzej%2BPMH8meNMC9IvKbS6I5%2FdtTrmFRiHqG138psv6TNziMb9bXJKCAAiG0ONoraXe5i6xDLgUiAEka9Q9%2Furg%2Fl3y3sQ16ldPID6EYDguy8FmmdW6MzfI3OyYCP0m7gzN6na5p0WvrpeUbdVMjDAd%2BQu0Tm3IcjqDa%2BoP1Zi9cAw7bQXGPR%2F1lRDDO%2FWnpo4lM%2BwlwIoxMrfONXlXa5LTJuwswalDjiQrkiA%2BC2gEAJOO44qqySKh%2BZc5MpYyPDGeCv4i87VMuKuB4%2Bt0QzgORpipLjXymzNuXZloFTwpgnSEdh%2FU0pRV2b2Fy8GETk22Xwse6nsSBpuLshFN8fz42tsCU%2BRLs330wsbHJyQY6pgGk%2FdjnzmFaJLTBQ5Bc%2BX663cYH%2BqcjdYGaiWquD1CxNqCmGtwdcYYX0zGRy7Qdzwb5zipPdK%2BKORfB23WiaTWEdTby%2BcE8hTNTf1VyrfghKY5df1%2BcCtXXW8gptHUKnYlYy3kgNkvKSTPBUAq5%2BNp6wqB8l0KyW7HkifDqtF9q7iQO9eAwsbk%2FgX%2BSnqrEnzj%2BaLf7wm0ij%2BEJIakG69HVUjmfmF%2BB&X-Amz-Signature=9ed28441f94eded19fde332785a36c29cb7c0a0216dbedc4cb76adcab3fbc236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

