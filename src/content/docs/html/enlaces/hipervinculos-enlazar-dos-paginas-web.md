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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AIBWFO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCHN2t%2FGIeLur%2F8mgyxR762LziNcm7lFB2lT6F1orkaQQIhAKjEv4PDHr9eJbSdgbE0lJPBFOeAhSvERmbMwiGTN0yMKv8DCD8QABoMNjM3NDIzMTgzODA1Igz0rwyOnWCqh74sExoq3ANQW%2FoKaJrPdIzhPf7xO80a4%2B30gHaJ3DdjWb2C9sZ0xlx7MJUUCn7fWhubVRcGhA8Qei9XlcCcdkSn6Bs%2BYxS5cI7yXWZSTdWGGYdz6MLbtKYtpZZmu1OPdLBX7qzhpRJ86pWha%2BG419EWsOclFHjbbvq7IUCh51UIlm%2FwnxZrWuTN1FXJUEBKrS0fGII7HnmQowOuuusBUu4S4jnwtlCA7u7L%2Bv5Tw3tr7%2BqhG63lLkS9KhT59kPT9Quxm7LFpoYTaKYrRxRVHd3TJwQGxAO5%2BNw%2FflIQeGR7TW67eljSLqX5o2dLn8hvvLPhQUjUQwf1hpve%2FITM7Q0W3GK4a1%2BPGNHMpfLtqOQoBO5kIme6nZR1HLNz3JnYzLGKH1pOo8sJoMYwmMLguSGN2zOv%2FW0LeYYJZblsyqCzkRrN9dtrIwnm5saOTvuwwsy7T%2FMHmeEYlI65a8Y%2BkrHhKAKZf%2BZlHPWRx4%2Boh%2BxGYvPKGXs4ninN1Cq%2BCWqakdcvdByJ%2F%2B5LJdCWMGPAF4iE3V3syvZQfzu5I6%2FMLStxEqOIYbg7Wi0iFqcKioiVnqBSHHaMCnooJaIawX523VO1OrEyWuNi13YUz3pi2dAwOwY6Q5AtU9ohi0Cfho8v99LvcDD0ysTJBjqkAYI4fnALwMOYdZA2xGHeUtwY8957IWIyKUt8hksISEYCugkPtDGYPGbFSKrRDAjRoY0beJuKfHl9YtnWTP6jfv3uUMuFJ%2Fn3WT1Q8yzL97dssIRvOalc%2FZJsKV9%2FgR6IZL%2FztE5S9jIZFXQBLpfb%2FX2t9SC2lqCa9q39aAdRh5m%2Fjp0iQY8EQp%2F2B04Y%2F5aocZzRQDzl2MLzmRrb8jTVubHt8%2B06&X-Amz-Signature=6d5985b1cd63b8f664856bd9e51fd2ac6524a06ad3f0492fbf18d0a12bc61190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

