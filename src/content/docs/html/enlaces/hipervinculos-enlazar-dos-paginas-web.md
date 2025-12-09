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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLS6SLI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCiGuDW4ydL3K0bSG0C5GYcjr%2BrXyIS0dlVDZII9XKTwIhAJjGfWWXPERgVvlDpPGgUYlNSLcw9rWAkHVEjr8xvtqsKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX3qxNBt7kZ3glQ5wq3ANGbf9gObMy69Ome4I2JDFz9AEBkiOMrDtJPn7eDObbLbEP1aeRoJyKHW%2BKRdC7Eio%2B14muzfGKXDxkCrRIrI%2Buh1cAyFzc5%2BpR9zQdTV9zGIca0n5UEqDIWT1gdkVOigWhYzGsued7KtX2Kn5Kx65MnLnzu9J8HWrOupe07wlPTH4b%2FzCUpC2ySilFiXXDberEfF5pyUuXluNHu83P2OqV64cfoU5%2FUjLtf%2BBiMswWCIJM1Pq190E9ez7w8AwxsCuUAxCv2NqRsUBS6lZqL%2FJTAoVWJvhH21CP5YlPPixtKrZkQvLT6dNstcBzugculfG1XeDdV%2BunZ9xfE7a%2Bh1mm8Rpk1dFzZrdIn2bKtAkTtsU4KlO7AnIqekXrqp%2F7rKSKQb6FJWqZYOhT1hRLWNucz4iM3vgFXFS9Ccc8sBxYBXjncWwVevAqg27Bi64lFS4mD8RPegDBypSJzFVGOYzfrWAKFucTNAcb8n6NFwQW9w6H7Tov%2BnyJr%2BYMSKlUZlDXwZZG8cSDm22obu54C5yVqulhm7Q7RGTvMkFlh4dKBlQpT9Mr1to0F5%2FKYap0MtSs0KweKzKCpq9CUZyPHE6st8MWsFsKllUAFXpDKtLv5cRH%2FL84t584v34jRDC93uHJBjqkAVJieC0ObKHgPVUtFwCYfjY%2Fgu%2FS8K6Z%2B9yeKdtQno4mjH8PbI5HJUwqlQJwJlHsf5FHHu36eH6%2FYcQN4EvC7gg4M%2F6fKPUUu3iLbBD5P1xDOdHdrwSRF5PYWT2ltuPFzZPB%2BcvYbZlzO0tnSPTgEBSJcReCLyIgE9tmS9PwM1719hqgzPfK7pVJo9kK%2FL%2F1bDHk3jcoQVZWOkC0tUXdqAdRIba2&X-Amz-Signature=7b6c34f1e59d1e23fc571dc1cbaca7e4753ec3041945f5bfa3ca2e33d7e0a0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

