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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBPQYBL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKctWsRBHsaxrjsAzBS4u7vcsaSlvlsusCYC8RIV1pWgIgfLaaiKNpAtR%2Fdaczk1TPmxXiupbyRlyvQtjM%2FTFNa7kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOP84Ldl5AB4QSWIAyrcAxZa%2BWfPQbn6BeDWMkTw1B3SEfuZ%2Fnb6sIyGvyU84uRnyaDo9hOqF4IaOYpPvbGmuXVI7fl0mmtCDSHt0ULMVntpPasTpoYaK%2FRTxgchF%2FKR6SBVa%2FV4uv405X4sZ3z06r1H9Btfn5F944EHO1hukvTJa8z5QINA1kjKsfLHK1RfBNtrXOutni6LtQ%2FDkhId0vNecQWYJLqv2TxVLgkw8jgR1fXWMyNgfdUcy4%2BOLQAU%2FqMz2oax9gZfOmwWOmH%2B87P82ocv7krplGEtKasW4eyLY7%2BQLLb6zTCxeGaU9TPfupUXiyMkB4VazV6MftBvq%2BGA%2FSUj%2BhsizF3sIEFbC3OvSbFbJxSCADhGhq96wB%2FuDA2BSUGYa4mbAG3gc9GvtSYk32E%2BhWWktzeAMDrpgtTV7QUvbIkxvZAHF4QUEuL%2FkuMD%2FaGRgJDQbZ6aKzyIcQ2SCGvcjpWM4LUM63EKLK%2FK8QH2jLuOcK0%2BCAMER4YsjYC8SI%2BCb2IejgxkdvCQLWfmUEP77x2NnGMgvV2GksWp8sBjJI0xeyi4Q3xwl8dBS0gt5dpgiIG8k8KDDSUTGW%2BEm3XkoVL8uDe5lCPvea7CNUjlsWMQoaMQXZ7wzg20sJVnqxHwVRu9l1wGMJHVw8kGOqUBPRBVJdrxctjxMgmXcA7OWjlBK5z9O%2B6CCFnY1IYRFU2zmvG%2FsQMGV0cUMGjLIVWkLshIbUDdHz%2BARfP4C1bY%2BUG8zZj1p%2FkAAmQnptksjh%2Btx%2BqekHAop2iaicx5qgpN3woech3rwb81BGvMWUz1eHU7LUtpEn3rOmGmLnRXxlgrb5kfWeuxKQ7FEYKihLM0hB%2BRV3JTzRltRYkjGfpcPv1eJ1%2FK&X-Amz-Signature=694d0650f7b421ea5938a5830330d19d54afbaf18917cf952a942d2687e7a53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

