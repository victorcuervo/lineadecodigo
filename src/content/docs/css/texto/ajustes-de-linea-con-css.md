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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AN25C7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF4hOqJIqr5xhlfGQTWG%2F5bGUeUpbBlJ5DAg34dlsvUgIhAMjCd%2FDfbBd4jM7d3ySmlziUxDuZKmtBoy6G9Nngqay2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxitY7rUA1MG5w0v2oq3APBuaNlB9BktWharMcPM1GpoXXoxwoVKZFCkj3BR6JxZ78pjnbAV4oTWLEGZkuqxxGruskRqF6qi%2Fx9rRashB5hVFwit3wY8MSMO3VRyJCfM6OcEfNbAOXoAOXQKK004O4KS0kJT1%2FKcwCjSgfrbHx%2BPhzh1C%2FW%2BCQhmWD6RPkkoQnFEkEqsKmUI8wf5RtHLaTE8Lqve24bin9v1u5vA3WSDFh4jxdhsKxYNHo4wIPnUTQBESV1kLAq4M16RbzNC%2F4%2BKgwEuf40x3sMCh9VB2mig2zH7CE0aVWz%2BsQdE%2BifVp4l3mkTfcItX6f9LjsVN9ikqtNdThTYsT3QmY5MlrWSp7M7ZLzwlbxRIaO5b7jW4TohAKKCAZLtcFVLpA4GaqU2Y5QyjWcS6sXzixvk75NRshXCNBx2zM2dWZ2eciyqbAlvWmQtlkMaJahD0fwyUz4kDDPrc8j%2FLRICY2FQFZ3zetGzcBmqzdlgKyOlPGtZ8Xn36f2PeNd2J3IZjHREzbGmAYYwVsfl7TDTtGFv6yp3UdVFI6f4Mg2qagEIQqeB189tmZfdAmeowofLykFjhPb35UdiofiYi88OhFkzj0EWtpt7KCJL1SDz5s2eBsnTwPuyPcn%2BljogG%2FS0JzDw%2F4rKBjqkAfDZwmwnraRYJHloH3lN8wnutg60k6UY8unhXWelgFf%2Bln%2BBkrWBAlu6%2B85KdUfO2QWdxkjee2amT3LFDIcPZ%2BhiIbIfoXzNp14BACYWm6v6ifwkg4FGMx8QjUJRWa9RAhDRi6SVzpe%2Ft%2FPeq5MDcYCKuyXTGjRGuQgxBELKsUgc3e3hVZ401SLNn%2FP5J3g3petY26mcNYP59H4WcBt6OPeVFiEt&X-Amz-Signature=7fe7125c093e99b6070b1e6b2356904e7c75fc176a18f95ddaa2ae5ff353f1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AN25C7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF4hOqJIqr5xhlfGQTWG%2F5bGUeUpbBlJ5DAg34dlsvUgIhAMjCd%2FDfbBd4jM7d3ySmlziUxDuZKmtBoy6G9Nngqay2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxitY7rUA1MG5w0v2oq3APBuaNlB9BktWharMcPM1GpoXXoxwoVKZFCkj3BR6JxZ78pjnbAV4oTWLEGZkuqxxGruskRqF6qi%2Fx9rRashB5hVFwit3wY8MSMO3VRyJCfM6OcEfNbAOXoAOXQKK004O4KS0kJT1%2FKcwCjSgfrbHx%2BPhzh1C%2FW%2BCQhmWD6RPkkoQnFEkEqsKmUI8wf5RtHLaTE8Lqve24bin9v1u5vA3WSDFh4jxdhsKxYNHo4wIPnUTQBESV1kLAq4M16RbzNC%2F4%2BKgwEuf40x3sMCh9VB2mig2zH7CE0aVWz%2BsQdE%2BifVp4l3mkTfcItX6f9LjsVN9ikqtNdThTYsT3QmY5MlrWSp7M7ZLzwlbxRIaO5b7jW4TohAKKCAZLtcFVLpA4GaqU2Y5QyjWcS6sXzixvk75NRshXCNBx2zM2dWZ2eciyqbAlvWmQtlkMaJahD0fwyUz4kDDPrc8j%2FLRICY2FQFZ3zetGzcBmqzdlgKyOlPGtZ8Xn36f2PeNd2J3IZjHREzbGmAYYwVsfl7TDTtGFv6yp3UdVFI6f4Mg2qagEIQqeB189tmZfdAmeowofLykFjhPb35UdiofiYi88OhFkzj0EWtpt7KCJL1SDz5s2eBsnTwPuyPcn%2BljogG%2FS0JzDw%2F4rKBjqkAfDZwmwnraRYJHloH3lN8wnutg60k6UY8unhXWelgFf%2Bln%2BBkrWBAlu6%2B85KdUfO2QWdxkjee2amT3LFDIcPZ%2BhiIbIfoXzNp14BACYWm6v6ifwkg4FGMx8QjUJRWa9RAhDRi6SVzpe%2Ft%2FPeq5MDcYCKuyXTGjRGuQgxBELKsUgc3e3hVZ401SLNn%2FP5J3g3petY26mcNYP59H4WcBt6OPeVFiEt&X-Amz-Signature=3b9eeb77310599116b935df74b9272108cee20f0094923d40c6aa6568b3a4e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

