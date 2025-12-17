---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZVIUBW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCps9K4DrYDYzqv9LVBSZynHBfl7VYN%2FWE3UAFTjfY%2FOgIhAL6jzN6G4CXiuXpssj%2BsBoX2znYpeyBgeE%2Bmj3B3oA9MKv8DCHkQABoMNjM3NDIzMTgzODA1IgzLwdJoK3uauwjt9Ucq3AObyWbMWMcrvsAa5Tsbylg7T2uAkiw1VYcng3s2IslT1NsFwBB8%2BoR%2BjqkZmgU1ulQoLH3XKVnirfHJAp000yC%2B%2BGriZp46KKkqCa9NoHgBXdkvTEIazrNX8CVHQVgr3p4XNQibpTO5DMtFrHCOLbXTBqPjY8sHhmvAbVKE4SAK09O2nF10VxX8ZxAIKDSfBAGZDm47xI8ezzBh59YiozZP8Y9j6h%2Bdzz0gQ017imDnBdxfPIsiYWghhYpEX2GarTQGEQOkD6POe4VaVUz3qaUBcymXUyhD9KXE2m81SX3eyHxM1rNvUCmwAvStIm5KosbxwKF48DHly24mo2ishU5TBNUJXpDUbnM%2BhzIdemSlR%2FCz0vsqv53Sfg9V2bS8xB3GNsOConk95aEE4I5FdyVSxKY1X8naW4q86gvSRZSaV4RCv%2F5fAAHkhj4wPz15H19aWVANPhCwFVFOrxU72UmwrNSvIYF1pWPRtaBSNzG9rpF0FCSTyu75armNh7qzkw1mC5xR3IIRQEBxnMyhxI8iMCw0gj5GgZ26yzh7QecM%2FLhAYIt1JIOdC0g4Lz8uP50fIHO89mWO6Dwa6nNW7zva5xgzH3DJ3JVlOItNyS4%2FU0y4xBRRw2nBvbHkfTCguInKBjqkAetAPytWHzFnceGwVxRleWHAVCUxW1h%2Fy%2BK4lzo%2B%2F1lahU7d2GnIbPwodtChGrqrMybB3i%2B5VF9lBU6Kk24fb9kVZqdrt%2BimgJ9ejgJ80bpSF9AedeZ7wsL6oSODAoKzcto%2F%2FVX5hiBCcU%2Bby9RochaVj5jAjgc%2FzTuVoAGkFNrzj8nHrYSlF71ASKFf4bR6%2Bvy4icN5%2FZV%2BLj3ySTdA8%2Fk2x56B&X-Amz-Signature=dca1b8da0112112dc5bddd71d3c418cdca679d170489ff4a2340fbcdaeed5c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZVIUBW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCps9K4DrYDYzqv9LVBSZynHBfl7VYN%2FWE3UAFTjfY%2FOgIhAL6jzN6G4CXiuXpssj%2BsBoX2znYpeyBgeE%2Bmj3B3oA9MKv8DCHkQABoMNjM3NDIzMTgzODA1IgzLwdJoK3uauwjt9Ucq3AObyWbMWMcrvsAa5Tsbylg7T2uAkiw1VYcng3s2IslT1NsFwBB8%2BoR%2BjqkZmgU1ulQoLH3XKVnirfHJAp000yC%2B%2BGriZp46KKkqCa9NoHgBXdkvTEIazrNX8CVHQVgr3p4XNQibpTO5DMtFrHCOLbXTBqPjY8sHhmvAbVKE4SAK09O2nF10VxX8ZxAIKDSfBAGZDm47xI8ezzBh59YiozZP8Y9j6h%2Bdzz0gQ017imDnBdxfPIsiYWghhYpEX2GarTQGEQOkD6POe4VaVUz3qaUBcymXUyhD9KXE2m81SX3eyHxM1rNvUCmwAvStIm5KosbxwKF48DHly24mo2ishU5TBNUJXpDUbnM%2BhzIdemSlR%2FCz0vsqv53Sfg9V2bS8xB3GNsOConk95aEE4I5FdyVSxKY1X8naW4q86gvSRZSaV4RCv%2F5fAAHkhj4wPz15H19aWVANPhCwFVFOrxU72UmwrNSvIYF1pWPRtaBSNzG9rpF0FCSTyu75armNh7qzkw1mC5xR3IIRQEBxnMyhxI8iMCw0gj5GgZ26yzh7QecM%2FLhAYIt1JIOdC0g4Lz8uP50fIHO89mWO6Dwa6nNW7zva5xgzH3DJ3JVlOItNyS4%2FU0y4xBRRw2nBvbHkfTCguInKBjqkAetAPytWHzFnceGwVxRleWHAVCUxW1h%2Fy%2BK4lzo%2B%2F1lahU7d2GnIbPwodtChGrqrMybB3i%2B5VF9lBU6Kk24fb9kVZqdrt%2BimgJ9ejgJ80bpSF9AedeZ7wsL6oSODAoKzcto%2F%2FVX5hiBCcU%2Bby9RochaVj5jAjgc%2FzTuVoAGkFNrzj8nHrYSlF71ASKFf4bR6%2Bvy4icN5%2FZV%2BLj3ySTdA8%2Fk2x56B&X-Amz-Signature=e3f67adf66f1593d67cb904a12fbac243414257edb5ec99841d9dbb23066d69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

