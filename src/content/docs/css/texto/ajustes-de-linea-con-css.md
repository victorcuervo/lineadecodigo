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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3CC35F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCleGhb4U3CVqAktaAhu445iHJ1TOCaXjPAn2jwWRcyWwIhALwZiRUb0NKd3NQZwctAOmlhzZRduaJ6z7gctc9wyLO8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyQ2RcZgnpsAxqFU1Uq3AN9dfJuA0Sp%2Bz2eryz9JASPXBGbycdLafFkJLXuS9mnr3uL3DwjrJqHVEEfKsFn8m2SXlWVOt9ds5ZucMzS1fobYd0uYXNIhabyDd%2F8LedmFslCxsGCWZrzcexYwsOmDMhfHsZh18xgBWOHHPz1F2Qchjh2JUfRf1UXnn%2FFzZprKq0guLxmfmDXbR7uOQsdGD0Ij6cF0mLYS8hilycEAn6jGpGTlJhEEScsJUOpXzah6mYkdxXcGZ18nuSeoIfTZk9nikrDlhwCCOd21Gy5kgCVZdw0mnnD%2FhWrccDTPqia3NAKoeiQ50bzaau3cAaHOU1UykheN%2FofJXA9SjvGarY84jmXoX5O1WTuBYRahr3R%2Blpmm5nW7duBp7T44HZEjczU1212vS7V%2BZQx9CnPsfbnL4dLMwhMs5SQS1emoHhwFvi%2BlzOGYNmL%2FeN7nC5jfl87%2BC%2FAT5%2F4ip7WqjbSkOFHs55FR9C4HV84R8wSPzu9t78i1rgpHZojztM%2B6eTrE5j2018LumbwE3BNVmDXH3gyfOLWggnZuK2p4gKql%2BJwilmOtnLSwQWClnRzZsN4l8ZNAeJomeYJu0i9A%2BSHzCdvppDexeiFHe%2BKU6lG%2FNWFyLzjwcXneJis%2FequxjDQg4jKBjqkAfrKffAHC6a9mi7olX4iT5HmBRZ3NNA7y5%2Fey05kpN%2BfsFW1S122XLxeNgBKB6LCMb50QcNanay3JslYjT0nwG8bEGSE2ayfvMpeYBiN%2B9F9dRybVQqs%2FPD2woUHKvLxbJKH85NYsnora%2BywLX3JqdCU1l80DTIna51q9Gl6HxasZYAkJU1t0L4dKhMj4W6TrsLREyT%2FlDbep8V9PTrpzzGo2kY0&X-Amz-Signature=d5fbdbfeebe170eadfa7c35b45d56377c4f8d301130198e9fdc45db172b2e409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3CC35F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCleGhb4U3CVqAktaAhu445iHJ1TOCaXjPAn2jwWRcyWwIhALwZiRUb0NKd3NQZwctAOmlhzZRduaJ6z7gctc9wyLO8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyQ2RcZgnpsAxqFU1Uq3AN9dfJuA0Sp%2Bz2eryz9JASPXBGbycdLafFkJLXuS9mnr3uL3DwjrJqHVEEfKsFn8m2SXlWVOt9ds5ZucMzS1fobYd0uYXNIhabyDd%2F8LedmFslCxsGCWZrzcexYwsOmDMhfHsZh18xgBWOHHPz1F2Qchjh2JUfRf1UXnn%2FFzZprKq0guLxmfmDXbR7uOQsdGD0Ij6cF0mLYS8hilycEAn6jGpGTlJhEEScsJUOpXzah6mYkdxXcGZ18nuSeoIfTZk9nikrDlhwCCOd21Gy5kgCVZdw0mnnD%2FhWrccDTPqia3NAKoeiQ50bzaau3cAaHOU1UykheN%2FofJXA9SjvGarY84jmXoX5O1WTuBYRahr3R%2Blpmm5nW7duBp7T44HZEjczU1212vS7V%2BZQx9CnPsfbnL4dLMwhMs5SQS1emoHhwFvi%2BlzOGYNmL%2FeN7nC5jfl87%2BC%2FAT5%2F4ip7WqjbSkOFHs55FR9C4HV84R8wSPzu9t78i1rgpHZojztM%2B6eTrE5j2018LumbwE3BNVmDXH3gyfOLWggnZuK2p4gKql%2BJwilmOtnLSwQWClnRzZsN4l8ZNAeJomeYJu0i9A%2BSHzCdvppDexeiFHe%2BKU6lG%2FNWFyLzjwcXneJis%2FequxjDQg4jKBjqkAfrKffAHC6a9mi7olX4iT5HmBRZ3NNA7y5%2Fey05kpN%2BfsFW1S122XLxeNgBKB6LCMb50QcNanay3JslYjT0nwG8bEGSE2ayfvMpeYBiN%2B9F9dRybVQqs%2FPD2woUHKvLxbJKH85NYsnora%2BywLX3JqdCU1l80DTIna51q9Gl6HxasZYAkJU1t0L4dKhMj4W6TrsLREyT%2FlDbep8V9PTrpzzGo2kY0&X-Amz-Signature=b9dbcd077c2ddbdce70e98b66409fbf0825eaf86cf68947e3e2756a904556e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

