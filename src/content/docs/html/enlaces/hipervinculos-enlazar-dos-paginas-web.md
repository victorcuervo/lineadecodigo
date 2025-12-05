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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJIHD25%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrSVYbT7%2FXYyiXyQgjGpy45ygoXWGTG5zBxqxkk6LVgIhANU5bB0cOkdDQ3GIUhahVsLrKqZ0%2FOi7b4oOkYXMMM1jKv8DCGAQABoMNjM3NDIzMTgzODA1IgyxU4MnuggMma6HhXgq3APm3ZKsNkDvCjJ3pwuCUVB3UkP68D3Z46y7oCOGDYkqffNhnACB7m4Nz%2F7Nfktdb1VaISb2Z4%2F5Mt%2BLiwSe3D9Wx%2F1%2ByLfciN%2FRKN8red11nAcX9BZ6tt9Ge1Pw6TjVBLxU6czTx3rF6B0nNEWqItUhVyY9qHHtBpSjjagOOm%2F0TmZ8ft6%2BLeEJ6a7ImolCBhLfp%2BCb1TrNitBkKqiOTYYBEFu9BvBUQKTr7g3pjQtW4MraVwaZGj59McPn%2Fljh900%2BNbGQBr5k5WVGOm6bkAIuyjA6Jmy4sw3XajX6ycdoOgstHuyHp0s3AaZF0gSGPUVEM8cLtCc3ZOXeY%2FqMVfYGPW93tIb7hKbiK0PdkrIHHNTIjZ5C4BvVyE8cybATPCQKnQj20ZUCsYQtFqGHipru%2BvdwOb8M49teuK471VzHyJ2s94JVw8FtjqpE5y%2FPZtpVFQUt5Tl%2BFmib7YExYKIGty0utPIsJz4UYTBbUPAfR20%2BmtX8snrAa2BGBcWGGzkaewtw1hRyZlNhp5wWaO77IqpVK6crP5qtEBRmAjIKsMvrzctP8Imda4f%2FcrZcjVL8t7srL6Pl%2FrN2lUon51jdmDY7IU5Fp3OCXAP2fPSBQBvlT6dJJoOJm3fOQzC38MvJBjqkAemIWdJyEOvfNOimYC543hWQwALBF1VBKufST8pcl0KInjHQsTCilE%2FaSRfuzs7gxSt0PkfsgihYjav8mxX%2BSrEBTLDe5hGU4BR3TGoQMTW2p2Bfy80TdUn1fX2ESedU1qDNvW3CS2GEeVyE0JDXW8lOUYZqz3iLHqHE4bNjg6%2FjQWEud43z0jYF%2ByIcG6LEM971HYBYGgvGBHAoR%2FMjf9X658UV&X-Amz-Signature=ba413a7c65d8307d89aa4d878d438cb3d15a34e7e35ef76eda1efa4b0e3667a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

