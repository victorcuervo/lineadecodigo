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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667P5ZW55%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSvqo%2BPZvumjW4A346%2FkqaHtnGWTJwAKmneYb7SBKW7QIgRHN6bHSLJFIAQpvITIss7kUBrfJDNNrfUaJx%2BaXAbtQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCn7DcN7c5Bh7n4PcCrcA79nNGePKBxuKW79elgsxzKj%2Bqp9wXoc6Jr75E299StPGsfYPLKm7UAswSFnKYiyDoO0YXrEV67uaBLDksLXCKVPAlVKrwHRK%2BMMeabpQSYxGHJIxllwcr6Z4U2KUCxreDlGqslNBm4kPy5OKjZVspwW%2B91%2F8od0xDTue%2Be3XvNkJbXl1sk%2Fl7c9T02TcgkTOPAnez8rIPf9iuHisutu%2BMhsUTYBVxmMyOBF1xF6d9%2BFuw7hD%2BmHa9OinptbYrLvIfyJuZLS2yaW2r9N6ppUtTZNp5wTwxiE7GcOVhPhD9Ql4LsUYSJWwg7rh24kDgsKC4mou3NEunuHhnMTsThYtKqlwiyR6o8AsmETTJivIxf73%2BOMenOaJ9IW2BSbCvRnlpGgZkTw0%2FPclDqTdaui8lImSPA%2BGuF7x7iNq27TmeVXz3uzlsNhVd1bwSlZLoxGoCzorTvmzZg%2BGqXUnq0fDrkyt1M9TTut1baLoNgYXotg3m4uIxpmRVOcqA6R%2F3saeL%2Bi7uN2DDwE1kLzzzL5qK5a02IAdlOpxdo%2BK8%2BSW7xEigdpu09b4D1RmeHD%2BaHzCeUAkbg7pgi7tGEFb1M%2BSqjYhR5qypyP8IVqV4FG3T%2BIvNBvCicVSb3ezEg%2FMLfH0ckGOqUBDn8Fjych0cl9Imv%2FKPMtr1rPwXHSjcEOWysTK5GG5thD1G8yPjLcV8ct4qIXMVZ2vWWTWrfJNIvQdTediicXJeGJn2iPgjTjeY%2Fia1CS8SsebaAdAPgNP2hRib1dHL1%2Fo3f6p1jTOmQlj7aMBf5Y2kZIiuRBjvQsva5z0jjZBip9RGiPzf%2FZaAvFJRuWuMli0CYgo1XNNoHmfddmg13NFRHn1325&X-Amz-Signature=03d93671761cc165d78333d2fffd9a9ef412733dd1b679a1a8a6c991c5d54556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

