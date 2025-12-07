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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L34UEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ECOkYXvNZZR%2BN3gtLXxiDbUi1cMlEBFBFD23bVP0MwIhAL9BJ8udCxg7ZmnRzC92O10vCW1sm8mbrp8m3rHdH1o2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbbwaqa4SLlkvxt0q3ANxfx4IEDRFNbZ80zKbnWKlOaLPaGW1zYyqn79V8JBJ0q2r32%2FSdXD9VolppwxssDzlWlw1MeQTkus0bLkfKhtdfLuRPdXEhcMKSmpRoX9HxgGIoZJav6t5DSIu5r1W6TnXMAo4OKVnZruRysktbUzbmt7QhGjTidN%2Bcw8vZmCtGzX3PJR7V1wrP5CC7E7N2m51oQpBvZ5arLRzkHgbT5tWpY1%2FK7EwKK2j4nfvegzchQhm0qkvcNxohEdhU%2BcR8o%2BP5DEFhkX5c%2B%2Fiqg8kqCkODQYpdiaLEMCcXFJ9dJyFVkLOaD2qMSDE7Zk56ur73f%2BqmyOT03B27kenhCa0jFHgmkYF8XAnm%2F0%2BDd8%2F6XscoZy73GdLwCW%2FjGYjxee8Hh%2F0%2BOaAxh8xuG5X%2FYVQjcWk2LXDkTKPypynsj%2BUSIgC%2FCZ2Snzmugx0Lh84Oj8k31A5WMpZMHk8QE4ATh4SVyv5d9CH6wtVE4M9ya1fFDIeugRTsFscAsOAVx%2BE8DZKkZpGx5LRIPn1wStFK2IAZbCRm3qba9g%2B4sz5g%2BtZ3%2BmODvDXZEt7jsuC%2BHO%2B8aa58ASkQnMnC6zCM1Gxac2TfUveNl64bD%2FQKCcj4eXF11lvHocEt2QHJoL346SwGDDL%2FdLJBjqkAUOH7ph1d1eyBf30M6LCTLCHXXQeL2tK5RpYn%2BBPDUi9WLbz%2BqBtL5gWQ7%2BALx7JvLjCQxEyu0ZCaPta8SM6aS%2Bf2APn8lW%2Fo6HMdjAclJGBCyThFYOn8era%2Fx7YGXg5qr7W8Nh9RMCuDoSjkhiXkMxGqu7qM8usDS8rCsgepl0toDP5kA%2B5koffV6mxeAM%2BJ7TgnynSR6q7F6Cx3u06idoLB9n1&X-Amz-Signature=c66ee3e721a018443e8a5db8a9044dd38b327fe26c6ac15f776cebceb58287ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

