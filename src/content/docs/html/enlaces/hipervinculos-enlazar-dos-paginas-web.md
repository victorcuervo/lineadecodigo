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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFU2S6S2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqIGCHNbbaYJMrLKM1xJguYhD7iKl%2FaXWO7QSISiUrQIgWQXqI5Hd%2BY3vKZt%2FXJXboy40G38Mrbcu7q2bg38PqrgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOqFX3Qznk7i74s2SrcA%2F01zDdB0NjXYqFX8RvzOmJf3M2oV4K6j1Y1LJCoS%2BqUDcg%2FED4TW4ssQPHWfGyur%2Fa7Ch6JbNotGT1Li16LQB0LM0iKqz3%2FgoaPpWsALJPfQ6QqSXeiq8xNGW4oCeBP48%2FpUmGvp3I4wMaI2%2FauiLb6VoD1WtnzC376i1I2cF0ARpKtfC9hK9MVCkt2v4KfQhqDxGEK383VxpBLD6HE63aCjvejAD7fXkjyGZ3sEqztzV0opcmnKEhr%2BiTYtMXsFOMTFctDPVmNJGCxBHIR8qAUZZlDwIr0oEr18rt2MCqxG7vp65nV7N8P4RYodN3gxu1OUeoJHWNGPdYkvM59tbK%2BlGsru2x8GfwAx%2BE%2FaO5y3nTtW8ruzF1bSOU4g5Okx2mrGWIvVUU0NToRGOb7WtKauGtyj%2B%2B5v9AbawngXVgb62Z3aI0y%2FK16TD0Pnlbh7zN68%2F9xcwIgbw6hZEtuzsEy5pwpwkopIsWDy5seMrI0n1VZ9Xzu4uQ0KjFTpijGnbl0DhysVkTH2pb1JPmP%2B9QRfhNFPckymtfa9eYmdEHH88CgNTSALQZ3%2BnJH1YPa4rClwOd3bXrbI5ZKcH6nOxxNxi7a2rex0tnPS%2BkQt4AhwoOQWp4rWBYBtKy0MKCI38kGOqUBpNvAnjqfrieCq1F5ivZsCoRgyLzaJj4k745QNeq8FLRhpLFI%2BE2YFIggM7w5pmqv7xp9SlsTyskM3hS1RjLvL2KMGT8jpddA88Ntw1vhMJ5rwmomInpNdXbJPZGOi4llPiw0zRRMkWnvK68znkpokad7DiqVELijzc%2BMEFwASwpIouzGtK5kOQgcEsgZadQ6WpsPuQI6YjSdfuMKRMWBa2Q13Jao&X-Amz-Signature=d1938446f4039bd1b6a2a5d3a3c91d64fb6c883e50419b80eeaf6487254f121a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

