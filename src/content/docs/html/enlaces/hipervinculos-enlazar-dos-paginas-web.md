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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6HZFYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFJnzWO%2FtRQzVSdAvt5a6p0bKZuO4ZkUvzwmQVTfzj3jAiAbds5OEhXQ8D0hujQ3voqq1%2F6VTumJQryMUf3ZbTlbFir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMoS8k2oHVaUui64QHKtwDVfxtzZgcee9jJWxqjub4yHT5ShUfiQmz9XZXwuxXfzz3ZhmDHlCvhuhB8P61AEg51LohMqPR35AzTUiIwz54lcUzDutuv6BuCHtT5SPfHGDtf8MWtQ4DJNyBBRTq6I3lcIhJ7DZsWHrznM5zowm7rbtAGnll9bLvn9Y7QFJACA9gp9KLjHuw7W68qlMLg1J5neHh3LnZZcoScX3dHsF50GdZfb6Hmeonrgx2N4oYY0ygH2KD9GIHpYbhY4rd86d7q6LJq7ofsM4DV7vHv4KLNqsxSOOyM9cnTkNDq8RV9MrBSeszaX1hGmVSizOJZfgLCkQwF20kqegeUDROd9nqUSO7l1CIHNetzJfDjsaNR4HjWUYUkmnUZ2ECS%2B3oKCA4XXktP2kZ4ByrW4rBMBIBA4jNV3E0db1aQN7suULBe9ZtYpTZ%2FlUB%2F842jN14gtsbxJuqqopQrtfkL0EQe6bJB5%2Fc24qTYvBD9yqXMZxIvekDn95fi4KbiNHjbp1e8OcqS%2Fy%2F0dVI8nzaYn%2B9kO3CYOS%2BGWuegW1kUv%2BwxOHZin2GYbptOq1r%2F8ETlFmXUQsmcWyQV2m%2B7nYEVCn7LqSuGzOaD3KlArsKlW598xMYo3%2B2RYUX2pA6mJM4sDcw3fLDyQY6pgH3KmCyPJoq%2BlhTGismP7%2FyNz7vhA7dsiJthME7DY2%2BdapIRfT2LABFzqA%2BLTpVqU5G0ezOwCoWQuDVfGJpvLnyQdbJyMGKdq2VRojBJhi9ktmpCizcZj7rB1gHRKaEUzgDkIkTrSi3sCE5xmEtHwoH9bS%2Bd4nMD1S%2BM4Fu%2B4TdBXzPzFuznQLV2DVKh1SeVoKrJCU0i567aPdEUzVsMMJKBwBFgeJ7&X-Amz-Signature=ffe2e664f61dcc788e3c2fe47119004be90dc10a4ce63fd72c7ae61f7be11e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

