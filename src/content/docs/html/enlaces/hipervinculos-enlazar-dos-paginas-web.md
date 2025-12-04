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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGZEX22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnCvYO%2BTGyeYQElZmTlhA4zSuvPMJ8FQ8OHjs2YW0JNQIhAINQ8BescX1KVnykIz2uBccYXHBhi8uV0BTMZ8pqXLybKv8DCEoQABoMNjM3NDIzMTgzODA1Igz1EYglCTrHQ41tajIq3AMwXdQs%2BiENzUlGFOlYBY9GExDSMLsU2QCmNmknYGslc%2FDD6m6wLGBoLYjj8tL7e9oYZ%2B7cz1ohgWCSHzQ33%2BwVZKk6GG1Lt7tDhfVjFJ%2B1N2uzaumQRIxYMVPCV4I6WS4MqwYs1yTSgWepHkTZBEkoCTMIkyuqknAQYBZdIDCNGO4X3K4a%2B%2BBkpe4IRSKueIGoiIioRlxaf3mGuxJ%2ByquAivMNw9qPaXVc9s%2FbQhb54Zs1Hqhe%2BsUfoBKYOJwURMUuVxKjcHW05blPr5%2FnLEfqJ7G4bDbLLwn8S%2FwFihx2DCxHKIRkrIzGrQE%2F6ECZ31%2BC8p6Jz%2B0H22MkBp4wx5OuZQZq1xzulMcfMKz09niX%2Fnf%2B3mTFdIVyCa%2FwV6B4fMj%2BTKOA48Bs7%2FPdDO1tR3VW4vrMP%2FJGJF5npSVZ%2FowtsEh4B3XLN%2FPD4u3aZTI%2FltlA6ORibTevt5UuM0j3%2BiE90STk2%2BWeVb0oMSO%2F3Yz4yV6FlBVHe92HnvmbGxVYPbzJBeLAFyAu9ik8H0wf6z3Tzq3JREP6CQ5Sm6eQY0EnAvcRWZ2eqyoQsqm6r6z5dUEJl%2B9ApyQchnGHgQ8pzOQ%2FJRvxqDYp5cBVY%2F9Pqk2z3mXZtheea8RH12tOXzDh%2BsbJBjqkAaB2yiSN66XSt4i4%2Fml0qaXAb3L7gx7w6rDtxJSssa9R%2BgQsocjyg0JNIxwgT4%2FCkVedefWkNRbemg4%2Byum5uVqyoKoyi6TE5r55yGMc2IbQimlrems3jErRn6%2FlS5SPADMQLkixYAtIlP6F4bRB7k%2BqsaeouishlY0oPeekmNbq%2F7PJ4KT7AorcYDFvXTlkhZJ%2BhuCSad2I5HwSS%2B%2BRfc2wDnHH&X-Amz-Signature=7cbac5681a3077b150ea27acfe0f4b20ca68d0fc2f0e3ae25b865e01aae19c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

