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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CPWVMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqER7l5p03AothdR%2BOJ66yVju0ZqsCkOssZOqXmrgbBQIhAJNDDMEgED%2FA0%2BfpHj3sDHocSYKL9SpBmE3haNUSmrhSKv8DCG8QABoMNjM3NDIzMTgzODA1Igzd4MnYLg%2BhJ9S8rJ8q3APLC%2BX1shLF%2BuVq9DSm%2FASZBWMm9RuDpje8cdMYQKFD%2Bdds3zOmUD%2FIHBv3E3vEHL8Hgi%2B%2BcM7%2B4Er5AAouUTnmBJxnv586FEirpddgTRm0BHIi7HdScusNBs4zanc0gh%2B5NM9dddiO9rttdxGcKeQaOAhshJjZrg51bRIYkz1acRlIxS%2BpJdBctbVrgzEB8NG%2FxXAxmiAEzoCMSnUVrmUFNG4C9MKn7cFk9wUxWRSzwiGYr9oKkLCQzTeBHcnB3SiB5MQ5JDt5vSm%2Fd3i%2B6%2FPGl9%2BEixp%2Blj9axyZxbvJw8g4vTAEd1XNSbuv6Vdm%2FFZL%2Bb2ND7aTdHvGOHu%2FXo%2FcRgd6dNnut0lGLSu3vjj0PB61Yckmxj1R4HchAEstv9PFF0paSVCW2yNcKnSVxImpoo5iANm6oKTYxcSKR0mKn0vLGgVJ9I5lwS8gHMGobvxPzQ3iR%2B0DveuqJZTNpuDn%2BcbaIQvVnZwuPmyAJJ%2Fj3oyChnOuOgVi2ti5yPNgLpaOMq4I%2BFS0RxomMu%2BD%2BQ2jr0ARv9ESgKNNjR9xi98o8dJh%2FearYLr5aQ%2FzDOTOpKjvqcR2NX5zntp37aDGwvLa7CMWNVo4Fkv27GaYGmdND0q4P6GuZdb1tP%2BHoXzCV%2Fc7JBjqkAbQUU38hsN9fL%2FQEb3TbzTIT%2BxOD1WxXEj0G3bhhYSG2sLIugC0Qwth0jazF3wI9zbcCDPFpnNGhR6LQhzl06FggcRti74yI44gqFZc5H3lYYZff%2FEbiQswzHZHKxBPVroUhKi4d%2FDaflg0lpLTAIi%2Bf7hPPinBINMxfXqISn1GMfhyW3d4JcomHEl649PzNCVW12f4I%2FGExCQO%2Fdzmxi3pMHr%2BT&X-Amz-Signature=a6e35d8057a68c70e612e29126a9a26f40258deadc92ca238a08c45a3518c7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

