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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TP25SV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET6IrGEV%2FgKqJLwSpWP6q31B4H%2B4AETskFfeCKtUZnTAiA4rl%2FA73kJWprk057A7niezkctuoHKj2oj%2FVLnKGdoVSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKzueZJ4DCMbR0lJ3KtwDaQOSejl78CxfY%2FZ3eYxaBnC%2Fl%2FQdWXXzS4e%2FpcBUDAMG7S37b3rP1hbtX%2FVTubTR5tmM2SHUbSJMXrasB%2BG3AuUGubeg9UCofpOTacBF86uNNXClzPRMWvk4EwNqHTpjaYV0utBGz4x2e4iaemw0hD%2F94wAvVtaXH1uiBl8ezDv3Td0Vm2OsIEdopI6qQFycwF08v%2BXctwrnvPrqm9pUChuaWsNcRG%2F0lmfDuFvyVFZOpabx2Lul5NTLUE0JdlPuqf1SbEKBWVB50aIYCUTu6Joo%2FRCR4m1bLpyi0Rb4ZzvjuYEhEGTmSKwkeJXWL0kN5T6Cca%2B0azH38N8g8OghidJsdN8cxb5UFOfSbIxlXGC1IMvmiAHW4WucDRx%2BXgr9zJQ%2FhSCqJuV5wqWQxQ4IXJ6e0RfxpOG%2F2FLK3CgK8iSB66sNPtvrSyucb2uPvZOhNyGRF7exyyrNJzEPy70b8DfyekYzDik9HjjRTxLFOqUBOGUqDCaFDTeeSldIEtoh5ZQvYs34Cg0cC6MzFB7e%2B3cKXzEfvYOysqbHyLA%2FRAo%2BC1zA1KXCV8zUXb%2BBPxKmNR7Fa5JfCCmJc4WFnqIQh1PzKigWcwQ%2FC7nXz3gAEyRLgzf8kbAFpEz%2BUk0w1oKJygY6pgHicOl%2FbZW4hWNmXf1Kse5syuQLmxy72cXQvWgYXn1yU7dReOA3mzsyiNu5NsaTKA2ztkG30YMGKAm3yUHF3uDKvHzVR0x7H%2FwU%2BoFw1x5paErpVVtslVWb4lhCMVyHF4BDLACX4sM3yOTJjgpIQwi72L5Htu55l2JX4MZmcNvnY1Wfw%2Fov%2F1Qv8C2WEj58nnZm1Rz8DEbieSax8QkFBxACscy%2BOYCt&X-Amz-Signature=e5056ad462d4bc0bad61b69fa4afe2e1753f3358a056f4ed0e553ec2a4128037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TP25SV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET6IrGEV%2FgKqJLwSpWP6q31B4H%2B4AETskFfeCKtUZnTAiA4rl%2FA73kJWprk057A7niezkctuoHKj2oj%2FVLnKGdoVSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKzueZJ4DCMbR0lJ3KtwDaQOSejl78CxfY%2FZ3eYxaBnC%2Fl%2FQdWXXzS4e%2FpcBUDAMG7S37b3rP1hbtX%2FVTubTR5tmM2SHUbSJMXrasB%2BG3AuUGubeg9UCofpOTacBF86uNNXClzPRMWvk4EwNqHTpjaYV0utBGz4x2e4iaemw0hD%2F94wAvVtaXH1uiBl8ezDv3Td0Vm2OsIEdopI6qQFycwF08v%2BXctwrnvPrqm9pUChuaWsNcRG%2F0lmfDuFvyVFZOpabx2Lul5NTLUE0JdlPuqf1SbEKBWVB50aIYCUTu6Joo%2FRCR4m1bLpyi0Rb4ZzvjuYEhEGTmSKwkeJXWL0kN5T6Cca%2B0azH38N8g8OghidJsdN8cxb5UFOfSbIxlXGC1IMvmiAHW4WucDRx%2BXgr9zJQ%2FhSCqJuV5wqWQxQ4IXJ6e0RfxpOG%2F2FLK3CgK8iSB66sNPtvrSyucb2uPvZOhNyGRF7exyyrNJzEPy70b8DfyekYzDik9HjjRTxLFOqUBOGUqDCaFDTeeSldIEtoh5ZQvYs34Cg0cC6MzFB7e%2B3cKXzEfvYOysqbHyLA%2FRAo%2BC1zA1KXCV8zUXb%2BBPxKmNR7Fa5JfCCmJc4WFnqIQh1PzKigWcwQ%2FC7nXz3gAEyRLgzf8kbAFpEz%2BUk0w1oKJygY6pgHicOl%2FbZW4hWNmXf1Kse5syuQLmxy72cXQvWgYXn1yU7dReOA3mzsyiNu5NsaTKA2ztkG30YMGKAm3yUHF3uDKvHzVR0x7H%2FwU%2BoFw1x5paErpVVtslVWb4lhCMVyHF4BDLACX4sM3yOTJjgpIQwi72L5Htu55l2JX4MZmcNvnY1Wfw%2Fov%2F1Qv8C2WEj58nnZm1Rz8DEbieSax8QkFBxACscy%2BOYCt&X-Amz-Signature=b99da5c97f15c6d60da6a9211c113dcbd28bc1944c3e14190004b05b31616fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

