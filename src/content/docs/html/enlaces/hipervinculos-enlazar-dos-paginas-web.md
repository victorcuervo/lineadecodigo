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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YHCZDP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGJ31lWMKE1KiFx8Ft%2FdXZB4%2B0yNwAkKxE6JHmw4Wvf1AiEAhOpHO8JxbGZCEUbHHHMlYQrVigY%2BRY2%2BhhX5jYE3g80q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEXAS9ETVoUwGomksSrcA8bUJjoakYbz3uCSrVE8dIyjsaVoo2szWZzgSWIlExhGeg4%2FDXLbOssQPjzWPICaNQXMeEN%2BRiHqR4Mjy7bmdND5yMF756sXSqzb0d7Wm7PHnz2BEdnQg6Ii%2FPuCZTUNCXTZNwNMNZYRsBNEXADQwiixb6zDUT4fNDTYCzQWPGo9AYJX33jCaKNbjT%2FK4HqRZuHtQBeGg%2BayLgXA7n9jPqUdqMmMxj6pjRJhBj1dOUu8o%2FO%2BJ6rndnJz2z%2FBVGr%2FfLADJtqoFk%2B%2B7MAHhMdZ%2FQtQ6zeVrWVCg5I2swcdQg%2FA%2FZGHeEO0d5o6bl%2BSWari%2BVvXCPT9BHgzDbm0WJXIPVN%2FgFuJRIs%2B6tEdjVdKBK5tYwao3pCZOLWpvoAaw6wMqCMaYwDsY6dAehUguLd9GAv4so1uadVkizM17vScmaGZNmrrK5UUQEWaTGONAjXrlYX7WxMQFQKSshk6ugdQjQAR4XCG2zuQRxYpbb4SLVsiEAj7XylVh74pFjRc8Xy7bwbWrQQlB06sUxK1ul%2B2vf3vOIdgJd6%2FT4lys1lELtXkXjsPoe9W4nmKrC%2FckeRm1ADGKB3PKYLi5QrtCbFsQGLShp7bkBWaMviI%2BrowQtcf6fg04WJy9rdGfYehMPzoxMkGOqUB8U7oDec9Yyb%2BmVLqfCItfsnUWWaUTt4shnvVqUz3D1OSGM3sqzCZaNwWqwxIENh1BiFZCIvGbU0CSI%2FrrI%2FjT9ssNCdC%2FdAIMo93hsrYnnz3rnzwR%2FBj05NltEeAXXasqR5BufbH0P8TacCvxC2PqeWngkUbpPPY1Xs3P2EYuq4bJ3qiow8a32H6XKCDsYgID847nH3OSnLS7XFai6F27No%2Fs%2BAD&X-Amz-Signature=08abc4442cb46b2bdbab4e19499d0f4fe699d17d6bee3e5ec28fb92ed2b84788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

