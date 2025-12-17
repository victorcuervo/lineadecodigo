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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TEHQI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciPsQlkEBI3bmfj3PaU%2B8wrGdTCLZM3%2BvOMW2XDzs1QIgDHMa0qrFsLMySQL8yccQFJ%2B5RT%2FdQc4weCBXJBwmLVsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ0L6jEKwiZY3rysACrcA9J09LHg23mJU%2FDXFE25IZJ9q5RyARp5cLXCxeDUQzg6k%2B00u0eon%2FF6L64y7%2BR7j8XgCunvb5T8Rx2O7anh0zbqFOQoKLVY5Gg%2Bkk6Vu%2FtAzMmAkKIIQe44ocnq4tgKNJ4MAsKlueOTyCTJi%2BCcYdBJY8RjS7A8ij9vTBdrIAgn%2BZ9%2Fo7x2xCIbWKGxLn6nhd6Keaf9nIAz3qSAQwDdvQ72YnObj3hotEcGEksBbc%2B58tptfvaVj3M8X1NBxOT8r%2FiHXnxhWGGqy62HS5vH3YI3fc2Sd5YcbLySkPxRKyQmUDiUEZ%2FtHe233EeLP96gEPzsmeaWu%2BM6WM7JEdkky702YwQPuDTmjx4%2FF%2BTEWTZWCTyTizpjQMUzUu%2BIWrTfLHtvxrJw8FSLCSpkZE7Z6dlzVE48uwBFcZceQRcpvoPI%2Bpw1n2F2bpoI5xWMx6Y2bGdlq4D3eun4PIrfgwzQVyIMLQHgvqc4d32y5Lxcqk0MFIOzSboJTUWXIxSph6d3ITO7EO3V2euL1DF%2Fd3H9zvXP2%2FVldLrgT38%2BgvYRnCZnZNrLKoRO2C%2B9LDjY0ROIBGWCze2ikVAT%2BH2N6wT%2Bf0yBUgdqBK8NtojuwO%2FEdnzqh897gkldENHP%2FaKnMIiWiMoGOqUBHFuxG1BjURCQu%2FAi8QxPZJ%2BV2OnIWuSRMAR8RtaEEg1ErKU8DNFuvIkLxjUCpr3fXr0wg%2BpvbtmOUzzRz%2BnZ%2Bk%2BZ9uv7X5NILGT74QxC8RMLrlye22dzlsD2mWGLhPr67IXB4JMczSr7YMAoHC41HJ5phqQE5%2Fi4dxNn7kIxDn5LlOzwHfmIMViHNLf9MahRRfm1Qx%2FIQfAZaKRLuNnkOTpGC1BI&X-Amz-Signature=79ae17d3ac4a7f78ca3b1db54f9be3251a7928e12f492e985d4b648e0b170cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TEHQI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciPsQlkEBI3bmfj3PaU%2B8wrGdTCLZM3%2BvOMW2XDzs1QIgDHMa0qrFsLMySQL8yccQFJ%2B5RT%2FdQc4weCBXJBwmLVsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ0L6jEKwiZY3rysACrcA9J09LHg23mJU%2FDXFE25IZJ9q5RyARp5cLXCxeDUQzg6k%2B00u0eon%2FF6L64y7%2BR7j8XgCunvb5T8Rx2O7anh0zbqFOQoKLVY5Gg%2Bkk6Vu%2FtAzMmAkKIIQe44ocnq4tgKNJ4MAsKlueOTyCTJi%2BCcYdBJY8RjS7A8ij9vTBdrIAgn%2BZ9%2Fo7x2xCIbWKGxLn6nhd6Keaf9nIAz3qSAQwDdvQ72YnObj3hotEcGEksBbc%2B58tptfvaVj3M8X1NBxOT8r%2FiHXnxhWGGqy62HS5vH3YI3fc2Sd5YcbLySkPxRKyQmUDiUEZ%2FtHe233EeLP96gEPzsmeaWu%2BM6WM7JEdkky702YwQPuDTmjx4%2FF%2BTEWTZWCTyTizpjQMUzUu%2BIWrTfLHtvxrJw8FSLCSpkZE7Z6dlzVE48uwBFcZceQRcpvoPI%2Bpw1n2F2bpoI5xWMx6Y2bGdlq4D3eun4PIrfgwzQVyIMLQHgvqc4d32y5Lxcqk0MFIOzSboJTUWXIxSph6d3ITO7EO3V2euL1DF%2Fd3H9zvXP2%2FVldLrgT38%2BgvYRnCZnZNrLKoRO2C%2B9LDjY0ROIBGWCze2ikVAT%2BH2N6wT%2Bf0yBUgdqBK8NtojuwO%2FEdnzqh897gkldENHP%2FaKnMIiWiMoGOqUBHFuxG1BjURCQu%2FAi8QxPZJ%2BV2OnIWuSRMAR8RtaEEg1ErKU8DNFuvIkLxjUCpr3fXr0wg%2BpvbtmOUzzRz%2BnZ%2Bk%2BZ9uv7X5NILGT74QxC8RMLrlye22dzlsD2mWGLhPr67IXB4JMczSr7YMAoHC41HJ5phqQE5%2Fi4dxNn7kIxDn5LlOzwHfmIMViHNLf9MahRRfm1Qx%2FIQfAZaKRLuNnkOTpGC1BI&X-Amz-Signature=7a4f500409302ee462498b4aedf246d8e6581a8e43c5292f2f04355006eda0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

