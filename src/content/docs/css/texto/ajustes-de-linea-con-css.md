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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRAPU4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNtxf5XwQo9RPXfOO7V%2Fq9%2FQ3YVDfWmjBPKC0J5BItEwIgWCsh%2FhwXy3wbyDGepFhvU8ztac%2F0hQXIMMT6N2BDi%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMPOew9N9LqaBrzePircA6v0o6LTZ06I6LNEmxfl9rdc8pPKLqi0bpJoErylDPWZMg%2Fl2YWAwHhNQOPa63ttFx2e6h5js%2FK7phN5DAhlAHKChlwUmHgGY1zS0NvbLSc%2Bvb1sXfKUOKUxQB6e78D0IMaP4cx7PaSecbsM5u5sEp3kmYfSIK03kdHmzaVppeA6g854yWKZr9dZv%2F9hupPpb3aG94uOYe31vuc%2FCwBc1l8EkrrDm9amSqrw74K6chhSBdDVmu6vAgspcJQLTCpXCy9vQznDoZQXd119Dl4nNsQaxjOLiVMkf3rKeB%2FC5bpQA4F91P%2Fbtouc5tTJ800rguyvOT3FbXcAhvCvJaYR%2Fk7tsn86SBlK5UJJazqMG7RU09SRvv2Al4MDQqLhnaBR%2Br8WDg69DMGhmPwoJlm5HsLcxhH2LYzE7tt6uvwIeSqUaT2KHW4TSM1N9wmhuWKuqRz%2FJRan2Xdo%2FfUGyzGlBjQOOpioKUEqshnyW9qats77qQjQHcekUaWv%2FqLjVqlbKHC0UraxkwIdBocpV5cNiejyMD1cIRKTsA7TECXCx%2BcMHGGic8Oozz8cZnVBj6ZsipWneFxtcir0bG%2BWyh7BpwkSupEWzlEzxa%2F9arMtG1%2FCGX0KfGM647vJabFaMJfOiMoGOqUBhIj4XeTlLmgrca9j2y5tVJXqg1P60NVnash13KyuYcGi24T1v1eUpY1W07mdOC%2F4fd6yDTT8gfjEVP3aZNASYoBWLMqnyFk%2BSNESdRfxrCPCc7sQhSHqavjDVYRM7oxLx8nsRvqneXaZcfkCUXZ1UIn9h%2BET9TlSJX1BdHU%2BEm7H8lSEZDbzItYyKg%2B4xJKXYSSe7LC%2FcHLrwx0Ck971rRdPxYR7&X-Amz-Signature=404bc7888badc852004e299e494bb442443d23bfe8c0343b46ca13d7df0f6aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRAPU4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNtxf5XwQo9RPXfOO7V%2Fq9%2FQ3YVDfWmjBPKC0J5BItEwIgWCsh%2FhwXy3wbyDGepFhvU8ztac%2F0hQXIMMT6N2BDi%2FYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMPOew9N9LqaBrzePircA6v0o6LTZ06I6LNEmxfl9rdc8pPKLqi0bpJoErylDPWZMg%2Fl2YWAwHhNQOPa63ttFx2e6h5js%2FK7phN5DAhlAHKChlwUmHgGY1zS0NvbLSc%2Bvb1sXfKUOKUxQB6e78D0IMaP4cx7PaSecbsM5u5sEp3kmYfSIK03kdHmzaVppeA6g854yWKZr9dZv%2F9hupPpb3aG94uOYe31vuc%2FCwBc1l8EkrrDm9amSqrw74K6chhSBdDVmu6vAgspcJQLTCpXCy9vQznDoZQXd119Dl4nNsQaxjOLiVMkf3rKeB%2FC5bpQA4F91P%2Fbtouc5tTJ800rguyvOT3FbXcAhvCvJaYR%2Fk7tsn86SBlK5UJJazqMG7RU09SRvv2Al4MDQqLhnaBR%2Br8WDg69DMGhmPwoJlm5HsLcxhH2LYzE7tt6uvwIeSqUaT2KHW4TSM1N9wmhuWKuqRz%2FJRan2Xdo%2FfUGyzGlBjQOOpioKUEqshnyW9qats77qQjQHcekUaWv%2FqLjVqlbKHC0UraxkwIdBocpV5cNiejyMD1cIRKTsA7TECXCx%2BcMHGGic8Oozz8cZnVBj6ZsipWneFxtcir0bG%2BWyh7BpwkSupEWzlEzxa%2F9arMtG1%2FCGX0KfGM647vJabFaMJfOiMoGOqUBhIj4XeTlLmgrca9j2y5tVJXqg1P60NVnash13KyuYcGi24T1v1eUpY1W07mdOC%2F4fd6yDTT8gfjEVP3aZNASYoBWLMqnyFk%2BSNESdRfxrCPCc7sQhSHqavjDVYRM7oxLx8nsRvqneXaZcfkCUXZ1UIn9h%2BET9TlSJX1BdHU%2BEm7H8lSEZDbzItYyKg%2B4xJKXYSSe7LC%2FcHLrwx0Ck971rRdPxYR7&X-Amz-Signature=5319158d402055126143140de191cb5ac298d7961e228b8bab60ee273cde9f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

