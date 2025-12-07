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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTN3VPS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtqeFUPRkmDtpZOgfk1T%2FM5M%2BuHw9eB2kZ5CT6ihA%2F8wIhAI%2FTxi8dff2bmf1THs1Rk2NnAoyJQ%2FvsWyHc0r8wylQkKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ntvfUlf7XN4SlrEq3APcQfiNbHxy4IURCGS0iCabkowm3TNJi66ld2iDE1NfNB5JGzAzQyelatDQFMtNKNqq75%2FWjqx5IigVk1HYez%2FcVnGuTXFxZgTiFSKYo0v4eA%2Fhzz84dDlFYclrZG3Sf%2BecNC3QAce172VY2OFtj1xNcI8rSKZZRqaTXwp6QQqsCnxjbFIt0BRaKfJBl18lxFuXuD%2B93rTPkVo5GuaVPSQtjxUh%2FlVcgXWYYjDgJUx9iwYUE9xRfx0nadnUcvL%2Br9ytWSWrcwxrjluImCoQMOSE34mF5VhmT3Fh17EG94Hh%2BdkGeuvn3n2gafSy4tcSNdSGFntFscHetWbFezA81dwPI63fsaby11kliFJAN1skLgvBHKiQz85bU6jyA%2Bht4Xrv0Z5DJCyqobTWEPVQgLfxkOL0wU%2Fuhxq5VvbXPOXyB%2Fd6hbXGXJWzuYXGOBw4%2BNj61HMEzVfvkNqwE4Q4IIOqzQg%2BXiQdEsBi6FIaJLaRNIl9zbapyq6laGuRF9VXCjzS2aAYHvVeOiSfTFWzvrnhJQu76t7TPT5D2iWJVzA8gv%2BT%2BbaH%2BreWo58gx6QAHdwDsBcsuYpVzUW49j%2BaA2Znv25KHB5cgc4pjil4C9bJr5uzs5TIQu1OINTIdzD%2Fo9TJBjqkAXE7jxpEv%2BvPk8pB48yn0QWnXubScDlMUyIXVky7VCpj8PPf2NwtTdZYJDtVlKvl5fQIeGB1eN%2FugsQrKvoUs0hV96OoIYNWBH2fdIHUbGRjQ6OUjwwo9QETBxjf4ZLaJlkEeC9%2BMfwtRaWiPV0%2FxJbNx2J4cZ2u%2B6UYjxc9jAJz2k9gAr0Cs18u%2BSf8DRc75BdQPufvLgJMBxAIXvVtRMHiSVFd&X-Amz-Signature=99bf274e484c6021e0b6b49240027db9d51bd3d88e15c4c89da90a49d1912129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

