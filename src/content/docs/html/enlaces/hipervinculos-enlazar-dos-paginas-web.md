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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC46YIX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwZXvYH4%2FK%2BMIm0aiSnkB3RBxbte%2FJr4lKd48Cr4MvlwIhAJukLEBHukKha2l9dG1LeTor2pUFNVThYmoQjDh4maRvKv8DCHUQABoMNjM3NDIzMTgzODA1IgzHDIkImBDEh6DI82gq3AM67oRpe1dvWPGChr45I3mJUOY6y0BNgUUuGKkudSvaS4%2BJL%2FeHSvHC8WUdtrC8qmgnJwV8ZXFzneHCfMJtH8DzAJV0mZfrrUQuWYL8BIQaxBqABvo0GeQsByVvEExziQKk3AFI5Ni%2FB4yvlfC%2FnjHOp8f3ufip%2FMLyaCpu2BUKqmcZg%2B4V06oX8CPJbzP%2F%2Beeh1T2IcfdJjC%2FqSj0TSer7i6M43o1X6VfyDkja9PnYZofacRaqmzV%2B%2BTqETaxoIekBjXHARHk6SKNjbI7iehE4ZmEtRbvurX69DqcJnnm2TGTaxfzQFSNByN%2BEYmikMAVpgQXmi7xoyzHCg9vfdfvQqoWx%2BDxw%2B2N4idin7cTS2vTjxnGTtE%2FJw0Qhoysz1yafV4cRp%2BS%2F04usjcam7Xv07kRPM9ISPCpF98LURpKvsVrOGo9snrOF3q6rqw4HWq7HsVHa%2BIcg12AGF0cB%2FsId7bxNy%2Fh8uyKUFwnFXsfZiWJJl%2B7fde3JgQ%2BNORKSIai7KDnEuGJDEV9lczYf8TYJkRIwedhmzlIIBJfCywAB0oCcbpbJNY3dKULPqjFB7kZpyg6NHmQinOlTa05dkMaUD%2FXz7HjVIOYEVmHTSPbc%2BGfJ87gwqinjulubCTCnptDJBjqkAT3WFiYGLbtKphyWqrl3262rpV7rW9Csrow993IIEamJhfCqxHK3AazdJOC5GsTiLewr8Xc9gMzQc8evi6rJ%2F%2FP4PnuRhhEJqNU23XIb03umQBuYH9zlPTGu99o95q0k3mHBbonJ5Q7AeSwWEuZROjBUjLERUCW6paO%2Fro0EyQA5YSDj8zZ8XIKzmSaVvz3Dpo%2Fdf032GWg7n5bu0FovX4eVmsYo&X-Amz-Signature=41ff9044929a3ce2bbfe06adf59656932f5ca2fbd19ec90d498fea50af000258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

