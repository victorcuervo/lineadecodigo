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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEJHYQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaymJt94%2FD3nW7U3zR%2Bngj86m6MsHY2hW7vcS8WVYDxAIhALaYEOjKa8Gs6RT3t1hM5Xg3WvLhxQg9HSA7EkntgsJVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34k3xqe7LREiOD2Uq3AOG27%2BjcvpZa3FvdRB3VWM3%2BGKHGUx%2BiUB5c%2FdemBDEnE3T%2Bger2Neg27rae1VqANoTTEcsa3EMfoDIxbLKJBR5zY0RaDzb4k2kJEC19zUAZEE3Wc6G%2Ba5sBq9AaCmTQSBz3af0Q44%2FawI3neY2TDUPVS%2BcjKZVxaYQH8Tp9VjKa0Zshvh00d%2FG1nXnEYX476dOBAdiTMbKaV1BPI0wfzwqu0N0qn5KQXJmck3AmMf2sokQ%2B7qGq7DuSOB%2BRqyDO1pfbi7bns8V8LLRGXp4XquhR0aGeStj98o2M2SoePjMYJF6ojSTDBx17iAvNX2e6lTNkV2nkcbbUEgldbzyWc4Ay60asT4b5Tw7Wq%2BGX4T68BjDZpqZotEf3UE2uBOVvddPAKbBJSaITmfzHy7mONhBO1NM0bhjwP5PMpXX7LkTV4mv9%2B4rx2%2F8KYIpTcSfosm%2BUfMyeh74IfP%2FxMefSab3UOhkXqb%2FeIqFh2iaScV%2BxjEphlSKCGy7OP1dJDSWv9Roaii0vSkpHvXlUa2eEms3YnCjftwSLne90i3ztCJaAJ1FYr5LBqt3XOLvBaTIEtg9c6DVcdkwa96N6ojw0ml1HWRGk6vaYTxuhFfK2Ajyt%2BsJMtl9HrKq%2FzymzjC5%2FdLJBjqkAcgcRVCi0QGXXI%2F4eLa0TqHRE8iqUnnfoVu8CfDGkCtSYba3eaKiH8WI8Viiesx%2B8nT0nfKCDLvYWQ0fanr4v41Fddd7F%2FXDxCahZc9Shu9LbGEUqL1jWiKVC%2B3ExQBe3SlaV5l%2F3E%2FClHQNpmRE2qSxeRp0ZUF4fZTev6DqeK4Vri09lzteDWQsxdsAylIJYK%2FmwuQ2uJ4fSJT%2F4iGo5sFowut6&X-Amz-Signature=63a18ae75354169e8202e060d2fbc73a093d66382641920bea88ca8637f59366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

