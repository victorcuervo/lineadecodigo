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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STISNSH3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGtVy%2B49a%2Fr0cpdFWyhFHc%2FFZbVjIpzJcuzdpBjl0xbvAiAxEW3E6GOPEZ6%2FUWg0yQPJwsbvE%2F4inmKa%2F5N0eSSzDCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYXhan2OHCdOaJlsKKtwD5%2BLQCbkQ5cuNMqjHA8pjNGoqIeAylydIKdMnOPitQXAerxEfI2rMEUSsJi%2F2cuvYmL1w5Rl0v%2F3hWbKs03y2lXxCakLEEAJUtpIi34EdICJRoHXj2s4nbSSDOUIx8XWKpcnLQFBxYP495%2Fn269nk3ANS8esLqPg9ykO51YpH6WCqIcj4%2B9heqVh7tfpRiG%2FIOi7aYdQ7nYpxBXUkzVy6x4kvU1tHZaev%2FSW%2BnLqD1HF9BjiiAGZbvQz1KdBF7%2BmzbdYujELMRLFUwsbUuqcIdYcCp8Wo%2Bb8tY%2B9x2FkzCj3xcqCa%2BXv0B%2ByYuJRanSZXHfzDc9bFNu3jH8w576Gc0c75pBZg7OXSJLQrkMd84iognVXkQktBz97LXA578FXELVRGt83bNID2YKyxf4C5cpB6bQNHSy%2BDQTSSZj0tXqlMycBoD4S%2FMYrwwrhUBv3u8eHq4eKv5YN%2Fckc7dltCxK8VlflVYhs1RQr9sQVWd%2BZbuBz4OfVgFFvQ3pPgq1nBXS0hXlljdz8zvA5509q4JxpGvsP87X00J%2B2jaLkBot2P4gmGDPW0dIknvESpZnwC2GgwlW2qnJ1B%2B0MAw7Ck3NlaMfp%2BSncK%2B2TcbCqEG43huPjILTVFR5ejGzcwoJHEyQY6pgHXaF3ecrMQiQ5bYj4PIlfNqqeTTNlmM8i4mlmu%2FSHpx7L0qrmEFhmRsAObN0Yoptq00FY99k775kxq1HN0t0oY%2FjaO3YiKhp6dW85wpDK9rK%2FlAWO7IHDvLydakHoVkpiUqTLxxajeu%2BjXpKs0lpUz%2FuiPt1U0we4KsBIsERnwTwe3OdEbSUOTyC0SE7wVY9m0B5Uuig8Hz2%2Bs0uasnRCVUy2taoVW&X-Amz-Signature=b392cafe878825cbf3fd49ca31189256d7c4138428f1c21ddf1a372ae2e1526d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

