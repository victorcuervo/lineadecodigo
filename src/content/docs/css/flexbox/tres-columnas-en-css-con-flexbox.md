---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2JEMY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNWxhFmkkJU7vsWZpdWi6fFQmROtYi1qPM54XdOo6TwIhAOAa7Gz5jdds20xuZRrmGljDG4ztkKka%2BT9gQ0FGH%2FyvKv8DCHoQABoMNjM3NDIzMTgzODA1Igx9sZNQGtz%2BgEd6GPUq3ANL6JxTKty7RiS70BIGjI6wOJZQcYXPW5V6ptxlOENkjNupDoigErzWtFADNCcL9dHOPCH%2FPnrV6DwRgtvOCYw7t5JEAjT8xVCszLs3ju1nNZJh6eAJxfTqM9DnQ%2FRP1R2Fpowz7yxYchw8DQx6r66igbdFHarVL0HoH%2FSVHoVOI0borp%2BfC4KWX51ZbZdyp6QwpDNF6VWa4nZKqV5bZzYWxX%2BZCDoaEH1CYiWCDYH2ZMLMM9KGC%2FRy6Eb5ZNSyKFNeLlPA1cK6R%2FceVMkiJqbYPtMfZ9nBJ7wmUGGGC6pyL5%2FH9wixpUTpCoX8cx6ktarv1Ry5z6tDB%2F3oIkmGugQSLceTKt9a0giqymOeeuqEMm7wA6bOaFEMkbX7Y4uS8ju8LInuhDOHCsopiaW6d5Kf0WIBZrmStXpkS5kh%2F9oDGRKrPCq2a%2BQdc%2FiXgzsdSBfEkeZI%2B2kiKObSKOQ5hdpO5H0rO2tNUfI%2F%2FMqMU2AwplXuG3UErju05muJFQMpVCIDlI%2B7%2BaI22zhoME2tnlmt75LtNojmrsdmdM2Z3C9dSsQpsu8SHfCTTyqpbpPwmD%2B77i8cGmVcT%2FytP%2FhDI7%2BYPBZqQpcaWUcaqwMr7sUKgOSBJaOBJel6YdCBCzCSyNHJBjqkAbT7oBfxLl1uvRSzYNrNvRY%2BmyquXgnsyBAW5VoLqz70VU3FPFKbNtASq0sttYgf0cuDO3Ei%2FLY14DTwIKxvNIdwYnnjtQuE8vXoN35kDZkYQVG00Y5RFkZ9BkAzf7qgIzwtR8UUEny2P7dWNQ5yKWGJzcPPzfYHakHxtQ7WF12GuyRrJa3h9VuxXRn%2FGgAjs8kb8XfA8AIdnZt0Lca4HabcZkFy&X-Amz-Signature=346104206fb43cdd861daf101046c685f605753ad2ae2ac89323ce44fc50a0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2JEMY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNWxhFmkkJU7vsWZpdWi6fFQmROtYi1qPM54XdOo6TwIhAOAa7Gz5jdds20xuZRrmGljDG4ztkKka%2BT9gQ0FGH%2FyvKv8DCHoQABoMNjM3NDIzMTgzODA1Igx9sZNQGtz%2BgEd6GPUq3ANL6JxTKty7RiS70BIGjI6wOJZQcYXPW5V6ptxlOENkjNupDoigErzWtFADNCcL9dHOPCH%2FPnrV6DwRgtvOCYw7t5JEAjT8xVCszLs3ju1nNZJh6eAJxfTqM9DnQ%2FRP1R2Fpowz7yxYchw8DQx6r66igbdFHarVL0HoH%2FSVHoVOI0borp%2BfC4KWX51ZbZdyp6QwpDNF6VWa4nZKqV5bZzYWxX%2BZCDoaEH1CYiWCDYH2ZMLMM9KGC%2FRy6Eb5ZNSyKFNeLlPA1cK6R%2FceVMkiJqbYPtMfZ9nBJ7wmUGGGC6pyL5%2FH9wixpUTpCoX8cx6ktarv1Ry5z6tDB%2F3oIkmGugQSLceTKt9a0giqymOeeuqEMm7wA6bOaFEMkbX7Y4uS8ju8LInuhDOHCsopiaW6d5Kf0WIBZrmStXpkS5kh%2F9oDGRKrPCq2a%2BQdc%2FiXgzsdSBfEkeZI%2B2kiKObSKOQ5hdpO5H0rO2tNUfI%2F%2FMqMU2AwplXuG3UErju05muJFQMpVCIDlI%2B7%2BaI22zhoME2tnlmt75LtNojmrsdmdM2Z3C9dSsQpsu8SHfCTTyqpbpPwmD%2B77i8cGmVcT%2FytP%2FhDI7%2BYPBZqQpcaWUcaqwMr7sUKgOSBJaOBJel6YdCBCzCSyNHJBjqkAbT7oBfxLl1uvRSzYNrNvRY%2BmyquXgnsyBAW5VoLqz70VU3FPFKbNtASq0sttYgf0cuDO3Ei%2FLY14DTwIKxvNIdwYnnjtQuE8vXoN35kDZkYQVG00Y5RFkZ9BkAzf7qgIzwtR8UUEny2P7dWNQ5yKWGJzcPPzfYHakHxtQ7WF12GuyRrJa3h9VuxXRn%2FGgAjs8kb8XfA8AIdnZt0Lca4HabcZkFy&X-Amz-Signature=39edcd7d64f89c7897c31ca6536d900c31905b6ac5506fa7a2a859294b863be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

