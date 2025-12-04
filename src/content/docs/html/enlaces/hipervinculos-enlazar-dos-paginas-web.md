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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISHG3MB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHmAGKncaYohMbMA%2F710UirpzM%2F0DYxy2eKXQX9sCAP9AiB9yxHEZuvupCtod%2FDxmcmsGjFA%2FtGaZ1tlq0%2FZR6u7ICr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMlW5IYgN8CGq2bHG5KtwDDxsYZiDiuuo158kkzv4XuUXsi8xmEObvtPN4SDKAd5NFditPTx%2Ft%2B4cVIqwPWDqompUEmnBRyC0M9p2x4gzn654Vpovd%2F5%2BDgYHP9RHCsVsJkRQuTC5h7LbQ98q3ss6qdaW672A%2BtQS2uuSqhmSqHEFjCs6KnX357ciQAhIIMRoQXcV5WuLYwXjEkx5jpDOmLDEed2mcibQ23qvtW%2F2GA9LkmNTFd7r8x9tW3W9e4ghtRij2fZBqK4xg50mm1bBPBm4WI61jMNJjI1ZnCCLEsCbDORt%2BPTBJ7473tjtryb73%2BsmoaSFKv4tbheIV1enL%2FSqvpw69Dgz5O3oYUjj48kroGkrTX2jCEwSe%2FsXzkXZBr0HIteBFC%2BD4teBQE76oCERdyQzkQ0sg%2BiTa6XBiku1CkZLhMzclN2K2JEtqtnrwKK4pU3kD3qvHO%2BMdPe1y6EMeofLBRhMwhJpKFoGO31U4Y2XoVCnpqbnZhURPcuxrNgTMJ7QgFEeVv8YTW704e4Z4OWuubQg4skfwbFS%2B2DCIsbQZq9JNdkFDWSgpInw3chg79qXhdeXlwZrlIPBO1tlkjmlkDrWwfVAxrqHYZeDmDElphb81E%2Fgj97CPUNQQ66Vh1X9dG%2B%2BonPMw8oXFyQY6pgHZs3wD7P3TB76p9zcQvujDxggQdGeKc8t9uwtb6yLOPDiAJMxOMTBPlbnUl9NS9bB7uJUjsHruWBwFeWbgBgiT9GkZ%2B%2Bd6opMEluhmwtiOdOKhToOvHFUQnNLLT9SqFO4QJNYrh518qUOu9%2BvQUwUm0GgCtX4hBPrsMzRlb7xMqNT8K%2F78mgi52A1E8UOLGWzrlebVw4Imd2KVbbhPn3vq%2BdyXP7xL&X-Amz-Signature=298e63b659c5f126bf24d0e0c2dd97aa98fc9311d20b62c45eb55b53211da6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

