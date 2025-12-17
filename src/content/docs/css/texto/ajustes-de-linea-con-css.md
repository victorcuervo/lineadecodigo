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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIUEX4GA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKNF%2FkVB8IuHZXO2sKpLkiWyJGoh014ZnNC%2BUfjNy3AiEA2fxmYVau4VDnM6P77b01INgX7CNHxNoYn36sJ8b22kgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIptX8joVY2FfTpGircA%2FOx7gtNsESHg8iEiMwoUo2Aiu2Oy3yScNjIJgHMRIMLbKR93fO0Cja1XCrBaNU2ZUw3ZxbI8RzpNFsoYdfC7WMqJNFX4e2j1qJFXk%2FYPNsRveAu7%2FU8YgbDfIP9lq6CjGSjfdl410tbAbIOEA728KkUBWqUseXYaK5spGk20EO6Ll1v9AaqiT33nHI%2BV1swcENfl31ga%2FuRKBRfm%2FbCdFQy8YGeL84rZjO83YKQmK%2B61tIUrOMdzn0uTZywPuMGxmYpH0hxIB0Et88YJuTD0lMJSU6M7SInHSOT1xXYqYvyJydfN7ilDOjJFgrhfbf%2Bm0Y%2FQhCD6NdX5xQfq2FC9blWQ6YtfB0P6BzZ%2BUZueKTpdjYh3LDXUhpcLENf1bxTG34HjkpLlQ%2BGsG%2FZIIUjxRYIRuPNJIY%2BWeTFwOHoNFeujwfJ4S5p402l0kB4Lh77kvArqIbCkbqgjF4Xy8NzZIZQVrau86FMxGa51y1EdwhC3EWvRpRXEF%2FC1lbjRyqPcWn%2FVRww30dRqgA%2FIbuCGbjH61V1whC4cq3OIM1%2BeoDQqCGE5RiAL0N%2FXepAHQl1jMtRjA94d%2FNles%2BcOXEdc%2BSVqFTn%2FSIs5%2FVOqD5Zo78I%2FZG7N2%2FpczDS1CSkMM%2BLjMoGOqUBM7K2unGmGu%2BkGfI80CJK86aQGUDSbqHFj%2Bg1JNIZR6RgLnGPz8%2FD1Su1Q8jACmAIiUZxg5vHIWC5wv87HytyKEYS4Av1z4KYIYzW7IOtY%2F1Mms1BwmmZbhDoFzKIBHnao98xIQXKGFjP09NOPgLoBgUA5%2B9KaVVtmKO%2BPpx0lknd1uoBf%2BxXfUcthMVV2kafJRu%2FLZT3iZ%2FfbW9h1AJycHxcp6vP&X-Amz-Signature=f9d462167526ba6664b68a8bd69957ffa413e1715afe3b4cba1861fee998e80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIUEX4GA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKNF%2FkVB8IuHZXO2sKpLkiWyJGoh014ZnNC%2BUfjNy3AiEA2fxmYVau4VDnM6P77b01INgX7CNHxNoYn36sJ8b22kgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIptX8joVY2FfTpGircA%2FOx7gtNsESHg8iEiMwoUo2Aiu2Oy3yScNjIJgHMRIMLbKR93fO0Cja1XCrBaNU2ZUw3ZxbI8RzpNFsoYdfC7WMqJNFX4e2j1qJFXk%2FYPNsRveAu7%2FU8YgbDfIP9lq6CjGSjfdl410tbAbIOEA728KkUBWqUseXYaK5spGk20EO6Ll1v9AaqiT33nHI%2BV1swcENfl31ga%2FuRKBRfm%2FbCdFQy8YGeL84rZjO83YKQmK%2B61tIUrOMdzn0uTZywPuMGxmYpH0hxIB0Et88YJuTD0lMJSU6M7SInHSOT1xXYqYvyJydfN7ilDOjJFgrhfbf%2Bm0Y%2FQhCD6NdX5xQfq2FC9blWQ6YtfB0P6BzZ%2BUZueKTpdjYh3LDXUhpcLENf1bxTG34HjkpLlQ%2BGsG%2FZIIUjxRYIRuPNJIY%2BWeTFwOHoNFeujwfJ4S5p402l0kB4Lh77kvArqIbCkbqgjF4Xy8NzZIZQVrau86FMxGa51y1EdwhC3EWvRpRXEF%2FC1lbjRyqPcWn%2FVRww30dRqgA%2FIbuCGbjH61V1whC4cq3OIM1%2BeoDQqCGE5RiAL0N%2FXepAHQl1jMtRjA94d%2FNles%2BcOXEdc%2BSVqFTn%2FSIs5%2FVOqD5Zo78I%2FZG7N2%2FpczDS1CSkMM%2BLjMoGOqUBM7K2unGmGu%2BkGfI80CJK86aQGUDSbqHFj%2Bg1JNIZR6RgLnGPz8%2FD1Su1Q8jACmAIiUZxg5vHIWC5wv87HytyKEYS4Av1z4KYIYzW7IOtY%2F1Mms1BwmmZbhDoFzKIBHnao98xIQXKGFjP09NOPgLoBgUA5%2B9KaVVtmKO%2BPpx0lknd1uoBf%2BxXfUcthMVV2kafJRu%2FLZT3iZ%2FfbW9h1AJycHxcp6vP&X-Amz-Signature=901a82c4eff2c125befffd59ee0c1c1f395fd11d6b73e7337f77856f870d3d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

