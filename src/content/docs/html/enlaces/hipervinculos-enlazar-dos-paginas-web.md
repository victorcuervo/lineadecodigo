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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JQYO7X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwDaX8f5WmVaxMMEE%2FdHSMjpQyuDL5F%2BS2UvRDC6K9pAiA0C1iq5cJ7ooqjp2sSPZtxpfUztsOKB7pSFj2xBQ3NpCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGEvz%2FjteWqRePnv%2FKtwDxk5ARQoVXBLpvwV0AMdELxfp6rymvSJ0mYSBCDrrTEXpJmRcRYAErpLviUZ8UVdl1NYPXMDk0FjddFJPEucwRAmw0zOTtqG1Dzfy3HuS9S7xpyyZKShivjiDrflO9HnFMHoZ3S%2F3BUZJ%2B%2Bk85lsd%2Fs6ZmxqVxkhfztgBGQ7iy%2FdoxyFv%2F4ZrSgBNOSpqaubmFicuAnz2YgnoxTivBFAK0y7KuWj6lUzpoG1IMpdMgPDnYpEfvNHR5PMO7RXu6elGSlV%2FQHmmqQjS8B19wH1xpko9TgZ1Hgt68tlbZSeShDmtyqTQJvw%2F6%2FesgIfo2a6f6mal6anTu%2FRldnDRHxau%2BxQhFY3axSC9Pes7KF73UDsjl7Y73bPjEvgpzljqFw1mHn9%2BukasvdixxbnQ9HJhEYvUOYbFerczSyZClSIazP4DtqxrapZM%2BZIOaQfjcGR3Zd9fiUn80laOnOPYH9gLgwkItIAoKjggMawGCZG5zEQiAcF1Tdsieul5iCvVxkr1vTgiAznc2pXaO6Hhd5l6LE3vWSMM4iNDSJKSUhrjoIIyE%2FiVnh%2F5%2Bh6OoijMxD%2BPneG1qMeaFjAdKMySIStQ23BlWXkVJdzw9aDT5aR0TE1vzVJJ3t6LFnQM3vkwlIzIyQY6pgHp4qGREjDUdgS5gXaCKnrT3XyYEelqn0SoWpAKCmT7Il%2BdSIXP1ZdpBFQypf8q1Vftk7LosT68qntNo1C63RBqz0lTmt%2FIbWxwoaM1V4XdHLyp2OTUglsGR8gX4ogCkTLfpJ7tD9yB97HETvB8LBiQUVimpKYW%2BHE%2FVX%2BLQmojB%2BG3I4TrXHIhXdpyt%2B2%2FRxLL85yNIXWKPsDhYDetuIMLTzFCADT8&X-Amz-Signature=a54d3aadd5460dd4cb6008d07e1747aa9523f85a9063be7499f91f8d2d5a59d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

