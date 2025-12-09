---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QWHWAIS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMIniwaq%2FYgGRSKIy7VsCam8UoFB9BF4j7qhYWJZQNMAiEAmngK6FmdyXrJPDqdQJqTSBv9U%2Ba4yOVhPO9mF9c9v1oqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCj4VzrrhQRrknIoxyrcA0ht%2Bwoaj7cJYJmrFryd7U%2FVZ8lcIHaNuJrARDBdlfXKw3mbMqxFOHsXeo7xsmcRuwqQX8X%2BBL%2FGVNdd55euVCZexC%2Byecm8eUgXZj9DZtFGugeJy4dWZ6LrO2mQeD%2BE%2BCmzWAaa%2F1k0Fc2XYp%2BRuB09ylv5Ok1mCyd4nU2N%2FkzjH5iivDS40mf5MlX9r9VEHEEAfvzhZ5PHkY%2BgCVx6XXyrBbPPfimbuel2cB7yhFOSU9T%2BYYthlqvWkmKKrTOmyjQsdzJKD5trQfS%2BGCwdKFKIUIXYGo4aqYHjANy2gKrz52DSFBs3q0t3HnUBB14VDUVJOyP6aothjxu2uMOI9il6g9hrEBN%2FSRMsRIBhPTygdefpwV5Cno62h49uTMP4pov8u%2FoxmwieBWqjVPvBO5sU8UgYiMOBe7p%2BeIplIu9GimrORvSXpxDwPQy6gLpk3q7r%2B8VrqHb6jRcgQzKv4wL5GxzW5lAP6V0%2FGEqXh1oIg8ZsBmT12QCzV4SW0zMoecEkUUqrgfVKBBs7BzV1avs3WUz3SGgcyUrboWZR6xAfUGSHfPXCiL8HUX3%2F447RkLH%2F8lQ8RLIn9tkC%2FPMO7S9Z5uNMSwD%2BS0NOPXaH2EgrdjovfROiLXHVhpGJMIfE4skGOqUBucX9YKRM5ZECXHSx%2Bb243ua2wUdqE6JZQCPFodzq%2FTUOZhFqfI5QcQi%2BLCYMZLo%2FJnaD94g7jTc7bktRBx2BkJgD7yjSOhBN9gYxOqJBzjN5IYJEztF61Jp2To0d4bCksU3SRiNNo43mQsZcERy3xgAD%2Fx74qpKPF7Bik3JMWj2WCzD3uh1A093KtfuztTcT%2B6HdG0UCIRRfQQ6HN0WJ1bQdpRtr&X-Amz-Signature=2244000f4cedf49a116ca8255f229850bf0696dda93da96ee92b4efb3abe89fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

