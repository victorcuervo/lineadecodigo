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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWO6AAXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCKSHF2XPdmhI4331iEcZVslVlPM%2FxGt1jKJvuZ8%2FJxhgIhAONLrY%2FnGy6dHbteCJ3oBn9pW8M4VjLVf4x64mKvSayQKv8DCC0QABoMNjM3NDIzMTgzODA1IgwcyUN3IRfJ%2Fi6MmKgq3ANclTrCQGuZHi97iciyRrabkIVasvN2osWdRYjm6CpwMljAGb%2Bb9X36sPQ3EHe%2Bcz57NpMmoMjc8hHm4Jyhxs4bMKKqbr%2BZldhIWWw4msReXqL6BKgqIo1ou6N4A3%2FNHEKYrVEyx%2BA9eJVapm00vpgfkOVW6%2BKDysRcnABOwyOMKud0IsIK7vyXkRhMO6bCyp3o3anl%2BevrcyA5X6UYBCUjU7SyIAr%2FXNye%2BcSX0LqOIoDLboIclq0x4D4wE%2BHxy1eGNjrHTovZgfQ4FMKNtMfuo%2FtT0dAPL6aHv8wouwp2IFtuIqUQa7VLXTN8XyRJXbIabSv4pNQ2diiNlvT30hs3GpovyBxTX5ct3QSfEsHFWHq1lRxoySTZjjp9q%2F4gZO2hdiI%2FpscXhU14mmrRbKpuOVxbnzOXqGv9IzmdGWP5tX%2BqNZhdikd9%2BOGRe08IzL%2BtOTdmmoRr7soM1utlhtD6Qt7rlmIKQ4F1lbS3vhJ%2BfiBaglK5uqCa4CRGBF9IraVaOiNDUxSzvHzDczHuU3ClSah33UtDQU%2BaTWdvQYrWLttwsi79%2B0Ofjo%2FiAXE5OkIC1hs0MEa7qGdOms1AhxvS55yl4WTwoOunzZqtyz0s8RyjCw5lWn8JkHUxXjDBzcDJBjqkARRJDoj2n%2FIAaKTz8G760KtHL%2FpHK8q0N93lRMG%2BkGr38YaDVFwGtLGh8vjazSjPvrI4G2qhlG7B9rze0EWaCvZA6dNTKvL0CtzPJhSc%2BkkfovzD%2FpzpRqgMY4SeVzfcFB5p%2BqXoEzhUIDrHwQ0qRHMekJ3oRxf4fZDrI3TYLzDRQk730760kuu%2Fk9w8imGTASXlITnvpk34w9x5MWi2pgc5qyu2&X-Amz-Signature=c635e4c216a022f39d744ef9b6a4205d9a8b7fcffeb75f8507dcc7e572eae677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWO6AAXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCKSHF2XPdmhI4331iEcZVslVlPM%2FxGt1jKJvuZ8%2FJxhgIhAONLrY%2FnGy6dHbteCJ3oBn9pW8M4VjLVf4x64mKvSayQKv8DCC0QABoMNjM3NDIzMTgzODA1IgwcyUN3IRfJ%2Fi6MmKgq3ANclTrCQGuZHi97iciyRrabkIVasvN2osWdRYjm6CpwMljAGb%2Bb9X36sPQ3EHe%2Bcz57NpMmoMjc8hHm4Jyhxs4bMKKqbr%2BZldhIWWw4msReXqL6BKgqIo1ou6N4A3%2FNHEKYrVEyx%2BA9eJVapm00vpgfkOVW6%2BKDysRcnABOwyOMKud0IsIK7vyXkRhMO6bCyp3o3anl%2BevrcyA5X6UYBCUjU7SyIAr%2FXNye%2BcSX0LqOIoDLboIclq0x4D4wE%2BHxy1eGNjrHTovZgfQ4FMKNtMfuo%2FtT0dAPL6aHv8wouwp2IFtuIqUQa7VLXTN8XyRJXbIabSv4pNQ2diiNlvT30hs3GpovyBxTX5ct3QSfEsHFWHq1lRxoySTZjjp9q%2F4gZO2hdiI%2FpscXhU14mmrRbKpuOVxbnzOXqGv9IzmdGWP5tX%2BqNZhdikd9%2BOGRe08IzL%2BtOTdmmoRr7soM1utlhtD6Qt7rlmIKQ4F1lbS3vhJ%2BfiBaglK5uqCa4CRGBF9IraVaOiNDUxSzvHzDczHuU3ClSah33UtDQU%2BaTWdvQYrWLttwsi79%2B0Ofjo%2FiAXE5OkIC1hs0MEa7qGdOms1AhxvS55yl4WTwoOunzZqtyz0s8RyjCw5lWn8JkHUxXjDBzcDJBjqkARRJDoj2n%2FIAaKTz8G760KtHL%2FpHK8q0N93lRMG%2BkGr38YaDVFwGtLGh8vjazSjPvrI4G2qhlG7B9rze0EWaCvZA6dNTKvL0CtzPJhSc%2BkkfovzD%2FpzpRqgMY4SeVzfcFB5p%2BqXoEzhUIDrHwQ0qRHMekJ3oRxf4fZDrI3TYLzDRQk730760kuu%2Fk9w8imGTASXlITnvpk34w9x5MWi2pgc5qyu2&X-Amz-Signature=c716801877c4bf84149f0c0b34600d4da2662a8d89631f90d42bbb19895e741a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

