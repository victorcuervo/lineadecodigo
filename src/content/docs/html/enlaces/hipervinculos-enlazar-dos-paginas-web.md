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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIDUXFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6CSSljScqWHqohjUGzob%2BB2vkwCVmHLC5kJ1c4u92MgIhAJpgomZbmuJffmslF4qjMEVgd5EiqfkxaedLpEqmxz%2FRKv8DCGwQABoMNjM3NDIzMTgzODA1IgxntdkSTnN21wHn8BAq3AP1CQnx4CKfpBtBQOIIAaChlUuQxoZbFaZTHakikJny92KGGXCb46xaEOKuwtAs9H5qM78%2BlFUHu9jRaPNVrIXk8fhRAWc%2FUsLW%2ButCQeEiBI8e95MVdMsB5dhTAuPAKWJUOkeqFxy4UF5wt87GXmGUXwoSFHfORfpSYPlxzUdY2UMl6HqcunS%2F8ZqWCMcdsiEWQtkblYVbSiwCGMwu3rXx8tYklLFge3S2WxVG%2BpElq%2B0aqYJ%2B%2BIlJDwVQWbJM%2FKT2luX2x%2F5GSVSGY1bU%2BrzPJVc9A38kpoDdRXI%2FF2CvCRe3Ju1%2FuPClZNe97v9Wv%2BBW40Gjz9143v2Xzlv%2FSt896tKhD7A3smJokX9iDga8NnSkBTSmUmgnyeH3WDRwOs%2BAlnOOi1pjCSUOt3IBl9K7Md5NEmReNBxXPUIslOH%2BMNqs%2BLHyBja0TxFjEOcZACy5y5Tl62%2FTZHLLL6g%2FfeG44zCTKtAEhgqO%2F8K%2FiDNirXwHsUhP8aQnoclHiS6Jx0%2FBqd99i%2FF3LLH9AkDQt4yNzv%2FA%2Bxu4OJXgtTDKwdzJJF6yKjU6pAYg4jsO00Y1ecmY4ghjuKCdNZAN3FxMch1LMR1UO0il7eZJXjTvo4vzjoA1RfeAhO15UVt95jDfp87JBjqkAabrt6hOJ7FJSl8StOH%2BumvjnPGOtwqO1qYlztZGFFvueQEGQ2CPX7oesiLlQynPp7mvNLgqRPqCAgC%2BSTJwbpPoZv7eyLZO8NhuD5fxYo%2B8yOIpd2JkbV3K%2FfX0sy9ga1mWv1raMjaQgGy5EeqmdZVYm5%2B4AXbNrmPydVqWRkTzOquolW9iZDZde1q3Yy6dJAVtbV7iySW9FXDy5%2B3NXasVEqrg&X-Amz-Signature=52bf95b02928afc4c5d4d598081b4e4f5e7c1140c0820ade0b9cf51584ba2cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

