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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMZUP5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQwEdS4HwanFFpOCJobDA%2FpQf%2FJiA6FBYaEhRiOiEdQIhAJMeEbJTrDl1bJ%2BMqRd8vxFU8bSk%2F4ozoRXMdSZj8b1KKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVRvSgy%2BJYO08W%2Fh4q3ANtym2hrzy6CyOo1PQTwu9gf3T42W7lcF9IOnOUTdds7NiXCTqWIeLDdKN%2BeSjQxhn61FVZ8liNkRm%2FkX8tpibsDeuQ5RsFZx8IJR8mcr%2FcZ2f6OkJ5mTTBMzBkWPkOrlhwm0f5nEiqy3YYmwlBRDz0zT4UdqlCOJFh8LAQUZXRA663BJHhTns3WQPQg%2FbT7WgyMhVCRwaAWWd7OL%2BuKuIW7TMKuyCQEciJNO9eMePTnjkD%2BZdLKHSDHG17EWtrdSznydqhcU87GsBCmj0MKvNEHhJ2gok%2B5VKhTBZImKHN6LkVG4eu74OR7Mh1xYWK4fV%2FOMVeUZe%2FCf2emwjz7kwrthtoGQwGED9Xk8JQYRIg598w2e4NMxYTcdF66Ftk%2BmuPcC3Kx1XVcmeKWNFo2vglbIVMBgjBlyxT3vSyXjD9%2BPNwZe%2BKD2ewNFvJoen7YJl6Vc7dGHgdrRD%2FKl8G8b%2BwxwoAsqfiB%2BFsxZFQ6MLJ2lF6Yt7URRRwlWV%2Bmqu01Sq5eXtM6R0eIp9fzVrc%2FGqBQMNBNxCETmUCsyJ6Rpch%2BU47ntDKUz8SoKMhWEH4rnhEW4N%2FQ64b6SHTxOlp3YR0mbAoY1HDmDrdB3Ggi1vBJSXM16m0FOoLbsViSzCLh9%2FJBjqkAZyjNOFb0ukUvnPsmxOHVabL7QMIJIvrSDxQDsUOv7oC8z27PjoJ%2F3sYFPThtbP4hXKj%2FmrSZ18TMNtd0WQZQX7pRKIWO7eP4SkJ5tQz0ZsnLQT%2FCvPNzRjhFcWdiaxjSuxkKTaHLfOlP%2FGUyZP0cedpGqevZAPR%2FALYUkDWQd2CzZp92w3PAPPvJ4ieSRUu13yNalBlc3yk7QFSxww87Vg31P2H&X-Amz-Signature=d9a1dcc865b45bbfef87161a0261b52c547b39dce6cbbc45f088fc9c3f3634bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

