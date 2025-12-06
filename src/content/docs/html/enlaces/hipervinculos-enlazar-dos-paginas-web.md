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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5G2O62%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6J2oU%2Bdcvoqsng5WOdtoi5LmHT2i%2FG1PHSUd%2F9dGVgIgfX4ad0%2FD3JEdwTwJ2AC6U6BKSbuOh0pXBkhNLG3EQFYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKsFcXAT4CCzh5cFCCrcA2tq6y%2BUTvumM8C%2F1xGXgqBPvpfoBoy4DMq2RjgluItcNspoWn6zH2vd8NxfqVg3uxmb74Rd0kpF057L5pT4Ma3pX54WxWyQ0jXhEueH1TBHBxikPy4KS5Bh1mEBfgRLZoe2G5ijfNb0MPTH%2FAcUQ9xCia5N7miVq96W2OO%2FM3yNOCNfrTRLCugcmxwsmWUdGspSYmsPzEBMvGKvqxKQLFMXmjM%2Bq7I0gBpucVhXucBkbFwpIboWKhXnO8qzVHFEuA3d%2FGx5hbgkKd8PoLoKYTDooZNAM1bCYKFMGniwasdnBXlGxloM%2FpQrH7Wtpg%2B1R%2BHZRtQCf1DmPB%2Bj3QZ%2Bvydlki52aMkVyHVLzd0RCPj8adsvFgRRPFnL8fPkxGNE0pcwlDtT2PQOXnW72RLpStYsppxG%2Be8fiHKvJP2VY1lBwiX5IliRzAKRTf699BVVkJ2LP9veAdbom6XyQE4yH4gPHuqXxLRRkpWjmdMeOJEViDwYZKUYhu6xtw1zTqs13gbK32y1jfuEYa474pMLIPLt9U0ZQNzOY98LMvCzp%2FeAJeYuXRmst9CsHbroj6Up4FZYtAFmyL%2Fqvd6P3ijJBwX8epBIcK2WhIdtyVEwagNX1%2B4TWHL6F5fGh08kMMrozckGOqUBb7LQxJE28MO9Md6fAc4TqDBPulpFNIsi62NfPYdUzlZ75HlLQ9ZZtPluo8BXHbXfZaX8sBJzjGQhFW%2FQkxOqTttMlInObn1Siz7pl7b7D%2BdSpTH5tOuaQgrFtdqgCyCmT75gu8VXrwBLCWWv9MT0ZVp0RIOsD2FfXN3IAofeFIwO4nqe7IJZY9Kp260lfOe0GkcJXUPJ5z6JlV6yUqo0h9RKtk1F&X-Amz-Signature=765abb79b12516d73b179d74a9c481375d557367e8a74c7bf61cd85065fa1979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

