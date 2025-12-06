---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRLKIZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK5H7hhVO0MjtJcwrYKeeL1bqI2DdhgpO5t%2BA8SeXYZgIgbhktG%2Fse4aclua2%2BXjWe7DnUx7YzvpCRGPuShsYCVHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGjuNugH7x0eRFXB5yrcA5FC2FcJLIH9q7PeZmTR90WPvbMtmCnhTyXLWHv2gWEeJbeiNTMEcvfdubnIAdlvERQxLP4Plg5%2FIOG5IeRsxi6Vqa8q%2BG18x2qvElqqbp0ccDqo0WfQPk7%2BlGSrKsGW%2BA%2BqQTIrS8ESc%2BnHr0gr3kqCQ29u6YQmLWFnJI0pBPdRJpx0Pa5eCvpBec%2BCTYio%2BPRIwVFsd8VVzZmv5HMuOxesrzfiHhsK3PNfKtd9RRl%2F%2F4PTmGLtiVVH0odsbqeVptlUUR6j5OajdPWpF8rJiv9EEWDPtBri7x7Oy%2F0yKqF4WpaFRcZpSok2mSBvEqZnei66zZgd1WgW9CNuEdQMbtS%2BeGQbFufwfIhrVpxUKOfN4d4D7QSnuC0dxLiMTGaLBJ7H5HyqkhZDyFueMhOFGAZD1nBFiO7U%2BjZtkIwJPlJcVw6IQhC6Vna6g3NuAiIAs1Y06XDdX5qTnU8MZLO0s2XwUJrN8idHWcuu5U7L78QyLuUR4Ojj0bj%2BcIbJNFYp3fo6Dee7aKHG1YWGFAV33fS2NOgNa5gvDdyMbw9FjObCqip%2BB%2BvqnNePIQpOqVjclk4fSaY%2FmDBnNUSoHq%2FvNQqxC6D7k6wKjGxImp7lfVtXySTbtRZxFbIS47OOMNv8zskGOqUB8UUFhOT910VurE7zHSpg07MxkbZN%2B17Q87fWHlMC4ans9l3kNcbVKTKU4RbYDbqzN8r7TvHHC0SN7fcPc1Tsv6tN4IIU49QJXzIq90tfD05gy09FjMNbdez480m1qQp6BkAKx%2B0QGf%2B6L2YYLx9N8BjTnAqibblWn89SBzwtrehSveTlApfFKoTJku3MNhI2djb%2FB%2BFOAV4A20YXU2GdvBMA8PbI&X-Amz-Signature=77fa51920f41460efaf056257a1142a68dba841c913474443909d20c1e36e897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRLKIZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK5H7hhVO0MjtJcwrYKeeL1bqI2DdhgpO5t%2BA8SeXYZgIgbhktG%2Fse4aclua2%2BXjWe7DnUx7YzvpCRGPuShsYCVHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGjuNugH7x0eRFXB5yrcA5FC2FcJLIH9q7PeZmTR90WPvbMtmCnhTyXLWHv2gWEeJbeiNTMEcvfdubnIAdlvERQxLP4Plg5%2FIOG5IeRsxi6Vqa8q%2BG18x2qvElqqbp0ccDqo0WfQPk7%2BlGSrKsGW%2BA%2BqQTIrS8ESc%2BnHr0gr3kqCQ29u6YQmLWFnJI0pBPdRJpx0Pa5eCvpBec%2BCTYio%2BPRIwVFsd8VVzZmv5HMuOxesrzfiHhsK3PNfKtd9RRl%2F%2F4PTmGLtiVVH0odsbqeVptlUUR6j5OajdPWpF8rJiv9EEWDPtBri7x7Oy%2F0yKqF4WpaFRcZpSok2mSBvEqZnei66zZgd1WgW9CNuEdQMbtS%2BeGQbFufwfIhrVpxUKOfN4d4D7QSnuC0dxLiMTGaLBJ7H5HyqkhZDyFueMhOFGAZD1nBFiO7U%2BjZtkIwJPlJcVw6IQhC6Vna6g3NuAiIAs1Y06XDdX5qTnU8MZLO0s2XwUJrN8idHWcuu5U7L78QyLuUR4Ojj0bj%2BcIbJNFYp3fo6Dee7aKHG1YWGFAV33fS2NOgNa5gvDdyMbw9FjObCqip%2BB%2BvqnNePIQpOqVjclk4fSaY%2FmDBnNUSoHq%2FvNQqxC6D7k6wKjGxImp7lfVtXySTbtRZxFbIS47OOMNv8zskGOqUB8UUFhOT910VurE7zHSpg07MxkbZN%2B17Q87fWHlMC4ans9l3kNcbVKTKU4RbYDbqzN8r7TvHHC0SN7fcPc1Tsv6tN4IIU49QJXzIq90tfD05gy09FjMNbdez480m1qQp6BkAKx%2B0QGf%2B6L2YYLx9N8BjTnAqibblWn89SBzwtrehSveTlApfFKoTJku3MNhI2djb%2FB%2BFOAV4A20YXU2GdvBMA8PbI&X-Amz-Signature=ca9a5c19ad7dc21da0a1d7293c3ae3b4524041ed7ffc3716372a6f826b7df441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

