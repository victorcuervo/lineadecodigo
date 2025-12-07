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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5JHSIW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnNrqXfR%2FCC9zxWgq%2FMpn3lW0aTeQaIsOjrjNGGRGrMAIhAK31eK81qOKmHPnHj900b6ivzrIpIQqjjXOqLOfUUzhAKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBYlVkUeI59Per4fwq3AN8I52Uaw0x0yjMiVw77Og1Sci5XHHxX5R4IICbo%2Fub%2BOAMs5RR8tidEn3w1Te%2BM7s%2BB1TxgILrY1tGnLpOoKE72RV8UVqllMe1htqPXvrIPXS%2Fo0JbPTJfUXHkgf90e15MBJHTCY4hNjIbVaP1Ol%2FILIzyUWCk1d%2BReuv2%2Bo25E5xFDoT%2Bqb%2F2B1e17du3zbiCIraFH2fPbL6gtwqb8F3XLgvzITGSGidGhlTVEZMF6BPYgLiYDovJ7vNIU7%2BErqZLOqsQqjaybvh2%2BXvJ79FQoxCCHBunRkgmxqyBtZmNhzQx%2FOUc%2FzXJXfCHYSXRMeHDq%2Bfp7kG5XBNKEpKtdmjZwh64k%2FFqs6R4568xR5b3vA80qBReQRJ7n8F%2FcEVrxheBL8d23lsu9OemnTn9TdtnqoySStmSpQrL3QMbYglSv7V9BBA1iwpd4W6sTGtNVgQPs3ZLt7AfZ%2FuB2sbWjiyIkVSjQvzLzW%2B28QNEpSF%2FaVH54Tt9%2FfT5uRRwGSvn7Muo0%2FxkerjL2mTkDJDE7d%2F07J1lS5327hsdlOyjw%2B8u3OfY6n9I%2BQ5mM9%2BOIEK7hx8hVfKrvl8LTjDCkViGUmRr%2F7wI1ot4veOI%2FCq8cjJ%2B%2B%2FoFKD%2BAWU8Y0wb%2FbjCQ%2FtLJBjqkAYWnBkqJMyg%2BBd%2Bc0%2FAU97O9B1UYk%2BCt0967WvqLKtATrTl18auyG3Gb2Szz7EBeAHDjF9UAr5xtLXPszYWOUjfP%2BcPtpsIdAC3o1M4qS1F2f67mZVWag%2BZe2A5oolga%2FLJk0KQEV0xP9sJfvt3q3QdC8%2FFWPOWhQw2dpqoXajbV627RmcQfWCVUyPayNDPQK4EqDLz8oKFPprhH8%2BE2DHWjgMrA&X-Amz-Signature=5c11ee14cf365905929ba80686a6a5aae35f14f59fe84994574cfd160b7635b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

