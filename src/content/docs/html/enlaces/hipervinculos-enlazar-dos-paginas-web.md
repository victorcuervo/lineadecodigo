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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVBAR4I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB38QM5vZ9Hmo2NBdDVQW498RSP1tBMI0z97sy24m1u8AiEA3lpNq%2B65d7C5DEvOzUFwTtseAE9IZ8gScqZezli9UsQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ%2FOkdVER%2Fbg0sCKqSrcA8Zmlk6SlqAoYjDUI8mNoolWJ0JzQJbVRlTgcI9b2zdcMwffrD25A5%2Bc%2FmRWgnC13bRhAuIDYHJEJiCEDzFGpOcWTCN9cEb75xwXlbPNQ0RWjMz4oKlZ6qrM%2BLtoOjTXg8rS3a00C2FaIq2Y8IMbRKmsoRTQlSsra3YqbqyjvS89OnaCZ4hiX9eKMT6FcAKyrrAzoEJ8EoFPoz7erIwK42slGgd5ebj%2FVPng7oLGrnsaQTc0vFXT7LcPv1AoZzi1Pl9a9hjq%2Fu2zES4Bf36NWKXP8c55FV6uF4rUqKsOl5D99xAICT%2BS%2BWxNB4J0lw5%2BN8jBegivDQ2gmiGAPkmUyMTU5aEXF9APN%2FQFffG3LN2tVDdXtyBlkZAUbcLzGS%2B2yEwjOmZrNBoAacM50Nz4i71dA9unus9D4F1sla4LjuDa63ZiUaT%2F6ZsftT7CoUquIeTCoE3fjXaIgRYtV0X6ai5UkKD5sTNVNF83mMHhzy%2F%2FKOK3HZJc1zqsE0IQegkuLQoY6wnNWLuZiwFmXyxzw64Q3zbCb%2Fi4QaNcAXQLr2LAmJgQymFz1qCym8MrwcZoDREJODYlUIGsHlPtwpC5dOe%2B1ZnROFnw4%2B3m%2Bq%2BeIacNMbR1umhd%2B%2BdFBSA7MJXRyskGOqUBNTIJRkmkDeHexpA5xFmlDqc4EdAeh%2Flg3wj%2BFXpGJJK2tLmZQOkE5v9vM3aqxTUUc3aJYl3fIteJbsj4PSckUHcAEfo9fFHZHpXW3GhKCIRlKwZBbk3%2FzBJ36VBp6BUFz0vkJNfXqpXOrhy%2B8vZcTxFDi02AfVZIG%2Bm9Oa23JuZgP%2FYDScV%2BuU%2F5SHOj9kseBBG2BUz%2F5%2Bu7WX%2FjwwRwL08VkVPl&X-Amz-Signature=6f87fcbbeb4e1b343dcdc9a9291db15e4c311018587bb5b51d8d50a4bd687d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

