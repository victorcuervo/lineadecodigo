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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHTSDTA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaJTVGpSfeWEBVpcT7IJp3trrgO9fJiK6bPUTt5mmiwIhAMv1oB3bEXmU8oL7ReheYQiw%2BwFENUeFso5BzamOXiBXKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysZ7DIaFVJChjFUfQq3AMGAkGwTuLzt5XZYaqZj86lI0UOOmzZfNwVBDp3tbm%2FRKbJdt8V%2Fyzd0nfdOQK8GLbU1wCFmbz3hso6DGWmJV%2F9ZVOf24n%2BCNrIp1%2BBeKBO%2BovpNIZHiTIXQvS%2BqTGovWbFIgattaheDkM4Ioog0VO3Ul%2BNpfkvv1TgLnhSJ%2BSt53Lv4WQQricOKDKucANrpUaIPQpmDs0pSNe7e4GYfhj1uYYkJg6Dr2XtfBUHBAZ%2BJfGwZXCF%2FMXNxwgUe7EPffDR6oTj8EJ7Mp9uef6GyKre82DF7l9UbwiFoyytDVq%2FCsTN4rVTqZpzL9%2F%2BvdJa3FKfcGgh%2FTpv7tVmd7E7LC5Hgoa%2FSSYZHaaaz5iRfiEUz6fBczRd44qV3kKdXnddJGBqx3uGiXBJ6czwIHxVdaWEEiIWPxeLdnsrP%2FYux9GRX7nU%2FCVlN4%2BlkDiwIHH7TthoV6Uu4JadhCIYBObZkKodH62QN63uVt8ZqlWTfqUISmefD5q4tm%2F%2F8DdBEmDOI6FeaZJaLMWD4vjVfrB4L0EdQ24YKy5ZGswuwrC7p982cfzUCaXFtjYvS1wake0OQRaBVhpn9XpIsaSlKPGhm60271TqJH%2FRPyLcDShy9SS8B%2FPxzBqKdTiTZ0ZNJTDW%2FuHJBjqkAT9UXDt5AK3yj50BIA42gWQW2fVFj7%2FsAE1d8DCaKw%2BFUrLmWDBZTF1Ouvdik12g%2FL3B5RZdLZPV89Bh%2F8Kb4bdoAElBzw57vq5dnsMCqcrkoAOPHhqg11OjZ1F4DbGTC%2F5otcU2hC5aU8wQ4MzkgAyIg%2F90b7w7Qtq3hXP46dnmaeU7ofxbWEOtZOXqLRvyir9twdBxrjFpBECC0cSue4lVhMqh&X-Amz-Signature=620fc5b970cf42a8d19c165c0d51f6a4d2c7a3a617b23d2f66883e90fa561624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

