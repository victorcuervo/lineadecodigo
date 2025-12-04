---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXNEVPR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1ZRk%2BmjV2911CBvO3CMi2mZpr%2FU4Y0X%2BpFiPknGOxkAIhAOkqiWWpzt6vmq3GuTppIUg1pTY%2FHD05V7AW1LOarR13Kv8DCEQQABoMNjM3NDIzMTgzODA1IgxhyjWjJIE5yVrcV20q3AOeyKw3eCSZLMqvxZHc0Djm0bVYh17DclryodJvNViPuUx4TWdhpXwK2LaU6owa4JxNv3T63HsqIdXVCtACd7qwL45f6%2FXJcn%2FY5d%2BK0GUE5Azto40jDWvQEbve%2FyrFLqoXBITkmCLtkOPZ7s5yZT3nR8nVQQYJKbHFW2BL6EbSCrr0SjVt1tFw88nzF%2FJMKSFrO28ur7Im0h%2BRk7lJvgceXNOLxH37tncq3hM3%2FrWE4pOD%2FjUyU0GmwppKDPwX91RYox8mUhTjBQc1pUm0fps4HGR1ClT3bDHvUvPeEJTi9R9pY8K2dBtkdlDVeDP7GxS8fgqx9O4HcW1%2BfiZENBEqJLTeO3sl9jt7XEunm8tr4I%2FVU2QFeOtJK5wBjOgINLV2dxmPJt16Go8qChlygQkf4Dj57RuidSy20mN7p54VzJC56NRq8KSmLbq62dEp3M3TcSSS8EPTb6kLW4H6%2BEGs%2FmrJRaKmgiWS69lgoRgazSvqiWIGY4YW4bSleslNSXaRhG0cDuQs%2F33JH3Cf0rtzJqs%2FT5Ami9707snWPaftknzozFXcvsbPkUN4Qp8SaBD6mg7VIraP0mwVOH8wFNggYkI4RySf82B9MJOyz2eUxB2gVVzqzvD3oXjizzCKycXJBjqkATwlFi%2BwapEmtyHvCF1%2F%2BRInZ7ikeTMIu1PKeu9Q%2FYSYGnSmQIaef0dA62hx4rPVtitdirU%2FelobOmEAUt2L%2BzrSSxV00GCruFHTkxJi3HLBdZI9%2BDibaekAhhZCJMJvcK2nUTgIXTmatwFX0EoN5kj3NeLwIdU6RkPTwxw0jMIOyapzFUIvjNh%2BRaHjronfG9l04JBNzJ2Q9CBiXDEGFqAlrZLP&X-Amz-Signature=5a85de6a7b3a95d110fa0b1c8bb18768174665469d65c0492afc355fe839f9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXNEVPR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1ZRk%2BmjV2911CBvO3CMi2mZpr%2FU4Y0X%2BpFiPknGOxkAIhAOkqiWWpzt6vmq3GuTppIUg1pTY%2FHD05V7AW1LOarR13Kv8DCEQQABoMNjM3NDIzMTgzODA1IgxhyjWjJIE5yVrcV20q3AOeyKw3eCSZLMqvxZHc0Djm0bVYh17DclryodJvNViPuUx4TWdhpXwK2LaU6owa4JxNv3T63HsqIdXVCtACd7qwL45f6%2FXJcn%2FY5d%2BK0GUE5Azto40jDWvQEbve%2FyrFLqoXBITkmCLtkOPZ7s5yZT3nR8nVQQYJKbHFW2BL6EbSCrr0SjVt1tFw88nzF%2FJMKSFrO28ur7Im0h%2BRk7lJvgceXNOLxH37tncq3hM3%2FrWE4pOD%2FjUyU0GmwppKDPwX91RYox8mUhTjBQc1pUm0fps4HGR1ClT3bDHvUvPeEJTi9R9pY8K2dBtkdlDVeDP7GxS8fgqx9O4HcW1%2BfiZENBEqJLTeO3sl9jt7XEunm8tr4I%2FVU2QFeOtJK5wBjOgINLV2dxmPJt16Go8qChlygQkf4Dj57RuidSy20mN7p54VzJC56NRq8KSmLbq62dEp3M3TcSSS8EPTb6kLW4H6%2BEGs%2FmrJRaKmgiWS69lgoRgazSvqiWIGY4YW4bSleslNSXaRhG0cDuQs%2F33JH3Cf0rtzJqs%2FT5Ami9707snWPaftknzozFXcvsbPkUN4Qp8SaBD6mg7VIraP0mwVOH8wFNggYkI4RySf82B9MJOyz2eUxB2gVVzqzvD3oXjizzCKycXJBjqkATwlFi%2BwapEmtyHvCF1%2F%2BRInZ7ikeTMIu1PKeu9Q%2FYSYGnSmQIaef0dA62hx4rPVtitdirU%2FelobOmEAUt2L%2BzrSSxV00GCruFHTkxJi3HLBdZI9%2BDibaekAhhZCJMJvcK2nUTgIXTmatwFX0EoN5kj3NeLwIdU6RkPTwxw0jMIOyapzFUIvjNh%2BRaHjronfG9l04JBNzJ2Q9CBiXDEGFqAlrZLP&X-Amz-Signature=b939124fa6b97453ca9e8968a560c9bb428b6bf16dcdf1ca240d51d2df057124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

