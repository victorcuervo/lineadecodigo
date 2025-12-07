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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSR5A7YM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo9wPPzdlS0zgFbx1piB8OIfMQ%2BD%2FAWqnIJ3hnmQIEyAiEA%2ByVDwMyq3lb0kmGn6ydaWTOPZBmH%2FMWzFMx4msIhRhkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaNC9Z0fwFAB4cefSrcAzdBxhcetSYpvT1J4LJ35SX9uevRc3j11fq3KGwmITmIaUguOGktua67LPCO69nmp%2Bja6a6i9i4%2Bp%2FHZzkcgZz7kDE%2BIN57HsgUMBUf%2ForYSblEEADlRGlN%2Bg3hEQZ%2BNSBguWWAmOz9rVyjoZ9tcixmD71316OKlL7K5IKkGpDugvAdCWzlTt9ana%2B5hm9DW5BzaXBkYE%2BmfCoZoBhtWF6u1bfqOnOhSA327mDi42JRMQ2AkLjwYZikg1Gg6%2FYlnsql6STjmwvWnkBrj6CWSGv06VFf7QZJNRGlu7GgJJGe%2Bjm3eon4%2BCayRsejD96mn0ADqOSAMnByfZXBwhoeEZZUZLh0C8%2FXiVmnztutTIdKI8wZeS5efKt8vZn0NSQg4iXRy6oTPOD2wj6%2BwBtlkMLilIsCF5lZPKt2MNycuXsoF5wT%2BBfGFX4GJfLvLQq7nz2ae7K1ic46%2FqBBA5pv9osj0YgpZaEchdIfek%2BHdkKPmrmFBlMZiPV7%2BElS5Fju23%2B3UyUnA09nKw9lqIxeG%2Bznq1Txp1fTjgtMooO2SRKX3w%2FNEp0Y9RLNQ%2FQJ2k4EJhaQkA3ZJTxqgRA5JmiqRcPRxi684zO034I73xyrIUAj3cgt%2F2W4ydrxyZoPZMI790skGOqUBtoeVIzKNRbIRuRTM6n%2F7X7bZNcDHhURsW2sY6f5%2BjafEjcejc38fSk2OUv9S9%2FgwbBEnQG3q7iTgAkYYY7VqrgntLY0h1mie9BKkhZT9pmTBX%2FVEYCx%2F7o0xuj9sC%2FaM%2FLi2Om9MwtOiYv%2BNzLb6v0U0vlWTngcjfCJFF4YPJKpGvCrG%2BP7F67drW%2BocqeUcUNrT6oD2i5VL9ZBQkZReY%2Bdkqze1&X-Amz-Signature=8d02622475d7969d47501bf3044cc258bc8716e72393859fe97b24b0ff4f13ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

