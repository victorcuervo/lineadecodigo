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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRW7JRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEa6yeXN%2BKpEI7r2nazLbYh%2FJ3P310pB%2FDLkM7qjZoRAiB88jaI%2FhhUsYkRyAzxPe9ousuUUL1tEWEi9KMc2j1FRyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYuhbqm9RDTBsQtGKtwDVe%2BYcSdVuxtG7CdBJaa2DQfc2eDhDfWkZ%2FertxCg0MkdeSWSx1oaR%2BtQlxd5stabelArV%2B66BhKB3zDZa4lMZuyOK7bs2479QB3aR99qmZcU8jzYtrlwRo6%2FdvRpAmwJM7183T8alwxv5l38sShsgwAQPvFoHFwvlOH7CWp6OA%2BxsaAaP%2Ff%2FD1%2BoYf%2F1uMIPfYXCVZa3CfFazsxiwpE0cUHSjt1t0rU0KktKMafiak0E%2Fr34wOrf5YUMI2kpyu2OcOENWtQweQQJ9%2FY4q8Pt%2FAi1kP%2BkvFAlza%2BdmWti1tWUyxLgSSxaGQoFvwA5cnqD4rmMNPBKBkvxaB6r8CHMJvfekBn6QPcyQ%2FvQgYbeGKXAVLp8RG2nEodZxYF3bzBPQwE50hRoRvp0hxqI%2F7oLt%2BnEqA1W0zzAHn1eZ5iVF9SqDVOmoccyK2Hp6t1WaZyT68ZcaxSn6s2Sy%2FbFmXR9lv%2FCnhwUQcbobix9J2I1zSTYyaVkzHZDLyYTmox%2F03X3x%2BnJgNANR9lITWZ4SdbDqPF6vx5HoRHq1rTt99C2Qdi2Gvic4ryzae1reg0r5I3CI84jfUjVZACP7DNKyHHy%2FiD7HRdDJk%2FXspESQN6Jeb1%2BO699lv4VAlV4KR0wzZrVyQY6pgHOkuVO%2Foqv4ctLVNj6qwmWe02Bg9xK%2BKl5Fttj%2B2DY5v9JkgOXyrJq7Tb9vmAeXhryVxhE6FWHqjEY%2FrsBugyRY2QZga2fBqR3XCZYD4iUk82QlwNR38fKZEwQzkJOF3N0hf%2FmWyCacLu3LpQ2uto%2BIlt0FXo8O231c81ANCMp4Vn7Rc9jrH2eoW6%2BDEqqvfL7krI9ScqpAPqhIxPMJuMvFMwIFfgk&X-Amz-Signature=7226a3d6dfd8b70fe630d84ce2bcb0ce2fb43542a664b673f46c110d0df84c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

