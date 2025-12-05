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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG2NX2U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeVPaxODePuFNDAi5NrLSaGWEwGWwyqsTKXkkKg677vgIhANBmNvpV4gy%2B38J5oi%2FRBAYB0N4e9Um%2BN6ditBXWMMLfKv8DCE8QABoMNjM3NDIzMTgzODA1IgxLW6xjrdpYSGDhVtQq3AMISpfgCbSC9YnpEoenS8UT3QrP1GZOc85%2FnlV2IsJRJrvXkjwANmB7zMb9eDiln3tCBh%2FxtgCh9ibsY%2B9ak8CSFLM%2F6gxuJaFB%2F7mp5kD2nkfUTaatL6sC84EvD4G9JUnndISWyFL%2F607AdlK6nNopCXXhdxFJEzDijViJReWhlp6QgmrAyGE9z%2FX29Mx1v234edK73OGdDEGa9QCpHw5z7cI5fdFpvUWMSdLktyjHNCI6oFki4XxxiKbSE6rDDikCNe9%2B1r1qwwPsMfDILs40db%2FDKBM39DSBRrPos%2FFaH39%2BeDMS7Eoce4alu8dibe9TbG%2BgFkC%2B8KSckcSnbsXZW6qA%2FDQm5lW1S8u3n92FRAHlyWFWc27ykvl%2BcFj9YOyrowhff5nV2llZWkSUCTL9izVDvlS%2Bcu3I8GU7XArYiUATs256f6TSdY0gbMoV%2BGBzp75%2Bc%2FGgyV%2FOFis%2F4ykK5a0EkBK9Rhg1iEa51ePZACb7wZVe80obY%2B9GB%2FoQHX6Be0W6pZQ82eTTFmxlWjppK%2F2QbnhQHksa20lZWmqL%2BZrqoJ3QYxas2BMbBjqOUfJUsSxNIO8ThdRR6%2FZl4hfD6%2B%2FyJ%2B%2FFhZOBdH3vkzaYH66nFOJENtwm9qGZQzDvjMjJBjqkAT1z%2B3U98Mj9mq8Gakjxp%2FDoZj6BmG7kvQORbKKg4jHHN85Td1eMZ1OKfa%2B%2Fa4%2FwgQbzh6Dt4XH%2F2Fc638SCMCRfLMxmFWTGIQjR5POE39CR%2FsKPoL%2BNhP4mfKZOcQeBk71ZeVuRF1h%2BiRon0PKpV8chwJuqBsM2MVGiNWUPF4LSMUlwcdXJOWXdD7mQdA5xEjgUi%2FbPwqLQYmUzvRE5NYFy0D5S&X-Amz-Signature=ab6138e955b666e60565b15ccde28a6b14c698197ebfafb0d735709ee5e1d112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

