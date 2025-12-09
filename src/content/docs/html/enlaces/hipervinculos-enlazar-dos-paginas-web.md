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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFTH5R6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNz1S7%2F5k31hnUvyFkrCOcd3PQhCgRG4%2BBm5f0TEu%2FhwIgO0cURgE6SprIzNxg6JGaFNqVL3Zj34DZGzEIUg%2B%2BHJAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbKb8pL01pgrj2%2F0CrcA5NNZYGiC9SYDn7gCon%2FabbuyKVwus1G6hAmsom0vQhK9Lxsm7%2BEgQrRJdXt0KuQRELGKVzlaaVw7x8FFJF%2F8e9FuxxfWi9i%2FfRm4YxxmSzUW2A%2BwBdN6XThaPLx9tT3sj%2FVi9LcpqjBMsutWUY7uIKDNpsrnLK8RV2RxxKaCTKhNvNlKyQBeT6OoS8KMvncjFQwS5lQeSLgR0adrgKqtW5d5J6S%2FWDmjoFVWB2KrMnSwGFlI0PeMrAfEkLkJdpGdHMuwULF6C5MJOxy0PAlQD5%2Fpy85lRZD3jPc8bAtgf%2F0emzMqRVdoJeBVZXk4YtTH8kmdKFiaNUpvIfZxgy%2Byf8nj9X%2FawZHP7TX%2ByOlUQuzyItFcWts2gM9u6608rMD5DIfjXJ8yx7hnqw2DSFTATcwG5XKx0JDw6t5K5tWZzQKzweEwv7XwB7vI2r95bLGy1NCtdmEFjeu2wFJhA774HsJj6H21iRyDopAH%2BxTaUMQ%2FTbtP59DsKb8iPPEZQqtG2NxoEVe6xM0eW8fazWdQzTDWWvqD75DNV1WraZn0OXH8XCl8zzFLYpYHERHBb4awUFADop%2F8oL%2FsN39HU1Beyv2DR7s8D8Qd2tg7O%2BLzg%2FDA3hRq1fFdK4va4yKMIaY4ckGOqUBPE9ZdO8svdbhU549cyHGEnRaivqhOr601Q9qcKKcC6%2FrZannGk8Ilqb01NPNkLUxQBbESA6Ck9xUmEqM1pFsK8tNoZyRxRoouJJQTRBcHLyJ65iCTqPG4q3MgyAJLsrxkp1r7KR5bv4q70umtNd16FDe4WvpumXo%2BxOnqBflekELS%2F%2FnwlAGDdg2OCv8y73l6xWBOkSRHPc9CiN0C82NTAtCW7hT&X-Amz-Signature=14ac6c2a03469e13803866f4a426e8702359c639a228da12a6515d25fde745c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

