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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFL3OKXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJNfcT3YUQSQ41ogMjGDQLwEn9sDsutviu2P92vHzDlAiAWW3XLg%2FEdBB6l6KJZLw5Y0Xssorq2zEK4kCuaAjTmriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW9xzJ6fAZ84nPkHxKtwDjl%2F1PXRJg1SD1tsK61rH06OFpQgUxxw%2F%2FUqe8gVrJOmQM%2F0XRWC3tX75FI9aqhbcRnwSSj7KPvbfSaw8MYa0fqGofe9r45bO6d8nATLYNrWk1yz%2BPvnj1ILRLT03qYdiMrn0drWBc9pYWbieSR871OT8Hzd0Kp1FrDdCKRIbnB4EsaciAsnyirRSzjfiptCofMo7ioK8wNtQGO7t0V1P2ExgamW4Y4%2FEujg7kfQZqKxJSeyTxa%2B674FEUdH4cWjEikVeguWICHBOK1VazQB2OsjPMKc7x1R1XyFsydqhrk1l%2BExkOvFry9bEAexAjV%2BPgtLbnf9dQ0DN9xXjdKMSfD4nple%2BIpVvZ%2B43Y8SxtAeCUt%2Fizi47O3gQoU7h%2FFLqYlq5QNSA153UqrKu9sCUi0jCmh3wgpt20TWzkh4eNC2q2aPewj2a%2FTNv5AV%2FNgfj0scSa05yi5QF2EFH4Wqi4kR7AiEUKWBeVecGIb0QNQXUFPTcPkoEjmpKmOO%2B6Yzw8hXm0NOw6DiXjloEdJyhm2F%2FUJVXvSYl97D%2F6NZePoijv2RfQNadkj9wdmpvMeiANcCAPWijy%2BCIV4r%2BUxU6FboOeOqqktdxWW%2FOgRusPm6oJdTvySJtatwDm0Uwu%2F3SyQY6pgFvhkLGWiUVmtUu2XDhAN9lUAeDtAUFxHS1yp9HdaPDUHcjQ8%2FbyjqZoeORUslcH8CK6oltZXxt1YDNzgXfScuYTidp0bRAolNt1d9PftZMw22WCRdWe0%2BgLGwYR0UJNkj9uRcNC8NDu4VfpinDLv8RH%2FP2fspzVw%2FLYmUY7QS7jNXzimC8O7qoi1AGqpAA%2FTmyR%2FbMUcB9%2FS1uO9PI6bgoETDV0Y8o&X-Amz-Signature=247d5a328eac5e304f3dbe431487ff1967e96d7533b78a03ba980d6e45dfae51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

