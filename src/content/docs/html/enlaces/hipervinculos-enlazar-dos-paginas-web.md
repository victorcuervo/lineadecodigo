---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QV5QLS3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD%2FL%2BqGLEHlgQ1tE7e8ByGQPui1kcKj398ehH5B%2BVo1awIgekMP5Ux55cVb8bA1XLr86QkFenpOUDAZauy%2BvUs2WC0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOiNdl%2FkhVH%2FpLcuCCrcA3mosYt7UVSWCGWDIdh42ddYuDJ6ayIoO%2Bi1uV8gdfVl4TZY8kxfp01rkq3bkWBU3Mg0eVBGHa8QT6hUgdGzah84R%2F3blU%2B3Zh3joDamPkzmcBxBPeUMQgMxqbebDebi7PuOPXSK6qWPsUaoLDuCAE%2BBpBj%2BQvA2MNRS1aDiXyCXeXyxwgNaTAu%2BB2HJG8D64fxspN0rRtMoKMIrTOtRuB6AK1jt4xvljQrkB6X%2Bmt4YwLmVyMY2bdgtknaUWPp6KY9dvlSXEWJqAhcMI78RjmQBRyVDnIbZhmWabqFk5fLClBuoL5KzCgtBJTfDrT9Akbbdo6cobWkk1tzsX2I8Yyb5bg0jJVC7tplMhQXJ3SYuE8UHkPRkpOvTm2P%2BnNlFiGdwDJVtR%2Be%2FhenxzfDu7ftNXLJb54HcfQTHlt3r6vAG9PIW2wEs98cb3VeTnKWLTqezbH%2F9D7VnuvSe9VKayyqhk3IS4Tes5pNNeRpOkG3pLimsty57byZ%2FnT47QNeKITa2gkOaPNJTGXeWlMfvt2Z9Dwbu%2FcI%2BCxO0LYu8pzk4iIdGBl3LfUnMzr7lp9Iirv2OkPDNbRR8waN%2F5GDYu1WRx9Mcy6ud0wUanY4R6y4SXqCjA5nO7pGUmIC%2FMOS8w8kGOqUBPLIljaiBs1Rw%2FgHz8Z6gzlJoqh4lZA%2BwGQyqLtsMvYv23CSNfwz3kWmUYRbJW5ng6sb6YF5UO4ckw612oxUbVdu1KTOtQBCjJpJfePx4iPNbvAp6o6yTRarMR%2FZqcY0u7MNJXY0bxahaSdB9v3IhEqqYnL2XXSAYOKzFu7vya0N3ideEfYxKkQOjGcCt2TYPGPzGiGjouStr5oDDG%2Fhu9Ok2m7Mm&X-Amz-Signature=128409131e9ae3cae9a73ed7fb590370e79bd71436501e81b8dfb984c1622a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

