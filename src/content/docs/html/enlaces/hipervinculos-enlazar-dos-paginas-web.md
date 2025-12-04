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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWAD3WR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEpTxQRhWsa0LJ7ds%2Bh5DrD2aPyXd9x8K5T6NwQouLv7AiEAgmy0v6AjYzb2OKIWuWUxIUgvmUH1ULN40hRmvAc5PYwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGpbwYSwk4sLl3udpSrcAyXZklSj3wsPqqElBhwCO9YkPuFlMxDXPZYYjEJxRVynZhBSVPGGEuTbNC7mzcWBwP6Zv3Z1RaHnRj8kPgKoaRvT8NfyMBNynpqrZSP4PavuzyeAviOubIqnm4B0Vfg7Esw4NPMfaIIMHr7A4Vat2Bb4o5NGxUjc3DNouaTbWr0ENIAaxQ8z22gusxNepMk5j1VUOK1HHcBYMS7SThGBRqYU6op%2FlX2KcY%2BTWyDB8UYSdG%2FnxHSu69O%2B%2FkwF3Dv6TEh1SJYiZoJKSpM8AWXPEsbP9YE%2BYPMSB3OHvWdbhh7wKqd3M8%2Fi0%2BTz4dxQXl8A7xATiFbU8oWygd0LeaV2L9kDD5rcTj%2BZtXGbcKxSYFb4ZvkvuyVEFwPrmu%2BEKdzxLHYDoC2xJwbPGBmo0QRYgLKkbzwOwQKw7JLMVeOEljYUXy0WuUB9xZ98HW4%2F7PBkhSfFzLBe2fO%2FTLlhzGx%2FMaGvhyPEc12krqNQgL4WYi5S4Lh%2FldmTPpndGeJvVI1EM75XfMZyCHX0gxuKeW7%2BQ2XfVBjaz6gGdqlA3PUrJzHckxMOQhkujc08C2YLJMnhLvZ1z1EjXuQJFJIk7qLInTartpinOlE8GSu6WthSp3QrRJIUBQTvVANGhMLyMKvKxMkGOqUBb0z%2FjGZ5IXSPa80U3%2FlO9tUsSdZ6LHEXXWPNtZKS9K1WgzlTICBeNKiNYdy%2BStEX3uJnMHfry2zDEHhA7uSNDILVZTqLXkgbKCFDwv2e091t9%2FQ2jLEneR%2FRzrwuHL2OJAFJnsDMAPrgxaUDnz5VdixgH%2BZw2%2FAJ590pj%2Bjd9vyBaIlDnWhh4dkXfVhoWv60Gv8ncsy8W0e9QZ6c7TmVnmB0mxH7&X-Amz-Signature=e0ee0c9547a5a6353dd9869ed01263a57863c5725a99a10d0f9b5d7a0dff2a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

