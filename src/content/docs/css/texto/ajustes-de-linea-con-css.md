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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWVY7E7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy38nTkAzS0zyVzeOwpM5EIxeXDmU9dP8Zk8%2FcmdS3FAiEAmBt3KsFz7ycw1H7AdYE0sLFyB%2BRSjj77UxInF%2F8qrCAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEuOiXTmPWQpvdIGnCrcA5vToYzCEUh1CwzLC%2BfhwNhuzxelpqot7K40ZzbXrvsTOSqxls75F8nvLx914vyvA3bUz3HA52zmtHUM%2BjQ0O3gTatqiqn0VE4%2Ff3dtc7v1Ti6nh0WxQfrDx%2F9JYPAlD3D7sRhwUTx2WePP3iZjMSvlKYwOcPN6UuK7c33mn1G86jub9BxODBuCLj%2FXrvLENhCEkfDCTBnhnfwKkileVMKuaLty2ZgmjGTdudaxOgnKfnXnSSR75LHuvrTJidbrBwvgnVFR%2Bqw56tmLc0bKU%2FmaUGBiEGG43gqc9VX50VCv8oe2hyJN1WqJnJdM5jp6GenriCFCvHveNMRaBCTYkTVlV3%2FbZHpHVzUsFoUO9ooQGdCivxS8wpIFxe5iLbNWoSEDG6Ii%2BFqGlbPJqJ9%2FWTupgc6xLT3BzA3WNYQ8SQH1fnhK4kiqvpW14vFE4VIM9GP6p01b%2F0xvCq4XC9SjsIEhnQskLH7LTMufxXIwgOuQ70SNNj0AzrmdJ%2FJqDEh8OpwH361xj8HIOqrHyZgo8xtqeuTlfYnknVSMDfZJqVCaQV3k0B4yqdsumac7j%2FGFi0Jfhb50XDoySN%2BzYLiAL0t8a%2BKVSANda9xsO6bm47ADRdEVlZ3K%2F2ew6QThgMJqCicoGOqUB7Lo7rMQcWySYeUgTMCtObGh%2BTaV34k4TYJqX5ydT3LHYRNdJ293RlVjxzG2oHzR2yuC77HIf5fU4HsDr1u44sD9fjBd0x%2FQIVv8GM%2BxT9IuYcKmODfYs1gTZ7BHOqIh0wzvFJpCezJtbIxmRDsDF5oYGMA3FByw3Wz9dvD16JbeUu62loaa3UxAAhbSJuJGhOi621pCWcmGSAb1QtN1YII4DoKYg&X-Amz-Signature=2b6902182e43940d897e77ef6c73c60f1942845a0611294566f99c0b92b5cd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWVY7E7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy38nTkAzS0zyVzeOwpM5EIxeXDmU9dP8Zk8%2FcmdS3FAiEAmBt3KsFz7ycw1H7AdYE0sLFyB%2BRSjj77UxInF%2F8qrCAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEuOiXTmPWQpvdIGnCrcA5vToYzCEUh1CwzLC%2BfhwNhuzxelpqot7K40ZzbXrvsTOSqxls75F8nvLx914vyvA3bUz3HA52zmtHUM%2BjQ0O3gTatqiqn0VE4%2Ff3dtc7v1Ti6nh0WxQfrDx%2F9JYPAlD3D7sRhwUTx2WePP3iZjMSvlKYwOcPN6UuK7c33mn1G86jub9BxODBuCLj%2FXrvLENhCEkfDCTBnhnfwKkileVMKuaLty2ZgmjGTdudaxOgnKfnXnSSR75LHuvrTJidbrBwvgnVFR%2Bqw56tmLc0bKU%2FmaUGBiEGG43gqc9VX50VCv8oe2hyJN1WqJnJdM5jp6GenriCFCvHveNMRaBCTYkTVlV3%2FbZHpHVzUsFoUO9ooQGdCivxS8wpIFxe5iLbNWoSEDG6Ii%2BFqGlbPJqJ9%2FWTupgc6xLT3BzA3WNYQ8SQH1fnhK4kiqvpW14vFE4VIM9GP6p01b%2F0xvCq4XC9SjsIEhnQskLH7LTMufxXIwgOuQ70SNNj0AzrmdJ%2FJqDEh8OpwH361xj8HIOqrHyZgo8xtqeuTlfYnknVSMDfZJqVCaQV3k0B4yqdsumac7j%2FGFi0Jfhb50XDoySN%2BzYLiAL0t8a%2BKVSANda9xsO6bm47ADRdEVlZ3K%2F2ew6QThgMJqCicoGOqUB7Lo7rMQcWySYeUgTMCtObGh%2BTaV34k4TYJqX5ydT3LHYRNdJ293RlVjxzG2oHzR2yuC77HIf5fU4HsDr1u44sD9fjBd0x%2FQIVv8GM%2BxT9IuYcKmODfYs1gTZ7BHOqIh0wzvFJpCezJtbIxmRDsDF5oYGMA3FByw3Wz9dvD16JbeUu62loaa3UxAAhbSJuJGhOi621pCWcmGSAb1QtN1YII4DoKYg&X-Amz-Signature=347cd47247360a9e6cfd249eca3ff897d561d0c18d222e9ca29163d64c033e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

