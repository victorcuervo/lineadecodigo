---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HX5QHZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoa2SNsZKL8W2lt42xROZHuu%2F9FTP9DUSUE83k2sNSLQIgUhHeFtnAy3LPueaS8dDuwKJdtsBffthLsENUC92pNAoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAwykC17U%2F4wFCnYyrcA4kBewaFksidLLvboEjZFR13WTSrsxi6P7rjY5%2BuWMJlt693oyCtG6hzvYG3%2FvgS1CroNvYAvOhVtcoJKEmyRXnSlmwUqKjEX%2FBX4x6xgEYWHuEpdG1VvMUf%2Bn3dZm7FBXbeWW9H5g57SblKokzk9I7sMZcdEbKzPT3m7KSh6G6lLpxhIz7JhrULRiIYZHG6gy%2BFrIDmxwvMMHO8eSn2VxwC8N1R9DRD00Wgb1SbaAxjhTg4mGXL3aXWVcOUQzZvasSM1iaUL%2FofjOEDfkXbyFVZaGxghHC7J1H8SCOT%2FBe8YhlcH20Xd%2BQpfbA8ca%2FHe3egyeDGKdLwo6ggfVHD%2Fw3ce2dBwK6Fo1QJXCxQ67hu7ixatyuUCDI95N%2BAvPzNeerYa3ZeejLVbl9dx0a61MXr52zUgNX9HAnagabRjjfdwnLXefjVrLIbMJ3ibENmxOYN4YHyOoNzk0CKM%2FnxPs23fKryk7iystYosWPQdj6y1%2FYoHRu%2F39BzxAurMI%2BQV8%2FM%2ByQuUq4SysrAtfFyILQlt1IK4QBWyaZ3Y8gCnWOSKZX%2F8hJFNWkLTiLaWH0nhD9c7Wut%2FtXoCa35XyN2UKnjk%2B4ePYe9o4svpbl1dS4ggBU9QSJmjBS4jqn1MJ%2BH3MkGOqUB1j%2B7uaz5cAGQUZ0cZxB2mBNY6Zhu9EWl2sVbSOoD0sT5YXsUC9cNWXq%2FoJuZqbiakFG%2Bh6S%2BYUav0Tm1p6lCJx98OqjiV5SScoRK5AiMgWhUsX%2FcecK%2BzIM37lrSRSRwUrhq0aukJOrHHXOZf2KMdZxsAgJf2i8xu5eawA6OjOeOkCV3pANOVoGA8axcrTcMPyKORKsmr6yDTbhvQSnf4WpoqkF%2B&X-Amz-Signature=9ee0e73c633c508e321617bb04ce6eba717acf248daf6118aac980be71330ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HX5QHZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoa2SNsZKL8W2lt42xROZHuu%2F9FTP9DUSUE83k2sNSLQIgUhHeFtnAy3LPueaS8dDuwKJdtsBffthLsENUC92pNAoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAwykC17U%2F4wFCnYyrcA4kBewaFksidLLvboEjZFR13WTSrsxi6P7rjY5%2BuWMJlt693oyCtG6hzvYG3%2FvgS1CroNvYAvOhVtcoJKEmyRXnSlmwUqKjEX%2FBX4x6xgEYWHuEpdG1VvMUf%2Bn3dZm7FBXbeWW9H5g57SblKokzk9I7sMZcdEbKzPT3m7KSh6G6lLpxhIz7JhrULRiIYZHG6gy%2BFrIDmxwvMMHO8eSn2VxwC8N1R9DRD00Wgb1SbaAxjhTg4mGXL3aXWVcOUQzZvasSM1iaUL%2FofjOEDfkXbyFVZaGxghHC7J1H8SCOT%2FBe8YhlcH20Xd%2BQpfbA8ca%2FHe3egyeDGKdLwo6ggfVHD%2Fw3ce2dBwK6Fo1QJXCxQ67hu7ixatyuUCDI95N%2BAvPzNeerYa3ZeejLVbl9dx0a61MXr52zUgNX9HAnagabRjjfdwnLXefjVrLIbMJ3ibENmxOYN4YHyOoNzk0CKM%2FnxPs23fKryk7iystYosWPQdj6y1%2FYoHRu%2F39BzxAurMI%2BQV8%2FM%2ByQuUq4SysrAtfFyILQlt1IK4QBWyaZ3Y8gCnWOSKZX%2F8hJFNWkLTiLaWH0nhD9c7Wut%2FtXoCa35XyN2UKnjk%2B4ePYe9o4svpbl1dS4ggBU9QSJmjBS4jqn1MJ%2BH3MkGOqUB1j%2B7uaz5cAGQUZ0cZxB2mBNY6Zhu9EWl2sVbSOoD0sT5YXsUC9cNWXq%2FoJuZqbiakFG%2Bh6S%2BYUav0Tm1p6lCJx98OqjiV5SScoRK5AiMgWhUsX%2FcecK%2BzIM37lrSRSRwUrhq0aukJOrHHXOZf2KMdZxsAgJf2i8xu5eawA6OjOeOkCV3pANOVoGA8axcrTcMPyKORKsmr6yDTbhvQSnf4WpoqkF%2B&X-Amz-Signature=8ef33eb25d0eb653ad77fcefcae7b6d2295bc649a3fbfb9d131f52fb626b5149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

