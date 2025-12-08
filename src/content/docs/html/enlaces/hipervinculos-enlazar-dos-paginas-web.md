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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBA67OBL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBmMLHEwHoLac22bfnaHl8aa9EJIiDZaCCKNsgrHwTpwIhAJK34Oquqj8%2BHaer%2FxoEyz0CJPVF37%2FO4nWbv74M38agKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPLVGkN%2FJJimq589Aq3AN7ri9VyBy7YW237N%2BB3GIBFtSbcvhpsYOpS8A4iXpduAqib%2BrBcPUHEEOcpDVIJBoLH4gvInpUw5exWOvErW2X69UnIMTvs0yrSom9B4D5YX4ZkMMdyJ8L3AHy%2BcOVrSkcn9pvgZsbppsLmlwQO6t6gEP7I33wrCL7cZ%2F405re7xshhRWBTi%2Bt9fol6NLWrl9DY2N53ILOO189z78fSOFDYP5zCwqqc3S%2FbrCw0dOmBPvpuUvBJez6UjrdG81Mamqodjb80jGvv8%2FhuVwN2Lhk%2Fdo%2FnfqHwDRDidUfUj%2BUQCvmWYM6TYrlLGVFC0n6I3zwsc4Jb3Y9Se14gZuX6pEytryO9Ik2bXgnrCG%2FXIZU1vFJxepcseASRcpWUZTkCDz1a%2FutgZ1oAwDpyo8dRpZ6QIwzmlYr8yXHeLM7sM2SaMFgWYUZGFK6zHueOj%2BD3wYI9EpJhO221YRuzueiuR7Yb4bUgYMg86%2FBBNB0HqnyuPW2UuljL6s20VshCq5SkdtnDThjz9AuFyB990JxZwXOzD3CLk3RQNa3P6yDc%2FBc9IuurvtvTcLuMAuKEQu%2Bsqnb9KHofQCw9RZh6BVrhA9CvmFWv%2FoH92ERN%2FOKbGFX1RG%2FWTQNe8ai55WMajDMkNvJBjqkAQX3fTybVw0%2BROnchuAnb9QTH%2FEovd2xtS2kDT7rc8WBm9Yho1P0lFuNYNmIG8gO08uWhG7g4kuDaxkK6oJYk0YVWMoqelxZFx76DwNCZk463h8oWPUvQXECExTAMHkU%2FMouJqQgNEkC8BxPiMu%2FTIKEGnN56KWjPUgMthRU0nSicPWRKxtVBq4pDWY9xraBg46chnpWgQTHSSe9sfmQJ5CfGngm&X-Amz-Signature=5637cc9b75c033bfec2709905b405b6df7f892e27d4978b04e24cdb70a79fa5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

