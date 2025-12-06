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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMH2BMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNqEkHQLmr7RNSYn7YSXkL%2FIp49n7mZa%2FqJgxjKy6kEAiBzopS7q%2BdkmGpE8jI5txr7tU%2BDhqt%2BIfMJt6deRHon6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMveCBPD2Sohh6YmC6KtwDUlVYZ5YDsvnhzw8PNVsmUzC%2Bimmr17fzPuzgDPRYO0HNyc4Prh2MYNc66SSkAHayZ9Xviym1bpQHgLh%2FuxHZAShqpJUpMpAiBsdOXjJju2kmemW2hQtAyG7vo%2FVDuv6iKN13RPtOzPHGRbDjkDm%2FvzpDg%2FbB3dTBB%2BBOsHnWk83AZ%2BqJwZv93kQ27X0DfgnKqxr1ehUsfZY4FxZa0oH0r0WP5zr9OFfwiBJzV8RIojqZ7RaCHpA8Yp18EI7Wyjq3TJNvGm4xWG2Ox9UfmpeXcmCFTXKGXLbKdRT%2BMCmCmSPAZNe7FFNjV0xMzPJNfpMk0JVz4ztOU%2BQVjEtW1h22gRS35XQ6u1KCko5f4t3a8qTLKqAVkJ7GHd%2F4b8hzXNpnqw3ZPlej01zOhETySXdiEllQ9FOd4%2FWYInstdOUN%2FtJOxSDCKj2imowFyCSRUghSFJMDDhA%2BXry2ETLkTHxFZvOMFOCl8NCN5rKKjeqN6fBIKHuQ48F4e%2BvTEznPut7%2FIGKBQh7Q6JZTTyWT2j%2F8wHTM%2FGmMJlRKYLTV7zySDhC%2B%2Fy6dkbbKKtWcfvihb%2FtgdolNthWoelKUIfwxvQrJAieci7H8zQQx9TQOvsWLDi80clyT220nDmKrzwYwn97OyQY6pgFEAkAHDi%2B8lZ0JM%2BlCsm4d5GdF8W%2BX9FcWuU9oGqhED51S7icW%2FK332Y2vCSycBGa9XIqVdcIkRbEj1MoWwq1rZCNLuE4z4Ke3Ixg9JjAEGvwoOtp8PyxQQfzG93O06gBMVz9N9PoyJwguS%2BMcW4pTOzHQXFp1%2Fd6f9J0Sda2UHuCmtHUC3GetohATiQT4eceiUfjlQhuZFfUhe7bXtV7cJOC3tV5s&X-Amz-Signature=5cc188d8a7e9ab09d3ecf5acc2c6ab454496ffc6893eea55b9056f911b58f119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

