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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MVEYVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvbjy%2FmnjJh0YPQQ4WSTSrl2lslhiTyjNQ9xHPa3va%2FAiAAvw2vBHLPeJMIeOzmSTaY%2FpaoTtznWWOsDsk8DZlQNiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgfaPQHXizLXKP41KtwD8Ogvwun%2BeAElmgibPEpjrQgq7yKw5bIZw8UWfZG9%2FgSTek3cJr5F%2Fw9A0jUQektenl9PJMidsBBJddYiliH87uJVhaZVfy%2BAnOQdfRv7m7pzXZh9Jlg8iaAws2x8%2BSzRQ8qVYPFQUI0N8eOfAbSnBX2hcg%2FwA7sTTkYy2sgG%2BUxRdZdxnYRPj%2B8LmfwpkgfWITbGVPMd5jXwslqy3WMGUviO9aOh7oFRlCZLh%2FgDwLgL1Kl%2BE6Tn9%2BOadOr0pcQVgjWzOlYvHMa0R6wi2NLZ6G92QaMGoLDSLYVAVvByb52F9spjQ33rsJCaYvToPREzS%2BER2mznv5QdSmr9YCIM5PrfSRA%2FCsJywNgvsVmdI9FOVOrRQ1iZ2cQBpQzXbz%2FiJ6WTYpUX8pPEVgiTTshfV8E7RAP7Rh6fFtLzKMp0gN128IW3tVvNMhVDr6LVfqnVXn%2BVd79A1b86wHewvhnVceX8KaMDRXMJ%2FQ7Rh3GQWYacTL1JhQPhoIJfv19Rpap8aR%2BwKW1B5kDgm3n7WZSGc4IeL4b2Bga2ssq616SsMBQ6%2FnNcBSxxP3SlYW8zQDaE7WTjqYbp9HEiywe9%2FB72LQa3IuR9dRYHrYwwuAhWmCQKlXOthZOxzPSmdjcwx%2F7hyQY6pgG4EcTEwgHZ7X8GEp17wBulu1aGEeFW%2BKG96qbrRIvs6lxLMDDNTZYgBEtnO6MMfXlIk0vSgQXSsJZHXSC%2FMrNMcI18xcGIsRzeZCB0cPnPwSED%2BA5lxUzGUWcQ1AlMyFt%2B67JhchyGJ8WPjxZsYch3QXQZuF%2F7pbYn9BEEwN4MdvZrnVUV7nJN1fqhHSgDmDyEKYYL8C9bvOMoxmBGdNEvVBZWBdhe&X-Amz-Signature=f03b086edf1a2c8a4b59d349f844060fb162790cff542b57ab81ed5013e48cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

