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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EJDBYJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUZpXetUKabbR2f5VUaJdqLqOhE7m2HdlpnuvcuVMovgIhAM1cpJ67Fg%2BODdZd%2BDQquEA0fOne4DG2SctQv99ukHfuKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGK6RtbFNNB91QQ8kq3ANBCXYJTnF5I%2BlvFyugggTHvqxK5Gq2Q0tFB62eFdZMEjdFFgMDX0vj0lfzI8sIrFhZBPhNJQnu%2FvNRsesF%2B07c66VBeyZRUjRXp3K1KN%2BiW2oMIUa4cCPnOjDl3ZNy%2FMyezubTnCmaKpV1V6MZ85KHngrtGoxBHIbZ%2Byrai9Eqyvfg1HS%2BZwLqjQCl9A0ArNcsmiEveEsn%2FM3IBmul4jAinOpyq54uDzBD850e7QaviE1oa2Ni6YsXLALJPmr1VI2FF7XoozMHyheEHD67yu3qBeoNzO0CAZckiizLuXP2hwgcRy79P3W2Cjg5nvNlivlBw6ejwDmCovTZQOpYqtxOI5j7c%2FfX%2BOgjrtwCqUzZIFrKEwkorFYypZyHbR6zSbGBkP%2BjwLOq6li96OMcOXu5hpVGvYCI9LArjmBsBvpHqRddlg%2BctBzNbtsgcIHKSgNkB0rSua3rW832THo3uAYjIRo5n4Am0uLdAjvR3rMeVvkQ1%2FfQBkTdx3XPTjZRD7IYRd4UG6K3ApoY%2F3X3MMT%2F9Grk4MoSPvGnCIcN%2BRhdfhMx6UCq8Ipo0LI9A6toPe4JD7pe%2FS9eiuhRkb6VAblneL7zL5JRvAKEdmsgvs0Yeqa6qwZGfGl2VSo5xjDJqNfJBjqkAZ0iF%2BK74BNA2YooEGkhaY%2BAO5brWqhPos2EPG4HzsFoLF3iW7rwxBNhI2rp0T1NWkY0ZTVqh2g%2FFKoZV4VDRLwVyKyTZoxBSK7xPM0DJro%2BC5XzIz5Mj%2Bpj9dqfu53Yxa2fKCtQ2aFqvPTUF%2BAl13h6WRKcaou294CC0qDId9ELjbdy3d4LjXeM7kCCPss5ac%2BsgZbR%2F60rDIdhIgSxan7cqEg%2F&X-Amz-Signature=0b32fe7cd83bdc1b424c074ab22387bd7f978904bf419b1a3d4380f1cf4a3935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

