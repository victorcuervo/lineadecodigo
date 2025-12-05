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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6VVPCU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUF5h%2BuIKQm5cbYbP4pYcORgPGsFfiZcLSrLgktsJdQIgXBkceDc2ZSYvjlG8PmmztQXZ3BqQ7QdmQ4poxr5ZoVkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDH4QC0YL%2B%2BWvCCv%2FcCrcA6%2Bqn3SAQcOjGpenXtboa2T7CBVkEbkz2FX%2FOqejro7Xjmo%2BikCskvRn0Nk31x3h8Beck3eKMLVXcJr4gp7v9JKiv9axlt1TbA%2FFXYTUoC4uK32CrGVvuzSy6T22qFJwM98A%2BYO5e2nj8WSNqD7yy9xlKy4mA5BgwkC6zWwudS15DuapHLciwzPMxPIBxpX7RuZrhNR8Cg7ML%2BI8jG2NQm7dLViq9vX1P0BnNaHkPvwX3ClqxRjp4cdT88LlEi8QQYmTlp3aV1hP%2FPS2n6jmlta35KPBxmb0lLpvWrHazfHTPzU%2BzD0NQ2IEQBHrfe8VxOoO9YGe3LqCNUeXelWgU7ERY0LvhemeG49%2BmXnG9SHPlcVcRdS13kpWfW3G0O%2FJAr%2FWqX0K%2FyuBQaoEy%2Fu7gf%2FeGM3WlpQLalaW2OT4fFm5bOZG2qnt6y%2Bhp6BPUgKh2q68fFAPgU%2FLrbOG0fMk8Wlwwsg0Z%2BxcyU6gRzQ7lLOnBoTIw5q%2BiuYjZUJsSUx8KOdkxb9dOdyJShBBkI7k3EdOPQ8VTDHMlNF3hN9%2BD8UcqR9Ll2pbLDUjquV6VbqczKql2pGZz097RckDgA9SliYk2HAI9mDzIu8vH18fhvk49BdfyJRGdNU81TbIMLOoyskGOqUBeYvtyg%2B81u6JRO5TgyVuvhwBu%2BP9WjgqN0SBFgk%2FCkMafr%2FRkTbLvQvLjCXwBaE3BoXn32a3d5RG%2FHo5xOtTrvFal62j0V3CwfmOWBBApRGZN5ETiYKNEcdPxTAo094dYIu9mLzxZQkNBT12nUUFalIuuhe6oLuG%2FEqCAOvuv5rK%2BmdAGUoqawJ5DawVHvrj8%2BxRU%2Fy6CzcfP%2FiQuJSjVUBedIuJ&X-Amz-Signature=155585c05f560d30046bedc2919a9a4af9cfdb6a916c3049c314201d3f684ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

