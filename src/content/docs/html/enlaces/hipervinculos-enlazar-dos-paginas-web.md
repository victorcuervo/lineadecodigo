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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2QVOJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCZFWYBNZZx8AP%2BeZhCOAfGkRKiwCs0DdBki0flPkib5QIgXCE9SsAzciC0fhNmxlJkYrsV3IiY2srrZr7A4%2FTfGIUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI1teQTmLwjuXEgvhyrcA8YqY%2Bndcc%2Br71BO2cXYPPMr84mI28zevrE4QlXB4e%2B309IYgtDf6qjW0BPC4ayxENnI%2F1mmEo9k8IKNyke6cDznR9ptI8vy6QfpSUPSMupq2D8nuJ8TIJM%2Bb9TJziUYvPZilSAnBQhzNezNa2fArBnPd%2F%2F5TOpfk4uCl%2By5Udoa2GI3yj43BN4OKxZvIq%2Bb95yALt4MqNNbovOxc3phnuH97VxLINoYS8HHLBxLjqvN2qggEcVluvs%2FJDRPNs%2FPlijdFZExwW1ozoyLyjBIpR8HX57rPZt%2B%2FIUVVrCg65PwmcytlJWUF8SORfaZfY0cYOyzg6WP3W1CAHzZBvI4A8WXBwvM152H0waHXYp5NKf8r%2FFISCe2JdrH4%2FmPgaVvxH1iY0m8IWdfaUHF16Mp1K%2FIMA%2BncfCrtkJlh3WoKh6ndFsCWQpDUzAWzgjsl9TwR2d%2FxVqJ%2BpRyrHNX5JNEsS%2Fzqv4EXAVfGgmj7zBjTmB7BQ3huhEPJ51ZsS%2FMRj2WdZ49tMHU6YOezU4y0tyzfvfyK6IxOBqY7BSFtztNRckY63%2FkL%2Br68FDyy%2BlWTSkOsUPZdhWA5OFa5VbW%2FetxB7HOifoI2LxEKjMGPwLT%2FLuVtV5V8JqxsiNm%2FadeMPr4wskGOqUBycSWRf5nTJXw03iiPsHrLWCZOR2ZooaTYETSL5UkDwwotRo4qVVZd%2BMgxr1UEk5n4Ds4dPYfCUVuOSlxrRGcHEox7ZVpvsU10SJQQ7%2F%2FpuoG05a3GMS2OFu42pMfIwTABnk8%2FdESk4g%2BAUnB0fUHxE54pMMVIsdkHbqTswg%2B1m3OuOZid%2BW%2Bz1iq%2F%2FKdWj1aKR523CrBQ0TpkFEhI22wMSlM%2FP%2Fy&X-Amz-Signature=8f18fc4dd02f5cdc57be1b440b66b6a20da480525b065e9ff1ab4855eef0bc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

