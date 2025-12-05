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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRWF2LX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyp91dQrSgH%2FFGB2Q0C6fACwV4%2BnNTdemxtzDpFAgy2AiEA9vAd3nMh901VdyG7IZHm9iw32P7B%2F736KFvjckwHV3cq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCRUr5ZmHahghtuWkyrcA%2FaHamZE73LSgbIs77NPwRl7XtmRKYybR%2Fw4TvtOS1vJnNx9H9gnzkPR9A8%2BCF4FLZGYOeJbH5bdhQ7wjTqcH6Xx5gWVXlDSxRwk0zpj5ehQbDRfuPZLS%2FWsMxDkBgDGqItrFB9nxRZmeBh2vuG83k5JxusuJs0Rg%2BOYvEsYwlA%2FuJv8JLx5B9FwLlwxAHK%2B7SgjTVmWrVwX7QotlnppE6n%2FamjzKb6xq6TJxOL9G50cjKjd6f84U4N4tWdC7J2d1Vu%2B9d5KGucmngM91PjsXCKTub%2BFAr5wBKnMZt5hvqc%2FJNBBV11OuSIzFBo0nEw7aZl1WseWQoaKFcJwBH3JuNbefhwpMVILH1QT2PMZiBNiYr2VJP4wVRGtrGDIXNEPQegyhojU8RYjaLiGgO4d53TfnqxWloM6nI%2Fs%2FnaTO0W7PhTomCGjPbLI6N%2FKXmz15foq4lqr5YgwjsrISpUbprQ6oktkKEOswF3hoKyhCkqjQsFTSCTTKYXmWv5ylIotf0NqMOxYNuco66ljjM2%2Bi6yIiqGILRjh6nXqWwL8q%2F9r53XgPinlTXoh6yEQvc91xz%2B%2F%2FmM0HcOZhTKArsgH632hufGRQ9CbMDno508UU7EYXXl%2FCf%2B%2Fu%2FBHc6H%2BMNHry8kGOqUB9YIJpLiGstRjuzP%2BEUrrUIHmWRwWvtFGSgDV%2BD%2BSPDNCfhHpUHYnxq8r2Tw6FbmjmKXNDVqfG86bJJxaIMaoQSiMjAgLwmCEFP7yuIeR%2BCIawIdLstVcsB74YkgUpWmQ4TDu4pJ3rJwyrAkSItWMONeU5pK4Jtpr6FPSGYT6kPku%2Bt46r%2FHaVjvMT6DYL7psbtqFm2G2dkKdI%2Br%2FuC511ysxwuGR&X-Amz-Signature=9e3b131e2075a7d8b00f2fe33eb0351b52cfd3a4804e25b0f25f7c730caa2283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

