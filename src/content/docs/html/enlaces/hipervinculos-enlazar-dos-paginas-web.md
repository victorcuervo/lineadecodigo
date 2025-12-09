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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXTJMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf8K6UcC%2F7K%2Fl%2BLaZO%2B1RalKGQjOpw78%2FYzRKp%2BR8KkQIhAMuu%2Ffg%2Bc6DjSLOry7FSszOOVuGeLKK4RKBK%2BdyU95NWKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSTZGn%2FHaBv2QcOF0q3AOy2H%2F0uz5nG7A4c4yevq%2F7OX534hIm8ylV79vSDoEJkVjNRucy3xfb%2FQKOVZ2vDi0dF1dVAsgQo%2FraSX%2F%2Bh9LC79cKwth7rQhbQ5MYgJurLiIuRifE5hND48tb7es4iefmctu0Z4Ch%2BVrItoTs1IvG7sbSYlUSUCp3IPKXITz%2FAccwZqr9Y11qZR%2B3yzb63dgJlBMf9wnNhmz8GFD5ne0XXDcQfCcJFFAh6L6GGeKDX67J2gg2lYcNUscylAH6mWZb1OEPI7%2Fho0CPBxbEF1%2BBzm79m3QkHyESEU8VcxTBZEcnuOvshvz%2BmEwrKFvdneENc5Z1I%2F1VgPGZkvjJfVXZ7%2BBR0ZyTTiXt%2F5BMumUG5cJpUA%2BLeXr5EdlSesXSdcAo6mT0tLZpGK%2B54VloBkR3U%2BzNQN%2FK15cLBBrQnRXdvSJA19l3xwn%2B8sHyJ0vU40kYrJIm6vHU7b6En7QB4MZgJfdQCQcSB2hDO%2Fh69ZPSoCnR6oLCBtJY2KPue8m2SSft78OGCmM1gFmAfGerYsylsZxQ80JkhYs68ooWyNJIwcdVSLoyHoNkb4AX8TWcy86I2RxwNV%2B6iRiqer%2FDvvuCVN3cvBStCaEEsIZRKkidaKq3eN2KgwORqd2N9DDLw%2BLJBjqkAVzEaP4MyXltHRGR5qmtKLZIZvVx0VraGGnENFQ5bLyYa2bbMIDJdL6B%2Bes8FspJK8MdSo6uQcN1fG%2FqGvWHIKaAeCE38ylDbIN41wmGQk8S4E0R12Zd0W0cWH1k0GfUf9xRFi4QiNnQ5xwunC%2FY2OI%2BdYevq34zdDexEE7dhaaKKujdAKTnqEePDKajQkx3NhH0Vu8CYLvzAAeB%2FLsbGsoQGf28&X-Amz-Signature=cdaa9ec91de05848fd0a52e7eff8d552ce48c88253df9c4f6708eb13330ef851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

