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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3EOAON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGhy6mS0ZlyFR3Gb9I7kcIC6Z1HBTenFLA%2BgVTaLvA6gIhALgbYhuyZbQj8O%2FYdB2cOkAc3svEmRjMSiLX8wKjSM4XKv8DCE8QABoMNjM3NDIzMTgzODA1IgwqF7OnYDW%2BDr74AOUq3AN6kks8PuQTlhPMEyKIbWlMfkZEP6Sv4QkqXS%2F4oI%2Ba4nefYydwME651rUAI3V%2FE%2F86LRdM3HPKSYvLytTRw61P1i9coGigozcTAYqT2Vj1ThJrt3dtV8UugwoHDkCfi3s5hu3Yuq3lFm19DS5BWwNi5GPIFXzcMBM3wCOPOFFQdhgj7VqFqgSDmX%2BD5cE0%2FwFU5b%2F6MMvXiP82Uf4WcLCCfZMuXREzeATV99hA9ALHq3q%2FYYq%2FVhNAGQwKTX4eUKnhp9GtZc%2BghfV0ZQq3LYikNO3G9SRp1LmY2ndmiPV9I4pHAnp%2BAtpi%2BzxwudUNUMYzr0DJv%2Bn6PdkTkMyyzt6grIhSPgicq01%2FbMenmcUhoAXRPDGBxt6eKVbD9ftMGdY6wHixB9D79VecseTSxYqf0KCPAyzIPhvUferARHHM4fomfBybPJ4UQR8owq0YXW3wDhCAehisr5CKQrgIhCt1RIM7mrM0bLI1qBn43BGqd4AywXKNWHvMzslOT5NQWT%2Fd%2F90Scsous%2B3iioTewsgCXvtDbmnLI4CAwgv2elgzJCUWA3fHYLywGCek%2FLa9C9RMVeKqlfAgw%2FniGNv6Lne02AlVUjjlYqoJnO6%2B0YYYllQAJdjLBx1ytIdzVjDLjMjJBjqkAYLuhD%2BwxyB0DUc3pixdadFbHRA85ZIwHii5f4hiPLapShntMP2lCF0XzqJ%2FDMVPnxn%2Fo4UdFhxbNOIgIgc6mKMUoo54EbaljeNS9B9CDk1SxDqWP7Bbph%2Fd5qY7rqQXHBCJEi1yMM%2Fw4fyBpKAl8u8KnrK5ahMDyh8jDSODuvDiwNquwmhqTHg09lV6ierLcCzPo5bMNHrfwgPaiLjizXzKcxPr&X-Amz-Signature=60a6ab9438f91d3d925d4c19c4330bc2eceb51bfbeaeee2f81ecf5383e0b4bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

