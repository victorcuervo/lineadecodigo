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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPWODB5E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLM1CXeWL7A1BkGGNdQV8QKrhZWFAEXMXD9TiV8qAWYgIgKM3zV6xHnVFLcNolUdHbMWOc4CDmWtW6Zr1QZ1yOzFIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXCCy2tz6nO7mQI8CrcA4my%2ByG19DC0skBUPwLvkHJTH871WwkO%2BuxSiXYuvWhn89oOBTHWk6OFK%2Fex1FvLfeEw0%2FUXoS4cgi58qw0UIvVx6cGOOGgR%2Fim2nqjvgCAmWzCTDI%2Fl1F2jjnH%2F4UY9rK%2BJfJ7mkg%2BVl5e%2F%2F%2FB8aLiEO5WBBHTLOhFmtE%2BCO%2BRTC0Nqz5tWnCU6DIoGQUTGrh76p3qFWlP8Ay5Gscue44XsqDbGgXV699oPVc3FQFHTbSHwEELjo4ftwtkU9L6zLI3nb0QaTTaJVKZ%2BFhkj6OVV9OVqhaLgKhwqsU9h3UsFuCO4xj1%2BAGE7bLL8QYE43n8ioJBjELyfirPqpRRiFqRaN49w8YDy8SBidefdmvsQrsydJeRlzLypVTiWQvHHriRMAIrsoO0ysaMb9WmuCtCppx6OuVU2mV8JPDSiRKTm03y3fGhxEKzxKt4nPUOqGct6q5bpy2cANlG1zeC7Ef6%2BEkIi%2BzHTYjms7xEWxOsXjZEEthcYvvbGpG6bxIs57c9urVjN9fURMF5dUxIXDt8V8IaPz8sNt3q3DcOIIHD8wQRlZ0ilUc5r7QqeQfoMfYPu260yxBbO3zdPMKyTp52T8RWz7eNvPN2WgAWxN6QrvDrQJ1mgd2006To7MI%2Bi3ckGOqUBE4Iy2xOjeFq2NyPIX1bs8i2QSUzjdOSHlP6PEp0ogzzITK05Dt84vxoNauoL1JFbqajeSInVesNyd48VbBWy73ZtMlBMwcBmggZHEZLaQG8sm2xVxECxOkySKeBuT0ALNCIpn4oop3iLCBZLwWyrpNfxPc10QOwUG2N22l2WP5oLrn6%2BtSVX6A73u78M47isJ2uDdjYAxn0TboZz6eIN3NCbE87d&X-Amz-Signature=398f61ef8bab58f6bd798b9efd01f10f259939a61ca771e62c8c33041770e2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

