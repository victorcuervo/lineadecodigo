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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7OYHJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwAZCC6jeABxc4CcyufKBENkus2njxMwqcvOENenlUsAIhAO49Z55Hv2RR55EsxzZ34K28%2F%2B6AEBPbiML6v5Sn36zUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTNcShLWBzkEJEzh8q3AOvGgHZbyqABMq8N1nyEqxUwOIMtuZDjgDJbf2%2F0epzEY%2FW4r9TdtDMSsp%2B4MqFW5rqdKA1GXIBKRlIshiwPJCDfTtKzoXEnAg2XN4ocioiaJ0Wx%2BulUpCDiZxxtP2v7nttD0cZJoKCwSt35vPM0U4FlERW9rkI905KxB69UhqDSXCXeX%2F2Jf7bwLk42Gy%2F6YIUBLlGzQV7fNW8PgiJgHdbmAgZcfrUt3FE8%2BAPMDIXcoDdkwNL0ZYXLBZvv3R5il89O7M3Y%2F9IudKCP0I2Kbq7m5el5%2BllvEgvnYUkVi92jOd%2B%2FmX231LPliBsi4Zj8VuygHdcf48iKkCkEtASb93q5D3RM5luLGv9%2FvK6X7eYhmGMD2sxzbcDoSy8duyseWvZ3XrxvjHcglnQ%2FuQrijwy9wMZ314jvGKIuEu4oK2AwkDYvBOjt%2BFZywoiqBWlJLY3Tr2ddYIShaK83XsJI6%2FHH1vf1GAkJ1GNKFV8Lgp54Wer7zEezsrVHNO%2BYyZOVq7YLnNyWrM96f0pRymClfagA0a2BcCzMBAa6yMA2rpA5MAd31aP%2BzkxZP1xpn2PkkkMa0ZIxSWXDkCk2ezluRT2lsPTN3aQydQ37m%2FDh42sxpjYZvYMay3NJ%2FNaWzCQ%2FdLJBjqkAVaV6J9duJxUyqnSQZ9zYdqD6Rui4dV8vCIY8fmN9QjXm3KF3f5mjmOZvjpG97vAVfhB4J3Gxz8YdlnGdiv1G%2FIPBOyyUaUw4LQCLp5p%2BuqMP1HaqUr2qZZInjZAzjkHnD%2FgchyIWXH1%2FAT1o6rLvMgt0VSMekKG42ZSBCfoy3UGq1lyvM3X2Kl%2BdoAWJFpzHFkv0FlKAUKeYUhifr%2FHh2w7S%2BsM&X-Amz-Signature=888c6969809d7f670af13c78d108058fe9ae272d9d01d2d50c7fc8edc5bd981d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

