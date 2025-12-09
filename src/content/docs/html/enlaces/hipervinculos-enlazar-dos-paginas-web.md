---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSHBEPB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAiNw3zvp2LrtoL1Vl%2BASbMVi%2FcBPlExE1uQSjncXKQIgSFqEzcJ4l2VAEcsLkn5q2%2BLNU7nyAtxpsCtVUYMs4MoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONVnrtmE8B5%2FUnAwCrcA5SoItKYZ%2BsLTM8Idjx9f4EFU21AABtjvgwtHFYtxE29aoQcL5zdNONkGTgyu%2F6GgsblHGVqk4rh4Uah7NIwumI0rOvzP%2BA9Kdvw1y5kmFvQ3TeDP8pHLlNdXfKOU0TET4hQqisDLkDzfNA3jDQI9S%2FpD%2BtJJ7OOVeoUDvHj8Xf05hc0G5lcxCG22zjLxDXa%2FjrgWQaPVSgTu%2BzmpQvgh59%2Fvsi8ZwNISBbLZH4NJELDrifhu%2BPcEQnSqfd8pgP2hKeT32bcVBmPYEIsUmL2MvI4ZLuOuyzY55itkgANSqm8mXC1%2FgM9eQ%2BT3HlwJUJUB0VKhJJHLoMN%2Fu%2FDcXST286V6Itw4La0UN%2FYbAyKFhqK9wWU%2FaaFYTVScRnZi%2BWp2WCoJ7vmsIXPEKlxAyzHRHkh4bo73%2FKuMDnt10IQdlY1DXaFm5%2BjSaTijHOV9ZtRnb2kAqXqKZV%2FBnQNR0hnnGB%2FYHbocprKIlqeMyxwCrjPK3fZwhOwXZ9OUfmUfpXEBCjb4oV8C4AyJo87xdQ4r2w7vlLB%2BaeDEm13YsQCJcmLA3rYa%2BaqnynOSlp7DCTT8QPQV4CiByneLXEEwUvtSiWn0m05AfpV%2BHZZ25s3OASW03E5rLt6w5JrQYcbMI%2F%2F4ckGOqUBsw27q80%2FppBKRUFx5PZPUY5%2F0iDJ80gW2HkAW2eWCFOPiatRLABmZ80wIWolJU42oZw00zOtd9Xd5c44Huz70zOe4MNRQVBEMIX8rUEsExFWK193ZQZLEHbdhkSC%2FYKqOS0V150gcgQurwIlBUYv16RfkCahYE55HovC6lZXKew8lmBgULnFcmaAKGG%2FQJweYPuDdIBR87Rwd58XuSoU34o4Z0Ns&X-Amz-Signature=eacc17b7c0841d112652a2f2a7e3683e88ad5e311ea13901303b9d5a381fe6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

