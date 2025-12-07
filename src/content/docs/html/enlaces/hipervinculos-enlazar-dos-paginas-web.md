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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2D5NEJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNYmWa02aNGzfX2lA7ET4z3pOBs9RXxCDIVxCi%2FeY3wIhALGGYn703jRbp%2FVdGkNtCsyEc1MuTBFvY89iC0RkEvggKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcxTndF6gdFYAjcNIq3AOvAGhlrg1PGLB5HBqTN%2BnmMXG%2BZ2aMtQx7HcHXVwHC%2FcnZbc7sL5ZY0q7FuzDUvGP1ZDLbU8BrFm%2FsW68yDgx%2Bp9C0gNXCC2FLI6HtMkysfcGFF07CTy968bBu%2BsoDR7J1NMIdM5eX%2FuiJz%2B2vI8CVZgV6rj1fmn0jLJc32HuKAicpVBKIK%2B%2FdNfDk7eBXX4Rso92y9d6aVofXKjCz3etO2qwUhKWlVWALP7aNKeeqFKmkO20oSVR8jdId3tpKI62RyB9sHorioVA5Mlq6qBoePHqYkGM0hPFee1ThzXbjuNgC08mjqF9XPF%2FJiqRIOUcC%2B%2Flffb1mIoLg8dMkwLanOOF%2FpNL5QXZzX4QX8NTVqD8IGtHb8m0Q8hR62kAlMG1bfIdJFJxlvAikCm9gvyCwil09vg2YREIO5zy2rxHTGa3Uz3HKX4ksnW7NDbR8H3vfzpm2rCDXOad0xSPNZF9wqyleg%2BquNB2cInXb3UEXhy%2F9JcZwr9rE%2Fs0CEtrmmyKrpQYq4pdQ3cE5nwtSZKTFj0sp3oHRdbe3PbzR2NOiYPY6WI9KqVpBGLya4%2Bp6qGryk3ajywrmPS%2FMNwGZk166wNfwIL%2BHOg0HX9qcIi9DRsPgetRjQwBcMcVbdzDr%2FtLJBjqkAXe1TydjdLRMUc72ZgXSFxI6i%2Bs96J6Kc3ZwVpe9ZBdhRy32UqhJmAdurP11sDh6sHsNmWRmocOIFh9NsAB7QJio9JDp7VvPLfFXKN8GUKgUajijwfqvQ7bZ6IoS24Fw%2FUSCI%2BR9mY7EV91LoqKLhcab3ZbCC6nGD433h7QFcqnM5%2BjGCQoWkz1gCq9YcV1EZ0lSh7Z7EGFH99jIV5aNpqXXbeKl&X-Amz-Signature=e09c5a06083332bb0082fc04279d07aabba517cd35935c0416184f1f6a613e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

