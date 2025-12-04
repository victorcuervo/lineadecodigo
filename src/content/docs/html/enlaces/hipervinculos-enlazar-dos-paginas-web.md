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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUBVWTL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDdKT8kwwtfkpFX3zf2RNNvsqLEQ9rVH5yvNB9wGSJoQQIhAL9dIlYhy7MgD%2FoCdE30%2FjQbdnAcO4%2BlsxVqTWQej%2FFBKv8DCD8QABoMNjM3NDIzMTgzODA1Igw1jrapI5GxDmi37y8q3AMZlliagNjn6wzbWarjv%2B1hbaM97UrYddk97iZIuI9CGztmpxaCPXEfJs26pZlpgCW955r8vYEFsjBTbx0w2sI74DRli5672P8Vw1qE4a4cwf4flf%2FyAkHnejMBj9a%2F7ze94n4N%2Btl2mtXBcKopyP47o5MLg5FtTzT%2BIhouqFJMLM6gk4wVBWGyWi5Wj7HszUD6jgtbGwq%2FfQ6Bi3uF2EJ%2ByHhvjFqe8grLGK5pROFWyb9pOsoXWS7T6EnaW2A43aRMsOysy68iCFEFjQ5Hm59HXb4dlMCiEAyESN4bvWyXlCJmOY1L4r%2F%2B1uBvmc6Z9GWcXjt6LR8vU3ftZ4sJzrE10xxw7qYIrqn7ja10KkHDaQvc%2FvqkFcNOkYDFwM6i6GY5QTipieBVoELzwJw%2B%2FA%2Fdrjji91h%2FZZhwEE4lUn%2BirK5QyVv8jYVkb5SM7QVhUiACZB0Cr7l2xOwHQkisJxXE44L24AbSWwJCN1JrPPiSuX7JMVEDStDZ0jruEU68jsaHYYRQDLxomiMP9%2B%2BizMHl0pUfZdvzgXkTM%2FS%2FlhJpoZW3Sxqcy91xhZyY8mqIfg87c8Rd59wVEAAcpUdTACekFA0T1uyUE5WHEEGCsWca4ChXuhvW4Ysv0ZlauDDPysTJBjqkAYd6jhj5uzt8hMAtT%2BTIj0zdjf4W1ydEXNxjCZ1ndF2weUCe6utx5DlOKQ2RIVcykeakOt0zVf%2FSyg4CqY8NmqLW%2FOZ5aqoDYtGw%2BS0HJzDLs81C3vugLL3fjOje5CcT%2FN7aIZ9jo0ySSKwV2YCQn9xzaSS9ghjXVqyJJX4ZTJaLX6Eijpik0y02qZSUwVSRZmLuFCU0AFmQ6BNX2zNNKaeV37k4&X-Amz-Signature=02798cbc457564f793b424b2aba9c287e6e174cf48173eb67aa6a9620b16886f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

