---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2C6OTY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICUBkfF5TbhI7D7YMLGYX9QU%2BPSvl%2BEl6gahWq7I5erIAiEAxXi6L6KhBXR5YlbU%2Brump1FAaRJ0PlulB69QOeduVBMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDP6s9%2FO24UxHbxCMSCrcAzMcOOkPdq7DJDoGcV8SrBS5onlOuv0bTYRKn5g%2FerRk%2FZl9PgQVO14RMt1X7DaUKZNmeWhnnDVkYbmdBtti6%2FcVRy5c5Kd0TP3JkZRGhYndzeOTrOMlv%2FZ0xxEirWEOAcOq7IutGJ%2FDqAaCMJuZS4KcG2hbDTME%2BkMABuQnKXL%2BVNoTNzHfL85ynaVJmX3LU3PWJHiM3IABOIWUT0Y8CkICD600gNO70U9Z5bNCGTgZNDe9FNEpIOGdo%2B4OsOrPfEX4jd6jVdY%2FwIQKFXG%2BQloWhf%2Fyhc4sO1KdmKc7iBhJQv0XJ6y%2B%2BP5RpvLb8RXRm%2FBHjIuwIanD8ho8QHsqus0kjELqqA4fayUT0HweRgZ%2Fu10WA6Fli8Mf1MTaNNmLYJAzFKEPJUU0VaOJWfZs4eYqCd0NYN8ala82iUgtxqIFt3k7eFl8XdBMMYoTEEXcLYnvS0IdANdjCFe1QrGXHZNASON9GrYDIweC%2B2OX2kbt0GjrqinKc4jGRIf9eIeRLfB4l8XQRZrVAK2Z52qzTt3xOBf1lQ4eAwlzj1VtMFmbinw3qDdxSSWomNmEraKi9MZn%2BkZQv3zjQUcACO2nfzo8pWytp0URVI7QmBsDe8QyURtHFXgRT0sbXg2zMLLrwMkGOqUBtqBhjmwod7lLR5vNF0ey%2Bn0QJDO6yCE7AzHQm6uXd4G8gLF1ZClXv9AUQn3YY88K6xBWgjXH5pMemx8MnBV2ZUf2wuQ2U8IZrCx68cR2qs9L6a%2FDvkU6P8ro1IRGPAqlKlVKIwz55kQ2lfBV2etax%2F5DjzAzJKhnZNMmriyNCBOiXHrCIH1vKpCAm%2FaRovgtwIsfdChnaQVT9kiwhRT1KKTjzdMT&X-Amz-Signature=86878a966430685b3058983dd10d1e311ece1d0cb24b598c592b3c4407ffb393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2C6OTY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICUBkfF5TbhI7D7YMLGYX9QU%2BPSvl%2BEl6gahWq7I5erIAiEAxXi6L6KhBXR5YlbU%2Brump1FAaRJ0PlulB69QOeduVBMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDP6s9%2FO24UxHbxCMSCrcAzMcOOkPdq7DJDoGcV8SrBS5onlOuv0bTYRKn5g%2FerRk%2FZl9PgQVO14RMt1X7DaUKZNmeWhnnDVkYbmdBtti6%2FcVRy5c5Kd0TP3JkZRGhYndzeOTrOMlv%2FZ0xxEirWEOAcOq7IutGJ%2FDqAaCMJuZS4KcG2hbDTME%2BkMABuQnKXL%2BVNoTNzHfL85ynaVJmX3LU3PWJHiM3IABOIWUT0Y8CkICD600gNO70U9Z5bNCGTgZNDe9FNEpIOGdo%2B4OsOrPfEX4jd6jVdY%2FwIQKFXG%2BQloWhf%2Fyhc4sO1KdmKc7iBhJQv0XJ6y%2B%2BP5RpvLb8RXRm%2FBHjIuwIanD8ho8QHsqus0kjELqqA4fayUT0HweRgZ%2Fu10WA6Fli8Mf1MTaNNmLYJAzFKEPJUU0VaOJWfZs4eYqCd0NYN8ala82iUgtxqIFt3k7eFl8XdBMMYoTEEXcLYnvS0IdANdjCFe1QrGXHZNASON9GrYDIweC%2B2OX2kbt0GjrqinKc4jGRIf9eIeRLfB4l8XQRZrVAK2Z52qzTt3xOBf1lQ4eAwlzj1VtMFmbinw3qDdxSSWomNmEraKi9MZn%2BkZQv3zjQUcACO2nfzo8pWytp0URVI7QmBsDe8QyURtHFXgRT0sbXg2zMLLrwMkGOqUBtqBhjmwod7lLR5vNF0ey%2Bn0QJDO6yCE7AzHQm6uXd4G8gLF1ZClXv9AUQn3YY88K6xBWgjXH5pMemx8MnBV2ZUf2wuQ2U8IZrCx68cR2qs9L6a%2FDvkU6P8ro1IRGPAqlKlVKIwz55kQ2lfBV2etax%2F5DjzAzJKhnZNMmriyNCBOiXHrCIH1vKpCAm%2FaRovgtwIsfdChnaQVT9kiwhRT1KKTjzdMT&X-Amz-Signature=15396e132943c4994bdeddc75ff2f0399c3668404c1a400f58b846fcc21cd37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

