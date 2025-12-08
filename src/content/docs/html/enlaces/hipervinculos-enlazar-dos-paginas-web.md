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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOBSYXX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaAJSkqueRQO01p4uRaeyhQERxcKJ7zc7FkeNYirG%2F2AiBFIEDyPTEI3v2xv%2BWi3qTWW2Kx%2Fr3I3qo32npZoEN6syqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd4lSU1Pmj5dy%2BkwFKtwD15rOfPAvE6ML0ETmB9aoE8Tjw%2BGlbrjgUX%2BfDgA0s4To%2FXJpUOBBMF8JzFuDvyhGqw%2BR9aX4GZWO1iSt7IgLuJDQrQ3npErKxApICbr%2BDLFBzH9%2BBm7a7vQl01fPx0XrIA4v55dE5v7yj8OOmLuqT47YAMsF0OLFAmEIouc55dp1HARg1x2%2B5Zf9LPDJIKRt5Cf4lK7Slz%2BrpvnylAn9u3KSGOOoqiLKlncIOoX5nGEn7jMiiRSnfDyLk9neBgq41U1P6noz6ksEh18og6rhmIEMhvhBjAkCwgV6581kErBk7a6GyHsvVWEJ4t1PqI33CSWEWkFv8mGQoydQFHJet9%2BG6GGzTix5KZGdTNNCiwsEcypW0EBuodXPGXi0dgUhYDt7osP%2BV4d3zsqNYlDrejnlS9TR2NnHjQh7xmI90xNspyCAStf25SOT5GV2PYKf85BrqYcT7VDbynd%2F3QfVWzDKXHMikkv0gIdzQcLgXcP2llXS68SepRO9efWh0ntdkF4bPJYYf8WwrljKjnJvHm9lrPwXOiwRDUZBk9M632OPZhC24NxGeArECh0hu3XQFIOS3j30YCUhzZcaF%2BJG73x4Jf42yFIb0UW9MHWSwggo6J1p%2BhAbuxPy2eIw4NDYyQY6pgE8wQxgTa%2Fx481i%2BddW0FAdrT5p3tJ7srDDY2WIJTfIEDybu%2Bys1aqt2xmhIeoY7q9J2wnsRGrCDGd4WtL4S7jcBbqpGJqIpV3EpOOh2Beqh2zbCBpCtpd3pDquXYZX7tlnH3GCETk3Q%2BvXTSf8c9eR64o8SFeH7DbjjauyIXQLmxd8JlE%2F02N%2BQAVRGz7wPwH%2Ffowvs192H%2BITLTqAUybjpNzqbinB&X-Amz-Signature=75a860375aa98156afd611f83947e2169a398773f1328caf326853b938403a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

