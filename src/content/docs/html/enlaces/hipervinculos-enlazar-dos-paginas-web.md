---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPZZWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEkJqll%2FDvN5sM4XN67O%2FtnojE5jDClxb7DC0jB1iCB5AiBChsN2aJ1KvAUyy8kubzPFic4UhJJmyNNdrdxzjBdP%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLOS%2BYB4Gal9MqCS8KtwDWlQuuFOaWKpJjzsLTJktaEgjC6xYAwu4GbwZ%2FXp4xEvOo%2FTF1NWo%2BJqQ1vjQ26Sf8bnfgL979T9Q8Mz2b1TqlomiDDpOTtWq4rLB6ClfKyBn7boFLgI2louX5B%2BIfPIQUiCYTyJh9XtXe%2Bdo%2FYpQ1RWuGUxV38YIKI3hHcfvbN9XR2IpTX8wLS77NA%2BUUuDqchLn4A4mDgw0yZHH1Dw0COgTF%2B%2Fr%2Flm0VU3xj5IaToLolY4rSK3mZ7KtSPYiRxNNr31569hcpk%2Fq5a9fBx3EwtWjbPpjAA96aw1%2FmxIT1QFWaAP5Ll8h6wTa%2FGIKvo2GidxoFkB31B6VzHEKXQAu3cP3WPu9HR4acpb%2Fm2jliM%2B6lMCR0oUz1P7FGWCbu8GmwBbDrjftMDpxWP9m243bftRKhkKIOwdKxolEPnDpTeALKaPxHa7%2F8dLUWMrNZRIF%2FzhcdE70nFLnCyCHIELORxJli7YM8UceB%2FnaeyenlLGdNYYBu8pPYERTSpAm8ipI2ycax4MnA9W%2FkUxJkEo8KgfqiXMgz7kBzB%2FDm%2FCDeVAqJD6ZO93yCCR%2BYG%2BocCY8aFhMH61gSltPZmefH84%2B8YBeZ863bIK2zV%2FOGl8iCdyt%2FbO2XUMC7Ilw%2BpwwmpXDyQY6pgFez8wpTANm2a7E1s8fQyuDfr6Glw3AV6ejzJaff%2FpB2cnynfyBBsDC5cFgMY8NBcYTcmNS6h%2FKV4W1IrlTOPDlqa1m0O28HUJIFu1Ts%2FfhS3zabDDNV5GHeu59Rvsdtj%2BOKUWibfd1dD%2B%2Frd8v%2B3Y3qyZ2vw9VPevKDhf6OrJLNAM3dsqC7cWm03V%2Fv0MtpPlgXx%2BCtGOoFh8%2Bh3Q1e9EJsrrY%2BS1O&X-Amz-Signature=80a73982769e769f4ac9612c8dbe33495e5cee58c2146329801ff3a92db83269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

