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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGD463GY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgvKTXdbCCyRxOsIamc7DUL3yPoRK4IfOIomw4hJAX2AiEAgWOwA8q0NlqM0TcWX7vSpx0m8HsKP438iyts3DGuCUIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOTp92LavH1njIh1OSrcA5wMXOV3EvOgm1KPzeaBAnFkqP6puvoKLv3TLDJNYpWDI2gScQOvdlO5FtXkGCb7DnYa1sSYgnLjfbkTUphClJYBc5JRmqazX0l5mb2z6%2FJmjr17p8ryDZEsoWFayfR9TFxU%2BH0NXRzaAC6Y5d3p3%2BoijIcMbqRGl%2B85FJnbV6eMTSwgFhPWVgkEefMPT3X72wQz5%2FifvL7YywSjFLTBGxjkSZkMGWeXMYktXpXA6Wav9ftJXUbj32Paj6BevhxiqyxwquRo%2F0uJ5ve%2FQx2Bt0ZYWYYKL8%2FSqVzrlOONzYC0%2B2F5HB1KkrOw6hqu%2Fi%2Fa8t5o6gbxgXNjQ1c0bjUvpSJ7R5sSJ8uDRPYZNszel0OuA449J0DIjRdSpLYTbsgE3H4x9fggEkldb7Ux8G%2BX9ifkYJHXb9Lrvpy8t7gvDWgOvb5t8ZXoEnkn8ORCOF9IPO1b61HtamidO9s3vl1GHxkF%2BACthXcZTeFojvVxQDO9kXCN9hGime57uBaY4Y7KMLz04%2BbZ9okdQgcY2BQ0PpxKYhbE9QhgOpY0RuMCbLkD60kmuZ7By7D4U2c8Aq6L%2FNUaD2ZB1m%2B5tp5r7YSCCrJDK8NnklIoSrfDzj45u1%2Bs9RGBwVHtVYRB13K1MNzUyskGOqUB5of5YdfhwwGveVtYrMeNZANPRr16il635ixSBNalP%2Fq9TWdi3RxAP7ixZuXnFtdZJ6dRuP9TsSBzUHcN95%2F0AHUJDGZT0yyTKSB88JYsODrNkdvCENx0Kg1A2ebWHvaAhvZQHHSLBQb4ggDRo2BBWJfEQsuIj3X60pPk%2FzEve2BJ84xXJjwx%2FtgBoVXFbl8IPXIPCKLRNqnLyl6M6xW9kBhUM1k5&X-Amz-Signature=ad13ae583a3776aa001f436a4d1889627a004d0bc01ec561c370c54927387c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

