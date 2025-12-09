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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAF7KEB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ktmo1iIR93%2B9%2BN%2Fmzvrbb4SfSGUi3krL5fjwxKvvIQIgHp0UqAnXAkG%2BSix913fjy6y9rlgpx%2BeXuK8ytn6y%2FmgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXPQCQNco1zJEjF3yrcAxhyg5GrGqfHt%2FCow%2FMzfB7fakNboc4qAV%2Bix%2FGtYT0ThtaNxiTrCwUHtA8FUuJJzJmHCs0N7Psl5Uj38pVv5gg%2BiCaypL3k5UXG%2B197OaRb27%2B%2Fuv8zUbhO0Xdn8aLO%2BJkwb4rYXZ52%2BLUml4Naoh7iFyxBUU4a5MZtufpJEtONtm3oXvchVNtvAbLzCo%2FwGHN%2Bu2%2FkXqGluNydbPBhSMPHKFICwO4%2B5Q%2BX%2Fk2GOHETFzsEr3afiP8mWkKzJESCzSc4VMEEyrjxaYZuBH2aAodXBbRF1EZSRHgLC0KqhFlIDC32a81GrjGRHfAcZcfnX9BuKVU%2F1aZME5RqVeoHxMmWxw96iybf9Uy9avC6smbEqVWYxwTKygRVPkchh0bESz%2FWUwvaCWRQbI2FJrz3gqJiF5TbIO7xtIXhGFqR5uUj7U851TwQcI7082N8gkVymoFQR3DRkdv6LN0vuK8BCg3v58xf1e8v9cPwBORKVPp5iOVBPP9%2BnmayOdbbce3RzMAF2DplMyfI5kR5Fj2imDUhBl8iDUHmP26Ar8RBW8K8oCAKGcFQCNnj2%2B4tksdGryOHqc9VcvbnnrIYxiGHv7rUlesygqAySVM7Kx0JTvlXVb2ySskRqZvutBKLMPz%2B4ckGOqUBThHvRWIlmjro8S0J7HeN48mUYJ1A9f%2FKhinHxSrdrqGJFEFIqLxBYRGe9%2FrwQtOsdxg3bhCtnmIC%2B0Cz5HolxChEJXazwBRkzlu683IWltGtdRAFUBvTuPPIBlaTZq1X8PK1KIEkudKapIqGdnobhw88jsEZTxCfv2D6O4SXjoyrpubdBhsPeuF68UyXKQxFSnUpEmNzoc0PDg16erDoQLqNm3n%2F&X-Amz-Signature=bf305c133b00d405a8d277d442dc9ba7cc935940520d05ed41016a43603ccb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

