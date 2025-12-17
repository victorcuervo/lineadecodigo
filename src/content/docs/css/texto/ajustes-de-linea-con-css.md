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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTIXOQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDedSFKv9fzlNmx%2BW3Vtn0K8yQ8S6xOzcsG9RWoKwWy3QIhAKsWvHSUffeQZoHexlcyWqSORQoK8YGUF5al9UhaKA3IKv8DCH4QABoMNjM3NDIzMTgzODA1IgwEYGM%2BqKw55KYy%2FWIq3AOVg8fCS7ITeUg6VZpo7xp78SXoy%2FcTsWCzmFqi5dfEPYwrjrfitvHuW5rG6jACWy9xKlXsf3N0GBxaQb52wKJKl9CdZ6DAjwRi3uODsiPouzsUqWIsmfPsUmLsk%2FFUDFb492UrZIznSWV18D8jKm66YFinl2DCOeWyJimfUB77RNflFp71gAzOEUWRFmdkQa5ObEtkW%2BFRdvu0NiKXjoq0GNYfeixjC7FIdEqz8s8HJbM4HCUxQI%2FHWsObO2JTVN2Ksc3TUFkbu0n98UCq8MsNb0Ad0lEKMHAu9suZlbmd2EFIxOrCaZQKtjHyUNcbj0hGj2Xagad5Y0wuvbnPJvDH1IfAv3t4fFbkGypShfynjDyFrCxZEjnX2U%2BtGFIhJLX86o4NC7x2uhjVQB9D33KfZVTefLdw%2FmpMs8EikwZpLwv3C8YER6YwtgI71IlnJC%2F4iLIbRw%2FwTFwNiH6E%2Fk51TdmlLoFmOzozB55hnPfyskD7AG2NXuumLwih1XQQrfcLAcAIw4iG5455w%2Bqy5a0OPd7uFc1w1iSwd3YMYMnGZd2wwYSoEGo2GMjIpg9iK6SLSI%2BXiMyPRAt38Xhjl5koUmCUxqeoa1ufQRbN1kE3uX%2FugoHJ9SUXPSS%2BljDGxorKBjqkAeVNVETbczG16inXuRv9XG9uxz5IBrvWb6scngAqBKMNS3IpGvMwklopEZKliS%2BRHpbKYuje6Yo5NOUSGJYxJ2PbZppXGuYER156Pz1uvPYOsqXye9bZDiYMQwJsBpjmoe76k2TCalCHpDGEG1lfBsT9%2BjlNDVzBFzvtwZcNd4huDsPlOMH9KXVZHSg3aai%2FS6kG66NKbuXHy4bjmg4ytvrvazEZ&X-Amz-Signature=779ecb92d8b6a342fd35662a04be57535b577b8c2c0891ecb2cb35729a726276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTIXOQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDedSFKv9fzlNmx%2BW3Vtn0K8yQ8S6xOzcsG9RWoKwWy3QIhAKsWvHSUffeQZoHexlcyWqSORQoK8YGUF5al9UhaKA3IKv8DCH4QABoMNjM3NDIzMTgzODA1IgwEYGM%2BqKw55KYy%2FWIq3AOVg8fCS7ITeUg6VZpo7xp78SXoy%2FcTsWCzmFqi5dfEPYwrjrfitvHuW5rG6jACWy9xKlXsf3N0GBxaQb52wKJKl9CdZ6DAjwRi3uODsiPouzsUqWIsmfPsUmLsk%2FFUDFb492UrZIznSWV18D8jKm66YFinl2DCOeWyJimfUB77RNflFp71gAzOEUWRFmdkQa5ObEtkW%2BFRdvu0NiKXjoq0GNYfeixjC7FIdEqz8s8HJbM4HCUxQI%2FHWsObO2JTVN2Ksc3TUFkbu0n98UCq8MsNb0Ad0lEKMHAu9suZlbmd2EFIxOrCaZQKtjHyUNcbj0hGj2Xagad5Y0wuvbnPJvDH1IfAv3t4fFbkGypShfynjDyFrCxZEjnX2U%2BtGFIhJLX86o4NC7x2uhjVQB9D33KfZVTefLdw%2FmpMs8EikwZpLwv3C8YER6YwtgI71IlnJC%2F4iLIbRw%2FwTFwNiH6E%2Fk51TdmlLoFmOzozB55hnPfyskD7AG2NXuumLwih1XQQrfcLAcAIw4iG5455w%2Bqy5a0OPd7uFc1w1iSwd3YMYMnGZd2wwYSoEGo2GMjIpg9iK6SLSI%2BXiMyPRAt38Xhjl5koUmCUxqeoa1ufQRbN1kE3uX%2FugoHJ9SUXPSS%2BljDGxorKBjqkAeVNVETbczG16inXuRv9XG9uxz5IBrvWb6scngAqBKMNS3IpGvMwklopEZKliS%2BRHpbKYuje6Yo5NOUSGJYxJ2PbZppXGuYER156Pz1uvPYOsqXye9bZDiYMQwJsBpjmoe76k2TCalCHpDGEG1lfBsT9%2BjlNDVzBFzvtwZcNd4huDsPlOMH9KXVZHSg3aai%2FS6kG66NKbuXHy4bjmg4ytvrvazEZ&X-Amz-Signature=96cd9f06d5fe78cf1a108563bb13f14ed2389c50f40c7e3ad43c08c35492d00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

