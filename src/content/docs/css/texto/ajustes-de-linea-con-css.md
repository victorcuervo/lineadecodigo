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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHILNIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqYmJ0REFVYWri4rMemAQAJHJ1fYgAt96m1FVbnM7R1QIgIbbi52b7CJO2SLjMgFxuB%2B1xN2E5fd7m%2Fg%2Faj5x5qEMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPilQDv9l24sII7IOSrcA7%2FhkT7Z1sZ7al%2Fd5QXQt3KvJKunmE9iGFvwzK3AgOSFe%2B%2BTqVaTL4CapNKKe60xlEGni0XFiVAailO%2Fw7iJKgOnf5ITu2%2BihK3uQOxCsXyvI7LSO7ePv7fnHYpIAW2NCzFXyfDxpw5IWxsR2wxptt9Rz3ZIKzdk8KuNA7Zuhz2qjIucxRr07iYmv4PSvNZ%2BaeQ7TpX89SdiaFgCJuFmfxlUJEdP4E%2BxLSSRCc%2FIZcnBO1CvjwKl%2FhPPF3dKDNwYLM2TLdK4AJm5yiQmNP1hpLJuH%2B3ezQgdpOnaFp6kyZpehN0pPI8cY9Ng695zQaZ7cfLP7WAP%2F6Y7Ap6wnSOODGFYQtLCw1%2F8usl4MPIyACp%2By%2BbDxCh0HXF0roQzMnazEE7h2GesG9N7P1DarzDZUOfjOAkxlHHhZyBbXEr5b421TNwJojY3jM%2FtZtYD6ZtyVH5KWChY7Ut1L6krB2j7JY98I946wRMIymA9PVpMakzzYR3YLD73xsGtaoM0Eq8sqyADYbbgzaDTmm6kteOolcKKCrO2C1ui0384blzTa3azMkWqa6a6fIR6DPshFwH1ov8fgzKwFgdKLxPIu4vto1qA%2BIWIxFTCy1ugEgjSjf0tMHbAckcUHLFkUwlfMOydicoGOqUBdVBo25I4%2BbP99qMA1KsuR89sVL6Xe%2B8GtPweb87ERhhQZDsFU8XKyfGo%2FFj9t1%2Bzl1sM4tt%2FpUhwIYugHnZY1ehyLL9TQ1bJDTRcbPU0nNoNQ55LHPhRts7G88Qkxheg1huahhqzIysy9Gi%2FAh7q31WF0uPIcShvn1Hm2wcv%2B6xCH4i%2FX1p7%2BHLCm37uVvl%2Bt%2Bli3noyWhcCXRlLBNS52Ki5hUqZ&X-Amz-Signature=9844c9532989c8be0b4cba947795351088fe2bcdb98f8847fc484a43896cba57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHILNIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqYmJ0REFVYWri4rMemAQAJHJ1fYgAt96m1FVbnM7R1QIgIbbi52b7CJO2SLjMgFxuB%2B1xN2E5fd7m%2Fg%2Faj5x5qEMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPilQDv9l24sII7IOSrcA7%2FhkT7Z1sZ7al%2Fd5QXQt3KvJKunmE9iGFvwzK3AgOSFe%2B%2BTqVaTL4CapNKKe60xlEGni0XFiVAailO%2Fw7iJKgOnf5ITu2%2BihK3uQOxCsXyvI7LSO7ePv7fnHYpIAW2NCzFXyfDxpw5IWxsR2wxptt9Rz3ZIKzdk8KuNA7Zuhz2qjIucxRr07iYmv4PSvNZ%2BaeQ7TpX89SdiaFgCJuFmfxlUJEdP4E%2BxLSSRCc%2FIZcnBO1CvjwKl%2FhPPF3dKDNwYLM2TLdK4AJm5yiQmNP1hpLJuH%2B3ezQgdpOnaFp6kyZpehN0pPI8cY9Ng695zQaZ7cfLP7WAP%2F6Y7Ap6wnSOODGFYQtLCw1%2F8usl4MPIyACp%2By%2BbDxCh0HXF0roQzMnazEE7h2GesG9N7P1DarzDZUOfjOAkxlHHhZyBbXEr5b421TNwJojY3jM%2FtZtYD6ZtyVH5KWChY7Ut1L6krB2j7JY98I946wRMIymA9PVpMakzzYR3YLD73xsGtaoM0Eq8sqyADYbbgzaDTmm6kteOolcKKCrO2C1ui0384blzTa3azMkWqa6a6fIR6DPshFwH1ov8fgzKwFgdKLxPIu4vto1qA%2BIWIxFTCy1ugEgjSjf0tMHbAckcUHLFkUwlfMOydicoGOqUBdVBo25I4%2BbP99qMA1KsuR89sVL6Xe%2B8GtPweb87ERhhQZDsFU8XKyfGo%2FFj9t1%2Bzl1sM4tt%2FpUhwIYugHnZY1ehyLL9TQ1bJDTRcbPU0nNoNQ55LHPhRts7G88Qkxheg1huahhqzIysy9Gi%2FAh7q31WF0uPIcShvn1Hm2wcv%2B6xCH4i%2FX1p7%2BHLCm37uVvl%2Bt%2Bli3noyWhcCXRlLBNS52Ki5hUqZ&X-Amz-Signature=7e9e343bb6e24ee2171f92e132acff504544078720d31350b2989ff54855a1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

