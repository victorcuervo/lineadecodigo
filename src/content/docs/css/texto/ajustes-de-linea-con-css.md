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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZ2UBTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1lj1SPff7eaLouOcIEcSLZCm1mbQ3ZnGaiTZUd7BDpAiAqFgo3RvrJ8y9urgkQI7b%2B3g8RaP%2BWaBI98X9yvgNrhyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM47CnLZ12DHu3WpgLKtwDSNCAbgI%2BLwfgOlpgJIhKFpjEQAkfK8knF%2BaFmT9xLfA%2BYh1jKs9jQWNynslx4bGBaUXyw2cGMwtUYHoE8Kx20qT4VcSl8dacshlroi%2Biv0e4btto3Voq8794hMslj%2Bn1XaTC0l6INFmkRmJSM7FZtQGDFq5%2B7Wo5EBibJn77frZ4jeqgF0fNn59EBNZ9uQRDeFzOcEPICRnUuTF3mZKBz153OgAs%2F1yvxz%2BovrFlCxmDnSptynkG9c8n5%2FyLOuIJwj3M4AtJ3ZS5WO5%2F9DTtL8aLqYF7zXY%2B6w2hIBo3JzkOy0Xu1V4ITuehp3h%2BT4ahs6W6UuHri949OH%2F69kddDGTY3DzFUMJXkgkhgFR6SfDKN3ff%2BIGihDnK6FJUgRj%2FLm41t%2FYHKz6%2FsfhUfO9wyvVisSAht1MkKkhRA%2BajGQd34Sr9MnVmnOZxVxOD5LsyTuxPLiSmcbTrVWs4Ht4Pg0GhANxVFegpJgNsFH%2Bt6XOzz0YpQemf52p1NIpjcvcQOGT%2FC7%2BE23zaNSRv%2FkjvzqVjqZ7uJ1Myjn2elzbxBUYI2MdecSyIEL8o6KXIhMygw5rjI0bLLgDlQpcTgHDdmJB0pwWZRXUHnQblmQ4QmGlLO%2BL30RKdPqoPF5YwrOmIygY6pgHKc2jM%2BunSNTofRa2Gn%2FBP78%2FeZEG7%2BIMJ8Zf4FIg4DRXPDAlc3fuu19aWKNDq9bRVti4S7z7ClvgZ04RNFAcQafJufwC5MqoQ4WANt52TEkna73lWMqerkKsGDpqqNynZnA2Z8C01c5C0QbzPCmOlBIlfWSfTP1a3UAgagWR0HRwsX3iXL5PtiX9TkEMcXe3GcnqpxYdarKJQLRMOSfAWqC9JTz1M&X-Amz-Signature=2336ae809d9657431b55586f21d57cd1e9155c7b02d0b481a5875d16d873e1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZ2UBTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1lj1SPff7eaLouOcIEcSLZCm1mbQ3ZnGaiTZUd7BDpAiAqFgo3RvrJ8y9urgkQI7b%2B3g8RaP%2BWaBI98X9yvgNrhyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM47CnLZ12DHu3WpgLKtwDSNCAbgI%2BLwfgOlpgJIhKFpjEQAkfK8knF%2BaFmT9xLfA%2BYh1jKs9jQWNynslx4bGBaUXyw2cGMwtUYHoE8Kx20qT4VcSl8dacshlroi%2Biv0e4btto3Voq8794hMslj%2Bn1XaTC0l6INFmkRmJSM7FZtQGDFq5%2B7Wo5EBibJn77frZ4jeqgF0fNn59EBNZ9uQRDeFzOcEPICRnUuTF3mZKBz153OgAs%2F1yvxz%2BovrFlCxmDnSptynkG9c8n5%2FyLOuIJwj3M4AtJ3ZS5WO5%2F9DTtL8aLqYF7zXY%2B6w2hIBo3JzkOy0Xu1V4ITuehp3h%2BT4ahs6W6UuHri949OH%2F69kddDGTY3DzFUMJXkgkhgFR6SfDKN3ff%2BIGihDnK6FJUgRj%2FLm41t%2FYHKz6%2FsfhUfO9wyvVisSAht1MkKkhRA%2BajGQd34Sr9MnVmnOZxVxOD5LsyTuxPLiSmcbTrVWs4Ht4Pg0GhANxVFegpJgNsFH%2Bt6XOzz0YpQemf52p1NIpjcvcQOGT%2FC7%2BE23zaNSRv%2FkjvzqVjqZ7uJ1Myjn2elzbxBUYI2MdecSyIEL8o6KXIhMygw5rjI0bLLgDlQpcTgHDdmJB0pwWZRXUHnQblmQ4QmGlLO%2BL30RKdPqoPF5YwrOmIygY6pgHKc2jM%2BunSNTofRa2Gn%2FBP78%2FeZEG7%2BIMJ8Zf4FIg4DRXPDAlc3fuu19aWKNDq9bRVti4S7z7ClvgZ04RNFAcQafJufwC5MqoQ4WANt52TEkna73lWMqerkKsGDpqqNynZnA2Z8C01c5C0QbzPCmOlBIlfWSfTP1a3UAgagWR0HRwsX3iXL5PtiX9TkEMcXe3GcnqpxYdarKJQLRMOSfAWqC9JTz1M&X-Amz-Signature=38a5ea60a3b919418ba25c5e6ad8189ffce483a868c66c1d10f367eaa01e18fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

