---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TX66TBD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDAGe%2Fr4EhUxHrt5oKpU2nWIVFn9x7c4HInb4G0wHx%2B6AIhAP1DPk0gXlYaekUiXMo4oIMmpDE7oYkCBv2z%2BueTT2LTKv8DCDYQABoMNjM3NDIzMTgzODA1Igxx7AEa6rOPwtc%2BYfgq3APwdnK91Cg2QHXyRkldj7pAXuOB8htkNW6mljlob8yeWFYGn5n2BF8cBJtoU77dR7NZ0Juu%2FOkA2308v%2BJQ20zd8kCqggB5psaoC78bjBbw0LdmxuCsWmhoLBFyUddOzyJXXzKoh2e9tlaKxdkGAy%2FB4F%2FdcQtxzCGtE%2Ft9yhBfjmuo%2BJL8Y7sRNCsbeHDm82kjbPP5PkdqYttlSn35J1ctL65w5SY19v3Yi8aZ%2FyE2pGsjEv%2BkYPyC9jVy7FL5PHDWUmuH6X6G7iD44ljA3R1YG8oI9%2BJm%2Fvb7GX0Sllj1itxX3j%2F6QdRZnHaDq9%2Bl3NtZjYGhCr%2F9G%2Bf7ExOiIYbK%2B8rIVa9sR3ywyMgUg%2BvdOlAi56bReF3U8Wytsp70vI%2BVEVHc6wtxh5YnaxHcOWPtioeoANju1IE5ih5stE%2Fxyd8d4k63N8fE9Rp0WFP8S6Aq4Khm5o9fDEuf3h7FlPIGxrHu3S4Ji%2BHIxZVx45d4kn9czO6YjyBsrNTUBqyxnVCbnhdRutPgXKTo0SKNa4Xjc25LPHXvIxz6qZdER6X5%2BWmiFek7%2FvzVhyXjMA5k5fERrPjloVqN%2FmzhWIQepww5Kbc6rT8CrBj5lFkB2wo9nKDyQfdAWovd6X874jDXvcLJBjqkAQa2V7KJ28MYBy1SalFCmA90VH%2BcVZ%2FsORRshoCvwBApd5lxpP5C1%2Fh2CPI%2BALGFzk%2FO9hykRZZhsuj0zwUBlW8RD3TEBIN%2F%2BEYFwA0Jh2tZDRx48mQ%2FIlNe%2BUMLNmDDe2rEt2RZwnWLf0vt0yltT9DPzZRcsXt9IFYq5i7QtD0HTM3cR25D3HoWT9tI6RvaHXPb4XVFkdF0T5OGHWJXwml7mVej&X-Amz-Signature=4a414a70d82d75198ae8b9e3769482acb2a27721742b563392772d6848114805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

