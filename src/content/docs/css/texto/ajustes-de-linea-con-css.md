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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHT4K4KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN5Myuc2X3HZxneJfCuRZUOGCtVVJ6Yi4JwT89deq7AIhAPIpvO3G5G%2BandOdv%2FWo7E00HwWrmjXnHl5Qne7TRrU0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvdoj%2FB7djEzC2b%2B8q3AOCoe%2FilbZ7uh9Gy9IBGWSfZerYzubzUipEPDkkvVXA0hiNtEJLjJUGNAfPXTf78x58DqMEgZdZx4%2FmUZDorpo7q%2FqKsEa6tH7Dd0pgA7arQpLLUhGYXfd7GrvlQsm%2BRNJVvco7tSNFMHLCrkSxGTlBrqnpBn%2Fqxj0Yve4pDAQKmpa3c8yncxW%2F%2BIJklCILsga%2ByU0HdN1svHoJufBuTPlTKx1csiURBhX6C%2FYALBeQCom%2BwRWYqJRnBcyfQpOClXTWw4z2TD0KNQEikwFUuBLwreqsQb6q6F04KH%2FB9fbNNwBZBoXZpzNkVMV48NZkJxLtabII%2BXowzUFVqIPr8WuX%2Fg5PbyOC5os7grPGedlg1Gql5M1CyuHH023US%2BBA0pfZBGiEktJdtc2Eu%2Btg9cW2mJ4YYksFBYNIW5jaYL9WRBu%2BaIONHV1HBNcUnrjLpI8P3d3WpavK0u7PWNEdCBzOQPqCWGqlTBzq%2F%2Fpt5%2F4pDokWgNH3QiOGfd0dwhMwLZamP7fgri8uYBClbFYo%2F8ypiBVp2Fpk4NyJpjNTUuI9agdQBuMSjJdBtqvZuA0a4PzKrAr5287VRlxTmq45%2BAANsv2LLj7hBeef3Mc9Hd0xTcL9QDBbmKlPLfw1VDCrn4vKBjqkATmuZWMsUd4ql5oEF1DWMCCESkTuhHVw5x1IZOPobkwgGBKNcnu3wO6CnmtGjVZ8wW8fwHAgfOK%2FeMoh49vuhyuLohoEzLaNPNhv3LdOYEFGhcAfG51r40%2FoYBH0HU9KgcXLyCmtq2S0%2BBc5cY64IgthScvT16Fma1ejdrO9ISO%2BGQLSEhVJ2b3U6PWOLwPxmM2x0ta7%2FmMwivwWuZn63qoI5PvF&X-Amz-Signature=ace9671efcd7bf59d5a6c7e46cc0638f755cc89a3f6a0d632fba923f09e0d11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHT4K4KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN5Myuc2X3HZxneJfCuRZUOGCtVVJ6Yi4JwT89deq7AIhAPIpvO3G5G%2BandOdv%2FWo7E00HwWrmjXnHl5Qne7TRrU0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvdoj%2FB7djEzC2b%2B8q3AOCoe%2FilbZ7uh9Gy9IBGWSfZerYzubzUipEPDkkvVXA0hiNtEJLjJUGNAfPXTf78x58DqMEgZdZx4%2FmUZDorpo7q%2FqKsEa6tH7Dd0pgA7arQpLLUhGYXfd7GrvlQsm%2BRNJVvco7tSNFMHLCrkSxGTlBrqnpBn%2Fqxj0Yve4pDAQKmpa3c8yncxW%2F%2BIJklCILsga%2ByU0HdN1svHoJufBuTPlTKx1csiURBhX6C%2FYALBeQCom%2BwRWYqJRnBcyfQpOClXTWw4z2TD0KNQEikwFUuBLwreqsQb6q6F04KH%2FB9fbNNwBZBoXZpzNkVMV48NZkJxLtabII%2BXowzUFVqIPr8WuX%2Fg5PbyOC5os7grPGedlg1Gql5M1CyuHH023US%2BBA0pfZBGiEktJdtc2Eu%2Btg9cW2mJ4YYksFBYNIW5jaYL9WRBu%2BaIONHV1HBNcUnrjLpI8P3d3WpavK0u7PWNEdCBzOQPqCWGqlTBzq%2F%2Fpt5%2F4pDokWgNH3QiOGfd0dwhMwLZamP7fgri8uYBClbFYo%2F8ypiBVp2Fpk4NyJpjNTUuI9agdQBuMSjJdBtqvZuA0a4PzKrAr5287VRlxTmq45%2BAANsv2LLj7hBeef3Mc9Hd0xTcL9QDBbmKlPLfw1VDCrn4vKBjqkATmuZWMsUd4ql5oEF1DWMCCESkTuhHVw5x1IZOPobkwgGBKNcnu3wO6CnmtGjVZ8wW8fwHAgfOK%2FeMoh49vuhyuLohoEzLaNPNhv3LdOYEFGhcAfG51r40%2FoYBH0HU9KgcXLyCmtq2S0%2BBc5cY64IgthScvT16Fma1ejdrO9ISO%2BGQLSEhVJ2b3U6PWOLwPxmM2x0ta7%2FmMwivwWuZn63qoI5PvF&X-Amz-Signature=320a1b0f6687beb707b392eaa49cfd3f3810b863a97ab2e6ae01cc0c01e91500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

