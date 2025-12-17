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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VKFGDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNLW%2BH%2FKlG8NTptoZhGcR6gqsPqAgHUHmG80917mYcQIgT7wa2M02M5bd%2BkCuE8kQNNt5I7JuQvvvacUW5jc3lUgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMpqAPOtglGWofOSyyrcA%2BhoIID4dzINAYsb1m3r8UxXKtHZKUbdPd%2B1U%2BjiuaDuoGvfdX8CluBcFGBv2OBFK9ryCCgzItMCZXPoOCf5CQTyCTeEJajQ9lcdyqDJIXMQXTVrE1qgBkiXTOQ0FoWpiPMj0KB1KDyf0%2BMt3IBqbyxhf47%2BbMgXAB44K41J0TnN3D0V7tDpDDU%2BLA06WJ4vJAokIi6wWCRjsJCtrWU2cn0eDwSCvneGWuIwOxZ3h9JfxJWWXHWcrmJLcbWmIbuD2nU%2FpRABqalWpVuACVrdxlhRfObGkgyPFC1EVeE7%2BBrzcqBklwsArUT7lUoAnqxo3QK5gUG%2BaLHFmQ3S7r5X3sRZ69dc4SjNBrlV91CCfzVM0hVcPSZIeJz2eHrS27O2NVPKyN%2BAyMENUGsYYsrlD9dEhzKJgDS56X%2BvQFSgA5Ub3OmqFO6K4t%2FKl4jY8IBFR%2BDw7iMQezUsOQHHl5Fci7iLTw1ylFHXudU6Qvj8mtPNQOkKw9pTCmfTDpbC%2F9J%2F9QzmkjM%2B6teVprGLMSK3r8IbGZZaTt5g6cBFiVxC5JDPhuF4rDz3yC6tllNS%2Bx%2F1tdun6GKAlU003veeEdWMt83mN%2FG1O525i3QoApvR9o6tHbzd4MlDH%2FU3UYZPMPPNiMoGOqUBQkopJP3ijhKNMgmMXZBsBXZva2s3%2FROBWmZr1OsXQgo3PXOF2mvvko8OlVG1ulJX%2F%2Bn2%2B2Fk%2F98Ye%2Fv9SK2UjjAIfAJzihUu0%2FwOzzq4dKREjPfm9F8aa3or%2BYhfEkeMknwPjUU28Xk4hQrP%2FZLrT2IytacsjW%2FyExkNuidBCFKrK83%2Bdf7dB03i%2BLo4zxLGZ42E7dtPGIs1EIk3QlfH7PAG4nVT&X-Amz-Signature=e45a794726d576133609caa0d0d3d0f0a818e60b8e69f0bd0f3aab5ea7c0aab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VKFGDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNLW%2BH%2FKlG8NTptoZhGcR6gqsPqAgHUHmG80917mYcQIgT7wa2M02M5bd%2BkCuE8kQNNt5I7JuQvvvacUW5jc3lUgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMpqAPOtglGWofOSyyrcA%2BhoIID4dzINAYsb1m3r8UxXKtHZKUbdPd%2B1U%2BjiuaDuoGvfdX8CluBcFGBv2OBFK9ryCCgzItMCZXPoOCf5CQTyCTeEJajQ9lcdyqDJIXMQXTVrE1qgBkiXTOQ0FoWpiPMj0KB1KDyf0%2BMt3IBqbyxhf47%2BbMgXAB44K41J0TnN3D0V7tDpDDU%2BLA06WJ4vJAokIi6wWCRjsJCtrWU2cn0eDwSCvneGWuIwOxZ3h9JfxJWWXHWcrmJLcbWmIbuD2nU%2FpRABqalWpVuACVrdxlhRfObGkgyPFC1EVeE7%2BBrzcqBklwsArUT7lUoAnqxo3QK5gUG%2BaLHFmQ3S7r5X3sRZ69dc4SjNBrlV91CCfzVM0hVcPSZIeJz2eHrS27O2NVPKyN%2BAyMENUGsYYsrlD9dEhzKJgDS56X%2BvQFSgA5Ub3OmqFO6K4t%2FKl4jY8IBFR%2BDw7iMQezUsOQHHl5Fci7iLTw1ylFHXudU6Qvj8mtPNQOkKw9pTCmfTDpbC%2F9J%2F9QzmkjM%2B6teVprGLMSK3r8IbGZZaTt5g6cBFiVxC5JDPhuF4rDz3yC6tllNS%2Bx%2F1tdun6GKAlU003veeEdWMt83mN%2FG1O525i3QoApvR9o6tHbzd4MlDH%2FU3UYZPMPPNiMoGOqUBQkopJP3ijhKNMgmMXZBsBXZva2s3%2FROBWmZr1OsXQgo3PXOF2mvvko8OlVG1ulJX%2F%2Bn2%2B2Fk%2F98Ye%2Fv9SK2UjjAIfAJzihUu0%2FwOzzq4dKREjPfm9F8aa3or%2BYhfEkeMknwPjUU28Xk4hQrP%2FZLrT2IytacsjW%2FyExkNuidBCFKrK83%2Bdf7dB03i%2BLo4zxLGZ42E7dtPGIs1EIk3QlfH7PAG4nVT&X-Amz-Signature=03cb00a9bed27ee57affbb72a8ceda29cad9d62d50baa3c6e16791e21726d62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

