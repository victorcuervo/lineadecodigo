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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFT65PK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4hIj8EamXlOV0p57lmeGCs45xfWSiVnIe3UjCrL3sAIhAL3w11rgIno3KqpDtinHgoG2hY2XYU%2Bw99wLJs0YQExHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIIT%2FJv%2BhmJCBe0hgq3AOfEGnSxwoiUzqdYuY%2FwrKJ0UWfUzqnnMYl5wKyk27jCaQMbW%2BhXoBUKmxpYP7M7ocEcaNm5VwnULX3yEQp3TYBUvY5zKljJG1SUWJE3SHHZIS%2Flkj12ifgVYyzC6Hum5gb4fNbZa0zIv%2BLMAe05NZ1Y9ydv0e4B9xAgJr19TtC7QQINQbroQjHokcLfVRaXAprHXm%2FtPoSsnk24T6mHF4OzszPFiF%2FMAMtGmB0qFn5cuNtH53fwyiJl1oX6DmlsOOhy4RrQYhaXBz71BwYS8kuVewJ4DVHeKn1nb76T0%2FKl88vooNd1BGRLY7Kf8NnrokSC948fBbHCusvqr7J7IulM8UnPggDojvBHWwmuzF9hr5DxqOSiDWlzBe1x1gkV9c3v52BOZEx5WhYYqf%2Folypb3CEGM4HT1kHhT68TsrLqf89mvWuqE2k96Odxz%2BZQVQNq%2BWqbX3wjKh0IXj%2B%2BQrZxblskA%2B75PXgnsQclPE9tAmgtjMaltpD1o4N3CS%2Fg0o5N7Psx11hp4kjsXvWwLyc9I9zOBtA7RXeuOKRry7MhmlRJS2luFe1YI2wHDx%2BUDfPm8PtgHPqcChUzc9amWkYfM%2BthdUCKaG5Eop5MtIy1xDv2KKbIeGcsdq2ZjCAgIvKBjqkAT96TCTLnFY6l0TDRVxPVMG61bzJUf66Gtss6tWy890DbpDN%2Fubz89BOfOBhQcj4nW0Zkuk%2FhEmn2X6nMX%2FmhAHybGOuJuG294rOnK5z54cYeGoufo7Ao2Co76oe%2BEaaJd2rqFlJMVgrhKR0ZnWK8dKH62nCSg43ZimPtZY%2BXfqESfYEN2se2NQJaNB6UvjhLL6nuBFBmaBhsudN6U7sWWbcgl4I&X-Amz-Signature=e5d904eb0bd48623bc21a15d0873bb6b812dca4c870f88b9d98ad2e1d2aaafa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFT65PK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4hIj8EamXlOV0p57lmeGCs45xfWSiVnIe3UjCrL3sAIhAL3w11rgIno3KqpDtinHgoG2hY2XYU%2Bw99wLJs0YQExHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIIT%2FJv%2BhmJCBe0hgq3AOfEGnSxwoiUzqdYuY%2FwrKJ0UWfUzqnnMYl5wKyk27jCaQMbW%2BhXoBUKmxpYP7M7ocEcaNm5VwnULX3yEQp3TYBUvY5zKljJG1SUWJE3SHHZIS%2Flkj12ifgVYyzC6Hum5gb4fNbZa0zIv%2BLMAe05NZ1Y9ydv0e4B9xAgJr19TtC7QQINQbroQjHokcLfVRaXAprHXm%2FtPoSsnk24T6mHF4OzszPFiF%2FMAMtGmB0qFn5cuNtH53fwyiJl1oX6DmlsOOhy4RrQYhaXBz71BwYS8kuVewJ4DVHeKn1nb76T0%2FKl88vooNd1BGRLY7Kf8NnrokSC948fBbHCusvqr7J7IulM8UnPggDojvBHWwmuzF9hr5DxqOSiDWlzBe1x1gkV9c3v52BOZEx5WhYYqf%2Folypb3CEGM4HT1kHhT68TsrLqf89mvWuqE2k96Odxz%2BZQVQNq%2BWqbX3wjKh0IXj%2B%2BQrZxblskA%2B75PXgnsQclPE9tAmgtjMaltpD1o4N3CS%2Fg0o5N7Psx11hp4kjsXvWwLyc9I9zOBtA7RXeuOKRry7MhmlRJS2luFe1YI2wHDx%2BUDfPm8PtgHPqcChUzc9amWkYfM%2BthdUCKaG5Eop5MtIy1xDv2KKbIeGcsdq2ZjCAgIvKBjqkAT96TCTLnFY6l0TDRVxPVMG61bzJUf66Gtss6tWy890DbpDN%2Fubz89BOfOBhQcj4nW0Zkuk%2FhEmn2X6nMX%2FmhAHybGOuJuG294rOnK5z54cYeGoufo7Ao2Co76oe%2BEaaJd2rqFlJMVgrhKR0ZnWK8dKH62nCSg43ZimPtZY%2BXfqESfYEN2se2NQJaNB6UvjhLL6nuBFBmaBhsudN6U7sWWbcgl4I&X-Amz-Signature=9a3c44fbeee27e4f2655d78368a16aa57438cf72ad4a7569f6eda1d89923427a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

