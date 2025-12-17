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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUFRBOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClhLHUDivbsoorbXSDuhiVchyo6BUIrf%2FCbxhdE%2FwjlAiEApa%2BYB0n3teIFtMP9%2FGeV4Irv0oMJpxXNtN0gd2WPA4Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCQN8Qu%2BpFUHu%2FJDbyrcA0fHLksN8l0IIssD4N35LdS%2FDk8sTrROXxjTZZHBWebJijsC09JGT0AzqWcsrN9WZ2bXZ4C3JvtNpbli6z%2FuFVLsZfw0ZmosVeWFK5QSWSyqGwMpsXYlSKJIasNuBuB7XqCjXoKXJZADeAc%2F83STmlmiLcehONl%2F%2B8BopkY23eNC2PUY2MPNYFfllwEH%2B4geux7svQ1y6SX88GijYFhlZ692sCf70naz8H1V1kVZNlIsiD2ycKXJD4AnJ3twhSKaywkXvQdyHGD90sLUtxCxM7dh4FlriQ8yZE4a8yDTc3ApcEuPcA8%2FfqUnYAC6LXfWhMqck7GXzFFVSH%2FLJqZGOVGtxU%2Bb1EF2yjcU%2BoTWj3zlm3MWlObtP9CsENFjywx%2B7mgbiDFK2aOrL9hMD0V4zjRv5tRvXK9pdZPsbOd%2BvNR1z4gMigXYCgahVjMb%2BTZGDKTNVffOzixOOEi0UZCsWhfEQMBCjqU6lkaVOuE84J7TzT11h4AnXWf2FrcjG5grKgD6qjn7o6BVegtYf1G%2BivDvHpwj9dSOWb%2F6c2M%2FW9K3G1HTJp1r7e3MtHBV6a9MmFFOl%2FNWuFt4JFtGajN4dCv6BfQV2vhShBnpu%2BCxfSOsxy%2BsCKj5B5by%2BZbvMLOrisoGOqUBW%2FhrOTMhtwSAgOoliaF5TpGKmFydQxuJvXinp7t5CA%2ByIWvPJQ8icDfrerp9WR1pcAnsoXx7Qte5MIFLyn7SCgIOmsONcnNXpweSeIo5c5ezfb%2F1GKEHZJAjyDHZD5VKQ%2F3%2BG4nm0w6gBCdlYKRi7H7C6o4qqHLDITCg381b2Ed5tpyfyPp4Jk72%2FU0Y3T8gzpiRnyPYKy3A48VLzHkuGfE66lwV&X-Amz-Signature=166f923979481bab7efa7822479573c454fba78da94d06e04c1043570326e853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUFRBOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClhLHUDivbsoorbXSDuhiVchyo6BUIrf%2FCbxhdE%2FwjlAiEApa%2BYB0n3teIFtMP9%2FGeV4Irv0oMJpxXNtN0gd2WPA4Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCQN8Qu%2BpFUHu%2FJDbyrcA0fHLksN8l0IIssD4N35LdS%2FDk8sTrROXxjTZZHBWebJijsC09JGT0AzqWcsrN9WZ2bXZ4C3JvtNpbli6z%2FuFVLsZfw0ZmosVeWFK5QSWSyqGwMpsXYlSKJIasNuBuB7XqCjXoKXJZADeAc%2F83STmlmiLcehONl%2F%2B8BopkY23eNC2PUY2MPNYFfllwEH%2B4geux7svQ1y6SX88GijYFhlZ692sCf70naz8H1V1kVZNlIsiD2ycKXJD4AnJ3twhSKaywkXvQdyHGD90sLUtxCxM7dh4FlriQ8yZE4a8yDTc3ApcEuPcA8%2FfqUnYAC6LXfWhMqck7GXzFFVSH%2FLJqZGOVGtxU%2Bb1EF2yjcU%2BoTWj3zlm3MWlObtP9CsENFjywx%2B7mgbiDFK2aOrL9hMD0V4zjRv5tRvXK9pdZPsbOd%2BvNR1z4gMigXYCgahVjMb%2BTZGDKTNVffOzixOOEi0UZCsWhfEQMBCjqU6lkaVOuE84J7TzT11h4AnXWf2FrcjG5grKgD6qjn7o6BVegtYf1G%2BivDvHpwj9dSOWb%2F6c2M%2FW9K3G1HTJp1r7e3MtHBV6a9MmFFOl%2FNWuFt4JFtGajN4dCv6BfQV2vhShBnpu%2BCxfSOsxy%2BsCKj5B5by%2BZbvMLOrisoGOqUBW%2FhrOTMhtwSAgOoliaF5TpGKmFydQxuJvXinp7t5CA%2ByIWvPJQ8icDfrerp9WR1pcAnsoXx7Qte5MIFLyn7SCgIOmsONcnNXpweSeIo5c5ezfb%2F1GKEHZJAjyDHZD5VKQ%2F3%2BG4nm0w6gBCdlYKRi7H7C6o4qqHLDITCg381b2Ed5tpyfyPp4Jk72%2FU0Y3T8gzpiRnyPYKy3A48VLzHkuGfE66lwV&X-Amz-Signature=032fe110c8e165ef8dd561eac49908cfefd4493f4da3bb331d6e365bfb3845e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

