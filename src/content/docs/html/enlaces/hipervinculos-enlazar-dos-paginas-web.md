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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROQNGZR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNlChW%2FpKYHzW3CQtspXpykFgzaTwizf84xTbcOz5sYAiA2rw0y0QX0Z6yRhPFbYrePWpeuIN2KMok583hD692EgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FQ3R5af4knJL5%2BnmKtwDUwhOKTCU0XEwFilQ%2FrkKy8epxo4ht9Y56AZnrPnCF8KoLewGSjlnDPyfRfNY03HEKC9ZBrRSgeh4x5kh2zA3QdeAflOzM341cc0Pcl2oCCtzxndKR4OPJ4M7dlhqX0%2B1cygEN6cYeEpYwuEEC8g%2BVobkN1F%2FVo5eHipBTbOs42hWE2EHlmdhprQDBtBxCL0eGvyPkKNUBHNjHX6UsgmO5fIoEUbjU%2F5VpQ%2FvTSkMdwsAa4UwUlQjbFE9rO7nYcX12Q%2BIia57AZjTqJcN6BjPonkRozguL6ebsqwTl6Zuhgb1pzFJakn7nI6AeSXaLAvKgyI2JA6MfDJpQlaDuCM%2F0t8fr4yePoADOaNG3QsLALMumnvEG%2FnV%2B%2F5Hx8q0%2FgOIgs5J%2FdXvOhPawveoj0zO08SiNWR3BNw8v5BTYxSkKKh1LZnxaZhP1L8iMNCo%2F79i7MuaFH4PESVzjx3vdDonI%2FY42P5crdX%2FliQkOLkCL0J%2B%2B6zUvK3cr80vFY19Fx12rs6NXKVrkS1vgWYNXjZqRHcUBNLUnOL%2FrnIdFdhrFzUFTvQj2m1MvJBjujWMx%2FveweeUiomI4VF0wQndbgh6gT5zaNfvvqpBn8KhoSnPEZK5gAA0IGJiUCd1UqQwhJ7PyQY6pgGbbjY8SVM0OxYeISsufRSzp%2FdcAds8eoZUnRwbYUVzZwiWW72H4jiBH4YBOH52nLeeWkaH7vTeLi0Lsdy872Q%2Fn%2BQfZ9Uly%2BTn2pD4AOFkN4ENr7WCvc%2FoOTY9jhBwmtxCBlR0tqDei3KGXMM077zUA5wYiFG%2BELKbmgSRhQNRlebWS9DYEENHk0EjsIWWYcCENPelWBcoCC9P6DgUaq6e6QAR8WZO&X-Amz-Signature=5044044204d8383b44ca78683ace8a752128e5562789e71b8ca0d5b8b09fe49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

