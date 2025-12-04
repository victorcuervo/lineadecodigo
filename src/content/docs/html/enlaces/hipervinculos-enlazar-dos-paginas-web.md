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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTZVDUS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHjiW%2BS8ymHi70QSmTVBdxt67NK%2Fffrd0D0MDDt%2FPv0vAiBvYPqWNf4pBYM2ORlnfyYTRfEIFDxcG%2Bv8kSjHC5xSrSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMBBle0NtacPZORHZkKtwD%2Fvphq2%2B%2FDHJIqX%2BuJZcYVWo4u5IAZK%2FZY58tkX21GBHKjCXM6l3Fa9nm4VtoHz%2BXw1k1kwVqs6k%2FANF2Ch6fLYFQyK3vjIjXsuUdGr6PuGBtmcG8zlOYpHMKXyInEaMfkhDLC%2FrV0t90iUMRsZHb%2BuBpPA8hZwsWOwfQjbOGumhIPc8w%2BDwMX6u18zy5TLsh2EBpCjlporoGKVpiEBlryzhJeW5XkHonk20IXT%2Fpa7eiRSSjLyxyJ9IK8KhUb1Iptl74VlTpKjELmQoyYlYA61Eztpp2tWI6z1XrH9r19IySd700lAhQbMpeBbgqOPyoOh37MlCZjsFiUg6W00YE95ZU5jydm9%2FFCj5Zy6xiK9xBj%2FLImhoxq85jYNWvyVOujUZ58b4Hu3KgqJ5QA9%2FgsjB3ZuyGV3jVbkNd%2BUVfqXyTVMKqn%2FWFBziy54JR5QDup4rKVqasS%2F52UZ9iGLa2vNtbXPyq5ZNXPsANmjAe6OsQv9jXcjiP1%2Fxf%2Bse2fEMu8Vw8EN2EOqFiTsQ4k75rWttRFyC%2BoBkjrBVYIsifPXCeJsJClh70ZM%2BEaH6VAGnSobC5zHeFhmq9e%2FTo1n1NgjKgUFkE07QAjMfJRlLT1gnkTH59pILV0E%2FnXcUwsebFyQY6pgF7wdi2Bw79sLn6I43z1NuMySuJqERR%2FV5EDzQcUgNf9NULnUmx0foBrz%2FlAWdTyy51Kh85Jl0%2BIYv%2FKsNXaA8ybny55SkbXcZyTITNbpSqYNOayQihaTPFKba5UyQHPycxdc8D662a3lsyRoToSsTSBGTdARauQb57UdDYMqHGyVR1F2FWE09m0CTG%2FYVY1dFKub7RslnYvPlJ2UVL%2BH0%2BM4oxm%2B8I&X-Amz-Signature=89aa40763eb8af2a36b5cccab0c69e940cae6fa19573b1bbfb604108e8a78247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

