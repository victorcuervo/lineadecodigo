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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G2W5L7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDStE6%2BZSAzfR4Oydnh6LuhRYJbpvBh5zuDBvC%2B9IhfHgIhAMyN5qsOCKVyOxWg8xblD0s%2BoTZBaa%2BYES6o2gRS5LvdKv8DCEUQABoMNjM3NDIzMTgzODA1IgxbN0VnSvS2tFCbxAIq3AMKV%2FRl9E2m%2Fsl5bR94ObIPsbeFYeQRcKzLZutI%2FsH1kep9v5wjjNxi0HfroyedS13iL8ecPfw6jqjsCPoyYjQVnGEzj4lRtbjDZaL%2FisadS5inGW78xY6Bov%2FfRna5P1S9f3ueThkQSpV865CRWVVbW94zyyKWsEgBQIgAxqKhK6E5M7USt8qxJK1n8b8idqp2RMbN7xmsWwIRvv5uMrMZ3A%2FnWLYujqQ7QjenTynSO62gsK84irZBqWUkAvmW%2BfQ%2FFcMrn5Y2xvlbmq4dZJdJGJ4Dftyuj%2B5F6oh0fM%2B5iOp3lTvUFbeJyvfumhbHobVMRsa62YSKYwpt5rlYRXARK8gNUaUag0mM9IMDqnr4EH5wkBltNXoaYU1mDDZxH7zPi%2FbXyr4iS7JWnsQ1zu2IR8kXvK2m81T%2B2mlbdskuujjDKMeG02FVWCSJZjcrKJq6B8%2BPD24cShMCWJHQ28L7v2m9dMasTJe7vDm5uXZqVcrSTvuHoweJytdM2pEul%2FoblDhbEv1mjHmHgbF8cM2VFK%2F0tLI%2BrRpFRn06jaEYpDKykDRxzx2iqbZMUSwilw4DQjspY1T0zjdmmjpadrHsbC5xi9adlzr01PbVh2ph1WRT0Qbjw%2F7giy5O%2BTCB58XJBjqkAZTLrPRgzIBnFcIpX776RnyHlWTG4EFdGRLHAk4gOn4DmupGW4Pgw8K7MlDEilTO3e0YfJDAOkq%2FfT1no%2FgCDPHLxxQP0JVvtCv7bX6VPywm%2BzuHc%2FgXLKkqh2fyYQDeCT0TE0YIEkGD%2FNmw3W0jVkn3Olo9RHY2Vt958Ht4OdjQtYaMJU3%2F8ZjEb0x2PVqO6uA7N71hOhe4GSxLCY7T3FdKyfMl&X-Amz-Signature=c8786932948a9daa11b94746ea6fffd7b67eb4da6a230d0296876c135590a594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

