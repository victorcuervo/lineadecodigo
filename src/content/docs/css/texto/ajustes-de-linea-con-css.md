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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFX4F5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXdlafy4mU02Kg1F9i%2F7Rq%2Fes6E%2BSr%2F0vlkOuf9Ha2awIhAOuU4sQs3m4F5CN0p38mYJABK0DkXV23IFcIpLSPEzHjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLWWah34W79FnTwogq3AOHLmA7OTCH7MeMV0%2FWuINa9lz%2BwNO7rppp2FmlRtrrzLI3ccg3Egz1z4mbaaUpT714tXT4sP4IlyWiYxLXDXxNkzHKhqpp4F1%2Bd4stkVw9J2v1M2o9OUxzlOMBsMkrkFOC%2F5Cx5kNf99tKPvhDeSSgRgm6Zx34ILqTqnUVYcYXDgKNMrwDbLxwJyiiX2MRY%2BZeNPqYKj8sIWVNRmatNpfQ9EoNwnSSFDA%2B7Lotsv6B%2BmLJDHi6jEBBmQeB0x%2FT2vhLLmsUjUlT4aSC9Xf8G3amP%2F9eQiKWOw38%2F%2BmadzwNs0m3Wyh0oPZxbK6FPuJmYovyVd57%2FCK%2BF9YYWJVWCDDSjmxvbql6wErQXLFcqenHvUtby2%2BSL7p8UEcA%2FbSIT30n8HVvkcYT5mZAiyKm2o2xF85BgJQhmFFK8wqTnmtx41L6FTLvZca2CoVaOGnNBQRSpCPXS7JI9TeoIk0gPEvUK6M4arnsQ3PARSB5x1wVreIMX26G8nONXVY3uI9PKj5p9WQ2crHNTGqfqxO2%2FVRBpFk%2FftDkfDkwyOAdNMrorO3%2FuKxxq9k798Ms7Off1aIGsmjTTzieklE9Dj%2B31Nh%2BhdHrCKKq3XenINFXYlSBYN7K%2F9siPrNutCTHhTDKn4vKBjqkAf8oUztWoHXnzcpszI5%2Fpi7RfzhUWL0PfCMMe2xJ6ffc7XdGd046KoxATkSveMRCf%2BPhAi4M81VOHVLjvUyiOuSTi4rXTFB1BIuK8duXemYyvzB4dxjTnTD%2Fwhe1dpXZMsBziB7kXxMtm8wIe9FEa%2BZME1dndgnLY8cPQnQsV8e0Uq4FwY%2F3UZapP4hHiYhBcioyNWVWfsyUIt4%2ByQEceMABAkuU&X-Amz-Signature=0f157caea8cd02ecf747c911099bc3a1f399535bbbd92ab60cab24427fa09ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFX4F5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXdlafy4mU02Kg1F9i%2F7Rq%2Fes6E%2BSr%2F0vlkOuf9Ha2awIhAOuU4sQs3m4F5CN0p38mYJABK0DkXV23IFcIpLSPEzHjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLWWah34W79FnTwogq3AOHLmA7OTCH7MeMV0%2FWuINa9lz%2BwNO7rppp2FmlRtrrzLI3ccg3Egz1z4mbaaUpT714tXT4sP4IlyWiYxLXDXxNkzHKhqpp4F1%2Bd4stkVw9J2v1M2o9OUxzlOMBsMkrkFOC%2F5Cx5kNf99tKPvhDeSSgRgm6Zx34ILqTqnUVYcYXDgKNMrwDbLxwJyiiX2MRY%2BZeNPqYKj8sIWVNRmatNpfQ9EoNwnSSFDA%2B7Lotsv6B%2BmLJDHi6jEBBmQeB0x%2FT2vhLLmsUjUlT4aSC9Xf8G3amP%2F9eQiKWOw38%2F%2BmadzwNs0m3Wyh0oPZxbK6FPuJmYovyVd57%2FCK%2BF9YYWJVWCDDSjmxvbql6wErQXLFcqenHvUtby2%2BSL7p8UEcA%2FbSIT30n8HVvkcYT5mZAiyKm2o2xF85BgJQhmFFK8wqTnmtx41L6FTLvZca2CoVaOGnNBQRSpCPXS7JI9TeoIk0gPEvUK6M4arnsQ3PARSB5x1wVreIMX26G8nONXVY3uI9PKj5p9WQ2crHNTGqfqxO2%2FVRBpFk%2FftDkfDkwyOAdNMrorO3%2FuKxxq9k798Ms7Off1aIGsmjTTzieklE9Dj%2B31Nh%2BhdHrCKKq3XenINFXYlSBYN7K%2F9siPrNutCTHhTDKn4vKBjqkAf8oUztWoHXnzcpszI5%2Fpi7RfzhUWL0PfCMMe2xJ6ffc7XdGd046KoxATkSveMRCf%2BPhAi4M81VOHVLjvUyiOuSTi4rXTFB1BIuK8duXemYyvzB4dxjTnTD%2Fwhe1dpXZMsBziB7kXxMtm8wIe9FEa%2BZME1dndgnLY8cPQnQsV8e0Uq4FwY%2F3UZapP4hHiYhBcioyNWVWfsyUIt4%2ByQEceMABAkuU&X-Amz-Signature=ee8c9a0676440aa2f1abf9f091d2585372293dd4d4c724322ad0ac44cb2623b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

