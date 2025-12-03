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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPRKLVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIAr5RZ8eTE%2BOx0UfnQe0XjTshjYD4LxtEMhk7FIThvgFAiBU4d%2FkkmYGGOSKJsMGF3ZyI4ss67xbPBYeCPc9kt%2FLSir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMPr5%2FMRL5UKUckJwAKtwDCULvmvLEl3kAtwxWWqPxWucn%2B%2BiolbtHjALiXMNTEuylbDONf8c1K6CYEcZIqlVY3z3iq9Y2VDDZQrGKnM1tTgPMRMrCs18%2BIiKPb7MS%2BnDtz%2Fmfw%2Fa2nxDQmyjl6CwtJmgF9oy4F1YSPESevDqc5s81WL8ma7GV6K2J2r2zk5UiFvy7c6bR3Z0W%2BAVC1h85CEXyXvpftqigkEjC7qGJZs6licFbbhH1aFqN12kGvh0uN8KaA7eAFi00tudpwkOif1Ile2tQxtivNT8FHJaPoP0Dbt0kH6KyEgkP7e5chW50l94Q5lhg8JjOw2eK4JQ5lMfCw%2B9qUZBHTPxP07lp9CNIKi6NEn%2BblvHcA5DgiMad%2F8n97z5DvKexY3mkp2vo%2BYCeuDLWNGhzH%2F%2BcC9p9hnUTktVrAoi6Bb%2BAda1koOmGDuuCrn6HJ6SPaP24e%2BjyBWPLGfBjnngh%2BJLPSjcQDdMQBS%2BQEr2ymKO3i7gj0klImnprHdgrBiB75RUldxoJQkE9%2Fs%2FeCSw3dAMi1N0cyYusD4K1bRgSe8dm%2F6cFRweLzHROR6Bd7KLXJqU4VAX04Nac5Ru8mBuYdNHzEiFdoqNyfClHJkCnuh10QtBOS2oTbuDZqU7vg8m%2BBrMw1vjCyQY6pgGVs4pNlvEly0tDEZ8zldPkPXKDIAKN2gK6OV93ook5U4PERrbV77%2FDCyv1zwNjjdxIKgSlvABMEDOxi5D0Ulcmkjek6nowHZvS2cDlNKOT7w7ltX%2BK00WmD79nXCSs3ed1oGHz0rVqqBbvDpNG9z%2BMd2Glw1QySJf%2BJXgYtryu0jWPtrd7yAxVE1cica1OUCa6PTBFq4sm3SfBOyQRznLni5OzdAc1&X-Amz-Signature=dc5d3e207c10edf181c9f7d924eb60efb82cb604404eda4bb7427eea98cfde2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

