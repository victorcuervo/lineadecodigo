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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LABZY3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlMOtNbYXybxQUIkaJo%2Bmw%2FTpQ3w9IrhKoX2x0QElCcAIgVw7bliNsJfdO%2BUKOdC6R5T5wP4A5ctQr6ViAujWTUn8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCHBdBaNqR1pSmN2yrcA6cLHWV8o39HccS%2BDyCBGpfKivzyfMHdIZnWTnsdOfwJ3MOF1EGcwFV4EmHHZksAKM%2FqDGawJnmeppPfk9MupTVoCFjmIx9Io0986NPkHvfQPhjHWOt5MoH33%2FvN4BMT1uDV82HQN8xjo1HOZ1714Rqv39sMh0EJPw%2F6WrvDywqmpm%2BmzuyXFfjIEaGjJmsqzbz7Osk7xWr4Pln14x0ICY9On1a2zGxxY%2Fu4wsqCR0cDhv0caHdhBFWZBSz5newOKk6niBF84F1T2LWqqrLzi4abn4oajBR1TNGFoXkjuUMbFFwGT6b7o%2BL3Kg3mDiWglPg2zAg0apnzu3wHGEC6yDecs88vclnjqA6UhFeRC8GylBa3F1MEe0C%2BzJWiLHpb3YUO04ZlCuCCnHIlVHB9DRQFFRi2h%2F3HcJOATTI6xUXZr2VnXB2B9Z2IFl9A290IpA6rbt3ksDUj9SndKm0UT%2B%2FX%2BfO%2BMd5lbf5mKtZR0rCr6XtXjZIIqek3LBqlsbSAgN%2Br82nwApQIPzDRq4XLuiA5ndhA90V3WPAQbT%2BCeK7wmLOn8UZOu8uHCdLsXT9shFufrMI%2FgmRRdjs4b9bLVm2v4IRNnrKTw%2FJzX1lKSvoxzRcfJGeKsNIXXG9XMLO02ckGOqUBZ%2Bg0k5id00Sz7uNdptGeCu9cDkWQa7s%2Bguq8QvJmMgJpIUCDbllgcWc3cJvqDxH5GOQK4qZMh4oGdwooQ855HzcnJEGm%2FBrO%2Bvlo2OS9hnRH6LsHxO9Y4Eh7SE0e2K4mkg5Msw50oVJJKlTB6eR9dOeByFYKd5D7ccvwU5BszmchBv3%2F5FciC%2F0smdWi9WfiWSSe8dKAF0%2FEqpvrTtPCg030QRO4&X-Amz-Signature=53a356027a14a4f81e7bd3d9d1381634d0f10f9cf6d146aef78ee832e285e247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

