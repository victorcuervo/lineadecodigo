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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5EWEUH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmcdlo5BRSAQ%2Fq%2BiT%2BRqOO%2BykyJor4oodNNlFD0G%2FqpgIhAMh16nuxUp1ximQSHdcsLAGIqCpfj9HuXhx%2FO0GUnlzVKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKOWu5vdoKPbxKy7wq3AMRc%2BRbA4JJf4RTzKWLGPprybODEWkn%2BvJA%2FWb0PGQsBs3OTWN0KQ2MxLtMrQFEOlAn5ExsPGLZv2x0BoLayLLX6EFTjwgza%2BotAF0gIGEItCaOQ8ZK1O9IYfaEw6%2BgQoYuD%2Fs9Z2MGSx07zLbwYji7doi4RaqW3toxgWDMqwAr8M1wnwExXSTEjIGIpBgQyTd3Kj3NUIdoSPWDad%2FX6K%2BufOYiBFjGYdC56zTHphRKFsxSx455QfW%2Fkl5U4eWee14ahTpGo53f2V27qjfqE8%2Be2ftd%2FgnMms9qfj0NkfCXtEEBjUlUbOnzkRIthgS%2B1N%2Fb1wOFfY9Zj07iOujFpQZvhNUHGGbks5rnwvO2%2B%2F9rS6929x5CmB6v2MsDkS9ftlYX3wcx72BfHGCCSc15MihWRBGFQ%2FZLrve0S5ebrk8BKQ%2BrfxIJESyy2cY8OtoUKFEJyR11DSKL4ACdukD4vKuOAP44DgtdkB2C7T%2BNDF7dZCkQhJ3jA%2BP4wkK0INyKekQYbylDyq%2Br%2Fvlez3vDY8dKNHsvVUiPVDY3ohgRzEQcAcEiRTH6q%2BRLuIJbtAVUauc3miuV%2FvM923vePiPsrMi51OoqXJiEhdTfPidtH%2FlTrWwR%2F3Ijr8Xalqf2BzDV%2FuHJBjqkAQgwcE6OOHzabaLpos%2BRd%2Bfdh4H9M%2FrPHLgwtlK%2FymLAu2wm2jd04eZ%2BxTbWmvTV55hbwNNmTkB98UnK0swoPqkp%2FJhkL%2FSW20toP6vVd2TnzBtA4SdwwP3XroWvJUn69EFtse26TXvRFWNjTub3L9IWWLXUhMH6Htd%2FbAylg8t6uRuyGkhzANeFaWKP4AY3glL27tRj4xcnLLZo%2FpVkmj26lXK8&X-Amz-Signature=b764fe50f9fe255ed5f3757fe931b01130654850005363bb2a56c5f9719ea4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

