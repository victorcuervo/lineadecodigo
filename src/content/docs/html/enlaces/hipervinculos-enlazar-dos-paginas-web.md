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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6K5C3V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3GcR%2BmgNE8b9vh0qAx%2FEwZl9x7i6sR9Df7UfOOPeQIhALmQplJHCRfarEO%2FXNsm%2FcKNw3rTv3oEx%2FqWmQ8NPvsbKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCDhCJF9%2FEVfS1TmYq3AOR9DaOrictl4daBjnvOjxvqsJo4F3zLQrsaWlXx%2BLB02Sa1LfEIPmp2wuE8LMiFRsFhqG7sAps3qaKOEjUc%2BCy5dJZjbjsVmPnNFMhVwkwghTjGv4KSv62yDtkK8Da%2B0mqDMyKikTe%2B1YQVos4mUPBNQD4g%2FDiWnGFzh7J1UB3Fp8nOr58IgAB1METev54af65HZzdILOh2hV3dCIxac7G08xcBKM%2B6JZXwA9M2ljjyvdCy1O6vkAxYBF4BBtl3CWgrHudWxG1cZ0tgLzZ%2BXPcNFMIh1quIplzaCIUH2mfVnvOmycdf4VWQE7mRo%2FVrQEeuQzBjK10oljgbWIWJMrG5REjfM0F98m4Uu%2F6UZNEgKMuVlIg3TYzU0PCxVYfrkyyQ0ueVE4Tp0XcJ3yQl6YYoWMvWRycoXS9Je3Rx0%2BAuhwkWbcUZ5D5vuwWO2pik5PK%2BtGlaHTx9RTfvZnyCFUSX4innKiOZ0eJkZOE06o%2B5d%2F3yRxir797RoEJGk7Ig7SQkgYENcvy297t1EsId854HIx7nioWbuBJ2LWM%2FPU0EhfYgoYffVsIrQXp2MShWvIQabqb9ifwaSLfSt69HxembdSYbWQCZR0yJRFkGmnpIw32KoB7KPcHlFU%2F4DDkvtbJBjqkAftAYjXPi1O2fJGfLq7%2Bt83%2FK7UD4AJ8e7CtO%2F4g2n4w4%2Fr%2BZ8IWlrRd5F1%2BaE3rlWDcPpPSDUfdgkVQNeSnrevFHkqcqaZZXtY49Sm3p42CPe7TQF67DW7dMIjfucWwaznTJpZWXKFgRZbHEYmi3Z8a73Gqnbars3CRwd8Ej4s6cFZtWbOUyuKYph1tbATEzcOepgWFSW7lOB1hY6E0HDiik3%2Bs&X-Amz-Signature=ae518be31ae611f3fb26d92ec1cc74bb683c6ea63b4d7b68d8d1d94eff11282f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

