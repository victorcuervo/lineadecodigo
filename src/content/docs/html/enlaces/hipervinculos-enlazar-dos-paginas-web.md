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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7XW7B4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBc%2FKvoUd%2FpkbcCQvDWh7fOGMK3yTNI8FdZIPc%2FqvknEAiBLyTbRH%2FOwvgTBUxlWGQX6uCzqfQ%2Bt9t3OamdfBcxOKCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM%2FbkDmRMucnMrWoUpKtwDmBiv1xHK7rUlWBmfj6KBuj3b9jyCI8G1z5lGDQKgJ8B61he1i4AxJKtbfX5SrYoWCosqro5P8FrHm8dkuxHkQ7alWNV5W9EE9Tg24A1523j91AnRign3wIfZWP2tVf2QZcfB7zH%2FgeF0vmpW6vMOfkw86o7NTmdBBW4InpDDM%2BE6kNV33s3Gocisa88f2BFEaKPAsw21GI2FHXtLiVVzpMG5hUQZvfBvAZqov%2FKmI%2F845MWp0SseWtlOariWoJqpK4OGtmAg8m3SFzX1Lkh5u6f0sPwVhUG9JfrSQyH1yZkW2m3BotEh%2FhWNJEH7fDSf1W6L64e8gla2tKveu4%2F0neg067NHPJI9e00HU3PI6y0hLihtUf1yM0LoF4zL14UKUCYVkq1pzS5DdicBW1Vw4RHz%2B9HYB4njx72YEbI6bn6wRjb5vrKKYV3de6Wsb%2BmHy5rPdaROZycnfPbq%2BKlyM5qpb0hkxDcx0Muu1qt%2FjVjymwr6M58yGgZ86se9Me3FtQ6fWnK0UfGhKC7iByKE7QvpusVE3d818zH5Acy33gC7Xie1VeukDXR0mybC1u5PqVAwbnU3s6lSNtMFpVxENRkh1VEhAWHQOJ81%2BAtXHslHcShyK4XFOB86G8owlLXDyQY6pgElmlTLC0cOZQNb11qT353V7UjhfArbNyQwKl27HsOSJ8lLnli%2Bf796vmGA4e8d1QxFl59urQPOQQ2U6so8Yuv6Dmtq852BStUWCcxEg9YlY5BSxGbkQHb6hx8cQtlEeQNT0jdMbr5eJ3HbfWGhgSANbVKb%2FOmkv3A9FP2ugirekpxtQTN3cEiZi3CPPQC%2FSNzmynYvtmuM7jo%2BIDBvAdKkU6%2Bu9K1R&X-Amz-Signature=338e04cbdaf92dcc5257f8f838420911e30cd99fd9d5f25239ba1f294f058c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

