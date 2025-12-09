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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IEGUKX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpfrCPJPvbhj2W5jRC3je8w9pXewslVeoG8b8qgL7UVAiEAl7tRHFIG%2BLdZhthmlm6ixSyCdVtVLbbcXXnr9wXRYLYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa%2F0tzvZMLl%2FmLs1ircAwLiL9hqlnBFvFUTJybxYSrhtSYA20eyCLKMx0LygF2CrMxb%2BpvgZWJZM2iEzhLKfHmPZ%2FIidqGT698l8fhaenJ1CM%2BWnkDLXEYXfuqm%2BjZb57%2F4DAi6lTguM3q%2FTrG9PbFixDNPL%2FTQphIX6g%2Fy5LvYjdHOSLG1%2FQ82N1cKNYTC6%2FG4%2FHuTiXGprBO8Li9WP7jAMv%2FwIFuLIPqkXTqNDI3iYKct0HJ6lAKCvYpGrlFy31MxxxAXPRTDXbr1ELVADR8L6LCpbIm7m7%2B%2F1TuCSFwqPyOiPy8rxn2g7uspAGmS9q3sh%2BC2pvKqJ5ww5hy3cgz%2FfbN6tt4XlX7WZN9R8qWxhAGWII0VSfhpu%2FGYdiw0bXYEi9yZqdXroQqyu%2BWGoJlYU0Az9LzdFyWfHGURPWwBZNyCRJJbg8dcr8R1LgeOiU1QeoJF8NJlNAU4SY%2FcZoL1tUB4Qcpetb0naBHnv%2BFeAHpxVNghrKGopgJ7TWCIWc9pc%2BdT8vE%2BTndffMZEFlzL3B0BvGXxpzdpsFGR6%2BO4GH5Pg%2FdWR9WIi7QVJJpUat%2FBZxvOj9TDfEM0OqVlErDawN4WcXLHg1Ql9W4UiRKKAGpkZhxRzqqSfQofysU4OXCds0JuWcaBS8J4MNbE38kGOqUBO0krOj1SyySuzB7U6U0Iy766jYdP%2BBmex4%2BZ6XAibqsDZ8pTLBCMs7GqkOS2DOn0HKvu4V1v0wNCXiUOQhEqMreRRZs1oSx7jq4BnCPm72g9j2kudX6Ud2%2Bmjer1gI7lkyHF3Z4lRYvF5%2FrLYg4E2Go1SITCPuMZTaLnxqVuhhqRUhbyu0FoWVQsroRH22MGDJF6Vr9amOST6MyD0543mZxBJ95n&X-Amz-Signature=9605e2a0ff36a1a357af93058a5e54bed53c1814238a5f53c1403ba8409b4f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

