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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUJB745%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2BvhsoeS2CZAxFaJmbey%2BSAFQYGrO59I4t%2FV%2BAhp4XAIgRpAK2FGjp97%2FPWdiDK0tduIXpDNtI9bna4e82Gy5E6AqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfyKrv3qmIDo%2B836ircA%2Fb3L7it5VSbxYSyzvMiHjsUK0RMdHy8O7yHsApi84x2YBWzCZTp8qPrLpSD%2FYdm6PjRiExvHYjqYRfpoxEVADWe0uPapoNnkwN1BbmHzyg8OxbjWoku2BV5rijNCAMUZPW43OxAlJYteeme4CfWOOqVw3Pbn0NyhJ4scSiLSD0pW9gydAMA3jmPWCC2IZYPWvz2rEAXKcwNppw%2F0J%2FTAXwAwEYRsgtBVU54R83ou7Q%2B9s1w5r1iM94r6m0DgtwFK12ArB%2FfXhC4S2UUxYiN%2BXNAw37FhQ0SS5GQlF4KHoGcYFqQi%2FzqNyxUn2WfQsD7ZRS%2BPZMLzLrDZYm6Jno97r9l7RzZsJrEec4Af6O1USw7tNMLutcL1vpjMZHgHbOPgt02dBqlOBxIVONUu4C0BdMsLRLoTjNcp9c0KuXcGvbPZ4kOXlZ4enagMMKS4hh3cGmd5SEMn2DvN4cvYNPNyKWKKXteJnzuR7eFSbWDERYJH9F12ClbcpoLSSHCgWCsyxkqHDjx19iJBFBnurke9oamEtc%2Bocy8oo7qZ7WoI0MWLOXciy66rYHnq4l1b%2FHA6c4httROuUfx9fdWtg1JMjLmF3i%2BG3zVHxiuBuQ7i6bCmtoSMDzQsqMedkVVMNue4skGOqUBhFIJZJ%2FaAari%2B9nvPnLaQhTl7aN%2BH25V5oiGwxJ3URyPwA0gyooaeVZUE7b2CyQ%2Fu3GTivqkX7HpE5%2FeEETpcDYcyf%2BhRmcP%2BzLa6zKPD133dBCuYUm9i6AzS0WR7easCnJZYCuMZKHrdDTZqGmsiTkKTN6yKGw1yDKqzxGe6a%2BdA0yR3eC8YJY7VwPZsjcetG4GeSV6Rv6eeX6DiQybO8ciRb0S&X-Amz-Signature=2fcdcf69d4587e5df32fcbdf428260ab8cbc0dce42b08a0add507825ea42e98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

