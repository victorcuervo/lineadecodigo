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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKVGYOC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMJIv63xelO9etlWGindnEyUfv1aoNUbN8dXi%2FKn%2BjCQIhAKINTvvtIT%2BdnFVkM2aCPMMmnsZd5sSnoejxQ3sD8hMuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcBtJfharb%2F5DfR8q3APKEwCz5bvqinTn82pfupFXH%2FyG90Ya%2FnmzagRq3U5DeQEPU%2BGB3JgUwKGlkVjwfOWme90u1bMAv2h7uYPQl4ctgawjTSsIEd3f4CPKUpb1FAth17Ett961O11Kb%2BwT%2FEk0ecDMBXUTVC%2BhAw85GNG%2FqOGhHmSwEUwAj36yVN64h11ETTSNnEbGtY0NZfiRKfoPV1RPNTbhQ9FTy5NesvWnZJZ2WVBEM6AkDLIhR4Tl0unEoG204m5vjDLPNzU2AS1uMYxkT3yzhxMHB3AFuhAHKiA88knsmdQuuyJSTifs5RI%2FmbmRhI4GRDh8afjMQpsB5VDK2QZi0IWfZQVOB%2BnE8qA2SfbtRe%2B6Qq45cFzYC86JT%2F3dZ0Rl7bjgqwxA18%2BznTe2VK2uqXA6EWRV72vjAQfWVTbNJETU3JRyRhGCsDHca3VGJv0AZRrV5DmjaxDPPLuQqdX3VBfamRzCMi2TfUwV%2BDZWLU6Ou5UVxd2oeLjYQzgSMFCyZkACAxnmBx1duic5WEH%2FGgclC%2Fw2PxT5LKavOGYUkp08aJgTr%2BysVmQ0wtVvdRA%2FH%2BSHe%2B%2BfvhhTv961%2F0mM2anJHANrsl8XKCGBmTsdt1HExg3a8I%2FrTaC0QfD5POWgwCAKGzC8oIvKBjqkAeTw0Y5Jpvbf3EyaDC%2FdFLcYVJ8psf5tsW%2FZ%2FTNxs5gLIfDnG79mFKuckDXvM7nAgG7mYITtYspdTXxfMiJDDCgr60JQBsmpbg5s%2FJyA0%2B7W7lnJTe3lbkHn%2Bmd98Otb%2B7ojFzehUmOIRqynHpG%2BKJBBCpA3pyQ78I78YPMlqQtuE3Kvu9%2BhAWTIbynBFb%2FDQLNfrA6E6WU0dd%2FUDnAPGQXrTzsK&X-Amz-Signature=a8b05ae2da23b044ca726edf9ac9e40b1b424cd17eaa74afee5bee69cec1151f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKVGYOC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMJIv63xelO9etlWGindnEyUfv1aoNUbN8dXi%2FKn%2BjCQIhAKINTvvtIT%2BdnFVkM2aCPMMmnsZd5sSnoejxQ3sD8hMuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcBtJfharb%2F5DfR8q3APKEwCz5bvqinTn82pfupFXH%2FyG90Ya%2FnmzagRq3U5DeQEPU%2BGB3JgUwKGlkVjwfOWme90u1bMAv2h7uYPQl4ctgawjTSsIEd3f4CPKUpb1FAth17Ett961O11Kb%2BwT%2FEk0ecDMBXUTVC%2BhAw85GNG%2FqOGhHmSwEUwAj36yVN64h11ETTSNnEbGtY0NZfiRKfoPV1RPNTbhQ9FTy5NesvWnZJZ2WVBEM6AkDLIhR4Tl0unEoG204m5vjDLPNzU2AS1uMYxkT3yzhxMHB3AFuhAHKiA88knsmdQuuyJSTifs5RI%2FmbmRhI4GRDh8afjMQpsB5VDK2QZi0IWfZQVOB%2BnE8qA2SfbtRe%2B6Qq45cFzYC86JT%2F3dZ0Rl7bjgqwxA18%2BznTe2VK2uqXA6EWRV72vjAQfWVTbNJETU3JRyRhGCsDHca3VGJv0AZRrV5DmjaxDPPLuQqdX3VBfamRzCMi2TfUwV%2BDZWLU6Ou5UVxd2oeLjYQzgSMFCyZkACAxnmBx1duic5WEH%2FGgclC%2Fw2PxT5LKavOGYUkp08aJgTr%2BysVmQ0wtVvdRA%2FH%2BSHe%2B%2BfvhhTv961%2F0mM2anJHANrsl8XKCGBmTsdt1HExg3a8I%2FrTaC0QfD5POWgwCAKGzC8oIvKBjqkAeTw0Y5Jpvbf3EyaDC%2FdFLcYVJ8psf5tsW%2FZ%2FTNxs5gLIfDnG79mFKuckDXvM7nAgG7mYITtYspdTXxfMiJDDCgr60JQBsmpbg5s%2FJyA0%2B7W7lnJTe3lbkHn%2Bmd98Otb%2B7ojFzehUmOIRqynHpG%2BKJBBCpA3pyQ78I78YPMlqQtuE3Kvu9%2BhAWTIbynBFb%2FDQLNfrA6E6WU0dd%2FUDnAPGQXrTzsK&X-Amz-Signature=d922ea882d454e9739c829e6ec61f27e752ba0765cb4567cf62578f2442b4ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

