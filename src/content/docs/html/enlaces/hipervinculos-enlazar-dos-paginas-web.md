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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZ75E2I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFpT5J9hytv7NTKMtsTq04%2Bx7M4EwutHhaClg9JUKYTFAiEA0gj%2FbyAwMqdjOti8uKjWdf%2FdsXjGjyYXef4aVsZ63Wsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJPDV5iz4VMX0iBjOyrcAyOosCP%2BMLDveBwhldEXrYt3TG%2BJIoUIQSDRMldqvbQC%2FILYhT7Z4VqNw5TYjfUZb2rqo9ZyAupHjzQC7wh7EBR4CNdARYf3YIId3TzTsqwdU279AO%2F7no00B2WJXconeZ4Kew50JbH3s7VGbZZDgYpTAUJ0TCatoWJ7V%2FjvokAhOI5Rkv6FM%2BFJPuAo3Txrgr7jUIYanCYl1ZjAS77r5LiDop%2F9klq1hap2OWUUQQv%2FnTXi%2Bn5m151%2FcXsbGg7J1Y2fG%2Btv1gEdyCN00p4XIQAvw67eKUGKx4gL4Y1dHsbmokwYFdYOgwDGzjWUrA5KVC%2F9cKG7pLcXaKcwC9O%2F3xipVbiOky4tl09D%2BGX54XfrWvuO7KHAl1768exLi3UcDHPwss0izfd9sms67gl1rEDf71K38J8XHyMiiXRz48cVXddT6x04yI%2B4M0QWkNj97pu%2Bixi1bZs2QhdeNo3pFmNUa8zJOat%2BHSTyBv6nFJiSku8rGOAvtkpAH0NcOTF%2BQhNia7e0nAnJGbEPBx6xXG7YeFsabxtjHMEXfjMSYuMAus7oOW6bl557qcEz%2B1kZhLRaOSBdxaMyEQ8pm48k8oDrR7%2F6rmVqfejfxd0isebWQJ%2FFt4gEwnLHUARcMIasxckGOqUBBu75%2FXQSYgUAVHgdW%2F9KcfIMWRTG8NLVQhht4udXfbDO4X%2BEPw09sn%2FyUEj6jLk7Xv9t%2FMhLxVIyZ12d4uhT3lzouFbQrOn4XhbuqKkf07wHossy%2FU1p9xGl%2BrIqA6vfTYuMwnv%2FhCPRfDoOc1VxLcgjnAqiCWpwMgNeldwnzl5OUL%2FXZBqLQWDA2QIzeAXoqaMx19xayCYnfDcFqN1FRKkbEimW&X-Amz-Signature=881d4f2706f4eb4582b02390c62dc4db6f23de4e4e2cf5633555d880d5121fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

