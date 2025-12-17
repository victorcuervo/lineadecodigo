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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SG2QX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrNGU3amIIT9eIY4iIcY3Crh6A%2BfRyTu3MtnJNPwC5hwIhAJCRk1NVudkIG9RcUxjfgCAwt%2FCtqPgYagGGmhjULNQ7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHC3Ax%2Frt3Fz%2BO%2BREq3AMWy30lXyNi6he9YdaTMd4V0356gLcYJgF2EZZmFnO8cLV2G%2BlZ32TIv0tcZg8q4Cj567n6cvEAXC%2BcBDvwNbPPAjUPQhaPSTDSQQlwRjIvsOy3%2Fut4MVT9iZoejSBbib7cvHzgucTUwl4%2B28Y68JtlTM%2FOSNp3mE1t6J%2BuXlPcuBFn6RGdqMKj2IKfow%2F9ChHBlueXr%2F7kKgbTn3m%2FRIUulyrRQLSCzbW%2BDQbf4Qw8L8NJpTB0CmFn9DftZfXBU0JGppmLxhZrIKwCOI%2B7ew522vwW0%2F7TYrwfNTb9u3Bc2IoH2KfkS1zEaxflYPec%2Fr%2BNTeYDa2g4G9PypXuYH1HQ2Hh86W6pVzjWYbCLqP%2F8hG3YwSXB%2ByogqhTjdLn6yCE51bisp5Lo3gqaV4YZ2BPXIeiLSMRiLHKeWsmO08QWicS8RFMohd4rjP%2BumvV3QQrtqpnrVHg74VmZt3TZGYI3ezEPeSvP5uDkO%2BQzKmOlScCvWGmCRM96mV8xro4fNw%2FmpyAxPINE41fq8OTBRA6xDgttk99zy8SyceJPwBfTvffKYQjj%2F1xOIvu1vMCk6GLVDMLAkAMAZFs2RZ%2Bd5e%2Bt1QN6q24402%2F5jiUJdbCahKMx3G5Fnlw2fG7WQDCHlojKBjqkAebpIJUtBbj0KePrLjJOq8whfl8GNNPBT4ebOSrB6fDENNwp6J64KdPYhrIBBVGxSzrQNClCXXo1m8sz81lMHpTyKeItKI0A13w%2BdVqdOpvtAIWA8QqKzAzJOc79RXy5%2Fs%2FRDcmy1%2BSeVRecEthQoGNz0W28yceQ8dnSl1OPiVGzn1D%2FQ6T2TtagWHyc6xNJDNBgSejlcGNZEjPWHhvVYlqMGrcz&X-Amz-Signature=1ee0d3950bc04027eed82a6d770771f572ac2218102af073d5298dfbf31d7b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SG2QX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrNGU3amIIT9eIY4iIcY3Crh6A%2BfRyTu3MtnJNPwC5hwIhAJCRk1NVudkIG9RcUxjfgCAwt%2FCtqPgYagGGmhjULNQ7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHC3Ax%2Frt3Fz%2BO%2BREq3AMWy30lXyNi6he9YdaTMd4V0356gLcYJgF2EZZmFnO8cLV2G%2BlZ32TIv0tcZg8q4Cj567n6cvEAXC%2BcBDvwNbPPAjUPQhaPSTDSQQlwRjIvsOy3%2Fut4MVT9iZoejSBbib7cvHzgucTUwl4%2B28Y68JtlTM%2FOSNp3mE1t6J%2BuXlPcuBFn6RGdqMKj2IKfow%2F9ChHBlueXr%2F7kKgbTn3m%2FRIUulyrRQLSCzbW%2BDQbf4Qw8L8NJpTB0CmFn9DftZfXBU0JGppmLxhZrIKwCOI%2B7ew522vwW0%2F7TYrwfNTb9u3Bc2IoH2KfkS1zEaxflYPec%2Fr%2BNTeYDa2g4G9PypXuYH1HQ2Hh86W6pVzjWYbCLqP%2F8hG3YwSXB%2ByogqhTjdLn6yCE51bisp5Lo3gqaV4YZ2BPXIeiLSMRiLHKeWsmO08QWicS8RFMohd4rjP%2BumvV3QQrtqpnrVHg74VmZt3TZGYI3ezEPeSvP5uDkO%2BQzKmOlScCvWGmCRM96mV8xro4fNw%2FmpyAxPINE41fq8OTBRA6xDgttk99zy8SyceJPwBfTvffKYQjj%2F1xOIvu1vMCk6GLVDMLAkAMAZFs2RZ%2Bd5e%2Bt1QN6q24402%2F5jiUJdbCahKMx3G5Fnlw2fG7WQDCHlojKBjqkAebpIJUtBbj0KePrLjJOq8whfl8GNNPBT4ebOSrB6fDENNwp6J64KdPYhrIBBVGxSzrQNClCXXo1m8sz81lMHpTyKeItKI0A13w%2BdVqdOpvtAIWA8QqKzAzJOc79RXy5%2Fs%2FRDcmy1%2BSeVRecEthQoGNz0W28yceQ8dnSl1OPiVGzn1D%2FQ6T2TtagWHyc6xNJDNBgSejlcGNZEjPWHhvVYlqMGrcz&X-Amz-Signature=9d8d2615ee88c08b0a7b6cbd35ff936623a7a30beff39f266945f57f2c27b7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

