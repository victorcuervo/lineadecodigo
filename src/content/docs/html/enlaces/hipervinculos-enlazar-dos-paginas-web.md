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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3FVZCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAII8i5AWNhr1lhWGUuiIx7XJwfrTICBmbE%2F5myU%2Bqq0AiEAsvBUj29C3p%2B%2BSClshVq4JfAPzBuwpTEGy3WIuyzfqYUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM1LXP2xa0mKO094syrcA%2FmNyy3g0I0atjrKaWcyHepYCGQ5udgJKxG31jAub4DeKZ6zNw5VYHP8SMMzmGqZUYJXBHrec3xZ8%2B0Vj9uOhNT8d204US%2BbkHcm4pbhyXFSKTfgKKI6ToxAfRlhMIASBUtTHI5f1%2BswP6hC8wMa%2FeOYdrp4919S1zXCC0MJoh5I%2BYDRZj5CqqGRfjF7g8sMSrulQKPJikjn9ywKYiE6JsPv%2FDrF%2BdBQadS4AO7upeMBFlKJr0mHlBP5RGbTDXmQwjUWQnl2j8LuHHIUwDlB7QrCjcQI6aBEfwlvy8lAa0DdfgleE6hiNpf25%2FM5pEaviIq2fZC0ZtvPfKuB5ivlCVxy9RY0JvN3WU2wYwNd%2BeDonGrrSVrWFrcCwijXIzt%2FcYNAsI2zuG4vfx9v4c1fdHJ73H214aqlAYSP0RdJQQcTPRyb5vZ4ylmKnhi%2FW2TrwOVnAfcQif4OeP%2F7MfP9bC8GdzK7%2F52wb4Jr0cZneRgnfipl5hNxqdEIEhoplJvsLa1WaMKhl8%2BJMXaT6ZtY%2Bi1XE9yWLNfGqDUj%2B3hFeCKp1xCfxWn6A%2BgpRx8zZ0oYovsHzF30ChzfQi3ec6y%2Fx%2F2oS5dl7nL1vFD0TaWr3wQR%2FcP5kL8a%2F5%2FUtH3fMP%2FIxckGOqUB2y1XpnwmUx2odWYLU%2B8WdgL%2FSrm0prfSUHJ3HzJ6IBCC0nG66tP5yAKSmjExFzLM82qohDELvbld8CYu15bHPmm59LD4snZDKCsDVp8sei40%2FFuSUPsAvhD%2BNL97tO4C%2Fx2xgBqgaFzZ5LsmXzewvJ4ganjEvQeQ6gSiOTXAQ%2F4T6WbDfmGqxmDTw%2BRHvb4Zyr2HSlQTiQRruO5Uhrgx9pBD5%2BVq&X-Amz-Signature=5fcb511fc04a0f998165caecdd6b5bb52558e3c495c383795770bacbb3482de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

