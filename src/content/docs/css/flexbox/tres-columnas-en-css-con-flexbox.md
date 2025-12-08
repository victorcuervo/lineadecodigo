---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BC5DOH4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhjgY%2Bg1SkFqSNXKKGkK%2B3aOQ%2Fx7zhheN7XgRbbmlOOAiEAmfIhOl%2F4CzOrn6CtkRd0eRwlRLnYdHbJGHdXPIZh3j0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgWcldNd3S7okcZFircA5sTpfIw6nmA5NMs4krOBd%2F2XqA5S8VyICr%2FDxolcvEIIgochGuA09U2KOaXZl3yuFGqdJdH1sNJWOEn22pebKiGEZn77YOkQf8eafffkeBAJTdkRcA9OYA5B9myw8K4gveKHdoCnyGVITm%2F3mO%2B%2B78nTeg9xmQP6n1aiGKKKYPmoRj3397mje75LqQOsn6VRor%2Fki1LtJIbvFVmkEEqySX0PFBJKa77%2BHpx2mF0yVkwtwhQFZNrj9rnZTifiizK16ZXJNTuaTXIhVEJN6b3oVbcvE4%2Fti8dgvwrLecRjOiArnbSVA%2BzV9F8rxFb8HdHDFBpu31fb%2B%2BBLf5S8DUjB1Jidun4hfMoJLCD1SV24oMx4OpYtEkcL9brgUsEHn2Xma9Tev092RowTU9AtCoIsfCEBe%2BBnX4zrwQ1FR5CCeCVyEBAzx%2FPUreqyG12wS1Mcz2w9cSJwuV3bOlkixjLs5fjkmmBMjMprLD0ccXBECjFT3vQ8oYlAhK3Nx%2FU2wL5g2dSOiJLb%2BH9uhVImHK3GeCOB8ppGZ0QhVzoyjKpFeIbexyq4rc%2Fa0V3%2FGwzdKBTw5IJCmzJYyLISibkLreIgZMDqtzWcMJbYsj2swz4nVd7rYQV7fuNJXXYKnRsMLTv2MkGOqUBGdWv0RJ%2FeGXOH9Aqz67O4YNVC82iT%2BQYIGcr2id%2FtJxMyZXdqNZJcMojRPfUIrAHxcXw1WHXa0Zs%2F9DG8%2BCVbZzLaEErdurK%2FnkxM%2FpQIz6dzozlSJLvAQ5ZMNvZJvif1hKC2z%2FbMDJ3yioJ8zG9MX5MhrGoF75jmspECYHRA7Fp7rh7OMbzEb%2BSKnqWBGH6hsDdgF5btRioHP%2F8GY6V3dfKPKI0&X-Amz-Signature=68d4cf255550a7f658750d8842e0f66afc664a99a75741e07fd49c93728dcd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BC5DOH4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhjgY%2Bg1SkFqSNXKKGkK%2B3aOQ%2Fx7zhheN7XgRbbmlOOAiEAmfIhOl%2F4CzOrn6CtkRd0eRwlRLnYdHbJGHdXPIZh3j0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgWcldNd3S7okcZFircA5sTpfIw6nmA5NMs4krOBd%2F2XqA5S8VyICr%2FDxolcvEIIgochGuA09U2KOaXZl3yuFGqdJdH1sNJWOEn22pebKiGEZn77YOkQf8eafffkeBAJTdkRcA9OYA5B9myw8K4gveKHdoCnyGVITm%2F3mO%2B%2B78nTeg9xmQP6n1aiGKKKYPmoRj3397mje75LqQOsn6VRor%2Fki1LtJIbvFVmkEEqySX0PFBJKa77%2BHpx2mF0yVkwtwhQFZNrj9rnZTifiizK16ZXJNTuaTXIhVEJN6b3oVbcvE4%2Fti8dgvwrLecRjOiArnbSVA%2BzV9F8rxFb8HdHDFBpu31fb%2B%2BBLf5S8DUjB1Jidun4hfMoJLCD1SV24oMx4OpYtEkcL9brgUsEHn2Xma9Tev092RowTU9AtCoIsfCEBe%2BBnX4zrwQ1FR5CCeCVyEBAzx%2FPUreqyG12wS1Mcz2w9cSJwuV3bOlkixjLs5fjkmmBMjMprLD0ccXBECjFT3vQ8oYlAhK3Nx%2FU2wL5g2dSOiJLb%2BH9uhVImHK3GeCOB8ppGZ0QhVzoyjKpFeIbexyq4rc%2Fa0V3%2FGwzdKBTw5IJCmzJYyLISibkLreIgZMDqtzWcMJbYsj2swz4nVd7rYQV7fuNJXXYKnRsMLTv2MkGOqUBGdWv0RJ%2FeGXOH9Aqz67O4YNVC82iT%2BQYIGcr2id%2FtJxMyZXdqNZJcMojRPfUIrAHxcXw1WHXa0Zs%2F9DG8%2BCVbZzLaEErdurK%2FnkxM%2FpQIz6dzozlSJLvAQ5ZMNvZJvif1hKC2z%2FbMDJ3yioJ8zG9MX5MhrGoF75jmspECYHRA7Fp7rh7OMbzEb%2BSKnqWBGH6hsDdgF5btRioHP%2F8GY6V3dfKPKI0&X-Amz-Signature=fe9857e29c9b236746a916c9ce29e3a7b1e621f96c8d42643b2bff94099fc505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

