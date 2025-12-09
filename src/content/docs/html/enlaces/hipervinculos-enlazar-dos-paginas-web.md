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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM4ZND3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQmGJk72Gbw5RVQLSCohhkSucX1Y0O51aCmVvhYXC67AiAqKhhTfU5Aly9ZE052rS5ckk6agOhIMr5bNzQVi1PL3iqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMero9vPZgnN0EPHIMKtwDGgNxStWp60dFGtnh8zMoWzXtty8aMZdINtfI8rEOJBWz2jzMPtXY%2B35heSk%2BbofV%2Fyt2lC8G%2Br9tT5kSyrZr9v5iYMzK3WpytLsStSlTi%2FPhFOrmsxVWgX2SfcYEQJ%2Fuy4Vea3daVGE4HkWY1GjZ0qLGZPHxURyG1WEH1DE6XLS6cTKpKtEPEEhq6pYs5gqcTgflZSTZZ69et8jxvFI8FKH2rMQn5kymHShI%2FcbFaalVHkeSFfswClaM3Yei3aN%2BOlr%2F%2BUPSHMZeQORbCL4st53TY4vPi%2FX171utWyJ9mZQtkBSQQ3AYHb0WEih2IEHxsbeC6oz2sw3DKTRQuqpwLtY4D0l9D1gdC%2Fl124Wj%2BiQQMqNoN6buLgoZU8m9AxF3RQTLEdjHgWgAg3WUdti28b8CGh%2Bw5yQnguNSG1EAswbNMJCH%2Bq9lZHVHFx6Sv8x3h5nM%2FlYIbAKyFxyQcwf9PaUAPL5qJYQfVpArDeMRwFnv0btT%2FBnbDtes%2Fa8uYMxqB0waqf6uv3zk5VzGs%2FrdMLlgODPPtO%2BfXLeu2E4LnCsoacnM1UT5ANuABzRgqFOK6ktO1tdHg3gBp4pjWkSl%2BMyKfHE%2BGNfOaNEmVTo3B8nM%2B6NMo1HaWFDxysUw7tzgyQY6pgGThPRG%2FNVFcoYZWrpJdv8a7WBrqtvR%2Bd%2BHsX3DVk%2BOD6NNkB3j61TDeIjN7l9w1W7ZBKvsy8kuWqRuzhhaKg8Od696GwRpolEjG3YMaMP7CzGRyQJuHQT1qieVMNzaL6AUBk5zJF77sT0auQOB3ytc2cuxnwTqx4MuyeoagHeV6xmpjoPCm8LGUBFBN6LGVCrMKUNjGEX8mcXf7lCpPGKR%2FkRVM7I0&X-Amz-Signature=69256dbf608cbd40eefe731c7d84567be1b8721554a291cfea0f829f53a50d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

