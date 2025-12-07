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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7OEZ37%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1wM66QJjIW4J2nLdbh%2BqZtHYmFIMk0u4zGl3ftLMKxQIgAiQiA6LUjD7PzFzZ4DtzsR08X8qYZjhDyP7puDoOf1AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEMI3aBydDX3Dv%2BZircA%2FIDWglAaZM1ehOhMWFh0jmd5Cvs%2BvbN5K4qybw4UjYsqniMDUY9dBYenzuMILKRpUBHbmSkH04xK%2FNb%2FSVADcD5EpmU5%2BJ%2BFKc5aIameHB2y2eyMv%2F4XjiZbVL7LXIc4KlLlnK4aHPwrV9%2BJUCyEE0ESh%2F2C9NvLSvkFpgk9I0oa9a1W3hiAX7q%2BLyn4EpmK16TPZct%2FKdJ2srQR9bx3pNh9CzW59CH4dUfgcuVGIIKaKXkjpZybDIIi6nz0zIW3V0JvLmxDBhWhlq2QF%2B9HzEDjtlg9ZnDmQEoyAq9S9KFv6hQ3wxaSWUfOhYg49O67ZRw8FCu%2FiOH%2FqW3NMP%2BeyG952NthmnX1nYPzC3JkTtQNAqkqZFwQy3ea33SXz50v3zpux893YtiPgf0L0WvaYicOrE8Psadp4h4vFpXQlB%2B7nphlMJ1VRNdqzyAN%2F1lmlj22LQijwudPypUMivcCBZhU8VrIuIondTMsrWx5HmVNtJXfSOG%2BEv4RoX2UkPieBOsZnS5NhSOFMu%2BUQkd2WLpEDp%2BAZlSGd2AAHpdZKk7zrX3%2BQV2gzdaO9dn6XCfDL5aTpLOKU3jTj25Pr2Otj27qD0FnV5mwyJbS%2BwxtLMTydYZIt1qvrR6mbr5MNHH18kGOqUBsZNlEij7eVmVnF1gnLMh4DTQw1EyulHV4lXJ54srzAkpyfj5AAnwZzo3PpkBmEf1DyOqBB5PdLCZDB0TDn2sgtUGDbzneDhC8g78BdVfEe%2F93taFUAVpsbfQUUV3R8ZooP3ikDOD3cU4EP110dcUOdoXjfciDsMafozs33I4igUjTID542%2FLumwF5UPYtVzqY9hhtpbj2QYjXWiLe%2FAx7G0UFxHt&X-Amz-Signature=173904b7bf10e49134badd29ef0d4ec3af812e14b937b4055d8fa2c9b9ee6d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

