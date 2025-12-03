---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2K54ZGX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDQyfHFaMapl6dRkPT%2F6w19rlyepB859G9pkpoKdMxIhwIgU6RKd09E2WTanEfL9nIoVo2deUE7w2RsT5yOR0POEKUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEeI%2Bofw69moUHi%2FNyrcA0hqAOJrS8TvhdInybA4%2BU5DzieEmYSTJ7e00%2B1qKcVZNbdHF5YbAljYtTBYDr2JwcoEXVt5Btmd6incqS85Rj7g74zK%2FA2oxBGSNqOTFKHTVv73%2BTbUx%2B2Q%2B4BxQ59zsHKiDZ%2FUfiu%2BlSeuk%2FybQaf25Ur7ouj1rJuHWgi6wXjn%2FgKOsq7cXPvlcrOlwSClpO9HHGoi0V0RnlExzViXTwxdybDifEKHuMmjII0uQ0Wq3ZpsFHQUYoE%2BYgHXNfu3naDXNf4RlSFk2Qgi74ZqmTAaFEHk5C9PvfWwByWKTU5Jje8uBF550s9KsEMTUetPt2eKP4bavBBYNtwB%2Frgo%2FW%2F5lxHlK0oRh1rC%2Bz3M2nZFII4D5sJzuolKEatpAeYQSTo%2Bdqwpj7jE5u4UFy%2FHOn305rpVpEqBwOoE9cLBOGHd32qS0Y9EVnByYWI6FhBs7DLwpm1C5CZjwqIXcYmS5mCHzZaoq15Z%2FnkjaKsQZLu%2FrkUhxubfU6Rjmzsp7z1wyvfoco6md3pF9UQpauyILDfYXhjPmTvtCqXVJKZxaQOdUshlXkQFp7wNik8dnwhxb3FKGGr34oQFgASSl6FMyB2VV5hg3jkmojKu43b0eWya58t%2FKGoqlfWHlbf%2FMJDdwskGOqUBJspk78aPNMRMpVHRY3ypc4OtdMq%2BY1LS2c84v3tE9tPYKf9crlq%2Bfna9xpK2bpzZfMZdAgszFEPPp84cJliP%2B%2FLWWgWUT%2FXvqvMV7SRUVtt%2BOYD4eBNPKO4HE8BW3gHiHLnGz1lewMApa1L9vuhFbF0jRuIP2874axkXG3Pci%2F3PjBxYpdqLqGgUmi3QXlLdmpOjHVF3LgxTJikpC47R2nlsZV3g&X-Amz-Signature=0921608087f2f385951eff4f24d9bf8797571e5b6e1b279dc17cc1bfe8b742f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

