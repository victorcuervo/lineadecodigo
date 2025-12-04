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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HOE4DD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCQHTk63CE%2B%2BEeuuX8VxKksTN7EGruGxHNQgxNIekKuDQIhAKFu0wh0hmiN5rewM8MVSAjK5ag%2FxPpXhMc%2BRrnZ%2BgjgKv8DCD8QABoMNjM3NDIzMTgzODA1Igyc3L8C1XBgjDvOqYMq3AN8ifY0CCiBnE7pjwpKG4%2FzIMQula4LTKbyNrRcyf7IK7T%2Bcd2aQ7go1V84oni0vqmo8PPwrr25ahumj6gYwnYO%2B%2BUwH8f0dv4s7xOYiGDERBYIJ8MFQ%2FJibEuBzpR%2FNtPN%2Bog1C5XFI1NIyNqXuKpm4%2FnLVliEq3rflEbQMSyNf20%2F5IMTbmjpKeKUd9Whmq3euUx9C76T70DjGcN%2FvaKJ5Xv6cMaFkmuo%2FYI0SVVbBNsLEFtSAwLHxjh0%2BYK6qdTS93kOq0JENkIsl9yQWlwamjJeQhjoKsQpxIR2FaG2s6l7GbTA1IXqyChY9nhFibSxasK6UwDw7PAHEKhuqG7K2CCjp52wbzWhxGsjtK0BXoGy%2FfrtXqVXOSQdzKrwXaYh87346sGdsd6ep6gzDObZJriNFjCAKQab7zSj9yKZIPKcXitkioRogycIQRJdc5qwuCAEE2OauK9kwARz3VLs7SPclHQu5BQRf3nbf%2F9rbGryJRcniPIxRX%2FISYHkjgYvHs0PRnFrg1OmzlMduYeM7AvxvajJW%2B%2BxCH%2BkD%2FjoxqldBTebxgcHmz67qAKfTprhAfnigrhJoBVDDUKJBp6%2BiuohPptjKWuPXT5qhFFgZTWDRhT66ra%2FBA%2FhSDCiy8TJBjqkAeBEXuhXZLBa1Qk1nQnm48Co5hRPJ0P%2B5QE4pgeWnsuZYd4UavzFGOdVozAr5UiuWr2uLF0VCNlLPOBKPjVAdLFOrK6A5r7qPWjgIpqE1zpbHdTWK4r0me9LFSyElibtPtq62pKSHe21KEBu%2Fmf7QJGgqdpi6688%2B8qYZoIMfVfoJsel8IcjH2QxpY53m%2BJAbviv98HQAGajmUZ1FsaOsGVajP6S&X-Amz-Signature=e6fd8990c38a23c244ac28bb85a525e9fd040dd833d14d46aaee0bf0941c328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

