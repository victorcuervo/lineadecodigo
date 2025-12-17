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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI72JPMB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAoyeYNqwamreQyD6Du5bzJX%2BVBpVPdFezhzEZfDMUuAiA9%2BQ2vkt3W9ruqkHW5fKPzRri6rivgxlqUSxaSU5y7LiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmUtPIq5s79JIFR%2FKtwDdJt90uvM45NPKMnfwskujFD0OxZi1rI4Antv2iQpDgtPD7CzoRv3G2UQeAWq%2Fa3UcbF0%2B9fTnybvkXtJQTd2F30rigOfd3g%2Ftl4FPz%2F014bX%2BNY2a8akDBqrMuwfB8MrfioYHgXXOyaOHoomECON6JlH9AilI6Azd3BHgZpDTtAUanNazBeq5SWAFAwuvpK9zKx1qFKbsnE3eU3bDyWBxO%2FRykd5mCO1ERckS4RTtgv35xgzmFRcHaOdbg31nxtY2yVsmmwj%2FthU3EHg6mwdjCZYWotvshVvDIdRkclTykm4Jx4I9%2FnuizRcRyLIbeRcfJIq%2F%2BD02YA3Js0sHxDtBX5OOQcsY5fTwhNbjVPBW%2FSkXruZhVuQb9TyF89lKMcR4jkij5ko4z3z1klvE0oqiJonvK%2BbUOI4zPmm%2FT%2Ff%2B%2Fr4t7v%2B7dHqBLddTSlnhg0IuWAy3Pw2uE0fI7PUzuPAR2%2BY1x%2BZaNziABe%2F%2FAbzFpF79Zx328AwZXz5MP%2FD44f6ZjPGjIjpmyREMEXxID5VulqKdoXc21mbwebEq2lWAhHxx%2BPV0o74Nct5qaKBgembe4xyxcurcI14Tl03IctIOjyIKsr8h9udQ24J9J3AqIYab4%2FHVnv3jXvCUDowtoGLygY6pgG0cKeK05uBITNA%2FogW3SbFloG%2F0X4fzpuObCkK%2BhRgHUmlF4IWvutgunQ1EQY72qHjZxeKGWU54Uud4%2BkUCf%2BNOMnq9GwqXV6A5sIqCSOmGSUSEI6enzhyXO%2FpX5SUFkOwcZzHSopS9vphMp4I1Y53zjWIOaKO8grP9kOEMiOZD184%2Bqc96mWiPIcKX%2F1DfCWeDG777lzWCJ%2BlDMUOhVZfvhOnkoYf&X-Amz-Signature=e6fcae226aeb197e70287a49db1e239f5dce75ea384612fbf3200dcd358d69aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI72JPMB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAoyeYNqwamreQyD6Du5bzJX%2BVBpVPdFezhzEZfDMUuAiA9%2BQ2vkt3W9ruqkHW5fKPzRri6rivgxlqUSxaSU5y7LiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmUtPIq5s79JIFR%2FKtwDdJt90uvM45NPKMnfwskujFD0OxZi1rI4Antv2iQpDgtPD7CzoRv3G2UQeAWq%2Fa3UcbF0%2B9fTnybvkXtJQTd2F30rigOfd3g%2Ftl4FPz%2F014bX%2BNY2a8akDBqrMuwfB8MrfioYHgXXOyaOHoomECON6JlH9AilI6Azd3BHgZpDTtAUanNazBeq5SWAFAwuvpK9zKx1qFKbsnE3eU3bDyWBxO%2FRykd5mCO1ERckS4RTtgv35xgzmFRcHaOdbg31nxtY2yVsmmwj%2FthU3EHg6mwdjCZYWotvshVvDIdRkclTykm4Jx4I9%2FnuizRcRyLIbeRcfJIq%2F%2BD02YA3Js0sHxDtBX5OOQcsY5fTwhNbjVPBW%2FSkXruZhVuQb9TyF89lKMcR4jkij5ko4z3z1klvE0oqiJonvK%2BbUOI4zPmm%2FT%2Ff%2B%2Fr4t7v%2B7dHqBLddTSlnhg0IuWAy3Pw2uE0fI7PUzuPAR2%2BY1x%2BZaNziABe%2F%2FAbzFpF79Zx328AwZXz5MP%2FD44f6ZjPGjIjpmyREMEXxID5VulqKdoXc21mbwebEq2lWAhHxx%2BPV0o74Nct5qaKBgembe4xyxcurcI14Tl03IctIOjyIKsr8h9udQ24J9J3AqIYab4%2FHVnv3jXvCUDowtoGLygY6pgG0cKeK05uBITNA%2FogW3SbFloG%2F0X4fzpuObCkK%2BhRgHUmlF4IWvutgunQ1EQY72qHjZxeKGWU54Uud4%2BkUCf%2BNOMnq9GwqXV6A5sIqCSOmGSUSEI6enzhyXO%2FpX5SUFkOwcZzHSopS9vphMp4I1Y53zjWIOaKO8grP9kOEMiOZD184%2Bqc96mWiPIcKX%2F1DfCWeDG777lzWCJ%2BlDMUOhVZfvhOnkoYf&X-Amz-Signature=2b55daddec99870f260a21a217b46fb01e53a1ab9adb237b9233686e3890df1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

