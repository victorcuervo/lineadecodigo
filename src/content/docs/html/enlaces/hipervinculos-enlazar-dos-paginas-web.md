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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AP6CRGH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClNjEyZglPk32NS4IpTHosx9KUENkA9qDVEwfpsJwblgIgVjy7Fnew8LbW9xEdSY%2BSXbKjSHqyZrABVqZ%2F0HKGhZIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIxgeduAjf2xNOkrfSrcA0vUkflQsZ8m3%2FutZ0%2FpYAO9lvMD7u1OPvYF3GZrsZSOjoXD4o52brj%2BzUyxP6EnI04XIH0oqNFR9l9dxDgCZ89JmCvD0OWMMMtwno%2FKqWFl%2BCNN490wmUfQHhek03Wr8OrSFsEAetHXqP2R55JBXn5VofNzem9C0wUMI3Br8slHuJkuhLxX%2FKxXsncEDh8zlokEuOcXxCxchAGWUoQD4elvKwswybdLeVfdVDcz10pMCVZHzNpUGbQnd0G3Hk40G%2FFQGPbXTxMUfjSJI4La%2B8X0toxJxl0zc5J64lQCrOuUNmjtpfPWcHZlxzuqMEYqrecdqTKkh6nqxA%2FbNNhpLg%2BaufM6lVyA42DJHFR2UdY%2B83hMYWkzm1Dmowvemr4ZwG6WPcu4QX8tL4AWZhvIs2cC4LgxfDk2%2BuC1QlFJ90nNngxDhGyYZKL%2BYCqi3IWDnaaY7H4RTmGrM4mOxcNUSHRl5tVmEY3i%2BiOcQjsWDa4ERPTMuCfueZmwz9JTWR3eJuP%2BWFZazF509S1wFx2kwROvIvSnEm7njtIeSQ41WtEc5d8EcFP3dW0JNhEH6aU7U%2FBomD4KpttuXsGJMWoad00K%2BMg9lBl4uVFtBj9wrWKxbwL443h1X542drH3MPfFzckGOqUB93a4B99Vh%2BtbhRHLh%2Ff9Hg%2F7KcKjvKE8zgPmNOMBvw8%2BdaovZBhNmfl%2BLWRATDNlegH4uZEnJUZ9mJoDih4OgDEF55MUVGPQEdYAjS2lnoXKwMOekc19DCKs%2B%2FdjmPVyNNydSZvjnzLtdaQR4XRjk3qzblGe0d4sraXy1Vho02rmYutX4S4L9MsoxFZRuGP8UAAZIk%2F5kvfQHOLsYcSnCJeQLUSd&X-Amz-Signature=556cbc43bc847baf9f6d1c3bc5d9ac151a38668f9dc21562b03c0c5c17432e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

