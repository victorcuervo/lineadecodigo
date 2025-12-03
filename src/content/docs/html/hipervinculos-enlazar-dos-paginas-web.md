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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ID54MN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIAulLJEdK3%2BJDEnM9%2BdRBJippkO64BA6E5B4epR0YXwiAiAt6JhK6AUwjhxMkIRUNGvgp7hz81jMEyqqt6WTipdpvCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMhGInAcsY%2Bz3TEwxLKtwDmtRkA6oCYexNqSt8f7eSxJ9FZwTbtr9hD%2Fyfo9GlQ6leizTM2yTfpVk%2BA5Ve9iEziudltRpAXK0D4p6Lj2tgVdttGKW8XsI%2ByzXDc%2BfCoG%2BuBi2Ocq1PTZaFXF0cfaQsCsi5mq9QGdMfl52Db5T1LPGBv8JBNbDkL8ZxufVb4h%2Bik%2F27j6e34zIP%2Ffnd%2BEajC8Db6YP8Ogl73%2F5KrIAG14Gniiw%2Btzg570xv1hmwHPfNbV3Y6evfwDRCaMSZPpqd5seYJmv%2F50CL2pE7Sy0WUDGvAtDe94PdHkqViKHSKuCpjsBHP1E5kHIiizmwzffXYtd51F56wvc74d6CKlcuK0lNkf7b6CC3qynshX8SUQQPcVs8U60ArizcurhyCMaaovf8%2B8b4Xf9PeWRpa1WRclbye8KDHd2hzlLX1PLcxjl9JnM1xPV4YlxsvNGx2wTW6m%2Bd9fxfw1jPnVw4tg7RgtBo0sg1yIsK3DTFH0PDzR%2FxlyLIBItTa%2FdXa42Cz84qtr8PdRbQ5eFqqhaEIdMTSCFOOVWKesj4NAKbXwUdqt66JIgfao61%2FChM9A9FmBZnWBnk8uFmUCL7W3DJAk2lFx1lVw17OuZFBO4RQz5%2F0NUYtFmOKLmVIaJ0UBQwzPfCyQY6pgEN7UB%2BzBpP%2FqOr9CgystRlYu78gpnmi4LHfSCshBVlKk%2FVuJy4cHz8lyj7bNvq5m2D9abXNGtIwpN6GWxQ34XFJGIK3trf8f7IBN0RFh%2FvZrLO8unrIuG0BrbLAF2k15jWLc8SECJY4k6DjSSVVWEZVu90NgHt8VsEVwGv8COMJLECw%2BeGdquVttEo%2BK2TW%2B04dV7oBnpgFM94DXbdB%2FWS0ne9CiuQ&X-Amz-Signature=1d0b9696d7554e9b198ce8a043995daa2f2fb173fad925c0f7cc8098c25a8e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

