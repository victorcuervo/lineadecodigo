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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDXROKN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESZHLB7HTzo6mU%2F0bI7KoKD3Z8IcWCAKAlgNO7Sl9AQIgZH7fniUbXrZxOpgGCDlP731eRIgFbDFuFSlBtnJu5gEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCbLk%2FBNEFu7pHYVeSrcA%2B7WQB2CXaD6VwWgh5DYaRCs96ZuykTBb%2FueoKwLnnOhiXcq9A9yib%2FFzNxWPDMXHoW8lxpMyA%2BOfoobv29qlDNeykrLlChv92PWjotKej1svQBUO22q4%2BSBgkTpgqcNpYprFkWDLuy9nZ52F4S5tOyNa5CKB52kc95CevXhWMcA%2FRR9NK9oCnX8P55Lpyojm6C5qGXpp8lZZo7Pbh5v2qTgJyfGRAzOkF1ke9SsNqU1D%2FVo%2BIKEU7A%2BEmOWQ8NC%2Bipp%2BRk%2BMqWemxJmrRto7Q5fZGil%2BcBWE1q9uy7kqCc%2FUJtl5xapNTQd9TWT9ai03X2Uu177rkEG2h2DWb01NVTMJiWBwjUlAegdQxymooyA1fYMZdZBFQTQjqSFEm7%2Bjoxsqvvx8BSvuK17ZlRl4rIeSFc7ILGOGkY8mz1j%2FpAvNhYY%2BnUhJgADc66frUJYYGjcQs3DtT15EOwNcgwNQSulb%2Fb6rjEbCzEV3XQgETwxWx7iVp%2F5SBcSHQ9Dfc5nXiZb%2B7kSeaXpUhp6%2FVE893txXzK8sHXYsST23hJZpSkQgIb8G%2FObDWreqz9NHJ0SWMa8vx%2BWfqV5rr5%2BxS7sTO3Jl2kZi%2FvOdahG0cWzZBgeL6OL67bEKpDtGMagML%2F9zskGOqUBCRVMMcQ8AUmOy7TuCmkD59JodAkDxSrkXXMvCQW2uu15ajjchCG3bk9eqJUdL2Ul6TEOSYoXGlWpNaJlZY2S4RFcYxFdIMf6UoiPpjBl6W%2BZm4lwoo5BRdG3rJEFFwiHOxQqIoUv95XETzE%2FyPq01gPdKLvXdywaijAZKchvrEn6QWFlEkH%2FfeVP%2F4Uiebe48UPVq9d2%2FHPBjp2rBZqmeQfwYRN4&X-Amz-Signature=4be649a74dafb27beb76fc192d877f6d5b7220b24c0cc51d3405c7ba552469d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

