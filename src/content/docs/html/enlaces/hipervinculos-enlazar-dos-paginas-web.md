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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DSFAPWC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtL6RBdghvqwZTFO8oEOf5VMDZl95kKZHrfp6LX6RVRwIhALaKbnkE50PJ8kqcCTWYAFUyWptcSLF2JLZ%2BJOuLqXf3KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyonJ09%2FmwjvuQ9Usq3APSSZ5lO5vcnafDriCct1TOznprFdp441gkanKjWjXJFKuTnOq4coiS2hMVw7f4c33QWCiY7jJr9oiNthP9aZMd9vR3%2FW2vV4WHekDsLxDFRNheHXlxOHSliPE0YIvqeB6rdEDAmQp0zeTMqjAw%2FMHDh%2FCVT8cLrxZyu1uG1TzC4F2k0hIzKZD1R3JoZ%2FArULkzhBQNhjzKcfjyMHcQZ2bz3H1t5dPQMLwIDgv2cN8q7dR0yXh7jvzwIibGDjuyHd7dxMouzy2WftXfbyyhRHV10WgeeaJ52WcGv4PQjDEmGwX%2Bh3n77rbuMnpqTn4rEH7xj3tjS7IBzjH3gFJUSQ70YHcy28miCtJ5IP9RUqpr00QsaXxyk7OptLEqdEfSaBMOujLGckmgF5f6W4N7QBxbpyHOnkLxCOXZ%2F16LfoOjLKsX8Y9rsxangUlewe%2F%2F0kIutHwrrJ%2BnFpnKkJFeslAoKpQda3%2FC%2FVxoptMNVwOIdko27Ax%2FHsiDeNO2W3l7e2wiR84l%2FzqWbJidexyYNGBlpguZH9XzhtWebg3ox%2FmvVblO1iIEwlI2g%2BksmdF497mJwc4oTN2P4HY6w0ljOXiJcSayq3kz96TN2De159xd%2FsYpIjC44Vc0aQnNpDCF7dnJBjqkASapneW%2BlhPobg%2BUQ7FMvbNxEX0v%2Bsg4t4aIfMRr6oaFWVU6h3hwHnlbBi2bzy6L5v94SboSMpscfXJhSP3405BTU91qyi63C1YQ8tqh6lxygVbs6eJTwo1caClCGWWu%2BgAuVZiecCxoduPl26q4wJF7pfcrwhwEy0fx%2FlY1luaiH06eJPkRIX6%2BX%2Bqi6586xJjLucCIsEnjmubm8a0sghm2chgp&X-Amz-Signature=82719da05bc5bacf39bcd4f16cd409797ba6df21101e798c9f003850fdc346bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

