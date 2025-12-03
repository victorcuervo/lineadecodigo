---
title: Permitir saltos de línea en palabras con HTML5
description: "En este artículo se explica cómo permitir saltos de línea en palabras largas con HTML5. El elemento wbr nos ayuda a lograrlo."
lastUpdated: 2024-01-06
author: victor_cuervo
---

Hay elementos dentro de la especificación [HTML5](https://manualweb.net/html5/) que no son muy conocidos y que seguro que si nos preguntan por ellos no tendríamos ni la más mínima idea de su objetivo. Este es el caso del elemento [`wbr`](https://www.w3api.com/HTML/wbr/) que nos ayuda a permitir saltos de línea en palabras con [HTML5](https://manualweb.net/html5/).


Pero, ¿qué es eso de los saltos de línea? ¿No es el propio [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) el que se encarga de esto según sea la resolución de la pantalla? Y la respuesta inicial es sí, es el propio [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) el que va moviendo el texto. Siempre y cuando no tengamos algún elemento en [CSS](https://manualweb.net/css/) que lo esté alterando.


Lo que aquí vamos a ver es cómo hacer para si el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) se encuentra con una palabra larga, ver si le damos la indicación al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) de que puede agregar saltos de línea en palabras con [HTML5](https://manualweb.net/html5/).


Imagina que tenemos una palabra larga en nuestro texto. Algo así como **“Supercalifragilisticoespialidoso”.** —y espero en este momento que hayas visto [Mary Poppins](https://www.filmaffinity.com/es/film213137.html). Y si no lo has hecho ya estás dejando de leer este artículo para ver esta maravillosa película—


Seguro que al leer este artículo te has percatado del efecto y es que debido a su longitud, el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) la habrá desplazado a la siguiente línea.


Nuestro texto será del siguiente estilo en [HTML5](https://manualweb.net/html5/):


```html
<p>Si lo dice con soltura sonará harmonioso, Supercalifragilisticoespialidoso.</p>
```


Y en ancho de pantalla pequeño pasará lo siguiente, y es que lo veremos así:


> 💻 Si lo dice con soltura sonará harmonioso,  
> Supercalifragilisticoespialidoso.


Generando un salto de línea que nos dejará un espacio en blanco a la primera frase.


Y es aquí dónde el elemento [`wbr`](https://www.w3api.com/HTML/wbr/) viene a ayudarnos. Ya que este elemento lo podemos intercalar en mitad de las palabras para indicar al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) que puede partir por ese punto la palabra sin generar problemas en su lectura.


Por lo tanto podemos generar el siguiente código en [HTML5](https://manualweb.net/html5/):


```html
<p>Si lo dice con soltura sonará harmonioso, Supercalifragilistico<wbr>espialidoso.</p>
```


De esta manera, cuando se vaya a renderizar en el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/), tendremos la siguiente visualización:


> 💻 Si lo dice con soltura sonará harmonioso, Supercalifragilistico  
> espialidoso.


Aunque, no nos vamos a engañar, el elemento [`wbr`](https://www.w3api.com/HTML/wbr/) es algo raro y de un uso no muy extendido, este nos puede salvar en más de una ocasión si queremos permitir saltos de línea en palabras con [HTML5](https://manualweb.net/html5/). Más si estamos trabajando con dispositivos móviles a resoluciones de pantalla menores.


> Supercalifragilisticoespialidoso, aunque suene extravagante, ¡raro y espantoso!


	Si lo dice con soltura sonará harmonioso, supercalifragilisticoespialidoso.
	
	Mary Poppins

