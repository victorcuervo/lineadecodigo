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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKR6XTY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqMEG%2FSYl4%2BCJlfhkJunH7FjvDHAu1li3TcdDK6s7eXAiEAoeMRePmWRRPP1Ey7Rzjfe4l4ydA6rlCgGdQq%2Fx8F5oYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD4oa7rOPM8dSTdvJyrcA%2ByAH87AwLjDND0KHV6Ijg0vq1lIlXL9U3%2BQD0dvXjaRRrqSPgwvG1SeqTss%2F0bvKuZycttr%2F99ASubiXfsqj6CPBMduvwUYLpAzN%2Fp82TZGtuf%2B42CPeDQSy7rFm6fCMh%2BClTEY6iFpcDuRz3xCx%2Boos7kKfHNeEPVPHQsEoz9tTwMakxB0N1LJHRsvVixd5BEI5UDGM55av7nLdW9EPipgHNYHa3OQljPv29cssd6JwUgsKumYk2RHZP4zkpympwlKrfdfoIlIVnrVgKf0djkzBbjz2UZVYuoZXpeDvL5xfdoaF9%2FnNARX%2BZqW5qGAaoBqxSu%2B9Umq8NK2YGCqsFgu6zdfFwpTOu2u0R7fq67z3hG77S0wYNyCzZPtJO7Ql6tYJ79s3aPEKIlWYRFwJR6pzoE%2F76PYmenfIVBkQnqBjCiAQZ6dDZReTvl1%2FWfa3fbUS32BIq9fSTfsblXLhQ%2FjLIFUJIyNYv3EOh36iP3C8LgSHepHsPlqS%2FP7EEwxaHOZnMteWVWq332DJ%2BBmLJ33hfwA5O5VdSpD1GFbkGa0J41lyP9V8iDnJJhsl7WNRJD7Ivrfa4%2FnAMJjEEHSw6J2%2B7oSO%2FDCVuErgbd%2Fx4dewX0dp8rhkiX4pbcLMPLL0ckGOqUBKpzAbY1b5%2FcxDOfVNBiWC2tnIXx4hezQJkvdgpbkxywB9ovpwL5ypWsxlq6kNnCzQO8g%2Fu7TxTqlcIMz47Q11XDaUc1yhDwc96DYink3O%2Fq76dzGqwpfISZ0tBFKI0dMUVrowd5Kt6UXIe6sP%2BjKTDCrqHhudAyS2083ldalK%2BcthSwmJaHqkZZkRjFhpfUnaPqqotrTbGLP%2Bw2wbMl7qE%2BMlvDB&X-Amz-Signature=767183d63f2a5f4e7d5965979eeb996dc4755a62ef15a83a578ac493e90be83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

