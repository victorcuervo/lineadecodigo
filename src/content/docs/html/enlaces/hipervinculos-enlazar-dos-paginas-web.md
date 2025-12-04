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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6DHA5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbZ1mnRhEMOZO4HRplp2L%2FQspxfrnzj4hBPVFaC%2F6vyAIhAMkvcMzIw49R6uo4jCl6t%2BaXIMkbrgnJi39W6biy6JArKv8DCEkQABoMNjM3NDIzMTgzODA1Igz3vib76sqwdKkyKiAq3APtPCy7JY8g%2BckEMMV8Zld976VlhuCb%2BvAY%2BoNlXBwyVRvyFKyX5lHBeMBQhDnTeunS9VGYFaPvE2t856DGrtUAZd4U%2FhnekEVQo07KNlg7EhtOp69n9Gug0Buph2m2c8msv%2FYfqi3dZ6ShxbR1maXuhbjo%2FKqjSMghsDC1zspyHPb9fUO0DlRcwXGIDylbZw3Ax8am7fVSLe54JaXcC9br8wpImbEXVPx%2BG%2BGDNvCjwZCf%2BHX7e0m6uTaZjNjgO94UPJtw6OR1jeve3VUXAMmnIe23s6toIarz9PV5CIJKCt92gIlNAQj%2FSWxJ0jeouGxRJSyOR9ElJjpqwu8%2FNBID6CTVfbiZXmny2H9oE%2BJHl1wsO9ZEdymjwxt80FomIsGg%2BozfnD%2F%2F8ZND6KP3KOb8hXiOyoM8OZlz89MGpno%2FLY9WTbYXNDCHwMaeQYLMHG9ez%2FrH9nUV%2BoC0m8xN8XxC0beDfAu2tSwU%2FLjMFg%2Bk8zVM2DOLk4vYoBmoEEgVBzLJK65UZXJGoDa6cKaSvswCbkAJ57mqknvJbfcuvnfmUivXu5wzqkOm4bNv0877yBWfMaC0Mrn%2FXJrPDSh%2BMKkVfO3ZpPGxdbV7LlfilALVc7Gidj1ibBUrGCIX5jCB3MbJBjqkAZEg6FWuis%2Bdp2%2BWmaliWfG3I4EigD2FDgZ1fEJhmZTftDykliwl0rpvSxX%2BBuaLM8rTF%2BHizyMAY5BlQ3LkfdYkTmIabQ2x9VEr004Myu2qSTNYSR3ossC32GM5gdiBKfR0vmgKrZy3PhGqkQY%2F6xSnDaCbeKD5w5Mm%2BJbTI5JFaSHU6Aq1MpfnZdZg0G2kVirCPNBLUVPEu0Yxg8Bj9hvKTZSo&X-Amz-Signature=a162f06b1f70ba1686ca099e1c63e2af86a5bc99521e13302c843c2ad8686522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

