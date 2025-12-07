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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYUGE2X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA87jYEaXXX7KL%2BspFiSVqj1NWZdtTJmKC3PBC03GUSjAiEA2YQcgoyAc1ddmdlEMa9CGOQip6%2BxEvIaV4nE8dtYjgMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoxjlAYogMgEd7vQCrcA1FAiy5N1AgkydqB%2FSsTEdNu5DAlgyODKrcRaL8JUSLHsM3xcW8bsA0A4II%2F8PtabyDD5vK4Pog73FeUlM5nBmaNkNw8DYnlK444%2FLxVyZeSydUgJYHYmhRgXsZAf%2BQkkhb2JQXDqv29wMub7Z1%2BGJh%2FFvfK4VwOjy9%2BanKzFcUxpG3180ZwOl3jfyo6PDMuVd7N2hH%2FphJiTdnbm%2FFP55x8mDzyeseD7oAus8skxs%2Bkks2%2Fe7fwD5g2clp2nB5667uiOoRokrLZ3IktbLQPsiJvnPsQFL6ad%2BKEKP6W%2FylSccj3Cdi6iIlj4SbqVbbe%2FCNaf2d76TvPPFGE795rTBSLfeM6jAe6eoiqN8LapSvrcgBWAaqgZLCzHa2tSbrPeolX0K5OleYeaTClhEa8O7vMGhI79gexsO1FUvx7i6LLQwq1d6i5DPZvEaP0sAJ08HbEPNtdRF50k0eyyFGXoYMjETw250rHp%2B8Rov%2BSUbzesHGj37N%2BQW9JDiB9ETraTl%2FNJiC%2BxpU7N31Z9Nik6GoKaLeGbfaD4aSBzjt3a9pIs8C%2BW1yvK5gw7cnOq6Egnb2%2FvEghQhDq%2Fxd8ElbNsWCzc8ChB8MvpRHAB3HCakQD35uirnMo%2B%2FnKJhnbMLWY1MkGOqUBmg9wMf2DoIkJSgOIvHKZqdluIATWBmgYeW%2BGObU8vB6FnHCi%2BYSqD6QN5Tdnz5UiIgsOuksEPwa4i6pMOLnZXE%2BVCmdMTHZHm8n0a008GnagAAp%2F6tUHXAu21hEAkPFN532DKeQeM7G8%2B126e274ToVizmkoGZAh7iNqTegv4Gw1IyedAquOfNpbujms3ZJ%2B7JpCc2PLag43K6Ooa0mVEL6nsqtR&X-Amz-Signature=7e9595b1bf8f63279f60ed3a27636ec2c16fad202ae1a57db61eb78500df80b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

