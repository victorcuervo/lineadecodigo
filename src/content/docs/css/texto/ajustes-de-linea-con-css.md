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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMAFH2K2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoKosKZOuxbSyKZDJ%2BIfoobJ8Wr3YnZ7EE0bgxa8%2F%2BCQIgDJECo5w6EUHGqEJydVio0pKqxrPeWG8duORAf%2FXQtKoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKzbcY4iPcVtJBOoSyrcA9yMnrOuhApIV%2FUVBmlhLhY11Acui4RKyiYJbhJnvqK3MvmCGbATaNnvNA2Elwho7Qq7wSkxAGF8rYdUSHPBJq1OoIFdVMBOALAG535Fru5s0kOcoGcsISDV8RHsnRuHfwtlxA%2BPHnrLJ7kWnYTUyO01nDd1y0rtDNU%2FtSMfIKCqHMP8Vy2epypMggbWxsGuYzyn9lxm4vuH%2FzjySd3VT1fvmOWawryjt11ZWNyythIWHOPY8ZVZYjsZhGFOyXw76R3ZnNWt1GJCnt2o6F0G9VTH5r8fnRStJRRP3XHYp21vBmQU2RS6%2F05biKckXqxBhxU%2Bn%2BjKQP7w6M%2B5mXHJY8x6rrcz10RtJ46PKJDYTda6Rqgpi2y9A1EUSzHMg0EDH38O%2F2uih7KlJMSxiuTlS%2BnprSJxlHEEW%2FlF0pbkcu84vUTj%2BUOZPBnIqSWHNYdVGMpkNqHpQjpxR1sDojgG9ldgAn0pLb%2BmR2fzQxnzhAhJMRzEIkwQpp1C9bgAcENEoGivECsXYzPhc2BRbPnR51rP9nLwHCIdBDJIGVum9EcE45J7LKQKCYKcAOky591Cm6JuDbcPVZSsbP5gqF9%2F4keuif%2BKfAesEhEaKhvU%2FAOnH5Eg94po59TZQFNlMMrpiMoGOqUB%2BZDhUQWCBs4K5X6L1ktCsmkIOU7wRFy5vG2DV5qbF5nmwWhMiRSU7S%2Bn0ljnAEBDgP2KJdlvaMAf1Znzq9TX5AVxw2UOvHcME%2BcjuSiFspRKDYHIFZX5Cx53w%2FLi5mLDwKSxfA%2FK15A7Y3Gy7igP1C63ZEgfbz%2BIN2y9fZ6HzUewV4eHiRDyE3x%2BF30Fc%2FI8209UwBNVTELE%2BYceiMnNe1XeUjik&X-Amz-Signature=fd283125392bb50d9697f62ecc32df7341652a5dc28dc9f8f5cbe21a4b0b662b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMAFH2K2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoKosKZOuxbSyKZDJ%2BIfoobJ8Wr3YnZ7EE0bgxa8%2F%2BCQIgDJECo5w6EUHGqEJydVio0pKqxrPeWG8duORAf%2FXQtKoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKzbcY4iPcVtJBOoSyrcA9yMnrOuhApIV%2FUVBmlhLhY11Acui4RKyiYJbhJnvqK3MvmCGbATaNnvNA2Elwho7Qq7wSkxAGF8rYdUSHPBJq1OoIFdVMBOALAG535Fru5s0kOcoGcsISDV8RHsnRuHfwtlxA%2BPHnrLJ7kWnYTUyO01nDd1y0rtDNU%2FtSMfIKCqHMP8Vy2epypMggbWxsGuYzyn9lxm4vuH%2FzjySd3VT1fvmOWawryjt11ZWNyythIWHOPY8ZVZYjsZhGFOyXw76R3ZnNWt1GJCnt2o6F0G9VTH5r8fnRStJRRP3XHYp21vBmQU2RS6%2F05biKckXqxBhxU%2Bn%2BjKQP7w6M%2B5mXHJY8x6rrcz10RtJ46PKJDYTda6Rqgpi2y9A1EUSzHMg0EDH38O%2F2uih7KlJMSxiuTlS%2BnprSJxlHEEW%2FlF0pbkcu84vUTj%2BUOZPBnIqSWHNYdVGMpkNqHpQjpxR1sDojgG9ldgAn0pLb%2BmR2fzQxnzhAhJMRzEIkwQpp1C9bgAcENEoGivECsXYzPhc2BRbPnR51rP9nLwHCIdBDJIGVum9EcE45J7LKQKCYKcAOky591Cm6JuDbcPVZSsbP5gqF9%2F4keuif%2BKfAesEhEaKhvU%2FAOnH5Eg94po59TZQFNlMMrpiMoGOqUB%2BZDhUQWCBs4K5X6L1ktCsmkIOU7wRFy5vG2DV5qbF5nmwWhMiRSU7S%2Bn0ljnAEBDgP2KJdlvaMAf1Znzq9TX5AVxw2UOvHcME%2BcjuSiFspRKDYHIFZX5Cx53w%2FLi5mLDwKSxfA%2FK15A7Y3Gy7igP1C63ZEgfbz%2BIN2y9fZ6HzUewV4eHiRDyE3x%2BF30Fc%2FI8209UwBNVTELE%2BYceiMnNe1XeUjik&X-Amz-Signature=08fc1ecf27a0312c98235ef300f011a5dc94fe4e1604d876c97bc46b1dd37e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

