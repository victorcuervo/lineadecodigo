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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBU4RWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8YC7sfwoSjPcRTdKKDOs4ngfmJs6JUGDjqC%2B5%2FXYuqAiEAzHcd61IwyyzgfcrrjlE9Cr0XWHc7BaSx0EG6e6xiteEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGa9aK8PNfNbpRpa1ircA4k%2FbN7t7uw5Q3AkSCB76nnUqfSD0GzQX9QEtB8spIoRW1ZRqJ9DskTd0736Jgd34CuVLt7f4Dk7mZWUUjoPeEqFBmWTAy600JwoWv9Op9w0jzslqaih7VOsHu%2B5ZKWGl%2Fq2H%2FZRM6ytgo8uhfHC5P3TsNzNqDJEH3GAOqYUVy6EygGjg9sdP9ohzM81TETrQDsdWaXEjZo60lUe6Tdu7CpzvpJa1xyqPGI7WQNUKZcspFmWf%2FL3V%2BTiHznEgjM6VD3e4lUxcb481GVqNUI1TqXh1gqUUmNsXNcc9OIZQCz7UBgYhswD5k4CWrrCY%2FFTrnP9%2FJ5zKRQB4rkE%2BWd308LFIDvQwjyl8a4TFbw7N%2FHbmvslyx%2BZVo82PqTao5Dc9%2FUxdYJUFaUcR6dx4nQpgF9M3Te0DgCjE2gPqwLRd5njoj%2F4rtQvLtWURZAaqh2%2FBfZAPv7BNq7XGoGkAyfxdtPRW0BXZpuae6eld4oucKfxt7ubO9E4q65L60IPpuCGGi30ZMmracUPpnZuEMfRxRbrvrTN0w%2B8I%2BijitX83NzZLyPDepXW8%2FVcnaiG8433eqqmd69ceHd%2F0ang5aa2GKI85ZYuu6RkLBAv0vS8Tua3l%2B2I%2BAv%2Ft4ywFuvJMOTpiMoGOqUBe%2B4V1StHeHHYSUWB52YAj%2B5p6gta3%2BUNWoIYcuLVRVKs66YQTSnmvagLGgULEoAR6OWkJxVQPulnhkk4Bp6Uua91poKfngKqKarDPahfiQs%2Bp%2FMld0s%2FdSpO8xOHyb0h855%2BrQrcpLiGAmlWfAJJBOSmlQqePW6BYROd4V0zGEJ%2B3c62s%2Fz1%2BdNfYvRmCF96Sj%2BIfP2PbNR%2FIO6111yTtD7QNxkh&X-Amz-Signature=c38e9030ddc0974f916232d6a185923c428dab19837ba556677515b5cacffc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBU4RWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8YC7sfwoSjPcRTdKKDOs4ngfmJs6JUGDjqC%2B5%2FXYuqAiEAzHcd61IwyyzgfcrrjlE9Cr0XWHc7BaSx0EG6e6xiteEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGa9aK8PNfNbpRpa1ircA4k%2FbN7t7uw5Q3AkSCB76nnUqfSD0GzQX9QEtB8spIoRW1ZRqJ9DskTd0736Jgd34CuVLt7f4Dk7mZWUUjoPeEqFBmWTAy600JwoWv9Op9w0jzslqaih7VOsHu%2B5ZKWGl%2Fq2H%2FZRM6ytgo8uhfHC5P3TsNzNqDJEH3GAOqYUVy6EygGjg9sdP9ohzM81TETrQDsdWaXEjZo60lUe6Tdu7CpzvpJa1xyqPGI7WQNUKZcspFmWf%2FL3V%2BTiHznEgjM6VD3e4lUxcb481GVqNUI1TqXh1gqUUmNsXNcc9OIZQCz7UBgYhswD5k4CWrrCY%2FFTrnP9%2FJ5zKRQB4rkE%2BWd308LFIDvQwjyl8a4TFbw7N%2FHbmvslyx%2BZVo82PqTao5Dc9%2FUxdYJUFaUcR6dx4nQpgF9M3Te0DgCjE2gPqwLRd5njoj%2F4rtQvLtWURZAaqh2%2FBfZAPv7BNq7XGoGkAyfxdtPRW0BXZpuae6eld4oucKfxt7ubO9E4q65L60IPpuCGGi30ZMmracUPpnZuEMfRxRbrvrTN0w%2B8I%2BijitX83NzZLyPDepXW8%2FVcnaiG8433eqqmd69ceHd%2F0ang5aa2GKI85ZYuu6RkLBAv0vS8Tua3l%2B2I%2BAv%2Ft4ywFuvJMOTpiMoGOqUBe%2B4V1StHeHHYSUWB52YAj%2B5p6gta3%2BUNWoIYcuLVRVKs66YQTSnmvagLGgULEoAR6OWkJxVQPulnhkk4Bp6Uua91poKfngKqKarDPahfiQs%2Bp%2FMld0s%2FdSpO8xOHyb0h855%2BrQrcpLiGAmlWfAJJBOSmlQqePW6BYROd4V0zGEJ%2B3c62s%2Fz1%2BdNfYvRmCF96Sj%2BIfP2PbNR%2FIO6111yTtD7QNxkh&X-Amz-Signature=c88b9f0f4a4fc204e37ac2697318434932c3e1f150a0f9fa330c34055fd8c564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

