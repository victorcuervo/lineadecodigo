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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPJHHUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqsI54ZRtUmdDgaRe1iNfje3kW6kYoqMFNpf%2B0yJGjUAIhALixZ8gNrh01jAVQ%2BMlUI%2FAyFiFDgzfALsZJGvhDis4MKv8DCFUQABoMNjM3NDIzMTgzODA1Igw1HNhuMUUNOntcTsEq3ANmjrpFCwmCDz4U7aEoJPdZGa4lvdJDrc5ba3el7UbHz%2Bins50V43%2FHDOe0bTQDBLxsBH9MNVbkiBxp0r%2FEztKnE27ZuiN5pZ98h3htdf%2BN%2B%2B8SIqomtUAB%2FZn9bfoJ%2BQ0TV3A6hzNWwOJzlwZ9XDavOa9POIdu2zw1e47wQpfFgPqKCxUNS9NYte%2B1r5MEx%2BqK4%2FQY1o0fFxMzWxm1vECmcGc%2FVGGpQtgQQeD5q%2FbLGLDHR7cKKGl8Qz7wsyejnoIsv2I0MYYbYW1SZsR2ihaMiozhNcVfM8k8luBW2zdR4QP0f0pO1nXCCyWyVCCd6szSlC0pdVS4TjmutLGaqUwE6HPNvwHtloPgS%2Fh%2B4Pb04aYe6SUNuX0QN8ya%2FLQmsNp0ee4lrQIzKKCNa8dcW57oW359ZXvFTG2oTBVEsOfL8WSTU%2B3ZHWL08P60b5K5mROZK4mYsMby419mOo0GW7hAiU5BaxgUEBQEMTwzKCKJDknBgWnqt%2FoWIy6AngwlS3Pt4I7vqsyrzfM66XF2yB6g%2FSB5IN%2FGaTxYEBUQAmLVRvxjwqiuHRT%2BvGtA%2FY8842Fb%2FrG9om%2Fo0rXUNQ8OhGuMc3Wl36LcuJ7DjhIf0fZDZyYPF3bUQcJ1f3u7%2FTCwpsnJBjqkASzflND7QNIoOtBWZD%2Bow1lvDgBwfMhkSW%2BQlLWO4zwHBiDyY4Qldx%2F8m%2BBjYZ6GgAGqtUIAt7KkYOER6Zn%2B%2BDhPXrC%2FtXlceF3hwxkWtx77knK8BABw2%2BWfQu2L%2FS8R%2Bv4w0bcNhXR572XBuUdkbWMfOa4iW2TLPYRj9fmFEO15FHw5xwkRNUsvx5bF0vHUmV%2BB%2FxhBkwJQjX8XShsDo6diHwai&X-Amz-Signature=be3b128f76805944f57e73406bac993c4e4b83faca7f7f560fe7b6ff0dd93572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

