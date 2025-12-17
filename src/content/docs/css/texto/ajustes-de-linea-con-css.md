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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOT72RT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyawIlWOi4DspFJ453e2X84cAEGPOqQHxJu4%2BMl7HJYAiA%2BtrpqRaiycz8fIGAcPH3NIXJbXzcvolhbjvB%2FXe2MVir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMROiUENnJRX%2BzSDJtKtwDKr4DD%2BjP%2BuExaeAmLh%2F251IOxWIL2xQgL8prHuATAGYtIRW2mrC3kHkT6JOPFbtiHtvthxbYScJcXBqhskGmqQv2O9D7hoYapPYISo%2F1UN14epb4SDd%2FSlzl2e5GUXFlaAUtTEThXG0qzKk3GT%2BcRVf3lQpDWckzEAaQjd3eVn0v0JzgMguVgkahc7B063VJUxSOp1jPTPtqE7eikWCP9U8JsoNAiN%2F9G%2FBGqPQDWRAk0uiyl0ePMi9zh3aGLIitBQ7ljeegyEPFTx4Qe7wYTV81mAEHK812Z3pLaRVV3MjTleWs37NKMN8xgMDMaBDA7D568%2FYbrMHmBaULDbSPVtPCNwKtmuL%2ByVkoycEk4w92P2J1DxM7MQYx2PV8WxEH2JiXLPgkLeVHJRmtJW1AZbAQ1BsaTzt57cbJE3GkPxYJ8JkteEd41VGWJTEbzb3i94TCJ9Xvdc2SCOOTVzYvjhEPEf8raIeeCGjgkycb1eiPKlSGlRaBBK1if3OyEApuOyvbouJ%2BBKYN5HJ2U%2BvusAzAYthhZjnZMm8ZMV5KyZGg0lpSo2XpV8%2BpeyFMjkUAXZbZXsbyu9YwiS6QbTGxAys%2BILYimgAQaeGt4AlliQ6if7tWAGUYu%2FF9xrAww46KygY6pgFJbFLyF7BP9nPiJjtXr2BL6TqkKhQRzi2lM7LgndUQ7g7PPYzUzbHnO35xFMfe2Eb8CYjsV%2FuSG5qBCU8aS%2Bl0H7bJGCJqgnlEEDZCYNxpLWm42VqUfxxShKF1rjtM4fgEwhiAPfCMGE1d5U5yE6QLLZeixmABW0GbioY8qmNV1CAobueqqDaIiPyxMCFThnBwpzbWj8UebKXlmvfFrQ3znXAPmw35&X-Amz-Signature=7ad1f7b55b8310f579243a8d7f1c9d6fd1cc726c342d7492931f1e8ed49ba0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOT72RT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyawIlWOi4DspFJ453e2X84cAEGPOqQHxJu4%2BMl7HJYAiA%2BtrpqRaiycz8fIGAcPH3NIXJbXzcvolhbjvB%2FXe2MVir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMROiUENnJRX%2BzSDJtKtwDKr4DD%2BjP%2BuExaeAmLh%2F251IOxWIL2xQgL8prHuATAGYtIRW2mrC3kHkT6JOPFbtiHtvthxbYScJcXBqhskGmqQv2O9D7hoYapPYISo%2F1UN14epb4SDd%2FSlzl2e5GUXFlaAUtTEThXG0qzKk3GT%2BcRVf3lQpDWckzEAaQjd3eVn0v0JzgMguVgkahc7B063VJUxSOp1jPTPtqE7eikWCP9U8JsoNAiN%2F9G%2FBGqPQDWRAk0uiyl0ePMi9zh3aGLIitBQ7ljeegyEPFTx4Qe7wYTV81mAEHK812Z3pLaRVV3MjTleWs37NKMN8xgMDMaBDA7D568%2FYbrMHmBaULDbSPVtPCNwKtmuL%2ByVkoycEk4w92P2J1DxM7MQYx2PV8WxEH2JiXLPgkLeVHJRmtJW1AZbAQ1BsaTzt57cbJE3GkPxYJ8JkteEd41VGWJTEbzb3i94TCJ9Xvdc2SCOOTVzYvjhEPEf8raIeeCGjgkycb1eiPKlSGlRaBBK1if3OyEApuOyvbouJ%2BBKYN5HJ2U%2BvusAzAYthhZjnZMm8ZMV5KyZGg0lpSo2XpV8%2BpeyFMjkUAXZbZXsbyu9YwiS6QbTGxAys%2BILYimgAQaeGt4AlliQ6if7tWAGUYu%2FF9xrAww46KygY6pgFJbFLyF7BP9nPiJjtXr2BL6TqkKhQRzi2lM7LgndUQ7g7PPYzUzbHnO35xFMfe2Eb8CYjsV%2FuSG5qBCU8aS%2Bl0H7bJGCJqgnlEEDZCYNxpLWm42VqUfxxShKF1rjtM4fgEwhiAPfCMGE1d5U5yE6QLLZeixmABW0GbioY8qmNV1CAobueqqDaIiPyxMCFThnBwpzbWj8UebKXlmvfFrQ3znXAPmw35&X-Amz-Signature=7658eabd2a808705f64d1cfc6ef6b8555ce7b3e3d1b7a913d9c2de656ca74d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

