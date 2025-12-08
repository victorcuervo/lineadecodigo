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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5HCBHI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4lvTaIKeJJsdrkhnOtYDZW%2Bb1qeoX88P%2BARxziI05XAiB0g947wRmyPwupB0%2Bpd8IFFO2XlBVqpeoRsDSk6isq8yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrwuJQ1vi%2FJn%2Bx3aKtwDLjegBKDWgWAkf7ROkZUD%2Fysr5P1iqS9uRHi7NG4%2Bly1jZGXvX9V%2BIvvLBdCOclv%2F2kKMeH%2FhmwO5jleLAofVsr%2Bkmzps%2BEXi14ciYXORem3udqEtrraCL%2FJTmmJXEAHWTyjcTqzFYkoLy8snjSaoAKCFEs5RAKPGaLPH7t%2B%2FVe1Dr%2Fq4ZBUN7%2BxYEUyp3PWJ6ndtdhamDxRltV%2Bx%2FQtuDcng1QinuUXoAcghMXgPQL5PWBFUe91Uk2RLfN5bC02c6u126r%2Fd1ZRJJveinxWbnNScEeh7bmX6qC7Woo%2F8w56JOUDEvrWun5wq82Y6VrDK5ekx%2BOTY%2FtDA%2FX6%2FXGll9ag1jr7FqY%2FDiFSU3nd81fQwExt6Spp8Qd1DegEFrlHfFDhmFE%2Fli10mTL4zzA3JzWc1wp0%2F5iM84eKgRP3XIuW%2BSUZURik9agN3i3r88QYVzoTLRp2vpudjut0l2ROmqP02%2Bqfj4aJIIGpbgeoNQ%2BOeGBX9y26F%2FpeUdnT3TUcgoLDQ4CI5v01rso8sc68LVqL2D%2BLoqeZDPhaW7fF1WiC0xliNhIdNnb6VSHSbKI0U0RfeUfZkCAaUXad%2B2KUK%2B6Lh8kUoSvtCuE3paoPLf7%2FUPG1K97CIAKMCQHIwlcLbyQY6pgFKKwEJdtdimJHzOxXxagHcmBWDVJvqiyWoVAoRTerSkimMwfym8CxJJ13hMXM17MEuq%2Fw5xhprZgRne1hdBWxVlksZNW5eiibpRAi%2B5cUfD9am7oO05rl1pebxkVRrsqolntOEcKUaZ5yPInyY2xruYJ1ayeZ26Vx9WQOEFA5Ss%2BNRwWkV8DYehK1YD%2Fedz5HWvOeFCkkAsn5SgyhmgkQD5JVy55i4&X-Amz-Signature=c07e35860b0918af6edf2023007d9b1901a5bfb11b1d10bfce88211d51302178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

