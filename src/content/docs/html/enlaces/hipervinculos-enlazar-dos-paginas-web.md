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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4DSENN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDNizAsBFWIyHgYcEuXq%2FuuGW57qk0hH8qVltvGqUdaGgIhAPtDiBTyZ2tKF1j8oLooP07RPVJUaaadJrqTDbdQeCS%2BKv8DCD4QABoMNjM3NDIzMTgzODA1IgwZAjagXw5XMDK9vzQq3AO%2F3J%2BcheYIY4k4otg8sF15b8lMOTPA%2FYSj5x%2FkNF%2F0PzLHlzCIJlu9smBjt2SSLuz5PKUDI%2B4viVEcghpHHwI5vsuCNLIBXkZzaDiq9YlDHfUBrJu0HdwcdOgLt6oH2PT%2FQR3okI%2FJDskVL95TccGUKLLYxCmF4Hzc2ebdd7%2FgivB%2FV0ehHivZYORJwyQy0XlS9f5dq8WV8BFeM9MWnZ1py2pDOwvPTMNyxterxWLmm1osYNPjW%2FI3fxkjGV718AuJlMOgncE3BPOlxXzK6dnG015O1tDt9qNeeWNG1Fmv5%2BGJ1K13nCGSx7Dxxm9mrOaTKdqz44r14WZKH0sBBJIpykuct9KrDVtHN42%2FYnmQeeEFBjJaplsythmGAjymIskn3pp1shWut3ejO5RhFmW%2FIypM7igTqtw%2BPzHbOxKYOvzDFAH5Hf%2BJWu4aonYyXhz1qyWSUEsamD6sjVJmCN%2F%2FBqUmH8zYLvE1AsVTwjjiQSx1V5Il47niVzSXCzTyK%2F3%2F2S3JhrSa10vLeTmlW3E2cQEv0JobOOLB%2B1BBq5gxK7cM0odJtRVJ78jT1Bv5O42jfP%2BBL8S4mwj8nx%2Bo8P2KbQL9%2BA7bwBpiEA58X8SZuaXDvHB7o%2BeIyIWcQzDvrsTJBjqkAdq%2FN2VRAie6B%2FnwRsypzaaAVUci5aUDPWWC2zUHJwe3Xa8xbTJx7lA6r39NJqLR%2F7QugmCenvAQIKdmCQY5vMkUSnoqpoJnMQOTug7it9p9pUE4XbYJHqfehTNLGEWqb2qTRped3i8Pnm%2Fva0KyFxAjKbBABdDvOHDLjyHIlBAk9eyrXWmNM99nFWgV1jXMBBnCzquZt1awRm6KlVVN6Wu9A1iS&X-Amz-Signature=e873a25facb7294bacfc1fdb71c5c83858cb6ad0c6ae651fcbbc8279daf64513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

