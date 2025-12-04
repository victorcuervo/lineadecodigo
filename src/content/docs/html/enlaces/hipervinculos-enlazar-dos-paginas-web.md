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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIANTKR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDjghHahYhQSUBx9iAeJ85WA2i3oV43bJhxt08gF8HIwQIhAKkXGMywR1DeQ2TJ6B5KBgx5fPKLY3oPGVwZUM8O1uf9Kv8DCD4QABoMNjM3NDIzMTgzODA1Igw8CF7HVUM%2B7j%2FHjkMq3APZS%2FXzb%2FXRQEvRtgCBcTpOVnolcNKgaZdbd3vH2v5ZYlp1tW%2B1eZSY6oPZJNxb7rIfeJCQcTfnw9itwGw8tYKtI4AzRstZGcPgWdWWfb7iloJQ5TJjg96yH2PLYrMbJKcBTysYlrlWGAcvSGiyEwkxTO6gBk8iDshl6uz4jmmZ1A9fW0I8V4DULxhKNUeeIaWEEnneQxjLQYOI%2FVzeXUZSABY%2FvG3DXRNmrKCrPIegGdOh8IKe437AiCthSWw0ACNcUXijsu9P1FpiLh%2BRBYtqDpHOteiG0d8O3lYJ%2Fn9WIL22oiZg9FMpCjUlxhO1AXooek1TLuarC68EiqXAkgCU335g5hZ%2BE80%2BM3%2F0KzZh9cyWjxjSh2%2F87fTnvBqc%2FkdX%2FqZ0kedMd1Gd0yv8sHu3eQIDD%2FrvCrGhyBTeeOTnWejGkkL8R8yE7lxqCOYLWA60JHEGDT%2B%2BZnARGYZSSZgz5y%2BxJQMNM11GgmY66s1Y1xR78bQM%2FbDVNg7gLiObgfb%2FGRykaL90YuezjE%2BJ1UZFaFNGMpwl9zst6fdzBDGD5IXGq8COgsh0R08LlBGvGuJQeK9e7WCJHdMZEbPBzh8kp7xHFH6jHjnecc89s5H1oySgDE4nyLf4yzKmijDcrsTJBjqkAeuAgba%2BEdtMKwrxLrvCqlbMCD6dRkGCpX4XYQq5rtujnrkeiQNemeNTt6bNMChmza8xC8LgIFyk8BuC%2FqtCBLeUmM3PsgAM8FINrBCMPeBM2sqebfJncdAQsQN9R4rz6gvQyyqPiNYLNPFEZR1w0VMK2Xjx6IPPoTT0RDY9%2FbBgKxNvzlFesqcr%2BdfsnOigw4oradIO%2BMz2rmCYrYAYsXRmFMKu&X-Amz-Signature=4c550ab6e58343e91fbb02ca63ab7a2d5877db0cb162199594bd51680b9cc510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

