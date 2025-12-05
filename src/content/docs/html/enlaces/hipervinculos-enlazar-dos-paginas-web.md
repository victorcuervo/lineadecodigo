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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGBGWCR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSbSHYymgIFfGI8GXadWidpwYzt4l%2BsDKtB%2FAwpUlSwIhAMrAFF7mrWKPSP5hjksitytHAE2Sjt6%2F8RzFJ6WQ8GzoKv8DCGAQABoMNjM3NDIzMTgzODA1Igw1cTlYREDj%2Bs3VgLgq3ANe9adT3wjLYiTLQAlPER%2Bbuw4XDyBAFUze%2BHgZhbykKVUKMnx03HP0y3S3Hwg9hDnApNHBcLbJxa74Nt6MzndgnXizHIWyliW64buLDyxGEMlR9zIdhEwrh%2FiK%2BG8xXYwYk5hphal7KiitnwmMaDMIbkmSUac8SwDT84XKseV6cwx4qEAWhWsrYa5xaewEQdBkbZQZRY2y30sG3umdn3E%2BaOZv%2BTmuVhB%2FlOKoAnCP8320lwqm6twK1QDtgS7ur2sGNn3J6aD%2BIiShLFxd1CFysf8tK7Ycq3CYwcU4fq5%2BcPxqaHiUpnTOnYl8t7Xv91j0waTQtCypP14SkWltzSafZ3BgZFz3YkYUNBZv3NOXg0SI%2Fwj3SUX02qtQeA%2B4vDwt1XG0DNPRyPMf1CYHFFjsB%2Fizz3REs1Riui%2Bnt8wPdzPdmJ%2BbqZHrMQy5DMykNojpWLXrZmk81R2oPs7Q2IYqsfJxUqx1wzAKf7IiOLeG5rhVAUKElHRRlfu%2Bjnz2Ug5%2BSB6RkxfxRlL03EuwzD6oaHmaUzGQbTZeMMxogcFCgLQ3ffHzlOUBhGogT2sb7IqFxKdZy0dTmJL5SbO4WhRY%2FLWzujyPMGqBSbhM91vJn2UgQ9Ho97VQrPnZajCe4svJBjqkAbsueA0f%2FlEL01gBGeKgWw6JvPLeDX4CXoMBRp1uWsNKG%2Ba%2F6dTWWhhMw76FmFbM4tgQuLSBJdadyNjprW1ZjYzOll6yFEnEvaS7i4iortyI7yJ5UqFf6LsmPHH3vl6zejlX6kvpczWm9HkOv3RWHFwaVQyBUN6fO8GCDbPi772hpxSK7CaNEBtbXp8t9GX5obEK0Yx0OGb8X4B6LB2bRhRhwNwL&X-Amz-Signature=6bd563b5ce9271749424d49709beb1ffe64c1d618b3b5fdbca994b06d073068b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

