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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63XCMBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtVAnN%2FvTULfTnpjn4SZHQZp6Bz%2FOEZgz8YwOoBkLmxgIhAIeY87Tk%2F6oGzdeKzKttO8Ump8vtBL6xY25aNWEJJVrhKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiEID84dXpTQtt4k0q3AOc0bT%2FPJrUjeaMgiyD9k36QHT5Civ9L5pRnNROfGC4kkSDJNnyxvPNk8aSanRKZEsVlZGoiUSjh%2FGVFQ%2BbO002CtLZt218D78gp4RWdUC0201ZXnEYrW6aEDRBrrTRVcW6DWci1cywg51DgB7FpvPSpSM9HsMZjiZd7yH%2BzNYiP2qB5hYlDMJAshnkJJ1DJF0A9D7ObQ%2BRN%2BaUp70%2FSflD6TnPgla79KWk%2BJhU6Iu%2FcsbMgS6KEpomE4P1EUdVg2su9LnPsa0nL045eamnSTvvRshX5UIL8QKIbR%2FE2WjIw1eX2XQ3%2BmcYzyVMdUKPaMgN0Sk3Q7me6GH9w7t3lT4HsLH5U%2FDd2fK%2FqgEWsijOSaRM8Kqm9wjY6w5Ca0Ywc01C4W4s6zTpggJufvXhk7CrmiHQumVJzdB4%2BBqNNsAL%2BkhjMLIiLtRyJxX06UbLysEhgCLpeZ8SL7%2F20qQ6pmrCdRO7o%2FKCAazLoaNHl8zsDcvZdM6E8Hp1eh49fes2m82mHqdxQWP88bU9BQIpHc5oe4jpbzhQ8%2F7DGtj305a3a8RfDgInWgCWEXJkdcO%2BYK3qPXRrMXDOoZsZfry%2BTykmFaM5h%2FIH%2BPJCiFmsHVgUoRD8Is19Bux3fd6TzzD8rd7JBjqkAWcQWGrEqx4xI%2FCTozuVWy73ysqQuCaAkZ%2BVQrxMAiFOEhpHnt949c%2BqRzeQRAtNnrU%2FsQIAZa1Fd2Smg5%2Flv2bgtShQlRWYos7ZbJB1QMtImIoBNqT5w9KLDRdPOTJwj9hrg0VtMs1W9aMCVD%2BDmt%2Bs8LHQbDan32wl%2FbISnmIHAJJYziZ8J1ShkodDogPESQr3UVhU7IbxKkjWllWj6ApnejiZ&X-Amz-Signature=47ef3df899e56b5ace669a9e2e89ed66a191832412afc79e3369b801a7b2965c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

