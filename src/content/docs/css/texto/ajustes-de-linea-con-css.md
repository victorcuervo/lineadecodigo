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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATOEI2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMGXqrG3BlQ7angTQkhmVvtfaL6fSNl%2BNhi3%2BjF5J5lAIhAIV197CZMPDghXuIsyOUfNxFpUxDwNnSMAB5lwYC4pshKv8DCHYQABoMNjM3NDIzMTgzODA1IgxzJ9eyBUuHVJ2nx%2B0q3AOeAF%2FMo8fzxLLKmPuCN0nbOS%2FcL5o%2FOBk%2BdhTX9nsy5Xd4oViktKDZXBZy510blcSu7o%2BxZJ9pKQ3VWMtsSRG5aoZy6jVvHr%2FxyBNzV%2FLfTjMBka4ntUks1VJJamY%2Fj%2BGtTnGQW7uMUODtxg2QHMJtLym9uI%2BbRPxOIZWH%2FIyJirELhQAYfyUBOA5GfGYnVkhyqBtxSY4YHwwKd8DTcCHWxKqgdZZWaoNp7BEwf470A%2Fe%2BLQEJrIXwFIzi9uckjy0QvkSPqbzhUyz2DMQsD4r6pJIlZv%2F209JhqDLfX9ACy8C5wF1D6HRai1bEEVF79nNRRTc3k9InH47gretIeT2oaoY5M2j9DavFDwHLtjL2E6m8grouMgC9%2Fzzq%2F5%2BI5ve5s13RwMdx0aaY4aA7bA6Lk%2FO%2F7UpivN%2Bkg1TKmO04rJTTns8fzKDNKHZGXLwaDM67UR6%2BJq%2FBD%2FKsby%2BZaBEwn12YnrMG%2FLbxLyX8hBzmaMwy908Gb1bcuzBpAy16x9L%2F4YsXvAI6Z2jGVjC3rsZ9iaNSYzwYpKIkAjUr92UZr3KLhI1EOm1q5wnORNaZTnw0g77pxvSc5CfIpW38Er7hfJucVx8lJ3Cmd4HMH3SkGgwSPRFZiPdQf8ueNTDc6YjKBjqkAUiqp0NrI0OkgQ3Zm37vPAH9%2BQl3Xm9oljSi9e6oqrkagreW0kJZny4T%2BdLxh5gyyHHTQwWK%2BqV6xp1CUlgdhG%2FqCtbarvt%2BB3Z0m8gRWEarHU1%2BZNixoRBV1u5zi9gCIeyCvbBSO29X6TIdAmi1HJdT3%2F2SMfPsNc8NpTchhUARVW%2BJwBnJ2mXXzdN7Wo0Uj2jM0nNyT1HB5089q0v0rE%2BhNeBY&X-Amz-Signature=43675a2fd4f02335b8c9a559588eaf5b818e3ada53fbb574138807831c7e1d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATOEI2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMGXqrG3BlQ7angTQkhmVvtfaL6fSNl%2BNhi3%2BjF5J5lAIhAIV197CZMPDghXuIsyOUfNxFpUxDwNnSMAB5lwYC4pshKv8DCHYQABoMNjM3NDIzMTgzODA1IgxzJ9eyBUuHVJ2nx%2B0q3AOeAF%2FMo8fzxLLKmPuCN0nbOS%2FcL5o%2FOBk%2BdhTX9nsy5Xd4oViktKDZXBZy510blcSu7o%2BxZJ9pKQ3VWMtsSRG5aoZy6jVvHr%2FxyBNzV%2FLfTjMBka4ntUks1VJJamY%2Fj%2BGtTnGQW7uMUODtxg2QHMJtLym9uI%2BbRPxOIZWH%2FIyJirELhQAYfyUBOA5GfGYnVkhyqBtxSY4YHwwKd8DTcCHWxKqgdZZWaoNp7BEwf470A%2Fe%2BLQEJrIXwFIzi9uckjy0QvkSPqbzhUyz2DMQsD4r6pJIlZv%2F209JhqDLfX9ACy8C5wF1D6HRai1bEEVF79nNRRTc3k9InH47gretIeT2oaoY5M2j9DavFDwHLtjL2E6m8grouMgC9%2Fzzq%2F5%2BI5ve5s13RwMdx0aaY4aA7bA6Lk%2FO%2F7UpivN%2Bkg1TKmO04rJTTns8fzKDNKHZGXLwaDM67UR6%2BJq%2FBD%2FKsby%2BZaBEwn12YnrMG%2FLbxLyX8hBzmaMwy908Gb1bcuzBpAy16x9L%2F4YsXvAI6Z2jGVjC3rsZ9iaNSYzwYpKIkAjUr92UZr3KLhI1EOm1q5wnORNaZTnw0g77pxvSc5CfIpW38Er7hfJucVx8lJ3Cmd4HMH3SkGgwSPRFZiPdQf8ueNTDc6YjKBjqkAUiqp0NrI0OkgQ3Zm37vPAH9%2BQl3Xm9oljSi9e6oqrkagreW0kJZny4T%2BdLxh5gyyHHTQwWK%2BqV6xp1CUlgdhG%2FqCtbarvt%2BB3Z0m8gRWEarHU1%2BZNixoRBV1u5zi9gCIeyCvbBSO29X6TIdAmi1HJdT3%2F2SMfPsNc8NpTchhUARVW%2BJwBnJ2mXXzdN7Wo0Uj2jM0nNyT1HB5089q0v0rE%2BhNeBY&X-Amz-Signature=fa5bd2f9ed4961a204ecffc3636e402f086c77e81ca4f198645e74222dbc7f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

