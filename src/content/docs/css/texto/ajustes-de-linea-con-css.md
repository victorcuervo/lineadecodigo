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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMHHXYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNv6SkRUDWEZfY8OIraRg3U74Z0w45%2BHWs8fcv43R4AiAiwb3pRilrzsa9SVw8j0hu9jOKvbD6uBUwY1dL%2Fiuguir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMR1H2rmQHq33ZbkVyKtwDVMVVlVmJLtY5QUaWYVDwGMQSqE%2F5hidgHFxli0dMiCVsm6KYOz6It08pQ6blfDd8VGGpCfrXcJxT3fvyhaJNuN0bp3UuaeKFXS0UUde%2F2tJL%2BvMlBhPoGB15IVInebtbx8Ba4Fmra90CniQWD%2FS4%2B5FpwQNCQuxwPRPGS5S9UPXLlGlKArp%2BGaSsH4OU4ov0dED3EPEvTjUHeSpc8JXhFsJ0kpo02m2UFOp4DCWKfsnIXQIzv7ELp%2BBSRUsmPdwhYqy9otUuSRDndX2%2Bd2RfkWmoweUjR8RCYnxRhicKWIL1POtRtsA%2F8EmE6afpTUe%2FcRrpehF54OLIKcx1KhjjMajEiH0RaGYU0HWLNu89i3d2ak3vLutfXFg%2FwF3S0tTYCL3Ga%2BEBaL2fTOLq9nDuTPlGgPE1daMOpqVCzRjFP%2BLrVXRlJOMocYFZpa7y5pVCK4XlWfQpi%2F43KIjVnkZy1aR%2BOYieRRwRk%2FvKyX3E2zKoxoLzMHqFT9o6k6ZcXKdqiWb8xbmJBb7PjDxs2a2rW3pCuLvmBc9hqULKytYBcnWQbtHpMWxsePNEiXb5cLFK1uudBd9feCg%2B7ECwxc1n5Gcta5F0bZNLNUGQVf%2Fkcs49C26b8vaMCX%2FBrH8widKJygY6pgGIuKY3BY%2BeIN%2BEEmSS9spS5QiopwJTy2RAPHCWLvX5Ui3SY7uUuw2ww4K1kASFmp6%2B%2BL4Z0vvkcq6cSgyegdtGEmD6cfhysHfzivtcWY%2FYgSf2QfUEVJOGzxaK94ObkauhzdJY9T0zbH2fTREDSm5BQA2bPDJUuyQyWFGFH5q4cT%2Fhej82WUTqcWlAbdiu03JNt9OEKV9%2Bcqgj6wasiCU9pqwoxM2t&X-Amz-Signature=1dad15bdf38fe042680c9bddd315fa73d25ec711a8d55c2e5f18a7e5ad330f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMHHXYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNv6SkRUDWEZfY8OIraRg3U74Z0w45%2BHWs8fcv43R4AiAiwb3pRilrzsa9SVw8j0hu9jOKvbD6uBUwY1dL%2Fiuguir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMR1H2rmQHq33ZbkVyKtwDVMVVlVmJLtY5QUaWYVDwGMQSqE%2F5hidgHFxli0dMiCVsm6KYOz6It08pQ6blfDd8VGGpCfrXcJxT3fvyhaJNuN0bp3UuaeKFXS0UUde%2F2tJL%2BvMlBhPoGB15IVInebtbx8Ba4Fmra90CniQWD%2FS4%2B5FpwQNCQuxwPRPGS5S9UPXLlGlKArp%2BGaSsH4OU4ov0dED3EPEvTjUHeSpc8JXhFsJ0kpo02m2UFOp4DCWKfsnIXQIzv7ELp%2BBSRUsmPdwhYqy9otUuSRDndX2%2Bd2RfkWmoweUjR8RCYnxRhicKWIL1POtRtsA%2F8EmE6afpTUe%2FcRrpehF54OLIKcx1KhjjMajEiH0RaGYU0HWLNu89i3d2ak3vLutfXFg%2FwF3S0tTYCL3Ga%2BEBaL2fTOLq9nDuTPlGgPE1daMOpqVCzRjFP%2BLrVXRlJOMocYFZpa7y5pVCK4XlWfQpi%2F43KIjVnkZy1aR%2BOYieRRwRk%2FvKyX3E2zKoxoLzMHqFT9o6k6ZcXKdqiWb8xbmJBb7PjDxs2a2rW3pCuLvmBc9hqULKytYBcnWQbtHpMWxsePNEiXb5cLFK1uudBd9feCg%2B7ECwxc1n5Gcta5F0bZNLNUGQVf%2Fkcs49C26b8vaMCX%2FBrH8widKJygY6pgGIuKY3BY%2BeIN%2BEEmSS9spS5QiopwJTy2RAPHCWLvX5Ui3SY7uUuw2ww4K1kASFmp6%2B%2BL4Z0vvkcq6cSgyegdtGEmD6cfhysHfzivtcWY%2FYgSf2QfUEVJOGzxaK94ObkauhzdJY9T0zbH2fTREDSm5BQA2bPDJUuyQyWFGFH5q4cT%2Fhej82WUTqcWlAbdiu03JNt9OEKV9%2Bcqgj6wasiCU9pqwoxM2t&X-Amz-Signature=b95f9a378e3c9f7a42181020d31220819cebcfaefacc6af24fe9e8d3206a88fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

