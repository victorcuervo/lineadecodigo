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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LDBXE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwp2Sqkhnl%2FF3da1XcMBTa%2B4bJmDvH8O8xOMrrAf40TAiBmYleO88BeG%2FWCtcvuU5v33bEpHsB3OZKtVN1lLfG29iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfi%2F6tiHMtKdcnaG2KtwDqp2aurY4bcsHKHvHnGgqMd61IUQcTs%2BCRxD6XiQh2iq9pWVSfDgBjXn4nkmkQ6T3yR7u%2BtULMQxtIFHSltK3sv5rkjV%2FWR87LkZuC65iD17x47B%2FCwpipTFrUImZVSdVbotC8GftK4WjEL0CvTISY1kN0Z9PdQzuE4pDRV0Zbk2RiwrXzMkoYV%2B63FpEx%2BwC0vk06dYGifhcW19TNyMiywILikBTOadBsbClpHOXXii805AiSCDc9AmnB3a8ug04pKdpg0%2BuNr2ez7OkXGKai2lbuGywpPX%2FvXlsTKaf7gv9AqjVb5Yl3jQRupHYFut0O5d3uVduhuzdwzVbWofFgJnHJKb13cMrgzJvuAz24oCvSPhRDqeooP5aAlOmv75cjni%2FX3AB%2B4kQRQZyXGk7hwmibfiJ5PodKrSmyWxAkz1EBmYBXAAcYNyk4PL2oXFVUp7g2yDSZoAsc8dhZEBdnKgn0rh44w0TkYy5gpII9JrFVOipu14NOvQ2c6%2FwCG6XYBsjlDWEpTxxSmRXgXGZFFIr5KwioHpPW4sh6bkFWXFE%2B%2F8lJFZqxShhCymKAm6CP8HTVH12ahydC11OYttN4XndiLKyIdN282qMLAHdWVOB7WsgMmOHdWPsKfow6I3eyQY6pgGkD1wucuBtqvKw2bLxgVmBnnNfg4VMp%2F5LT26Tg%2BNZ8RkWN27gb7tmx2YEDjNiV43aMA8mXMZT9lsYfbYBRUztmIUzeMOAY1zm6K0bjB1jdwNpEXK8Ml7vKDP1bQGi%2FSvbdL6CHRv3IZtM2X550lN6SUp%2F3zGS9JMrVpkKq%2FTMQvYVlBCDT%2FOX%2FtEDczJnES2%2FA9SzAp4qmaweqV95qIM7uWymBpFG&X-Amz-Signature=94a62695b97703970d4a82c5723e39400a96ed31c82a267fc98c791828b1721e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

