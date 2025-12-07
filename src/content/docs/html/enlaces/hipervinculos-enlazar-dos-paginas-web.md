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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYZRJPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP2%2BkPhoyEUUbgVIVU4c8AAlGapRgMevkHpkX7wt%2BGGAIhAIU0MtfX1BowiQPQQOxszwMvKYVz1FbS5VfaQ2e0gbtLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLeLRGyQ8BkLRHBYwq3AOky10CNxlwXyV8EIBAahf%2BAizJDL%2BRtH5aVRI3dO6rczSObGKPGDDR5CoSNG7NB4k%2F9%2FifafD3vv7E7lvFfAEafs6%2Fu1g%2FON3u0CasD5%2FDvKOggYzCJdQrHaN7iBN6KKhR1uS9oItKKzU6Im6llfhWXTo%2F3OVEkmyx9Zb3tmdsQRcjmXwnnZeu7SWDPrhduKZIhwOhkMraHMv7BNOwhkuD8e%2BnWUkh8PYyecEQXLo5yNQmWqkIxIhTwQlkiZh%2BaMvi5ks8Kq8mqdohfftRxMsfLqqsZBdQ6Tc%2B6todr%2FClBIeeCR3jgHlZFgj1AYhT7NoEm3kRlWZax7IT9iqMPkdOOmI1DIXfIMCpqEDbZ6jVqS3hPI%2FW3KXLTVTP0x5lI9mi7lvTRdUt6USm5nz25Sq5zXF988%2BZgzPeDrZNsWUxeiGvuROtSvFXfrb5Esm4i7u1cN7ejsfHeUk5Kkf4bYr2u8KnGZy6YhXz9zbp8%2F456Je%2FZeCV73sSSHU5RLOhRPiFQuyK5nEJo8dAHnONzKb7PzDq7nY6SO0uy18zCuKw%2BimN61T8UsSZiv%2B4sbeiHVDDIZBw%2FSTGNQUxKLwd8X9gpk3vqroSBLiScK4MN3TkjWyG0vDKEPZOzw7xejCymdXJBjqkAdHqQ6zwWWGslcZ1SXls4zSPBFJ1nVjeINkCjPssVuNiyDkg66TjO6WoZLjGHxFyy7ni91d%2FLrgb9%2BSkwcHr1ONnTdZWdbqKZQZ3GCXaSsLdAvSW7qv%2FV%2FuNWYv7qpgSwtp5P5zgd8nBVSP4vt%2BKS0xFSeBIjgTU674R%2FTgLbL8XkngRpJa7NbQonI0YPs3BsLm1Ew2dqtlTnEHu%2BdOiXWgkZ9Tk&X-Amz-Signature=29f2ea7e609570e3fd49e641b0d069f8fcf81b6e5c8476d5243d200fc02d58f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

