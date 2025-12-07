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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25KJ74L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUipSfKwK0r0p%2FCAaaTpBBYG5KqlWA9p3gCdq%2FXP3BVAIgeQ04QOwizj4nZX%2FWGNmpdrSsogVX9wvZW3K8Y%2B%2F4II4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6bhJvPZWBgIKoi7ircA%2FO0ShjEEYsMEARX6zV2uVN19MHau%2BdkZXAytB2dhM0x9xBEZ2jnFnGaKLwMbrrMSPZL0TfPPoYlE7EyNkaX4Nqhf54xZ41Zr6Qp8rg5gOV1zrL4ac%2FLVZP9Q5XFHswhfs11J6%2Fw6htxWAQKYkrOVertOMMjwYENi0pcApEvlCB01VUZCLKFzwcygz1gKsbdd06nZYlldv76dIGar%2FFTiFwJ2dfqksoVyJRUn%2FdU6NBV3vx2qY8tlyA%2FiYv82NIZhZr7%2BdmH2RdZaj8rTW40sDLAyWTeZOyobOxcs5M3LL5b9MgqMFe1d3kEixOj37sd%2B1cuYBpO6hHMo47HWcsbT4KmwTQYmcfDt%2BLsPHEwvRIHjoppmvSnXi57CB2gtuLOFEm5CmOvxRehHSEjvb4%2FrehpI5EL1L7faWb%2FmUrLRx%2FlcqaNxFl0AmPPHO052LiSDsH233DinwpCDmf%2FZuQbCijEcUOeFQZpKRODDZXrbyPkQf66nHK%2BSrnZH7VJBq99l6y2R6dR%2FTgSUw3L%2Fbjs45PD%2F1eUf%2Bra1Q38%2FgDjuhZIo4pF88dx6i2WfGKzcgrr74dXLC%2B3gdjnNftepIILJ68lzzH3iiV7lGdrA%2FympTNqWO%2BJ2TiWOV9kjL2EMLWa1ckGOqUBO%2FTC%2Fs2QAvje0aMlC%2Bw7Ut8QF1RNjI6q7QX7VNwu5cjhI6uIa9rIq34yb50KN5NSGueBZNxW1QE01jvXl5yp9zvUPuHeSwghapV8METyAXq8f%2BUL1oQo8DSMaPA5LJb%2BTOZ8l%2FlnP2FBWBhI6RiI6voeybGu%2FydfqCUtBy9b%2BV%2FadhhOlX1B0QhFdK2OTAMENir0yFV4LKpAN0mlx8gOq55KI3Zo&X-Amz-Signature=7d14c76d166a2d719930ae30d561417b12907b9d96f928c7867c3d6925b9d018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

