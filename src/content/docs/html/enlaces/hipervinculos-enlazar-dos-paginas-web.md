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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6NALF6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa6gU5f9A%2Fc0YRjq8cPT503XCRnSd9tvu8B7uICiGh5AiEAx2tHtluZH4ZiWfX9mf4lsThDG8aFTsco1eQcLGKgF8kqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyx1jgBC%2BNuZZjPySrcA%2Fj217R4YcdMOrwW3MM7lOJjeduscdg0MlkX6byLVbmKCPlmSuLRlE2lMuP4ifgLIvgCHj7HjHnMLMc74a1Ze9fCIbZfIGvEicPtDsm1DSR4HHqi%2F94F3qnYLTZ%2FLtivwdHg1wqU2xIL6%2BU9vXwT%2BXJgS085dPwm71%2BjhNd9KRW63teqwTLbs8D2uCqTLLKxFt%2B8XX11Gj9iF5SfEn8fCFgbf10Run4qI6LVhDCLwlvhKOO%2BSrlTsN9e5ixeCgoirbvKyW6TaGaDKgDMJXADjKBJJDIuRmdnl5x9K9svFpytk3DbeFE1DUPKCQqrucYf9IasS2x6hQT5zxLwP0dY8rGsOJFcPntXnLK8XCtlZvUanujPXmYhTPk416TNU%2Bff5MqD6rBoQV6neObbma05Xp7x8Gi%2BPx9Q15gpxkLi9nyu6ymzjyEsGsWf3RNJvxnod1CGHp3CXZKJAvb%2BN4bPyBB020ppEBvKxWgOp7RPIwedOvW4NSwt62ksooEs9OwjiWgJmfMcWDTO6QZ%2BbtU2EYZ8e70mk8Sjj2B8C0G%2FRhmg5KyXjWIJ4Is9645%2BH7tDc%2FxmaVdZFiJBetK%2F8DdpIEbK8mh2ZEyMaxrJblugUpaKsWKRV4%2F9a13NVxCoMOyX4ckGOqUBVxhULvKhFbACOA0GzOD1gllIKGkS%2BIzR%2FrT%2FcJzAqPi9R7jfWEz2ACy1LAZur2D1VpccJdh7TRiYngqyWzGl3MkfMAS9sucxsXJsEMKH70zfy3jqqZ4XHhYGo7%2Fyy5Sm%2F8e677BPsm%2BMTY7e%2FORgIVKZOVuT1%2Bly6T7RWHA%2BxRQO8WCvWmcUpDiYy5YXUqtekOtH18EhMofq%2F4Udrq90s4NBFNjL&X-Amz-Signature=fff0d6a0871a0526eff16552b1ac353d3f6952729ae67523bdc0f170323490e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

