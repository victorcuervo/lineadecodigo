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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE6MY3Y5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2bOfDsQnxZQkHG1T8y3nzahD21AvaDkAUlG9JDmJg5AiA8HwocdltlgdDkdTS4mTqK%2FzulcIeF8YwONymX0Cig2ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdDC2yPnKvW%2BG70FZKtwDIhzI%2BetpdFJxEotpqXtWoBo5kXneyOULBSteScnBIBO2mjFnnauW4OIVRaYZbD8UqF%2BS06TwHRdHxeQ64nlpmb5nHPYXAl2xL75DjMYCkLYABRaxDnPNwHQMCwLauuBFxwdKYrXJnBUlAlEW46pearUcfHS9I70zvD8%2FsFaqH7MF1IaG3v0l8JeKjS46cVokuMiMUNTWvUJcrktgWXHNDHgym7P3QrsJwli8M9g37sfezSsoYfwLRfEbgN9mTSe5R1O0CllLv%2BPqcBNs7bdOmPytlnstqAhVPO8WPiO1b8B4dM9pYwc4K9JDPD9BGAVpIT9lI06dvAr5IK4106Cz%2FEHcmk5Wz3UxvklHyfJjl%2FVMmOaPIQdhaniWIQFYAR1qioiB34OnrfSTxM13wb3apc147fXTev8CF2O8tO0KFZuIf3BJLrbkIfLg9qmquVbDdJJqVHuAukSpwcICmRk%2Fy2R4F%2FEmNjPizviOUNriGBT5e2HeHDB8Eq7WigOh2JI%2F7Lz1cJ0z%2FTShoXsT5pc8BZcVw6TO78C8ruCgMQ0eS%2BeqFGDWtCljnUjcOC2hJgCEAzzvcnrrsJST7axEaZp8E2Pq8aezH%2Btf1SRRFXB7oGv%2B3GCfoafDoLDrEuwwrcHRyQY6pgGu9oXxz1YR4YeUa9iYaI8oJe6mgZDDMqxDcgm2hFaXR21bsBJKVlrQt0aG70V%2FrACMJbNCu13p0YQc%2FFHvHhZlQIzggSAi4MCX4A2HGiQRHxE9W4p9XnRkiE3AsRNJyiceYz6TT2ezJLaaeW8hWGAmIUxdRZcZhXJJUlNwAPNXab1RxTVr0msTRp1tB65kTVkFdstVax2ufeuz9eRrz2cQxAp8xawt&X-Amz-Signature=bf711133cd2e4843dffa8e37b8ace32ee1d9edb9f5e1e3629b0fcef47bf126e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

