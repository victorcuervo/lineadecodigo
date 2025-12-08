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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFXEER4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFco6gxfqd%2FaIXpDCP5fF%2BjubHk6SRTL8NJzxAcDH9QIhAN0N3uhOR1ApLxSyQ3nc%2BWWtX8FhvZ1e%2Bp9s3zdDmgvdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgdbKgAPs17hONgLwq3ANlv4LYMb4de0jmiHJPglpZNlympWQLnYE4K%2BKPBG5zCWYaTZiXIMdQvAcd9XYR%2B66H9H3jaWvBthXPS4ALXVveIXNJpUCFxPT0pj%2BLL80Qo22%2FKzBexMr0jT81%2B1Ctf%2FriR6hcHWXm2cvmttcyevuwK8F4N1%2BPe5LF%2F373xyM8Z%2FNZCeIRpl4vX%2FtwV1VuUcfhwEPKAtb7TzvmjnhPvDLrSOGBIkRLLfGZkoZA%2FNQzM60q3nJ%2FVmL3JWXXn42dLvE%2BpUcun5zA%2FdI0oxw5XpmlPxQpceC63lhYrfB2RCADBCej1d60bp9EABr5Qa5nHvBp7rhLJwgLLdy3v6zvGq%2FCui9jUQZmMv0QsWfLPzTC2BzF9XKzK7bycDEd%2FnYKTyXpO%2FSSU6njKj5XICBQ%2FdeWtJNcyK43Wn3amQBQkty6AyDwEHcsuH0X0Ew1wbAcEMTeC9zFyJXz%2BmeHGGgOxG4ATL63y2Z2IqUIVL1WR4yituQQBHz0RJmkrw%2BUSvPgASkSK7iwVV93Vk3Gz8TySNcQ0lS7N%2FDOW2IWx1kE9Lcv1ZVmefnjLTKDKFHKWwYtQjczI2%2FtdFvCCIqo3uM2RZkG7V%2FmTHzHoGtqnpmP9bgZQflNcAHShTRYQTCZ8jCq7tnJBjqkAXVxaL7b5xHvD8VdW6yVMV%2BlzSKKa6pAgj10oqRtEdGiYPyB9zxyTrBQKJ88FrGOlPtI2ooFFxIKL3msHsdEF9FE5o4LgcxApYMDmR38iTScpVGOovXyhaw7opeIT8wYkadNFa4bRMjGbcyunl%2BOlrbRx9Up4Uwf7eMbcCWNMnTycg%2BvHAX%2FbX3YVVrWeu6OZ0sMgr09xVBbfX%2BpN6JY5SHAjVt3&X-Amz-Signature=bc8f18823e8e4ec423d0f0c76c8774a207e9e092e7a51d10a48de03e583eb56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

