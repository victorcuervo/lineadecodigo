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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPINB4VB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD6TyxnbK213R3TWLLEOCRS0BKTK7sDQ9eJYzJtMIjLQQIhAPFbEM1J91O7E90q%2B2W9p8vGyQ1QJvecaYsk%2FaDDVyEiKv8DCEMQABoMNjM3NDIzMTgzODA1Igzjbax8VrVR6YQPUcQq3AP57kCGd7jPwqfi8B2XzP6aBJ6WEnvo%2B2vbY9e9%2FiU4kDYbYHqFwcxs%2FUv%2BQQgGiBvZGplcHb52H7C%2Bb1Wy2voB4c8Ze7IMB27whAp%2F6NYnRQwztpRj14UWGS2qtf7TpGVojVClyUI%2FlBShcIC1OUOESwCn8bPpMWjAhliV7B%2BTnhjPyyVdfBry9L4B%2FSFvF9Jw2R7y12tRq4HGtdImeDJNqwYg9vnpsic%2FubLW2sNSJAjNGqIN59zqJEUq7P%2FQetvUH0u81Stp0IpWZltahFJ3v9ytglTkvl%2FuDNsBfRu6XlYcBEHSzX2rQRxCm3QfhMgggRKdaFOTugU62iZX6Kf0N2PrKaubotlpKxsrhuOAxPfArPmscOHODhZBuDhTAt%2BOiCXhnjVGGUmFGWgM4ce%2F2PBlstm2ExbEQ%2F3mWvBsqy2AMF%2F1YSxmOVwaTbL8f7doBjx84piVuc8EgZUTJNjwZWx9FePxCXPfKG7dYI8yJyOeQ9EXePEJ0XKYcQ0FGN23w7pnCGIHkIJB1IDo8%2F9Erh1jlY7TChUkNLYB9Bn1neSFkKpbMNNC6x8vqBYkhqkQOHP2zrXMKK6Xpm4ioWb0mxmPZsPwNToVdhfOwBfXRiwnYH1xiip%2FcuwjRTDOq8XJBjqkARzQSxYes8xjjPxnO3%2Bn5b61b9ya1%2FuaEwSwGrMpjspKKfOoUA2i1lm4BSbGYHlROHCxoi1W5fVP7O%2BE5Aw%2Bo0ajsPC7IkazFDvTkmq5dCCV0TQmNBAAIGnggCq%2FMmczO8NRnfNtbWRO077NMQQpINNhdd%2FRT9x4mUDbc%2FFiq3AFfpK%2FRJQP3GWzNOTiMxA2CQycgBT9h28YCFhuJNTso9OQknL%2F&X-Amz-Signature=e34b0c099373fce7319b5c7b3103b202877e3b15e206d486414e0a27958b78d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

