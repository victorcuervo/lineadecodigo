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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUY5AKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUjm1lTZPOvzVg%2BPYfNi8bupoApRVowMIN2K8yfhErsAiEA48Dv7SVKYwocyUKtCV0QA8a9R9QPrqNUvmpGxsRhGIUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAzwCjze%2FzWni1dFCyrcA90ArkiM2zvCZXW4qdvELnsRqF3%2FdGjJsAdEmn7SDI9h8Tk1LT5HNaS2VFYUU83bcRkJMVvYZW%2FTcg8%2FRa%2BjEyx%2BOhUSv9hWBnLhq%2B%2FUlRahcxD4QRz53EfDBT%2BjauwCBGNJwiDM8XxC%2F1RgumuDHKaoqJlrVhArt68ixbXYehq2%2Br1Ln8X03dp0%2FwCfcHMBUHBrDW1xq6lidi9FfFctsMkiFCO9jc5%2FvvdARqV2TGbbUl7wZDG3gut%2FqOY857KPB19IiTaZ7p4%2F%2BEB7tABA7diapQKw9F8AFXQ7WoB%2FW9qJqD4kgKkzF6Ysdx5rXOboVbj6rWcVdJfLbQsgeQVXVhxy%2BPazI2FuWIyyrlL7ZIod4FAbHsj8wPeWouQiHvXiprHtqlL1Yv3am3qz%2BRC7HukcYQNk2W%2BfKyvRbyDf8G54SIcmc7MwSerrvyRRr6RLHaeYAE07pJN8OhKxfXADplfnZcIBItZ75Jp8tsFVuh0jmCGm2nYtc0MUxbcFD1E8nmHnQPkJn%2FzT8dD9VQP9s4g92HRAVruR2g3nOD29i3MxPKrVKWTT8%2FIEcRpBWxP5yuTOGww7yP5DxiFyqUW0UwEzGfL7fWQQgLXTI0cMTjANb3Cu3jUSfmVVDvcmMJfOiMoGOqUBa4s2TKONiHLWy28zI%2BSISHJebNjZycLghths0kxqYlIuyFBAjFSmwGcb6EMPld0W%2B2FG6yrHBZFHBVfVDtqWh4kBLtj1vufQnyuBsPENilKMCW4i4znR3iWLhHeepccn8wBKvwaTs2FKlGfQ3JN3PJqstXX%2Bg3AASB9obPmChfAeaaW62dUnxC5JqFmuZqtPnic%2F6iLGEPxp%2FXEOqDJK1Ur9bq7l&X-Amz-Signature=31a51e2669ec6aba37ff079d2fd7a4e0acf5239f2d83a0f8ac9df1e988518c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUY5AKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUjm1lTZPOvzVg%2BPYfNi8bupoApRVowMIN2K8yfhErsAiEA48Dv7SVKYwocyUKtCV0QA8a9R9QPrqNUvmpGxsRhGIUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAzwCjze%2FzWni1dFCyrcA90ArkiM2zvCZXW4qdvELnsRqF3%2FdGjJsAdEmn7SDI9h8Tk1LT5HNaS2VFYUU83bcRkJMVvYZW%2FTcg8%2FRa%2BjEyx%2BOhUSv9hWBnLhq%2B%2FUlRahcxD4QRz53EfDBT%2BjauwCBGNJwiDM8XxC%2F1RgumuDHKaoqJlrVhArt68ixbXYehq2%2Br1Ln8X03dp0%2FwCfcHMBUHBrDW1xq6lidi9FfFctsMkiFCO9jc5%2FvvdARqV2TGbbUl7wZDG3gut%2FqOY857KPB19IiTaZ7p4%2F%2BEB7tABA7diapQKw9F8AFXQ7WoB%2FW9qJqD4kgKkzF6Ysdx5rXOboVbj6rWcVdJfLbQsgeQVXVhxy%2BPazI2FuWIyyrlL7ZIod4FAbHsj8wPeWouQiHvXiprHtqlL1Yv3am3qz%2BRC7HukcYQNk2W%2BfKyvRbyDf8G54SIcmc7MwSerrvyRRr6RLHaeYAE07pJN8OhKxfXADplfnZcIBItZ75Jp8tsFVuh0jmCGm2nYtc0MUxbcFD1E8nmHnQPkJn%2FzT8dD9VQP9s4g92HRAVruR2g3nOD29i3MxPKrVKWTT8%2FIEcRpBWxP5yuTOGww7yP5DxiFyqUW0UwEzGfL7fWQQgLXTI0cMTjANb3Cu3jUSfmVVDvcmMJfOiMoGOqUBa4s2TKONiHLWy28zI%2BSISHJebNjZycLghths0kxqYlIuyFBAjFSmwGcb6EMPld0W%2B2FG6yrHBZFHBVfVDtqWh4kBLtj1vufQnyuBsPENilKMCW4i4znR3iWLhHeepccn8wBKvwaTs2FKlGfQ3JN3PJqstXX%2Bg3AASB9obPmChfAeaaW62dUnxC5JqFmuZqtPnic%2F6iLGEPxp%2FXEOqDJK1Ur9bq7l&X-Amz-Signature=b63c3410bd0d5317ff3bc64da7217b43abf7325f1077ca7ad48ca79f7196dc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

