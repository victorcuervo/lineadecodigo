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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MUQTBTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYV%2FmFvaQ4GcagqvwFZx%2BUDk23u%2FUZmqFPskm%2FnLwjxwIhAKEg2diY0u2bGbuv2S40z7zY%2BVrAWnIQh2FugMlRhFH2KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBTI2NyiQnau6Zyk8q3AMTh1oMykm9%2BgIxYu3OFUrt8DQ9mbysmJk%2BJmxyAj9bHzDZH5V88%2FhNuITNmai%2FdF3BaLdvdt9S%2BFE1UVihKOb4cz5r6HUDPyugEIpUN0dUDzZmmaGOlok5rtdo5aZr2z0YQBV6KOthwlmLsbFhxDr%2FEwUom%2BdRch7RIKqV%2Fj5452OxofJzS6b7ejeTNsslUuLAR99OyM%2B6KP53DcR8TbAQOjVxTPGaJMsyyep9MI3syNzItZmQ%2Fmd8hBk5%2BahLe%2FCSwsnHFkdTsetc0X2QsG%2BKsRQCon0zM3IMDFqiLKPdmDy3hpT3u1HbhlVmPOthXhksNFOyEuEUfzzpuzpuLqYHP%2FMby1hmz%2BCoGkOQYD4zKx2n%2BTWpdnoBoiH81%2FG6JuxnLoEEIbFKK%2FZ7AOSqMDrzYdvrVyBJa5LikwJgyB0wr6Olj6yM5cCrOxvKqdG2K7RvMoir2XlsuEm29d5E9HlbsUPTKrVNDRftQWwecZX9CSbm7xi0e8E0bPcPG9uZmLfU7aZkvru9Kt0V1LwK55kZEDFr%2Fn6bu2s60HJcLegje5suF39AN11UkBNCcdElUP7GqHCOOjq60Zn%2FA81xo9D99sKqHnzMsq0ze82C9NhuNwbwmg3jBo43KBH2BDDYoNTJBjqkAWGbRPwXwZyk%2FYw7TNW7NymBJV4vQQydmqO%2FEAhFjTPHVbyrknWs%2FKysanYuPWJJeScca9lKNdOb970ZK1ZySWRydtzK6KCXze1V97KFht%2F3gTsg1p9b%2F%2BQFcrcdEp7z4Gqpi5qeQN1fHsNV0GhcXXtkcx8YhYVcoCF%2BR%2BT%2BItnx6hTA2tVSLQRo9sDu34w%2BxMDQ6kMJAExE03copfM3cLOQZoW9&X-Amz-Signature=cc17a10466e9a3de1c19ddf8b632cc3786a312e193cc8cce6c9daf326b2ed9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

