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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAMMM4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCwsKC3BUD6h0NwHJzsgaaaBrdzh98SEtZaSpCmNYRVkgIhAICDS0ncD7gXSWL4YUVQmPi%2FQnKLGuAvVz99tVIaLdILKv8DCEUQABoMNjM3NDIzMTgzODA1IgzsVzW7oBPa7cHJZ1Qq3AO5oBtsTN6aNHFUmr9COvQs29pKESSHov3QdnWdzvFGeFGA3yK6KWpegCuEZETS%2BkQQtuTOfJJ0rMByuvEkhG3%2BLHTHSyfdUlj1qWBZFcnYzcAKDicGRG0uRrKsNDM1ZVRnqGjkyKNpoXHm0HC5Mi7G9QUzN3Uuf%2BiJeilSj4T5IFlgpynx%2BtGqBfQO%2FB9%2BrBuTypmhExm%2B21LWiC6cNgoyvlpaWGaliktHFThj8eO6v1T50imPzoTJWXAbhuLyN%2BzG%2BVViqquFBJsNLZzFoB2aAhBq5fY%2BS0faYviZlMaduH%2Flnti1sxCntEM2F6zjosIlW%2FeBAeDcCswmzK%2FJ4RNVEpXiLruDZUlKXDjg09RZMYmuLXolK5BjzORPAns7qDMcapV5e6ciouKz%2BbpsLgL1YfG6I5k2O%2BYOhuAtiUNjXpixbQxHHqb9Jvnsi2tS4RzngXqEt58DGgeaBOL5MvUpc6bpv7TQLZmqmNR%2FZK%2FvEQnI78XOTlkHkDmyyllHXFcSxtTMJMBf7tDQ23gOdXad1N96fhTD4YXsA8laDkwu%2BzrwYyLpq%2Bc47bYgISOh1OVMB1HtZt1HzdYur1a2fysuUQcrT7qh82%2Br6A7ondIUvbhrAaeDRAFl0%2BcYRTDX5sXJBjqkAd6kkFJrLaclmnsu0XjeN8zolatw8xWljqCx0e1ei%2FtCLVOaoQxA5eupxDHW2doyZ4M9jltytCAUT%2BDXqMTXMzoLA8jW%2F40418Mc316sHoVencPc6VBgF%2FajDjCw5jM3eci%2F%2FLd9ixXlVGHQMAXrp%2BC58urHNM6SR9eUuTBpmWGNSSEm5gC8eXzYqtqX14BuvQq0AsTG26Rud5a0DIq7UCEJXGOz&X-Amz-Signature=09781a55cc381c041485116dc5fa01a97100d6aa4320a8f42af8612049bc6f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

