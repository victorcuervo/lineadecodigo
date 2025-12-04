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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BCPP5ZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbcnh92ofro46ncSEJaRIPBWbCfGs6RH8XLLgJ46kNuAiEAl2jOeWt1vSHc4Qj9TbL78kO0KP6OzAxjtiZeypj2SpYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMRV71m93o1oexC6nircAxNZmwav58WyY4%2B93CHrfjsJFflJz%2BuCfTVuurJ4%2BRiyU65hLCR52f77dKgzI8%2BmMMdY4DpJuFiL9s46KBq8e7DorJA4WffgGRDMy81yiHSxkGPNeo2YqFipldx4k1bKODvSmh70r55WmuufPzMw8v386pXCPyhIXHTsGVIkSfvr59stB6EezJW20uB3I6ytzTj1WHrdrZmgbsPQWbzqUuF%2FyxqzAjt%2F7bVTzjgsWyr3m4EgdmsYQihbgzhP3ocU1vrkgJ52nR6uQIXGSOY8rJF6KQsRFMHn24rLDwqPC5c%2FN41MD7ToQhOvRjn08ij%2FElwyILT1ZLHHV3YKcMXbItiEZXzhE5pKVTSARKFN%2BZUky7eVVFlCzwAPsWRlf6UN6jmeB%2F0iGt7fCjoByz8dp8L8quFEVTSAKtZ6%2BdoN%2Fo%2BMRXVf4%2FDilrwk606B5mnKw571wUkRG9sEJfX42WS83fI%2BHbjCPvg4c0iLMGL6VsF8jzsHmstpx3%2BMZGoVrJtdYvonQcCRmpUlgWxmQLKjH1RFKRvj9jy12Y3L5S5MDyl0%2FHvfJN8%2BuoDxHhD%2F9c43oij7urf4j6%2BzffaPvossYnNlxNzSml0xfC%2FWwkYM17KHZ%2Fy2T2vsV75YKyzFMO7bxskGOqUBqz41fYoxytnbevXc59ezjv30kbbhvaPCI6lU7zfucrxsfwhksYZu1NB3BmSyL3dor5z5BV6YA52nnMbaRQA5ni4LPNX4IHGIR9Ds9OMl85bshlaUzXTfwRxeCHN%2F2QE%2B1FHhTTKT2gJWj7qezYLWEuzpuE4w6LxNwfomrqzr6IYe1yIcINmG77xVDB6Pgta1lsgIc7oey4vlV9UVTt7J%2FC28ZlJC&X-Amz-Signature=d9b51d6cd97e857c0e95de1d671ce6b889d6bfa81a58da288166a88cf4e02aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

