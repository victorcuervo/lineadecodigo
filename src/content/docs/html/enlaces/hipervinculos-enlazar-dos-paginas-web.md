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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LUAFGT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW9olTIcpMvXGNA%2BKqDZvjltU8aaOI%2FaTxCtv3B5Tq3wIgcAUd7BBeUaHMlN7VPhV%2BLrBh2qgmrsjGkaGaYv7fZy4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBu6w5vepnQTAmZ5JCrcAwC2vazvsOS4b9PMKZPr1pF1UQ4JbDAEO7k%2B560QGNq0eSNbulSixWSRNXWDA0uA3V2WSD3t17Mep8FlkAXHKV97EdwwvUynagMtXZm9JO9WLQfBsYMCT6CD%2BxHzB83bBWhQi4oFMQOnBQn5kUDMN7a1mIEr1liqM3JZ2jB422yG%2BDXEBQWyth1rIX9UIFMSks0oO5P1rK2k58t6TvVbq7NRGGVeIGsl4cb3aPTLZ%2Bv0IIg3q9MAD%2FWLrHVoYlLW%2Buf2yBz79keqtkxwsKVJxze5hpwTetTlRUrBj%2FpMtwKWmWh6C8R0EsULZx0DndgnxeATSW4WRwL7HffnXDrsbWSSAZJMqZ6%2BN9NQSu7z6bsv7ihqCeuWfwF%2BQmhdc1UtmVBgSp3Qk29wxM8mjLw82zS5AhIwuaviBuuBQkJKP%2BCrf7ibn87sz3d3eLVr1m4UFc2YqIrErzgb3EWc6NCXB%2BO49zwfy4tNi4vXDu4oa%2B131TW4unGY9ydnTdoRUvlEFcQnhuaFVNjvLY2jfF27T5Ue5xThgJb%2FnKnO2P28pH8awp%2B9NAo77r1ff7IDmVyMQWolQbASjHjAl0cOOQ1ulX55PeY5MqEtDEpohxDwcovujVISSjtXybgrO98lMOPNyskGOqUB6cflZiqpcocQj71D1VxApKy2GsQjGGnVA85MjkOsEhdXeFUU89PPW3jq9HTU%2Fw9D7u6BM6HcqugU7iMN09rXMUNUzSco%2FLYyvX%2BKOosRb6IuPKylCPVKGwxM3IOO%2FC4mILSg85sitfXyQjSpg6qVQgXqPfQbXltgUB5q%2F%2B3spRcrVzLOPjbQ2cqfeKXKzDMBPl2BQq8DdYUvUBUYXGPhv1ChIxpr&X-Amz-Signature=c13b4fde9151f6c07827faa2e4cb562756d80547720e3aa44b7c65742830bfe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

