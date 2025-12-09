---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDKXRYJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc5LfEe2RR%2Box9qKjoUo5qbzA5bmJlc0dnaXgzOn9k0QIhAPWY5Hdzs4SSHfxvG922CW6T33ie%2B0JGidP3iXK3v5oLKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvmoB50ySsiHFrhoq3ANJiEitSyO6F7L%2FRH2BROUpPukpWA%2F7iXBrGXHimTevrZD4ySATWiIMUGcyJpIbHoHTuMlAbEtt53aoJJ2fcn4y1O4iVcVa%2F9ed4B6PRNndIoB8gJT7tg4ZM81gvsJT%2FQ0mBmtvtLJHGxm4qNibeTPHR%2B1Jd5cn0oht6O9NG%2FUQR4DqJSIibC6s9wymVET636MRgQCmJVcJafzDwwvV0t%2FSxz%2B5x%2FGq5sz%2FnwSykVAHNlnygGR4VcT%2BSk%2FmF%2Bt017OTBZ9ysKUbcrWWohEGw3nQV%2FPeJyzN1mW%2FTnYiKLLKi7LihVt2yd85kPBtJ4SKtlJcIZISGLh6bZZr5tNDNGYy06Fx%2FtdmxHfGq%2B0JU2PLfhLyXTRmngdMrxWAReG5DfLIerJnWFvTXFIyeb%2FqYZPAGOLxJs%2Fi%2Fn02LsGBpSGGw4S5iiG30q3Qp0MSg5IrK9KTETT89SKxlRF3E1jCWIBiT06JGQcnIxCCgpxSbE0n7fyyGpwEXkljfYgaAXUShjxRJDsqqPInEcq4GUQ%2Btf4cHUOoSwEWB3vIFxFUqS2n2FAl5m%2B3lCRTJorGGnQzco3pOdzrJ3EK8Iag5EwCBgTieXg6CDVKRuOx4gAlqJSO8mAgQ%2B1wBNZf%2Bp%2F3GzDVyt7JBjqkAZkWJR2J3j%2BhqsbxJLifH70hSIuSGJnmAy%2BUaeO2RkaTSCw9nWe0C4mRZO7qQncjC%2FtLVgBrLR84IfUcWf8woT7XdjPRMSkdqQURCWaaAfctuY9vM2GACNk81f0KXLTewNqFo2yh4CDr5Z0GpjccqrZRW9h%2BE4aoJGhQEh%2FAn6nqrRBT5fWguT6WDrL%2FcOg23skLxR0kMvDROLqMdMFR6rgq3dYH&X-Amz-Signature=f9f60ed8fc036339880ada5b4ca49dddff6ed039355d7d23ad3803035e21b472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDKXRYJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc5LfEe2RR%2Box9qKjoUo5qbzA5bmJlc0dnaXgzOn9k0QIhAPWY5Hdzs4SSHfxvG922CW6T33ie%2B0JGidP3iXK3v5oLKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvmoB50ySsiHFrhoq3ANJiEitSyO6F7L%2FRH2BROUpPukpWA%2F7iXBrGXHimTevrZD4ySATWiIMUGcyJpIbHoHTuMlAbEtt53aoJJ2fcn4y1O4iVcVa%2F9ed4B6PRNndIoB8gJT7tg4ZM81gvsJT%2FQ0mBmtvtLJHGxm4qNibeTPHR%2B1Jd5cn0oht6O9NG%2FUQR4DqJSIibC6s9wymVET636MRgQCmJVcJafzDwwvV0t%2FSxz%2B5x%2FGq5sz%2FnwSykVAHNlnygGR4VcT%2BSk%2FmF%2Bt017OTBZ9ysKUbcrWWohEGw3nQV%2FPeJyzN1mW%2FTnYiKLLKi7LihVt2yd85kPBtJ4SKtlJcIZISGLh6bZZr5tNDNGYy06Fx%2FtdmxHfGq%2B0JU2PLfhLyXTRmngdMrxWAReG5DfLIerJnWFvTXFIyeb%2FqYZPAGOLxJs%2Fi%2Fn02LsGBpSGGw4S5iiG30q3Qp0MSg5IrK9KTETT89SKxlRF3E1jCWIBiT06JGQcnIxCCgpxSbE0n7fyyGpwEXkljfYgaAXUShjxRJDsqqPInEcq4GUQ%2Btf4cHUOoSwEWB3vIFxFUqS2n2FAl5m%2B3lCRTJorGGnQzco3pOdzrJ3EK8Iag5EwCBgTieXg6CDVKRuOx4gAlqJSO8mAgQ%2B1wBNZf%2Bp%2F3GzDVyt7JBjqkAZkWJR2J3j%2BhqsbxJLifH70hSIuSGJnmAy%2BUaeO2RkaTSCw9nWe0C4mRZO7qQncjC%2FtLVgBrLR84IfUcWf8woT7XdjPRMSkdqQURCWaaAfctuY9vM2GACNk81f0KXLTewNqFo2yh4CDr5Z0GpjccqrZRW9h%2BE4aoJGhQEh%2FAn6nqrRBT5fWguT6WDrL%2FcOg23skLxR0kMvDROLqMdMFR6rgq3dYH&X-Amz-Signature=6aaf29f8d5c270c6ab2d7434bf6c45253afd20dc08aebd8fea4161b065f41ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

