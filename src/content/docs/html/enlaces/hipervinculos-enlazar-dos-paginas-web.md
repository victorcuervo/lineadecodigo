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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DRADH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUPI0BuUzcJ5sgghYhXDAnofL6FaCkm%2FEcnwiGbXYFNAiAHCfXICtbPBDoz6Y2ehzXMYro18xH8Fg3BRZEW9bVPHir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMG6afApWL7%2BmAfeSdKtwDu4ud7QRZwPq7xmdqPpiYwsDlXYz%2BuodRq4WIR04Qejf5xInr%2BEqojd4As6EQrmjcvUdsKcd6XZ0ublWyO9FtoVUl8JMRi6AdRNLTmlPFDuKjS8J%2B4eWRdQtguqACp48AuFyuHBAW1C3CCA0nNqFJj1xwML8%2B%2BNf4FD9oHbkrJs48DSdZWEkxaO%2BSPKfAoMha1MLuyuE7ZXOfe2%2B%2Byq2pcNxj2irv%2FePXyXbHCMODC9yzeyhbJ8f3rZp%2FaheFdXWrGqY4N4z2Et6kpDAvKKPad2ksROOzDnzk9Z2dxec6ZqpkI3nmn3K020JTW0N7GXoPfkPjDE5wYmo%2BPW63LTWbu0xn17ZdCnGyn5wCvEwNpEG%2FTCBKc1gspgMmKkahKkqI1EXk73tmUB5ekvtTuULOHcZlMZrdA3HJN6CLUcRrjig3wlca12rZHSRb3kH7BI%2Fx3O34GIAm37ursU%2BjpVq0vhpakyR6CIA1784te414d1OCE3uqQFkAORMZmRQxDwznf3uWDL3BER8Vy7ZnxAulKlgkPFf%2FKSOZb%2BUlF%2BgpR8VHHwGeVR0asyXic8FVqvVEDfDtJyMAveqXGqbcNmoOvn0xIOqQMt5yHuaXxFSB7UlA3zWDV0v2Jvy4xC8woqzJyQY6pgHXVe5A5mnroBXGl5ax2LjhjBkqA%2FlPHwXbfdHSipYtcAH3PpAg6lYsW1WduvOBbtkCaBLsNwohPkG3rst%2BuN%2BsWpEoaiPsAUtoYjewhaBl2mPjnqjhDXt%2F2%2FfVo8%2Bz9azLm5RmoP1SZftxf4Q8I%2F%2BS3z5enzvch4tNG9C4KSXrXuezps%2BS%2Fou0d1YKQ7t5aeVO01qMFFh1Dwp2vTxrQpi0sqNdhoPg&X-Amz-Signature=93a8be42b4c9d850eced39600db3147ac8c9516078dbfd36b80603164c609b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

