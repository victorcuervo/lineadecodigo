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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25MNOZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG52usXihtUPCfoz8DX14YM4CgEuSQF7WUavr0oUlBHrAiEAzwfh5QJQzUNjTb7%2Bm%2FLKz8QjRH%2BZmUrjJJmmCkGTsAUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAqq0UHrOhxF%2F8vD5ircA7hiBedIJOvBqwd8Z9HqYM8gef7WfHHzw6%2Fw4L7x%2FUA49VE6LaRpFgEC%2BRLpPjYHkHlCKdtIYbU2%2B9wJiGLUbY2hO0A5ohcJgRl3lMBLPs4Njq%2FGzvSNqqkBMtvjjpvKUTS69PLQeY%2BUgTIQET7i%2BaVtL2j5xqM%2B5X8AAftr%2FVvS5irR00zfVyQgyPHrZeDn7QT%2Fyu%2BMm4yz%2FeYgAvNsCz0sC%2B52id92UnzovtGwImro6vLwoozh7g3138iDET3Pf%2B5flI7GK4R5LddbVOAQlOD%2BaILmyad7odjeg9nYcJoL6S6VsAQe6fAu9UlUv1X%2BwXlqcRwukU73xZrNIr4kjQHi%2BlYq8A%2Fgfn0VIItXQkl5nZIYPkGrNg1mBaf%2BkQIWRHT7JwmlGg38DA5j%2FlU%2B4S9MoHfkpcxxcPHmk95dZU70qwgzpah9G0kgojPFcLbp91TP%2F%2BG5Cp8IYRqb2Td%2BAuWlrfP3xWWJmRUDo78IQUX7fTE8gAXhMJdxuLxPCAgaL7vf2Pc3Q3nVX%2FLUHTwacxOnN%2FvbLFcVlv9k7ABJ12l45clwLMsnM7Kz%2B5c7kWc%2BgtW3ix4rFHsF9DHWeQYYdwP%2BFzzWOxpjXrpbp6SMIe4PqcXniFYchG6QBdLpMICez8kGOqUBYksCrNCbCczrhFmuAC09x6xPsIC6XqBPG%2BuVkkbGGYQClVbrCIxMwf22SmNsFG2OylJN3ENybUaqeFZTXycH0SjMtIwa7gUVnINY0iWLO0udAaxlcMdQi9JQcpI1YgCRUHrISgfs0KuhjR9q45EJii6DRJFD7gCsGhAVMB04U3tOsRbk4Sjkd4RN52bkk7hTEvceOrTFkCc45SwlvPh3jXusEIW4&X-Amz-Signature=7b3addc34854c147e49883fb9bf3020e7388f697ed86aedc4aa9990be039de6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

