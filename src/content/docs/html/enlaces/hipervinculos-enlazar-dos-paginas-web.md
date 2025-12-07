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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWJSQ6I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6c2P1n4amKn6jH32IfSNGC1G88HOy9NpuYHhoLu5sXQIgDP4%2BVTQiTfQn9hYSE2%2BtvVTZje9V9gRHH30P0h1%2B3%2FIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR9tVAwf8oseFWEyyrcA04q8%2BkC9BWPZ%2BJNKCpyk4tFSViD%2BI4tF3IuD7MsWnqr3LP1se3q30dNBqD5Tg%2FUERxaA84LvyHTX5F4v4BmjqK67AqoqY8pfOPwF9WgOEw43ykpjUDZUWSnqibLe27oRlycofF5qidcHjuc7QA3R1di%2BMpJ%2BoVdFUM0FE%2FakqVDMJlfKTLZdEYVbzmxV200egHVA%2F1sGz2%2F8slB6zI2Jl8QheNsQKwV9iWVezyhucX%2BxLN4JBloKWnkNF7QSWatGR%2F6yD0kl9GuLyuf47yuKCYbqToKS1IJEZZXbq%2F8Dyl2bWeZ%2Bb2Yp3J3j0c7Jm966NwsTONOLCuYakusOgnCzYrAsKDqw9CSkYA8H5CbgEe1N8S5erYY2yj3bWkK2nKqCJs6EUP7J6E94nUK8GYIEZENAAgVRJwyRo5RyWZWCXuyNohe4lRukfCUXUe26NcAAosygA0TgXStbsyOrVZ%2BHpL0vGjp3NxtcI5%2F%2BfjAc%2FkMOL3iG4vb5s5THCdHtOKljg8H5gcv7gPwbweKP25hJirgNoRyOc4UZRsSLPTUB6nJm%2BzVksG%2BgFOEFfNF78DrBZGkmMJcYoEeuxqaFTXl586IsuVJZMn9C1dUtt95IK7dnFirK6C2huk%2BfP2kMLu61skGOqUBfmG5SrjryqNQvEbeH4Pvvcog666GYzNoaYE4nKt0F7Ejho4BLl4d%2BFR396H2fKxoxbpjdX%2Fke3bEnOH4T5x1EoHZDr7kUxROkecoI0hTaVCbCXQ2J6H1FjKiEXD%2BeOOAeydWlanWO%2BFqxZYsQnivhn8raLYbHJZm09M1xo8wfDODzzkpA6WbEHLvfTIrK4KSEZXx7XliJNsyqWIwnSb1jt9A%2FmlM&X-Amz-Signature=cff68cb7ffacbbae33b9c1d15e47412504a2125c602329d65aa738df951a46ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

