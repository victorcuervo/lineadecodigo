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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJ6E6D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIT60zriYtpw3CaTXK%2ByIGoLKjXAfBFgJVzeF1S16XfgIhAPwEwuQJDhInH7eahLVDAp2DLoQonLJKQOBLsT1rBaayKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcAUpQkVzdS0pKpPwq3AOMlaB5fTHMdWOlEwM0aNOA1OZCyZHI7eWW8a67G1EyH4bVDnV%2FA17QCBJdUnmwObURVgHVr%2Bnwb%2FNt%2BeDd7Vda%2B%2BUK%2BMGVF7%2B%2F52CwK5vYyjftoDC68sem%2FBGgk0oV4XPWo4YBLnrt00v8FbxpctzwzawhfpurnwmXjiLTUsaD%2FXmbk4WomC08Yl%2FLFzPXhX12V%2FRmwBnRTuGFKjYD3IBjKOYHrwfyk%2FL8q4VypZ0lEUi5uGbu5SMQ405Kos1pk4w8wouAfdkLkG4FaHDQMmcG9G5OkyOaPkGczTgMpl0I6g3IgBfINdqdwr8edfH3hv07KOMfc3CnW4IyYh%2Fckq0bRGoedpZZ7H8uzN5jHW%2FWhBsEldGn9XE3HPI296HKa6o08ItcB3OmmohNZBlvMBIOM73KR6iyQ5%2FzjpZvjrhbsEqcpJrZe5k61LcxRDTL58cWkxf3bwUwv8F2ypbQ7mWzV2F9nTzjB3CU4UvM97J7aSnrrb8BMu2ZdE4w2Y%2BTIDKTFYKnYzVUv%2Bkl3L1c%2F%2FSiIvh6ZDbNMS2sRDRR3kavZUZOZpyd3cnEGt3r8AMKOcm2yLNJp0Ug6bk6xLgWZylhVEh103DT9w0vVugpIshyXetLRtiUmL2O9K5VWTC0xN%2FJBjqkAY%2Bowp%2F%2FQURJLdr%2BY4gfOIoB0QVJnHimFkL13pL8r2nPVVkVZ1mht7FvTF56OUahgRynI69o608lIFy%2BKAmM%2BVr2VKLnM%2By9QIYDW%2Fiu%2FYtQvVba0zUGHni6xPaz0CByj0FlJaHLigdY0lvIn%2Fy%2FAWQzmaDYIJmQOYXNbcQ%2FnpQVviIWQFXiMtbnM8c2ZDLGm%2BQK%2F%2BUKx%2FwfbvmW%2BAq41VrioVTE&X-Amz-Signature=a504fb6d7008b2a75193ab43007e65abcc140b444bb736801bb6d70a55526f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

