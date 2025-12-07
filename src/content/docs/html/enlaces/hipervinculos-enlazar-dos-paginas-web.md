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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJBG3DI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKkBy9Gzlzith7IVidoMgBy0mCSMfDtL4VtGuhqMtzUQIhALTbdLojvk5g7stMAeVelnfWNi7068kcoBXxaFWznfyuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy47kk7RlPdeNfywG4q3ANpfsPedUv93BW4x285e0ePFqBn97Mp2PVkJht8NpVDhPldyfe5lGaa6jbD%2B%2BiKdjo%2BQ1Wh6X%2FP3lK9rXQRqJcZJafS3TPz1a%2BiwS4oipNvPu1eO2UOnqloyUmt3ST08rydFf6Oc5hl3pSPbw%2B9qqt%2FC5uIqXqO14s6KlDMSTt7DHdT2kYIoseQ3kP2rUOV9nLXv6QBqLHgNCD%2Bv44MU06bwLmJJB%2F2i5D6Ww0cIfxxNg7sEr%2BEjJtrSzKkk8RUCR0Hq35ALuAoGbBdVjNP8XWE57Bgj7J9ksFRJCj89RfDCfamUBMkud2uoGMMWy6zXXoDl%2BmnBlmK6we57at3M5Hm7%2FYWqOYU4LYJ%2BiSbJv9tgjUnyfFdGIKQs%2FFfAczHYfQbgv3Xtq6%2Fk%2FBEyUL0TjXGJmwd9wgC2b1VxvlUN9U0crEpXQ%2B7L7%2BPyCdeUGyHPn45w1BJbV%2Furo9ovkTKAwe9tN96qMO66CfCbrqQwPcP%2F9%2B0ApDE1NNKoWbfTBsEdum56b%2F%2BQINuv6I9%2FNZApByQDzOiWLTtTxI%2FDzrXExl%2FUu5Uhh7c9uT0ZUuVqu937DVaaTX2AtR99Ks1abS7Jocha1a51RZZsg7COrDBMNOE3D8Z1jcKLDX0FfDCeDCa%2FdLJBjqkAetjoY64bzySzfghxwL7VgSxR0p8zHX4qoFXoleKnDMqDRz1y6NGooacX7haZmrdjyxggT9iLOAqnJ4mzm8HpANSxbXmDHz0g%2FxESHLGwwaZ4juA5I99oFS9lWHcu6LpX4dxb3beWMHFvF3Q5U3IeFYFlRGwCjSkjpkc3VhMyC4Fd6oLNScmROtUMkWP9W0AU0f%2FESNWIcYeKmVBb6%2FZW%2FuZ2zLp&X-Amz-Signature=55fef9c38c836dc45f8ff973b04f3d86de3cd77cd8ab68d260f0df604bbad298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

