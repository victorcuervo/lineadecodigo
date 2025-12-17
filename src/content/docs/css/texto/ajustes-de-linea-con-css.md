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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJWO37Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwb3QvBc%2BGujQE3bt8MKAqGLP84dZO7bL2obpFlhSMCAiBP68Mrx0BDq5NM5K5D2kkdiQRhlg7hj5Nu%2BvJPubQDAir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMcWk8KYEfxCEL9btXKtwDMHRYPBCTaY3MRgt%2Ff8P02g8UBRZBTazFt1uVB6usidCtSuJcD6Pa6DNQggtn8amChDIZoVFflfngBHUwpO6jfpIcx1dfqgykq6b%2F5CacC%2BAdXqqauXRF7n%2BlDxwoLenh8YIxolX%2B5px1Quza%2FF%2FvsbvukYvG6r00iaNCuMmBeP%2F2pPrtcqtEf86epQd%2B%2FhtUP7L%2BykmCg8HRQoGCWlRUIrE8kfxtavAgtMVffuQ3W59Bl4hPPRE9j1hfwSH7%2FXlCsPAzo6BwLaOCKkdfdcbVSAaThaMACIWwJPkm0Pk7FFO%2FqPJVP%2FDP1olGfuH%2F0LHqEAMuU6UtOIpLUKKbA5TGsAgtudsw2qzVS0%2Feihos0OinMQAGFX0cUL6KXsU8hQNCE3SQof1ZhGU%2FNQv45pwpJOQcv3Q%2BpIJa8v7NsbCHEQnLfeUURTepzHx2Ug29WcgGU9jSUKJU%2F5yO38RzfUc2R8g3obGoI72vAGHFEy35607MsUSBpQgM6ldFCYgiGQ8p0d2F%2Byd%2FePHvD4iDaxy8Nv1Vho2qo%2BqD6HbFCciYFTJ%2Ff9uRuHT08E%2F0RZtzOZyntfxDvupr2MZVAmx6IH0zfzMf3znBLmwPG3eijopUsghxZVC0Qw1mK84EytUw1rKIygY6pgH5S%2BW%2Bs40sryjnaW3ghFT%2BGYUjc%2FJpSknWn0Xs%2BWTVDN%2FpS9R8HlwJIiFUQ7NWAcFOf6fvZN708vtgW01ECQ6pPz4CKzfc4LchWum71l2FRXMF%2FvP2sf3kIffsf0AMovOuvfN9r5FT3HMxH4fhsq1oorTma4MILFH505FQuyg3bFAL7jjX6Q6Yp%2F%2Ft4cnwiJzdZCyJnVxOCvRjbx8R7olObAuGly94&X-Amz-Signature=5d902bb3157f3c89d52a2d41823c91e800ff6ac6b90b8e43840cc13485cbeadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJWO37Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwb3QvBc%2BGujQE3bt8MKAqGLP84dZO7bL2obpFlhSMCAiBP68Mrx0BDq5NM5K5D2kkdiQRhlg7hj5Nu%2BvJPubQDAir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMcWk8KYEfxCEL9btXKtwDMHRYPBCTaY3MRgt%2Ff8P02g8UBRZBTazFt1uVB6usidCtSuJcD6Pa6DNQggtn8amChDIZoVFflfngBHUwpO6jfpIcx1dfqgykq6b%2F5CacC%2BAdXqqauXRF7n%2BlDxwoLenh8YIxolX%2B5px1Quza%2FF%2FvsbvukYvG6r00iaNCuMmBeP%2F2pPrtcqtEf86epQd%2B%2FhtUP7L%2BykmCg8HRQoGCWlRUIrE8kfxtavAgtMVffuQ3W59Bl4hPPRE9j1hfwSH7%2FXlCsPAzo6BwLaOCKkdfdcbVSAaThaMACIWwJPkm0Pk7FFO%2FqPJVP%2FDP1olGfuH%2F0LHqEAMuU6UtOIpLUKKbA5TGsAgtudsw2qzVS0%2Feihos0OinMQAGFX0cUL6KXsU8hQNCE3SQof1ZhGU%2FNQv45pwpJOQcv3Q%2BpIJa8v7NsbCHEQnLfeUURTepzHx2Ug29WcgGU9jSUKJU%2F5yO38RzfUc2R8g3obGoI72vAGHFEy35607MsUSBpQgM6ldFCYgiGQ8p0d2F%2Byd%2FePHvD4iDaxy8Nv1Vho2qo%2BqD6HbFCciYFTJ%2Ff9uRuHT08E%2F0RZtzOZyntfxDvupr2MZVAmx6IH0zfzMf3znBLmwPG3eijopUsghxZVC0Qw1mK84EytUw1rKIygY6pgH5S%2BW%2Bs40sryjnaW3ghFT%2BGYUjc%2FJpSknWn0Xs%2BWTVDN%2FpS9R8HlwJIiFUQ7NWAcFOf6fvZN708vtgW01ECQ6pPz4CKzfc4LchWum71l2FRXMF%2FvP2sf3kIffsf0AMovOuvfN9r5FT3HMxH4fhsq1oorTma4MILFH505FQuyg3bFAL7jjX6Q6Yp%2F%2Ft4cnwiJzdZCyJnVxOCvRjbx8R7olObAuGly94&X-Amz-Signature=8ac55a1b2c29667b6461b364ee156d1987e161dadbac48149cb6957aa9878b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

