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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBUJM6V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMI6NSRjuIAuBEY%2BLJuML1aV1Nsj2ZUZEm5DcT%2FsPyBgIhAJsjYz4c24eSIFcS%2BidAwp0bsc5U6lKrO3VP7p4pa5mxKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3U7%2Bu1wFVz1DNGV8q3AN3hzlSV%2Bu1XZ8RHToNCZBly81%2FW2xWizX1ix9fyMSSR4ckZ1o8BoiG4a1xZhwj5UvlffRtBTBS7FwI5xjOn14IRGYk7fshNbMwiP0yfdKYf9KKIo%2FK%2BivBOjEJHy7%2BSVM1%2BW6EIfIv37M9s6Ebvht5e0jWjSyho%2Bi%2Fu8JMXwcV6u32PwTEgx%2FFq3uqqNLvg9%2Bq4nrqAIc024hnqNt9dRwmqmh6k4gAS30dHeivP0QPW%2BRimcqB1ge5rAVCf%2FPm40pcyYKCEmw8FJ9GIcdpKtCE9k%2F5G7GSBg%2FaO4TmhsMhKzcrORKiEmyATI6yvCXL98maGsCZak%2F3SxV3dLK5y4XuQqyNkkhtL0KxLunNV0hnHFCB44C64Z7PNyGviTxOEeOFYyM8aSW%2F4B%2BP6WgtF8QO2UkHRA3iOCEVUGGGlaEjsn0oE%2B96SvkYQY%2BfeWAjAiy6fTTRAU0mFqsHshqPtMYC8kfqVmLA6A%2B8uEKp%2FdkRz1XXjwaehmwaL2bIHQMJuZoXTjriOFzwSMjKsEZID6KTzxmtVrWwkzFXOY5RtB5nURO7ihalDXw5tgLYe5%2Byeb8937di6%2B6GjMVN1%2Fyb0rmDoe85p6OJYOmHpSCrF8I2lLfy%2FKXsN5%2BKD%2F7WGjDYpN%2FJBjqkAXesrVrI%2F37zCmZc9T5err2e%2FOH1PYK785NE8GuMhHrduM43d57mIkWZuUcFGM%2BIumKANSBtkQmtMjnQHrNP%2FhahLejKvHPP4Zj0kHU5SZwgjkl%2FFYREcdnDiOKOkjpX1Zz8sGMCQ3W1Cr2iiEAhYS%2B%2B6Mk4DuROMX7ZDRF014IJVUvXqDXqGFSPhEKc6s3lGu0VqxEDGE%2BP8bfneJysM1Vh%2Fly9&X-Amz-Signature=ef8fe558c0e9816f1df6bb7f6f14477c982f6b983039f845291ae4feaaf0010b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

