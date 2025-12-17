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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJL7XI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzzmjz0BaUCNC92lCxpfsynSOxWZvF3MzUwqEL3UgoMAiANPmRF4zITSzryErdQZtni4742yoBUeAuP0KDMwD7%2BjSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMP1vLhSfABM%2FPS1AnKtwDwfN09nRf4eCbf8roV4jJI6gvtsPr9bMAIPPFhWBn1zfzbFkn4kHCn4XohhEQ%2FhVCxxlAPncsgITSFt1km0yro%2BWBCp918htk9mKEenKNDw7tVisrihfVymuN9hN4wKyKXKR38M1erlUrHGe2PN%2FbUIKznKe6XCBooZi1fPozMRgulYG4Rw2Asw0PJhIUYRiBuXGO9Haw7U874MD%2BiNhfgkUGJxbhOs5qwWwyyvxZbugNTtb6OKu12BsgoboXNdhZMl2ur2orDfz9J5rIuK4YesadV7CENEo2YwhrydORcIljcY58AAqhKc1Z1C9yuOXXPWIEsukNSC4mGQMLbwrnNIcg1z8m%2BVmB3l1iFoiqZdQKEwx4Je%2BHCiBg2kB53lzH6bc7vbmcQ0gr6muKskxnnvrOYhQxwkAj%2BqAlCmtXpqMMOq9klaFSZNd9W0RPn3MbSEEbfHnRHAh3kJZm3K6Bj22zM1DujgSSPwtZhvn6iXFhUOU8S%2BhyV%2BFezum2jPjU1qwFAY%2Br4Q9i9VndK5333zeNSsD91S5aCsGklP5XZEktvjpp1iPdJuw8T0f36pijGmRxuqQrZiPYeQdE5tkXKOTMj%2FfdzRGkwRhXCmZJ8ZUYBvCYb6j%2Bo2%2BOquwwxO%2BJygY6pgHdGJgV5HGqZInF1hHZFjdwZb98yTVnLI2skSe6sEYDZECQmPu1JUHyZ7EuUWKL13%2Ba79EuUiAsYXkDO0uHgNu04CqaIIxjgdTjSddmYf7v8qAfLjgwW6px6kHHaaF3b9R8kyANluEEGRNXP%2Fpq7D034ZoiL6iojS%2BDlI8FALIker8gYeJ0M1CcHkSMevq3LNI4J1cdXDDwYOkwmNuEQu1ZGCrbZ1YF&X-Amz-Signature=1a3e964c68cfcb2687ad5a823fca5a111001aa84a5390d12781f7427cc00b424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJL7XI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzzmjz0BaUCNC92lCxpfsynSOxWZvF3MzUwqEL3UgoMAiANPmRF4zITSzryErdQZtni4742yoBUeAuP0KDMwD7%2BjSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMP1vLhSfABM%2FPS1AnKtwDwfN09nRf4eCbf8roV4jJI6gvtsPr9bMAIPPFhWBn1zfzbFkn4kHCn4XohhEQ%2FhVCxxlAPncsgITSFt1km0yro%2BWBCp918htk9mKEenKNDw7tVisrihfVymuN9hN4wKyKXKR38M1erlUrHGe2PN%2FbUIKznKe6XCBooZi1fPozMRgulYG4Rw2Asw0PJhIUYRiBuXGO9Haw7U874MD%2BiNhfgkUGJxbhOs5qwWwyyvxZbugNTtb6OKu12BsgoboXNdhZMl2ur2orDfz9J5rIuK4YesadV7CENEo2YwhrydORcIljcY58AAqhKc1Z1C9yuOXXPWIEsukNSC4mGQMLbwrnNIcg1z8m%2BVmB3l1iFoiqZdQKEwx4Je%2BHCiBg2kB53lzH6bc7vbmcQ0gr6muKskxnnvrOYhQxwkAj%2BqAlCmtXpqMMOq9klaFSZNd9W0RPn3MbSEEbfHnRHAh3kJZm3K6Bj22zM1DujgSSPwtZhvn6iXFhUOU8S%2BhyV%2BFezum2jPjU1qwFAY%2Br4Q9i9VndK5333zeNSsD91S5aCsGklP5XZEktvjpp1iPdJuw8T0f36pijGmRxuqQrZiPYeQdE5tkXKOTMj%2FfdzRGkwRhXCmZJ8ZUYBvCYb6j%2Bo2%2BOquwwxO%2BJygY6pgHdGJgV5HGqZInF1hHZFjdwZb98yTVnLI2skSe6sEYDZECQmPu1JUHyZ7EuUWKL13%2Ba79EuUiAsYXkDO0uHgNu04CqaIIxjgdTjSddmYf7v8qAfLjgwW6px6kHHaaF3b9R8kyANluEEGRNXP%2Fpq7D034ZoiL6iojS%2BDlI8FALIker8gYeJ0M1CcHkSMevq3LNI4J1cdXDDwYOkwmNuEQu1ZGCrbZ1YF&X-Amz-Signature=3f2c6f7c031f8cd2e42b87697d61412ae782d5e1b713ab29ea7f859735200203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

