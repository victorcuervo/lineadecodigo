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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMZFMUJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fwd%2FWzAZHddeBpDHAsBQmnBtz67c%2BylEnj7kAJUhfvAiEApRBbth3yZBxd4sjv4mxwUKoSyCwCdsdUQOoT19%2BBhssqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzB5DmIwdlU4BneGCrcA2C1OzIPr9ROC8Iy8sO0cIsSpXz37F2uT68TN7LtgUMGoeirBXhmmMzlxbwbsZmXZaqcJ6jJiFafM1vQRWXIfajS%2FgSkdlCTuetGqDehzKJ4YMukd1XYHpjV92c8V8k74xZTgVsKjs4VXIt8mNC7KzLiVVVjVKnu6II9Kp7tEykY4fsQ%2FU%2Bn4rgfGDhzhvy7I3EjrsPB6s%2FWiTOUq%2FPWo8DirNtFplMOsNY3CCRAbB6n6snJMU8qwv1r4jcBZVkQ2z2KkAgzWNVSpLAScDlB5uoQFSfgBJ%2BV52MlAhxtikAJ7nXizmHLyE5BqQ3BPmBBqbT6nz%2FbXg%2B0rN%2Fjey2iIofraK1jubAdm49nn5irU95NvF1iC%2FkbONNz%2FG0kkJLIMm%2B0ADALSVpHGnAioJV%2Fx2KDrphSzuhkfw0GWAhyycLYdHCV1b0EpEESCMzkR0YM%2BEvjeak0Eb1dlwXCeQEQ4DvfJRQSLZ1BD3qLCALScpqNRtN5B8iqx0TLxJ46JbVQ7tqen9XLs9vVY1ILuqZ%2FEcW0C1nzo1IB2%2Fd93stD2qj2ftHzTKNZQCjUj7lKZkbYBA7tHGXaWZfQ4uvmqYA8j8KlQg0e8urFF6etx7jkKvJhWl7f9ihublKS0RqUMIGk38kGOqUBSFlORJlbb4G31K3Zp5EkkCrTfJEGkRoeCIvdQo5OiZw8X3imPeFw9n8JcS8drSysuZjgsjap%2FJ7755t4Wh8PouseMPhskVxrKx9tMIYD78liDFgknoK%2BmYB%2B8e%2Fs1JLGTXaogaTLghVtk60877taMlLttGV0cuQ4RparXdiizRYNRZ0TLu7fLC2ZpAjzljifgH8jrW4SYqlo%2BrlZcRh1baJJcGuN&X-Amz-Signature=483aaa5e818c47a68745c5a5af8ef72d6edeab8797b271851821bc3e688bd2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

