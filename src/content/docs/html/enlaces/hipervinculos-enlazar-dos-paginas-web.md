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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXEQYOQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnl9ztcP0Gy9vXw0N66w49F1PODB9442cq%2BKC%2B5Qu9PgIhAOUDnTQtucuBXOKwmVE7syZfdvr7owLTAxOz9h6UU%2F2dKv8DCFsQABoMNjM3NDIzMTgzODA1Igwz1PhWnNdSFkgIBC0q3APlIVbjJSCQUrvRetigSs5t3CJgXx9PhAjzcS1pQ0vkIyF9SPaW%2FVyAK02YFjGK1TS1HZZTR23C9T03IAke4StwLVvYoTrHt3YaYyuGa18LKz1NXq%2BVmTEpzlu%2BbwBQby%2FcipIwuM%2B%2FVPjzbsWBPqewJVpr8xdb9Ypxv0JBoL44SbUh%2FwkPu5f4%2BGNHACoXzYChuH4gogi1R657HfL90I%2FcgotlaP9wkXZ8d6tO2WsdW7bZcoulVUHGHVY3fx4A6iXLbIMIOTyF9lIUuLpoIRtgLp%2BPGsf6E6V2tnZghNFKtDrJL2s8R4tne%2F1FUPkg1pKpOKhgya1ftB2lbieFVTnTn%2BF11B%2FnH62LD%2B6afF9D3pJjwnHGDIcj9M59SPWQ7tUv0ozqj6CzUew2VcwTloD5lUsJH3Oge47zRjgvx6u5deUsmYrqFpF7oU1iBxwCv%2Bzx6qcsxkNfJWqQTtyOrQMB3tCoxZX69Lote%2F3u%2FjA1wydtQQqCknmjcPIaon715Rz26DBqHr2QaqFxVwYJjMLvAY1eKwxu5el1LnCeNJuYWnIca8kYLhlxtpI3akjl6oyJfe7rEVC3cI7QDBP1ln1sGsjxZ1%2BFjFSWAodJ0Lf%2Fe3K1GwmHc%2Bjtz463qDCf0MrJBjqkASDIP0U18WsQjTZ8Gehh0gHc8dfxX5C%2Fu2EzHuYoqIbuAlsixolDTu6LN7lXL0gcA4%2F5mG8xiroNFJRbMLUTYAjn71R8V%2B6svZrJxeRPoALwB%2BKRsy9uS693%2BH%2FTPaagZW6%2FpjU%2BQ7vAzIMG7Z8BiTEVOuxZsXosVJvwxUab1vQySXeC37EHaU9NBVjPUwyRz5cOCkAbAe6E80%2FQXorVPQl7K3J9&X-Amz-Signature=9e1d78493bade1acfa178320b5bf318bf4e0bce85e942c9f6c34851925618f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

