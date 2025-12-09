---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6W45WX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3cFD3FSnaL3dXN1jDKo9EMpU2ySnCbMlpyz4Vj%2FXQuwIhALWFl8QE8Ic2luf9c9sNPeIK2xkTfoOYGOteeXZTf3iQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwvEcBQ5dvX3dTVsQq3AOTGqt4V72NaDsL7%2FFc2Dthwqs8Q0DHNzhQAV6YY%2Fy%2B0LRCLkuD8GhY2KWXAOcF594wAiU5bnwB6L%2FaFTJE2rSSbsJ9CAjmK7g5kvHocr2oY%2BUhoVLuFzcucq%2B0CcGMXCw0Xpj6jQyicIaUwzx94HLbICVzrHFaz61MXs3DIpvsoZ3kRoraoiXgYqS99%2Fnnjq0dGun4hakN7BmBI5xPaAOpXfiVj%2FUlcvyg6vKkdrrEeQ8qiFeXVQVLTBwbVHhyjd5tCGsowEMq2WekUvRIS9cwOwGiYUijXNV9MuJ4cZcCQAt44AIkGeA%2FG%2BkAB0Rf0zV19pxtJAxGJK3dTN5MMrfkcBmP5OWO3oUVsuUlKNPsHYSYs6rMin0gktcSf%2BcDdGbslqvd%2B9fkAJZ7%2F5t9%2FihPzfwXKMCjjxILKIVCqamfK6MZ7mmkRuQgM3HR%2FJvQyrDPC7t5BU6UbgqAhfNgWZDEG%2FX09XjNELf1SoNueQ12b6GUzcitHAGZaY0VCGKTjjuZWVdukrE2n%2BfY68CDzx6mr2n0JhPDm6xZj1B8kFyRrkzHGakA7fdY1nraP40fW5k05Pb32p9E3iygdqeXndXU9cPOuy5aHeInp2v3dJUgcQKaTKO8FQrMjIfL0zC33eDJBjqkAUl6E2clyWB5FAgK%2FC7tIA3Dwiu%2BfWr4Z9l622428lehiI%2FDTstPkJjaKd98v8S%2F5wrtrS3EJX6ovkS%2Bnnbc8OMyGcTysjhN4AEhHPQcX0mJT4TkkNUmpbD%2FQ2AnmdRl7x9E5Hhxb3DvdmxwKAxiNe%2FTKLpj9ul2z3khiq2ZoVSIkQNjuFKp%2F3%2B3dSyMF0SmC%2BoSmGKx9ZFQEXA%2B0ygS6P3we3t5&X-Amz-Signature=992008424fba43d68aee712bfdf182fae6771e7f6fd5d3b8fce85abebad2975a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

