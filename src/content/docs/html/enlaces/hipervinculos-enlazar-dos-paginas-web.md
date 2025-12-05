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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOPEHLO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xJJldv5ebZARqCNOlBjEEDBZZ7J4s%2Bg%2BVNr6izPelgIhAIPKbZG7bnDF6CaX3W4lOMvfbxzX9n2UkSr4oqACNVShKv8DCFoQABoMNjM3NDIzMTgzODA1IgxL%2BJ5GqPdeeIWpoAwq3ANPNkicbDylBUPW4mbvcBpb2%2BXkWZHhXs%2B%2FCaaQohtbKfLDBiYHNCZ9F5r68wSbFMIYrwV8YGO3dlkmcjycZ4vZND%2BSZ2w%2FJHXyB32QkPFtNFjXkHifn8youe8CiJWaVCO%2B4YDDyyYyvIkWO06fD5ExVkPZTAOG4m2e5lUtdJNGcUmmN%2B5PEuMPR1FaqozmpfHUKGl2g2tLKq918fZybsZYDu%2FYqMXxRzfFe%2BMMElIiAD6k2igYQJr56FbyL1J41A9r5llkyxnPBoWtEbA6Xcqe%2Fk894sHZaRut7RHw4ogwGElkib6GrtBbKcfII5S6lX0jPE6mrrorq9vNiXVOyNuCoQP3g8quEDhk%2FSG%2BbqqC%2BQwyD%2BX0gEbAHAmXbo3gn%2FGMQU6DO1vtT0hLYlt4qSm%2F6jreypeXYY67CW1%2F5IjGZcL7s01WZ1gxHMlJG3ltQBAqs78W9fzV3%2BmR3E2jimwBuZuRcPtQ1m2a8WWLKjHsntW0maYWisPd62WNgi4vsVOni%2FZCZyVBLCl3F3yiXQebo9Q9aNhv8G0iz142Y7GNUEfwGnNuxViWI%2Bc1acxy%2BhnejMw1OJz6%2BKZ9I2DCRpVHT39YyOqIVQmyZfncdtsk2Rq8equmNU%2ByLnITPjDxzMrJBjqkAUB%2B0eWm5adKRozwhpBwKrulUnBr7RYyPy9XYfPnFnpWr28zBmNY51GEtntMIyWYdhp9fh5DJ0L%2Bc80%2FULj6zLGZ5pRAordLASro%2BIJWFFbdrAOSRD%2Fklw%2FMfqyYWDqdOx5wSkI8woby5w6qXZAHR66Zufe4qx%2FOotghdfOjG2VJoJ7RcyeARxovLQ6%2BuMENMxtb2KYYzuYYaihY0vnlfVXNy0so&X-Amz-Signature=146a22303199734b6de636067e3e35b64ffa53f4bebdcc8267c5b9b1f0d144ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

