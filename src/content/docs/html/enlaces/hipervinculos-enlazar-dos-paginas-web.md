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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQVMOU4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9mEJg2xAODInWeOmQRuYxkUxLo2S7KDcrWoc0TJ4eOAiA5WA98bYpBj3Uv2skMM7xnSPkIdJeBalMix55EqhLn1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCBygw7DYKK%2BDRKmrKtwDLe5%2F7RVyC3GUYN9oUNfmfMM66rLj0CNCWHuffGpuIbxbXbHBSG%2Fpq0gnItX9tLkWBo6nmN6MFHKpy%2FFV%2FTxXDrkGmhSj6Kn2WhojLFNucY85n4wBwyirVgCTGZyxCvLk5%2BQX49iO%2BeJz2t7pFICkJMHMrpjVslFYUpQPN1rpIz7uT0G%2FVI7YiiMaRm2ktkC%2FgyQ330O47cbOezXa1En6x6%2BxVbpzFu3duOKu8goObqoHRNf%2FyJOq7%2F4bVJY%2B1LNfotO9voTqazhqBNS9Ps6UCK7NBg05BtrMWYrGhABs%2FElUwles3Ody2FBBV9jKFRKyWkaSHwA8Fr3Hcye01uHP8WXooShU2pq7DDhXw646VAGMgLxDfRx1E%2BSRRugv0j8AfbUit%2FJT5ZfzYBh6oJs4lFrIWVLiHcpwZlHPiSt1oF6aF3Va35i7ZFJelpUCmU1bveH3j4up1MsMCgGEf3olI8ozheiKKHxMQBMZq%2FGrYcJxci77BnwARn796gLYoaer9NA5Npci%2Bljx9Hm%2FPu4sPZpshC%2Bj8%2F6FozFI%2F4HqfqKZKmuS7aguU%2BSqb0Iuz%2BEHlBY%2FSRIs4YgkuWgFD%2F7Ckm0fsyPZNF7%2F0jlLqKi8G8FhXWmnHm4NqvS0eU8wsP7SyQY6pgG6XUXbgPYY00yu6ydEdrz2sAjBz%2FKbo2sRTfMP9VjU6sXJ18XkdM5RiRB7K7NOqUXOV50E0qi3WoUlJGywNv%2BJ%2F7gqt1Af0F6JLrdNo8w4TzcaCurNq44sju2UE59D21zJm4reFso2NAH2A8l5m%2FNkC7b6C5W4h8KWIoi9DPVHw%2FP9MUY%2FjZ9afHiSaBE%2FI0lDrMUcKOyaP5SW9nVK8y%2BsPfnmZvbt&X-Amz-Signature=46541452e6a77d3ebf384f773d744c46addf5751235d2476ef2b036abf6ffdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

