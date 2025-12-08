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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIU25DO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUhF9VHIiuo7aoymc%2BiaZhigEbTqLaeP%2BlluIiCE%2FS%2FQIhAMHxmC9eQEIpUurKe5cg7fjENSBALJlCly2Yeefmw%2FXEKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BWO%2FAp75OH6W2I%2F8q3AMPP%2BcRqlVA5ZEJjzf0xaGc4ERniW7i7il22MhMqsGpzD5Oe2hH2M8gkEsSqSG069w5Vr1Yd8nZshHFJHepo3x3IAZK3Sg2Lznc7b6pj5ljThuMDa%2FUqYChcwpML8tD3UjuHZ0v3eZ2BelvNQFMe2cXmyHq%2FWpwQCuipcRIEUKjU042ebjyP%2F%2FGW0j%2FAf1rWgAlplYiHwNzaQzL2UXjzvysG%2B8siViui%2BwbSsuhcuF%2FxtXlthXr0xuPQ9lkey1hiRH%2F%2FSEDh%2FFpjTK9SbRr3Jlx8eCEsd5RA6eScxH1zVdJ4KyVmlOpSAdHj%2F87TxGHPVBuY04npdoapocqoNkAJIB%2BURUtqTh%2BUH%2BU56iAO9UtsXJzFGlVfGYWgUS1dWRJUPDh1inasvMyrWAbkF710a6DYychA251vlypL2a8iOOtaUzPkAPE6U1GGAvTnNPS%2FH1phCivLPcvlEr6T9FcRgPehBu1Lrx8HaKBoeoUCOywcl00gI8bzABKy5UMMbiYlwn32RWYtUdP7%2B7MGZMuD6Xpm2uuy6hfRXAKwLWZVX2yumPR1cNQ5bpdSfqZtm5wmsclwnIYLrUGL818lV%2FxWiAo%2BROpJzQhpZJjLOX5gUdqh595slNxJPibGewx4TDq0NjJBjqkAfa1kgDYxlYPftFST8sFGlwC%2Bokq6icxavuKjEYYtq9j8d4ihpF42r9PAAJ8hvL8WGd28yNqWtqqfXo6go1mNt7%2FOXXUzmcaRNVLRXVFCgk3MsAutqwnHaOvaVj3ROd2Cnxg0QiTPEKpGAzRfrGitAirGd0BnuEaCrghYz%2Bu18f0F42ukja3PsYDdyP6gCCwIs8HC406vHVEl8rAYEHBcdcwcJIW&X-Amz-Signature=179d4d2040c9e62bf38273cc1f1d94253153b07e7a791656773caa051271a586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

