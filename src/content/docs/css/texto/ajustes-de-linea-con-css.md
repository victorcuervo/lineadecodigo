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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVY5P27J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK8VptsqW%2BMUj8BhTM1ZaAzo2Eisa3pqcz%2Bcc8tfwFAiB%2F50kVwvLyCC2x%2FxCEYL70Oo4vEsRUzGxZ8pqWzsM5JCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMinRR686PmHRf6JIMKtwDFhoGcN00i%2Bl1qHfhHNzQ0qmDZiXvMG2J%2BFz%2BcjmNBFSL1BTCIMGKAz42cWaTjstWcKVVRgnaXwqqCGoLLJEZS7zd%2B0Q0B1z0YMxVVL3dilGtSXTUI4Y%2FYa0en7s7yvdM8cd89JHZtVuUx6jTPq6Z7BtIE4tamxCt5a%2BTgOTX39HL9sNI4CYixS2civU0e91meYEil%2BqJR%2FQNgy8Kdy8%2BEjJJ8A%2BUVmqEMi5cuCSXhVfdpmV0StOAiyIKYnwlsRG63I%2FhSWA7XA39FL5th2oP0ZepDhiwKwGRKEu7xTeqhH0OW7ccHYM5m2uL%2B%2BibbtloNmNLQWyYZjhmYpLiOZU5ONn256LKgw2ohA%2BHC9N3Qc%2BJP0nFjnuT%2BxmiAAcGGTMpWGPb7SzF5AfNGn2LGT5xDRSkxvx9oQnFleaK86MKO%2BF2byglbAsy9hSsxYFTzQ20ClXqV5DnEzM2OntGMems%2B1m%2BMsFhttyQq5jVMyUTIgWynu5NBUY9ymfvCA4XG7FmS643r0sfKZpYwN6XwK1Z%2F2rLhzNyWcHXyXl8sP2J%2BiGbaRZ%2FpTcSa%2BHqBwlGSt7sUJSAYhoaO5a62XRBk3sYGMmOGpBhqimr1zXyV0ZXQ816kghntHoYiUXTwwUwko%2BKygY6pgHQ7YPQNkspIJwRbItKOmwWoXv63YYwSxpUpe%2BECzn9873vRqdoeOBUunmRNjaALsq3z7mkNIG3VXzqxp3eX6VLD0Eo7AgFBSPzeSj8rlXSiFW7X6Uk4ZkZ8you5HQrx3ZT98B6g5%2B8DBlcOlQgsXULitfjbAL3t8%2BHnY9syAq9tqWL431y%2B0kKOxR3cKZRyVYug57WEqMN%2FkNH5T0Wf2cyhZJciFEV&X-Amz-Signature=665936bcccde57ec6dc9ddc3ae5300dc26a3a43069b11ca8d54db384261a34c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVY5P27J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK8VptsqW%2BMUj8BhTM1ZaAzo2Eisa3pqcz%2Bcc8tfwFAiB%2F50kVwvLyCC2x%2FxCEYL70Oo4vEsRUzGxZ8pqWzsM5JCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMinRR686PmHRf6JIMKtwDFhoGcN00i%2Bl1qHfhHNzQ0qmDZiXvMG2J%2BFz%2BcjmNBFSL1BTCIMGKAz42cWaTjstWcKVVRgnaXwqqCGoLLJEZS7zd%2B0Q0B1z0YMxVVL3dilGtSXTUI4Y%2FYa0en7s7yvdM8cd89JHZtVuUx6jTPq6Z7BtIE4tamxCt5a%2BTgOTX39HL9sNI4CYixS2civU0e91meYEil%2BqJR%2FQNgy8Kdy8%2BEjJJ8A%2BUVmqEMi5cuCSXhVfdpmV0StOAiyIKYnwlsRG63I%2FhSWA7XA39FL5th2oP0ZepDhiwKwGRKEu7xTeqhH0OW7ccHYM5m2uL%2B%2BibbtloNmNLQWyYZjhmYpLiOZU5ONn256LKgw2ohA%2BHC9N3Qc%2BJP0nFjnuT%2BxmiAAcGGTMpWGPb7SzF5AfNGn2LGT5xDRSkxvx9oQnFleaK86MKO%2BF2byglbAsy9hSsxYFTzQ20ClXqV5DnEzM2OntGMems%2B1m%2BMsFhttyQq5jVMyUTIgWynu5NBUY9ymfvCA4XG7FmS643r0sfKZpYwN6XwK1Z%2F2rLhzNyWcHXyXl8sP2J%2BiGbaRZ%2FpTcSa%2BHqBwlGSt7sUJSAYhoaO5a62XRBk3sYGMmOGpBhqimr1zXyV0ZXQ816kghntHoYiUXTwwUwko%2BKygY6pgHQ7YPQNkspIJwRbItKOmwWoXv63YYwSxpUpe%2BECzn9873vRqdoeOBUunmRNjaALsq3z7mkNIG3VXzqxp3eX6VLD0Eo7AgFBSPzeSj8rlXSiFW7X6Uk4ZkZ8you5HQrx3ZT98B6g5%2B8DBlcOlQgsXULitfjbAL3t8%2BHnY9syAq9tqWL431y%2B0kKOxR3cKZRyVYug57WEqMN%2FkNH5T0Wf2cyhZJciFEV&X-Amz-Signature=888e1d29b395dcc627d45c32a28ce601b468e5821476e679494ed17dac99653c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

