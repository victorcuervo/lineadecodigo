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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHJ2VND%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC90zqCSm1dadUaMJGkQ9uOfianq5Pi%2B7mmrc96twv7KgIhAIarTn5nMTSVnXo3IgPccSoZgFJSBVo98AdBP9nkQ9ClKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5mk6Qcs6NVRbTd5Aq3AO4jdanFrS6kASi3%2BUcCcE%2FrP0VgWdPuo4rdTqPkwudI1KGC6WHGs6nk2VwHrz5PePA6YurE0vIEDocBx%2FN3xKJtN3i6w9c0HJ1Xw8ljXsPLeJ0lu9RdbfhlSVf7n8%2BONkZ6gmcHXE9xLCMtQ9dir6br7M0jwC2%2BuHjjOqV6k7Xae1ysexNHrqMl0C%2BnWQezZiRma8JMJ49JaCIiE7FBoXZv6NYNhVeW7QbOB1UCHAyG7H4%2BtXD%2BI47N4Nsh%2F62r9sVRt%2Bx5nHkzceR914l96rDtFgkutsc4RbIJVmfDziHOdM7mjByBABh3v34JqyH90tVXya4LfV872otreVoElRhscNliLGF9iHWGyeYnHyNnkWJK71AB5pQD%2FHkWEEuySGaYSEnaVqo8KZLWTfq3sVtuRlVquTYq7%2F4Y%2BV0syKT67sznFY6%2BVsC0%2FdoAL6h2ePNQ9hgkrlc0kKrHPoiKc27bF67Ft316YluHqB4xUqKC67UUbvZwmPhl8V2p6AvmaYNQVvK7QnW%2BiUH9B82zL0sab9%2BY%2B04rN6mvfbK5LKiH3XOqS7eOmgNRJpHVypl7qq785szdXoCZ4UffQ0QRjdmGNpl7f7cKfe%2FJsCkK2I4ZfMkjSM4YZKJwNCZZzD%2Bl%2BHJBjqkASNyQKXthHzoto2HbN9mTXq6xqPEl%2F72mQ%2FYWWV%2BT1Q9HMAfjQgnSeMBtrgaEmJJvaxQ7zZpb%2BHhWrFgZyo%2BUoirWChx6WiLY5Lyw87H%2BiMd43oi9A8AyMA3UAThBZgif404ROVOD2pLLG18nRW2f5iDHuZCpnBKiVkO7Z8%2FYnzyzu%2B%2F3NNVAbUedB%2Ban%2BrPmCJyGsZz0JuE30HwPp7JB8o2Rud0&X-Amz-Signature=9fe49497a779eea2eb4c6a5d82b5c2c31dfadeac225a205336b42a85d2ad10ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

