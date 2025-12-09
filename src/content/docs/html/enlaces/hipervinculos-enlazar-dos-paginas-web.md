---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IC4TIN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDrZI2Sv26nk7eNtXPEAI%2B6VSH0ia%2BLbZ1aAgK0svWTAiBdkHSXTifUMlHIb6Qq2YSa%2FJuUJ2c6KggcavT%2F9uY7xiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukfZ4D7ly3Ejzf5iKtwDdzG4jcNK1t%2BGYsZOvulF6f9wKmtElG8k60xa2bpQbUs%2BlFKE%2FMkc69X3GlwM3qM64OrBw4tJhY2aTa71Frc7vuiljdo5oKrTPUohaDUn5IcqPy%2B9U6PjwY9YuXXCphgDXsbcKI8Yd40Rw%2BJEYvZc%2BA%2F8fdGaOGk3v1XqHQwCMoNGnJs7U49JdmUbDlc%2FuANfQVRIhkLCLt2qgGJ1BLpkBMn4VVE%2FiQh%2BagNUvq9TFpHSnao9578AYhEyiG3fuhB%2BB5q4z0ZuM36wbmmqDcmr66js4EWx3dV%2FpMxNvyrSbHrWxPyfInrqzSVHK5MeJo8IJ0qEgEwGQD1WSXeb7y5lxRzg%2BH4HN1MfxuDZsLFFA0K2nhvQJHTai9S0U8HyatCGKLwUkj%2FKXGwppz87EEO%2FfGuewypHJXHmrqo1KCW2f5AZMLOklMOhXzpwbh5yOD3B%2BGBYLXDCntZYtX2%2BwhIz8qr%2FCfpp8KT7SpNM%2Fn1n28Mj2JjGpUe0G4s%2BHar5BVPNBYvZku7GvkEYCsj0HM3RQTW7rBLD13If0VS8SunxTGwht69w6NUTzKNTMbXdWdTPyJC7o6reAeOO336jEPUXRWSXMqxKU%2BoLqzhsIcPqPykFLHaxIuFNs%2FV0umUw29%2FhyQY6pgEuBP93hTqaxznfsO0bmgiznPc2VHQ6rVvu%2FQTNEGg6D2lx1DHTqW7AINJropjxzlfAIDl8aaeqayKK4NrHClldO%2B%2BBHKCKOQPoQ86nW637hZQRExQFlyynGDPMKmqxzIReoa15Ya2CeXSjtv0ZiH%2Fe3mFX%2FdspdGKRFugnDUeaoC5iHcBu0cLxOhbvz2dhNZ9QSlyIXNTcq1yISCmJywczAJbONbA5&X-Amz-Signature=2be501a705694453425596dd667ad759290ffd1b0a03c7302a3f3b3ce3f2cff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

