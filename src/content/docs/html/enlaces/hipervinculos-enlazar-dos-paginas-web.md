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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUPEHN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBeJC3IceS%2BW3tKFjDrmyCxWuY2aX%2BG2gvcrRgeJtKsDAiEA4GVqeBfhelc2u7SMSZoA9fzNDM%2Bqq%2BwG8A7YJscrtFYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBv7NJUuu2SJeIXC4CrcA%2Flv6BJUnjIN6lFs%2FSA3%2BYPzPoaf1S8GsqctlcnCdLsAu50DB6RK55YggBJyQkUc10SD3PKBW5k7R9WXe5usLEytkcja1k5VZE%2FPiwVxvFW4lRM1PR6RiizxNA8MGaraKV4maW262R2eLkYAn3Z4xP6gJAQdZy4TbhJerNaP5xllC3%2FhTsscfUrbFlsHMb7fXb9%2BAItk0MtZP8IhHFlMttgGUJTYr%2Bz0GwjZLggD7resG0nlMMrJx40%2FtuASCj9mujL4EyQABkZZ8odh9aFpCOMsyVzT8VyqYETmMVmllcfVYMDQBdkrZZe%2B4yM0yPy7bOWjdvRw2%2B%2F9eypKcYRrWXmvnT1vGh6OOZbDUtwHrXrlU8H06zn6wMBvKxucheDyOgsaMpAHpvoquFSJ%2BOzmkVB0Q2tXY50BRhTib2Mvmlw5V5AB7lqKIegmvrZwT2KnWHpXcbS4l0FK1v5uHKg%2B8P3mHkOBv%2B1vtM%2F9cdqr1EAPwsX%2BDvEvfisQf%2BgKy5bdjw5kjS%2Bo0X%2FuedcFffiq%2FGe%2B7AS33wddaeg49lXF353f7cYpe7Likv5BuJHpD90LvjNXImnZqvE0OzN8gio%2Fa6WJdGNiDJdeXbLo06s8e7R2cTua0cvNzp73YHi0MKaVw8kGOqUBjQxUSmBPGAyzAlSOYQ3QxjYIFxNEoyk35OBe5%2BYaRI%2BZD93vRbZQtEUCMORlKYjs4SgcdSTGK4FIxKQCI5SE2sdpPds6PXU1l8cX3qua%2F2Jnt8AaGAlpVfZx0%2FQCKz7L7TU5brlOlXnl4%2F7udPmsLtO1T3Ox5Gy%2BmQs2PCWK07yoi0jEkTgp9wNaJpdHlLF0LywJNSPSEoGyn2W7UaZLhRs9swk2&X-Amz-Signature=bf0880bf65f79aafee32f1fa30c1d0ab371167532588f5a3fec644e5f6c95260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

