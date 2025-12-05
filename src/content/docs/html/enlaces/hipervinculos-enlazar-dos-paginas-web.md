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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VBQVKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcBAlrhT1RR0NHhkPnO9VPD7lKQfYOs44HnyjiHCItxQIgK%2FRsAiYYe7lIQCNmV2DVw7L%2Bw48ISELGdc8GphQxq0wq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDxuJVmRq7v8k2I8EircA%2Fp8YIk%2FRdfcMWoGYt3kBr%2B0g3TSVDBzs0P4wG95URH1Wv5MAU%2FnXmG7jhLKSI61FIEHaLYtsfGa6vj6%2B0QANJe062HTNg%2BPclGp8aOLv3nIlQkC%2BEd4BCDxemUmNUz2GTJih7jfoPQmjzp6aON%2BpofXvJDzulJ4s11YhelUxnozMYuc5J6GtoJwV150e0J0pHqi52fKLzRjrYsoRPZoFcZOe%2F2pBWSaeLn0imrUUeiMzmWim6Rz4XamLxA57q2u8ROhDUOQ5kwMkV2FT6%2FPbbbPV04yjGoEi4xBFzwUeNzyc7kDpCaJPdehk2QJUQjRPCCXKSc14NYgIc5gpVb5E2OFtJw%2BVFIDNWcM7ajxPQKdrdp1LrjnaJ0vCLyFuLKA9oNrw4bUxgLDbLVxXqnmXg9yWKU4MLF%2FObGLLpfGqJexc9wqd8Fi1HhTypMm3oqkRZFo0hmcPm3e24dm%2BhSzHoBsNvoW0S%2FUJuTcY3UgT7eSRmo%2BVfnAgITMkocjqCl7VNvh88j%2FH6O%2BWf4RsZCEpU2VK7Y3NlqI4LCZ59sEuUUTpGi5YWGbMkEF%2B%2F8mgz5khWqQFHrZUnVbsIPGJkFugdzATfE0ZqByLOL7UfnWic1hQ75CoRkC0HEYL9SmMKbeyskGOqUBNRMzqWUbH87j1nuVkdU0Set5g6NsxPeODc%2B55DEWhWe4Ol%2BImAhd0QxW7Wb7l%2F7gjgY1qTk0erL81yC8FEX4MhigcN3wLEp9%2Fn%2FUrj%2FH%2BGQtPxFsJHqJO6IKuwghdbGXA2hP2T5tYRAiztR5YqfuEKLR1FACIJ66azBeBpr0cAg0RtJ8CW6Vyra735zRhdc%2Fi3qL%2FnWNFASntQX%2FUiPnS%2BCoVPk3&X-Amz-Signature=98f1b15be2624a919329427bb7fc53bbb39efaa424bbefa4bb02af8aba9ec5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

