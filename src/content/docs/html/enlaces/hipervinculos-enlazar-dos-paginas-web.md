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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKRGNFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1xASGL8VdksdBUFzgm1MEEvztaV1Wk7Gjx8Q%2FrqzCTAIhAKJdeiHDmwC%2BneuWp9WaJZ9%2FornJd6ncBlePERjDtIROKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEcrcKgGBztjM8wwAq3AOhpoaf52rEJSNz3Jgzm2vR4hxkIYdlZkRKPAHVxEyEyvrsq1fRGN25Fy0cJ9JeH%2BAKdQzFPRXfekispohDCLiGRO2TwZSTWQeWoR%2B8gNG%2F%2BvLq0MABgGIhlfOvF3tBOr7ye4DOqEbFYCYfbAb1If7LjwnTvLxo%2FCpmIQpihdx95Ulf878xdO4VLRizkIz8R4LHAi8YCvXGZzSjGcJcDWxVXR7MPCxNq4RPy2R7AgMV40VujE7iwLlm4wukz2BQdNb%2BpaozmOSh84cz3hrPtbkvkqZwOWNdvHcfFTcGzRqbagjH%2FUmbsmbVRRq7213UK1wo0MbxvvazN4W5bSYGbKVGkeY4lFrhoYeXel1SYx4ZiJKA9JN8iUBuK4hc2GFC%2BNwMrDJ4GYTtfDgtU6WIQ4yYdtaycaH9kFU7Cc%2BEhP65Y11KKnJfgyQOT80cSUHiOWipg4o%2ByQy3smbsPaho4tFiEyCqQ2QxglNA%2B0FQ3oh%2Ftrw6Lp%2Fezw5qBFL%2B9M0dXazOVKFYDjHXQ%2BHNeUeFgLiBrPTtj1F8suP69EvvL8AsW2lRB2o6tBxT%2BMOTumHDBGe0zLBESjx7hla3Fy4eWnY4XiEgEvZaXMyMMKy%2BHwObn6U7XNzF5iKVpz51HjCTmtXJBjqkAURzFQ1tcea44VMXoQOZ0kuwZuPr0YJCbyCYb2WQ9lpdCxq%2Fl2X4QX8JDvlRZLlHC%2F4OMkVKJuKnwqTuxdZ13waWJkp4iVRp%2BOGUiNvr%2Fzn6d6djpYfNSP9KjX8a7lv68AE7uAv1bbVvkPu0%2BaoG5cvuvWHyUgTH7VE%2FHa567HB5N2zoR5gb1xVngqj%2BHUlZjRKkbLtpki6tXSYJRSJlJi7TcFa6&X-Amz-Signature=427ff8582a76ab52b16b39964dfd0508a47fc05132f15a706212c94839207958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

