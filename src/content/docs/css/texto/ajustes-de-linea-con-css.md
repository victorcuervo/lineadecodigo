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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGFV75A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BYXJFJyQoJUaGkeFHKeHZFLGktvHNSCNY4RuCO58m6AiEA%2B1TDHb3aAkmj6RO%2Bm%2FoayK5ggVH2ulHm7yy9p2308QUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD7Js8D7RyS7exSoLCrcA0On6OITJHEpTvpOfP2wVwCR%2FD2jDbNtw8tCOiCx5KB3OIYk3ngShHklQv8KYnayEbqNyFMSGDQKGHuxLx%2FQI4LV7egOnwxX2cT6v0nvJmjRVnZLR2a4RkPukT95cPVim7iIdwp35nFtlFUSiBVUrZ%2BV4cnbADWQFm3HrIdfZHr9lskj1qOiry65V%2B081seoSbN9syM4EgOk9eAa4sv9xffzVCnnBx5ArBInmKLLAF1FRc5jqqJna%2FIjH4ZiYzrkNSu0Ww%2F43jxD%2B1EAOF5QJO9hFVMKYn81mqRsWIvwzm94tTuX%2FkcgpPhDJqnn6hcY%2Bm34R7Ri9Ebhwop%2FTrNfguXec9d6xPa51U3Tm3Z0ST6r%2FzpcdhH3n0WGjjPmfInKgYGGELi3vxcZ8pp6DeEZCeookILtZbnH40AQK1%2Fzjqy2aKXpqSTuivGLtuoerW6yeTEvhdTYEHfoxUZNKzh8o%2FoThq825eMBz9uDl3USLzYQSXIe2b2M8BI7l7ITDgs3%2B%2B%2BBzUz8wYR%2BfqQUW%2BmcGOwFbimoSavCvyMy46814QV0znZSvJB2RO7%2BnF5fPOfQfY8t8SvEnkYlBGNECE8%2BzzsOrOjZBpa7m2tSL7cUxzliaptULiJLC44Xy6ibMPzQicoGOqUBN%2BvdSX9d09A3voQO71TproUY0PbwL6Y%2FAi%2FIlfdclR5%2FZPRIrab%2FqAnMHxHTvXivFDA4skEQclJk8G5gmaNOzxYtH0V1a9MMlouglFT9Orrm35Uhj2%2B8T7bqJoJKMl3DXDN%2BjYgekNd9o5t0xDYB%2FE8EG%2FaFIekopi2XLZKclbJGGC525t1fPMcBL7TV%2FFLHL53PWfP%2BoW3%2BALoAXnW5y%2BO3vQXI&X-Amz-Signature=be90d994acaea6cb8e5911d70143a88656e0d73a7cd2fdad40ed8c72b4ec572a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGFV75A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BYXJFJyQoJUaGkeFHKeHZFLGktvHNSCNY4RuCO58m6AiEA%2B1TDHb3aAkmj6RO%2Bm%2FoayK5ggVH2ulHm7yy9p2308QUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD7Js8D7RyS7exSoLCrcA0On6OITJHEpTvpOfP2wVwCR%2FD2jDbNtw8tCOiCx5KB3OIYk3ngShHklQv8KYnayEbqNyFMSGDQKGHuxLx%2FQI4LV7egOnwxX2cT6v0nvJmjRVnZLR2a4RkPukT95cPVim7iIdwp35nFtlFUSiBVUrZ%2BV4cnbADWQFm3HrIdfZHr9lskj1qOiry65V%2B081seoSbN9syM4EgOk9eAa4sv9xffzVCnnBx5ArBInmKLLAF1FRc5jqqJna%2FIjH4ZiYzrkNSu0Ww%2F43jxD%2B1EAOF5QJO9hFVMKYn81mqRsWIvwzm94tTuX%2FkcgpPhDJqnn6hcY%2Bm34R7Ri9Ebhwop%2FTrNfguXec9d6xPa51U3Tm3Z0ST6r%2FzpcdhH3n0WGjjPmfInKgYGGELi3vxcZ8pp6DeEZCeookILtZbnH40AQK1%2Fzjqy2aKXpqSTuivGLtuoerW6yeTEvhdTYEHfoxUZNKzh8o%2FoThq825eMBz9uDl3USLzYQSXIe2b2M8BI7l7ITDgs3%2B%2B%2BBzUz8wYR%2BfqQUW%2BmcGOwFbimoSavCvyMy46814QV0znZSvJB2RO7%2BnF5fPOfQfY8t8SvEnkYlBGNECE8%2BzzsOrOjZBpa7m2tSL7cUxzliaptULiJLC44Xy6ibMPzQicoGOqUBN%2BvdSX9d09A3voQO71TproUY0PbwL6Y%2FAi%2FIlfdclR5%2FZPRIrab%2FqAnMHxHTvXivFDA4skEQclJk8G5gmaNOzxYtH0V1a9MMlouglFT9Orrm35Uhj2%2B8T7bqJoJKMl3DXDN%2BjYgekNd9o5t0xDYB%2FE8EG%2FaFIekopi2XLZKclbJGGC525t1fPMcBL7TV%2FFLHL53PWfP%2BoW3%2BALoAXnW5y%2BO3vQXI&X-Amz-Signature=7fe571adedab5aa76037b5bbb785be368439fad4f09ef189f97ebdf7c5ed566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

