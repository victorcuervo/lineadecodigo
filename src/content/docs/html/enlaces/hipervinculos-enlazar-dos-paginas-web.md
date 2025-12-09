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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGO3RSU2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA0KRejcsqKmyaWAjmVO4Ebj%2BtX2V4vnRK5lxKjrlDrAiEAmOky%2BwLLoG7bVilc82TuWtcemjUzhc%2FkTFq%2FpImxwS4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBr1gnHkJWDdK5ZKDCrcA5GqKdYF2oe255augEJibq2LHQYDQ7FPtVeDEe4BMcU8RKYjd8w30qnTK90VtMd06xKrvipNV5RQwfJYcUVhMhC1oxnjsXFtyfvCpCYfIRvN1%2BouWhGbCZ%2BA%2Fj7KC%2FLL0lLE4mcliTIBTLTtTO3jtY0BdaqnmH7fF6whe2vSqKiLL5YwKqHBnUbwOY9ndCiPlX98SRgL%2FXWMhR0RA3UARU%2BHHlWDA3YsrceZco%2BMisfYBfuY8Vhr73umH41m5cSIM%2F8M4uS7SZYD%2B3rJFma1TxrLiomlpblVl9EN9bt6Iy3hNJKKd%2FKe77FH4CzgvT%2FOS0bWcnLoL5sT7VOd3mh1xCtEnmeBaUlQuoWr0kzZoYtmWvVTmG%2Fjjn5wFAVgjTAMFc8EE5GAG2uS7wm3GLFl2HKUciq3uSBN%2BbyDm9jPQtMrcLEGEntId5NA9jN6S1VtBXn1ZScaZ90fJX%2FXWY492AlPkaiabNCz6ApwRwaPo%2Fi03VkdDsfpVzI29w4%2BogCeU%2Fu7rH7FXKJHZbziNjyD9a6dOLvjNFrH7QVv1pSnSUAN%2F5vfIjHgVtuqEZA3FsyoXp3sky63toGar6%2BizrOyDEcj5K9zamOKWXE1ojO8qUrjVHQ5EHMYC%2FRxzlsxMKmf4skGOqUB1pX%2BaGaf4m61Gk4WbOJP8sQx4EYOBvF6TRsg7CFNy6ZCVWkpeQwz9Y8A5VQYMnSbwvJMOzlnDtBgltt6ezEEQEXCtLfIeffzkJKTQL2EiLhow610GtY8B61j75EC08qhs8lJ%2FfVP92OXxpQNR%2BgwDhSUbcYHlN1r3niJs3L473EJ78RhyNzNLP%2B7M8kNw%2B%2BCywgWmP0bXzLmDVmXgOpQ%2BJguOSiB&X-Amz-Signature=6ed79529b83feefdb864775e57712865d9bd24bdca4a8135835653d80daf4a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

